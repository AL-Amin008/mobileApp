import React from "react";

import { View,Text, Button , StyleSheet } from "react-native";


const CounterPage = ()=>{
    let counter = 0;
    const increaseHandler =()=>{
        counter = counter +1;
    }
    const decreaseHandler = ()=>{
        counter = counter-1;
    }
    return(
        <View style={style.mainContainer}>
            <Text style= {style.counterContainer}>{counter}</Text>
            <View style ={style.buttonContainer}>
                <Button title="Increase" onPress={increaseHandler}></Button>
                <Button title="Decrease" onPress={decreaseHandler}></Button>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    counterContainer:{
        fontSize:80,
        fontWeight:"700",
        color:"red"
    },
    buttonContainer:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-between'
    }

})
export default CounterPage;
