import React from "react";
import { View, StyleSheet,Text,Dimensions } from "react-native";
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
            width:wp('100%'),
            
            
          }}
        >
          <Icon
            name="menu"
            size={wp('10%'),hp('7%')}
            onPress={() => {
              this._Menu();
            }}
            
          />
         <View style={{alignItems:'center',width:wp('75%')}}>
            <Text style={{ fontSize: hp("5%") }}>Doses</Text>
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
