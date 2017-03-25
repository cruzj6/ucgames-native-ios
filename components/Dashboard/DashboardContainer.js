import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TrackedList from './TrackedList';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// Smart component that contains the dashboard components
class DashboardContainer extends React.Component {

    static propTypes = {
        navigator: PropTypes.object.isRequired
    }

    _onForward = () => { this.props.navigator.push({}); }

    render() {
        const { componentStyles, trackedGames } = this.props;

				const dashboardProps = {
					componentStyles,
					trackedGames
				}

				return (
				    <View>
							<TrackedList {...dashboardProps}/>
				    </View>
				)
    }
}

export default DashboardContainer;
