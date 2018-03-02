import axios from 'axios';

const URL = 'https://swapi.co/api/people/';

export const getPeople = function() {
  return axios.get('https://swapi.co/api/people/')
  .then( response => response.data.results )
}