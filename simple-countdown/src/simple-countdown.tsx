import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";
import CSS from "csstype";

export interface SimpleCountdownProps extends BlockAttributes {
  countdowndate: string;
  expiredmessage: string;
  colorbg: string;
}

const calculatedifference=(start: number, enddate: string)=>{
  
  const end = new Date(enddate).getTime();
  
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  const distance = end - start;
  const days= Math.floor(distance / (day));
  const hours = Math.floor((distance % (day)) / (hour));
  const minutes = Math.floor((distance % (hour)) / (minute));
  const seconds = Math.floor((distance % (minute)) / second);
  
  return {distance, days, hours, minutes, seconds}
}

export const SimpleCountdown = ({ countdowndate, expiredmessage, colorbg }: SimpleCountdownProps): ReactElement => {

  const [actualdate,setactualdate] = React.useState(Date.now());
  const {distance, days, hours, minutes, seconds} = calculatedifference(actualdate,countdowndate)
  React.useEffect(()=>{
      setInterval(()=>{setactualdate(Date.now())},1000)
  },[])

  const cardStyle: CSS.Properties = {
    font: "sans-serif",
    display: "block",
    textAlign: "center",
    fontSize: "30px",
    margin: "-20px 0 25px 0",
  };

  const boxStyle: CSS.Properties = {
    borderRadius: "5px",
    border: "2px solid #0858A8",
    color: "#0858A8",
    display: "inline-block",
    marginRight: "5px",
    width: "22.5%",
    padding: "15px 0",
    background: colorbg,
  };

  const smalltextStyle: CSS.Properties = {
    paddingTop: "5px",
    fontSize: "16px",
    color: "#0858A8",
    borderRadius: "3px",
    display: "inline-block",
  }

  return <div style={cardStyle}>
    { distance < 0 ?
      <div><span style={smalltextStyle}>{expiredmessage}</span></div>
      :
      <div>
        <div style={boxStyle}>
          <div>{days}</div>
          <span style={smalltextStyle}>Days</span>
        </div>
        <div style={boxStyle}>
          <div>{hours}</div>
          <span style={smalltextStyle}>Hours</span>
        </div>
        <div style={boxStyle}>
          <div>{minutes}</div>
          <span style={smalltextStyle}>Minutes</span>
        </div>
        <div style={boxStyle}>
          <div>{seconds}</div>
          <span style={smalltextStyle}>Seconds</span>
        </div> 
      </div>
    }
  </div>;
};

