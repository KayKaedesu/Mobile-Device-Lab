import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export const Programspage = ({ navigation }) => {
  const curriculum = [
    {
      name: "Information Technology",
      picture: require("../assets/course-bach-it.jpg"),
    },
    {
      name: "Data Science and Business Analytics",
      picture: require("../assets/course-bach-dsba.jpg"),
    },
    {
      name: "Business Information Technology \n (International Program)",
      picture: require("../assets/course-bach-bit.jpg"),
    },
    {
      name: "Artificial Intelligence Tecnology",
      picture: require("../assets/course-bach-ait.jpg"),
    },
  ];
  return (
    <SafeAreaView style={Programspage_style.container}>
      <View style={Programspage_style.header}>
        <Image
          style={{ width: 48, height: 48, resizeMode: "contain" }}
          source={require("../assets/IT_Logo.png")}
        />
        <Text style={{ fontSize: 28, color: "blue" }}>Programs</Text>
      </View>
      <FlatList
        data={curriculum}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View>
              <Image
                style={{ width: "100%", height: 240 }}
                source={item.picture}
              />
              <TouchableOpacity>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
      <Button
        title="Go back"
        onPress={() => navigation.navigate("WelcomePage")}
      />
      {/* <Image
              style={{ width: "100%", height: 240 }}
              source={require("../assets/course-bach-it.jpg")}
            />
            <TouchableOpacity>
              <Text>Information Technology</Text>
            </TouchableOpacity>
            <Image
              style={{ width: "100%", height: 240 }}
              source={require("../assets/course-bach-dsba.jpg")}
            />
            <TouchableOpacity>
              <Text>Data Science and Business Analytics</Text>
            </TouchableOpacity>
            <Image
              style={{ width: "100%", height: 240 }}
              source={require("../assets/course-bach-bit.jpg")}
            />
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Text>Business Information Technology</Text>
              <Text>(International Program)</Text>
            </TouchableOpacity>
            <Image
              style={{ width: "100%", height: 240 }}
              source={require("../assets/course-bach-ait.jpg")}
            />
            <TouchableOpacity>
              <Text>Artificial Intelligence Tecnology</Text>
            </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export const WelcomePage = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={{ width: 128, height: 128, resizeMode: "center" }}
          source={require("../assets/IT_Logo.png")}
        />
        <Text style={styles.text_lg}>คณะเทคโนโลยีสารสนเทศ</Text>
        <Text>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
      </View>
      <View style={styles.buttonbox}>
        <Button
          style={{ height: 168 }}
          onPress={() => navigation.navigate("Programspage")}
          title="Programs"
        />
        <Button style={{ height: 168 }} title="About us" />
        <Button
          style={{ height: 168 }}
          onPress={() => navigation.navigate("MainPage")}
          title="Go Back"
        />
        <StatusBar style="auto" />
      </View>
    </>
  );
};

// export const Week_2 = () => {
//   <SafeAreaView>
//     <Stack.Screen
//       name="WelcomePage"
//       options={{
//         headerShown: false,
//       }}
//       component={WelcomePage}
//     />
//     <Stack.Screen
//       name="Programspage"
//       options={{
//         headerShown: false,
//       }}
//       component={Programspage}
//     />
//     ;
//   </SafeAreaView>;
// };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textbox: {},
  text_lg: {
    fontSize: 20,
  },
  buttonbox: {
    gap: 12,
    margin: 12,
  },
});
const Programspage_style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 12,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#00bfff",
  },
  body: {
    gap: 12,
    backgroundColor: "lightgrey",
    alignItems: "center",
    width: "100%",
  },
});
