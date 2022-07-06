import React, {useEffect, useState} from 'react';

import {getAllResumesData} from '../../api/resume';
import './PullData.css';

const PullData = () => {
    const [resumeData, setResumeData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getAllResumesData();
            setResumeData(data);
        }
        getData();
    }, [])

    const renderData = () => {
        return resumeData.map(element => {
                const id = Object.keys(element)[0]; // GRAB THE OBJECTNAME - ITS THE ID...
                const resumeFields = element[id];

                return (
                    <ul key={id}>
                        <li className="itemStyle">{JSON.stringify(resumeFields)}</li>
                    </ul>
                )
            }
        )

    }


    return (
        <div className='styledResumeData'>
            <p>all resumes</p>
            {renderData()}
        </div>
    )

}

export default PullData;