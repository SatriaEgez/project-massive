import FaqComponent from "../components/FaqComponent"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const KontakPage = () => {
  return (
    <div className="kontak-page">
     <div className="kontak w-100 min-vh-100">
     <Container >
        <Row>
          <Col>
             <h1 className="fw-bold text-center">Contact US</h1>
              <p className="text-center">Silahkan tinggalkan pesan anda, pada Form yang tersedia</p>
          </Col>
        </Row>
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nama anda" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan email anda" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Pesan</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Masukkan pesan anda" />
            </Form.Group>
            <div className="text-center">
            <Button className="mt-3 w-100" variant="success" type="submit">
              Kirim Pesan
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
      </Container>  
     </div>
    
    <FaqComponent />
   </div>
  )
}

export default KontakPage
