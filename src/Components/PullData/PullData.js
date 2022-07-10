import React, {useEffect, useState} from 'react';
import {getAllResumesData} from '../../api/resume';
import './PullData.css';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
// import { useRef } from 'react';

const PullData = () => {
    const [resumeData, setResumeData] = useState([]);
    const printRef = React.useRef();

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
    
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
          (imgProperties.height * pdfWidth) / imgProperties.width;
    
        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
      };

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
                        <p ref={printRef} className="itemStyle">{JSON.stringify(resumeFields)}</p>
                        <button type="button" onClick={handleDownloadPdf}>Download as PDF</button>
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