import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Input from '../components/Form/Input';
import FormButton from '../components/Form/FormButton';
import Alert from '../components/Alert/index';
import {utils} from '../_utils/index'
import { userAction } from '../_actions/userAction';
import { loginLoading, successAlert, errorAlert, authenticate } from '../_selectors/userSelector';

const Login = () => {
  const [fields, setFields] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loading = useSelector(state => loginLoading(state));
  const authenticated = useSelector(state => authenticate(state));
  const success = useSelector(state => successAlert(state));
  const error = useSelector(state => errorAlert(state));

  useEffect(function() {
    if(authenticated) {
      const timeout = setTimeout(function() {
        navigate('/dashboard')
      }, 1500);

      return function() {
        clearTimeout(timeout)
      }
    }
  })

  // Form input
  const handleChange = useCallback(({target}) => {
    const { name, value } = target;

    setFields({ ...fields, [name]: value })
  }, [fields])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!utils.checkEmptyFields(fields)) {
      return
    }

    dispatch(userAction.login(fields))
  }
  return (
    <SignupMain>
      <div className="container">
        <Alert 
          success={{
            isSuccess: success?.length,
            message: success
          }}
          error={{
            isError: error?.length,
            message: error
          }}
        />
        <section>
          <h2>Login your dashboard</h2>
          <form onSubmit={handleSubmit}>
            <Input
              type="email" 
              placeholder="Enter your email"
              label="Email address"
              value={fields.email}
              name="email"
              onChange={handleChange}
              required
            />
            <Input
              type="password" 
              placeholder="Enter your password"
              label="Password"
              value={fields.password}
              name="password"
              onChange={handleChange}
              required
            />
            <FormButton 
              type="submit"
              color="#a9a21f"
              full_width
              border="#03131e"
              bgColor="#03131e"
              value="Login"
              onClick={() => {}}
              loading={loading}
            />
          </form>
        </section>
      </div>
    </SignupMain>
  )
}

const SignupMain = styled.main`
  background-image: linear-gradient(45deg, var(--light-color), var(--off-white));
  background-repeat: no-repeat;
  padding: 3rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;

  section {
    background-color: var(--off-white);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    padding: 2rem 1rem;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    border-radius: 5px;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 120%;
    color: var(--secondary-dark);
    text-align: center;
  }

  form {
    padding: 4rem 1rem;
    display: grid;
    grid-auto-rows: 1fr;
    gap: 2rem;
  }
`;

export default Login