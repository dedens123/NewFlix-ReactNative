import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconBackLight} from '../../assets';
import {colors} from '../../utils';

const DetailMovie = ({navigation, route}) => {
  const {title, thumbnail, genre, rating, duration, quality, trailer, watch} =
    route.params;

  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: thumbnail}} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <IconBackLight />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
          <Text style={styles.label}>Genre:</Text>
          <Text style={styles.desc}>{genre}</Text>
          <Text style={styles.label}>Rating:</Text>
          <Text style={styles.desc}>{rating}</Text>
          <Text style={styles.label}>Duration:</Text>
          <Text style={styles.desc}>{duration}</Text>
          <Text style={styles.label}>Quality:</Text>
          <Text style={styles.desc}>{quality}</Text>
          <Text style={styles.label}>Trailer:</Text>
          <Text style={styles.desc}>{trailer}</Text>
          <Text style={styles.label}>Watch:</Text>
          <Text style={styles.desc}>{watch}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailMovie;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {height: 330, paddingTop: 26, paddingLeft: 22},
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: colors.secondary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {flex: 1},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: 'white'},
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'white',
    marginBottom: 4,
  },
});
