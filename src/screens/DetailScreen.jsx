import {StyleSheet, Text, View} from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const DetailScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details!</Text>
      <Svg height="200" width="200">
        <Circle
          cx="100"  // Dairenin merkezinin x koordinatı
          cy="100"  // Dairenin merkezinin y koordinatı
          r="80"    // Dairenin yarıçapı
          stroke="blue"  // Dairenin kenar rengi
          strokeWidth="2" // Kenar kalınlığı
          fill="red"      // Dairenin iç rengi
        />
      </Svg>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
