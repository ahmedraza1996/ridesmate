
import React, { Component } from 'react';
import { StyleSheet, View, TextInput,Alert} from 'react-native';
import { AsyncStorage, YellowBox } from 'react-native';
import {  Button, Text, Picker } from "react-native";
import DatePicker from 'react-native-datepicker'

//import { SetDriverRequest } from '../../API';
//import { ProgressDialog } from 'react-native-simple-dialogs';
//import RNFetchBlob from 'rn-fetch-blob';
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
          <Text style={styles.text}>Select Date of Pick</Text>
          <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date of pickup"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
       
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        androidMode="spinner"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>

        <View style={styles.buttonView}>
        <View style={styles.buttonView}>
        <Button dark style = {styles.btn} title="Register" /> 
          
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