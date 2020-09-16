import React from 'react';
import { useRoutes } from "react-router-dom";
import GlobalStyles from "src/components/GlobalStyles"
import { ThemeProvider } from "@material-ui/core";
import routes from "src/routes"
import theme from "src/theme"
import './App.css';
// import Posts from "src/redux/Posts"
// import PostForm from "src/redux/PostForm"
// import store from "src/redux/store";
import store from "src/redux-saga/store";
import Movies from "src/redux-saga/Movies";

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
        <Movies />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
