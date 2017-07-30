import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';

// Dumb component that displays the given tracked games
const TrackedList = ({ componentStyles, trackedGames }) => {
  const renderCell = game => (
    <View>
      <Text>{game.name}</Text>
      <Image
        source={{ uri: game.imageLink.icon_url }}
        style={styles.trackedCellImage}
      />
    </View>
  );

  return (
    <View style={[componentStyles]}>
      <Text>UCGames</Text>
      <ListView
        dataSource={trackedGames}
        renderRow={renderCell}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  trackedCellImage: {
    width: 80,
    height: 80,
  },
});

TrackedList.propTypes = {
  componentStyles: PropTypes.object.isRequired,
  trackedGames: PropTypes.array.isRequired,
};

export default TrackedList;
