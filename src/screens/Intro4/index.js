import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from "../../../assets/Logo1.png"
import fblogo from "../../../assets/images/fblogo.png"
import Butn from '../../components/button';
export default function Intro4() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.heading}>Welcome</Text>
                <Text style={styles.sub}>Sign in to continue</Text>
            </View>
            <View style={styles.midder}>
                <Butn title={"Sign in with mobile number"}/>
                <Text style={{ color: "gray", fontSize: 18, marginBottom: 20, justifyContent: "center", alignItems: "center", marginTop: 20 }}>or</Text>
                <View style={styles.fbbutn}>
                    <Image source={fblogo} style={{ marginRight: 10, }} />
                    <TouchableOpacity  >
                        <Text style={styles.button}>Sign in with Facebook</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.footer}>
                <Text>By signing in, you accept our
                        <Text style={{ color: "blue" }}> Terms and Conditions</Text>             
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flex: 0.5,
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
    midder: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "flex-end",
        marginTop: 40
    },
    fbbutn: {
        backgroundColor: "#415C95",
        width: 340,
        height: 55,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    button: {
        color: "white",
        fontWeight: "600",
        fontSize: 14,
        letterSpacing: 0.8,

    }
})
