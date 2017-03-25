import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    TouchableHighlight,
		ListView
} from 'react-native';

const TopTrackedList = ({ topTracked }) => {
	return (
		<View>
			<Text>{JSON.stringify(topTracked)}</Text>
		</View>
	)
}

export default TopTrackedList;
