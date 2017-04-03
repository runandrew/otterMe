// Required libraries
import React from 'react';
import { connect } from 'react-redux';

// ------------- Component
const Otters = (props) => {
  return (
    <h1>Inside the otters component</h1>
  );
};

// ------------- Container
const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Otters);
