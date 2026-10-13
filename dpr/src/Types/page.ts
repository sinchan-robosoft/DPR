export const SECTION_TYPES = ["carousel", "horiz", "vert"] as const;
export const Details_Page_Section_Types = ["HeroBanner","CTA","OverView","Cast","MLT"] as const;

export type SectionType = (typeof SECTION_TYPES)[number];
export type DetailsPageSectionType = (typeof Details_Page_Section_Types)[number];

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

export type ctaType = {
  id : string
  btnText : string
}

export type castType = {
  id: string, 
  name: string, 
  character: string, 
  imageUrl : string
}

export type moreLikeThisType = {
    id: string, 
    title: string, 
    subtitle: string, 
    imageUrl: string 
}

export type DetailsPageItem = {
  heroBanner? : string,
  releaseDate? : string,
  duration?: string,
  ratings?: string,
  cta? : ctaType[],
  overview? : string,
  cast?: castType[],
  mlt? : moreLikeThisType[],
  movieTitle? : string,
  genre? : string[],
  contentRating? : string

}

export type DetailsPageSection = {
  id: string,
  type: DetailsPageSectionType,
  title: string,
  data: DetailsPageItem 
}
