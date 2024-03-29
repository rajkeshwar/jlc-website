import React from 'react';
import SingleTeam from '@/components/Team/SingleTeam';
import SectionTitle from '@/components/Common/SectionTitle';

// Team Members
const teamimg1 = 'img/team/1.jpg';
const teamimg2 = 'img/team/2.jpg';
const teamimg3 = 'img/team/3.jpg';
const teamimg4 = 'img/team/4.jpg';
const teamimg5 = 'img/team/5.jpg';
const teamimg6 = 'img/team/6.jpg';

const Team = () => {

    return (
        <React.Fragment>
            <div id="rs-team" className="rs-team style1 inner-style orange-style pt-102 pb-110 md-pt-64 md-pb-70 gray-bg">
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title mb-50 md-mb-30 text-center"
                        subtitleClass="sub-title orange"
                        subtitle="Team"
                        titleClass="title mb-0"
                        title="Expert IT Consultants"
                    />
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <SingleTeam
                                itemClass="team-item"
                                Image={teamimg1}
                                Title="Makhaia Antitni"
                                Designation="President & CEO"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <SingleTeam
                                teamClass="team-item"
                                Image={teamimg2}
                                Title="Corey Anderson"
                                Designation="CEO & Founder"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <SingleTeam
                                teamClass="team-item"
                                Image={teamimg3}
                                Title="Masud Rana"
                                Designation="Web Developer"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <SingleTeam
                                teamClass="team-item"
                                Image={teamimg4}
                                Title="Najmul Huda"
                                Designation="Digital Marketer"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <SingleTeam
                                teamClass="team-item"
                                Image={teamimg5}
                                Title="Rushali Rumi"
                                Designation="Design Lead"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <SingleTeam
                                teamClass="team-item"
                                Image={teamimg6}
                                Title="Abu Sayed"
                                Designation="App Developer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Team;