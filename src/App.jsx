import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

import HomePage from './page/HomePage'
import KategoriPage from './page/KategoriPage'
import AboutPage from './page/AboutPage'
import KontakPage from './page/KontakPage'
import SellerPage from './page/SellerPage'



function App()  {
  return (
    <div>
    <NavbarComponent />

    <Routes>
      <Route path="/" Component={HomePage}></Route>
      <Route path="/kategori" Component={KategoriPage}></Route>
      <Route path="/about" Component={AboutPage}></Route>
      <Route path="/kontak" Component={KontakPage}></Route>
      <Route path="/seller" Component={SellerPage}></Route>
     </Routes>

    <FooterComponent/>
    </div>
  );
}

export default App
