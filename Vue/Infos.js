import React from "react";
import { View, StyleSheet, Text, Dimensions, Switch } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Divider } from "react-native-elements";

class Infos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
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
            <Text style={{ fontSize: hp("4%") }}>Informations</Text>
          </View>
        </View>
        <View style={styles.divider}>
          <Divider
            orientation="horizontal"
            width={5}
            style={{ borderBottomColor: "#5A8DF9", borderRadius: 50 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: wp("5%"),
            marginRight: wp("5%"),
            marginTop: wp("1%"),
          }}
        >
          <Text style={{ fontSize: hp("3%") }}>
            Recevoir les notifications :
          </Text>

          <Switch
            style={{ width: wp("20%"), height: hp("5%") }}
            trackColor={{ false: "grey", true: "#5A8DF9" }}
            thumbColor={this.state.value ? "#5A8DF9" : "#B4BCCC"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(value) => {
              this.setState({ value: value });
            }}
            value={this.state.value}
          />
        </View>
        <View style={styles.divider}>
          <Divider
            orientation="horizontal"
            width={5}
            style={{ borderBottomColor: "#5A8DF9", borderRadius: 50 }}
          />
        </View>
        <View style={styles.informations}>
          <Text style={{ fontSize: hp("3") }}>Type de medicament :</Text>
          <Text style={{ fontSize: hp("3") }}>Previscan</Text>
        </View>
        <View style={styles.informations}>
          <Text style={{ fontSize: hp("3%") }}>Intervalle INR optimal :</Text>

          <Text style={{ fontSize: hp("3%") }}>
            La valeur INR idéal est comprise entre 2 et 3,5.
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
  divider: {
    marginTop: wp("4%"),
    marginLeft: wp("2%"),
    marginRight: wp("2%"),
    marginBottom: wp("2%"),
  },
  informations: {
    marginBottom: wp("5%"),
    flexDirection: "column",
    marginLeft: wp("5%"),
    marginRight: wp("5%"),
    marginTop: wp("1%"),
  },
});
export default Infos;
