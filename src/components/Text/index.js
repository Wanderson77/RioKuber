/** Simple comp */
import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { styles } from "./style";

export default function Index() {
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState('');

  useEffect(() => {},[]);

  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  )
}
