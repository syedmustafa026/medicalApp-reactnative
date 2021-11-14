
import React from "react"
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native"
import info from "../../assets/images/info.png"
import pen from "../../assets/images/pen.png"

export default function Row(props) {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.rows}>
        <View style={styles.names}>
          <Text style={{ fontWeight: "bold", fontSize: 14,color: "black" }}>{props.name} .    
            <Image style={{ marginLeft: 10 }} source={props.mark} /></Text>
        </View>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={{ fontWeight: "bold", fontSize: 14, color: "#2A2AC0", fontStyle: "italic" }}>
              <Image source={props.symbol} />{props.btn}</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: "column",
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  date: {
    color: "grey"

  },
  btn: {
    color: "#2A2AC0",
    flexDirection: "row"
  },
  rows: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderBottomColor: "rgba(159, 159, 159, 0.57)",
    paddingBottom: 10,
  },
  names: {
    flexDirection: "row",

  }
})