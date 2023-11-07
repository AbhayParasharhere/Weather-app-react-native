import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import ListItem from '../components/ListItem'

const DATA = [
  {
    dt_txt: '2021-03-02 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt: '2021-03-02 15:00:00',
    main: {
      temp_max: 12.55,
      temp_min: 5.46
    },
    weather: [
      {
        main: 'Clouds'
      }
    ]
  },
  {
    dt_txt: '2021-03-02 18:00:00',
    main: {
      temp_max: 15.55,
      temp_min: 5.46
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/upcoming_background.jpg')}
        style={styles.image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default UpcomingWeather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'red'
  },
  image: {
    flex: 1
  }
})
