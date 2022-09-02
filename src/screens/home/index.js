import React, { useState } from "react";
import { TouchableOpacity, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './style';
import resistoresPrecisao from "../../data/resistoresPrecisao";
import resistoresComuns from "../../data/resistoresComuns";

export function Home() {

    const [rEq, setReq] = useState('');
    const [R1, setR1] = useState(0.0);
    const [R2, setR2] = useState(0.0);
    const [PAR, setPAR] = useState([]);
    const muitoPreciso = [0.9999, 1.0001];
    const Preciso = [0.999, 1.001];
    const poucoPreciso = [0.99, 1.001];

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
            diminuirPrecisao()
        } else {
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
            console.log('Não encontrou pares')
        } else {
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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="resistor" size={65} color="black" />
                <Text style={[styles.title, { marginLeft: '3%' }]}>Calcular R</Text>
                <Text style={[styles.title, { fontSize: 20, marginTop: '2%' }]}>eq</Text>
            </View>

            <View style={styles.body}>
                <View style={{ height: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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
                <View style={{ height: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text>R Precisão: </Text>
                    <Text>{R1}</Text>
                </View>
                <View style={{ height: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text>R Comum: </Text>
                    <Text>{R2}</Text>
                </View>
            </View>

            <View style={styles.footer}>
            </View>
        </View>
    )
}