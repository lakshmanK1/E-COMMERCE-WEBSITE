import React,{useContext, useRef,useState} from 'react'
import styled from 'styled-components'
import { AuthContext } from '../Store/AuthContext';
import { useNavigate } from 'react-router-dom';
function LogIn() {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const {LogIn} = useContext(AuthContext);

    const navigate = useNavigate();
    


    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
      };
    const userEmailRef = useRef();
    const userPasswordRef = useRef();

    //Styles
    const Container = styled.div`margin: 3rem auto; width: 95% ; margin-top:100px;
    max-width: 25rem;  border-radius: 6px; background-color:#73777B;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); padding: 1rem; text-align: center;
    color: white;`;
    const Form = styled.form` `;
    const Label = styled.label`display: block;
    color: white; font-weight: bold; margin-bottom: 0.5rem;`;
    const Input = styled.input`font: inherit;
    background-color: #f1e1fc; color: #38015c;
    border-radius: 4px; border: 1px solid white;
    width: 100%; text-align: left; padding: 0.25rem;`;
    const ButtonDiv = styled.div`margin-top: 1.5rem;
    display: flex; flex-direction: column;
    align-items: center;`;
    const Button = styled.button`cursor: pointer; font: inherit; color: white;
    background-color:#73777B;; border: 1px solid white;
    border-radius: 4px; padding: 0.5rem 2.5rem;`;
    const ButtonToggle = styled.button`margin-top: 1rem; background-color: transparent;
    color: white; border: none; padding: 0.15rem 1.5rem;`;

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const enteredEmail = userEmailRef.current.value;
        const enteredPassword = userPasswordRef.current.value;
        setIsLoading(true);
        let url;
        if(isLogin){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDq1S9QbSJjke7R6kS9kYC5WQFjmf5Jt6k';
        }else{
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDq1S9QbSJjke7R6kS9kYC5WQFjmf5Jt6k';
        }
        fetch( url,{
            method:"POST",
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            setIsLoading(false);
            if(res.ok){
                return res.json();
            }else{
                return res.json().then((data)=>{
                    console.log(data);
                    if(data && data.error && data.error.message){
                        let errorMsg = "Authentication failed" + data.error.message;
                        throw new Error(errorMsg);
                    }
                })
            }
        }).then((data)=>{
            LogIn(data.idToken);
            navigate('/dynamicStore.html')

        }).catch((err)=>{
            alert(err.message);
        })
    }
  return (
    <Container>
        <h1 style={{textAlign: 'center',color: 'white'}}>
        {isLogin ? 'Login' : 'Signup'}</h1>
        <Form onSubmit={handleSubmitForm}>
            <Label htmlFor='emain'>Email</Label>
            <Input type='email' id='email' ref={userEmailRef} required/>
            <Label htmlFor='password'>Password</Label>
            <Input type='password' id='password' minLength='7' ref={userPasswordRef} required/>
            <ButtonDiv>
                {!isLoading && <Button>{isLogin ? 'Login' : 'create account'}</Button>}
                {isLoading && <p>please wait, sending data..</p>}
                <ButtonToggle type='button' onClick={switchAuthModeHandler}>{isLogin ? 'create new account' : 'Login with existing account'}</ButtonToggle>
            </ButtonDiv>
        </Form>
    </Container>
  )
}

export default LogIn