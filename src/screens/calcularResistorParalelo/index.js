import React, { useState } from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './style';
import resistoresPrecisao from "../../data/resistoresPrecisao";
import resistoresComuns from "../../data/resistoresComuns";

export default function CalcularResistorParalelo({ navigation }) {

    const [rEq, setReq] = useState('');
    const [R1, setR1] = useState(0.0);
    const [R2, setR2] = useState(0.0);
    const [precisao, setPrecisao] = useState(null)


    const muitoPreciso = [0.9999, 1.0001];
    const Preciso = [0.999, 1.001];
    const poucoPreciso = [0.99, 1.01];

    let req = rEq
    let r1
    let r2
    let temp
    let diferenca
    let pares = []

    function clique() {
        if (rEq === '') {
            console.log('vazio')
        } else if (rEq.includes(',')) {
            setReq(rEq.replace(',', '.'))
        } else {
            calculaMelhorResistor();
        }
    }

    function calculaMelhorResistor() {
        // calculo
        // 1/r1  +  1/r2 = 1/req
        // 1/r1 = 1/req - 1/r2

        resistoresPrecisao.map(i => {
            r1 = i
            resistoresComuns.map(j => {
                r2 = j

                temp = 1 / (1 / r1 + 1 / r2)
                diferenca = req / temp

                if (diferenca > muitoPreciso[0] && diferenca < muitoPreciso[1]) {
                    pares.push([r1, r2])
                }
            })
        })

        if (pares.length === 0) {
            diminuirPrecisao();
        } else {
            setPrecisao(true);
            escolheOPar();
        }

    }

    function diminuirPrecisao() {
        resistoresPrecisao.map(i => {
            r1 = i
            resistoresComuns.map(j => {
                r2 = j

                temp = 1 / (1 / r1 + 1 / r2)
                diferenca = req / temp

                if (diferenca > Preciso[0] && diferenca < Preciso[1]) {
                    pares.push([r1, r2])
                }
            })
        })

        if (pares.length === 0) {
            diminuirMaisPrecisao()
        } else {
            setPrecisao(true);
            escolheOPar();
        }
    }

    function diminuirMaisPrecisao() {
        resistoresPrecisao.map(i => {
            r1 = i
            resistoresComuns.map(j => {
                r2 = j

                temp = 1 / (1 / r1 + 1 / r2)
                diferenca = req / temp

                if (diferenca > poucoPreciso[0] && diferenca < poucoPreciso[1]) {
                    pares.push([r1, r2])
                }
            })
        })

        if (pares.length === 0) {
            console.log('Não encontrou pares')
        } else {
            setPrecisao(false);
            escolheOPar();
        }
    }

    function escolheOPar() {

        let menor = 100

        pares.map(i => {

            const _r1 = i[0];
            const _r2 = i[1];

            let temporario = 1 / (1 / _r1 + 1 / _r2)
            let dif = req / temporario

            if (menor >= dif) {
                menor = dif
                setR1(_r1)
                setR2(_r2)
            }
        })
    }

    function abreTelaHome() {
        navigation.navigate('home')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={abreTelaHome}>
                <MaterialCommunityIcons name="keyboard-backspace" size={28} color="black" />
            </TouchableOpacity>

            <View style={styles.header}>
                <MaterialCommunityIcons name="resistor" size={65} color="black" />
                <Text style={[styles.title, { marginLeft: '3%' }]}>Calcular R</Text>
                <Text style={[styles.title, { fontSize: 20, marginTop: '2%' }]}>eq</Text>
            </View>

            <View style={styles.viewTitle}>
                <Text style={[styles.title, { fontSize: 20, marginTop: '20%', fontWeight: 'bold' }]}>
                    Calcule os resistores em paralelo
                </Text>
            </View>

            <View style={styles.body}>
                <View style={[styles.bodyRow, { justifyContent: 'space-between' }]}>
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
            </View>
        </View >
    )
}