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
  <View style={styles.aythregistrarsudgcif}>
    <LinearGradient style={styles.aythregistrarsmp14cm}
    locations={[0,0.13,0.37,0.64,0.88,1]}
    start={[-0.32556815445715664,-0.9455185755993168]}
    end={[0.32556815445715676,0.9455185755993167]}
    colors={["#f25910","#f6b99c","#ffffff","#fef8f5","#652794","#40036f"]} >
      <View style={styles.aythFrame15477r954uq}>
        <View style={styles.aythFrame15477cyuzrb}>
        <Image style={styles.aythCaptura_dejov578} source={{uri: 'https://2a2b4e20-0ae7-4d18-ae3c-ab385edfc641.s3.fr-par.scw.cloud/figma/Captura_de_pantalla_202311.png'}}
        />
        <Text style={styles.aythENCUENTRATn0qvob}>
        {"ENCUENTRA TU PRUEBA"}
        </Text>
      </View>
      <View style={styles.aythFrame15477pnjgf}>
        <View style={styles.aythFrame15477neara}>
          <Text style={styles.aythNombredeuss387gg}>
          {"Nombre de usuario"}
          </Text>
        </View>
        <View style={styles.aythFrame154777rjoto}>
          <Text style={styles.aythEmails9g4}>
          {"Email"}
          </Text>
        </View>
        <View style={styles.aythFrame15477mgkfe}>
          <Text style={styles.aythContraseaaj7a1f}>
          {"Contraseña"}
          </Text>
        </View>
        <View style={styles.aythFrame15477i5nwad}>
          <Text style={styles.aythRegistrarspgucmk}>
          {"Registrarse"}
          </Text>
        </View>
        <Text style={styles.aythHasolvidadnp7jhlm}>
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