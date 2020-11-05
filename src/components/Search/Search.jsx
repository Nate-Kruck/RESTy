import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

function Search({ response }) {
  return (
    <div data-testid="display">
      <ReactJson
        src={response}
        displayDataTypes={false}
        displayObjectSize={false}
        theme={'brewer'} />
    </div>
  );
}

Search.propTypes = {
  response: PropTypes.object
};

export default Search;
