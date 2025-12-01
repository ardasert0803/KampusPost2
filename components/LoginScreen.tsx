import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CustomInput from "./CustomInput";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KampusPost</Text>

      <CustomInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Giriş Yap" onPress={() => navigation.navigate("Home")} />
      <View style={{ height: 10 }} />
      <Button
        title="Kayıt Ol"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
});
