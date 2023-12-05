import FaqComponent from "../components/FaqComponent"
import { Container, Row, Col } from "react-bootstrap"

const AboutPage = () => {
  return (
    <div className="about-page">
     <div className="about w-100 min-vh-100">
     <Container>
      <Row>
        <Col>
         <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">About US</h1>
         <h5 className="text-center animate__animated animate__fadeInUp animate__delay-1s mt-6 d-flex justify-content-between mt-4">Selamat datang di Fruvego - Mitra Pilihan untuk Kesehatan dan Kesejahteraan Anda! Kami bangga menjadi mitra Fruvego, yang berkomitmen untuk menyediakan buah dan sayur segar berkualitas tinggi. Fruvego adalah sebuah platform App dan Website yang menyediakan berbagai macam sayur dan buah. Diluncurkan tahun 2023 dengan menyediakan pengalaman pencarian berbagai macam sayur dan buah yang segar, mudah, dan cepat bagi pengguna. Dengan semakin berkembangnya teknologi digital komunikasi dan informasi kami ingin memanfaatkannya dengan menyediakan platform toko online sayur dan buah yang menghubungkan penjual dan pembeli. Fruvego corporation menyediakan berbagai sayuran dan buah favorit anda dan layanan untuk selalu memenuhi kebutuhan konsumen tanpa hambatan. </h5>
        </Col>
      </Row>
    </Container>
     </div>
     <FaqComponent />
   </div>
  )
}

export default AboutPage
