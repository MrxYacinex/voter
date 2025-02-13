import React from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
//import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const borderColor = colorScheme === 'dark' ? '#ECEDEE' : '#DE3163';

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <View style={[styles.buttonContainer, { borderColor }]}>
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
