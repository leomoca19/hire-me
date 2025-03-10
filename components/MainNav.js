import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
export default function MainNav() {
  return (
    <>
      <Navbar expand="lg" className="navbar-dark bg-dark fixed-top">
        <Container>
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/About" passHref legacyBehavior>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  )
}
