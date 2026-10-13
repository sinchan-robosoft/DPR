import { Details_Page_Section_Types, DetailsPageSection, DetailsPageSectionType } from "@/Types/page";

function readItems(data: unknown): unknown[] | null {
  if (Array.isArray(data)) {
    return data;
  }

  if (data && typeof data === "object" && "items" in data) {
    const { items } = data as { items: unknown };
    if (Array.isArray(items)) {
      return items;
    }
  }

  return null;
}

function isSectionType(value: unknown): value is DetailsPageSection {
  return typeof value === "string" && (Details_Page_Section_Types as readonly string[]).includes(value);
}

function normalizeItem(item: unknown): DetailsPageSection | null {
  if (!item || typeof item !== "object") {
    return null;
  }

  const { id, title, subtitle, image } = item as Record<string, unknown>;

  if (typeof id !== "number" || typeof title !== "string" || typeof image !== "string") {
    return null;
  }

  return {
    id,
    title,
    data
  }

//   return {
//     id,
//     title,
//     subtitle: typeof subtitle === "string" ? subtitle : "",
//     image,
//   };
}

function normalizeSection(raw: unknown, index: number, idPrefix?: string): DetailsPageSection | null  {
    if (!raw || typeof raw !== "object") {
        return null;
    }
    const section = raw as Record<string, unknown>;


    if (!isSectionType(section.type)) {
        return null;
    }


    const rawItems = readItems(section.data);
    if (!rawItems) {
        return null;
    }

    const data = rawItems
    .map(normalizeItem)
    .filter((item): item is PageItem => item !== null);

    if (data.length === 0) {
    return null;
    }

}

export const detailPageModel = {

    normalize : function (payload : unknown, options?: {pageNumber : number}) : DetailsPageSection[]{
        if(Array.isArray(payload)){
            return [];
        }
        const idPrefix = options?.pageNumber ? options.pageNumber : undefined;
        return [];
        
    }
}