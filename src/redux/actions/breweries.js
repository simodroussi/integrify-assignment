import * as api from '../../api';

// Creators

export const getBreweries = () => async (dispatch) => {
  try {
    const { data } = await api.getBreweries();
    const action = { type: 'GET_ALL', payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
