import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const MoviesCard = ({image, name, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MoviesCard;

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 400,
    backgroundColor: '#281D60',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 7,
    overflow: 'hidden',
    marginHorizontal: 12,
    marginBottom: 30,
  },
  image: {width: 180, height: 300, resizeMode: 'cover'},
  content: {padding: 10},
  text: {fontSize: 16, fontFamily: 'Poppins-Regular', color: 'white'},
});
