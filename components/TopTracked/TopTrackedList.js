import React from 'react';
import TopTrackedCell from './TopTrackedCell';
import {
    StyleSheet,
    Text,
    View,
		ListView
} from 'react-native';

const TopTrackedList = ({ topTracked }) => {

	const ds = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});
	const dataSource = ds.cloneWithRows(topTracked);

	const listProps = {
		dataSource,
		enableEmptySections: true,
		renderRow: (game) => <TopTrackedCell game={game}/>
	};

	return (
		<View>
			<ListView {...listProps}/>
		</View>
	)
}

export default TopTrackedList;
