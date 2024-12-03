import { Button, StyleSheet } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditNoteScreen } from "./screens/EditNoteScreen";
import { RootStackParamList } from "./types";
import { NewNoteButton } from "./components/NewNoteButton";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
              headerTitle: "All notes",
              headerRight: () => <NewNoteButton />
            }}
        />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "#ffb70342",
    height: "20%",
    width: "100%",
    fontSize: 16,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 30,
  },
});
