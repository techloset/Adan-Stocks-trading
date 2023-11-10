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

import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';

import ratio from '../styles/ratio';
import {Color, FontFamily} from '../styles/Gobalstyle';
import MyStock from '../components/MyStock';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Color.white} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        {/* Header */}
        <View style={styles.HeaderContainer}>
          <Text style={styles.Header}>Home</Text>
        </View>
        {/* Asset Container */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Asset');
          }}>
          <View style={styles.AssetsContainer}>
            <LinearGradient
              colors={['#FE5762', '#FF6BA1']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              locations={[0.5, 1.0]}
              style={styles.LinearContainer}>
              <Text style={styles.AssetsHeader}>
                Your total asset portfolio
              </Text>
              <View style={styles.PriceContainer}>
                <Text style={styles.AssetsPrice}>$ 2.240.559</Text>
                <View style={styles.ContainerUp}>
                  <Image
                    style={styles.AssetImage}
                    source={require('../assets/image/HomePage/Up.png')}
                  />
                  <Text style={styles.Up}>+2%</Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>
        {/*  Slider  */}
        <View>
          {/* Slider Header */}
          <View style={styles.SliderHeader}>
            <Text style={styles.SliderBuy}>What’s to Buy?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Browse');
              }}>
              <Text style={styles.SliderSellall}>See All →</Text>
            </TouchableOpacity>
          </View>
          {/* Slider  */}
          <MyStock />
        </View>
        <View style={styles.Comments}>
          {/* CommentsHeader */}
          <LinearTextGradient
            style={styles.CommentsHeader}
            colors={['#FF6BA1', '#FE5762']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            locations={[0.4947, 0.9575]}>
            <Text>Today’s Opinion</Text>
          </LinearTextGradient>
          {/* Comments */}
          <View style={styles.CommentContainer}>
            <View style={styles.CommentsContainer}>
              <Text style={styles.Comment}>Most Valuable Stocks 2020</Text>
              <Text style={styles.ShadowComment}>
                This is how you set your foot for 2020 Stock market recession.
                What’s next...
              </Text>
            </View>
            <View style={styles.CommentImageContainer}>
              <Image
                style={styles.CommentImage}
                source={require('../assets/image/HomePage/girl.png')}
              />
            </View>
          </View>
          <View style={styles.center}>
            <View style={styles.line} />
          </View>

          <View style={styles.CommentContainer}>
            <View style={styles.CommentsContainer}>
              <Text style={styles.Comment}>How To Pick for a Blue Chip</Text>
              <Text style={styles.ShadowComment}>
                What do you like to see? It’s a very different market from 2018.
                The way...
              </Text>
            </View>
            <View style={styles.CommentImageContainer}>
              <Image
                style={styles.CommentImage}
                source={require('../assets/image/HomePage/boy.png')}
              />
            </View>
          </View>
          <View style={styles.center}>
            <View style={styles.line} />
          </View>

          <View style={styles.CommentContainer}>
            <View style={styles.CommentsContainer}>
              <Text style={styles.Comment}>Welcome to New NASDAQ</Text>
              <Text style={styles.ShadowComment}>
                When we talk about the wall street, what looks good might be
                different
              </Text>
            </View>
            <View style={styles.CommentImageContainer}>
              <Image
                style={styles.CommentImage}
                source={require('../assets/image/HomePage/women.png')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  HeaderContainer: {
    marginTop: 13,
    marginBottom: 23,
    marginLeft: 30,
  },
  Header: {
    color: Color.black,
    fontSize: ratio.fontPixel(32),
    fontFamily: FontFamily.SF_Pro_Display_Bold,
  },
  LinearContainer: {
    marginHorizontal: 'auto',
    width: ratio.widthPixel(354),
    height: ratio.heightPixel(125),
    borderRadius: 20,
    shadowColor: Color.pink,
    shadowOffset: {width: 3, height: 10},
    shadowOpacity: 0.8,
    elevation: 60,
  },
  AssetsContainer: {
    alignItems: 'center',
  },
  AssetsHeader: {
    color: Color.white,
    marginTop: 30,
    marginLeft: 30,
    fontSize: ratio.fontPixel(16),
    fontFamily: 'SF-Pro-Display-Bold',
  },
  PriceContainer: {
    marginTop: 8,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  AssetsPrice: {
    color: Color.white,
    fontSize: ratio.fontPixel(32),
    fontFamily: FontFamily.SF_Pro_Display_SemiBold,
  },
  ContainerUp: {
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: ratio.widthPixel(40),
    justifyContent: 'space-between',
  },
  Up: {
    color: Color.white,
    fontSize: ratio.fontPixel(10.667),
    fontFamily: FontFamily.SF_Pro_Display_Regular,
  },
  AssetImage: {
    height: ratio.heightPixel(16),
    width: ratio.widthPixel(16),
  },
  SliderHeader: {
    marginTop: 40,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  SliderBuy: {
    color: Color.black,
    fontSize: ratio.fontPixel(22),
    lineHeight: ratio.fontPixel(28),
    letterSpacing: ratio.fontPixel(0.8),
    fontFamily: FontFamily.SF_Pro_Display_Bold,
  },
  SliderSellall: {
    color: Color.pink,
    fontSize: ratio.fontPixel(18),
    lineHeight: ratio.fontPixel(28),
    letterSpacing: ratio.fontPixel(0.8),
    fontFamily: FontFamily.SF_Pro_Display_Medium,
  },
  Comments: {
    marginTop: 56,
    backgroundColor: Color.blue,
    width: ratio.widthPixel(414),
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  CommentsHeader: {
    fontSize: ratio.fontPixel(22),
    lineHeight: ratio.fontPixel(28),
    letterSpacing: ratio.fontPixel(0.8),
    fontFamily: FontFamily.SF_Pro_Display_Bold,
    marginTop: 40,
    marginLeft: 30,
    marginBottom: 10,
  },
  CommentContainer: {
    marginVertical: 10,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CommentsContainer: {
    width: ratio.widthPixel(261),
  },
  Comment: {
    color: Color.white,
    fontFamily: FontFamily.SF_Pro_Display_Bold,
    fontSize: ratio.fontPixel(18),
    lineHeight: ratio.fontPixel(28),
    letterSpacing: ratio.fontPixel(0.8),
  },
  ShadowComment: {
    color: Color.gary,
    fontFamily: FontFamily.SF_Pro_Display_Regular,
    fontSize: ratio.fontPixel(14),
    lineHeight: ratio.fontPixel(22),
    letterSpacing: ratio.fontPixel(0.8),
  },
  CommentImageContainer: {
    width: ratio.widthPixel(50),
    height: ratio.heightPixel(50),
    backgroundColor: Color.white,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CommentImage: {
    width: ratio.widthPixel(36),
    height: ratio.heightPixel(36),
    borderRadius: 999999,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    marginVertical: 10,
    width: ratio.widthPixel(347),
    height: ratio.heightPixel(1),
    backgroundColor: Color.primarygray,
  },
});

export default HomeScreen;
