
import React, { Component } from 'react';
import { StyleSheet, View, TextInput,Alert, Picker} from 'react-native';
import { AsyncStorage, YellowBox } from 'react-native';
import {  Button, Text } from "react-native";
import DatePicker from 'react-native-datepicker'

import { Font } from "expo";
export default class ButtonExample extends Component {
  constructor(props) {

    super(props)
    
    this.state = {
      desc:null,
      plate:null,
      year:null,
      progressVisible: false,

    }

  }
  
 componentDidMount(){
  console.log(new Date().getDate())

 }

  
  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>
           To Fast
             </Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.text}>Enter your name</Text>
          <TextInput style={styles.inputText}   placeholder="Your name"/>
          
      </View>
        
      <View style={styles.inputView}>
          <Text style={styles.text}>Enter your NU-ID</Text>
          <TextInput style={styles.inputText}   placeholder="K1d-XXXX"/>
          
      </View>
      
      <View style={styles.inputView}>
          <Text style={styles.text}>Select Gender</Text>
          
                    <Picker
                        // selectedValue={this.state.language}
                        style={{height: 50, width: 100}}
                        // onValueChange={(itemValue, itemIndex) =>
                        //     this.setState({language: itemValue})
            
                        // }
            >
            <Picker.Item label="Male" value="java" />
            <Picker.Item label="Female" value="js" />
            <Picker.Item label="Others" value="js" />
            
            </Picker>
      </View>
      
      <View style={styles.inputView}>
          <Text style={styles.text}>Enter your mobile number</Text>
          <TextInput style={styles.inputText} keyboardType='number-pad'   placeholder="03xx-xxxxxxx"/>
          
      </View>


        <View style={styles.buttonView}>
        <View style={styles.buttonView}>
        <Button dark style = {styles.btn} title="Next" /> 
          
        </View>

        </View>
  
      </View>
    );
  
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 40,
  },

  titleView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputView: {
    flex: 3,
    top: 0,
    left: 5,
    right: 5
  },

  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleText: {
    color: 'black',
    fontSize: 40,
    fontFamily: 'normal'
  },

  text: {
    fontFamily: 'normal',
    color: 'black',
    fontSize: 15
  },

  textBottom: {
    fontFamily: 'normal',
    color: 'black',
    fontSize: 15
  },

  inputText: {
    height: 36,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 14,
    borderWidth: 1,
   
    backgroundColor: 'white',
  },

  btn: {
    height: 50,
    width: 200,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});