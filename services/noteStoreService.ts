import AsyncStorage from "@react-native-async-storage/async-storage";

export type Note = {
    text: string;
    id: string;
}

export type NoteStore = {
    notes: Array<Note>;
}

const STORE_KEY = 'TsAAKdE2';

export const getAllNotes = async () => {
    const storeItem = await AsyncStorage.getItem(STORE_KEY);
    if (storeItem) {
        return JSON.parse(storeItem) as NoteStore;
    }
    return { notes: [] };
}

export const getNote = async (id: string) => {
    const noteStore = await getAllNotes();
    const note = noteStore.notes.find(note => note.id === id);
    return note;
}

export const saveNote = async (text: string, noteId:string|undefined) => {
    const noteStore = await getAllNotes();
    if(noteId){
        const noteIndex = noteStore.notes.findIndex(note=>note.id===noteId)
        noteStore.notes.splice(noteIndex,1,{id:noteId,text:text })
    }
    else{
         noteStore.notes.push({id:Date.now().toString(),text:text})
    }
    await AsyncStorage.setItem(STORE_KEY, JSON.stringify(noteStore));
};

export const deleteNote = async (noteId:string) =>{
    const noteStore = await getAllNotes();
    const noteIndex = noteStore.notes.findIndex(note=>note.id === noteId);

    noteStore.notes.splice(noteIndex,1);
    const newStore = JSON.stringify(noteStore);
    await AsyncStorage.setItem(STORE_KEY,newStore);
}