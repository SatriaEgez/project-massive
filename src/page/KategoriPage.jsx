import { Container, Row, Col } from "react-bootstrap";
import { semuaKategori } from "../data/index";
import FaqComponent from "../components/FaqComponent"

const KategoriPage = () => {
  return (
    <div className="kategori-page">
     <div className="kategori min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Semua Kategori</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">sayur, buah, dan bumbu dapur merupakan bagian integral dari dunia kuliner dan dapur.</p>
            </Col>
          </Row>
          <Row>
          {semuaKategori.map((kategori) =>{
          return(
            <Col key={kategori.id} className="shadow-rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kategori.delay}>
              <img src={kategori.image} alt="fruvego.com" className="w-100 mb-5 rounded-top" />
              <h5 className="text-center mb-4">{kategori.title}</h5>
            </Col>
           
          );
        })}
          </Row>
        </Container>
       
     </div>
     <FaqComponent />
    </div>
  )
}

export default KategoriPage
