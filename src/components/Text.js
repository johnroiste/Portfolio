import React from 'react'
import { Button} from 'reactstrap';

const Text = () => {
    return (
      <a id="about"><div className="text-wrapper">
          <div className="textBox">
              <h1 >About me</h1>
              <p>I'm a recent Front-end graduate at Openclassrooms. Looking for entry level opportunities and willing to learn. I enjoy building websites and utilizing colour combinations for an appealing and fun aesthetic.
              I am currently learning react and aim to study UX in the future.<br/></p>
              <p>Please check out some of my projects below in the portfolio section.
              To keep up with my latest musings, keep an eye out for my blogs, coming soon...</p>
              <Button className="btn" color="info" size="large" style={{marginLeft: "30%", marginTop: "20px"}}>BLOG</Button>
          </div>
          <div className="profilephoto">
          </div>
      </div></a>
    )
}

export default Text;