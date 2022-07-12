import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  calculadora: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 0,
  },
  resultadoPequeño: {
    color: 'rgba(255,255,255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    margin: 8,
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    fontSize: 30,
    padding: 10,
    color: 'white',
    fontWeight: '300',
  },
});
