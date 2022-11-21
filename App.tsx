import React from 'react'
import { View,Text } from 'react-native'
import { styles } from './src/Screen/appTheme'
import CalculadoraScreen from './src/Screen/CalculadoraScreen'

const App = () => {
  return (
    <View style={styles.fondo}>
    <CalculadoraScreen />
    </View>
  )
}

export default App