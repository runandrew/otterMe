// Required libraries
import React from 'react';
import { connect } from 'react-redux';

// ------------- Component
const Otters = (props) => {
  return (
    <div>
      <h1>These are the otters!</h1>
      <ul>
    { props.otters.map(otter => (
      <li key={ otter.id }>{ otter.name }</li>
    )) }
      </ul>
    </div>
  );
};

// ------------- Container
const mapStateToProps = (state) => {
  return {
    otters: state.otters.allOtters
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Otters);
