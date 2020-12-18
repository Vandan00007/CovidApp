import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput,

    TouchableOpacity,
} from 'react-native';

import{
    Actions,

}from 'react-native-router-flux';


class Home extends React.Component {
    state={
        name=''
    };
    render(){
        return(
            

            <view>
                <Text style = {styles.title}>
                    Enter your name:
                </Text>
                <TextInput
                styles={styles.nameInput}
                placeholder='John snow'
                onChangeText={(Text) => {
                    this.setState({
                        name: Text,
                    })
                }}
                />
                <TouchableOpacity
                onPress={()=>{
                    Actions.chat({
                        name: this.state.name,
                    })
                }}>
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>

            </view>
        );s
    }
}

var styles = StyleSheet.create({
    title:{
        marginTop:20,
        margin:20,
        fontSize:40,

    },
    nameInput:{

        height: 40,
        borderWidth:2,
        borderColor: 'black',
        margin: 20,
    },
    buttonText:{
        marginLeft:20,
        fontSize:20,
    }
});

export default Home;