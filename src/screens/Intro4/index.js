import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Logo from "../../../assets/Logo1.png"


export default function Intro4() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.heading}>Welcome</Text>
                <Text style={styles.sub}>Sign in to continue</Text>
            </View>
            <View style={styles.midder}>
            <View style={styles.butn}>
                <TouchableOpacity>
                    <Text style={styles.button}>Sign in with mobile number</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.footer}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flex: 0.3,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: '#ECF1FA',
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 140,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "auto",
    },
    heading: {
        fontWeight: "800",
        fontSize: 32,
        color: "#181461",
        marginTop: 50,
    },
    butn:{
        backgroundColor: "#2A2AC0",
        width: 350,
        height: 50,
        marginTop: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
    },
    button:{
        color: "white",

    },
    midder: {
        flex: 0.4,
    },
    footer:{
        flex: 0.1,
    }
})
