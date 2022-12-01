import React, { useState } from "react";

import logo from "../logo.png";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt={"Logo"} />
      <ul>
        <li className="listItem">Chi siamo</li>
        <li className="listItem">Servizi</li>
        <li className="listItem">Contatti</li>
      </ul>
    </div>
  );
}
