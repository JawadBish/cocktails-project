import React, { useState } from 'react'
import useStyles from './styles'
import { Card, CardActions, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { useDispatch } from 'react-redux';
import { likeCocktail, deleteCocktail } from '../../../actions/cocktails';
import { useHistory } from 'react-router-dom';
import '../../../index.css';
import GoogleFontLoader from 'react-google-font-loader';
import defaultImg from '../../../images/header-wood.jpg';

const Cocktail = ({ cocktail, setCurrentId }) => {
    const dispatch = useDispatch();
    const styleclass = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result.googleId || user?.result?._id;
    const [setLikes] = useState(cocktail?.likes);
    const hasLikedCocktail = cocktail.likes.find((like) => like === userId);
    const history = useHistory();

    <GoogleFontLoader
        fonts={[
            {
                font: 'Zen Kurenaido',
                weights: [400, 'Regular 400'],
            },
        ]}
        subsets={['cyrillic-ext', 'greek']}
    />

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
            <CardMedia className={styleclass.media} image={cocktail.selectedFile || defaultImg} name={cocktail.name} />
            <div className={styleclass.overlay}>
                <Typography align="center" variant="h3" style={{ fontFamily: 'Zen Kurenaido', color: '#ffc107', textTransform: 'none', opacity: 1, fontWeight: "bold" }} >{cocktail.name}</Typography>
            </div>
            <div className={styleclass.overlay2}>
                {(user?.result?.googleId === cocktail?.creator || user?.result?._id === cocktail?.creator) && (
                    <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(cocktail._id)}><MoreHorizIcon fontSize="medium" /></Button>
                )}

            </div>
            <ButtonBase onClick={openCocktail} >
                <div className="mainFont">
                    <Typography align="center" style={{ fontFamily: 'Zen Kurenaido', color: '#ffc107', textTransform: 'none', opacity: 1, fontWeight: "bolder" }}>Cocktail Details</Typography>
                </div>
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

        </Card >
    );
};

export default Cocktail
