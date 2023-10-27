import { Image } from "react-native"

export type SilderType = {
    id: String,
    ColorOne: String,
    ColorSecond: String,
    Img: Image|any,
    text: String,
    price: String
}
export type AssetsType={
    id: String,
    ColorOne: string,
    ColoTwo: string,
    Img: any|Image,
    Text: string,
    Price: string
}
export type HistoryType={
    Price:String,
    Stock:String
}