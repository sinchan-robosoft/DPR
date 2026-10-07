import { SECTION_TYPES, type PageItem, type PageSection, type SectionType } from "@/Types/page";

function isSectionType(value: unknown): value is SectionType {
  return typeof value === "string" && (SECTION_TYPES as readonly string[]).includes(value);
}

function normalizeItem(item: unknown): PageItem | null {
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
    subtitle: typeof subtitle === "string" ? subtitle : "",
    image,
  };
}

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

function normalizeSection(raw: unknown, index: number, idPrefix?: string): PageSection | null {
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

  const title = typeof section.title === "string" ? section.title : "";
  const fallbackId = idPrefix ? `${idPrefix}-${section.type}-${index}` : `${section.type}-${index}`;
  const id =
    typeof section.id === "string" && section.id.length > 0
      ? section.id
      : fallbackId;

  return {
    id,
    type: section.type,
    title,
    data,
  };
}

export const railsHelper = {
  normalize(payload: unknown, options?: { page?: number }): PageSection[] {
    if (!Array.isArray(payload)) {
      return [];
    }

    const idPrefix = options?.page != null ? String(options.page) : undefined;

    return payload
      .map((section, index) => normalizeSection(section, index, idPrefix))
      .filter((section): section is PageSection => section !== null);
  },
};
