import React from 'react';

const Stats = () => {
    return(

     <section className="pt-120">
        <div className="about-shape-2">
          <img src="assets/images/about-shape-2.svg" alt="shape" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center pb-40">
                <div className="line m-auto" />
                <h6 className="title"><span>Total Investments</span></h6>
              </div> {/* section title */}
            </div>
          </div> {/* row */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7 col-sm-8">
            </div>
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div className="single-services text-center mt-30 wow fadeIn" id="Banner" data-wow-duration="1s" data-wow-delay="0.5s">
              <h3 className="title"><span id="total_bank_investments"> 0 </span> TRX</h3>
              <p className="text"><b><span id="total_investors"></span> <span>Investors</span></b></p>
              {/* <p className="text"><span>Total Referral Commission:</span></p>
              <p className="text"><b><span id="total_ref_com"></span></b> TRX</p> */}
              </div> 
            </div>
            <div className="col-lg-4 col-md-7 col-sm-8">
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </section>
    )
}

export default Stats;