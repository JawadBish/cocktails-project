import React from 'react'
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likeCocktail, deleteCocktail } from '../../../actions/cocktails';
import cocktailGif from '../../../images/cocktail.gif';
const Cocktail = ({ cocktail, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={cocktail.selectedFile || cocktailGif} title={cocktail.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{cocktail.name}</Typography>
                <Typography variant="body2">{moment(cocktail.createdAt).fromNow()} || {cocktail.creator} </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(cocktail._id)}><MoreHorizIcon fontSize="medium" /></Button>
            </div>
            <div className={classes.recipe}>
                <Typography variant="body2" color="textSecondary" component="h2">{cocktail.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.tags} gutterBottom variant="h5" component="h2">{cocktail.ingredients}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{cocktail.recipe}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likeCocktail(cocktail._id))}><ThumbUpAltIcon fontSize="small" /> Like {cocktail.likeCount} </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deleteCocktail(cocktail._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    );
};

export default Cocktail
