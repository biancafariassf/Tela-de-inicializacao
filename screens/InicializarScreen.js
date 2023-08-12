import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const InicializarScreen = ({ navigation }) => {
  useEffect(() => {
    // Aqui você pode adicionar lógica para qualquer inicialização necessária
    // ou transições automáticas para a próxima tela após um determinado período.

    // Exemplo de transição para a próxima tela após 2 segundos:
    setTimeout(() => {
      navigation.navigate('HomeScreen'); // Substitua 'Login' pelo nome da sua próxima tela
    }, 2000); // 2000 milissegundos (2 segundos)
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Inicio.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default InicializarScreen;
