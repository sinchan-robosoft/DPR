import { Platform, Text, type TextProps } from "react-native";

import { Fonts, ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export type ThemedTextProps = TextProps & {
  type?:
    | "default"
    | "title"
    | "small"
    | "smallBold"
    | "subtitle"
    | "link"
    | "linkPrimary"
    | "code";
  themeColor?: ThemeColor;
  className?: string;
};

const typeClasses: Record<NonNullable<ThemedTextProps["type"]>, string> = {
  default: "text-base leading-6 font-medium",
  title: "text-5xl leading-[52px] font-semibold",
  small: "text-sm leading-5 font-medium",
  smallBold: "text-sm leading-5 font-bold",
  subtitle: "text-[32px] leading-[44px] font-semibold",
  link: "text-sm leading-[30px]",
  linkPrimary: "text-sm leading-[30px] text-[#3c87f7]",
  code: Platform.select({ android: "text-xs font-bold", default: "text-xs font-medium" }),
};

export function ThemedText({
  style,
  className,
  type = "default",
  themeColor,
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();

  // Skip the inline theme color if the type or caller already sets a text color class.
  const classes = `${typeClasses[type]} ${className ?? ""}`;
  const hasColorClass = /(^|\s)text-(?!xs|sm|base|lg|xl|[2-9]xl|\[\d+px\]|left|center|right|justify)/.test(classes);
  const themeColorStyle =
    themeColor || !hasColorClass ? { color: theme[themeColor ?? "text"] } : null;

  return (
    <Text
      {...rest}
      className={classes}
      style={[
        themeColorStyle,
        type === "code" && { fontFamily: Fonts.mono },
        style,
      ]}
    />
  );
}