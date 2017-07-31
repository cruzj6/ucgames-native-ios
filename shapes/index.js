import PropTypes from 'prop-types';

export default {

  GameShape: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.shape({
      icon_url: PropTypes.string,
    }),
  }),

};
