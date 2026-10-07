import { FlatList, Image, View } from "react-native";

import { ThemedView } from "@/components/themed-view";
import { useLandscape } from "@/hooks/useLandscape";
import type { PageSection } from "@/Types/page";

const GAP = 12;
const SIDE_PADDING = 16;
const PEEK = 24;

const Carousel = ({ section }: { section: PageSection }) => {
  const { width } = useLandscape();
  const itemWidth = width - SIDE_PADDING * 2 - PEEK;
  const snap = itemWidth + GAP;

  return (
    <ThemedView className="items-center">
      <FlatList
        horizontal
        data={section.data}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={true}
        snapToInterval={snap}
        decelerationRate="fast"
        snapToAlignment="start"
        contentContainerStyle={{ paddingHorizontal: SIDE_PADDING }}
        ItemSeparatorComponent={() => <View style={{ width: GAP }} />}
        getItemLayout={(_, index) => ({ length: snap, offset: snap * index, index })}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }}
            style={{ width: itemWidth, aspectRatio: 16 / 14, borderRadius: 12 }}
          />
        )}
      />
    </ThemedView>
  );
};

export default Carousel;
