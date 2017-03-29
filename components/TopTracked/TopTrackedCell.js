import React from 'react';
import {
    StyleSheet,
    Text,
    View,
		Image
} from 'react-native';

const TopTrackedCell = ({ game }) => {
	return(
		<View>
			<Image source={{uri: game.imageLink.icon_url}}
				style={styles.imageStyle}/>
			<Text>{game.name}</Text>
		</View>
	);
}

var styles = StyleSheet.create({
	imageStyle: {
		width: 80,
		height: 80
	}
});

export default TopTrackedCell;
