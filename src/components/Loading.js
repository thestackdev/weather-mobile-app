import React from 'react'
import { View, StatusBar, ActivityIndicator, StyleSheet } from 'react-native'

const Loading = () => {
  return (
    <View style={Styles.Container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ActivityIndicator color="#4285F4" size={45} />
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
})

export default Loading
