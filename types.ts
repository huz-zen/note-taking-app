import { RouteProp } from "@react-navigation/native";
import {NativeStackNavigationProp } from "@react-navigation/native-stack"


export type RootStackParamList = {
    Home : undefined;
    EditNote : {noteId:string | undefined};
};

export type ScreenNavigationProp =
 NativeStackNavigationProp<RootStackParamList>;

 export type EditScreenRouteProp = RouteProp<RootStackParamList,'EditNote'>;