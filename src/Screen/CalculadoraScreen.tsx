import React, { useState } from "react";
import { View, Text } from "react-native";
import BotonCalc from "../component/BotonCalc";
import { styles } from "./appTheme";

const CalculadoraScreen = () => {
  const [Numero, setNumero] = useState("100");

  const clear = () => {
    setNumero("0");
  };

  const signo = () => {
    (Numero.includes ('-'))?setNumero(Numero.replace('-','')):setNumero('-'+ Numero)
  
}

  const GenNum = (numeroTexto: string) => {
    // No aceptar doble punto
    if(Numero.includes('.') && numeroTexto === '.') return
    if (Numero.startsWith('0') || Numero.startsWith('-0')){

    // punto decimal
      if (numeroTexto === '.'){
        setNumero(Numero + numeroTexto);  
      }
    
      //Evaluar si es otro cero y hay un punto 
    } else if(numeroTexto === '0' && Numero.includes('.')) {
      setNumero(Numero + numeroTexto);
    
    
  }else {
      setNumero(Numero + numeroTexto);
    
  }
    
  };
  return (
    <View style={styles.container}>
      <Text style={styles.resultadoPequeno}>0</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{Numero}</Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" bcolor="#9B9B9B" action={clear} />
        <BotonCalc texto="+/-" bcolor="#9B9B9B" action={signo}/>
        <BotonCalc texto="del" bcolor="#9B9B9B" action={clear}/>
        <BotonCalc texto="/" bcolor="#FF9427" action={clear}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" action={GenNum} />
        <BotonCalc texto="8" action={GenNum} />
        <BotonCalc texto="9" action={GenNum} />
        <BotonCalc texto="X" bcolor="#FF9427" action={clear}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" action={GenNum} />
        <BotonCalc texto="5" action={GenNum} />
        <BotonCalc texto="6" action={GenNum} />
        <BotonCalc texto="-" bcolor="#FF9427" action={clear}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" action={GenNum} />
        <BotonCalc texto="2" action={GenNum} />
        <BotonCalc texto="3" action={GenNum} />
        <BotonCalc texto="+" bcolor="#FF9427" action={clear}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho action={GenNum}/>
        <BotonCalc texto="." action={GenNum}/>
        <BotonCalc texto="=" bcolor="#FF9427" action={clear}/>
      </View>
    </View>
  );
};

export default CalculadoraScreen;
