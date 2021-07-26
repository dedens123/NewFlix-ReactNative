import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, MoviesCard} from '../../component';
import {colors, fonts} from '../../utils';

const Home = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('https://api-lk21.herokuapp.com/newupload').then(res => {
      setMovies(res.data.result);
      console.log('res', res);
    });
  };

  return (
    <View style={styles.page}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
          marginHorizontal: 30,
        }}>
        <Text style={styles.title}>New Playing</Text>
        <Button text="Logout" onPress={() => navigation.replace('Splash')} />
      </View>
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

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
