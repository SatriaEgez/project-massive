import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <div className="footer py-5">
   <Container>
    <Row className="d-flex justify-content-between"> 
      <Col lg="5">
        <h3 className="fw-bold">Fruvego</h3>
        <p className="desc"> 
            Fruvego adalah sebuah platform App dan Website yang menyediakan 
            berbagai macam sayur dan buah.Diluncurkan tahun 2023 dengan  
            menyediakan pengalaman pencarian berbagai macam sayur  
            dan buah yang segar, mudah, dan cepat bagi pengguna.</p>
            <div className="no">
              <Link className="text-decoration-none">
              <i className="fa-brands fa-whatsapp"></i>
              <p className="m-0">+62 819-1376-0627</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
              <i className="fa-regular fa-envelope"></i>
              <p className="m-0">fruvegowebsite@gmail.com</p>
              </Link>
            </div>
      </Col>
      <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
      <h5 className="fw-bold">Menu</h5>
      <Link to="">Home</Link>
      <Link to="kategori">Kategori</Link>
      <Link to="about">About US</Link>
      <Link to="kontak">Contact US</Link>
      <Link to="seller">Seller</Link>
      </Col>
      <Col lg="4" className="mt-lg-0 mt-5">
      <h5 className="fw-bold mb-3">Follow Sosial Media Kami Untuk Info Menarik !</h5>
        <div className="pesan">
          <input type="text" placeholder="Massukan pesan anda" />
          <button className="btn btn-success rounded-end rounded-0">Kirim</button>
        </div>
      
        <div className="social mt-3">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        
      </Col>
    </Row>
    <Row>
      <Col>
      <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Fruvego</span>, All Right Reserved</p>
      </Col>
    </Row>
   </Container>
  </div>
  );
}


export default Footer
