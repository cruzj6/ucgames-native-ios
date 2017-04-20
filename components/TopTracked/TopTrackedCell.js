import React from 'react';
import {
    StyleSheet,
    Text,
    View,
		Image
} from 'react-native';

const TopTrackedCell = ({ game }) => {
	return(
		<View style={styles.container}>
			<Image source={{uri: game.imageLink.icon_url}}
				style={styles.imageStyle}/>
			<Text style={styles.textStyle}>{game.name}</Text>
		</View>
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
		fontFamily: 'Helvetica'
	}
});

export default TopTrackedCell;
