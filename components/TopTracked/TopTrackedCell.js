import React, { PropTypes } from 'react';
import globalStyles from '../../style/variables';
import gameSummary from '../gameSummary/gameSummary';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

const TopTrackedCell = ({ name, iconUri }) => {
  const openGameInfo = () => {
    // TODO: open gameSummary passing it ID, it uses selector to get game object
  };
  console.log({ name, iconUri });
  return (
    <TouchableHighlight onPress={openGameInfo}>
      <View style={styles.container}>
        <Image source={{ uri: iconUri }} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 80,
    height: 80,
  },
  textStyle: {
    paddingLeft: 10,
    fontFamily: globalStyles.baseFontFamily,
  },
});

TopTrackedCell.propTypes = {
  name: PropTypes.string.isRequired,
  iconUri: PropTypes.string.isRequired,
};

export default TopTrackedCell;
