import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#e2e2e2"
    },
    header: {
        width: '100%',
        height: '20%',
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    body: {
        width: '100%',
        height: '40%',
        marginTop: '1%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        width: '100%',
        height: '15%',
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    viewTitle: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        padding: 10,
        fontSize: 14,
    },
    btn: {
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'darkgray'
    },
    textBtn: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    bodyRow: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyResposta: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderRadius: 15,
        marginTop: '4%'
    },
    text: {
        fontSize: 14
    },
    textResposta: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default styles;