import React, { useState } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
import Loading from '@/components/Loading';

const CurriculumPart = ({ courseModules }) => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    if (!courseModules) return <Loading/>

    return (
        <div className="content mb-30">
            <h4 className="mb-16">Course Curriculum</h4>
            <Accordion className="accordion-box" preExpanded={'a'}>
                {courseModules.map(module => (
                    <AccordionItem className="accordion-item" uuid={module.moduleId} key={module.moduleId}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <button>{module.moduleId}. {module.moduleName}</button>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        {module.moduleTopics.map((topic, idx) => (
                            <AccordionItemPanel className="card-body acc-content current" key={idx}>
                                <div className="content">
                                    <div className="clearfix">
                                        <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
                                        <div className="pull-left">
                                            <span className="popup-videos play-icon" onClick={() => { openModal(); }}><i className="fa fa-play"></i>{topic}</span>
                                        </div>
                                        <div className="pull-right">
                                            <div className="minutes">35 Minutes</div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        ))}
                    </AccordionItem>
                ))}
            </Accordion>                                             
        </div>
    );
}

export default CurriculumPart;