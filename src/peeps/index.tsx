import React, { CSSProperties } from 'react';
// import '../src/css/index.css' // relative to the lib folder
import Head from './head';

export { BustPose, BustPoseType } from './pose/bust/z_options';
export { SittingPose, SittingPoseType } from './pose/sitting/z_options';
export { StandingPose, StandingPoseType } from './pose/standing/z_options';
export { Hair, HairType } from './hair/z_options';
export { Accessories, AccessoryType } from './accessories/z_options';
export { Face, FaceType } from './face/z_options';
export { FacialHair, FacialHairType } from './facialHair/z_options';

import { HairType } from './hair/z_options';
import { AccessoryType } from './accessories/z_options';
import { FaceType } from './face/z_options';
import { FacialHairType } from './facialHair/z_options';
import { StandingPoseType } from './pose/standing/z_options';
import { SittingPoseType } from './pose/sitting/z_options';
import { BustPoseType } from './pose/bust/z_options';

interface PeepProps {
	style?: CSSProperties;
	accessory?: React.ElementType<AccessoryType>;
	body?: React.ElementType<BustPoseType | SittingPoseType | StandingPoseType>;
	face?: React.ElementType<FaceType>;
	facialHair?: React.ElementType<FacialHairType>;
	hair?: React.ElementType<HairType>;
	viewBox?: { x: string; y: string; width: string; height: string };
	circleStyle?: CSSProperties;
}

const Peep: React.FC<PeepProps> = ({
	style,
	accessory,
	body,
	face,
	facialHair,
	hair,
	viewBox
}) => {
	let { x, y, width, height } = viewBox || {
		x: 0,
		y: 0,
		width: 850,
		height: 1200
	};

	return (
		<svg style={style} viewBox={`${x} ${y} ${width} ${height}`}>
			<g>
				{// Body
				body && React.createElement(body)}
				{// Head
				React.createElement(Head, { hair, face, facialHair, accessory })}
			</g>
		</svg>
	);
};

export const CirclePeep: React.FC<PeepProps> = ({
	style,
	accessory,
	body,
	face,
	facialHair,
	hair,
	viewBox,
	circleStyle
}) => {
	return (
		<div style={circleStyle}>
			{React.createElement(Peep, {
				style,
				accessory,
				body,
				face,
				facialHair,
				hair,
				viewBox
			})}
		</div>
	);
};

export default Peep;
