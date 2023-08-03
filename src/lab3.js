import { useState } from "react";
import { View, Button, Text, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { FlatList } from "react-native";

export const LabTextInput = ({ navigation }) => {
  const [text, setText] = useState("");
  const [arrayText, setArrayText] = useState([]);
  const [id, setId] = useState(0);
  const handleSubmit = () => {
    setArrayText([...arrayText, { id: id, name: text }]);
    setText("");
    setId(id + 1);
  };
  return (
    <SafeAreaView className="flex-1 p-8">
      <Text className="text-red-500">สมุดบันทึก</Text>
      <TextInput
        className="h-10 m-3 border p-3"
        placeholder="Write something here..."
        value={text}
        onChangeText={(input) => {
          setText(input);
        }}
      />
      <View className="m-2">
        <Button onPress={handleSubmit} title="บันทึก"></Button>
      </View>
      <View className="m-2">
        <Button
          onPress={() => navigation.navigate("MainPage")}
          title="Go Back"
        />
      </View>
      <FlatList
        data={arrayText}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View key={item.id}>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
      {/* {arrayText.map((element, index) => {
        return (
          <View key={index}>
            <Text>{element}</Text>
          </View>
        );
      })} */}
    </SafeAreaView>
  );
};
