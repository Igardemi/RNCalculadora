import {useState, useRef} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
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

  return {
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
  };
};
