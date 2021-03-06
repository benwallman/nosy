import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ListenButton = ({ onClick }) => (
  <Button
    onClick={onClick}
    color="primary"
    variant="contained"
  >
    Listen now
  </Button>
);

ListenButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ListenButton;
