import React, { PropTypes } from 'react';
import { Dashboard } from './Dashboard';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export class DashboardContainer extends React.Component {

    static propTypes = {
        navigator: PropTypes.object.isRequired
    }

    _onForward = () => { this.props.navigator.push({}); }

    render() {
        const { componentStyles } = this.props;

				return (
				    <View>
							<Dashboard componentStyles={componentStyles} />
				    </View>
				)
    }
}
