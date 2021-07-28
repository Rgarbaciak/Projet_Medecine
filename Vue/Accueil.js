import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

class Accueil extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doseDer: "20/07/2021",
      doseProch: "05/08/2021",
      InrDer: "1,5",
      dose: "3",
    };
  }
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
            <Text style={{ fontSize: hp("4%") }}>Accueil</Text>
          </View>
        </View>

        <View
          style={{ alignItems: "center", width: wp("100%"), height: hp("10%") }}
        >
          <Text style={{ fontSize: hp("3%") }}>Bienvenue</Text>
        </View>
        <View style={styles.info}>
          <Text style={{ fontSize: hp("2%") }}>
            Dose du jour : {this.state.dose}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={{ fontSize: hp("2%") }}>
            Prochain test INR : {this.state.doseProch}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={{ fontSize: hp("2%") }}>
            Mon INR est de: {this.state.InrDer}
          </Text>
          <Text style={{ fontSize: hp("2%") }}>
             Datant du :{this.state.doseDer}
          </Text>
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
  info: {
    marginLeft:wp("20%"),
    marginRight:wp("20%"),
    marginBottom:wp("5%"),
    width:wp("60%"),

    borderWidth: 2,
  },
});
export default Accueil;
