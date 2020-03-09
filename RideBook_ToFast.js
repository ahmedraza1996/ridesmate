import React from 'react';
import { StyleSheet, Text, View, TextInput , TouchableOpacity, Picker, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DatePicker from 'react-native-datepicker';


export default class App extends React.Component {
  state={
    Gender:" "
  }
  constructor(props){
    super(props);
  }
  render() {
    return (
      
     <View style={styles.container}> 
          <View style={styles.headContainer} >
            <Text style={styles.formheading}>Book a ride</Text>
          </View>
          <View style={styles.bodyContainer} >
                <View style={{flexDirection:'row' }}>
                  <View style={{flex:1, alignContent:"center"}}>
                    <Image source={require('./assets/droppin.png')}  style={{height:40,width:40}}>
                        </Image>
                  </View>
                  
                  <View style={{flexDirection:'column', flex: 7,  marginLeft:"2%"}}  >
                      <Text style={{fontSize:20, fontWeight:'bold', color: "#4c4c4c"}}>Pickup</Text>
                      <TouchableOpacity>
                        <Text  style={{ marginTop:"2%", borderBottomColor: '#646464', borderBottomWidth: 2,height:40 , fontSize:18 }}>Select Pickup</Text>
                      </TouchableOpacity>
                    
                    </View>
                </View>
                <View style={{flexDirection:'row' , marginTop:"5%"}}>
                  <View style={{flex:1, alignContent:"center"}}>
                    <Image source={require('./assets/building.jpg')}  style={{height:40,width:40}}>
                        </Image>
                  </View>
                  
                  <View style={{flexDirection:'column', flex: 7, marginLeft:"2%"}}  >
                      <Text style={{fontSize:20, fontWeight:'bold', color: "#4c4c4c"}}>Where to?</Text>
                     
                        <Text  style={{ marginTop:"2%", borderBottomColor: '#646464', borderBottomWidth: 2,height:40 , fontSize:18 , color:"#646464"}}>FAST-main campus</Text>
                     
                    
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop: 10}}>
                  <Text style={{marginTop:16,flex: 1,fontSize:20, fontWeight:'bold', color: "#4c4c4c"}}>When</Text>
                    
                      <Picker
                     // selectedValue={this.state.language}
                      style={{ flex:2, left:"15%",height: 60, width: 200, fontSize:18}}
                      // onValueChange={(itemValue, itemIndex) =>
                      //   this.setState({language: itemValue})}
                       >
                      <Picker.Item label="Select pickup day" value="" />
                      <Picker.Item label="Today" value="Today" />
                      <Picker.Item label="Tomorrow" value="Tomorrow" />
                      

                    </Picker>
                    </View>
                <View style={{flexDirection:'row',marginTop: 10}}>
                  <Text style={{marginTop:16,flex: 1,fontSize:20, fontWeight:'bold', color: "#4c4c4c"}}>Time</Text>
                    
                      <Picker
                     // selectedValue={this.state.language}
                      style={{ flex:2, left:"15%",height: 60, width: 200, fontSize:18}}
                      // onValueChange={(itemValue, itemIndex) =>
                      //   this.setState({language: itemValue})}
                       >
                      <Picker.Item label="Select pickup time" value="" />
                      <Picker.Item label="8:00 AM - 8:30 AM" value="Male" />
                      <Picker.Item label="8:30 AM - 9:00 AM" value="Female" />
                      <Picker.Item label="9:00 AM - 9:30 AM" value="Other" />
                      

                    </Picker>
                    </View>
                    
                   
                   
                   
                         {/* <View style={{marginTop:"10%", alignItems:""}}>
       
       <TouchableOpacity
                         style={styles.button}
                        // onPress={this.onPress}
                       >
                           <Text style={{color: 'white'}}> Rquest a ride </Text>
                      </TouchableOpacity>
              
      </View> */}
          </View>
    
     </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,

  },
  headContainer: {
    flex: 1,
  },
  bodyContainer:{
    flex: 5,
   // backgroundColor: "green",
    margin:"5%",
    padding: "5%"
  },
  formheading: {
    fontSize: 32,
    left: '5%',
    top: '5%',
    color: '#646464',
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#005b96',
    padding: 10, 
    width: "80%",
    color:'white', 
    borderRadius: 20

  },
});