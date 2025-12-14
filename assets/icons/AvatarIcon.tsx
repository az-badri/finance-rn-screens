import React from 'react';
import { View } from 'react-native';
import Svg, { Rect, Path, Defs, ClipPath } from 'react-native-svg';
import { rem } from "../../src/theme";

const AvatarIcon = ({ size = 36, color = 'white' }) => {
    return (
        <View style={{ width: rem(size / 6), height: rem(size / 6) }}>
            <Svg width={size} height={size} viewBox="0 0 36 36">
                <Rect width={36} height={36} rx={18} fill="#0F0F0F" />
                <Defs>
                    <ClipPath id="clip0_2118_15583">
                        <Rect width={16} height={16} x={10} y={10} fill="white" />
                    </ClipPath>
                </Defs>
                <Path
                    clipPath="url(#clip0_2118_15583)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 14.3333V18.3333H14V14.3333C14 12.1242 15.7909 10.3333 18 10.3333C20.2091 10.3333 22 12.1242 22 14.3333ZM11 22C10.5661 21.4938 10.5664 21.4936 10.5667 21.4934L10.5672 21.4929L10.5685 21.4918L10.5718 21.489L10.581 21.4813C10.5882 21.4753 10.5978 21.4675 10.6098 21.4579C10.6336 21.4387 10.6668 21.4127 10.7094 21.3807C10.7945 21.3169 10.917 21.2296 11.077 21.1267C11.397 20.921 11.8671 20.6531 12.4874 20.3873C13.7297 19.8548 15.5687 19.3333 18 19.3333C20.4313 19.3333 22.2703 19.8548 23.5126 20.3873C24.1329 20.6531 24.6031 20.921 24.923 21.1267C25.083 21.2296 25.2055 21.3169 25.2906 21.3807C25.3332 21.4127 25.3664 21.4387 25.3903 21.4579C25.4022 21.4675 25.4118 21.4753 25.4191 21.4813L25.4282 21.489L25.4315 21.4918L25.4328 21.4929L25.4333 21.4934C25.4336 21.4936 25.4339 21.4938 25 22L25.4339 21.4938L25.6667 21.6934V25.6667H10.3333V21.6934L10.5667 21.4934L11 22Z"
                    fill={color}
                />
            </Svg>
        </View>
    );
};

export default AvatarIcon;