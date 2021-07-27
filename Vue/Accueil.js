import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

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
            size={45}
            onPress={() => {
              this._Menu();
            }}
          />
          <View  width={Dimensions.get('window').width / 3}
          >
            <Text style={{ fontSize: 30 }}>Accueil</Text>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: 10, marginBottom: 30 }}>
          <Text style={{ fontSize: 20 }}>Bienvenue</Text>
        </View>
        <View style={styles.info}>
          <Text style={{ fontSize: 14 }}>
            Votre derniere dose date du : {this.state.doseDer}{" "}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={{ fontSize: 14 }}>
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
    marginTop: 25,
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
