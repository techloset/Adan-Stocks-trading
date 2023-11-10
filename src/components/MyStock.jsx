import {View, Image, Text, StyleSheet, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ratio from '../styles/ratio';
import {Color, FontFamily} from '../styles/Gobalstyle';

import {SilderData as Data} from '../Data/Data';

const MyStock = () => {
  return (
    <FlatList
      data={Data}
      style={styles.Slider}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View>
          <LinearGradient
            colors={[`${item.ColorOne}`, `${item.ColorSecond}`]}
            start={{x: 0.0, y: 0.0}}
            end={{x: 1.0, y: 1.0}}
            locations={[0.0, 0.953]}
            style={styles.SliderCard}>
            <Image style={styles.Image} source={item?.Img} />
            <Text style={styles.SliderText}>{item?.text}</Text>
            <Text style={styles.SliderPrice}>{item?.price}</Text>
          </LinearGradient>
        </View>
      )}
    />
  );
};

export default MyStock;

const styles = StyleSheet.create({
  Slider: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
  },
  SliderCard: {
    width: ratio.widthPixel(134),
    height: ratio.heightPixel(170),
    borderRadius: 20,
    marginHorizontal: 10,
    shadowColor: Color.black,
    shadowOffset: {width: 3, height: -6},
    shadowOpacity: 1,
    elevation: 20,
  },
  Image: {
    marginLeft: 20,
    marginTop: 20,
    height: ratio.heightPixel(24),
    width: ratio.widthPixel(24),
  },
  SliderText: {
    fontSize: ratio.fontPixel(18),
    marginTop: 58,
    color: Color.white,
    marginLeft: 20,
    lineHeight: ratio.fontPixel(24),
    letterSpacing: ratio.fontPixel(0.8),
    fontFamily: FontFamily.SF_Pro_Display_SemiBold,
  },
  SliderPrice: {
    color: Color.white,
    marginLeft: 20,
    fontSize: ratio.fontPixel(18),
    lineHeight: ratio.fontPixel(24),
    letterSpacing: ratio.fontPixel(0.8),
    fontFamily: FontFamily.SF_Pro_Display_SemiBold,
  },
});
