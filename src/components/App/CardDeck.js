import React from 'react';
import CardInvest from './CardInvest';
import Card from 'react-bootstrap/Card';

const CardDeck = ({ investments }) => {
    const cardsArray = investments.map((investment, i) => {
        return <CardInvest key={i} amount={investment.investmentAmount} plan={investment.investmentPlan} date={investment.investDate} payout={investment.investmentPayout}/>
    });

    return (
        <section className="about-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
                <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                    <img src="assets/images/about3.svg" alt="about" />
                </div> {/* about image */}
            </div>
            <div className="col-lg-6" style={{textAlign:"-webkit-center"}}>
                <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="section-title">
                    <div className="line" />
                    <h3 className="title"><span>My Investments</span></h3>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', paddingTop: 15}}>
                    { cardsArray }
                </div>
                </div>
            </div>
            
          </div> {/* row */}
        </div> {/* container */}
      </section>
        
    );
}

export default CardDeck;