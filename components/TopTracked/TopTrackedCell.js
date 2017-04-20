import React from 'react';
import globalStyles from '../../style/variables';
import {
    StyleSheet,
    Text,
    View,
		Image,
		TouchableHighlight
} from 'react-native';

const TopTrackedCell = ({ game }) => {
	return(
		<TouchableHighlight>
		<View style={styles.container}>
			<Image source={{uri: game.imageLink.icon_url}}
				style={styles.imageStyle}/>
			<Text style={styles.textStyle}>{game.name}</Text>
		</View>
		</TouchableHighlight>
	);
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	imageStyle: {
		width: 80,
		height: 80
	},
	textStyle: {
		paddingLeft: 10,
		fontFamily: globalStyles.baseFontFamily
	}
});

export default TopTrackedCell;
