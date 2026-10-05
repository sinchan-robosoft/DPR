import "@/global.css";
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from "@/components/themed-view";


export default function HomeScreen() {
  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1">
        <ThemedView>
          <ThemedText>Hii</ThemedText>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}
