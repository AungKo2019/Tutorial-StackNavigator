import React from "react";
import { View,Text,StyleSheet,Button } from "react-native";

export default function ReviewDetail({navigation}){

    const pressHandler=()=>{
        navigation.goBack();
    }

    return (
        <View>
          
            
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('key')}</Text>

            <Button title="back to Home screen ..." onPress={()=>navigation.goBack()}/>
        </View>
    )
      
  
}