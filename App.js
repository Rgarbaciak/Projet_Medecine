import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MenuNavigation from "./Navigation/MenuNavi";
import { StatusBar, Text } from "react-native";
export default function App() {
  return (
    
    <NavigationContainer>
      <StatusBar barStyle = "auto" hidden = {false}  translucent = {true}/>
  <MenuNavigation/>
  <Text style={{ fontSize: 20 }}>Bienvenue</Text>
  <Text style={{ fontSize: 20 }}>Bienvenue</Text>
  <Text style={{ fontSize: 20 }}>Bienvenue</Text>
  v
  v
  v
  v<Text style={{ fontSize: 20 }}>Bienvenue</Text>
  
    </NavigationContainer>
  );
}
