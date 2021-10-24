import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow } from '@material-ui/core';
import Cocktails from '../../components/Cocktails/Cocktails'
import Form from '../../components/Form/Form'
import { useDispatch } from 'react-redux';
import { getCocktails } from '../../actions/cocktails';


const Home = () => {

    const [currentId, setCurrentId] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch])

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Cocktails setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
