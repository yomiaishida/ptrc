import React from "react";

export const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-content">
        <p>Copyright &copy; 2022. All Rights Reserved</p>
        <div className="social">
          <a
            href="http://twitter.com/yomi_aishida"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          
          <a
            href="https://github.com/yomiaishida"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/abayomiaishida/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
