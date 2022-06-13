import React from 'react';
import resumeData from '../../db.json';
import './PullData.css';

const renderData = () => {
    return (
        resumeData.map(i => 
            (<li key={i} className="itemStyle">{resumeData[i]}</li>)
        )
    )
}

const PullData = () => (
    <div className='styledResumeData'>
        <p>all resumes</p>
        {renderData()}
    </div>
);

export default PullData;