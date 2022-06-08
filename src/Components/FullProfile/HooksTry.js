import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// or const { v4: uuidv4 } = require('uuid');

const HooksTry = () =>  {
    const [ourForm, setOurForm] = useState({ 
        objectName:  {
        firstName: '', 
        lastName: '', 
        email: '', 
        age: 0, 
    }});

    

    const nameForState = () => {
        //
        alert('hreefi');
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setOurForm(prevState => ({
            objectName: {...prevState.firstName + prevState.lastName},
            [name]: value
          }));
          console.log(ourForm);
    };
    
      return (
        <form action='http://localhost:4000/postInput' method='POST' onSubmit={handleChange}>
            <input 
                type="text"
                name="firstName"
                placeholder="first Name"
                value={ourForm.firstName}
                onChange={handleChange}
            />
            
            <input 
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={ourForm.lastName}
                onChange={handleChange}
            />

            <input 
                type="email"
                name="email"
                placeholder="email"
                value={ourForm.email}
                onChange={handleChange}
            />

            <input 
                type="number"
                name="age"
                placeholder="age"
                value={ourForm.age}
                onChange={handleChange}
            />

                <button onClick={() => {nameForState(); handleChange(); } }>Upload</button>
                {ourForm.email !== '' && ourForm.age !== '' && ourForm.firstName !== '' && ourForm.lastName !== '' ? (ourForm.formName = ourForm.firstName) : null}
        </form>
      );  
};

export default HooksTry;