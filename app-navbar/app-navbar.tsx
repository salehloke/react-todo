import { Navbar, Nav, Container } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface AppNavbarProps {}

export function AppNavbar(props: AppNavbarProps) {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand href="#home">Saleh Loke</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#link1">Todo </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
