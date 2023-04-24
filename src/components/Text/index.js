/** Simple comp */
import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { styles } from "./style";

export default function Index() {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);

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
    </View>
  )
}
