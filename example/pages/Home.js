import React,{Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {getForJson,NetCallback} from '../../src/net/netFunc'

class Home extends Component{
    navigateToSecond = ()=>{
        this.props.navigation.navigate('Second');
    }

    testGet = ()=>{
        let netCallback:NetCallback = {
            success(data){
                console.log(data);
            },
            fail(){
                console.log('fail');
            },
            cancel(){
                console.log('cancel');
            }
        };
        let params = {
            username:'jack',
            password:'664340'
        }
        this.getCancel = {};
        getForJson(netCallback,'/test',params,null,this.getCancel);
    }

    cancelGet = ()=>{
        this.getCancel && this.getCancel.source.cancel();
    }

    testPost = ()=>{
        let netCallback:NetCallback = {
            success(data){
                console.log(data);
            },
            fail(response){
                console.log(response);
            }
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>Home</Text>
                </View>
                <View style={styles.content}>
                    <Button
                        style={styles.con_button}
                        onPress={this.navigateToSecond}
                        title="跳转至Second"/>
                    <Button
                        style={styles.con_button}
                        onPress={this.testGet}
                        title="测试Get请求"/>
                    <Button 
                        style={styles.con_button}
                        onPress={this.cancelGet}
                        title="取消Get请求"/>
                    <Button
                        onPress={}
                        title="测试Post请求"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        height:52,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        flex:1
    },
    con_button:{
        marginTop:15,
        height:30,
    }
});

export default Home;