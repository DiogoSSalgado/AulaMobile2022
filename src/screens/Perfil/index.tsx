import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";

export default function Perfil() {
  return (
    <View>
      <ImageBackground source={require("../../../assets/fundo.png")}>
        <Image source={require("../../../assets/default-avatar.png")} />
        <Text>Diogo</Text>
      </ImageBackground>
    </View>
  );
}