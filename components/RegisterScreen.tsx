import React, { useState } from "react";
import { View, Button, Alert, StyleSheet } from "react-native";
import CustomInput from "./CustomInput";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRegister = () => {
    // 🔐 Şifre kontrolü
    if (password !== password2) {
      Alert.alert("Hata", "Şifreler uyuşmuyor!");
      return;
    }

    // ✅ Şifreler aynı → şimdilik sadece log atıyoruz
    console.log("Kayıt başarılı", { email, password });

    // İstersen başarılı kayıttan sonra Login'e döndür:
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
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
      <CustomInput
        placeholder="Şifre Tekrar"
        value={password2}
        onChangeText={setPassword2}
        secureTextEntry
      />

      <Button title="Kayıt Ol" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
});