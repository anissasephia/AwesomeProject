import React from 'react'
import { Button, Text, View } from 'react-native'
import { useState } from 'react'
import { StyleSheet } from 'react-native'


const Countnumber = () => {
    const [number, setNumber] = useState(0) //useState untuk mengubah nilai awal 0 dapat diganti suka suka
    //number menjadi variabel, setNumber menjadi fungsi untuk mengubah nilai number
  return (
    <View>
        <Text style = {styles.text}>{number}</Text>
        {/* setiap dipejet akan menambahkan 1/5/suka-suka */}
        {/* <Button title='Tambah' onPress={() => setNumber(number + 1)} /> */}
        <Button title='Tambah' onPress={() => setNumber(number + 5)} />
        <Button title='Reset' onPress={() => setNumber(0)}color="red"/>
    </View>
  )
}

export default Countnumber

const styles = StyleSheet.create({
    text : {
    fontSize : 50,
    fontWeight : 'bold'
    
}})
