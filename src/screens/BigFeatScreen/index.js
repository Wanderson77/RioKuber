import { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function index() {
  const [error, setError] = useState(4);

  useEffect(() => {
    function doSomething() {}
  }, []);

  return (
    <View>
      <Text>index</Text>
    </View>
  )
}
