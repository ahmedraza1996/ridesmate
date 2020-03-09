import React from 'react';
import { StyleSheet, Text, View, TextInput , TouchableOpacity, Picker} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default class App extends React.Component {
  state={
    Gender:" "
  }
  constructor(props){
    super(props);
  }
  render() {
    return (
      
      <LinearGradient
      colors={['#03396c', 'white']}
        style={{flex: 1}}
      >
       <View style={styles.container}>
         <View style={styles.elementframetop}>
         <Text style={styles.headText}>Rides Mate</Text>
          
         </View>
          <View style={styles.elementFrame}>
              <View style={styles.formheader} >
                  <Text style={styles.formheading}>Personal Info</Text>
              </View>
              <View  style={[{padding: 10},styles.formbody]}>
                  <View >
                    <Text style={{fontSize:16, fontWeight:'bold', color: "#4c4c4c"}}>Full Name</Text>
                    <TextInput placeholder="Enter full name"  style={{ borderBottomColor: '#646464', borderBottomWidth: 2,height:50 }}></TextInput>
                  </View>
                  <View style={{marginTop: 20}}>
                    <Text style={{fontSize:16, fontWeight:'bold', color: "#4c4c4c"}}>Username</Text>
                    <TextInput placeholder="Enter username" style={{ borderBottomColor: '#646464', borderBottomWidth: 2,height:50 }}></TextInput>
                  </View>
                  <View style={{marginTop: 20}}>
                    <Text style={{fontSize:16, fontWeight:'bold', color: "#4c4c4c"}}>Mobile number</Text>
                    <TextInput placeholder="03xx-xxxxxxx" style={{ borderBottomColor: '#646464', borderBottomWidth: 2,height:50 }}></TextInput>
                  </View>
                  <View style={{flexDirection:'row',marginTop: 10}}>
                  <Text style={{marginTop:18,flex: 1,fontSize:16, fontWeight:'bold', color: "#4c4c4c"}}>Gender</Text>
                    
                      <Picker
                     // selectedValue={this.state.language}
                      style={{ flex:2, left:"15%",height: 60, width: 200}}
                      // onValueChange={(itemValue, itemIndex) =>
                      //   this.setState({language: itemValue})}
                       >
                      <Picker.Item label="Select an option" value="" />
                      <Picker.Item label="Male" value="Male" />
                      <Picker.Item label="Female" value="Female" />
                      <Picker.Item label="Other" value="Other" />
                      
                    </Picker>
                    </View>
                  
                  <View style={{marginTop: 30, alignItems:'center'}}>
                                  <TouchableOpacity
                        style={styles.button}
                       // onPress={this.onPress}
                      >
                          <Text style={{color: 'white'}}> Submit </Text>
                     </TouchableOpacity>
                   
                     
                  </View>
              </View>
             
              
          </View>
        
       </View>

      </LinearGradient>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
 
    flex: 1,
    
  },
  headText:{
    fontSize: 56,
    position: 'absolute',
    alignContent: 'center',
    alignItems: 'center',
    left: '5%',  
    top: '5%',   //status bar height
    color: 'white',
    fontWeight: 'bold',
    flex: 1
  },
  elementframetop: {
    flex: 1,
  },
  elementFrame: {
    flex: 2,
    backgroundColor:"white",
    borderRadius: 40,
    padding: 15,
  },
  formheader: {
    flex: 1,
    

  },
  formbody: {
    flex: 5,
    // backgroundColor: "green"
    
  }, 
  formheading: {
    fontSize: 32,
    left: '5%',
    top: '5%',
    color: '#646464',
    fontWeight: 'bold'
  },
  textLabel:{

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#005b96',
    padding: 10, 
    width: 300,
    color:'white', 
    borderRadius: 20

  },
});