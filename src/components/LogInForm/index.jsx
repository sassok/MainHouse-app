import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import './style.css';
import { login } from '../redux';


function LogInForm  () {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

      const OnSend = (e) => {
        e.preventDefault();
          const email = document.querySelector('#fmail').value;
          const password = document.querySelector('#fpassword').value;
          
            const log = {"user": {"email": email, "password": password}};
            fetch('http://127.0.0.1:3000/users/sign_in', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json', 
              },
              
          
              body: JSON.stringify(log),
            })
            .then((response) => {
              
              console.log(response)
              return response;
            })
            .then((res) =>
              res
              
                .json()
                .then((json) => ({
                  token: res.headers.get("authorization").split(" ")[1],
                  json,
                }))
                .then(({ token, json }) => {
                  console.log(token)
                  console.log(json)
                  const email = json.token.email;
                  const building = json.token.immeuble_id;
                  const id = json.token.id; 
                  Cookies.set("user_id", json.token.id);
                  Cookies.set('Bearer', token);
                  Cookies.set('email', email);
                  Cookies.set('immeuble', building);
                  dispatch({ type: login(), token, email, id });
                })
            )
            
        };
          useEffect(() => {
            
            if (user.id !== (undefined || null)) {
              history.push('/');
            }
          }, [user]);
    return (
    <div className="formcontainer">
        <form onSubmit={OnSend} className="signUp signform" >
        <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15 titleform">Se connecter</span>
              <div className="field">
              <input className="champform" type="email" id="fmail" name="email" placeholder="Email" required />
              </div>
              <div className="field">
              <input className="champform" type="password" id="fpassword" name="password" placeholder="Password" required />
              </div>
              <button type="submit" id="loginButton" className="boutonform">Valider</button>
              <div className="endform">
              <a className="endquestforms" >Pas de compte ? </a>
              <a className="end__link" href="#">Inscrivez-vous</a>
              </div>
              </div>
        </form>
    </div>
    );
    
}
export default LogInForm;
