import React from 'react';
import './middle.scss';

function middle(props) {
    return (
        <div>
            <div class="mob-div">
                <div class="empty">
                    <img class="img-fluid d-block empty__img" src={props.image} alt="illustration-phones" />
                </div>
                <section class="mobileSection">
                <div class="container">
                    <div class="mobileSection__container__split">
                        <div class="mobileSection__container__split__art-infra">
                            <h1 class="mobileSection__container__split__art-infra__title">State of the Art Infrastructure</h1>
                            <p class="mobileSection__container__split__art-infra__para"> With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
                            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
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