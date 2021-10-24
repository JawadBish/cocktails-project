import React, { useState } from 'react'
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likeCocktail, deleteCocktail } from '../../../actions/cocktails';
import { useHistory } from 'react-router-dom';


const Cocktail = ({ cocktail, setCurrentId }) => {
    const dispatch = useDispatch();
    const styleclass = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result.googleId || user?.result?._id;
    const [likes, setLikes] = useState(cocktail?.likes);
    const hasLikedCocktail = cocktail.likes.find((like) => like === userId);
    const history = useHistory();

    const handleLike = async () => {
        dispatch(likeCocktail(cocktail._id));

        if (hasLikedCocktail) {
            setLikes(cocktail.likes.filter((id) => id !== userId));
        } else {
            setLikes([...cocktail.likes, userId]);
        }
    };

    const Likes = () => {
        if (cocktail.likes.length > 0) {
            return cocktail.likes.find((like) => like === userId)
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{cocktail.likes.length > 2 ? `You and ${cocktail.likes.length - 1} others` : `${cocktail.likes.length} like${cocktail.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{cocktail.likes.length} {cocktail.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    const openCocktail = () => {
        history.push(`/cocktails/${cocktail._id}`)
    }


    return (
        <Card className={styleclass.card}>
            <CardMedia className={styleclass.media} image={cocktail.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={cocktail.title} />
            <div className={styleclass.overlay}>
                <Typography variant="h6">{cocktail.name}</Typography>
                <Typography variant="body2">{moment(cocktail.createdAt).fromNow()} || {cocktail.creator} </Typography>
            </div>
            <div className={styleclass.overlay2}>
                {(user?.result?.googleId === cocktail?.creator || user?.result?._id === cocktail?.creator) && (
                    <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(cocktail._id)}><MoreHorizIcon fontSize="medium" /></Button>
                )}
            </div>

            <ButtonBase className={styleclass.cardAction} onClick={openCocktail} >

                <div className={styleclass.recipe}>
                    <Typography variant="body2" color="textSecondary" component="h2">{cocktail.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography className={styleclass.tags} gutterBottom variant="h5" component="h2">{cocktail.ingredients}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{cocktail.recipe}</Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={styleclass.cardActions}>

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
