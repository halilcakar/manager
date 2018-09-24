// info-1: import libraries for making a component
import React from 'react';
import { View, Text, TextInput } from 'react-native';

// info-2: Make a component
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { containerStyle, inputStyle, labelStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 2,
    color: '#000',
    fontSize: 18,
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 23
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  }
};

// info-3: Make the component available to other parts of the app
export { Input };