import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Button, Alert, Text } from 'react-native';

import OpcoesScreen from './OpcoesScreen';

import Header from "../components/Header";
import AdminScreen from './AdminScreen';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [isLogged, setIsLogged] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Perfil",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#147DEB",
        height: 70,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => null,
    });
  }, []);



  const handleLoginSuccess = () => {
    setIsLogged(true);
  };

  const handleLoginFailure = () => {
    setIsLogged(false);
    Alert.alert('Erro', 'Nome de usuário ou senha incorretos.');
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <View style={styles.container}>
      <Header />

      {isLogged ? (
        /* Se estiver logado, redirecionar para a próxima página */
        <OpcoesScreen />
      ) : (
        /* Se não estiver logado, exibir formulário de login */
        <AdminScreen
          onLoginSuccess={handleLoginSuccess}
          onLoginFailure={handleLoginFailure}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginScreen;