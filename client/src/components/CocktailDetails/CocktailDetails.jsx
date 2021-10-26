import React , {useEffect} from 'react'
import { Paper, Typography, CircularProgress, Divider, Button} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment';
import useStyles from './styles';
import { getCocktail, getCocktailsBySearch } from '../../actions/cocktails';
import altImage from '../../images/altimage.jpg';
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
          <Typography variant="h3" component="h3" style={{ textTransform: 'none', backgroundColor: '#ffc107', color: '#FFFFFF', opacity: 1, fontWeight: "bolder" }} >{cocktail.name}</Typography>
          <Divider style={{ margin: '20px 0', background : '#ffc107',  height: '2px'  }} />

          <Typography gutterBottom variant="body" color="textSecondary" component="h2">{cocktail.ingredients.map((ingredient) => ` | ${ingredient} | `) 
          }</Typography>
          <Typography gutterBottom variant="body1" component="p"> {cocktail.recipe}</Typography>
          
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2"  
          style={{textTransform: 'none', background : '#ffc107', color:'#FFFFFF', fontWeight: 'bolder' }}
          > {cocktail.tags.map((tag) => `#${tag} `)}</Typography>

          {/* <Typography variant="h6">Created by: {cocktail.creator}</Typography> */}
          {/* <Typography variant="body1">Created Date : {moment(cocktail.createdAt).fromNow()}</Typography> */}
          {/* <Divider style={{ margin: '20px 0' }} /> */}
          
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={cocktail.selectedFile ? cocktail.selectedFile : altImage } alt={cocktail.name} />
        </div>
      </div>
      {recommendedCocktails.length > 0 && (
        <div className={classes.section}>
          <Divider style={{ margin: '20px 0', background : '#ffc107',  height: '1px'  }} />
          <Typography  style={{textTransform: 'none', background : '#FFFFFF', color:'#ffc107' }} gutterBottom variant="h6">You might also like:</Typography>
          <div className={classes.recommendedPosts}>
            {recommendedCocktails.map(({ name, creator, likes, _id,tags }) => (
              <div className={classes.related} style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openCocktail(_id)} key={_id}>
                <Typography  style={{textTransform: 'none', background : '#FFFFFF', color:'#ffc107' }} gutterBottom variant="subtitle2">{name}</Typography>
                {/* <Typography gutterBottom variant="subtitle2">{creator}</Typography> */}
                <Typography  style={{textTransform: 'none', background : '#FFFFFF', color:'#ffc107' }} gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <Typography  style={{textTransform: 'none', background : '#FFFFFF', color:'#ffc107' }} gutterBottom variant="subtitle2">{tags.map((tag) => `#${tag} `)}</Typography>
              </div>
            ))}
          </div>
        </div>
      )}
      <Button  style={{textTransform: 'none', background : '#ffc107', color:'#FFFFFF', fontWeight: 'bolder' }} onClick={() => history.goBack()}>Back</Button>
    </Paper>
  
  );
};

export default CocktailDetails
