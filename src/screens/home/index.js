import React, { useState } from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './style';

export default function Home({ navigation }) {
    function abrirTelaCalcularResistor(){
        navigation.navigate('resistorParalelo');
    }
    function abrirTelaAjusteTL431(){
        navigation.navigate('ajusteTL431');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="resistor" size={65} color="black" />
                <Text style={[styles.title, { marginLeft: '3%' }]}>HelpEletronica</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.viewTitle}>
                    <Text style={[styles.title, { fontSize: 20, marginTop: '20%', fontWeight: 'bold' }]}>
                        Escolha o quer calcular:
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={abrirTelaCalcularResistor}>
                    <Text style={styles.textBtn}>Calcular Resistor Paralelo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={abrirTelaAjusteTL431}>
                    <Text style={styles.textBtn}>Calcular Ajuste TL431</Text>
                </TouchableOpacity>
            </View >
        </View >
    );
}