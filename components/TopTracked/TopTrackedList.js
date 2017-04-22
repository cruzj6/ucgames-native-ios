import React from 'react';
import TopTrackedCell from './TopTrackedCell';
import * as selectors from '../../reducers/topTracked';
import * as topTrackedActions from '../../actions/TopTracked';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
		ListView
} from 'react-native';

export class TopTrackedList extends React.Component {

	componentWillMount () {
		const { dispatch } = this.props;
		dispatch(topTrackedActions.getTopTracked());
	}

	render() {
		const { topTracked, error, dispatch } = this.props;
		const actions = bindActionCreators({...topTrackedActions}, dispatch);

		const ds = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});
		const dataSource = ds.cloneWithRows(topTracked);

		return (
			<View>
				<ListView
					dataSource={dataSource}
					enableEmptySections={true}
					renderRow={(game) => <TopTrackedCell name={game.name} iconUri={game.imageLink.icon_url}/>}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		topTracked: selectors.getTopTracked(state),
		error: selectors.getTopTrackedError(state)
	}
}

export default connect(mapStateToProps)(TopTrackedList)
