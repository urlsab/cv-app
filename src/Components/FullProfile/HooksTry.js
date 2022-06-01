// import axios from 'axios';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// or const { v4: uuidv4 } = require('uuid');

// import axios from 'axios';
// import { useEffect } from 'react';

const HooksTry = () =>  {
    const [ourForm, setOurForm] = useState([{ 
        formName: '',
        firstName: '', 
        lastName: '', 
        email: '', 
        age: '', 
    }]);

    // useEffect(() => {
    //     const asking = async () => {
    //         try {
    //             const respone = await axios
    //             .post('http://localhost:4000/postInput')
    //         }
    //         catch (error) {
    //            console.log(error.message);
    //         }
    //     }
    // })
    // uuidv4(ourForm);
    // console.log(uuidv4(ourForm));

    const nameForState = () => {
        //
        alert('hreefi');
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setOurForm(prevState => ({
            ...prevState,
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