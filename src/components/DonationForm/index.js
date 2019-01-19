import React from 'react';

import RadioGroup from "../Form/Field/RadioGroup";
import Number from "../Form/Field/Number";

const singlePaymentUrl = "https://true-north-water.myhelcim.com/hosted/?token=41a95c25a2effdd7751739";
const recurringPaymentUrl = "https://true-north-water.myhelcim.com/hosted/?token=3994356cb823e1a20bde7b";

const planTokens = {
    "5": "305e83a4e77e79fbd74a8b",
    "10": "0a0a6613369dd085659d29",
    "25": "2d70a4a8e71eada153699a"
};

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
            amount: "10",
            monthlyOptions: [
                {
                    id: "recommendedFive",
                    label: "$5",
                    value: "5"
                },
                {
                    id: "recommendedTen",
                    label: "$10",
                    value: "10"
                },
                {
                    id: "recommendedTwentyFive",
                    label: "$25",
                    value: "25"
                }
            ],
            oneTimeOptions: [
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
                    id: "recommendedFifty",
                    label: "$50",
                    value: "50"
                }
            ],
            peopleHelped: helpData.people,
            period: helpData.period,
            number: helpData.number
        }
    }

    handleFrequencyChange = (e) => {
        this.setState({
            frequency: e.target.value,
            amount: !!(e.target.value === "monthly") ? "10" : "25"
        }, () => this.updatePeopleHelped())
    }

    handleAmountChange = (e) => {
        this.setState({
            amount: e.target.value
        }, () => this.updatePeopleHelped());
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {
            frequency,
            amount
        } = this.state;

        let url = (frequency === "monthly") ? recurringPaymentUrl : singlePaymentUrl; 

        if (frequency === "monthly") {
            url += `&recurringPlan=${planTokens[amount.toString()]}`
        }

        window.location = `${url}&amount=${parseFloat(amount)}`;
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
            amount,
            peopleHelped,
            period,
            number,
            frequency,
            monthlyOptions,
            oneTimeOptions
        } = this.state;

        return (
            <form className="t-donation-form" onSubmit={this.handleSubmit} id="donate">
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
                        options={!!(frequency === "monthly") ? monthlyOptions : oneTimeOptions}
                        value={this.state.amount}
                        onChange={this.handleAmountChange}
                    />

                    {!!(frequency !== "monthly") && (
                        <Number
                            label="Custom Amount"
                            value={this.state.amount}
                            onChange={this.handleAmountChange}
                            prefix="$"
                        />
                    )}

                    {!!(frequency === "monthly") && (
                        <p className="bodytext bodytext--small"><br/></p>
                    )}

                    <div className="t-impactbox">
                        {!!(amount) && (
                            <>
                                <h3 className="heading heading--small t-impactbox__heading">{peopleHelped} {(peopleHelped > 1 ? "People" : "Person")}</h3>
                                <p className="bodytext bodytext--flush">
                                    With this donation, you help provide <em>{peopleHelped} {(peopleHelped > 1 ? "people" : "person")}</em> with clean water! With every contribution we get closer to ending the global water crisis. 
                                </p>
                            </>
                        )}

                        {!(amount) && (
                            <>
                                <h3 className="heading heading--small t-impactbox__heading">Together, we can do amazing things!</h3>
                                <p className="bodytext bodytext--flush">
                                100% of your donation will be used to bring clean water to people around the world.
                                </p>
                            </>
                        )}
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
