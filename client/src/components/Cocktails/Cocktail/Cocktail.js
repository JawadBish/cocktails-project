import React, { useState } from 'react'
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likeCocktail, deleteCocktail } from '../../../actions/cocktails';


const Cocktail = ({ cocktail, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(cocktail?.likes);
    const userId = user?.result.googleId || user?.result?._id;
    const hasLikedCocktail = cocktail.likes.find((like) => like === userId);

    console.log("USER ID : ", userId);
    console.log("USER  : ", user);
    const handleLike = async () => {
        dispatch(likeCocktail(cocktail._id));

        if (hasLikedCocktail) {
            setLikes(cocktail.likes.filter((id) => id !== userId));
        } else {
            setLikes([...cocktail.likes, userId]);
        }
    };

    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === userId)
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };


    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={cocktail.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={cocktail.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{cocktail.name}</Typography>
                <Typography variant="body2">{moment(cocktail.createdAt).fromNow()} || {cocktail.creator} </Typography>
            </div>
            {(user?.result?.googleId === cocktail?.creator || user?.result?._id === cocktail?.creator) && (
                <div className={classes.overlay2}>
                    <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(cocktail._id)}><MoreHorizIcon fontSize="medium" /></Button>
                </div>
            )}
            <div className={classes.recipe}>
                <Typography variant="body2" color="textSecondary" component="h2">{cocktail.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.tags} gutterBottom variant="h5" component="h2">{cocktail.ingredients}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{cocktail.recipe}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>

                <Button size="small" color="primary" style={{ textTransform: 'none' }} disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                </Button>

                {(user?.result?.googleId === cocktail?.creator || user?.result?._id === cocktail?.creator) && (

                    <Button size="small" style={{ textTransform: 'none', color: '#fc0313' }} onClick={() => dispatch(deleteCocktail(cocktail._id))}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>

                )}
            </CardActions>
        </Card>
    );
};

export default Cocktail
