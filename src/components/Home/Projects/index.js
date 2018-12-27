import React from 'react';

import ProjectCard from "../../ProjectCard";
import WorldMap from "../../Image/WorldMap";

import Tab from "../../TabGroup/Tab";
import TabList from "../../TabGroup/TabList";
import TabPanel from "../../TabGroup/TabPanel";

import HanangombaVillageThumb from "../../../images/projects/hanangomba-village/thumbnail.jpg";
import GwembeMarketThumb from "../../../images/projects/gwembe-market/thumbnail.jpg";
import WaterFirstThumb from "../../../images/projects/water-first/thumbnail.jpg";



const ProjectListInternational = [
    {
        image: HanangombaVillageThumb,
        title: "Hanangomba Village",
        subtitle: "Drilled Well",
        description: "Located near the Namazuma Fish Camp lake. Water from the lake was very dangerous to collect because of crocodiles and hippos and so this project not only gives the villagers clean water but also safe water."
    },
    {
        image: GwembeMarketThumb,
        title: "Gwembe Market",
        subtitle: "Drilled Well",
        description: "The Gwembe Market previously had no running water. This well allows the market to stay open longer which makes for an even larger economic impact than is typical with most well projects. The addition of clean water at the market also allows for produce to be washed in clean water."
    }
];

const ProjectListCanada = [
    {
        image: WaterFirstThumb,
        title: "Water First",
        subtitle: "Internship Program",
        description: "We’ve partnered with Water First and the Water First Internship program. Interns gain the certifications they need to work in a water treatment plant, and to begin their careers as stewards of their community’s health and well being."
    }
];


class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: "international"
        }
    }

    selectInternational = () => {
        this.setState({
            active: "international"
        });
    }

    selectCanada = () => {
        this.setState({
            active: "canada"
        });
    }

    render() {
        const active = this.state.active;
        console.log(this.state);
        return (
            <section className="t-home-projects">
                <div className="row t-home-projects__inner">
                <div className="col t-home-projects__map">
                    <WorldMap />
                </div>

                <div className="col medium-4 t-home-projects__content">
                    <h2 className="heading heading--medium heading--white">Projects</h2>
                    <p className="bodytext bodytext--large bodytext--light">
                        We believe we can bring an end to the water crisis in our lifetime, 
                        using 100% of all donations to fund water projects around the world. 
                        Here’s where we’ve helped bring clean water so far.
                    </p>

                    <TabList>
                        <Tab 
                            text="International"
                            targetId="internationalTabPanel"
                            id="internationalTab"
                            active={!!(active === "international")}
                            onClick={this.selectInternational}
                        />
                        <Tab
                            text="Canada"
                            targetId="canadaTabPanel"
                            id="canadaTab"
                            active={!!(active === "canada")}
                            onClick={this.selectCanada}
                        />
                    </TabList>      
                </div>

                <div className="col medium-6 medium-offset-1 t-home-projects__list">
                    <TabPanel
                        tabId="interationalTab"
                        id="internationalTabPanel"
                        active={!!(active === "international")}
                    >
                        <ul className="t-home-projectlist">
                            {ProjectListInternational.map((project, i) => (
                                <li key={"projectListItem" + i} className="t-home-projectlist__item">
                                    <ProjectCard
                                        thumbnail={project.image}
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        description={project.description}
                                    />
                                </li>
                            ))}
                        </ul>
                    </TabPanel>
                    <TabPanel
                        tabId="canadaTab"
                        id="canadaTabPanel"
                        active={!!(active === "canada")}
                    >
                        <ul className="t-home-projectlist">
                            {ProjectListCanada.map((project, i) => (
                                <li key={"projectListItem" + i} className="t-home-projectlist__item">
                                    <ProjectCard
                                        thumbnail={project.image}
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        description={project.description}
                                    />
                                </li>
                            ))}
                        </ul>
                    </TabPanel>
                </div>

                </div>
            </section>
        );
    }
}

export default Projects;
