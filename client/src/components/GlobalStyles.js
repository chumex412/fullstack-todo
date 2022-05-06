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
    --gray-color-1: #eceaea;
    --light-color: #eafbff;
    --off-white: #f8fafb;
  }

  body {
    font-size: 1rem;
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