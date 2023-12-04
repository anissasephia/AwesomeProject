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
import ListData from '../listdata'
import Edit from '../Editdata'

const Tab = createBottomTabNavigator();
//const webmap = require('../peta/map.html');
//form input dari github pages
const forminput = 'https://anissasephia.github.io/ame/';
// peta webmap dari github pages
const webmap = 'https://anissasephia.github.io/ame/map.html';

function HomeScreen() {
    return (
        <View>
            <Text style={styles.title}>APLIKASI PETA LOKASI OBJEK</Text>
            <Text style={styles.ket}>Aplikasi ini banyak errornya</Text>
            <View style={styles.container}>
                <Text style={styles.desc}>Stack: </Text>
                <Text style={styles.desc}>1. React Native</Text>
                <Text style={styles.desc}>2. HTML</Text>
                <Text style={styles.desc}>3. LeafletJS</Text>
                <Text style={styles.desc}>4. Google Sheets</Text>
                <Text style={styles.desc}>5. App Script</Text>
                <Text style={styles.desc}>6. FontAwesome5</Text>
                <Text style={styles.desc}>7. GitHub</Text>
            </View>
        </View>
    );
}
function MapScreen() {
    return (
        <WebView
            source={{ uri: webmap }}
        />
    );
}
function AddDataScreen() {
    return (
        <WebView
            source={{ uri: forminput }}
        />
    );
}
function ListDataScreen() {
    return (
        <View>
            <ListData>

            </ListData>
        </View>
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
function EditScreen() {
    return (
        <View>
            <Edit>

            </Edit>
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
                            <Fontawesome5 name="map" color={"#2D9596"} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Add Data"
                    component={AddDataScreen}
                    options={{
                        tabBarLabel: 'Add Data',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="plus-circle" color={"#B31312"} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="List Data"
                    component={ListDataScreen}
                    options={{
                        tabBarLabel: 'List Data',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="clipboard-list" color={"#FFB61A"} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="user-circle" color={"#3D30A2"} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Edit"
                    component={EditScreen}
                    options={{
                        tabBarLabel: 'Edit',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="user-circle" color={"#3D30A2"} size={size} />
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
    container: {
        padding: 20,
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    ket: {
        fontSize: 15,
        marginTop: 20,
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
      },
})

