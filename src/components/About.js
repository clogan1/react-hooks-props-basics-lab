import React from "react";
import Links from "./Links.js"

function About(props) {
  //console.log(props)
  const propBio = props.bio;

  return (
    <div id="about">
      <h2>About Me</h2>
      {propBio ? <p>{props.bio}</p> : null }
      {/* <p>{props.bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
