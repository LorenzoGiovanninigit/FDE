import React from "react";
import dio from "../../dio.png";
import piero from "../../geralt.png";

export default function ChiSiamo() {
  return (
    <div className="cardContainer">
      <div className="card">
        <h4 className="cardTitle">Pier Mario </h4>
        <img src={piero} className="cardImg" />
        <p className="cardP">
          Laborum magna consequat laboris dolore sit pariatur culpa Lorem
          excepteur dolor ut. Lorem qui est fugiat amet nulla elit elit enim
          nostrud sunt Lorem aute commodo excepteur. Esse velit pariatur ut ad
          sunt duis ex est pariatur do duis. Deserunt minim labore consequat
          irure nostrud aliqua deserunt in. Fugiat consectetur amet eu
          adipisicing nisi officia exercitation tempor officia. Proident
          adipisicing amet aliqua reprehenderit occaecat sint aliquip occaecat
          non.
        </p>
        <p className="cardP">
          Laborum magna consequat laboris dolore sit pariatur culpa Lorem
          excepteur dolor ut. Lorem qui est fugiat amet nulla elit elit enim
          nostrud sunt Lorem aute commodo excepteur. Esse velit pariatur ut ad
        </p>
      </div>
      <div className="card">
        <h4 className="cardTitle">Andrea Manganiello</h4>
        <img src={dio} className="cardImg" />
        <p className="cardP">
          Laborum magna consequat laboris dolore sit pariatur culpa Lorem
          excepteur dolor ut. Lorem qui est fugiat amet nulla elit elit enim
          nostrud sunt Lorem aute commodo excepteur. Esse velit pariatur ut ad
          sunt duis ex est pariatur do duis. Deserunt minim labore consequat
          irure nostrud aliqua deserunt in. Fugiat consectetur amet eu
          adipisicing nisi officia exercitation tempor officia. Proident
          adipisicing amet aliqua reprehenderit occaecat sint aliquip occaecat
          non.
        </p>
        <p className="cardP">
          Laborum magna consequat laboris dolore sit pariatur culpa Lorem
          excepteur dolor ut. Lorem qui est fugiat amet nulla elit elit enim
          nostrud sunt Lorem aute commodo excepteur. Esse velit pariatur ut ad
        </p>
      </div>
    </div>
  );
}
