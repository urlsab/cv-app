import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

//import { useRef } from 'react';

const OneData = () => {

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

  return (
    <div>
      <p>piece of data</p>
      <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button>
      <div ref={printRef}>I will be in the PDF.</div>
    </div>
  )
};

export default OneData;