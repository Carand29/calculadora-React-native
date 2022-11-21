import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../Screen/appTheme";
interface props {
  texto: string;
  bcolor?: string;
  ancho?: boolean;
  action: (numeroTexto:string) => void;
}

const BotonCalc = ({ texto, bcolor = "#2D2D2D", ancho = false, action }: props) => {

  
  return (
    <TouchableOpacity onPress={() => action(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: bcolor,
          width: ancho ? 180 : 80,
          
        }}
      >
        <Text
          style={{
            ...styles.botontexto,
            color: bcolor === "#9B9B9B" ? "black" : "white",
          }}
        >
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;
