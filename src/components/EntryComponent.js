import React from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import Eth from "react-native-vector-icons/MaterialCommunityIcons"
import colors from '../assets/colors';

const { width, height } = Dimensions.get('window');

const EntryComponent = ({ ...props }) => {


  const renderIcon = () => {
    let name = ''
    switch (props.text) {
      case 'TRY':
        name = 'try'
        break;
      case 'USD':
        name = 'usd'
        break;
      case 'EUR':
        name = 'euro'
        break;
      case 'BTC':
        name = 'btc'
        break;
      case 'DOGE':
        name = 'viacoin'
        break;
    }
    return (
      <View style={styles.iconContainer}>
        {props.text === 'ETH' ?
          <Eth
            name={'ethereum'}
            color={colors.dark}
            size={width * 0.048}
          /> :
          <Icon
            name={name}
            color={colors.dark}
            size={width * 0.048}
          />
        }
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onButtonPress}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
      {
        props.type === 'base' ?
          <TextInput style={styles.input}
            keyboardType={'numeric'}
            placeholder={'0'}
            value={props.value}
            onChangeText={props.onChangeText}
          /> :
          <Text style={styles.input}>{props.resultVal}</Text>
      }
      {renderIcon()}
    </View>
  );
};

export default EntryComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: width * 0.024,
    marginHorizontal: 0.1 * width,
    flexDirection: "row",
    borderRadius: width * 0.024
  },
  button: {
    width: width * 0.16,
    borderRightColor: "#858c97",
    borderRightWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: width * 0.041,
    color: colors.dark,
    fontWeight: "bold"
  },
  input: {
    flex: 1,
    padding: width * 0.024,
    fontSize: 17,
    color: "#6c7480"
  },
  iconContainer: {
    width: width*0.07,
    justifyContent: 'center',
  }
});



