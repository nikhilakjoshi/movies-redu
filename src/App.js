import React from 'react';
import { useRoutes } from "react-router-dom";
import GlobalStyles from "src/components/GlobalStyles"
import { ThemeProvider } from "@material-ui/core";
// import routes from "src/routes"
import routes from "src/redux-saga/routes"
import theme from "src/theme"
import './App.css';
// import Posts from "src/redux/Posts"
// import PostForm from "src/redux/PostForm"
// import store from "src/redux/store";
import store from "src/redux-saga/store";
// import Movies from "src/redux-saga/Movies";
// import MovieSearch from "src/redux-saga/MovieSearch";

import { Provider } from "react-redux";

function App() {
  const routing = useRoutes(routes)
  return (
    <Provider
      store={store}
    >
      <ThemeProvider
        theme={theme}
        >
        <GlobalStyles />
        {/* <PostForm /> */}
        {/* <Posts /> */}
        {/* <MovieSearch />
        <Movies /> */}
        {routing}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
