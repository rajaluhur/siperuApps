import React from 'react';
import { View, Dimensions, TextInput, StyleSheet, Text } from 'react-native';
import Font from '../assets/fonts/font';
const CustomInput = ({ value, setValue, placeholder, keyboardType, title }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  return (
      <View>
        <Text style={{color:'white', fontFamily:Font.font.bold, fontSize:15}}>{title}</Text>
        <View style={[styles.container, {width:windowWidth*0.8, borderRadius:windowWidth*0.1}]}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                placeholderTextColor="#D9D9D9" // Apply custom color to the placeholder text
                style={styles.input}
                keyboardType={keyboardType}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#FFD911',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginBottom: 10,
  },
  input: {
    color: 'white', // Customize the input text color
    fontSize: 12, // Customize the input font size
    paddingVertical: 8, // Customize the vertical padding of the input
    fontFamily: Font.font.regular
  },
});

export default CustomInput;