import { Pressable } from "react-native";
import React from "react";
import {FontAwesome} from "@expo/vector-icons";
import { deleteNote } from "../services/noteStoreService";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";

type Props = {
    noteId: string
}
export const DeleteNote: React.FC<Props> = ({noteId}) =>{
    const navigation = useNavigation<ScreenNavigationProp>();
    const deleteNoteHandler = async () => {
        await deleteNote(noteId);
        navigation.navigate("Home");
    };

    return( 
    <Pressable  onPress={deleteNoteHandler}>
        <FontAwesome name='umbrella' size={30} color="#ffb703" />
    </Pressable>
    );
 
};