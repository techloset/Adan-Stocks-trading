import {StyleSheet, Text, View, FlatList} from 'react-native';

import ratio from '../styles/ratio';
import {Color, FontFamily} from '../styles/Gobalstyle';

import {HistoryData as Data} from '../Data/Data';

const BuyingHistory = () => {
  return (
    <FlatList
      data={Data}
      keyExtractor={item => item?.id}
      renderItem={({item, index}) => (
        <View>
          <Text style={index % 2 == 0 ? styles.Rp2 : styles.Rp}>
            {item?.Price}
          </Text>
          <View style={styles.HistoryContainer}>
            <Text style={styles.Text}>{item?.Stock}</Text>
            <Text style={styles.Text}>TUE 22 Jun 2020</Text>
          </View>
          <View style={styles.Container}>
            <View style={styles.Line} />
          </View>
        </View>
      )}
    />
  );
};

export default BuyingHistory;

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
  },
  Rp: {
    marginTop: 10,
    color: Color.black,
    marginHorizontal: 30,
    fontSize: ratio.fontPixel(18),
    fontFamily: FontFamily.SF_Bold,
    lineHeight: ratio.fontPixel(28),
    letterSpacing: ratio.fontPixel(0.8),
  },
  HistoryContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Text: {
    color: Color.gary,
    fontSize: ratio.fontPixel(14),
    fontFamily: FontFamily.SF_Medium,
    lineHeight: ratio.fontPixel(22),
    letterSpacing: ratio.fontPixel(0.8),
  },
  Line: {
    height: ratio.heightPixel(1),
    width: ratio.widthPixel(346),
    backgroundColor: Color.lightgary,
    marginTop: 10,
  },
  Rp2: {
    marginTop: 10,
    color: Color.green,
    marginHorizontal: 30,
    fontSize: ratio.fontPixel(18),
    fontFamily: FontFamily.Bold,
    lineHeight: ratio.fontPixel(28),
    letterSpacing: ratio.fontPixel(0.8),
  },
});
