import { Container, Row, Col, Card, Button } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";
import Hero from "../assets/img/farmer.png"
// import Hero1 from "../assets/img/mitra_sayur.png"
// import Hero2 from "../assets/img/mitra_buah.png"
import { sellerFarmer, Mitra } from "../data";

const SellerPage = () => {
  return (
    <div className="seller-page">
    <div className="seller w-100 min-vh-100">
     <Container>
        <Row>
          <Col>
             <h1 className="fw-bold text-center">Seller Center</h1>
              <p className="text-center">Mau mulai jualan? yuk daftarin produk kamu di fruvego!</p>
          </Col>
        </Row>
        <Row className="text-center mb-5">
        {sellerFarmer.map((seller) =>{
          return(
            <Col key={seller.id} className="shadow-rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={seller.delay}>
              <img src={seller.image} alt="fruvego.com" className="w-100 mb-5 rounded-top" />
              <h5 className="text-center mb-4">{seller.title}</h5>
              <p className=" text-center">{seller.desc}</p>
              <button className=" text-center btn btn-success mb-5">{seller.btn}</button>
            </Col>
           
          );
        })}
          </Row>
          <Row>
          <Col>
             <h1 className="fw-bold text-center">Daftar Mitra</h1>
              <p className="text-center">Rekomendasi Buah-Buahan Dan  Sayuran</p>
          </Col>
        </Row>
          <Row>
          {Mitra.map((mitra) =>{
          return(
            <Col key={mitra.id} className="shadow-rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={mitra.delay}>
              <img src={mitra.image} alt="fruvego.com" className="w-100 mb-5 rounded-top" />
              <h5 className="text-center mb-4">{mitra.title}</h5>
              <button className=" text-center btn btn-success">{mitra.btn}</button>
            </Col>
           
          );
        })}
          {/* <Col>
             <h1 className="fw-bold text-center">Daftar Mitra</h1>
              <p className="text-center">Rekomendasi Buah-Buahan Dan  Sayuran</p>
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col className="text-center">
              <Card className="text-center" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Hero1} />
              <Card.Body>
                <Card.Title>MITRA SAYUR</Card.Title>
                <Button variant="success">Mulai Jualan</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-center">
              <Card className="text-center" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Hero2} />
              <Card.Body>
                <Card.Title>MITRA BUAH</Card.Title>
               
                <Button variant="success">Mulai Jualan</Button>
              </Card.Body>
            </Card>
          </Col> */}
          </Row>
      </Container>  
     </div>
   
    <FaqComponent />
   </div>
  )
}

export default SellerPage
