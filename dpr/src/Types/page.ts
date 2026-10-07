export const SECTION_TYPES = ["carousel", "horiz", "vert"] as const;

export type SectionType = (typeof SECTION_TYPES)[number];

export type PageItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

export type PageSection = {
  id: string;
  type: SectionType;
  title: string;
  data: PageItem[];
};

export type PaginatedPage = {
  page: number;
  hasNextPage: boolean;
  nextPage: number | null;
  sections: PageSection[];
};
