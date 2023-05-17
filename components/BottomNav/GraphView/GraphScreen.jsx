import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import HeartRate from '../../HeartRate/HeartRate';
import SessionAction from '../../SessionBtn/SessionAction';
import Status from '../../Status/Status';
import Graph from './Graph';


const GraphScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <Text>HR: 99</Text>
      <Graph />
      <TouchableOpacity
      style={styles.touchable}
      activeOpacity={0.7}
      onPress={() => alert('ECG pressed')}
    >
      <Text style={styles.text}>ECG</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default GraphScreen