import { makeStyles } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        background: 'white',
        opacity: 0.9,
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        padding: '10px 50px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    heading: {
        color: amber[500],
        textDecoration: 'none',
        fontSize: '3em',
        fontWeight: 900,
        textShadow: '1px 5px 3px rgba(15, 14, 14, 0.733)',
        opacity: 1,
    },
    image: {
        marginLeft: '10px',
        marginTop: '5px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            marginTop: 20,
            justifyContent: 'center',
        },
    },
    logout: {
        marginLeft: '20px',
        boxShadow: '0px 5px 5px rgba(15, 14, 14, 0.733)',
    },
    userName: {

        color: amber[500],
        background: 'white',
        fontWeight: "bolder",
        fontSize: '2rem',
        textShadow: '0px 5px 3px rgba(15, 14, 14, 0.733)',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    login: {
        marginLeft: '20px',
        boxShadow: '0px 5px 5px rgba(15, 14, 14, 0.733)',
    },
    golden: {

        backgroundColor: amber[500],
        color: 'white',
        fontWeight: "bolder",
    }
}));