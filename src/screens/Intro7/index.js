import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Image, Button, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import Logo from "../../../assets/Logo1.png";
import Icon from 'react-native-vector-icons/FontAwesome'

function Intro7({ navigation }) {

    let textInput = useRef(null)
    const [phoneNumber, setPhoneNumber] = useState();
    const [focusInput, setFocusInput] = useState(true);
    const onChangePhone = (number) => {
        setPhoneNumber(number)
    }

    const onPressContinue = () => {
        if (phoneNumber) {
            navigation.navigate('intro10')
        }
    }

    const onChangeFocus = () => {
        setFocusInput(true)
    }
    const onChangeBlur = () => {
        setFocusInput(false)
    }

    useEffect(() => {
        textInput.focus()
    }, [])

    return (
        <>
            <View>
                <View style={{ alignItems: "center", marginTop: 50 }}>
                    <Image source={Logo} style={{ width: 85, height: 70 }} />
                </View>
                <View style={{ alignItems: "center", marginTop: 30 }}>
                    <Text style={{ fontWeight: 'bold', color: "#2a114e", fontSize: 20 }}>Location</Text>
                    <Text style={{ color: "#2a114e", fontWeight: "bold", marginTop: 10, marginBottom: 20 }}>Please enter your location</Text>
                </View>
            </View>
            <View style={styles.check}>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={50}
                    behavior={'padding'}
                    style={styles.checkings}
                >
                    <View style={[
                        styles.checkInput,
                        {
                            borderBottomColor: '#2A2AC0'
                        }

                    ]}>

                        <Text>
                            <Icon name='map-marker' size={20} color='grey' />
                        </Text>
                        <TextInput
                            placeholder="Enter Location"
                            ref={(input) => textInput = input}
                            style={styles.phoneInputStyle}
                            keyboardType="name-phone-pad"
                            value={phoneNumber}
                            onChangeText={onChangePhone}
                            secureTextEntry={false}
                            onFocus={onChangeFocus}
                            onBlur={onChangeBlur}
                        />
                    </View>

                    <View style={styles.viewBottom}>
                        <TouchableOpacity onPress={onPressContinue}>
                            <View style={[styles.btnContinue,
                            {
                                backgroundColor: phoneNumber ? '#2A2AC0' : '#244DB7'
                            }
                            ]}>
                                <Text style={styles.textContinue}>Continue</Text>
                            </View>
                        </TouchableOpacity>
                    </View>



                </KeyboardAvoidingView>
            </View>
        </>
    )
}

export default Intro7

const styles = StyleSheet.create({

    check: {
        flex: 1
    },
    checkInput: {
        flexDirection: "row",
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: "center",
        borderBottomColor: 1.5
    },
    checkings: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    openDialogView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    phoneInputStyle: {
        marginLeft: 5,
        height: 50,
        flex: 1,

    },
    viewBottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 190,
        alignItems: "center"
    },
    btnContinue: {
        width: 320,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContinue: {
        color: "#fff",
        alignItems: "center"
    },


})