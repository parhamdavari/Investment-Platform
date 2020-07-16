import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

const CardInvest = ({ id, amount, plan, date, payout }) => {
  
  let unix_timestamp = date;
  let date_ = new Date(unix_timestamp * 1000);
  let year = date_.getFullYear();
  let month = date_.getMonth();
  let day = date_.getDate();
  let hours = date_.getHours();
  let minutes = "0" + date_.getMinutes();
  let seconds = "0" + date_.getSeconds();

  let formattedTime = `${day}/${month}/${year} ${hours}:${minutes.substr(-2)}`;
  let formattedAmount       = amount / 1000000;
  let formattedPayout       = payout / 1000000;
  let formattedPlan = 0;
  (plan == 1) ? (formattedPlan = '25%') : ((plan == 2) ? (formattedPlan = '30%') : (formattedPlan = '20%'));

  return (
        <Card style={{flex: id}}>
              <Card.Body style={{paddingTop: 5, paddingBottom: 5}}>
                {/* <Card.Title>Special title treatment</Card.Title> */}
                <Card.Text>
                  {formattedAmount} TRX | {formattedPlan} Daily ROI | {formattedTime} <br />Payout {formattedPayout} TRX
                </Card.Text>
              </Card.Body>
        </Card>
    );
}

export default CardInvest;