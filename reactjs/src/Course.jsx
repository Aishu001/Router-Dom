import React from 'react'
import { useParams } from 'react-router-dom';

function Course() {
  const { option } = useParams();

  const options = {
    all: "all course",
    full: "fullstack",
    data: "datascience",
    cyber: "cybersecurity", // Corrected key
  };

  const info = options[option] || "Course not found"; // Providing a default value
  return (
    <>
    
    <h1>{option}</h1>
      <p>{info}</p>
    </>
  )
}

export default Course