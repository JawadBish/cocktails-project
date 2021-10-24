import React, {useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';

import useStyles from './styles'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCocktails } from '../actions/cocktails';

const Paginate = ({ page }) => {
    const { numberOfPages }  = useSelector((state) => state.cocktails)
    const styleclass = useStyles();
    const dispatch = useDispatch();

useEffect(()=> {
    if(page) dispatch(getCocktails(page));
},[page])
    return (
        <Pagination 
        styleclass={{ul: styleclass.ul }}
        count={numberOfPages}
        page={Number(page) || 1}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
            <PaginationItem {...item} component={Link} to={`/cocktails?page=${item.page}`} />
        )}
        />
    )
}

 export default Paginate;
