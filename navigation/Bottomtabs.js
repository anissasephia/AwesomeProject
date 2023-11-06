import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, View, Text } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontawesome6 from 'react-native-vector-icons/FontAwesome6';
import Portofolio from '../App';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const Tab = createBottomTabNavigator();
const webmap = require('../peta/map.html');

function HomeScreen() {
  return (
    <ScrollView>
      <Text style={styles.title}>List Peta</Text>
      <View style={styles.listitems}>
        <Image source={require('../peta/S2A.png')} style={styles.image} />
        <Text style={styles.caption}>Pega Penggunaan Lahan</Text>
      </View>
      <View style={styles.listitems}>
        <Image source={require('../peta/S2A.png')} style={styles.image} />
        <Text style={styles.caption}>Pega Penggunaan Lahan</Text>
      </View>
      <View style={styles.listitems}>
        <Image source={require('../peta/S2A.png')} style={styles.image} />
        <Text style={styles.caption}>Pega Penggunaan Lahan</Text>
      </View>
      <View style={styles.listitems}>
        <Image source={require('../peta/S2A.png')} style={styles.image} />
        <Text style={styles.caption}>Pega Penggunaan Lahan</Text>
      </View>
      <View style={styles.listitems}>
        <Image source={require('../peta/S2A.png')} style={styles.image} />
        <Text style={styles.caption}>Pega Penggunaan Lahan</Text>
      </View>
    </ScrollView>
  );
}
function MapScreen() {
  return (
      <WebView
        source={webmap}
      />
  );
}
function ProfileScreen() {
  return (
    <View>
      <Portofolio>

      </Portofolio>
    </View>
  );
}
function MahasiswaScreen() {
  return (
    <View>
      <Getjsonfile>

      </Getjsonfile>
    </View>
  );
}
function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} >
        <Tab.Screen name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="home" color={"#C09EFF"} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Maps"
          component={MapScreen}
          options={{
            tabBarLabel: 'Maps',
            tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="cog" color={"#FFB61A"} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="user-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Mahasiswa"
          component={MahasiswaScreen}
          options={{
            tabBarLabel: 'Mahasiswa',
            tabBarIcon: ({ color, size }) => (
              <Fontawesome5 name="users" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MyTabs;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    padding: 10,
  },
  listitems: {
    padding: 10,
    alignItems: 'center',
  },
  caption: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
})

