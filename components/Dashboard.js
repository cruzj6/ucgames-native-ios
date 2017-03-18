import React from 'react';
import appStyle from '../style/appStyle';
import {
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    TouchableHighlight
} from 'react-native';

export class Dashboard extends React.Component{

    render(){
        const {
            componentStyles
        } = this.props;

        return(
            <View style={[appStyle.dashboard, componentStyles]}>
                <Text>UCGames</Text>
            </View>
        )
    }
}