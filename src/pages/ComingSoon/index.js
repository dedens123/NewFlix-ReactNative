import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import {Gap, MoviesCard} from '../../component';
import {colors, fonts} from '../../utils';
import {FlatList} from 'react-native-gesture-handler';

const ComingSoon = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('https://api-lk21.herokuapp.com/comingsoon').then(res => {
      setMovies(res.data.result);
      console.log('res', res);
    });
  };
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Coming Soon</Text>
      <Gap height={10} />
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => index}
        data={movies}
        renderItem={({item}) => (
          <MoviesCard
            key={item.index}
            image={{uri: item.thumbnail}}
            name={item.title}
            onPress={() => navigation.navigate('DetailMovie', item)}
          />
        )}
      />
    </View>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 40,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
