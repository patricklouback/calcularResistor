import React, { useState } from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './style';
import resistoresPrecisao from "../../data/resistoresPrecisao";
import resistoresComuns from "../../data/resistoresComuns";

export default function AjusteTL431({ navigation }) {

    const [V, setV] = useState('');
    const [R1, setR1] = useState(null);
    const [R2, setR2] = useState(4.64);
    const [precisao, setPrecisao] = useState(null)


    function abreTelaHome() {
        navigation.navigate('home')
    }

    function clique() {
        if (V === '') {
            console.log('vazio')
        } else if (V.includes(',')) {
            setV(V.replace(',', '.'))
        } else {
            calcularCorrenteInicial()
        }
    }

    function calcularCorrenteInicial(){
        let corrente = 2.495 / R2
        let Vfinal = parseFloat(V)
        let Vtemp = Vfinal - 2.495
        let r1 = Vtemp / corrente
        let menor = 100

        resistoresPrecisao.map(r => {
            let modulo = r % r1
            if (modulo > 0 && modulo < 0.5) {
                if (menor > modulo) {
                    if (r < 2*r1) {
                        menor = modulo
                        setR1(r)
                        setPrecisao(modulo <= 0.1 ? true : false)
                    }
                }
            }
        })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={abreTelaHome}>
                <MaterialCommunityIcons name="keyboard-backspace" size={28} color="black" />
            </TouchableOpacity>

            <View style={styles.header}>
                <MaterialCommunityIcons name="resistor" size={65} color="black" />
                <Text style={[styles.title, { marginLeft: '3%' }]}>Ajuste TL431</Text>
            </View>

            <View style={styles.viewTitle}>
                <Text style={[styles.title, { fontSize: 20, marginTop: '20%', fontWeight: 'bold' }]}>
                    Calcule os resistores para a tensão escolhida
                </Text>
            </View>

            <View style={styles.body}>
                <View style={[styles.bodyRow, { justifyContent: 'space-between' }]}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setV}
                        value={V}
                        placeholder='Tensão de Ajuste'
                        keyboardType="decimal-pad"
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={clique}>
                        <Text style={styles.textBtn}>Calcular</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.bodyResposta, { borderColor: precisao ? 'green' : precisao == null ? 'gray' : 'red' }]}>
                    <View style={[styles.bodyRow, { height: '50%', }]}>
                        <Text style={styles.textResposta}>Resistor 1: </Text>
                        <Text style={[styles.textResposta, { fontSize: 20 }]}>{R1}</Text>
                    </View>

                    <View style={[styles.bodyRow, { height: '50%', }]}>
                        <Text style={styles.textResposta}>Resistor 2: </Text>
                        <Text style={[styles.textResposta, { fontSize: 20 }]}>{R2}</Text>
                    </View>
                </View>
                <TouchableOpacity
                        style={[styles.btn, {marginTop: '5%', alignSelf: 'flex-end'}]}>
                        <Text style={styles.textBtn}>Outro</Text>
                    </TouchableOpacity>
            </View>
        </View >
    )
}