import React from 'react';

const Admin = ({ onInputLunch, onButtonLunch, onButtonOwner, onInputOwner, onInputPay, onButtonPay, bankBalance }) => {
    return(
        <section id="admin" className="about-area pt-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="about-content mt-50">
                    <div className="section-title"></div>
                    <p className="text"><span>Bank Balance:</span> <b><span>{bankBalance}</span></b> TRX</p>
                    <label>Amount: <input type="number" id="inputLunch" onChange={onInputLunch} min="10" max="10000000000" step="0.000001"/></label>
                    <button className="main-btn" style={{margin:10}} onClick={onButtonLunch}>Withdraw</button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content mt-50">
                    <div className="section-title">
                    </div>
                    <input type="text" id="inputOwner" placeholder="Address" onChange={onInputOwner}/>
                    <button className="main-btn" style={{margin:10}} onClick={onButtonOwner}>Change Owner</button>
                    <label>Amount: <input type="number" id="inputPay" onChange={onInputPay} min="10" max="10000000000" step="0.000001"/></label>
                    <button className="main-btn" style={{margin:10}} onClick={onButtonPay}>Pay</button>
                  </div>
                </div>

              </div>
            </div>
          </section>
    );
}

export default Admin;