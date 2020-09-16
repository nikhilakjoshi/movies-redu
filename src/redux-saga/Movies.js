import React from 'react'
// import React, { useEffect } from 'react'
// import { useSelector } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedMovie } from "./actions/moviesAcion";
// import { List, ListItem, Container, ListItemText } from "@material-ui/core";
import { red } from '@material-ui/core/colors';
import moment from "moment";
import "./css/clamp.css"
import { useNavigate } from "react-router-dom";
import { 
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    makeStyles,
    Container,
    Typography,
    Grid,
} from "@material-ui/core";

const imgBaseUrl = "http://image.tmdb.org/t/p/w780"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: 350,
        backgroundColor: "#353533",
        cursor: "pointer"
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
            container
            spacing={2}
        >
        {
            movies.map(movie => (
                <Grid
                    item
                    md={4}
                >
                    <MoviedCard
                        classes={classes}
                        movie={movie}
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
                /* avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                } */
                /* action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                } */
                className="clamp1"
                title={movie.title}
                subheader={moment(movie.release_date,"YYYY-MM-DD").format("MMMM Do YYYY")}
            />
            <CardMedia
                className={classes.media}
                image={imgBaseUrl+movie.backdrop_path}
                // title="Paella dish"
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
            {/* <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions> */}
            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
          </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
          </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
                </CardContent>
            </Collapse> */}
        </Card>
    )
}
