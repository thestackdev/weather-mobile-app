import React from 'react'
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import Assets from '../assets/index'
import moment from 'moment'

const Weather = ({ data }) => {
  return (
    <View style={Styles.Container}>
      <StatusBar backgroundColor="#4285F4" barStyle="light-content" />
      <View style={Styles.TopContainer}>
        <Text style={Styles.City}>{data.name}</Text>
        <Text style={Styles.Timestamp}>{moment().format('lll')}</Text>
        <View style={Styles.TemperatureMain}>
          <View style={Styles.Column}>
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
              }}
              style={{ height: 75, width: 75 }}
            />
            <Text style={Styles.TemperatureDescription}>
              {data.weather[0].main}
            </Text>
          </View>
          <Text style={Styles.TemperatureValue}>
            {Math.round(data.main.temp)}°
          </Text>
        </View>
      </View>
      <Image
        style={Styles.Background}
        source={Assets.Background}
        resizeMode="contain"
      />
      <View style={Styles.BottomContainer}>
        <View style={Styles.BottomContainerSection}>
          <View style={Styles.Row}>
            <View style={Styles.ValueWrapper}>
              <Assets.MinTemp height={25} width={25} fill="#4285F4" />
            </View>
            <View>
              <Text style={Styles.BottomContainerTitle}>Min temp</Text>
              <Text style={Styles.BottomContainerValue}>
                {Math.round(data.main.temp_min)}°
              </Text>
            </View>
          </View>
          <View style={Styles.Row}>
            <View style={Styles.ValueWrapper}>
              <Assets.MaxTemp height={25} width={25} fill="#4285F4" />
            </View>
            <View>
              <Text style={Styles.BottomContainerTitle}>Max temp</Text>
              <Text style={Styles.BottomContainerValue}>
                {Math.round(data.main.temp_max)}°
              </Text>
            </View>
          </View>
        </View>
        <View style={Styles.BottomContainerSection}>
          <View style={Styles.Row}>
            <View style={Styles.ValueWrapper}>
              <Assets.Wind height={25} width={25} fill="#4285F4" />
            </View>
            <View>
              <Text style={Styles.BottomContainerTitle}>Wind Speed</Text>
              <Text style={Styles.BottomContainerValue}>
                {Math.round(data.wind.speed)}m/s
              </Text>
            </View>
          </View>
          <View style={Styles.Row}>
            <View style={Styles.ValueWrapper}>
              <Assets.Humidity height={25} width={25} fill="#4285F4" />
            </View>
            <View>
              <Text style={Styles.BottomContainerTitle}>Humidity</Text>
              <Text style={Styles.BottomContainerValue}>
                {Math.round(data.main.humidity)}%
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#4285F4',
  },
  Background: {
    alignSelf: 'center',
    width: '90%',
    flex: 0.4,
  },
  TopContainer: {
    flex: 0.3,
    padding: 19,
  },
  City: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Inter-SemiBold',
  },
  Timestamp: {
    color: '#fff',
    fontSize: 19,
    fontFamily: 'Inter-Regular',
  },
  TemperatureMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  TemperatureDescription: {
    color: '#fff',
    fontSize: 23,
    fontFamily: 'Inter-SemiBold',
  },
  TemperatureValue: {
    color: '#fff',
    fontSize: 70,
    fontFamily: 'Inter-Bold',
  },
  BottomContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    flex: 0.3,
  },
  BottomContainerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
  },
  BottomContainerTitle: {
    color: '#4285F4',
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
  },
  BottomContainerValue: {
    color: '#4285F4',
    fontFamily: 'Inter-Bold',
    fontSize: 28,
  },
  ValueWrapper: {
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 1000,
    marginRight: 23,
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export default Weather
