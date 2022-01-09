import React, { useEffect, useState } from 'react'
import { PermissionsAndroid } from 'react-native'
import Splash from 'react-native-bootsplash'
import Component from './components/index'
import Geolocation from 'react-native-geolocation-service'
import axios from 'axios'

const App = () => {
  const [status, setStatus] = useState('Loading')
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const handlePermissions = async () => {
    const granted = await PermissionsAndroid.request(
      'android.permission.ACCESS_FINE_LOCATION'
    )

    return granted === 'granted'
  }

  const fetchWeather = async () => {
    const granted = await handlePermissions()

    if (granted) {
      Geolocation.getCurrentPosition(
        async (location) => {
          try {
            const { latitude, longitude } = location.coords
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=48532a5e16bd27acbb55cf0c9b778afc&units=metric`
            )
            setData(response.data)
            setStatus('Success')
          } catch (error) {
            setStatus('Error')
          }
        },
        () => {
          setError('Unable to get loaction')
          setStatus('Error')
        }
      )
    } else {
      setError('Loaction permission denied!')
      setStatus('Error')
    }
    Splash.hide()
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  console.log(status)

  switch (status) {
    case 'Loading':
      return <Component.Loading />
    case 'Success':
      return <Component.Weather data={data} />
    case 'Error':
      return <Component.Error error={error} />
    default:
      break
  }
}

export default App
