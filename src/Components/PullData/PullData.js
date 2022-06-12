import React from 'react';
import resumeData from '../../db.json';
import './PullData.css';

const allData = resumeData;

const renderData = () => {
    return (
        allData.map(i => 
            (<p key={i} className="itemStyle">{allData}</p>)
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