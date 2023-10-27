import { AssetsType, HistoryType, SilderType } from "../type/Type";

export const SilderData: SilderType[] = [
    {
        id: "1",
        ColorOne: "#000",
        ColorSecond: "#676767",
        Img: require("../assets/image/HomePage/apple.png"),
        text: "AAPL",
        price: "$ 364.11",
    },
    {
        id: "2",
        ColorOne: "#E80B0B",
        ColorSecond: "#DC4F00",
        Img: require("../assets/image/HomePage/Mc.png"),
        text: "MCD",
        price: "$ 183.52",
    },
    {
        id: "3",
        ColorOne: "#0038FF",
        ColorSecond: "#5CE2FF",
        Img: require("../assets/image/HomePage/facebook.png"),
        text: "FB",
        price: "$233.42.11",
    }
]
export const AssetData: AssetsType[] = [
    {
        id: "1",
        ColorOne: "#676767",
        ColoTwo: "#000",
        Img: require('../assets/image/HomePage/apple.png'),
        Text: "AAPL",
        Price: "$ 2.020.244",
    },
    {
        id: "2",
        ColorOne: "#5CE2FF",
        ColoTwo: "#0038FF",
        Img: require('../assets/image/HomePage/facebook.png'),
        Text: "FB",
        Price: "$ 5.000",
    },
    {
        id: "3",
        ColorOne: "#FF806C",
        ColoTwo: "#FF5C00",
        Img: require('../assets/image/AssetsPage/Nike.png'),
        Text: "NKE",
        Price: "$ 294.244.000",
    }
]
export const HistoryData: HistoryType[] = [
    {
        Price: "Rp 200.000",
        Stock: "Buy “APPL” Stock"
    },
    {
        Price: "Rp 150.000",
        Stock: "Sell “TLKM” Stock"
    },
    {
        Price: "Rp 1.000.240",
        Stock: "Buy “FB” Stock"
    },
    {
        Price: "Rp 1.000.240",
        Stock: "Sell “APPL” Stock"
    },
]
