import React from "react";
// import ReactPlayer from "react-player";
import Button from "react-bootstrap/Button"; // Import the Button component correctly
import Card from "react-bootstrap/Card";
import './All.css'

function Cyberscure() {
  return (
   <>
    <div className="card-container">
{/*       
      <ReactPlayer
        url="How to get into UI_UX_ _ The Ultimate Beginner's Guide _ GUVI _ UIUX Design _ Tamil.mp4"
        controls
        width="640px"
        height="360px"
      /> */}
      

    <Card style={{ width: 400, height:500 }} className="cyber">
      <Card.Img  className="img" variant="top" src=" download.jpeg"  />
      <Card.Body>
        <Card.Title>Cyber Security</Card.Title>
        <Card.Text>
        Cyber Security and Ethical Hacking - Beginner
        </Card.Text>
       <a href="https://www.guvi.in/courses/network-and-security/cyber-security-ethical-hacking-advanced/"><Button variant="primary" className="btn">Join Now</Button></a> 
      </Card.Body>
    </Card>

    <Card style={{ width: 400, height:500 }} className="cyber">
      <Card.Img  className="img" variant="top" src=" download.jpeg"  />
      <Card.Body>
        <Card.Title>Cyber Security</Card.Title>
        <Card.Text>
        Cyber Security and Ethical Hacking - Advanced
        </Card.Text>
       <a href="https://www.guvi.in/courses/network-and-security/cyber-security-ethical-hacking-beginners/"><Button variant="primary" className="btn">Join Now</Button></a> 
      </Card.Body>
    </Card>

    <Card style={{ width: 400, height:500 }} className="cyber">
      <Card.Img  className="img"  variant="top" src=" what-is-blockchain-1.jpeg"  />
      <Card.Body>
        <Card.Title>Blockchain Course</Card.Title>
        <Card.Text>
        Beginner
        </Card.Text>
       <a href="https://www.guvi.in/courses/web-3-0/blockchain/"><Button variant="primary" className="btn">Join Now</Button></a> 
      </Card.Body>
    </Card>

    </div>
   </>
  )
}

export default Cyberscure