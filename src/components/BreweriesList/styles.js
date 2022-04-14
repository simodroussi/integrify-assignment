import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  searchGrid: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 10px',
  },
}));
