import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Logo} from '../../assets';
import {colors} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <Image source={Logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
