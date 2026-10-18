import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import data from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  const normalizedSearch = search.trim().toLocaleLowerCase();
  const filteredPlayers = data.filter((player) =>
    player.name.toLocaleLowerCase().includes(normalizedSearch)
  );

  return (
    <>
      <Form.Control
        aria-label="Search boxers"
        placeholder="Search boxer..."
        type="search"
        className="m-auto w-50 text-center"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-4 justify-content-center">
          {filteredPlayers.map((player) => (
            <Col md={6} lg={4} xl={3} key={player.id ?? player.name}>
              <PlayerCard {...player} />
            </Col>
          ))}
        </Row>
        {filteredPlayers.length === 0 && <p role="status">No boxers match your search.</p>}
      </Container>
    </>
  );
};

export default CardContainer;
