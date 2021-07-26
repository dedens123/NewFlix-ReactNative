import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Gap, MoviesCard} from '../../component';
import {colors} from '../../utils';

const TvShow = ({navigation}) => {
  const [tv, setTv] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('https://api-lk21.herokuapp.com/tv').then(res => {
      setTv(res.data.result);
      console.log('res', res);
    });
  };
  return (
    <View style={styles.page}>
      <Text style={styles.title}>TV Show</Text>
      <Gap height={10} />
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => index}
        data={tv}
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

export default TvShow;

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
