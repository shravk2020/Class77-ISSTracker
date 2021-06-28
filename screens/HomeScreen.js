import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView, 
    SafeAreaView, 
    StatusBar, 
    Platform, 
    ImageBackground,
    Image} from 'react-native';




export default class HomeScreen extends Component{
  

 
  render(){
    return(
      <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}/>
      <ImageBackground source={require('../assets/bg_image.png')} style={styles.bgImage}>
      <Text style={styles.titleText}>ISS Tracker App</Text>

      <TouchableOpacity style={styles.buttons} onPress={()=>{
        this.props.navigation.navigate('ISSLocator')
      }}>
      <Image source={require('../assets/iss_icon.png')} style={styles.buttonImage}/>
      <Text style={styles.buttonText}>
      ISS Location
      </Text>
      <Text style={styles.knowMore}>
      Click To Know More -->
      </Text>
      <Text style={styles.buttonNumber}>
      1
      </Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.buttons} onPress={()=>{
        this.props.navigation.navigate('Meteors')
      }}>
      <Image source={require('../assets/meteor_icon.png')} style={styles.buttonImage}/>
      <Text style={styles.buttonText}>
      Meteors
      </Text>
      <Text style={styles.knowMore}>
      Click To Know More -->
      </Text>
      <Text style={styles.buttonNumber}>
      2
      </Text>
      </TouchableOpacity>
      </ImageBackground>
       
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   alignItems: 'center',
   justifyContent: 'center'
 },
 titleText:{
   fontSize:30,
   fontWeight:'bold',
   fontFamily:'timesnewroman',
   color:'white'
 },
 safeArea:{
marginTop: 
  Platform.OS==="android" ? StatusBar.currentHeight: 0
 },
 buttons:{
  flex:0.25,
   marginTop:40,
   backgroundColor:'white',
   borderRadius:20,
   alignItems:'center'
 }, 
 buttonText:{
 fontSize:25,
 fontWeight:'bold',
 fontFamily:'timesnewroman',
 marginTop:85
 },
 bgImage: {
   flex: 1,
   resizeMode: 'cover'
 },
 buttonImage : {
   height: 100,
   width: 100,
   position: 'absolute',
   resizeMode: 'contain'
 },
 knowMore: {
   color: 'red',
   fontSize: 10
 },
 buttonNumber: {
   fontSize: 100,
   position: 'absolute',
   marginLeft: 145,
   color: 'lightgray'
 }
})