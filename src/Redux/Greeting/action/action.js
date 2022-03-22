export const START = 'HELLO/GREETING/START';
export const FAILURE = 'HELLO/GREETING/FAILURE';
export const GET = 'HELLO/GREETING/GET';

export const getDataStart = () => ({
  type: START
});

export const getDataFailure = (payload) => ({
  type: FAILURE,
  payload,
});

export const extractData = (payload) => ({
    type: GET,
    payload
});