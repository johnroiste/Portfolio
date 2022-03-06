import React from 'react'

const Projects = () => {

    const handleClick = () => {
      window.open("https://615f1338201e923cbe9b008f--wizardly-stonebraker-a53fdb.netlify.app/index.html")
    }

    const handleClick1 = () => {
      alert("Please note the wordpress is no longer live but there is a manual with some screenshots showing its former glory.");
    window.open("https://github.com/johnroiste/Wordpress/blob/main/Manual.pdf");
    }

    const handleClick2 = () => {
      window.open("https://tender-bhaskara-b65352.netlify.app/")
    }

    const handleClick3 = () => {
      window.open("https://johnroiste.github.io/grid-game/grid-game/")
    }

    const handleClick4 = () => {
      alert('Please check my github for source code and add your api key to show map.');
      window.open("https://johnroiste.github.io/Restaurant/Restaurant/Restaurant%20review.html")
    }

    

    return (
        <div id="container">
        <div id="portfolio">
        <div id="container" className="container text-center">
          <br/>
          <h1>PORTFOLIO</h1>
          <br/>
          <p><em>Wake up everyday with renewed freshness and a zeal to conquer the unknown.</em></p>
          <br/>
          <h3>Here are some projects I completed during my degree.</h3>
          <br/>
          
          <div className="row mt-5">
            <div className="col-sm-5 border-info " id="project1"  onClick={handleClick}>
            </div>
            <div className="col-sm-1 ml-5"></div>
            <div className="col-sm-5" id="project2" onClick={handleClick1}>
            </div>
          </div>
          <div className='row mt-5'>
            <div className="col-sm-5" id="project3" onClick={handleClick2}>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-5 border-info" id="project4" onClick={handleClick3}>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-5 mx-auto" id="project5" onClick={handleClick4}>
              {/* <img src="bandmember.jpg" alt="Random Name"> */}
            </div>
            {/* <div className="col-sm-6" id="project6">
            </div> */}
          </div>
      </div>
      </div>
      </div>
    )
}

export default Projects;