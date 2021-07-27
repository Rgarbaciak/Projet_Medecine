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
            size={(wp("10%"), hp("7%"))}
            onPress={() => {
              this._Menu();
            }}
          />
          <View style={{ alignItems: "center", width: wp("75%") }}>
            <Text style={{ fontSize: hp("5%") }}>Accueil</Text>
          </View>
        </View>

        <View
          style={{ alignItems: "center", width: wp("95%"), height: hp("10%") }}
        >
          <Text style={{ fontSize: hp("4%") }}>Bienvenue</Text>
        </View>
        <View style={styles.info}>
          <Text style={{ fontSize: hp("2%") }}>
            Votre derniere dose date du : {this.state.doseDer}{" "}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={{ fontSize: hp("2%") }}>
            Votre prochaine dose est le : {this.state.doseProch}{" "}
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
    marginTop: 10,
    marginBottom: 30,
    borderWidth: 2,
    marginRight: 50,
  },
});
export default Accueil;
