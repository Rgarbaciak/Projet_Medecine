import React from "react";
import { View, StyleSheet,Text,Dimensions,StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class Doses extends React.Component {
  _Menu() {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
              <StatusBar barStyle = "auto" hidden = {false}  translucent = {false}/>

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
          <View width={Dimensions.get('window').width / 3}>
            <Text style={{ fontSize: 30 }}>Doses</Text>
          </View>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
export default Doses;
