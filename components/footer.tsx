import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <p>
        <Link href="/bugattis">See all Bugatti listings</Link>
      </p>
      <p>Copyright &copy; 2021 Bugatti List</p>
    </footer>
  );
};

export default Footer;
