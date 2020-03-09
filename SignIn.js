import React from 'react';
import { StyleSheet, Text, View, TextInput , TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default class App extends React.Component {
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
                  <Text style={styles.formheading}>Sign In</Text>
              </View>
              <View  style={[{padding: 10},styles.formbody]}>
                  <View >
                    <Text style={{fontSize:16, fontWeight:'bold', color: "#4c4c4c"}}>Email</Text>
                    <TextInput placeholder="Enter your email" style={{ borderBottomColor: '#646464', borderBottomWidth: 2,height:50 }}></TextInput>
                  </View>
                  <View style={{marginTop: 20}}>
                    <Text style={{fontSize:16, fontWeight:'bold', color: "#4c4c4c"}}>Password</Text>
                    <TextInput placeholder="Enter your password" style={{ borderBottomColor: '#646464', borderBottomWidth: 2,height:50 }}></TextInput>
                  </View>
                  <View style={{marginTop: 20}}>
                    <TouchableOpacity>
                  <Text style={{fontSize:16, fontWeight:'bold', color: "#4c4c4c"}}>Forgot password?</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={{marginTop: 50, alignItems:'center'}}>
                                  <TouchableOpacity
                        style={styles.button}
                       // onPress={this.onPress}
                      >
                          <Text style={{color: 'white'}}> Sign in </Text>
                     </TouchableOpacity>
                     <View style={{flexDirection:'row', marginTop: 10}}>
                     <Text>Don't have an account?</Text> 
                     <TouchableOpacity
                        
                       
                      >
                          <Text style={{fontWeight:'bold',color:'#005b96'}}> Sign Up </Text>
                     </TouchableOpacity>
                     </View>
                     
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
    flex: 4,
    backgroundColor:"white",
    borderRadius: 40,
    padding: 15,
  },
  formheader: {
    flex: 1,
    

  },
  formbody: {
    flex: 4,
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