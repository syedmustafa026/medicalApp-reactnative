
import { View, Text, StyleSheet, TextInput , Image} from 'react-native'
import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
 
function LogoTitle() {
  return (
    
    <Image
      style={{ width: 25, height: 25 , resizeMode:'contain', marginLeft:300 }}
      source={require('../../../assets/images/user.png')}
    /> 

    
  );
}
export default function Intro9({ navigation }) {
  
  return (
    <View style={styles.maincontainer} >

      <View style={styles.SearchBar}>
        <TextInput style={styles.TextColor} value={Text} placeholder={"Search"}/>  
        <Ionicons style={{marginLeft:250,}}  name="md-search" size={28} color="black"  />
      </View>

      <View style={styles.Boxcontainer} >


        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.TextColor}>Appoiments </Text>

            <Image
      style={{ width: 140, height: 150 , resizeMode:'contain' }}
      source={require('../../../assets/images/doctor.png')}
    /> 

          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.TextColor}>Records</Text>

            <Image
      style={{ width: 140, height: 150 , resizeMode:'contain' }}
      source={require('../../../assets/images/record.png')}
    /> 

          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.TextColor}>Forum</Text>


            <Image
      style={{ width: 140, height: 150 , resizeMode:'contain' }}
      source={require('../../../assets/images/man.png')}
    /> 

          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.TextColor}>Account Settings</Text>

            <Image
      style={{ width: 140, height: 150 , resizeMode:'contain' }}
      source={require('../../../assets/images/grp.png')}
    /> 

          </View>
        </View>



      </View>


    </View>)
};






const styles = StyleSheet.create({
  Boxcontainer: {
    height: '85%',
    padding: 7,
    flexDirection: 'row',
    flexWrap: 'wrap'

  },
  box: {
    borderRadius: 15,
    width: '50%',
    height: '55%',
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4.65,

    elevation: 10,

  },
  inner: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: 'center',
    color: '#181461'
  },

  SearchBar: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     margin: 2,
    //     padding: 7,

    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    // borderRadius:10,
    // backgroundColor:'#ffffff'

    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',

    borderBottomColor: 1.5,
    marginTop: 10,
    height: 50,
    width: 330,
    marginLeft: 12


  },

  maincontainer: {
    backgroundColor: '#ecf1fa'
  },
  TextColor: {
    color: '#181461',
    fontSize: 16,
    marginBottom:60
  }
});



