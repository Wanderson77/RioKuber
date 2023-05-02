/** Simple comp */
import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import { styles } from "./style";

import NetInfo from '@react-native-community/netinfo';

export default function Index() {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);

  const greeting = 'Firebase';

  function handleActionUser() {
    if ( airbnbStyles ) {
      console.log('RN');
    } else {}
  }

  useEffect(() => {
    console.log('RN');
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>index</Text>
      <TouchableOpacity
        onPress={handleActionUser}
      >
      </TouchableOpacity>
    </View>
  )
}
