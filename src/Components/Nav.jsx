import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Components/Nav.css";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from "firebase/auth";

const Nav = ({ user, setUser, auth }) => {


const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user => {
      setLoading(false)
      console.log(user)
      user ? setUser(user) : setUser({})
    }))
  }, [])

  function register() {
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }


  return (
    <div>
      <nav>
        <div className="nav__container">
          <div className="nav__figures">
            <figure className="burger__figure">
              <FontAwesomeIcon icon="bars" className="bar" />
            </figure>
            <figure className="logo__figure">
              <img
                className="logo__img"
                src="https://frontendsimplified.com/_nuxt/img/Frontend%20Simplified%20Logo.853fbda.png"
                alt=""
              />
            </figure>
          </div>
          <div className="nav__buttons">
            <button onClick={login} className="btn btn__login">
              Login
            </button>
            <button className="btn btn__login">
              {loading ? 'Loading...' : user.email}
            </button>
            <button onClick={logout} className="btn btn__register">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
