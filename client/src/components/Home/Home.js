import React, { useState } from 'react';
import { Container, Grid, Grow, Paper, TextField, Button } from '@material-ui/core';
import Cocktails from '../../components/Cocktails/Cocktails'
import Form from '../../components/Form/Form'
import { useDispatch } from 'react-redux';
import Pagination from '../Pagination';
import { useHistory, useLocation } from 'react-router-dom';
import useStyles from './styles';
import { getCocktailsBySearch } from '../../actions/cocktails';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const Home = () => {

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags] = useState([]);
    const styleclass = useStyles();


    const searchCocktail = () => {

        if (search.trim() || tags.length > 0) {
            dispatch(getCocktailsBySearch({ search, tags: tags.join(',') }));
            history.push(`/cocktails/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            history.push('/')
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            //search for cocktail
        }
    }



    return (
        <Grow in>
            <Container maxWidth="xl">

                <Paper elevation={8} className={styleclass.pagination}>

                    <TextField className={styleclass.searchfield}
                        name="search"
                        variant="outlined"
                        label="Search Cocktail"
                        autoComplete='off'
                        onKeyPress={handleKeyPress}
                        value={search}
                        fullWidth
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button onClick={searchCocktail} className={styleclass.searchButton} style={{ textTransform: 'none', backgroundColor: '#ffc107', color: '#FFFFFF', opacity: 1, fontWeight: "bolder" }} variant="contained" > Search </Button>

                </Paper>


                <br />
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={styleclass.gridContainer}>



                    <Grid item xs={12} sm={6} md={9}>
                        <Cocktails setCurrentId={setCurrentId} />

                        <br></br>
                        {(!searchQuery && !tags.length) && (
                            <Paper elevation={8} className={styleclass.pagination}>
                                <Pagination page={page} />
                            </Paper>
                        )}
                        <br />

                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>

                </Grid>




            </Container>
        </Grow >
    )
}

export default Home
