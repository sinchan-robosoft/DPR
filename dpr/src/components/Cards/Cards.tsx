import { FlatList, Image, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLandscape } from "@/hooks/useLandscape";
import type { PageSection } from "@/Types/page";

const GAP = 12;
const SIDE_PADDING = 120;

const Cards = ({ section }: { section: PageSection }) => {
  const { width } = useLandscape();
  const itemWidth = width - SIDE_PADDING * 1.7
  const snap = itemWidth + GAP;

  return (
    <ThemedView className="flex flex-col">
      <ThemedText className="mx-5">{section.title}</ThemedText>
      <FlatList
        data={section.data}
        horizontal
        showsHorizontalScrollIndicator={true}
        keyExtractor={(item) => item.id.toString()}
        getItemLayout={(_, index) => ({ length: snap, offset: snap * index, index })}
        ItemSeparatorComponent={() => <View style={{ width: GAP }} />}
        contentContainerStyle={{ padding: 12 }}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }}
            style={{
              width: itemWidth,
              aspectRatio: section.type === "vert" ? 6 / 7 : 12 / 8,
              borderRadius: 12,
            }}
          />
        )}
      />
    </ThemedView>
  );
};

export default Cards;
