import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { createCocktail, updateCocktail } from '../../actions/cocktails';


const Form = ({ currentId, setCurrentId }) => {

    const [cocktailsData, setCocktailData] = useState({
        name: '',
        creator: '',
        recipe: '',
        ingredients: '',
        selectedFile: '',
        tags: ''
    })

    const classes = useStyles();
    const dispatch = useDispatch();
    const cocktail = useSelector((state) => (currentId ? state.cocktails.find((cocktail) => cocktail._id === currentId) : null));

    useEffect(() => {
        if (cocktail) setCocktailData(cocktail);
    }, [cocktail]);


    const clear = () => {
        setCurrentId(null);
        setCocktailData({ name: '', creator: '', recipe: '', ingredients: '', selectedFile: '', tags: '' })
    }




    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateCocktail(currentId, cocktailsData));
        } else {
            dispatch(createCocktail(cocktailsData));

        }
        clear();
    }




    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${cocktail.name}"` : 'Creating a Cocktail'}</Typography>

                <TextField name="name" variant="outlined" label="Name" fullWidth={true} value={cocktailsData.name} onChange={(e) => setCocktailData({ ...cocktailsData, name: e.target.value })} />
                <TextField name="creator" variant="outlined" label="Creator" fullWidth={true} value={cocktailsData.creator} onChange={(e) => setCocktailData({ ...cocktailsData, creator: e.target.value })} />
                <TextField name="recipe" variant="outlined" label="Recipe" fullWidth={true} multiline rows={4} value={cocktailsData.recipe} onChange={(e) => setCocktailData({ ...cocktailsData, recipe: e.target.value })} />
                <TextField name="ingredients" variant="outlined" label="Ingredients (coma separated)" fullWidth={true} value={cocktailsData.ingredients} onChange={(e) => setCocktailData({ ...cocktailsData, ingredients: e.target.value.split(',') })} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth={true} value={cocktailsData.tags} onChange={(e) => setCocktailData({ ...cocktailsData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setCocktailData({ ...cocktailsData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth={true}
                    style={{ backgroundColor: '#990000', color: '#FFFFFF' }}
                >Submit</Button>
                <Button variant="contained" style={{ backgroundColor: '#FFFFFF', color: '#fc0313' }} size="small" onClick={clear} fullWidth={true}>Clear</Button>
            </form>
        </Paper>
    );
}



export default Form;
