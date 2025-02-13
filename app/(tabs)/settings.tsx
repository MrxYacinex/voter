import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <TouchableOpacity
          style={[styles.buttonContainer, isPressed && styles.buttonPressed]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={() => console.log("Welcome!")}
        >
          <ThemedText type="title" style={styles.buttonText}>Start</ThemedText>
        </TouchableOpacity>
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
  buttonPressed: {
    backgroundColor: '#f1f1f1',
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Atkinson Hyperlegible Mono',
  },
});
