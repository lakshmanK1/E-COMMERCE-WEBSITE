import { AuthActions } from "./AuthSlice";
import { useDispatch, useSelector } from "react-redux";


export const LogInHandler = (Enteredemail, Enteredpassword) => {
    // const isLogin = useSelector(state => state.Auth.isLoggedIn);
    return async (dispatch) => {
    let url;
    url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDq1S9QbSJjke7R6kS9kYC5WQFjmf5Jt6k";
   
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: Enteredemail,
        password: Enteredpassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            if (data && data.error && data.error.message) {
              let errorMsg = "Authentication failed" + data.error.message;
              throw new Error(errorMsg);
            }
          });
        }
      })
      .then((data) => {
        dispatch(AuthActions.LogIn(data.idToken));
        localStorage.setItem('Ecomm_email', JSON.stringify(data.email));
        console.log('Log in AuthSlice success....');
      })
      .catch((err) => {
        alert(err.message);
      });
    }
}


export const SignUpHandler = (Enteredemail, Enteredpassword) => {
    return async (dispatch) => {
    let url;
    url ="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDq1S9QbSJjke7R6kS9kYC5WQFjmf5Jt6k";
    
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: Enteredemail,
        password: Enteredpassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
            console.log('Signup success');
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            if (data && data.error && data.error.message) {
              let errorMsg = "Authentication failed" + data.error.message;
              throw new Error(errorMsg);
            }
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
    }
}