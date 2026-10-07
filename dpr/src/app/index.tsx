import "@/global.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ScrollView, type NativeScrollEvent, type NativeSyntheticEvent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PageRenderer } from "@/components/page/PageRenderer";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { railsHelper } from "@/helpers/railsModel";
import type { PaginatedPage } from "@/Types/page";
import { getData } from "../../utils/api";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NEAR_BOTTOM_OFFSET = 200;

const fetchPage = async (pageParam: number): Promise<PaginatedPage> => {
  const pageData = await getData(pageParam);
  
  if (!pageData) {
    return {
      page: pageParam,
      hasNextPage: false,
      nextPage: null,
      sections: [],
    };
  }

  return {
    page: pageData.page,
    hasNextPage: Boolean(pageData.hasNextPage),
    nextPage: pageData.nextPage ?? null,
    sections: railsHelper.normalize(pageData.data, { page: pageData.page }),
  };
};

export default function HomeScreen() {
  const {
    data,
    isError,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["home-page"],
    queryFn: ({ pageParam }) => fetchPage(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasNextPage ? lastPage.nextPage ?? undefined : undefined,
  });

  const sections = data?.pages.flatMap((page) => page.sections) ?? [];

  const handleScroll = ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const distanceFromBottom =
      nativeEvent.contentSize.height -
      (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y);

    if (distanceFromBottom <= NEAR_BOTTOM_OFFSET && hasNextPage && !isFetchingNextPage) {
      void fetchNextPage();
    }
  };

  if (isLoading) {
    return <ThemedText>Loading...</ThemedText>;
  }

  if (isError) {
    return <ThemedText>{error.message}</ThemedText>;
  }

  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1 gap-6">
        <ScrollView
          onScroll={handleScroll}
          scrollEventThrottle={400}
        >
          <PageRenderer sections={sections} />
          {isFetchingNextPage ? <ThemedText className="py-4 text-center">Loading more...</ThemedText> : null}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}
