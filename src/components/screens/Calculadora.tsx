import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../styles/appStyle';
import {Boton} from './Boton';
import {useCalculadora} from '../../../Hooks/useCalculadora';

export const Calculadora = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    btnDel,
    btnDividir,
    nuevoNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    positivoNegativo,
    btnResultado,
  } = useCalculadora();

  return (
    <View style={styles.calculadora}>
      {numeroAnterior !== '0' ? (
        <Text style={styles.resultadoPequeño}>{numeroAnterior}</Text>
      ) : (
        ''
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        {/* Color Naranja= #FF9427 */}
        {/* Color Gris Oscuro= #"2D2D2D" */}
        {/* Color Gris Claro= #"9B9B9B" */}

        <Boton param="C" color="#9B9B9B" accion={limpiar} />
        <Boton param="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <Boton param="del" color="#9B9B9B" accion={btnDel} />
        <Boton param="/" color="#FF9427" accion={btnDividir} />
      </View>

      <View style={styles.fila}>
        <Boton param="7" accion={nuevoNumero} />
        <Boton param="8" accion={nuevoNumero} />
        <Boton param="9" accion={nuevoNumero} />
        <Boton param="x" color="#FF9427" accion={btnMultiplicar} />
      </View>

      <View style={styles.fila}>
        <Boton param="4" accion={nuevoNumero} />
        <Boton param="5" accion={nuevoNumero} />
        <Boton param="6" accion={nuevoNumero} />
        <Boton param="-" color="#FF9427" accion={btnRestar} />
      </View>

      <View style={styles.fila}>
        <Boton param="1" accion={nuevoNumero} />
        <Boton param="2" accion={nuevoNumero} />
        <Boton param="3" accion={nuevoNumero} />
        <Boton param="+" color="#FF9427" accion={btnSumar} />
      </View>

      <View style={styles.fila}>
        <Boton param="0" accion={nuevoNumero} ancho />
        <Boton param="." accion={nuevoNumero} />
        <Boton param="=" color="#FF9427" accion={btnResultado} />
      </View>
    </View>
  );
};
