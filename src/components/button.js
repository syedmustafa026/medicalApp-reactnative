
import React from "react"
import { Button, TouchableOpacity, StyleSheet } from "react-native"

export default function Butn(title) {
  return (
    <TouchableOpacity>
      <Button style={styles.butn} title={"title"}/>
    </TouchableOpacity>

  )
}
const styles = StyleSheet.create({

  butn: {
    backgroundColor: "#2A2AC0",
    color: "white",
  }

})