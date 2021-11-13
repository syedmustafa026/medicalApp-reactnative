import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import backlogo from "../../../assets/images/back.png"
import userlogo from "../../../assets/images/user.png"
import SearchBar from '../../components/search';
import { NativeBaseProvider } from 'native-base';
export default function Intro10() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={backlogo} style={{ marginLeft: 20, marginTop: 30 }} />
                <Image source={userlogo} style={{ marginRight: 20, marginTop: 30 }} />
            </View>
            <View style={styles.search}>
                <NativeBaseProvider>
                    <SearchBar/>
                </NativeBaseProvider>
                <View style={styles.heading}>
                <Text style={{borderColor:"black"}}>Upcoming</Text>
                    <Text>Past</Text>
                </View>
            </View>
            <View style={styles.rows}>
                <View >
                    
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF1FA',
    },
    header: {
        flex: 0.1,
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexDirection: "row"
    },
    search: {
        flex: 0.15,
        marginTop:10,
        borderBottomColor: "black",
    },
    rows: {
        flex: 0.8,
    },
    heading: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: 15,
    },
})