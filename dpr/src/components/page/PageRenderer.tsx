import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import type { PageSection } from "@/Types/page";

import { sectionRegistry } from "./sectionRegistry";

export function PageRenderer({ sections }: { sections: PageSection[] }) {
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
      {rails.map((section) => {
        const Component = sectionRegistry[section.type];

        if (!Component) {
          return null;
        }

        return <Component key={section.id} section={section} />;
      })}
    </>
  );
}
