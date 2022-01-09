import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Assets from '../assets/index'

const Error = ({ error }) => {
  return (
    <View style={Styles.Container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Assets.Error height={300} width={300} fill="#4285F4" />
      <Text style={Styles.Title}>{error ? error : 'Someting went wrong'}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    color: '#9E9E9E',
    fontFamily: 'Inter-SemiBold',
    fontSize: 23,
    textAlign: 'center',
  },
})

export default Error
