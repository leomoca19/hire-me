import { Container } from 'react-bootstrap'
import MainNav from '@/components/MainNav'
import Footer from '@/components/Footer'

export default function Layout(props) {
  return (
    <>
      <MainNav />
      <br />
      <br />
      <Container>{props.children}</Container>
      <br />
      <Footer />
    </>
  )
}
