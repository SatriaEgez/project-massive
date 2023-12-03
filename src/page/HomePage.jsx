import {Container, Row, Col} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { kategoriTerbaru } from "../data/index"


const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
     <header className="w-100 min-vh-100 d-flex align-items-center mb-5">
     <Container>
      <Row className="header-box ">
        <Col>
        <h1 className="display-3 text-center mt-5">
          Selamat Datang!
        </h1>
        <p className="display-6 text-center mt-5">
        Fruvego platform sayuran & buah segar <br />
        "Dari Kebun ke Keranjang Anda, Tanpa Keluar Rumah!"
        </p>
        </Col>
      </Row>
     </Container>
     </header>  
    <div className="kategori w-100 min-vh-100">
      <Container>
        <Row>
           <Col>
               <h1 className="text-center fw-bold">Kategori</h1>
                <p className="text-center">sayur, buah, dan bumbu dapur merupakan bagian integral dari dunia kuliner dan dapur. </p>
          </Col>
        </Row>
        <Row>
        {kategoriTerbaru.map((kategori) =>{
          return(
            <Col key={kategori.id}>
              <img src={kategori.image} alt="fruvego.com" className="w-100 mb-5 rounded-top" />
              <h5 className="text-center mb-4">{kategori.title}</h5>
            </Col>
           
          );
        })}
        </Row>
        <Row>
          <Col className="text-center">
           <button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate("/kategori")}>
            Lihat Semua Kategori<i className="fa-solid fa-chevron-right ms-1"></i></button>
          </Col>
        </Row>
      </Container>
    </div>
     <div className="w-100 min-vh-100"></div>
    </div>
    
  )
}

export default HomePage
