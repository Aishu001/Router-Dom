import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './All.css'


function Fullstack() {
  return (
   <>
    <div className="card-container">
     
     <Card style={{ width: 400, height:500 }} className="cyber">
           <Card.Img  className="img" variant="top" src="Features-of-Mern-stack-development-services-You-Should-Know.webp" />
           <Card.Body>
             <Card.Title>MERN Stack</Card.Title>
             <Card.Text>
             Full Stack Development
              Bootcamp
             </Card.Text>
             <a href="https://www.guvi.in/zen-class/full-stack-development-course/"><Button variant="primary"  className="btn">Join Now</Button></a>
           </Card.Body>
         </Card>
     
         <Card style={{ width: 400, height:500 }} className="cyber">
           <Card.Img className="img" variant="top" src="part01.png"  />
           <Card.Body>
             <Card.Title> Figma Design to HTML & CSS </Card.Title>
             <Card.Text>
             Join us for an insightful  session by Manikandan Anbalagan
             
             </Card.Text>
             <a href="https://www.youtube.com/watch?v=mO_Fcmd1yOk&t=4561s"><Button variant="primary"  className="btn">Join Now</Button></a>
           </Card.Body>
         </Card>
     
         <Card style={{ width: 400, height:500 }} className="cyber">
           <Card.Img  className="img" variant="top" src="part02.png"  />
           <Card.Body>
             <Card.Title>Figma Design to HTML & CSS 2</Card.Title>
             <Card.Text>
             Join us for an insightful  session by Manikandan Anbalagan
             
             </Card.Text>
             <a href="https://www.youtube.com/watch?v=da_biDr8t30"><Button variant="primary"  className="btn">Join Now</Button></a>
           </Card.Body>
         </Card>
           
         </div>
   </>
  )
}

export default Fullstack