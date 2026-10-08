import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';
import { StatusBar } from "expo-status-bar";

import HomeScreen from '.';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DetailPage from './DetailPage';
import { SafeAreaView } from 'react-native-safe-area-context';
const queryClient = new QueryClient();


export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style='auto' />
          {/* <AnimatedSplashOverlay />
          <AppTabs /> */}
          <QueryClientProvider client={queryClient}>
            {/* <HomeScreen /> */}
            <DetailPage />
          </QueryClientProvider>

    </ThemeProvider>
  );
}
