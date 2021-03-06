import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  View,
} from 'react-native';
import * as topTrackedSelectors from '../../reducers/topTracked';

export const GameSummary = ({ game }) => (
  <View>
    {game.id}{game.name}{game.desc}
  </View>
);

const mapStateToProps = (state, { gameId }) => ({
  game: topTrackedSelectors.getTopTrackedGame(state, gameId),
});

GameSummary.propTypes = {
  game: PropTypes.object.isRequired,
};

const connectedGameSummary = connect(mapStateToProps)(GameSummary);

connectedGameSummary.propTypes = {
  gameId: PropTypes.string.isRequired,
};

export default connectedGameSummary;
