import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';
import TrackedList from './TrackedList';

// Smart component that contains the dashboard components
class DashboardContainer extends React.Component {
  _onForward() {
    this.props.navigator.push({});
  }

  render() {
    const { componentStyles, trackedGames } = this.props;

    const dashboardProps = {
      componentStyles,
      trackedGames,
    };

    return (
      <View>
        <TrackedList {...dashboardProps} />
      </View>
    );
  }
}

DashboardContainer.propTypes = {
  componentStyles: PropTypes.object.isRequired,
  trackedGames: PropTypes.array.isRequired,
  navigator: PropTypes.object.isRequired,
};

export default DashboardContainer;
