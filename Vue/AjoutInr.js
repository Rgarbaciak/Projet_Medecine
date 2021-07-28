import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

class Doses extends React.Component {
  _Menu() {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#5A8DF9",
          }}
        >
          <Icon
            name="menu"
            size={(wp("12%"), hp("6%"))}
            onPress={() => {
              this._Menu();
            }}
          />
          <View style={{ alignItems: "center", width: wp("78%") }}>
            <Text style={{ fontSize: hp("4%") }}>Ajout d'un Inr</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
export default Doses;
