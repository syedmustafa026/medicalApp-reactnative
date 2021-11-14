import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import backlogo from "../../../assets/images/back.png"
import userlogo from "../../../assets/images/user.png"
import SearchBar from '../../components/search';
import Row from '../../components/row';
import Butn from '../../components/button';

export default function Intro10() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={backlogo} style={{ marginLeft: 20, marginTop: 30 }} />
                <Image source={userlogo} style={{ marginRight: 20, marginTop: 30 }} />
            </View>
            <View style={styles.search}>
                <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 18, marginLeft: 10 }}>My Appoinments</Text>
               
                    <SearchBar placeholder={"Search"} />
              
                <View style={styles.heading}>
                    <TouchableOpacity>
                        <Text style={styles.btn}>Upcoming</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.btn}>Past</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.rows}>
                <Row name={["Dentist - Clara Odding"]} date={["2/2/22"]} btn={"Download"} />
                <Row name={["Cardiologist-Johnny"]} date={["4/2/20"]} btn={"Download"} />
                <Row name={["Specialist-Ahmed"]} date={["6/8/25"]} btn={"Download"} />
                <Row name={["Specialist-Ahmed"]} date={["6/8/25"]} btn={"Download"} />
                <Row name={["Specialist-Ahmed"]} date={["6/8/25"]} btn={"Download"} />
                <Row name={["Specialist-Ahmed"]} date={["6/8/25"]} btn={"Download"} />
        
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
        flexDirection: "row",

    },
    search: {
        flex: 0.2,

    },
    rows: {
        flex: 0.7,
    },
    heading: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: 15,
        fontSize: 18,
        borderWidth: 2,
        marginLeft: 5,
        marginRight: 5,
        borderTopColor: "transparent",
        borderRightColor: "transparent",
        borderLeftColor: "transparent",
        borderBottomColor: "rgba(159, 159, 159, 0.7)",

    },
    btn: {
        fontSize: 16,
        fontWeight: "bold",
    },
})