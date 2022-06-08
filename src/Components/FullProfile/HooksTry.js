import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// or const { v4: uuidv4 } = require('uuid');

const HooksTry = () =>  {
    const [ourForm, setOurForm] = useState({ 
        objectName:  {
        firstName: '', 
        lastName: '', 
        email: '', 
        age: '', 
    }});

    const makeId = () => {
        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setOurForm(prevState => ({
            objectName: {...prevState.objectName.firstName}, // <=
            [name]: value
          }));
          console.log(ourForm);
    };

    const nameForState = () => {
        ourForm.objectName = makeId()
        console.log(ourForm);
        console.log(ourForm.objectName);
        alert('hreefi');
    }
    
      return (
        <form action='http://localhost:4000/postInput' method='POST' onSubmit={handleChange}>
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

                <button onClick={() => {nameForState(); handleChange(); } }>Upload</button>
                {/* {ourForm.objectName.email ? (ourForm.objectName = makeId()) : null} */}
        </form>
      );  
};

export default HooksTry;

