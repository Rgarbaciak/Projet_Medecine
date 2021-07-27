import "react-native-gesture-handler";
import React from "react";

import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import Accueil from "../Vue/Accueil";
import Infos from "../Vue/Infos";
import Inr from "../Vue/Inr";
import Doses from "../Vue/Doses";

export default function MenuNavigation() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerStyle={
        (isLargeScreen ? null : { width: "100%" },
        {
          backgroundColor: "#5A8DF9",
        })
      }
      drawerContentOptions={{
        activeTintColor: "#033399",
      }}
    >
      <Drawer.Screen name="Accueil" component={Accueil} />
      <Drawer.Screen name="Doses" component={Doses} />
      <Drawer.Screen name="Inr" component={Inr} />
      <Drawer.Screen name="Infos" component={Infos} />
    </Drawer.Navigator>
  );
}
