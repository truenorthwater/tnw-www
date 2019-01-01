import React from 'react';

import RadioGroup from "../Form/Field/RadioGroup";
import Number from "../Form/Field/Number";

const singlePaymentUrl = "https://true-north-water.myhelcim.com/hosted/?token=41a95c25a2effdd7751739";
const recurringPaymentUrl = "https://true-north-water.myhelcim.com/hosted/?token=3994356cb823e1a20bde7b";

function calculatePeopleHelped(amount = 0, recurring = true) {
    let people = 1;
    let period = "year";
    let number = 1;

    const totalAmount = (recurring ? (amount * 12) : amount);

    if (totalAmount >= 60) {
        people = Math.floor(totalAmount / 60);
    } else {
        period = "month";
        number = Math.ceil(totalAmount/5);

        if(number > 1) period = "months";
    }
    
    return {
        people,
        period,
        number
    }
}

class DonationForm extends React.Component {
    constructor(props) {
        super(props);

        const helpData = calculatePeopleHelped(parseInt(25), true);

        this.state = {
            frequency: "monthly",
            amount: "25",
            peopleHelped: helpData.people,
            period: helpData.period,
            number: helpData.number
        }
    }

    handleFrequencyChange = (e) => {
        this.setState({
            frequency: e.target.value
        }, () => this.updatePeopleHelped())
    }

    handleAmountChange = (e) => {
        this.setState({
            amount: e.target.value
        }, () => this.updatePeopleHelped());
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    updatePeopleHelped() {
        const {
            frequency,
            amount
        } = this.state;

        const recurring = !!(frequency === "monthly");
        const helpData = calculatePeopleHelped(parseInt(amount), recurring);

        this.setState({
            peopleHelped: helpData.people,
            period: helpData.period,
            number: helpData.number
        });
    }

    render() {
        const {
            peopleHelped,
            period,
            number
        } = this.state;

        return (
            <form className="t-donation-form" onSubmit={this.handleSubmit}>
                <header className="t-donation-form__header">
                    <h3 className="heading heading--small heading--flush">See Your Impact</h3>
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

                    <div className="t-impactbox">
                        <h3 className="heading heading--small">{peopleHelped} {(peopleHelped > 1 ? "People" : "Person")}</h3>
                        <p className="bodytext bodytext--flush">
                            With this donation, you provide <em>{peopleHelped} {(peopleHelped > 1 ? "people" : "person")}</em> with clean water for <em>{number} {period}</em>! With every contribution we get closer to ending water crisis around the world. 
                        </p>
                    </div>
                </div>
                <footer className="t-donation-form__footer">
                    <button className="button button--primary button--full">Donate</button>
                </footer>
            </form>
        )
    }

}

export default DonationForm;
