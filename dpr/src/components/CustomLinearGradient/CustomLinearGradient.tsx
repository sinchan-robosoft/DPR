import React from 'react'
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg'

const CustomLinearGradient = ({ 
  x1,
  y1, 
  x2, 
  y2, 
  offset1, 
  offset2, 
  offset3,
  stopColor1,
  stopColor2,
  stopColor3,
  stopOpacity1,
  stopOpacity2,
  stopOpacity3

} : {
  x1? : string,
  y1? : string, 
  x2? : string, 
  y2? : string, 
  offset1? : string, 
  offset2? : string, 
  offset3? : string,
  stopColor1? : string,
  stopColor2? : string,
  stopColor3? : string,
  stopOpacity1? : string,
  stopOpacity2? : string,
  stopOpacity3? : string


}) => {
    return (
        <Svg width="100%" height="100%">
            <Defs>
                <LinearGradient id="g" x1={x1 ? x1 : "0"} y1={y1 ? y1 : "0"} x2={x2 ? x2 : "0"} y2={y2 ? y2 : "1"}>
                    <Stop offset={offset1 ? offset1 : "0"} stopColor={stopColor1 ? stopColor1 : "#0F0F14"} stopOpacity={stopOpacity1 ? stopOpacity1 : "0.4"} />
                    <Stop offset={offset2 ? offset2 : "0.6"} stopColor={stopColor2 ? stopColor2 : "#0F0F14"} stopOpacity={stopOpacity2 ? stopOpacity2 : "0.9"} />
                    <Stop offset={offset3 ? offset3 : "1"} stopColor={stopColor3 ? stopColor3 : "#08080a"} stopOpacity={stopOpacity3 ? stopOpacity3 : "0.9"} />
                </LinearGradient>
            </Defs>

            <Rect
                width="100%"
                height="100%"
                fill="url(#g)"
            />
        </Svg>
    )
}

export default CustomLinearGradient