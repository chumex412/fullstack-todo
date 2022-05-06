import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <div>
      <Hero>
        <section>
          <h1>Organize your task for the week right here</h1>
          <HeroBtnContainer>
            <Link to="/signup" state={{role: "admin"}}>Register as an admin</Link>
            <Link to="/signup" state={{role: "user"}}>Register as a user</Link>
          </HeroBtnContainer>
          <p>
            <Link to="/login">Click here</Link>{ " " }
            to login if you already have an account
          </p>
        </section>
      </Hero>
    </div>
  )
}

const Hero = styled.section`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    min-height: 90vh;
    background: linear-gradient(45deg, var(--off-white), var(--gray-color-1));
  }

  h1 {
    font-size: calc(4.2rem * var(--base-size));
    line-height: 120%;
    
  }

  p {
    font-size: calc(1.35rem * var(--base-size));
    line-height: 150%;
    
    a {
      color: var(--accent-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const HeroBtnContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;

  a {
    border: 1px solid var(--secondary-dark);
    padding: 1.5rem;
    background-color: transparent;
    text-decoration: none;
    border-radius: 8px;
    font-size: calc(1.8rem * var(--base-size));
    color: var(--secondary-dark);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    -webkit-transition: var(--transition-val);
    -moz-transition: var(--transition-val);
    transition: var(--transition-val);

    &:hover {
      color: var(--off-white);
      background-color: var(--secondary-dark);
    }
  }
`;

export default Home;