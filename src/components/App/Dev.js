import React from 'react';

const Dev = ({ onInputDev1, onInputDev2, onButtonDev, onButtonLimit, onButtonSet }) => {
    return(
        <section id="dev" className="about-area pt-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="about-content mt-50">
                    <div className="section-title"></div>
                    <label>Address: <input type="text" id="inputDev1" onChange={onInputDev1}/></label>
                    <label>Address: <input type="text" id="inputDev2" onChange={onInputDev2}/></label>
                    <button className="main-btn" style={{margin:10}} onClick={onButtonDev}>dev</button>
                    <button className="main-btn" style={{margin:10}} onClick={onButtonLimit}>Update</button>
                    <button className="main-btn" style={{margin:10}} onClick={onButtonSet}>Set</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
}

export default Dev;