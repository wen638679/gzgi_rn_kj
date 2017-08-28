import React,{Component} from 'react';
import {StyleSheet,View, Text, Button} from 'react-native';

class Second extends Component{
    state={

    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>Second</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        height:52,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default Second;