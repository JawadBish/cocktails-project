import React from 'react'

import useStyles from './styles'
const Form = () => {
    const classes = useStyles();

    // //const fact = useSelector((state) => currentId ? state.facts.facts.find((f) => f._id === currentId) : null);
    // const styleclass = useStyles();
    // const [factData, setFactData] = useState({
    //     name: '',
    //     recipe: '',
    //     ingredients: '',
    //     creator: '',
        
    //     likes: {
    //         type: [String],
    //         default: [],
    //     },

    //     category: '',
    //     message: '',
    //     tags: '',
    // });
    // const dispatch = useDispatch();
    // const user = JSON.parse(localStorage.getItem('profile'));
    // const history = useHistory();

    // useEffect(() => {
    //     if (fact) setFactData(fact);
    // }, [fact]);


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (currentId) {
    //         dispatch(updateFact(currentId, { ...factData, name: user?.result?.name }));
    //     } else {
    //         dispatch(createFact({ ...factData, name: user?.result?.name }, history));

    //     }
    //     clear();
    // }


    // const clear = () => {
    //     setCurrentId(null);
    //     setFactData({ category: '', message: '', tags: '' })
    // }


    // // if (!user?.result?.name) {
    // //     return (
    // //         <Paper className={styleclass.paper}>
    // //             <Typography variant="h6" align="center">
    // //                 Please Sign In to create your own facts and like others facts!
    // //             </Typography>
    // //         </Paper>
    // //     )
    // // }

    return (
        <>Hello</>
        // <Paper className={styleclass.paper}>
        //     <form autoComplete="off" noValidate className={`${styleclass.root} ${styleclass.form}`} onSubmit={handleSubmit}>
        //         <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Fact </Typography>
        //         {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth={true} value={factData.creator} onChange={(e) => setFactData({ ...factData, creator: e.target.value })} /> */}
        //         {/* <TextField name="title" variant="outlined" label="Title" fullWidth={true} value={factData.title} onChange={(e) => setFactData({ ...factData, title: e.target.value })} /> */}
        //         <TextField name="message" variant="outlined" label="Fact" fullWidth={true} multiline rows={4} value={factData.message} onChange={(e) => setFactData({ ...factData, message: e.target.value })} />
        //         <TextField name="category" variant="outlined" label="Category" fullWidth={true} value={factData.category} onChange={(e) => setFactData({ ...factData, category: e.target.value })} />
        //         <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth={true} value={factData.tags} onChange={(e) => setFactData({ ...factData, tags: e.target.value.split(',') })} />

        //         <Button className={styleclass.buttonSubmit} variant="contained" size="large" type="submit" fullWidth={true}
        //             style={{ backgroundColor: '#990000', color: '#FFFFFF' }}
        //         >Submit</Button>
        //         <Button variant="contained" style={{ backgroundColor: '#FFFFFF', color: '#fc0313' }} size="small" onClick={clear} fullWidth={true}>Clear</Button>
        //     </form>
        // </Paper>
    );
}

export default Form;
