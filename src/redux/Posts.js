import React, { useEffect } from 'react'
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./actions/postAction";
import { Container, Backdrop, CircularProgress, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

// const Posts = ({ fetchPosts, posts }) => {
const Posts = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.items)
    const open = useSelector(state => state.posts.loading)

    useEffect(() => {
        // fetchPosts()
        dispatch(fetchPosts())
    }, [])

    return (
        <Container
            maxWidth="md"
        >
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <div>
                <h1>Posts</h1>
                <ol>

                    {
                        posts.map(post => {
                            return (
                                <li
                                    key={post.id}
                                >
                                    <h4>
                                        {post.title}
                                    </h4>
                                    <p>
                                        {post.body}
                                    </p>

                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </Container>
    )
}

// export default connect(mapStateToProps, { fetchPosts })(Posts)
export default Posts