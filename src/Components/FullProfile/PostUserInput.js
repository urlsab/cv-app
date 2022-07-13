import React, { useState } from 'react';
import { createRandomId } from '../../utils/utils';
import axios from 'axios';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const PostUserInput = () =>  {
    const [ourForm, setOurForm] = useState({ 
        objectName:  {
        firstName: '', 
        lastName: '', 
        email: '', 
        age: '', 
    }});

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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setOurForm(prevState => ({
            objectName: {
                ...prevState.objectName,
                [name]: value
            },
          }));
          console.log(ourForm);
    };

    const onSubmitForm = async () => {
        // make shorter and smarter conditional here for submit a full form
        // check if something in the form is an empty string
            const id = createRandomId();
            const form = {
            [id]: ourForm.objectName
        }
        const response = await axios.post('http://localhost:4000/postInput', form);
        console.log(response.data);
    }

      return (
        <>
        {/* adding ? inside the { of value - caused errors} */}
            <input 
                type="text"
                name="firstName"
                placeholder="first Name"
                value={ourForm.objectName.firstName}
                onChange={handleChange}
            />
            
            <input 
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={ourForm.objectName.lastName}
                onChange={handleChange}
            />

            <input 
                type="email"
                name="email"
                placeholder="email"
                value={ourForm.objectName.email}
                onChange={handleChange}
            />

            <input 
                type="number"
                name="age"
                placeholder="age"
                value={ourForm.objectName.age}
                onChange={handleChange}
            />
            <button onClick={onSubmitForm}>Upload</button>
                <div ref={printRef}>
                    <p>first name:{ourForm.objectName.firstName}</p>
                    <p>last name:{ourForm.objectName.lastName}</p>
                </div> 
                <button type="button" onClick={handleDownloadPdf}>Download as PDF</button>
        </>
      );  
};

export default PostUserInput;