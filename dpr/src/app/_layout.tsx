import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

import HomeScreen from '.';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();


export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <AnimatedSplashOverlay />
      <AppTabs /> */}
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>
      
    </ThemeProvider>
  );
}
