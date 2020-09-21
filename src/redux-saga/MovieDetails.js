import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
    ArrowLeftCircle as BackIcon,
    Star as StartIcon
 } from "react-feather";
import {
    Box,
    Container,
    IconButton,
    Typography,
    makeStyles
} from "@material-ui/core";
import Image from "material-ui-image";
// import { Skeleton } from "@material-ui/lab"
import theme from "./../theme"

const useStyles = makeStyles((theme) => {
    return {
        root:{},
        herobox: {
            backgroundColor: "#353533",
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column'
            }
        },
        hero: {
            width: 300,
            height: 450,
            borderRadius: 15
        },
        gold: {
            color: "#FFD700",
            textShadow: "0px 0px 2px #FFD700"
        },
    }
})

const imgBaseUrl = "http://image.tmdb.org/t/p/w780"

export default function MovieDetails() {


    const selMov = useSelector(state => state.movies.selectedMovie)
    /* const selMov = {
        popularity: 1888.9,
        vote_count: 1524,
        video: false,
        poster_path: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
        id: 337401,
        adult: false,
        backdrop_path: '/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
        original_language: 'en',
        original_title: 'Mulan',
        genre_ids: [
            28,
            12,
            18,
            14,
            10752
        ],
        title: 'Mulan',
        vote_average: 7.6,
        overview: 'When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.',
        release_date: '2020-09-10'
    } */


    return (
        <Container
            maxWidth="md"
        >
            {
                selMov.title ? (
                    <React.Fragment>
                        <Header movie={selMov} />
                        <Hero movie={selMov}/>
                    </React.Fragment>
                ) : 'No Movie Selected'
            }
        </Container>
    )
}

const Header = ({ movie }) => {
    const nav = useNavigate()
    const handleBack = () => {
        nav('/',{replace: true})
    }

    return (
        <Box
            display="flex"
            mt={1.5}
        >
            <Box
                mt="auto"
                mb="auto"
            >
                <IconButton
                    color="primary"
                    size="large"
                    onClick={handleBack}
                >
                    <BackIcon />
                </IconButton>
            </Box>
            <Box
                mt="auto"
                mb="auto"
            >
                <Typography
                    variant="h3"
                    color="textPrimary"
                >
                    {movie.title}
                </Typography>
            </Box>
        </Box>
    )
}

const Hero = ({ movie }) => {

    const classes = useStyles()
    
    return (
        <Box
            display="flex"
            mt={3}
            p={1}
            borderRadius={15}
            className={classes.herobox}
            >
            {/* <img 
                className={classes.hero}
                src={imgBaseUrl+movie.poster_path}
                alt="Poster"
            /> */}
            <Image
                // className={classes.hero}
                color={theme.palette.background.card}
                src={imgBaseUrl+movie.poster_path}
                animationDuration={1500}
                imageStyle={{
                    width: 300,
                    height: 450,
                    borderRadius: 15,
                    position: "relative"
                }}
                style={{
                    paddingTop: 0,
                }}
                // onClick={() => console.log('onClick')}
                // aspectRatio={(2/3)}
                disableSpinner
            />
            <Details movie={movie}/>
        </Box>
    )
}

const Details = ({ movie }) => {
    
    const classes = useStyles()
    return(
        <Box
            display="flex"
            flexDirection="column"
            alignItems="left"
            ml={3}
            mt={1}
        >
            {/* <PerfectScrollBar> */}
                <Box>
                    <Typography
                        color="textPrimary"
                        variant="caption"
                    >Name
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h2"
                    >{movie.title}
                    </Typography>
                </Box>
                <Box
                    mt={2}
                >
                    <Typography
                        color="textPrimary"
                        variant="caption"
                    >Overview
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="body1"
                    >{movie.overview}
                    </Typography>
                </Box>
                <Box
                    mt="auto"
                >
                    {/* <Typography
                        color="textPrimary"
                        variant="caption"
                    >Rating
                    </Typography> */}
                    <StartIcon 
                        className={classes.gold}
                    />
                    <Typography
                        className={classes.gold}
                        variant="h3"
                    >{movie.vote_average}
                    </Typography>
                </Box>
            {/* </PerfectScrollBar> */}

        </Box>
    )
}