import React from "react";
import "./middle.scss";

function middle(props) {
  return (
    <div>
      <div className="mob-div">
        <div className="empty">
          <img
            className="img-fluid d-block empty__img"
            src={props.image}
            alt="illustration-phones"
          />
        </div>
        <section className="mobileSection">
          <div className="container">
            <div className="mobileSection__container__split">
              <div className="mobileSection__container__split__art-infra">
                <h1 className="mobileSection__container__split__art-infra__title">
                  State of the Art Infrastructure
                </h1>
                <p className="mobileSection__container__split__art-infra__para">
                  {" "}
                  With reliability and speed in mind, worldwide data centers
                  provide the backbone for ultra-fast connectivity. This ensures
                  your site will load instantly, no matter where your readers
                  are, keeping your site competitive.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default middle;
