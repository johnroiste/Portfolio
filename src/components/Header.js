import React from 'react'
import { Button} from 'reactstrap';

const Header = () => {
    return (
          <div className="header-wrapper">
            <video src='/snow.mp4' autoPlay loop muted/>
            <div className="btn-container">
              <a href="#contact"><Button className="btn" outline color="info" size="large" style={{marginRight: "10px", fontSize: "1.2em"}}>CONTACT</Button></a>
              <Button className="btn" color="info" size="large" style={{marginLeft: "10px", fontSize: "1.2em"}}>BLOG</Button>
            </div>
          </div>
    )
}

export default Header
