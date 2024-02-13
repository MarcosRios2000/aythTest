import { StatusBar } from 'expo-status-bar';
import { style } from './registrarse3Style';
import { StyleSheet } from 'react-native';
import { View } from "react-native";
import { Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; 

export default function Registrarse3() {
  
  return (
  <View style={styles.aythregistrarsslwxg}>
    <LinearGradient style={styles.aythregistrarsucuyru}
    locations={[0,0.13,0.37,0.64,0.88,1]}
    start={[-0.32556815445715664,-0.9455185755993168]}
    end={[0.32556815445715676,0.9455185755993167]}
    colors={["#f25910","#f6b99c","#ffffff","#fef8f5","#652794","#40036f"]} >
      <View style={styles.aythFrame15477v3lo7f}>
        <View style={styles.aythFrame15477jmb1l}>
        <Image style={styles.aythCaptura_dez40asf} source={{uri: 'https://2a2b4e20-0ae7-4d18-ae3c-ab385edfc641.s3.fr-par.scw.cloud/figma/Captura_de_pantalla_202311.png'}}
        />
        <Text style={styles.aythENCUENTRATmylsvp}>
        {"ENCUENTRA TU PRUEBA"}
        </Text>
      </View>
      <View style={styles.aythFrame15477bnwnau}>
        <View style={styles.aythFrame154776or5l9}>
          <Text style={styles.aythNombredeusd0wbls}>
          {"Nombre de usuario"}
          </Text>
        </View>
        <View style={styles.aythFrame15477xlbw4k}>
          <Text style={styles.aythEmail96g10t}>
          {"Email"}
          </Text>
        </View>
        <View style={styles.aythFrame15477mfbd8s}>
          <Text style={styles.aythContrasea2jg99h}>
          {"Contraseña"}
          </Text>
        </View>
        <View style={styles.aythFrame15477n3abfg}>
          <Text style={styles.aythRegistrarskpxkyf}>
          {"Registrarse"}
          </Text>
        </View>
        <Text style={styles.aythHasolvidadzphzzb}>
        {"¿Has olvidado tu contraseña?"}
        </Text>
      </View>
    </View>
  </LinearGradient>
  <StatusBar style="auto"
  />
</View>

  );
};
const styles = StyleSheet.create(style);