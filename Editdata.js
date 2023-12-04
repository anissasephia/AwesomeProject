import React from 'react'
import { Text, View, StyleSheet, TextInput, Button, SafeAreaView, FlatList } from 'react-native'
import { useState } from 'react'
import { ScrollView } from 'react-native-virtualized-view'
import { TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Createdata = () => {
    const [nama, setNama] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    // const [color, setColor] = useState('');
    // const [icon, setIcon] = useState('');
    const [isLoading, setLoading] = useState(true);
    const submit = () => {
        const data = {
            nama: nama,
            deskripsi: deskripsi,
            // icon: icon,
        };

        const [selectedUser, setSelectedUser] = useState({});

        // const selectItem = (item) => {
        //     setSelectedUser(item);
        //     setNama(item.nama);
        //     setDeskripsi(item.deskripsi);
        // }
        fetch(`https://script.google.com/macros/s/AKfycbzNj5uJpmuiOBtbL7BmxLyMDgzWIC4-1cYM-f1oi4NXaVS5OJVuX02xVfwfMpzoG8j3/exec/${selectedUser.timestamp}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                alert('Data tersimpan');
                setNama('');
                setDeskripsi('');
                refreshPage();
                FlatList.refresh();
            })
            .finally(() => setLoading(false));
    }

    return (
        <SafeAreaView>
            {isLoading ? (
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text style={styles.cardtitle}>Loading...</Text>
                </View>

            ) : (
                <View>

                    <ScrollView style={styles.form}>
                        <View>
                            <Text style={styles.title}>Tambah Data Mahasiswa</Text>
                            <View style={styles.form}>
                                <TextInput placeholder="Nama" value={nama} onChangeText={(value) => setNama(value)} style={styles.input} />
                                <TextInput placeholder="NIM" value={deskripsi} onChangeText={(value) => setDeskripsi(value)} style={styles.input} />
                               <Button title="Simpan" style={styles.button} onPress={submit} />
                            </View>
                        </View>
                        <View style={styles.devider}></View>
                        <FlatList
                            style={{ marginBottom: 10 }}
                            data={dataUser}
                            onRefresh={() => { refreshPage() }}
                            refreshing={refresh}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                                <View>
                                    <TouchableOpacity onPress={() => selectItem(item)}>
                                        <View style={styles.card}>
                                            <View style={styles.avatar}>
                                                {/* <FontAwesome5 name={item.icon} size={50} color={item.color} /> */}
                                            </View>
                                            <View>
                                                <Text style={styles.cardtitle}>{item.name}</Text>
                                                <Text>{item.deskripsi}</Text>
                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                                <FontAwesome5 name={'edit'} size={20} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    </ScrollView>
                </View>
            )}
        </SafeAreaView>
    )

}

export default Createdata

const styles = StyleSheet.create({
    title: {
        paddingVertical: 12,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    form: {
        padding: 10,
        marginBottom: 100,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 8,
        padding: 8,
        width: '100%',
        marginVertical: 5,
    },
    button: {
        marginVertical: 10,
    }
})

