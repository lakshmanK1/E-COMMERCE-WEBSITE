import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`margin-top: 2%;background-color:#474E68;
text-align:center; padding:15px; width:100%;`;
const Form = styled.form`width:900px;text-align: center;
justify-content:center; margin-top: 4%;
display: block; border:2px solid white;
padding:1%; width:70% ;`;
const Label = styled.label`font-weight: bold;
margin-bottom: 0.5rem; font-weight:200;
display: block; color:white; font-size:25px;`;
const Input = styled.input`font: inherit;
padding: 0.5rem;
border-radius: 6px;
border: 1px solid #ccc;
width: 20rem;
max-width: 100%;`;
const Button = styled.button`margin-top:15px; width:90px;
height:50px; padding:10px; border:2px solid white; font-size:18px;`;

function ContactUsForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const handleNameField = (e) => {
        setName(e.target.value);
    }

    const handleEmailField = (e) => {
        setEmail(e.target.value);
    }

    const handleNumberField = (e) => {
        setNumber(e.target.value);
    }

    const HandleFormData = (e) => {
        e.preventDefault();

        const UseFormData = {
            Name:name,
            Email:email,
            Number:number
        }
        props.formDetails(UseFormData);

        setName('');
        setEmail('');
        setNumber('');
    }

  return (
    <Container>
        <center>
        <Form onSubmit={HandleFormData}>
            <Label>Name</Label>
            <Input type='text' value={name} onChange={handleNameField}/><br/>
            <Label>Email Id</Label>
            <Input type='email' value={email} onChange={handleEmailField}/><br/>
            <Label>Number</Label>
            <Input type='text' value={number} onChange={handleNumberField}/><br/>
            <Button type='submit'>Submit</Button>
        </Form> 
        </center>
    </Container>
  )
}

export default ContactUsForm