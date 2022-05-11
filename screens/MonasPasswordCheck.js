import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Alert,
  Pressable,
  Text,
  TextInput,
} from "react-native";
import UILogo from "../components/UILogo";
import colors from "../constants/colors";
import Input from "../components/Input";
import * as content from "../constants/texts";
import AddButton from "../components/AddButton";
import {storeMyStringStuff, getMyStringStuff, getMyObjectStuff, removeMyStuff,getAllKeys} from "../database/CreateDatabase";


/**
 *  ChoosePwScreen for Starters!
 *  takes the UILogo & Input Component.
 *
 *
 * ToDo: Navigation Bar
 * may find another solution for the marked Dates, it's just a dummy rn
 * also find a way to get the input outta it but that's prob. a diff issue
 *
 * @param {} props
 * @returns
 */
const passwordScreenCheck = async (password, givenPassword) => {
  if (password == givenPassword) {
    //Hier weiterleitung einfügen, ich hab doch keine Ahnung von Navigation help
    {
      Alert.alert(
        "Richtig! Jetzt solltest du eigentlich weitergeleitet werden"
      );
    }
  } else {
    {
      Alert.alert("Passwort ungültig");
    }
  }
};

const MonasPasswordCheck = (props) => {
  //storeMyStuff("passwordKey", 1234); //Das hier muss raus sobald es wirklich ein altes Passwort gibt

  const [givenPassword, setGivenPassword] = useState();
  const [oldPassword, setOldPassword] = useState();
  
  const [databaseNumber, setDatabaseNumber] = useState("");

  const [text3, setText3] = useState("");

  //getMyStuff("passwordKey").then((returnedValue) => {
    //setOldPassword(JSON.parse(returnedValue));
  //});

  const getPWfromDBHandler = async() => {
    await getMyStringStuff('@password').then((value)=>{
      console.log("first"+value);
      setDatabaseNumber(value);
    });
    
   
  };

  return (
    <View style={styles.imageBox}>
      <View>
        <UILogo src="gear" />
        <View style={styles.title}>
          <Text style={styles.text2}>{content.checkPasswordText}</Text>
        </View>
        <Input title="Passwort" />
        <TextInput
          style={{ height: 60 }}
          placeholder="Passwort"
          onChangeText={(text) => setGivenPassword(text)}
          defaultValue={text3}
        />
      </View>
      <View style={styles.textBox}>
             <Text style={styles.text2}>{databaseNumber}</Text>
          </View>

      <View style={styles.button}>
        <Pressable
          style={styles.button1}
          onPress={getPWfromDBHandler}
        >
          <Text style={styles.text}>{props.title}</Text>
        </Pressable>
      </View>
    </View>
  );
};
//quick reminder: Button gehört zum Navigation Component. Touchable Opacity wär noch cool.
//https://www.skptricks.com/2018/11/react-native-responsive-image-scale-to-fit-example.html
//Der button hat irgendwann seine default width vergessen wtf..

const styles = StyleSheet.create({
  imageBox: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 60,
    paddingVertical: 80,
    justifyContent: "space-between",
  },
  title: {
    color: colors.mainG,
    marginTop: 40,
    fontSize: 32,
    lineHeight: 36,
  },
  button: {
    elevation: 5,
    alignItems: "center",
  },
  text: {
    color: colors.mainLG,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },

  text2: {
    color: colors.mainG,
    fontSize: 20,
  },

  button1: {
    borderRadius: 8,
    height: 40,
    width: 80,
    elevation: 3,
    backgroundColor: colors.accBlue,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MonasPasswordCheck;
