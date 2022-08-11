import React from 'react'
import {View, Text} from 'react-native';
import styles from '../styles/styles';
function Home() {
  return (
    <View style={styles.container}>
        <Text style={styles.bolder}> Welcome to the home page</Text>
    </View>
  )
}

export default Home