import { extractData, getDataStart, getDataFailure } from "../action/action";

const endPoint = 'https://safe-headland-55991.herokuapp.com/api/messages';

const fetchData = () => (fetch(endPoint));

const getData = () => (dispatch) =>{
  dispatch(getDataStart());
  fetchData()
   .then((res) => res.json())
   .then((result) => dispatch(getDataStart(result)))
   .catch((err) => dispatch(getDataFailure(err.message)));
};

export default getData;