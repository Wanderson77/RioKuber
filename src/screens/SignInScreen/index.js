import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import React from 'react'

import styles from './styles' ;

const SignInScreen = () => {

  signIn = () => {
    try {
      console.log(response);
    } catch (error) {

    }
  }

  return (
    <View>
      <Text>index</Text>
      <TouchableOpacity
        style={styles.buttonSignIn}
        onPress={signIn}
      >SignIn</TouchableOpacity>
    </View>
  )
}

export default index
