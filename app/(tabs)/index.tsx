import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <View style={styles.buttonContainer}>
          <ThemedText type="title" style={styles.buttonText} onPress={() => console.log("Welcome!")}>Start</ThemedText>
        </View>
        <HelloWave />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 8,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: '#ECEDEE',
    borderRadius: 15,
    margin: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Atkinson Hyperlegible Mono',
  },
});
