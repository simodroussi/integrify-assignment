import axios from 'axios';

const rootUrl = 'https://api.openbrewerydb.org/breweries';

export const getBreweries = () => axios.get(rootUrl);
