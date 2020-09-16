import React from 'react'
import { TextField, Button, Box, Container, Divider, TextareaAutosize } from "@material-ui/core";
import { Formik } from "formik";
import axios from "axios"
import { addPosts } from "./actions/postAction";
import { connect } from "react-redux";




const PostForm = ({ addPosts }) => {

    const SubmitPost = (values) => {
        /*  axios.post('https://jsonplaceholder.typicode.com/posts', values).then(resp => {
             console.log(resp)
         }) */
        addPosts(values)
    }

    return (
        <Container
            maxWidth="md"
        >

            <div>
                <h1>Add Post</h1>
                <Formik
                    initialValues={{
                        title: "",
                        body: ""
                    }}
                    onSubmit={SubmitPost}
                >{({
                    values,
                    handleBlur,
                    handleChange,
                    handleSubmit
                }) => {
                    return (
                        <form
                            onSubmit={handleSubmit}
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                            >
                                <TextField
                                    name="title"
                                    label="Title"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    variant="outlined"
                                    margin="normal"
                                    size="small"
                                />
                                <TextField
                                    name="body"
                                    label="Body"
                                    multiline
                                    value={values.body}
                                    margin="normal"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    variant="outlined"
                                    size="large"
                                />
                                <Box
                                    mt={2}
                                    mb={2}
                                >
                                    <Button
                                        fullWidth
                                        type="submit"
                                        variant="contained"
                                        size="small"
                                    >Submit Post</Button>
                                </Box>
                            </Box>
                        </form>

                    )
                }
                    }

                </Formik>
            </div>
            <Divider />
        </Container>
    )
}

export default connect(null, { addPosts })(PostForm)