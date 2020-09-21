import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setSelectedMovie } from "./actions/moviesAcion";
import { red } from '@material-ui/core/colors';
import moment from "moment";
import "./css/clamp.css"
import { useNavigate } from "react-router-dom";
import { 
    Card,
    CardHeader,
    CardContent,
    // CardMedia,
    makeStyles,
    Typography,
    Grid,
} from "@material-ui/core";
import Image from "material-ui-image";
import { Skeleton } from "@material-ui/lab"
import theme from "./../theme"


const imgBaseUrl = "http://image.tmdb.org/t/p/w780"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: 350,
        backgroundColor: "#353533",
        cursor: "pointer"
    },
    gdcont: {
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center'
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));



export default function Movies() {
    const classes = useStyles();
    const movies = useSelector(state => state.movies.movies)


    return (
        <Grid
            className={classes.gdcont}
            container
            spacing={2}
        >
        {
            movies.length > 0 ? movies.map(movie => (
                <Grid
                    item
                    md={4}
                >
                    <MoviedCard
                        classes={classes}
                        movie={movie}
                    />
                </Grid>
            )) : 
            Array.apply(null, Array(10)).map(function () {}).map(o=>(
            <Grid
                item
                md={4}
            >
                <Skeleton 
                    variant="rect" height={350}
                />
            </Grid>
            ))
        }
        </Grid>

    )
}

const MoviedCard = ({ movie, classes }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const setSelectedMov = () => {
        dispatch(setSelectedMovie({
            movie: movie
        }))
        navigate(`/movie/${movie.id}`)
    }
    
    return (
        <Card 
            className={classes.root}
            onClick={setSelectedMov}
        >
            <CardHeader
                className="clamp1"
                title={movie.title}
                subheader={moment(movie.release_date,"YYYY-MM-DD").format("MMMM Do YYYY")}
            />
            {/* <CardMedia
                className={classes.media}
                // image={imgBaseUrl+movie.backdrop_path}
                component={
                    <Image
                        src={imgBaseUrl+movie.backdrop_path}
                        // onClick={() => console.log('onClick')}
                        // aspectRatio={(16/9)}
                        // disableSpinner
                    />
                }
            /> */}
            <Image
                // className={classes.img}
                color={theme.palette.background.card}
                src={imgBaseUrl+movie.backdrop_path}
                animationDuration={1500}
                // onClick={() => console.log('onClick')}
                aspectRatio={(16/9)}
                disableSpinner
            />
            <CardContent>
                <Typography 
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="clamp9"
                >
                    {movie.overview}
                </Typography>
            </CardContent>
        </Card>
    )
}
