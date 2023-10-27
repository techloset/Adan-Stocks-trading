import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Color, FontFamily } from '../styles/Gobalstyle';
import ratio from '../styles/ratio';

import { AssetData as Data } from "../Data/Data"

const MyAsset = () => {
    return (
        <FlatList
            data={Data}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item, index }) => (
                <View>
                    <LinearGradient
                        colors={[`${item.ColorOne}`, `${item.ColoTwo}`]}
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        locations={[0.0413, 0.9339]}
                        style={styles.PortfiloContainer}
                    >
                        <View style={styles.IconContainer}>
                            <Image
                                style={index == 2 ? styles.NikeIcon : styles.Icon}
                                source={item.Img}
                            />
                            <Text style={styles.IconText}>{item.Text}</Text>
                        </View>
                        <Text style={styles.PortfiloPrice}>{item.Price}</Text>
                    </LinearGradient>
                </View>
            )}
        />
    )
}

export default MyAsset

const styles = StyleSheet.create({
    PortfiloContainer: {
        width: ratio.widthPixel(354),
        height: ratio.heightPixel(64),
        marginTop: 10,
        borderRadius: 20,
        alignItems: "center",
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    IconContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    Icon: {
        marginRight: 25,
        height: ratio.heightPixel(24),
        width: ratio.widthPixel(24),
    },
    NikeIcon: {
        marginRight: 11,
        height: ratio.heightPixel(14.268),
        width: ratio.widthPixel(40),
    },
    IconText: {
        fontSize: ratio.fontPixel(18),
        color: Color.white,
        lineHeight: ratio.fontPixel(24),
        letterSpacing: ratio.fontPixel(0.8),
        fontFamily: FontFamily.SemiBold,
    },
    PortfiloPrice: {
        fontSize: ratio.fontPixel(14),
        color: Color.white,
        lineHeight: ratio.fontPixel(24),
        letterSpacing: ratio.fontPixel(0.8),
        fontFamily: FontFamily.SemiBold,
    },
})