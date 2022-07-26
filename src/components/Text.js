import React from 'react'
import { Button} from 'reactstrap';

const Text = () => {
    return (
      <div id="about"><div className="text-wrapper">
          <div className="textBox">
              {/* <h1 >About me</h1> */}
              <i></i>
              Hey!
              I'm a recent Front-end grad at Openclassrooms, looking for entry level opportunities. I enjoy building websites and making aesthetic UIs to get the best results I can.
              I am currently learning react and studying UX.
              In my free time I like to do resin art and spend time in nature.
              Please check out some of my projects below in the portfolio section.
              To keep up with my latest daily musings, keep an eye out for my blogs, coming soon...
              <Button className="btn" id="blog-button" color="info" size="large" style={{marginLeft: "12%", marginTop: "30px"}}>BLOG</Button>
          </div>
          <div className="profilephoto">
          </div>
      </div></div>
    )
}

export default Text;