import React from 'react'
import { useState, useEffect } from 'react'
import { Text, View } from 'react-native';
import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';


function Callapi() {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbxDRWnbglOwkMN-3o1vcqiC_ebHleQGMOsNZ8xgFzgb_NOv-zl6EjjQSNu6KfIWvkcIfw/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);
    //difungsikan untuk memanggil API
    useEffect(() => {
        //fetch untuk mengambil data dari API/tertentu dengan metode fetch
        fetch(jsonUrl)
            //then untuk mengubah data menjadi json
            .then((response) => response.json())
            .then((json) => {
                //console log
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
        , []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    return (
        <SafeAreaView>
            {isLoading ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : (
                <View>
                    <FlatList
                        data={dataUser}
                        onRefresh={() => { refreshPage() }}
                        refreshing={refresh}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <View style={styles.avatar}>
                                    <FontAwesome5 name={item.icon} size={50} color={item.color} />
                                </View>
                                <View>
                                    <Text style={styles.cardtitle}>{item.nama}</Text>
                                    <Text>NIM:{item.nim}</Text>
                                    <Text>Kelas:{item.kelas}</Text>
                                    <Text>Jenis Kelamin:{item.jeniskelamin}</Text>
                                </View>
                            </View>

                        )}
                    />
                </View>
            )}
        </SafeAreaView>

    )
}

export default Callapi
const styles = StyleSheet.create({
    title: {
        paddingVertical: 12,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    avatar: {
        borderRadius: 100,
        width: 80,
    },
    cardtitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 20,
        marginVertical: 7
    },
})