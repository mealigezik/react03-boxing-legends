import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import boxingLogo from "../assets/maxresdefault.jpg";
const Header = () => {
  return (
    <Container>
      <Image src={boxingLogo} width="200px" className="rounded-4 border border-warning"></Image>
      <h1 className="my-2 font-monospace display-4 fw-bold">Boxing Legends</h1>
    </Container>
  );
};
export default Header;