import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
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
    <View style={[appStyle.trackedList, componentStyles]}>
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

export default TrackedList;
