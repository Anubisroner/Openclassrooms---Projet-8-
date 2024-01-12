import React, { useState, useRef } from 'react';
import Arrow from '../assets/arrow.png';
import '../styles/__Style.scss';

function Collapse({ content, titre }) {
    const [isOpened, setIsOpened] = useState(false);

    const toggleCollapse = () => {
        setIsOpened(!isOpened);
    };

    const contentRef = useRef(null);

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <p className="collapse-title">
                    {titre}
                </p>
                <img src={Arrow} alt="Arrow" className={isOpened ? "img-rotate" : ""} />
            </div>
            <div>
                <p className="collapse-content" ref={contentRef}
                    style={isOpened ? {
                        height: contentRef.current ? contentRef.current.scrollHeight + 15 + "px" : "auto",
                        opacity: 1,
                    } : {
                        height: "0px",
                        opacity: 0,
                    }}>
                    {content}
                </p>
            </div>
        </div >
    );
}

export default Collapse;
