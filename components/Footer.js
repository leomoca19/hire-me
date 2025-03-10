import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap'
import Link from 'next/link'
export default function Footer() {
  return (
    <>
      <Container>
        <Nav>
          <Col>
            <Nav.Item>&copy; {new Date().getFullYear()}</Nav.Item>
          </Col>
          <Col>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/About" passHref legacyBehavior>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Col>
        </Nav>
      </Container>
    </>
  )
}
