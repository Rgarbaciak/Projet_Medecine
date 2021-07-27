import React from "react";
import { View, StyleSheet,Text,Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class Infos extends React.Component {
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
            size={45}
            onPress={() => {
              this._Menu();
            }}
          />
          <View width={Dimensions.get('window').width / 2} style={{alignItems:"center"}}>
            <Text style={{ fontSize: 30 }}>Informations</Text>
          </View>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 25,
    flex: 1,
  },
});
export default Infos;
