import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#717E8E',
    justifyContent: 'center',
    paddingLeft: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    height: 90
  },
  textStyle: {
    color: '#fff',
    fontSize: 28
  }
})

const Header = ({ title }) => {
  const { textStyle, viewStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
    </View>
  )
}

export default Header;