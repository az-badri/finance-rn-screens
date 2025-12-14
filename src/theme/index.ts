import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const rem = (v: number) => (width / 390) * v;
