import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../../../styles/appStyle';

interface Props {
  param: string;
  color?: string;
  ancho?: boolean;
  accion: (botonRecibido: string) => void;
}

export const Boton = ({
  param,
  color = '#2D2D2D',
  ancho = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(param)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {param}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
