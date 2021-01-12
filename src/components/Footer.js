import React from "react";

export const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-content">
        <p>Copyright &copy: 2021. All Rights Reserved</p>
        <div className="social">
          <a
            href="http://twitter.com/yomi_aishida"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="http://facebook.com/aishida.abayomi"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="http://instagram.com/aishida_yomi/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="http://https://www.linkedin.com/in/abayomi-aishida-371810197/"
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
