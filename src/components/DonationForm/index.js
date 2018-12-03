import React from 'react';

import RadioGroup from "../Form/Field/RadioGroup";

const DonationForm = () => (
    <form className="t-donation-form">
        <header className="t-donation-form__header">
            <h3 className="heading heading--small">See Your Impact</h3>
        </header>
        <div className="t-donation-form__body">
            <RadioGroup 
                label="Frequency"
                options={
                    [
                        {
                            id: "frequencyMonthly",
                            label: "Monthly",
                            value: "monthly"
                        },
                        {
                            id: "frequencyOneTime",
                            label: "One Time",
                            value: "once"
                        }
                    ]
                }
                value="monthly"
                onChange={() => console.log('change!')}
            />
        </div>
        <footer className="t-donation-form__footer">
            <button className="button button--primary button--full">Donate</button>
        </footer>
    </form>
)

export default DonationForm;
