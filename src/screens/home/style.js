import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
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
        height: '60%',
        marginTop: '5%',
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
    title: {
        fontSize: 30,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        padding: 10,
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
        fontSize: 12
      }
});

export default styles;