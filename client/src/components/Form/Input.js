import React from 'react';
import styled from 'styled-components';

const Input = ({
  type = "text", 
  name,
  title, 
  placeholder,
  label,
  value,
  hasError,
  onChange,
  sr_only,
  required 
}) => {
  return (
    <div className="input-field">
      <FormGroup>
        <label 
          htmlFor={name}
          className={`label ${sr_only ? "sr_only" : ""}`}
        >
            <span>{label}</span>
            {required && (
              <svg xmlns="http://www.w3.org/2000/svg" width="10" heigh="10" fill="none" viewBox="0 0 10 10">
                <path fill="#F24E1E" d="M8.2 6 6.5 5l1.8-1a.2.2 0 0 0 0-.3l-.5-1a.2.2 0 0 0-.3 0l-1.7 1v-2a.2.2 0 0 0-.2-.2H4.3a.2.2 0 0 0-.2.2v2l-1.7-1a.2.2 0 0 0-.3 0l-.5 1V4l1.8 1-1.7 1a.2.2 0 0 0-.1.3l.5 1a.2.2 0 0 0 .3 0l1.7-1v2l.2.2h1.2a.2.2 0 0 0 .2-.2v-2l1.7 1a.2.2 0 0 0 .3 0l.5-1a.2.2 0 0 0 0-.3Z"/>
              </svg>
            )}
          </label>
        <input
        type={type}
          className="form_input" 
          id={name}
          name={name} 
          placeholder={placeholder}
          value={value} 
          onChange={ (e) => {
            onChange(e)
          }}
        />
      </FormGroup>
      {
        (required && !value && hasError) ? (
          <small className={styles.error_msg}>The {title} field is required</small>
        ) : null
      }
    </div>
  )
}

const FormGroup = styled.div`
  position: relative;

  .form_input {
    display: block;
    width: 100%;
    padding: 1rem 1.25rem;
    border-radius: 5px;
    border: 1px solid var(--primary-color, darkblue);
    background-color: transparent;
  }

  .label {
    padding: 0.4rem;
    color: var(--primary-color, darkblue);
    background-color: var(--off-white);
    position: absolute;
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
    left: 0.8rem;
    top: 0;
    margin-bottom: 0;
    vertical-align: middle;
    opacity: 1;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition-property: top font-size;
    -moz-transition-property: top font-size;
    transition-property: top font-size;
    -webkit-transition: 0.4s ease-out;
    -moz-transition: 0.4s ease-out;
    transition: 0.4s ease-out;
    z-index: 2;
  }

  .label span {
    margin-right: 1px;
  }

  .form_input:focus {
    outline: none;
    border: 1px solid var(--secondary-light, black);
  }

  .form_input::-webkit-input-placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1px;
    color: #BEB7B7;
  }

  .error_msg {
    font-size: 9px;
    line-height: 100%;
    color: #F24E1E;
  }
`

export default React.memo(Input);