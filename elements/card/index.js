import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const Card = ({ title, children, imageUri }) => (
  <View style={styles.container}>
    { title && <Text style={styles.title}>{title}</Text> }
    { imageUri && <Image style={styles.image} source={{ uri: imageUri, cache: 'force-cache' }} /> }
    { children && children }
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0,
    margin: 5,
    padding: 5,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: '#ffffff',
  },

  title: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },

  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },

  content: {

  },
});


Card.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  imageUri: PropTypes.string,
  link: PropTypes.string,
};

export default Card;
