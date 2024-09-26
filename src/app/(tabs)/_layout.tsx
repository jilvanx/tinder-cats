import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native';

import { Icon } from '@/components/icon/Icon';
import { theme, ThemeColors } from '@/theme';

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colors.activeTab,
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
            // tabBarIconStyle: { marginT: 0 },
            title: '',
            tabBarIcon: ({ color }) => <Icon name="cat" color={color as ThemeColors} />,
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            headerShown: false,
            // tabBarIconStyle: { marginBottom: theme.spacing.n_l_40 },
            title: '',
            tabBarIcon: ({ color }) => <Icon name="message-circle" color={color as ThemeColors} />,
          }}
        />
        <Tabs.Screen
          name="three"
          options={{
            headerShown: false,
            // tabBarIconStyle: { marginBottom: theme.spacing.n_l_40 },
            title: '',
            tabBarIcon: ({ color }) => <Icon name="user" color={color as ThemeColors} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
