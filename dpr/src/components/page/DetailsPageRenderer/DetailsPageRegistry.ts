import type { ComponentType } from "react";
import type { DetailsPageItem, DetailsPageSectionType } from "@/Types/page";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import { heroBannerType } from "@/Types/components/herobannerTypes";
import CtaComponent from "@/components/CtaComponent/CtaComponent";
import OverView from "@/components/OverView/OverView";
import CastComponent from "@/components/CastComponent/CastComponent";
import MoreLikeThis from "@/components/MoreLikeThis/MoreLikeThis";
import ListComponent from "@/components/ListComponent/ListComponent";

export type SectionComponent = ComponentType<{ section: DetailsPageItem }>;

export const detailsPageRegistry: Record<DetailsPageSectionType, SectionComponent> = {
    HeroBanner : HeroBanner,
    CTA :  CtaComponent,
    OverView : OverView,
    Cast : ListComponent,
    MLT : ListComponent,
};

