import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import {
  View,
  ListView,
} from 'react-native';
import Shapes from '../../shapes';
import TopTrackedCell from './topTrackedCell';
import { selectors } from '../../reducers/topTracked';
import topTrackedActions from '../../actions/TopTracked';

const { GameShape } = Shapes;

const TopTrackedList = ({ topGames, onSelect }) => {
  const ds = new ListView.DataSource({ rowHasChanged: (a, b) => a !== b });
  const dataSource = ds.cloneWithRows(topGames);

  return (
    <View>
      <ListView
        dataSource={dataSource}
        enableEmptySections
        renderRow={game => (
          <TopTrackedCell
            onSelect={() => onSelect(game.id)}
            name={game.name}
            iconUri={game.imageLink.icon_url}
          />
        )}
      />
    </View>
  );
};

TopTrackedList.propTypes = {
  onSelect: PropTypes.func,
  topGames: PropTypes.arrayOf(GameShape),
};

const mapStateToProps = state => ({
  topGames: selectors.getTopTrackedGames(state),
  error: selectors.getTopTrackedError(state),
});

const EnhancedTopTrackedList = compose(
  connect(mapStateToProps),
  lifecycle({
    componentWillMount() {
      const { dispatch } = this.props;
      dispatch(topTrackedActions.getTopTracked(10));
    },
  }),
)(TopTrackedList);

EnhancedTopTrackedList.propTypes = {
  onSelect: PropTypes.func,
};

export default EnhancedTopTrackedList;
