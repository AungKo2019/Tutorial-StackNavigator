import React, { useState } from "react";
import { View,Text,StyleSheet,Button, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Home({navigation}){

    const [reviews,setReviews]=useState([
        {title:'AAAAA,11111', rating:5,body:'A5Body',key:'1'},
        {title:'BBBBB,22222', rating:4,body:'B5Body',key:'2'},
        {title:'CCCCC,33333', rating:3,body:'C5Body',key:'3'}
    ]);

    // const pressHandler=()=>{
    //     //navigation.navigate('ReviewDetail');
    //     navigation.push('ReviewDetail');
    // }

    return (
        <View style={styles.container}>
            {/* <Text>Home Screen</Text> */}
            {/* <Button title="go to Review Detail ..." onPress={pressHandler}/> */}
            <FlatList
                data={reviews} 
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetail',item)}>
                        <Text>{item.title} </Text>
                    </TouchableOpacity>
                )} 
            />
        </View>
    )
      
  
}

const styles=StyleSheet.create({
    container:{
        padding:20,
    },
})