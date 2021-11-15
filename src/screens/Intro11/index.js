import React from 'react'
import { safeAreaView, View, Text, StyleSheet, Image, style, Button} from 'react-native'


export default function Intro11({navigation}) {

    return (
        <View style={styles.maincontainer}>
            <View style={styles.subcontainer}>

                <View style={styles.child}>
                    {/* <Image
                        style={{ width: 40, height: 50, resizeMode: 'contain' }}
                        source={require('../../../assets/')}

                    /> */}
                    <Text style={{ marginTop: 15, marginLeft: 10 }}>Appoiment Confirmed</Text>

                </View>

                <View style={styles.date} >
                    <Text style={{ fontSize: 20 }}>
                        Thu , 09 Apr  08:00
                    </Text>

                </View>

                <View style={styles.Drname}>
                    <Text style={{ fontSize: 15 }}>Dr Clara odding - Dentist</Text>

                </View>


            </View>

            <View style={styles.centerImage}>


                <Image
                    style={{ width: 250, height: 250, resizeMode: 'contain' }} source={require('../../../assets/images/mobile.png')}

                />


            </View>

  



        </View>
    )
}


const styles = StyleSheet.create({

    maincontainer: {
        backgroundColor: '#ecf1fa'
    },


    subcontainer: {

    },
    child: {

        flexDirection: 'row',
        paddingLeft: 25

    },

    date: {
        backgroundColor: 'white',
        paddingTop: 18,
        marginTop: 20,
        width: 200,
        height: 70,
        borderRadius: 15,
        paddingLeft: 10,
        marginLeft: 25

    },
    Drname: {
        paddingTop: 18,
        marginTop: 10,
        width: 200,
        height: 70,
        borderRadius: 15,
        paddingLeft: 10,
        marginLeft: 25
        ,
        flexDirection: 'row'
    }
    ,
    centerImage:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
        
    }


});