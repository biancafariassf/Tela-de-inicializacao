import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AdminScreen from './AdminScreen';
import OpcoesScreen from './OpcoesScreen';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isLogged, setIsLogged] = useState(false);

  const handleLoginSuccess = () => {
    setIsLogged(true);
  };

  const handleLoginFailure = () => {
    setIsLogged(false);
    Alert.alert('Erro', 'Nome de usuário ou senha incorretos.');
  };

  return (
    <View style={styles.container}>
      {isLogged ? (
        <OpcoesScreen />
      ) : (
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

export default ProfileScreen;
