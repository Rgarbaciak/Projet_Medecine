import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MenuNavigation from "./Navigation/MenuNavi";
import { StatusBar, Text } from "react-native";
export default function App() {
  return (
    
    <NavigationContainer>
      <StatusBar barStyle = "auto" hidden = {false}  translucent = {false}/>
  <MenuNavigation/>
    </NavigationContainer>
  );
}
