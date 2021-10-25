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
    top: '20px',
    textShadow: '1px 5px 3px rgba(15, 14, 14, 0.733)',
    // left: '20px',
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    // right: '20px',
    textShadow: '1px 5px 3px rgba(15, 14, 14, 0.733)',
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
