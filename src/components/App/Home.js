import React, {Component} from 'react';

const Home = ({ referralCode, onButtonWhitdraw, referralRewards, numberOfReferrers, referralRewardsPayout, accAdr, accBalance, onCopy }) => {
  return(
    <div>
        <div>
          
          {/*====== PRELOADER PART START ======*/}
          <div className="preloader">
            <div className="loader">
              <div className="ytp-spinner">
                <div className="ytp-spinner-container">
                  <div className="ytp-spinner-rotator">
                    <div className="ytp-spinner-left">
                      <div className="ytp-spinner-circle" />
                    </div>
                    <div className="ytp-spinner-right">
                      <div className="ytp-spinner-circle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== PRELOADER PART ENDS ======*/}


          <section id="about" className="services-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="section-title text-center pb-40">
                    <div className="line m-auto" />
                    <h3 className="title"><span>Your Information</span></h3>
                  </div> 
                </div>
              </div> 
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-7 col-sm-8">
                  <div className="text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                    <div className="about-content mt-30">
                      <p className="text"><span> Wallet Address: <b>{accAdr}</b> </span></p>
                      <p className="text"><span>Wallet Balance: <b>{accBalance}</b> TRX</span></p>
                      <p className="text"><span>Total Investments:</span> <b><span id="total_investments"></span></b> TRX</p>
                      <p className="text"><span>Total Referral Commission:</span> <b><span id="total_ref_com"></span></b> TRX</p>
                      <p className="text"><span>Total Dividents:</span> <b><span id="total_dividents"></span></b> TRX</p>
                      <p className="text"><span>Total Dividents Payout:</span> <b><span id="total_payout"></span></b> TRX</p>
                      <p className="text"><span>Whitdrawable:</span> <b><span id="total_withdrawable"></span></b> TRX</p>
                      <button className="main-btn" style={{marginTop:15}} onClick={onButtonWhitdraw}>Whitdraw</button>
                    </div>
                  </div> 
                </div>
              </div> 
            </div> 
          </section>

          <section className="services-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="section-title text-center pb-40">
                    <div className="line m-auto" />
                    <h3 className="title"><span>Referral</span></h3>
                  </div> 
                </div>
              </div> 
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-7 col-sm-8">
                  <div className="text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                    <div className="about-content mt-30">
                      <p className="text"><span id="spanReferral" onClick={onCopy}><strong>Referral Link (Click to Copy): {referralCode}</strong></span></p>
                      <p className="text"><span>Total Referral Rewards: {referralRewards / 1000000}</span> TRX</p>
                      <p className="text"><span>Payout: {referralRewardsPayout / 1000000}</span> TRX</p>
                      <p className="text"><span>Number of Referrers: {numberOfReferrers}</span> TRX</p>
                    </div>
                  </div> 
                </div>
              </div> 
            </div> 
          </section>


          {/* <section id="features" className="services-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="section-title text-center pb-40">
                    <div className="line m-auto" />
                    <h3 className="title"><span>Your Information</span></h3>
                  </div> 
                </div>
              </div> 
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-7 col-sm-8">
                  <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                    <div className="services-content mt-30">
                      <p className="text"><span> Wallet Address: <b>{accAdr}</b> </span></p>
                      <p className="text"><span>Wallet Balance: <b>{accBalance}</b> TRX</span></p>
                      <p className="text"><span>Total Investments:</span> <b><span id="total_investments"></span></b> TRX</p>
                    </div>
                  </div> 
                </div>
                <div className="col-lg-4 col-md-7 col-sm-8">
                  <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div className="services-content mt-30">
                    <p className="text"><span>Total Dividents:</span> <b><span id="total_dividents"></span></b> TRX</p>
                    <p className="text"><span>Total Dividents Payout:</span> <b><span id="total_payout"></span></b> TRX</p>
                    
                    </div>
                  </div> 
                </div>
                <div className="col-lg-4 col-md-7 col-sm-8">
                  <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                    <div className="services-content mt-30">
                    <p className="text"><span>Whitdrawable:</span> <b><span id="total_withdrawable"></span></b> TRX</p>
                    <button className="main-btn" style={{marginTop:10}} onClick={onButtonWhitdraw}>Whitdraw</button>
                    </div>
                  </div> 
                </div>
              </div> 
            </div> 
          </section> */}

        <a href="#" className="back-to-top"><i className="lni-chevron-up" /></a>
</div>
</div>
)
}


export default Home;