import React, { Component } from 'react';
import TopTrackedList from './TopTrackedList';
import { connect } from 'react-redux';

class TopTracked extends Component{
	render(){
		return (
			<View>
				<TopTrackedList />
			</View>
		)
	}
}

export default TopTracked;
