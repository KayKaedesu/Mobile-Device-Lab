import { StatusBar } from "expo-status-bar";
import { View, Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomePage, Programspage } from "./src/lab2";
import { LabTextInput } from "./src/lab3";
import { GuessANumber } from "./src/lab4";

const Stack = createNativeStackNavigator();

const MainPage = ({ navigation }) => {
  return (
    <View className="flex-1 flex-col justify-center items-center ">
      <Text className="text-red-500 text-bold">My Work</Text>
      <View className="flex-row gap-6">
        <View>
          <Button
            onPress={() => navigation.navigate("WelcomePage")}
            title="Lab 2"
          />
        </View>
        <View>
          <Button
            onPress={() => navigation.navigate("LabTextInput")}
            title="Lab 3"
          />
        </View>
        <View>
          <Button
            onPress={() => navigation.navigate("GuessANumber")}
            title="Lab 4"
          />
        </View>
      </View>
    </View>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainPage"
          options={{
            headerShown: false,
          }}
          component={MainPage}
        />
        <Stack.Screen
          name="WelcomePage"
          options={{
            headerShown: false,
          }}
          component={WelcomePage}
        />
        <Stack.Screen
          name="Programspage"
          options={{
            headerShown: false,
          }}
          component={Programspage}
        />
        <Stack.Screen
          name="LabTextInput"
          options={{
            headerShown: false,
          }}
          component={LabTextInput}
        />
        <Stack.Screen
          name="GuessANumber"
          options={{
            headerShown: false,
          }}
          component={GuessANumber}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
