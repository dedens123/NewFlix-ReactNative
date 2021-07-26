import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconComingMati,
  IconComingNyala,
  IconDoctor,
  IconDoctorActive,
  IconHospitals,
  IconHospitalsActive,
  IconMessages,
  IconMessagesActive,
  IconNewMati,
  IconNewNyala,
  IconTvMati,
  IconTvNyala,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? (
        <Image source={IconNewNyala} />
      ) : (
        <Image source={IconNewMati} />
      );
    }
    if (title === 'ComingSoon') {
      return active ? (
        <Image source={IconComingNyala} />
      ) : (
        <Image source={IconComingMati} />
      );
    }
    if (title === 'TvShow') {
      return active ? (
        <Image source={IconTvNyala} />
      ) : (
        <Image source={IconTvMati} />
      );
    }

    return <IconDoctor />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
