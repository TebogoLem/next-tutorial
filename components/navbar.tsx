import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1 style={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
          <Image src="/logo.png" alt="next js logo" width={50} height={50} />
          TBG's Bugatti List
        </h1>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/bugattis">Bugatti List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
