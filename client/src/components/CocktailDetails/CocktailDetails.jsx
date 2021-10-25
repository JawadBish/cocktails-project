import React , {useEffect} from 'react'
import { Paper, Typography, CircularProgress, Divider, Button} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment';
import useStyles from './styles';
import { getCocktail, getCocktailsBySearch } from '../../actions/cocktails';
// import aeImage from '../../images/ae.jpg';
const CocktailDetails = () => {
    
  const { cocktail, cocktails, isLoading } = useSelector((state) => state.cocktails);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCocktail(id));
  },[id]);

  useEffect(() => {
    if (cocktail) {
      dispatch(getCocktailsBySearch({ search: 'none', tags: cocktail?.tags.join(',') }));
    }
  }, [cocktail]);

  if (!cocktail) return null;

  const openCocktail = (_id) => history.push(`/cocktails/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={8} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }
 

  const recommendedCocktails = cocktails.filter(({ _id }) => _id !== cocktail._id);
console.log("RECO" , recommendedCocktails)
  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={8}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{cocktail.name}</Typography>
          <Divider style={{ margin: '20px 0', background : '#ffc107',  height: '7px'  }} />
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2"> Tags : {cocktail.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2"> Ingredients: {cocktail.ingredients.map((ingredient) => `#${ingredient} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p"> Recipe :{cocktail.recipe}</Typography>
          <Typography variant="h6">Created by: {cocktail.creator}</Typography>
          <Typography variant="body1">Created Date : {moment(cocktail.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />

        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={cocktail.selectedFile} alt={cocktail.createdAt} />
        </div>
      </div>
      {recommendedCocktails.length > 0 && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider style={{ margin: '20px 0', background : '#ffc107',  height: '3px'  }} />
          <div className={classes.recommendedPosts}>
            {recommendedCocktails.map(({ name, creator, likes, _id,tags }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openCocktail(_id)} key={_id}>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{creator}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <Typography gutterBottom variant="subtitle2">{tags.map((tag) => `#${tag}`)}</Typography>
              </div>
            ))}
          </div>
        </div>
      )}
      <Button onClick={() => history.goBack()}>Back</Button>
    </Paper>
  
  );
};

export default CocktailDetails
