import React from 'react';



function Footer(props) {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <h5 className="center white-text footer-update">{props.text}</h5>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center">
          2019 Landon Evans
        </div>
      </div>
    </footer>
  )
}




export default Footer;