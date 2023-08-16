

    import React from "react";
    import Nav from 'react-bootstrap/Nav';
    import foto1 from '../assets/images/shopia/call__001_555_801___3895.png'
    import foto2 from '../assets/images/arrivel/ellipse_1_882.png'
    import foto3 from '../assets/images/shopia/call__001_555_801___3895.png'





    function Rovs(props) {

      return(
      <div className="rovs">
      <div class="row">
        <div class="col-md-12 col-sm-12 mb-5 mt-5">
      <nav class="navbar navbar-expand-lg navbar-light p-0 ">
        <div class="container">
        <div class="collapse collapse-fontsize navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
        <div class="fol d-block">
        <form class="d-flex mb-3 me-4" role="search">
          <input class="form-control me-2" type="text" placeholder="HELLO, YOU CAN LOGIN OR REGISTER" aria-label="Search"/>
          <button class="btn btn-warning" type="submit">REGISTER</button>
        </form>
             <a class="navbar-brand logo" href="/"><img class="kgh" src={foto1} alt="logo" /><i class="fa-solid fa-phone aq"></i></a>
          <form class="d-flex mt-3" role="search">
            <input class="form-control me-2" type="search" placeholder="SEARCH" aria-label="Search"/>
          </form>
        </div>
        <div class="cont">
            <a href="#"><img class="cd"  src={foto2} alt=""/></a>
            <div className="nio">
            <div class="centered mb-1">Your Logo</div>
            <div class="centered1">ECOMMERCE</div>
            </div>
            </div>
            <div class="icons">
          <div class="fol d-block">
            <div>
               <a class="navbar-brand logo" href="/"><img class="kgh" src={foto3} alt="logo" /></a>
               </div>
              <form class="d-flex mb-3" role="search">
              <input class="form-control me-2 dfp" type="text1" placeholder="SHOW ALL PRODUCTS" aria-label="Search"/>
              <button class="btn btn-warning" type="submit">CHECK</button>
            </form>
          </div>
            </div>
          </div>
          </div>
      </nav>
    </div>
  </div>
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >

      <Nav.Item >
        <Nav.Link  href="/home">JACKETS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">SWEATERS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">DRESSES</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">SKIRTS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">PANTS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">SHORTS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">SHOES</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">ACCESSORIES</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}





  export default Rovs;