import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { HapticTab } from '@/components/HapticTab';
import { Colors, hexToRgba } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? 'light'].tabBarBackground;
  const semiTransparentBackgroundColor = hexToRgba(backgroundColor, 0.8);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <LinearGradient
            colors={[semiTransparentBackgroundColor, backgroundColor]}
            style={{ flex: 1 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0, 0.1]}
          />
        ),
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            justifyContent: 'center',
            height: 85,
            borderTopWidth: 0,
            shadowOpacity: 0,
          },
          default: {
            justifyContent: "center",
            height: 85,
            borderTopWidth: 0,
            shadowOpacity: 0,
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('@/assets/icons/home-button.png')}
                style={[styles.icon, { tintColor: color }]}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('@/assets/icons/glassThick.png')}
                style={[styles.icon, { tintColor: color }]}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('@/assets/icons/profile.png')}
                style={[styles.smallIcon, { tintColor: color }]}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('@/assets/icons/settings.png')}
                style={[styles.smallIcon, { tintColor: color }]}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingTop: 15,
    width: '100%',
  },
  icon: {
    height: 28,
    width: 28,
  },
  smallIcon: {
    height: 26,
    width: 26,
  },
});