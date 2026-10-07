import { useWindowDimensions } from "react-native";

export const useLandscape = () => {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
    return {
        width,
        height,
        isLandscape
    }
}



