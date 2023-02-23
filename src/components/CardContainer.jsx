import { useState } from "react";
import { Col, Row, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import data from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = ({ name, img, statistics }) => {
  const [search, setsearch] = useState("");
  console.log(search);

  // const {name, img, statistics} = props;
  // console.log(data);
  return (
    <>
      <Form.Control 
        placeholder="Search Boxer..." 
        type="search" 
        className="m-auto w-50 text-center"
        onChange={(e)=>setsearch(e.target.value)}
        />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-4 justify-content-center">
          {data.filter((player)=> 
          player.name.toLowerCase().includes(search.trim().toLowerCase()))
          .map((player, id) => (
            <Col md={6} lg={4} xl={3}  key={id}>
              <PlayerCard {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default CardContainer;

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import { data } from "../helpers/data";
// import PlayerCard from "./PlayerCard";
// import { useState } from "react";

// const [search, setSearch] = useState("");
// console.log(search);

{
  /* <Form.Control
        placeholder="Search Player..."
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      /> */
}

{
  /* <Row className="g-3 justify-content-center">
          {data
            .filter((player) =>
              player.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((player, i) => {
              return (
                <Col md={6} lg={4} xl={3} key={i}>
                  <PlayerCard {...player} />
                </Col>
              );
            })}
        </Row> */
}
