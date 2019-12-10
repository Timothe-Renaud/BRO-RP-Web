import React from "react";

import "./styles.scss";

function Testimonials(props) {
  return (
    <div className="columns is-multiline is-centered">
      {props.items.map(item => (
        <div className="Testimonials__column column">
          <div className="Testimonials__card card">
            <div className="Testimonials__card-content card-content has-text-centered">
                <div className="title is-5">
                  <h1> {item.Titre} </h1>
                </div>
                <div className="Testimonials__avatar">
                  <img src={item.Img}></img>
                </div>
              <p className="Testimonials__quote">"{item.bio}"</p>
              <div className="Testimonials__info">
                <div className="has-text-weight-bold">{item.name}</div>
                  <a className="link" href={item.companyUrl}>
                    {item.company}
                  </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
