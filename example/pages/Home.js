import React,{Component} from 'react';
import {StyleSheet, View, Text, Button, CameraRoll, Image} from 'react-native';
import {getForJson,NetCallback,postForJson,uploadForJson} from '../../src/net/netFunc'

class Home extends Component{
    state={
        type:null,
        uri:null
    }
    navigateToSecond = ()=>{
        this.props.navigation.navigate('Second');
    }

    testGet = ()=>{
        let netCallback:NetCallback = {
            success(data){
                console.log(data);
            },
            fail(response){
                console.log(response);
            },
            cancel(){
                console.log('cancel');
            },
            tokenExpire(){
                console.log('tokenExpire');
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
            },
            cancel(){
                console.log('cancel');
            },
            timeout(){
                console.log('timeout');
            },
            tokenExpire(){
                console.log('tokenExpire');
            }
        };
        let params = {
            name:"温钊文",
            desc:"程序员"
        };
        this.postCancel = {};
        postForJson(netCallback,'/testPost',params,null,this.postCancel);
    }

    getPhoto = ()=>{
        CameraRoll.getPhotos({
            first:1,
        }).then(result=>{
            console.log(result);
            this.setState({
                uri:result.edges[0].node.image.uri,
                type:result.edges[0].node.type
            });
        }).catch(error=>{
            console.log(error);
        });
    }

    testUpload = ()=>{
        let netCallback:NetCallback = {
            success(data){
                console.log(data);
            },
            fail(response){
                console.log(response);
            },
            progress(total,load){
                console.log(load+"/"+total);
            }
        }
        let params = {
            name:"温钊文",
            desc:"是地方撒地方"
        }
        let file = {uri: this.state.uri, type: this.state.type, name: 'pictures'};
        uploadForJson(netCallback,'/uploadFiles',file,'picture',params);
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
                        onPress={this.testPost}
                        title="测试Post请求"/>
                    <Button
                        onPress={this.getPhoto}
                        title="获取图片"/>
                    {
                        this.state.uri ?<Image
                            source={{uri:this.state.uri}}
                            style={styles.con_img}/>
                            :
                            undefined
                    }
                    <Button
                        onPress={this.testUpload}
                        title="测试upload"/>
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
    },
    con_img:{
        width:100,
        height:100
    }
});

export default Home;