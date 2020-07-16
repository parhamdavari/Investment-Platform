import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return(
            <div>
                <footer id="footer" className="footer-area pt-200">
    <div className="container">
      <div className="subscribe-form mt-50" style={{opacity: 0}}>
      </div> {/* subscribe area */}
      <div className="footer-widget pb-100">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="footer-about mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
              <a className="logo" href="#">
                <img src="assets/images/logo.png" alt="logo" />
              </a>
              <ul className="social">
                <li><a href="https://t.me/mytronco"><i className="lni-telegram" /></a></li>
                <li><a href="https://Twitter.com/mytron_co"><i className="lni-twitter-filled" /></a></li>
                <li><a href="https://www.instagram.com/mytronco"><i className="lni-instagram-filled" /></a></li>
              </ul>
            </div> {/* footer about */}
          </div>
          
          <div className="col-lg-4 col-md-6 col-sm-4">
            <div className="footer-contact mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
              <div className="footer-title">
                <h4 className="title">Contact Us</h4>
              </div>
              <ul className="contact">
                <li>+447937001676</li>
                <li>support@mytron.co</li>
                <li>3 parkside Drive, London ,HA8 8JU</li>
                <li>Company Number: <a href="https://beta.companieshouse.gov.uk/company/08503428">08503428</a></li>
              </ul>
            </div> {/* footer contact */}
          </div>
        </div> {/* row */}
      </div> {/* footer widget */}
      <div className="footer-copyright">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright d-sm-flex justify-content-between">
              {/* <div className="copyright-content">
                <p className="text">Designed and Developed by <a href="https://tr.com" rel="nofollow">Tron Bank</a></p>
              </div> */}
            </div> {/* copyright */}
          </div>
        </div> {/* row */}
      </div> {/* footer copyright */}
    </div> {/* container */}
    {/* <div id="particles-2" /> */}
  </footer>
            </div>
        )
    }
}

export default Footer;