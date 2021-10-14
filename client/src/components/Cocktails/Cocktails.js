import React from 'react'
import Cocktail from './Cocktail/Cocktail'
import  { useSelector } from 'react-redux';
//import useStyles from './styles'
const Cocktails = () => {

   // const classes = useStyles();
        const cocktails = useSelector((state)=> state.cocktails)
        console.log(cocktails);
    return (
        <div>
            <h1>Cocktails</h1>
        <Cocktail/> 
        <Cocktail/> 
        </div>
    )
}

export default Cocktails
