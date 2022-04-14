import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    margin: '20px',
    padding: '20px',
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    color: '#ff32c5',
  },
});
