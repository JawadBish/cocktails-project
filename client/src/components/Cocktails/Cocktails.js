import React from 'react'
import Cocktail from './Cocktail/Cocktail'
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles'

const Cocktails = ({ setCurrentId }) => {
    const cocktails = useSelector((state) => state.cocktails);
    const classes = useStyles();
    console.log("COCKTAILS", cocktails);

    // if (isLoading) {
    //     return (<>
    //         <CircularProgress />
    //     </>)
    // }
    // else {
    //     if (cocktails?.length < 1 || cocktails === 'undefined') {
    //         return (<>
    //             <h1 className={classes.h1} style={{ backgroundColor: '#FFFFFF', color: '#990000' }}>No Cocktails Found</h1>
    //         </>)
    //     }
    // }

    return (
        cocktails?.length < 1 ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {cocktails?.map((cocktail) => (
                    <Grid key={cocktail._id} item xs={12} sm={12} md={6} lg={4}>
                        <Cocktail cocktail={cocktail} setCurrentId={setCurrentId} />
                    </Grid>
                ))

                }
            </Grid>

        )
    )
}

export default Cocktails
