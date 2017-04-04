// Required libraries
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { connect } from 'react-redux';

// Required files
import store from './store';
import Otters from './components/Otters.jsx';
import Home from './components/Home.jsx';

// ------------ Component
const Root = (props) => {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ Home }>
        <Route path="/otters" component={ Otters } onEnter={ props.fetchOtters }/>
      </Route>
    </Router>
  );
};

// ------------ Container Component

// Required files
import { fetchOtters } from './reducers/otters';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    fetchOtters: () => {
      dispatch(fetchOtters());
    }
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(Root);
