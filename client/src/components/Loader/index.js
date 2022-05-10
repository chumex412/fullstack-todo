import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <SpinnerContainer>
      <div className="spinner">
      </div>
    </SpinnerContainer>
  )
}

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    width: 2em;
    height: 2em;
    background-color: transparent;
    border: 2px solid rgba(17, 20, 45, 0.4);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 0.5s linear infinite;
    -moz-animation: spin 0.5s linear infinite;
    -webkit-animation: spin 0.5s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    to {
      transform: rotate(360deg);
      --moz-transform: rotate(360deg);
      --webkit-transform: rotate(360deg);
    }
  }
`;

export default Loader