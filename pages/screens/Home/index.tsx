/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Inicial</Text>
      <Button
        title="Ver detalhes"
        onPress={() => navigation.navigate({name: 'Details'})}
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

export default HomeScreen;
