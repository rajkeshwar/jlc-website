import { useState } from 'react';
import ModalVideo from 'react-modal-video';

const CourseSidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="inner-column">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='YLN1Argi7ik' onClose={() => { openModal(); }} />
            <div className="intro-video media-icon orange-color2">
                <img className="video-img" src={`/img/about/about-video-bg2.png`} alt="Video Image" />
                <span className="popup-videos" onClick={() => { openModal(); }} >
                    <i className="fa fa-play"></i>
                </span>
                <h4>Preview this course</h4>
            </div>
            <div className="course-features-info">
                <ul>
                    <li className="lectures-feature">
                        <i className="fa fa-files-o"></i>
                        <span className="label">Lectures</span>
                        <span className="value">3</span>
                    </li>
                    
                    <li className="quizzes-feature">
                        <i className="fa fa-puzzle-piece"></i>
                        <span className="label">Quizzes</span>
                        <span className="value">0</span>
                    </li>
                    
                    <li className="duration-feature">
                        <i className="fa fa-clock-o"></i>
                        <span className="label">Duration</span>
                        <span className="value">10 week </span>
                    </li>
                    
                    <li className="students-feature">
                        <i className="fa fa-users"></i>
                        <span className="label">Students</span>
                        <span className="value">21</span>
                    </li>
                    
                    <li className="assessments-feature">
                        <i className="fa fa-check-square-o"></i>
                        <span className="label">Assessments</span>
                        <span className="value">Yes</span>
                    </li>
                </ul>
            </div>                
            <div className="btn-part">
                <a href="#" className="btn readon2 orange">$35</a>
                <a href="#" className="btn readon2 orange-transparent">Buy Now</a>
            </div>
        </div>
    );
}

export default CourseSidebar;