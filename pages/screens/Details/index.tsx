/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export type StackParams = {
    Contact: 'Contact';
    Details: 'Details';
 }

const DetailsScreen = ({ navigation }: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Detalhes</Text>
      <Button
        title="Ir para Contato"
        onPress={() => navigation.navigate({name: 'Home'})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DetailsScreen;

