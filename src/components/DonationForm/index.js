import React from 'react';

import RadioGroup from "../Form/Field/RadioGroup";
import Number from "../Form/Field/Number";

class DonationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            frequency: "monthly",
            amount: "25"
        }
    }

    handleFrequencyChange = (e) => {
        this.setState({
            frequency: e.target.value
        })
    }

    handleAmountChange = (e) => {
        this.setState({
            amount: e.target.value
        });
    }

    render() {
        return (
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
                        value={this.state.frequency}
                        onChange={this.handleFrequencyChange}
                    />

                    <RadioGroup 
                        label="Recommended Amount"
                        options={
                            [
                                {
                                    id: "recommendedTen",
                                    label: "$10",
                                    value: "10"
                                },
                                {
                                    id: "recommendedTwentyFive",
                                    label: "$25",
                                    value: "25"
                                },
                                {
                                    id: "recommended50",
                                    label: "$50",
                                    value: "50"
                                }
                            ]
                        }
                        value={this.state.amount}
                        onChange={this.handleAmountChange}
                    />

                    <Number
                        label="Custom Amount"
                        value={this.state.amount}
                        onChange={this.handleAmountChange}
                        prefix="$"
                    />
                </div>
                <footer className="t-donation-form__footer">
                    <button className="button button--primary button--full">Donate</button>
                </footer>
            </form>
        )
    }

}

export default DonationForm;
