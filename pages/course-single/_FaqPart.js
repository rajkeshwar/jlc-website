import { useState } from 'react';
import ModalVideo from 'react-modal-video';

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const FaqPart = ({courseFAQs}) => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="content mb-30">
            <h4 className="mb-16">Frequently Asked Questions.</h4>
            <Accordion className="accordion-box" preExpanded={'a'}>
                {courseFAQs.map(faq => (
                    <AccordionItem className="accordion-item" uuid={faq.faqId} key={faq.faqId}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <button>{faq.faqId}. {faq.question}</button>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="card-body acc-content current">
                            <div className="faq-answer"><a className="faq-ans">Answer:</a> {faq.answer}</div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>                                            
        </div>
    );
}

export default FaqPart;