import React from 'react';

import Header from "../../Layout/Header";
import Label from "../../Form/Field/Label";

const Hero = () => (
    <section className="t-thirst-hero">
      <Header />
      <div className="t-thirst-hero__inner">
        <div className="row">
            <div className="col medium-5 t-thirst-hero__content">
            <h1 className="t-thirst-hero__heading heading heading--large">
                The Thirst Initiative
            </h1>

            <p className="t-thirst-hero__body bodytext bodytext--large bodytext--light">
            Help give clean drinking water to people around the world, just by ordering a drink. We’re on a mission to raise $300,000 and we need your help!
            </p>

            </div>

            <div className="col medium-7 t-thirst-hero__goal">

            <form className="t-donation-form">
                <header className="t-donation-form__header">
                    <h3 className="heading heading--small heading--flush">See Your Impact</h3>
                </header>
                <div className="t-donation-form__body">
                    <div className="c-field c-field--number">
                        <Label value="$0.00 of $300,000.00 raised" />
                        <span className="c-progressbar">
                            <span className="c-progressbar__inner"></span>
                        </span>
                        <p className="c-field__description">
                            Goal progress is updated every week based on reporting from our partners.
                        </p>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
)

export default Hero;
