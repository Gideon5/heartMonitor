import * as React from 'react';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TableScreen from './TableView/TableScreen';
import GraphScreen from './GraphView/GraphScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Graph View" component={GraphScreen} 
      options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="line-chart" color="#000" size={24} />
          ),
        }} 
        />
      <Tab.Screen name="Table View" component={TableScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="table" color="#000" size={24} />
          ),
      }}
      />
    </Tab.Navigator>
  );
}

export default Tabs


const styles = StyleSheet.create({
    // container: {
    //   flex: 2,
    //   backgroundColor: 'white',
    //   padding: 10,
    // },
   
  });