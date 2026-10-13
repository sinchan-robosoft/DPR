import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import type { DetailsPageSection } from "@/Types/page";
import { detailsPageRegistry } from "./DetailsPageRegistry";

export function PageRenderer({ sections }: { sections: DetailsPageSection[] }) {
    const rails = Array.isArray(sections) ? sections : [];

    if (rails.length === 0) {
        return (
            <ThemedView className="flex-1 items-center justify-center px-6">
                <ThemedText>No content available</ThemedText>
            </ThemedView>
        );
    }

    return (
        <>
            <ThemedView className="flex gap-1 px-0">
                {rails.map((section) => {
                    const Component = detailsPageRegistry[section.type];

                    if (!Component) {
                        return null;
                    }

                    return <Component key={section.id} section={section.data} />;
                })}
            </ThemedView>
        </>
    );
}
