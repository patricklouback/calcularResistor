import React from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './style';
import resistoresPrecisao from "../../data/resistoresPrecisao";
import resistoresComuns from "../../data/resistoresComuns";

export function Home() {

    const [rEq, setReq] = React.useState('');

    function clique() {
        if (rEq === '') {
            console.log('vazio')
        } else if (rEq.includes(',')) {
            setReq(rEq.replace(',','.'))
        } else {
            console.log(rEq)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="resistor" size={65} color="black" />
                <Text style={[styles.title, { marginLeft: '3%' }]}>Calcular R</Text>
                <Text style={[styles.title, { fontSize: 20, marginTop: '2%' }]}>eq</Text>
            </View>

            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    onChangeText={setReq}
                    value={rEq}
                    placeholder='Resistor Equivalente'
                    keyboardType="decimal-pad"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={clique}>
                    <Text style={styles.textBtn}>Calcular Resistor</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
            </View>
        </View>
    )
}