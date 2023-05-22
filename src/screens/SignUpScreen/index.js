import { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import styles from './styles'

const SignUpScreen = () => {
  const [data, setDate] = useState('');

  async function SignUp() {
    try {

    } catch (error) {
      console.log(error);
    }
    finally {

    }
  }
  return (
    <SafeAreaView>
      <View>
        <Text>Teste</Text>
        <TouchableOpacity
          onPress={SignUp}
          accessible
        />
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen
