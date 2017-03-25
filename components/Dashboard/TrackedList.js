import React from 'react';
import appStyle from '../../style/appStyle';
import {
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    TouchableHighlight,
		ListView
} from 'react-native';

// Dumb component that displays the given tracked games
const TrackedList = ({ componentStyles, trackedGames }) => {

	const renderCell = (game) => {
		return (
			<View>
				<Text>{game.name}</Text>
				<Image
					source={{uri: game.imageLink.icon_url}}
					style={[appStyle.trackedList.cell.image]}
					/>
			</View>
		);

	}

	return(
	  <View style={[appStyle.trackedList, componentStyles]}>
	      <Text>UCGames</Text>
				<ListView
					dataSource={trackedGames}
					renderRow={renderCell}/>
	  </View>
	)
}

export default TrackedList;
