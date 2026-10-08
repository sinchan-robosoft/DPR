import { Alert, Pressable } from 'react-native'
import { ThemedText } from '../themed-text'
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const CustomButton = ({
  className,
  textClassName,
  onPressCallBack,
  btnText

}:{
  className? : string,
  textClassName? : string,
  onPressCallBack? : () => void,
  btnText?: string
}) => {
  const scale = useSharedValue(1);
  const style = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  return (
    <AnimatedPressable 
      onPressIn={() => (scale.value = withSpring(0.95))}
      onPressOut={() => (scale.value = withSpring(1))}
      style={style} 
      className = {className} 
      onPress={onPressCallBack ? onPressCallBack : () => Alert.alert("Button","pressed button")}>
        <ThemedText className={textClassName}>{btnText ? btnText : "Button"}</ThemedText>
    </AnimatedPressable>
  )
}

export default CustomButton