import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import React from 'react';
import {Color, FontFamily} from '../styles/Gobalstyle';
import ratio from '../styles/ratio';
import MyProtilo from '../components/MyProtfilo';
import BuyingHistory from '../components/BuyingHistory';

interface AssetScreenProps {
  navigation: any;
}

const AssetScreen: React.FC<AssetScreenProps> = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Color.pink} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* White Container */}
        <View style={styles.WhiteContainer}>
          <View style={styles.WhiteBox} />
        </View>
        {/* Asset page */}
        <View style={styles.AssetContainer}>
          {/* Header */}
          <View style={styles.HeaderContainer}>
            <View />
            <Text style={styles.Header}>My Asset</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Image
                style={styles.Cross}
                source={require('../assets/image/AssetsPage/Cross.png')}
              />
            </TouchableOpacity>
          </View>
          {/* Price */}
          <Text style={styles.PortText}>Your total asset portfolio</Text>
          <View style={styles.PriceContainer}>
            <Text style={styles.Price}>$ 2.240.559</Text>
            <View style={styles.PercentContainer}>
              <Image
                style={styles.Up}
                source={require('../assets/image/AssetsPage/Up.png')}
              />
              <Text style={styles.Percent}>+2%</Text>
            </View>
          </View>
          {/*  */}
          <Text style={styles.PortfiloText}>My Portfolio</Text>
          <View style={styles.WhiteContainer}>
            <MyProtilo />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Browse');
              }}>
              <Text style={styles.AssetText}>See All Assets →</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.HistoryText}>History</Text>
          <BuyingHistory />
        </View>
      </ScrollView>
    </View>
  );
};

export default AssetScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Color.pink,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  WhiteContainer: {
    alignItems: 'center',
  },
  WhiteBox: {
    backgroundColor: Color.white,
    paddingTop: 20,
    width: ratio.widthPixel(374),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  AssetContainer: {
    backgroundColor: Color.white,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -10},
    shadowOpacity: 0.8,
    elevation: 20,
    shadowRadius: 32,
  },
  HeaderContainer: {
    marginVertical: 29,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Header: {
    color: Color.black,
    fontSize: ratio.fontPixel(22),
    fontFamily: FontFamily.SF_Bold,
  },
  Cross: {
    width: ratio.widthPixel(32),
    height: ratio.heightPixel(32),
  },
  PortText: {
    marginHorizontal: 30,
    color: Color.gary,
    fontSize: ratio.fontPixel(16),
    fontFamily: FontFamily.SF_Medium,
  },
  PriceContainer: {
    marginHorizontal: 30,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Price: {
    color: Color.black,
    fontSize: ratio.fontPixel(32),
    fontFamily: FontFamily.SF_SemiBold,
    marginRight: 7,
  },
  PercentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: ratio.widthPixel(40),
    justifyContent: 'space-between',
  },
  Percent: {
    color: Color.green,
    fontSize: ratio.fontPixel(10.667),
    fontFamily: FontFamily.SF_SemiBold,
  },
  Up: {
    width: ratio.widthPixel(16),
    height: ratio.heightPixel(16),
  },
  PortfiloText: {
    marginHorizontal: 30,
    marginTop: 43,
    marginBottom: 10,
    color: Color.black,
    fontSize: ratio.fontPixel(22),
    fontFamily: FontFamily.SF_Bold,
    lineHeight: ratio.fontPixel(28),
    letterSpacing: ratio.fontPixel(0.8),
  },
  AssetText: {
    marginTop: 20,
    color: Color.pink,
    fontSize: ratio.fontPixel(18),
    fontFamily: FontFamily.SF_Medium,
    lineHeight: ratio.fontPixel(28),
    letterSpacing: ratio.fontPixel(0.8),
  },
  HistoryText: {
    marginTop: 30,
    marginBottom: 10,
    color: Color.black,
    marginHorizontal: 30,
    fontSize: ratio.fontPixel(22),
    fontFamily: FontFamily.SF_Bold,
    lineHeight: ratio.fontPixel(28),
    letterSpacing: ratio.fontPixel(0.8),
  },
});
