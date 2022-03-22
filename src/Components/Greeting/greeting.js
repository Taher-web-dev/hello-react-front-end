import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getData from '../../Redux/Greeting/thunk/thunk';

const Greeting = () => {
  const greetingState = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  let message = '';
  try {
    message = greetingState.message;
  } catch {
    if (Object.keys(greetingState).length === 0) {
      message = 'API NOT CONSMED YET!';
    } else if (greetingState.error) {
      message = greetingState.error;
    } else {
      message = 'Loading data...';
    }
  }
  useEffect(() => dispatch(getData()), []);
  return (
    <p>{message}</p>
  );
};

export default Greeting;
