import type { ComponentType } from "react";

import Cards from "@/components/Cards/Cards";
import Carousel from "@/components/carousel/Carousel";
import type { PageSection, SectionType } from "@/Types/page";

export type SectionComponent = ComponentType<{ section: PageSection }>;

export const sectionRegistry: Record<SectionType, SectionComponent> = {
  carousel: Carousel,
  horiz: Cards,
  vert: Cards,
};
