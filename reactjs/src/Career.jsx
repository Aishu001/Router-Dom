import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './All.css'

function Career() {
  return (
<>
<div className="card-container">
    
    
    <Card  style={{ width: 400, height:500 }} className="cyber">
          <Card.Img className="img"variant="top" src="CAREER.png" />
          <Card.Body>
            <Card.Title>How to Choose your Career</Card.Title>
            <Card.Text>
            7 Steps to Choosing 
            the Right Career Path
            </Card.Text>
            <a href="https://www.youtube.com/watch?v=P_RSSp_uuZk"><Button variant="primary" className="btn">Join Now</Button></a>
          </Card.Body>
        </Card>
    
       
    <Card  style={{ width: 400, height:500 }} className="cyber">
          <Card.Img className="img"variant="top" src="carrer1.png"  />
          <Card.Body>
            <Card.Title>Salary Negotiation</Card.Title>
            <Card.Text>
            Avoid These Common Mistakes 
            | All About HR |
            </Card.Text>
            <a href="https://www.youtube.com/watch?v=K25UI0wqIrg&t=178s"><Button variant="primary" className="btn">Join Now</Button></a>
          </Card.Body>
        </Card>
         
           
        </div>
</>
  )
}

export default Career