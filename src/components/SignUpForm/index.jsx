import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { login } from '../redux';

function SignUpForm() {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const OnSend = (e) => {
    e.preventDefault();
    const email = document.querySelector('#fmail').value;
    const password = document.querySelector('#fpassword').value;
    const confirmPassword = document.querySelector('#confirm_password').value;
    if (password != confirmPassword) {
      alert("Passwords don't match");
    } else {
      const log = { "user": { "email": email, "password": password } };
      fetch('http://127.0.0.1:3000/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(log),
      })
        .then((data) => {
          Cookies.set('Bearer', data.headers.get("authorization").split(" ")[1]);
          dispatch({ type: login(), data });
        });
    };
  }
  useEffect(() => {
    if (user.id !== (undefined || null)) {
      history.push('/');
    }
  }, [user]);

  return (
    <div className="formcontainer">
      <form onSubmit={OnSend} className="signUp signform" >
        <div className="formbg-inner padding-horizontal--48">
          <span className="padding-bottom--15 titleform">Créer un compte</span>
          <div className="field">
            <input className="champform" name="email" type="email" id="fmail" placeholder="Email" required />
          </div>
          <div className="field">
            <input className="champform" type="password" id="fpassword" name="password" placeholder="Password" required />
          </div>
          <button type="submit" className="boutonform">Valider</button>
          <div className="endform">
            <a className="endquestforms" >Déjà membre ? </a>
            <a className="end__link" href="#">Connectez-vous</a>
          </div>
        </div>
      </form>
    </div>
  );
}
export default SignUpForm;
