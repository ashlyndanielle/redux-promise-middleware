import * as starwars from '../services/starwars';

const GET_PEOPLE = 'GET_PEOPLE';
// the way that redux-promise-middleware works is it takes your action
// like the one above and will attach one of two words to it like below

// when you first request the information it will attach "pending"
const GET_PEOPLE_PENDING = 'GET_PEOPLE_PENDING';
// when you get the data it will attach fulfilled
const GET_PEOPLE_FULFILLED = 'GET_PEOPLE_FULFILLED';

const initialState = {
  people: [],
  loading: false
}

export default function reducer(state=initialState, action) {
  console.log('action.payload: ', action.payload);
  switch(action.type) {
    case GET_PEOPLE_PENDING:
      console.log('pending: ', action.payload)
      return Object.assign({}, state, {loading: true})

    case GET_PEOPLE_FULFILLED:
      console.log('fulfilled: ', action.payload)
      return Object.assign({}, state, {loading: false, people: action.payload})

    case 'GET_PEOPLE_REJECTED':
      console.log('rejected')
      return

    default:
      return state
  }
}


// action creator
// for promise middleware you need to kick of the reducer with an action
// that has a payload that is itself a promise ( ie. starwars.getPeople() )
export function getPeople(){
  // const value = starwars.getPeople();
  // console.log('Value: ', value);
  return {
    type: GET_PEOPLE,
    payload: starwars.getPeople()
  }
}