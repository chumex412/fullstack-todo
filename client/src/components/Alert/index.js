import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { alertAction } from '../../_actions/creator';

const Alert = ({
  success={},
  error={} 
}) => {
  const dispatch = useDispatch()

  const [content, setContent] = useState("");
  const [style, setStyles] = useState({})
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if(success.isSuccess) {
      setContent(success.message)
      setStyles({
        padding: "2rem",
        borderBottom: "3px solid #2062a0",
        color: "#2062a0",
        margin: "1rem 0"
      })
      setDuration(1000)

    } else if(error.isError) {
      setContent(error.message)
      setStyles({
        padding: "2rem",
        color: "#be2b1e",
        borderBottom: "3px solid #be2b1e",
        margin: "1rem 0"
      })
      setDuration(3500)
  
    } else {
      setContent("")
      setStyles({})
      setDuration(0)
    }
  }, [success, error])

  useEffect(() => {
    if(success.isSuccess || error.isError) {
      const timeout = setTimeout(function() {
        dispatch(alertAction().clear())
        setContent("")
      }, duration)

      return function() {
        clearTimeout(timeout)
      }
    }
  }, [success, error, dispatch, duration])


  
  return (
    <AlertContainer 
      className={`${(success.isSuccess || error.isError) ? "show-alert" : ""} `} 
      style={{
        textAlign: "center",
        ...style
      }}>
      {content}
    </AlertContainer>
  )

}

const AlertContainer = styled.div`
  position: fixed;
  right: 0;
  top: 20%;
  transform: translateX(50%);
  -moz-transform: translateX(50%);
  -webkit-transform: translateX(50%);
  transition: transform var(--transition-val);
  -moz-transition: transform var(--transition-val);
  -webkit-transition: transform var(--transition-val);
  opacity: 0;
  visibility: hidden;
  background-color: var(--off-white);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  font-size: calc(1.8rem * var(--base-size));
  line-height: 150%;

  &.show-alert {
    transform: translateX(0);
    -moz-transform: translateX(0);
    -webkit-transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
`


export default React.memo(Alert)