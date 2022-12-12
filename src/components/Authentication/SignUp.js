import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";


import {SignUpHandler} from '../Store/Auth-Actions'
import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "../Store/AuthSlice";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();




  //Styles
  const Container = styled.div`
    margin: 3rem auto;
    width: 95%;
    margin-top: 100px;
    max-width: 25rem;
    border-radius: 6px;
    background-color: #73777b;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    text-align: center;
    color: white;
  `;
  const Form = styled.form``;
  const Label = styled.label`
    display: block;
    color: white;
    font-weight: bold;
    margin-bottom: 0.5rem;
  `;
  const Input = styled.input`
    font: inherit;
    background-color: #f1e1fc;
    color: #38015c;
    border-radius: 4px;
    border: 1px solid white;
    width: 100%;
    text-align: left;
    padding: 0.25rem;
  `;
  const ButtonDiv = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Button = styled.button`
    cursor: pointer;
    font: inherit;
    color: white;
    background-color: #73777b;
    border: 1px solid white;
    border-radius: 4px;
    padding: 0.5rem 2.5rem;
  `;
  const ButtonToggle = styled.button`
    margin-top: 1rem;
    background-color: transparent;
    color: white;
    border: none;
    padding: 0.15rem 1.5rem;
  `;

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const enteredEmail = userEmailRef.current.value;
    const enteredPassword = userPasswordRef.current.value;

    setIsLoading(true);

    dispatch(SignUpHandler(enteredEmail, enteredPassword));
    navigate('/login');
  };
  
  return (
    <Container>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Signup
      </h1>
      <Form onSubmit={handleSubmitForm}>
        <Label htmlFor="emain">Email</Label>
        <Input type="email" id="email" ref={userEmailRef} required />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          minLength="7"
          ref={userPasswordRef}
          required
        />
        <ButtonDiv>
          {!isLoading && (
            <Button>create account</Button>
          )}
          {isLoading && <p>please wait, sending data..</p>}
          <Link to='/login'>
          <ButtonToggle type="button">
            Login with existing account
          </ButtonToggle>
          </Link>
        </ButtonDiv>
      </Form>
    </Container>
  );
}

export default SignUp;
