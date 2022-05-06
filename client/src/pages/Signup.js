import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import FormButton from '../components/Form/FormButton';

import Input from '../components/Form/Input';

const Signup = () => {
  const [error, setError] = useState("")
  const { state } = useLocation();
  console.log(state)

  if(state.role === "admin") {
    return (
      <SignupMain>
        <div className="container">
          <section>
            <form>
              <Input 
                placeholder="Enter company name e.g Facebook"
                label="Company name"
                value=""
                hasError={error}
                onChange={() => {}}
                required 
              />
              <Input 
                type="email"
                placeholder="Enter email address"
                label="Email address"
                value=""
                hasError={error}
                onChange={() => {}}
                required 
              />
              <Input
              type="password" 
                placeholder="Enter password"
                label="Password"
                value=""
                hasError={error}
                onChange={() => {}}
                required 
              />
              <Input
                type="password" 
                placeholder="Re-enter your password"
                label="Confirm password"
                value=""
                hasError={error}
                onChange={() => {}}
                required 
              />
              <FormButton 
                type="submit"
                color="#a9a21f"
                full_width
                border="#03131e"
                bgColor="#03131e"
                value="Sign up"
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
          <section>
            <h2>Your task organization journey starts right now</h2>
            <form>
              <Input 
                placeholder="Enter username"
                label="Username"
                value=""
                hasError={error}
                onChange={() => {}}
                required 
              />
              <Input 
                type="email"
                placeholder="Enter email address"
                label="Email address"
                value=""
                hasError={error}
                onChange={() => {}}
                required 
              />
              <Input
              type="password" 
                placeholder="Enter password"
                label="Password"
                value=""
                hasError={error}
                onChange={() => {}}
                required 
              />
              <Input
                type="password" 
                placeholder="Re-enter your password"
                label="Confirm password"
                value=""
                hasError={error}
                onChange={() => {}}
                required 
              />
              <FormButton 
                type="submit"
                color="#a9a21f"
                full_width
                border="#03131e"
                bgColor="#03131e"
                value="Sign up"
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
  min-height: 90vh;
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