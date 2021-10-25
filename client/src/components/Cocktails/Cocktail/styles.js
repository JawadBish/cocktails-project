import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '60.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backgroundBlendMode: 'darken',
    textAlign: 'center',
  },
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
    borderRadius: '35px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    textAlign: 'center',
    top: '15px',
    textShadow: '1px 5px 3px rgba(15, 14, 14, 0.733)',
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    boxShadow: '0px 0px 1px 1px #ffc107',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },

  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
