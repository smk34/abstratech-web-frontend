import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';


function Header() {
  return (
    <Navbar className="flex justify-content-between p-4">
      <Navbar.Brand href="#home">
        <img src="/images/logo.jpeg" alt="logo" width={100} height={80} />
      </Navbar.Brand>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className="text-md">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" className="active">Menu</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Header;
