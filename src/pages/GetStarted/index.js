import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Logo} from '../../assets';
import {Button} from '../../component';
import {colors} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image source={Logo} />
        <View>
          <Text
            style={{
              fontSize: 30,
              color: colors.white,
            }}>
            Tonton Film Favoritemu Dengan NewFlix!
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          text="Get Started"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: 40,
    marginBottom: 30,
  },
});
