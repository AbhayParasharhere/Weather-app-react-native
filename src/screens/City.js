import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import IconText from '../components/IconText'

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/city_background.jpg')}
        style={styles.image}
      >
        <Text style={[styles.cityName, styles.cityText]}>London</Text>
        <Text style={[styles.countryName, styles.cityText]}>UK</Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={'8000'}
            bodyTextStyles={styles.populationText}
          />
        </View>
        <View style={[styles.riseSetWrapper, styles.rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'10:46:58am'}
            bodyTextStyles={styles.riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'17:26:14am'}
            bodyTextStyles={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  image: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    color: 'white',
    fontSize: 20
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default City
