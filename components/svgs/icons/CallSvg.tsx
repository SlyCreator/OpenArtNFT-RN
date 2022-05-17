import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Icon(props: SvgProps) {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.31 1.37l5.304.59s.589 5.303-5.304 11.195C7.418 19.049 2.113 18.46 2.113 18.46l-.589-5.303L5.65 10.8l2.062 2.061s1.473-.294 3.24-2.062c1.768-1.768 2.063-3.24 2.063-3.24l-2.062-2.063L13.31 1.37z"
        stroke="#333"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default Icon;
