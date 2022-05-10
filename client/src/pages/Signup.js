import React, { useState, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { successAlert, errorAlert, registerLoading, registerSuccess } from '../_selectors/userSelector';
import FormButton from '../components/Form/FormButton';
import Input from '../components/Form/Input';
import { userAction } from '../_actions/userAction';
import { utils } from '../_utils/index';
import Alert from '../components/Alert';

const Signup = () => {
  // Redux state
  const loading = useSelector(state => registerLoading(state));
  const regSuccess = useSelector(state => registerSuccess(state));
  const success = useSelector(state => successAlert(state));
  const errorMsg = useSelector(state => errorAlert(state));

  // Component state
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [error, setError] = useState("")
  const { state } = useLocation();

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;

    setFields({ ...fields, [name]: value })
  }, [fields])

  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(function() {
    if(regSuccess) {
      const timeout = setTimeout(function() {
        navigate('/login')
      }, 1500);
      return function() {
        clearTimeout(timeout)
      }
    }
  })
  
  // Handler to submit user details
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!utils.checkEmptyFields(fields)) {
      setError('All fields are required')
      return;
    }

    if(fields.password !== fields.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    dispatch(userAction.register({
      name: fields.name,
      email: fields.email,
      password: fields.password,
      admin: state.role === "admin",
      tasks: (state.role === "admin" ? null : [])
    }, () => {

    }))
  }

  if(state.role === "admin") {
    return (
      <SignupMain>
        <div className="container">
          <Alert 
            success={{
              isSuccess: success?.length,
              message: success
            }}
            error={{
              isError: errorMsg?.length,
              message: errorMsg
            }}
          />
          <section>
            <form onSubmit={handleSubmit}>
              <Input 
                placeholder="Enter company name e.g Facebook"
                label="Company name"
                value={fields.name}
                name="name"
                hasError={error}
                onChange={handleChange}
                required 
              />
              <Input 
                type="email"
                placeholder="Enter email address"
                label="Email address"
                value={fields.email}
                name="email"
                hasError={error}
                onChange={handleChange}
                required 
              />
              <Input
              type="password" 
                placeholder="Enter password"
                label="Password"
                value={fields.password}
                name="password"
                hasError={error}
                onChange={handleChange}
                required 
              />
              <Input
                type="password" 
                placeholder="Re-enter your password"
                label="Confirm password"
                value={fields.confirmPassword}
                name="confirmPassword"
                hasError={error}
                onChange={handleChange}
                required 
              />
              <FormButton 
                type="submit"
                color="#a9a21f"
                full_width
                border="#03131e"
                bgColor="#03131e"
                value="Sign up"
                onClick={() => {}}
                loading={loading}
              />
            </form>
          </section>
        </div>
      </SignupMain>
    )
  }

  if(state.role === "user") {
    return (
      <SignupMain>
        <div className="container">
          <Alert 
            success={{
              isSuccess: success?.length,
              message: success
            }}
            error={{
              isError: errorMsg?.length,
              message: errorMsg
            }}
          />
          <section>
            <h2>Your task organization journey starts right now</h2>
            <form onSubmit={handleSubmit}>
              <Input 
                placeholder="Enter username"
                label="Username"
                value={fields.name}
                name="name"
                hasError={error}
                onChange={handleChange}
                required 
              />
              <Input 
                type="email"
                placeholder="Enter email address"
                label="Email address"
                value={fields.email}
                name="email"
                hasError={error}
                onChange={handleChange}
                required 
              />
              <Input
              type="password" 
                placeholder="Enter password"
                label="Password"
                value={fields.password}
                name="password"
                hasError={error}
                onChange={handleChange}
                required 
              />
              <Input
                type="password" 
                placeholder="Re-enter your password"
                label="Confirm password"
                value={fields.confirmPassword}
                name="confirmPassword"
                hasError={error}
                onChange={handleChange}
                required 
              />
              <FormButton 
                type="submit"
                color="#a9a21f"
                full_width
                border="#03131e"
                bgColor="#03131e"
                value="Sign up"
                onClick={() => {}}
                loading={loading}
              />
            </form>
          </section>
        </div>
      </SignupMain>
    )
  }
}

const SignupMain = styled.main`
  background-color: var(--gray-color-1);
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

export default Signup;