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
                        <div className="col-lg-4 col-md-6 col-sm-4">
                          <div className="footer-contact mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                            <div className="footer-title">
                              <h4 className="title">Contact Us</h4>
                            </div>
                            <ul className="contact">
                              <li>email@email.com</li>
                            </ul>
                          </div> {/* footer contact */}
                        </div>
                      </div> {/* row */}
                    </div> {/* footer widget */}
                    <div className="footer-copyright">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="copyright d-sm-flex justify-content-between">
                            <div className="copyright-content">
                              <p className="text">Designed and Developed by <a href="https://tr.com" rel="nofollow">The Designer!</a></p>
                            </div>
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