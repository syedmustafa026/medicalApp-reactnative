import React from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Logo from "../../../assets/Logo1.png"
import Doc from "../../../assets/doc3.png"
import dot from "../../../assets/dot3.png"

export default function Intro3({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.text}>Discuss in the Forum</Text>
            <Image source={Doc} style={styles.doc} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={()=>navigation.navigate("intro3")}>
                    <Text style={styles.btn}>Skip</Text>
                </TouchableOpacity>
                <Image source={dot} style={styles.dot} />
                <TouchableOpacity onPress={()=>navigation.navigate("intro4")}>
                    <Text style={styles.btn}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: '#ECF1FA',
    },
    logo: {
        width: 100,
        height: 85,
        alignItems: "center",
        marginTop: "20%",
        justifyContent: "center",
        marginHorizontal: "auto",
    },
    doc: {
        width: 199,
        height: 183,
        marginTop: 50,
        marginHorizontal: "auto",
    },
    text: {
        width:200,
        fontSize: 25,
        textAlign:"center",
        fontWeight: "700",
        color: '#181461',
        marginTop: 40,
        marginHorizontal: "auto",

    },
    btn: {
        fontWeight: "700",
        color: '#2A2AC0',
    },
    dot: {
        width: 40,
        height: 10,

    },
    footer: {
        flex: 0.1,
        marginTop: "20%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});
