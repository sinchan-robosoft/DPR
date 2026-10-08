import { View, type ViewProps } from "react-native";

import { ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export type ThemedViewProps = ViewProps & {
  type?: ThemeColor;
  className?: string;
};

export function ThemedView({
  style,
  className,
  type,
  ...otherProps
}: ThemedViewProps) {
  const theme = useTheme();

  // Inline styles beat className in NativeWind, so skip the theme
  // background when the caller passes a bg-* class (unless `type` is explicit).
  const hasBgClass = /(^|\s)bg-/.test(className ?? "");
  const themeBg =
    type || !hasBgClass ? { backgroundColor: theme[type ?? "background"] } : null;

  return (
    <View
      {...otherProps}
      className={className}
      style={[style]}
    />
  );
}