import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.js';
import './Signin.css';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext.js';
import Switch from '@material-ui/core/Switch';

function Signin() {
  const addMember = async (e) => {
    e.preventDefault();

    const userData = {
      userType: 'Admin',
      userFullName: 'ro_admin',
      admissionId: '1',
      employeeId: null,
      age: '1',
      dob: '01/01/2000',
      gender: 'Male',
      address: 'bpl',
      mobileNumber: '1234',
      email: 'rohannmahajan0707@gmail.com',
      password: '123456',
      isAdmin: true,
    };
    try {
      const response = await axios.post(
        'http://localhost:4000/api/auth/register',
        userData
      );

     alert(`Member Added`);
    } catch (err) {
      console.log(err);
    }
  };

  const addCategory = async (e) => {
    e.preventDefault();

    const userData = {
      categoryName: "data structures"
    };

    try {
      const response = await axios.post(
        'http://localhost:4000/api/categories/addcategory',
        userData
      );

     alert(`Member Added`);
    } catch (err) {
      console.log(err);
    }
  }

  const [isStudent, setIsStudent] = useState(true);
  const [admissionId, setAdmissionId] = useState();
  const [employeeId, setEmployeeId] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const { dispatch } = useContext(AuthContext);

  const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('http://localhost:4000/api/auth/signin', userCredential);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err });
      setError('Wrong Password Or Username');
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    isStudent
      ? loginCall({ admissionId, password }, dispatch)
      : loginCall({ employeeId, password }, dispatch);
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <form onSubmit={handleForm}>
          <h2 className="signin-title"> Log in</h2>

          <p className="line"></p>
          
          <div className="persontype-question">
            <p>Are you a Staff member?</p>
            <Switch onChange={() => setIsStudent(!isStudent)} color="primary" />
          </div>
          
          <div className="error-message">
            <p>{error}</p>
          </div>
          
          <div className="signin-fields">
            <label htmlFor={isStudent ? 'admissionId' : 'employeeId'}>
              {' '}
              <b>{isStudent ? 'Admission ID' : 'Employee ID'}</b>
            </label>

            <input
              className="signin-textbox"
              type="text"
              placeholder={
                isStudent ? 'Enter Admission ID' : 'Enter Employee ID'
              }
              name={isStudent ? 'admissionId' : 'employeeId'}
              required
              onChange={(e) => {
                isStudent
                  ? setAdmissionId(e.target.value)
                  : setEmployeeId(e.target.value);
              }}
            />
            
            <label htmlFor="password">
              <b>Password</b>
            </label>
            
            <input
              className="signin-textbox"
              type="password"
              minLength="6"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button className="signin-button">Log In</button>

          {/* <a className="forget-pass" href="#home">
            Forgot password?
          </a> */}
        </form>
        
        <div className="signup-option">
          <p className="signup-question">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>

          {/* <button onClick={addMember}>add Admin</button> */}
        </div>
      </div>
    </div>
  );
}

export default Signin;
