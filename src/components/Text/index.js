/** Simple comp */
import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { styles } from "./style";

export default function Index() {
  const [user, setUser] = useState([]);

  return (
    <View>
      <Text style={styles.container}>index</Text>
    </View>
  )
}
