import React, { Component } from 'react';
import TopTrackedList from './TopTrackedList';
import * as selectors from '../reducers/topTracked';
import * as topTrackedActions from '../actions/TopTracked';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class TopTracked extends Component{

	componentWillMount() {
			this.props.dispatch(topTrackedActions.getTopTracked());
	}

	render(){
		const { topTracked, error, dispatch } = this.props;
		const actions = bindActionCreators({...topTrackedActions}, dispatch);

		const topTrackedListProps = {
			topTracked,
			error,
			...actions
		}

		return (
			<View>
				<TopTrackedList {...topTrackedListProps}/>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		topTracked: selectors.getTopTracked(),
		error: selectors.getTopTrackedError()
	}
}

export default connect(mapStateToProps)(TopTracked)
