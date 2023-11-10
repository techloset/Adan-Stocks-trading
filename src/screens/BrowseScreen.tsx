import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import ratio from '../styles/ratio';
import {Color, FontFamily} from '../styles/Gobalstyle';
import LinearGradient from 'react-native-linear-gradient';

const BrowseScreen = () => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Color.blue} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={styles.Container}>
          <View style={styles.HeaderContainer}>
            <Text style={styles.Header}>Browse Stocks</Text>
            <Image
              style={styles.Search}
              source={require('../assets/image/AssetsPage/search.png')}
            />
          </View>
          <View style={styles.RowContainer}>
            <LinearGradient
              colors={['#000', '#676767']}
              start={{x: 0.0, y: 0.0}}
              end={{x: 1.0, y: 1.0}}
              locations={[0.0, 0.953]}
              style={styles.AppleCard}>
              <Image
                style={styles.AppleImage}
                source={require('../assets/image/HomePage/apple.png')}
              />
              <Text style={styles.AppleText}>AAPL</Text>
              <Text style={styles.ApplePrice}>$ 364.11</Text>
            </LinearGradient>
            <LinearGradient
              colors={['#E80B0B', '#DC4F00']}
              start={{x: 0.0, y: 0.0}}
              end={{x: 1.0, y: 1.0}}
              locations={[0.0, 0.953]}
              style={styles.McCard}>
              <Image
                style={styles.McImage}
                source={require('../assets/image/HomePage/Mc.png')}
              />
              <Text style={styles.AppleText}>MCD</Text>
              <Text style={styles.ApplePrice}>$ 183.52</Text>
            </LinearGradient>
          </View>
          <View style={styles.RowContainer}>
            <LinearGradient
              colors={['#4518DB', '#7B29FF']}
              start={{x: 0.0, y: 0.0}}
              end={{x: 1.0, y: 1.0}}
              locations={[0.0, 0.953]}
              style={styles.TWTRCard}>
              <Image
                style={styles.TWTRImage}
                source={require('../assets/image/HomePage/twitter.png')}
              />
              <Text style={styles.AppleText}>TWTR</Text>
              <Text style={styles.ApplePrice}>$ 30.87</Text>
            </LinearGradient>
            <View style={styles.ColContainer}>
              <LinearGradient
                colors={['#FF806C', '#FF5C00']}
                start={{x: 0.0, y: 0.0}}
                end={{x: 1.0, y: 1.0}}
                locations={[0.0, 0.953]}
                style={styles.NikeCard}>
                <Image
                  style={styles.NikeImage}
                  source={require('../assets/image/AssetsPage/Nike.png')}
                />
                <Text style={styles.AppleText}>NIKE</Text>
                <Text style={styles.ApplePrice}>$ 98.43</Text>
              </LinearGradient>
              <LinearGradient
                colors={['#278EFF', '#6271FF']}
                start={{x: 0.0, y: 0.0}}
                end={{x: 1.0, y: 1.0}}
                locations={[0.0, 0.953]}
                style={styles.PayCard}>
                <Image
                  style={styles.PayImage}
                  source={require('../assets/image/HomePage/pay.png')}
                />
                <Text style={styles.AppleText}>PYPL</Text>
                <Text style={styles.ApplePrice}>$ 177.21</Text>
              </LinearGradient>
            </View>
          </View>
          <LinearGradient
            colors={['#FF6091', '#5127DD']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.LyftCard}>
            <Image
              style={styles.LyftImage}
              source={require('../assets/image/HomePage/lyft.png')}
            />
            <Text style={styles.AppleText}>LYFT</Text>
            <Text style={styles.ApplePrice}>$ 31.82</Text>
          </LinearGradient>

          <View style={styles.RowContainer}>
            <LinearGradient
              colors={['#FF806C', '#FF5C00']}
              start={{x: 0.0, y: 0.0}}
              end={{x: 1.0, y: 1.0}}
              locations={[0.0, 0.953]}
              style={styles.AppleCard}>
              <Image
                style={styles.AImage}
                source={require('../assets/image/HomePage/a.png')}
              />
              <Text style={styles.AppleText}>AAPL</Text>
              <Text style={styles.ApplePrice}>$ 364.11</Text>
            </LinearGradient>
            <LinearGradient
              colors={['#A7FFE5', '#00CFC3']}
              start={{x: 0.0, y: 0.0}}
              end={{x: 1.0, y: 1.0}}
              locations={[0.0, 0.953]}
              style={styles.McCard}>
              <Image
                style={styles.AImage}
                source={require('../assets/image/HomePage/in.png')}
              />
              <Text style={styles.AppleText}>AAPL</Text>
              <Text style={styles.ApplePrice}>$ 364.11</Text>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BrowseScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Color.blue,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    backgroundColor: Color.blue,
  },
  Container: {
    marginTop: 13,
    marginHorizontal: 30,
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  Header: {
    color: Color.white,
    fontSize: ratio.fontPixel(32),
    fontFamily: FontFamily.SF_Pro_Display_Bold,
  },
  Search: {
    width: ratio.widthPixel(24),
    height: ratio.heightPixel(24),
  },
  RowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  ColContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: ratio.heightPixel(300),
  },
  AppleCard: {
    width: ratio.widthPixel(134),
    height: ratio.heightPixel(170),
    borderRadius: 20,
  },
  AppleImage: {
    width: ratio.widthPixel(24),
    height: ratio.heightPixel(24),
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 58,
  },
  AppleText: {
    fontSize: ratio.fontPixel(18),
    color: Color.white,
    marginLeft: 20,
    lineHeight: ratio.fontPixel(24),
    letterSpacing: ratio.fontPixel(0.8),
    fontFamily: FontFamily.SF_Pro_Display_SemiBold,
  },
  ApplePrice: {
    color: Color.white,
    marginLeft: 20,
    fontSize: ratio.fontPixel(18),
    lineHeight: ratio.fontPixel(24),
    letterSpacing: ratio.fontPixel(0.8),
    fontFamily: FontFamily.SF_Pro_Display_SemiBold,
  },
  McCard: {
    width: ratio.widthPixel(200),
    height: ratio.heightPixel(170),
    borderRadius: 20,
  },
  McImage: {
    width: ratio.widthPixel(24),
    height: ratio.heightPixel(19.911),
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 62.09,
  },
  TWTRCard: {
    width: ratio.widthPixel(200),
    height: ratio.heightPixel(300),
    borderRadius: 20,
  },
  TWTRImage: {
    width: ratio.widthPixel(24),
    height: ratio.heightPixel(24),
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 178,
  },
  NikeCard: {
    width: ratio.widthPixel(134),
    height: ratio.heightPixel(140),
    borderRadius: 20,
  },
  NikeImage: {
    width: ratio.widthPixel(40),
    height: ratio.heightPixel(14.268),
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 32.73,
  },
  PayCard: {
    width: ratio.widthPixel(134),
    height: ratio.heightPixel(140),
    borderRadius: 20,
  },
  PayImage: {
    width: ratio.widthPixel(24),
    height: ratio.heightPixel(24),
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 28,
  },
  LyftCard: {
    width: ratio.widthPixel(354),
    height: ratio.heightPixel(154),
    borderRadius: 20,
    marginTop: 20,
  },
  LyftImage: {
    width: ratio.widthPixel(40),
    height: ratio.heightPixel(28.4),
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 39.6,
  },
  AImage: {
    width: ratio.widthPixel(32),
    height: ratio.heightPixel(32),
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 50,
  },
});
