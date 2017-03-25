import React from 'react';
import appStyle from '../style/appStyle';
import {
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    TouchableHighlight,
		ListView
} from 'react-native';

export class Dashboard extends React.Component{

	constructor(){
		super(props);
	}

	renderCell(game) {
		return (
			<View>
				<Text>{game.name}</Text>
				<Image
					source={{uri: game.imageLink.icon_url}}
					stype={{width: 80, height: 80}}
					/>
			</View>
		);

	}

	render() {
	    const {
	        componentStyles,
					trackedItems
	    } = this.props;

	    return(
	        <View style={[appStyle.dashboard, componentStyles]}>
	            <Text>UCGames</Text>
							<ListView
								dataSource={trackedItems}
								renderRow={this.renderCell}
	        </View>
	    )
	}
}
