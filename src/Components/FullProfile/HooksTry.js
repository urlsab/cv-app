import { useState } from 'react';
import axios from 'axios';

import { createRandomId } from '../../utils/utils';

const HooksTry = () =>  {
    const [ourForm, setOurForm] = useState({ 
        objectName:  {
        firstName: '', 
        lastName: '', 
        email: '', 
        age: '', 
    }});


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
        const id = createRandomId();
        const form = {
            [id]: ourForm.objectName
        }
        const response = await axios.post('http://localhost:4000/postInput', form);
        console.log(response.data);
    }

      return (
        <>
            <input 
                type="text"
                name="firstName"
                placeholder="first Name"
                value={ourForm.objectName?.firstName}
                onChange={handleChange}
            />
            
            <input 
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={ourForm.objectName?.lastName}
                onChange={handleChange}
            />

            <input 
                type="email"
                name="email"
                placeholder="email"
                value={ourForm.objectName?.email}
                onChange={handleChange}
            />

            <input 
                type="number"
                name="age"
                placeholder="age"
                value={ourForm.objectName?.age}
                onChange={handleChange}
            />
            <button onClick={onSubmitForm}>Upload</button>
        </>
      );  
};

export default HooksTry;

