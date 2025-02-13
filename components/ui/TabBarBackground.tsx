import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const TabBarBackground = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={[styles.background, { backgroundColor: Colors[colorScheme ?? 'light'].tabBarBackground }]} />
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default TabBarBackground;
