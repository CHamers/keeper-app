import React from "react";
//import "../App.css";

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright &copy; {currentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
