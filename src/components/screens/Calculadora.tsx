import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles} from '../../../styles/appStyle';
import {Boton} from './Boton';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const Calculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const nuevoNumero = (numeroTexto: string) => {
    if (numero.includes('.') && numeroTexto === '.') return; // No aceptar doble punto

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDel = () => {
    let negativo = '';
    let numeroTemp = numero;

    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substring(1); //cortamos la primera posicion para obtener el numero entero
    }

    if (numero.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const guardarNumero = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }

    setNumero('0');
  };

  const btnDividir = () => {
    guardarNumero();
    ultimaOperacion.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    guardarNumero();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnRestar = () => {
    guardarNumero();
    ultimaOperacion.current = Operadores.restar;
  };
  const btnSumar = () => {
    guardarNumero();
    ultimaOperacion.current = Operadores.sumar;
  };
  const btnResultado = () => {
    const n1 = Number(numero);
    const n2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${n1 + n2}`);
        break;
      case Operadores.restar:
        setNumero(`${n2 - n1}`);
        break;
      case Operadores.dividir:
        setNumero(`${n2 / n1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${n1 * n2}`);
        break;
      default:
        break;
    }
    setNumeroAnterior('0');
  };

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
