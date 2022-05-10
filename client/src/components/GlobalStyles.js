import { createGlobalStyle } from "styled-components";

const GlobablStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  :root {
    --base-size: 0.8;
    --duration: 0.3s;
    --transition-val: var(--duration) ease-out;
    --primary-color: #206da0;
    --accent-color: #cac333;
    --secondary-dark: #03131e;
    --gray-color-1: #eff4f5;
    --gray-color-2: #DDE3E2; 
    --light-color: #eafbff;
    --red-color: #be2b1e;
    --off-white: #f8fafb;
  }

  body {
    font-size: 1rem;
    font-family: "Noto Sans", sans-serif;
  }

  a,
  button {
    display: inline-block;
  }

  button {
    font-size: calc(1.6rem * var(--base-size));
    line-height: 150%;
    padding: 1rem;
    -webkit-transition: var(--transition-val);
    -moz-transition: var(--transition-val);
    transition: var(--transition-val);
    border-radius: 8px;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .sidebar-toggler {
    background-color: transparent;
    border: none;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    visibility: visible;
    opacity: 1;
    z-index: 10;
  }

  svg .a {
    fill:none;
    stroke-linecap:round;
    stroke-width:2px;
    transition: all 0.4s ease-out;
    -webkit-transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
  }

  @media only screen and (min-width: 600px) {
    :root {
      --base-size: 0.9;
    }

    .container {
      max-width: 540px;
    }
  }

  @media only screen and (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media only screen and (min-width: 900px) {
    .sidebar-toggler {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }

  @media only screen and (min-width: 992px) {
    :root {
      --base-size: 1;
    }

    .container {
      max-width: 960px;
    }
  }

  @media only screen and (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`;

export default GlobablStyle;