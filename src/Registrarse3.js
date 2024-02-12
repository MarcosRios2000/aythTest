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
  <View style={styles.aythregistrars7k8bmt}>
    <LinearGradient style={styles.aythregistrarsvqscid}
    locations={[0,0.13,0.37,0.64,0.88,1]}
    start={[-0.32556815445715664,-0.9455185755993168]}
    end={[0.32556815445715676,0.9455185755993167]}
    colors={["#f25910","#f6b99c","#ffffff","#fef8f5","#652794","#40036f"]} >
      <View style={styles.aythFrame15477rgk9jd}>
        <View style={styles.aythFrame15477xmyrb}>
        <Image style={styles.aythCaptura_dezxgadf} source={{uri: 'https://2a2b4e20-0ae7-4d18-ae3c-ab385edfc641.s3.fr-par.scw.cloud/figma/Captura_de_pantalla_202311.png'}}
        />
        <Text style={styles.aythENCUENTRATeih7yn}>
        {"ENCUENTRA TU PRUEBA"}
        </Text>
      </View>
      <View style={styles.aythFrame15477d1nzh}>
        <View style={styles.aythFrame154776ne3sd}>
          <Text style={styles.aythNombredeusk2obrm}>
          {"Nombre de usuario"}
          </Text>
        </View>
        <View style={styles.aythFrame15477enam2}>
          <Text style={styles.aythEmaill6ldj}>
          {"Email"}
          </Text>
        </View>
        <View style={styles.aythFrame15477rj5p47}>
          <Text style={styles.aythContraseaefppwk}>
          {"Contraseña"}
          </Text>
        </View>
        <View style={styles.aythFrame15477dptanc}>
          <Text style={styles.aythRegistrars10wrfp}>
          {"Registrarse"}
          </Text>
        </View>
        <Text style={styles.aythHasolvidad8gjru}>
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