// Required libraries
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { connect } from 'react-redux';

// Required files
import store from './store';
import Otters from './components/Otters';

const Root = (props) => {
  return (
    <Router history={ browserHistory }>
      <Router path="/" component={ Otters } onEnter={ props.fetchOtters }/>
    </Router>
  );
};

// Required files
import { fetchOtters } from './reducers/otters';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    fetchOtters: () => {
      console.log('in fetch otters inside dispatch');
      dispatch(fetchOtters());
    }
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(Root);
