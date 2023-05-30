/** Initial Screen */
import {
  useState,
  useEffect
} from 'react';
import {
  SafeAreaView,
  Text,
  View
} from 'react-native';
import { styles } from './styles/';

const Home = ({ route }) => {
  const [user, setUser] = useState('');
  const { item } = route.params;

  useEffect(() => {
    try {

    } catch (error) {
      console.log(error);
    }
  },[]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Home Delivery address: </Text>
          <Text style={styles.text}>{item}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
