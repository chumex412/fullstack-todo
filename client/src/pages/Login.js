import React from 'react';
import styled from 'styled-components';

import Input from '../components/Form/Input';
import FormButton from '../components/Form/FormButton';

const Login = () => {
  return (
    <SignupMain>
      <div className="container">
        <section>
          <h2>Login your dashboard</h2>
          <form>
            <Input
              type="email" 
              placeholder="Enter your email"
              label="Email address"
              value=""
              onChange={() => {}}
            />
            <Input
              type="password" 
              placeholder="Enter your password"
              label="Password"
              value=""
              onChange={() => {}}
            />
            <FormButton 
              type="submit"
              color="#a9a21f"
              full_width
              border="#03131e"
              bgColor="#03131e"
              value="Login"
            />
          </form>
        </section>
      </div>
    </SignupMain>
  )
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

export default Login