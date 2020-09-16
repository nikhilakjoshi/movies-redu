import React, { useState, useEffect } from 'react'
import { 
    TextField,
    Box,
    InputAdornment,
    SvgIcon,
    makeStyles,
    withStyles,
    Button
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";
import theme from 'src/theme';
import { useSelector } from "react-redux";

const useStyles = makeStyles({
    textField: {
        paddingTop: 24,
        borderColor: theme.palette.text.primary,
        color: theme.palette.text.primary
    },
    outline: {
        borderColor: theme.palette.text.primary
    }
})

const CssTextField = withStyles({
    root: {
      /* '& label.Mui-focused': {
        color: 'green',
      }, */
      '& .MuiInput-underline:before': {
        borderBottomColor: theme.palette.text.primary,
      },
      /* '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      }, */
    },
  })(TextField);


export default function MovieSearch({ triggerSearch }) {
    
    const srchTxt = useSelector(state => state.movies.srchTxt)
    useEffect(() => {
        if(srchTxt !== "") {
            setText(srchTxt)
        }
    },[srchTxt])
    
    const classes = useStyles()
    
    const [searchText, setText] = useState("")

    const handleText = (e) => {
        setText(e.target.value)
    }

    const SearchMovie = () => {
        triggerSearch(searchText)
    }

    return (
        <Box
            mb={3}
        >
                <CssTextField
                    size="small"
                    fullWidth
                    className={classes.textField}
                    onChange={handleText}
                    value={searchText}
                    InputProps={{
                        classes: {
                            outline: classes.outline
                        },
                        startAdornment: (
                            <InputAdornment position="start">
                                <SvgIcon
                                    fontSize="small"
                                    color="primary"
                                >
                                    <SearchIcon />
                                </SvgIcon>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <Button
                                size="small"
                                color="primary"
                                variant="contained"
                                onClick={SearchMovie}
                            >Go</Button>
                        )
                    }}
                    placeholder="Search Movies"
                    variant="standard"
                    color="primary"
                />
        </Box>
    )
}
