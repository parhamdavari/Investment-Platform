import React from 'react';


const Plans = ({ onButtonInvest1, onButtonInvest2, onButtonInvest3, onButtonInvest4, onInputChange1, onInputChange2, onInputChange3, onInputChange4 }) => {
        return(
            <section id="features" className="services-area pt-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="section-title text-center pb-40">
            <div className="line m-auto" />
            <h3 className="title"><span>Plans</span></h3>
          </div> {/* section title */}
        </div>
      </div> {/* row */}
      <div className="row justify-content-center">
      <div className="col-lg-4 col-md-7 col-sm-8">
          <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <div className="services-icon">
              <img className="shape" src="assets/images/services-shape.svg" alt="shape" />
              <img className="shape-1" src="assets/images/services-shape-1.svg" alt="shape" />
              <i className="lni-baloon" />
            </div>
            <div className="services-content mt-30">
              {/* <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Diamond Plan</p> */}
              <h4 className="services-title">6% daily</h4>
              <div className="star">
                <ul >
                  <li><i className="lni-star-filled" /> Dividends every second</li>
                  <li><i className="lni-star-filled" /> &infin; days</li>
                  <li><i className="lni-star-filled" /> Total return &infin; (Daily 6%)</li>
                  <li><i className="lni-star-filled" /> Min. investment is 1 TRX</li>
                </ul>
              </div>
              <input type="number" id="input1" onChange={onInputChange1} min="1" max="10000000000" step="0.0000000001"/>
              <br />
              <button className="main-btn" style={{marginTop:10}} onClick={onButtonInvest1}>Invest</button>
            </div>
          </div> {/* single services */}
        </div>
        <div className="col-lg-4 col-md-7 col-sm-8">
          <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <div className="services-icon">
              <img className="shape" src="assets/images/services-shape.svg" alt="shape" />
              <img className="shape-1" src="assets/images/services-shape-4.svg" alt="shape" />
              <i className="lni-baloon" />
            </div>
            <div className="services-content mt-30">
              {/* <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Diamond Plan</p> */}
              <h4 className="services-title">7% daily</h4>
              <div className="star">
                <ul >
                  <li><i className="lni-star-filled" /> Dividends every second</li>
                  <li><i className="lni-star-filled" /> 30 days</li>
                  <li><i className="lni-star-filled" /> Total return 210% (Daily 7%)</li>
                  <li><i className="lni-star-filled" /> Min. investment is 1 TRX</li>
                </ul>
              </div>
              <input type="number" id="input2" onChange={onInputChange2} min="1" max="10000000000" step="0.0000000001"/>
              <br />
              <button className="main-btn" style={{marginTop:10}} onClick={onButtonInvest2}>Invest</button>
            </div>
          </div> {/* single services */}
        </div>
        <div className="col-lg-4 col-md-7 col-sm-8">
          <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="services-icon">
              <img className="shape" src="assets/images/services-shape.svg" alt="shape" />
              <img className="shape-1" src="assets/images/services-shape-2.svg" alt="shape" />
              <i className="lni-cog" />
            </div>
            <div className="services-content mt-30">
              {/* <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Diamond Plan</p> */}
              <h4 className="services-title">8% daily</h4>
              <div className="star">
                <ul >
                  <li><i className="lni-star-filled" /> Dividends every second</li>
                  <li><i className="lni-star-filled" /> 20 days</li>
                  <li><i className="lni-star-filled" /> Total return 160% (Daily 8%)</li>
                  <li><i className="lni-star-filled" /> Min. investment is 1 TRX</li>
                </ul>
              </div>

              <input type="number" id="input3" onChange={onInputChange3} min="1" max="10000000000" step="0.0000000001"/>
              <br />
              <button className="main-btn" style={{marginTop:10}} onClick={onButtonInvest3}>Invest</button>
            </div>
          </div> {/* single services */}
        </div>
        <div className="col-lg-4 col-md-7 col-sm-8">
          <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
            <div className="services-icon">
              <img className="shape" src="assets/images/services-shape.svg" alt="shape" />
              <img className="shape-1" src="assets/images/services-shape-3.svg" alt="shape" />
              <i className="lni-bolt-alt" />
            </div>
            <div className="services-content mt-30">
              {/* <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Diamond Plan</p> */}
              <h4 className="services-title">9% daily</h4>
              <div className="star">
                <ul >
                  <li><i className="lni-star-filled" /> Dividends every second</li>
                  <li><i className="lni-star-filled" /> 15 days</li>
                  <li><i className="lni-star-filled" /> Total return 135% (Daily 9%)</li>
                  <li><i className="lni-star-filled" /> Min. investment is 1 TRX</li>
                </ul>
              </div>
              <input type="number" id="input4" onChange={onInputChange4} min="1" max="10000000000" step="0.0000000001"/>
              <br />
              <button className="main-btn" style={{marginTop:10}} onClick={onButtonInvest4}>Invest</button>
            </div>
          </div> {/* single services */}
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </section>
        )
    }


export default Plans;