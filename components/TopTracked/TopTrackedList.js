import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  ListView,
} from 'react-native';
import TopTrackedCell from './TopTrackedCell';
import * as selectors from '../../reducers/topTracked';
import topTrackedActions from '../../actions/TopTracked';

class TopTrackedList extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(topTrackedActions.getTopTracked(10));
  }

  render() {
    const { topTracked } = this.props;

    const ds = new ListView.DataSource({ rowHasChanged: (a, b) => a !== b });
    const dataSource = ds.cloneWithRows(topTracked);

    return (
      <View>
        <ListView
          dataSource={dataSource}
          enableEmptySections
          renderRow={game => <TopTrackedCell name={game.name} iconUri={game.imageLink.icon_url} />}
        />
      </View>
    );
  }
}

TopTrackedList.propTypes = {
  dispatch: PropTypes.func,
  topTracked: PropTypes.array,
};

const mapStateToProps = state => ({
  topTracked: selectors.getTopTracked(state),
  error: selectors.getTopTrackedError(state),
});

export default connect(mapStateToProps)(TopTrackedList);
