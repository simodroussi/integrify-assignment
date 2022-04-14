export default (breweries = [], action) => {
  switch (action.type) {
    case 'GET_ALL':
      return action.payload;
    default:
      return breweries;
  }
};
