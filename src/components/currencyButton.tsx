import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
  name: String;
  flag: String;
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return(
    <View style = {styles.buttonContainer}>
      <Text style = {styles.flag}>{props.flag}</Text>
      <Text style = {styles.name}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer : {
      alignItems: 'center'
    },
    flag: {
      fontSize: 28,
      color: "#FFFFFF",
      marginBottom: 4
    },
    name: {
      fontSize: 14,
      color: "#2d3436",    
    }
})

export default CurrencyButton