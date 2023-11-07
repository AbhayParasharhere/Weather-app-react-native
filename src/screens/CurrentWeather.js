import { Feather } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import RowText from '../components/RowText'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <RowText
          message1={'High: 8'}
          message2={'Low: 6'}
          containerStyles={styles.highLowWrapper}
          message1Styles={styles.highLow}
          message2Styles={styles.highLow}
        />
      </View>
      <RowText
        message1={'Sunny'}
        message2={'Its perfect t-shirt weather'}
        containerStyles={styles.bodyWrapper}
        message1Styles={styles.description}
        message2Styles={styles.message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather
