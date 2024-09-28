import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native';

import { Icon } from '@/components/Icon';
import { getKeyColorByValue, theme } from '@/theme';

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colors.pink,
          tabBarInactiveTintColor: theme.colors.black,
          tabBarStyle: {
            paddingVertical: theme.spacing.ml_24,
            paddingHorizontal: theme.spacing.sm_12,
            gap: theme.spacing.ml_24,
            position: 'absolute',
            height: 44,
            width: 156,
            bottom: 25,
            left: 110,
            borderRadius: theme.borderRadii.xxl_36,
            backgroundColor: theme.colors.backgroundColor,
            elevation: 5,
            shadowColor: theme.colors.shadowColor,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: '',
            tabBarIcon: ({ color }) => {
              const colorValue = getKeyColorByValue(color);
              return <Icon name="cat" color={colorValue} />;
            },
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            headerShown: false,
            title: '',
            tabBarIcon: ({ color }) => {
              const colorValue = getKeyColorByValue(color);
              return <Icon name="message-circle" color={colorValue} />;
            },
          }}
        />
        <Tabs.Screen
          name="three"
          options={{
            headerShown: false,
            title: '',
            tabBarIcon: ({ color }) => {
              const colorValue = getKeyColorByValue(color);
              return <Icon name="user" color={colorValue} />;
            },
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
