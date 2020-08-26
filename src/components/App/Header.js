import React from 'react';

const Header = () => {
  return (
    <header className="header-area">

      <div className="navbar-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src="assets/images/logo.png" width="150" height="76" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="page-scroll" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about">Transactions</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#footer">Contact</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="https://tronscan.org/#/contract/THx5mtC9ZRj45QV3nSHpXesN3f8iugH3Mw/code">CONTRACT[Verified]</a>
                    </li>
                  </ul>
                </div> {/* navbar collapse */}
                <div className="navbar-btn d-none d-sm-inline-block">
                </div>
                <ul className="social">
                <li><a href="https://t.me/tron_gold"><img id="telegram" border="0" alt="Telegram" src="assets/images/telegram.svg" width="30" height="30"/></a></li>
                </ul>
              </nav> 
            </div>
          </div>
        </div> 
      </div> 



    <div id="home" className="header-hero bg_cover" style={{backgroundImage: 'url(assets/images/banner-bg.svg)'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="header-hero-content text-center mt-100">
              <h3 className="header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s" />
              <h1 className="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">5.6-8.6% Daily ROI</h1>
              <h1 style={{marginTop:35, color:"red"}} className="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">5% DIRECT REFERRAL COMMISSION</h1>
              
              <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Decentralized &amp; Secure Smart Contract Fund.</p>
              <div id="main-invest">
                <a className="main-btn main-invest wow fadeInUp page-scroll" data-wow-duration="1.3s" data-wow-delay="1.1s" data-scroll-nav={0} href="#features"><strong>Invest Now</strong></a>
              </div>
            </div> {/* header hero content */}
          </div>
        </div> {/* row */}
        <div className="row">
          <div className="col-lg-12">
            <div className="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
              <img src="assets/images/header-hero.png" alt="hero" />
            </div> {/* header hero image */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </div> {/* header hero */}
  </header>
  );
}


export default Header;