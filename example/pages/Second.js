import React,{Component} from 'react';
import {StyleSheet,View, Text, Button} from 'react-native';
import RadioGroup from '../../src/view/select/RadioGroup';
import CheckGroup from '../../src/view/select/CheckGroup';
import Item from '../../src/view/select/Item';
import Box from '../../src/view/select/Box';
//const Item = RadioGroup.Item;
class Second extends Component{
    state={
        index:-1,
        check:[false,false,false]
    }

    onSelectChange = (value,index)=>{
        console.log(value,index);
        this.setState({
            index:index
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>Second</Text>
                </View>
                <View>
                    <RadioGroup
                        style={styles.radiogroup}
                        selectedIndex={this.state.index}
                        onSelectChange={this.onSelectChange}>
                        <Item
                            style={styles.radio_item}
                            value='jack'>
                            <Text>jack</Text>
                        </Item>
                        <Item
                            style={styles.radio_item}
                            value='leon'>
                            <Text>leon</Text>
                        </Item>
                        <Item
                            style={styles.radio_item}
                            value='ez'>
                            <Text>ez</Text>
                        </Item>
                    </RadioGroup>
                    <CheckGroup
                        style={styles.radiogroup}>
                        {
                            this.state.check.map((value,index)=>{
                                return(
                                    <Item
                                        box={index ==0 ?<Box/>:undefined}
                                        selectBox={index ==0 ?<Box isSelect={true}/>:undefined}
                                        style={styles.radio_item}
                                        key={'item'+index}
                                        isSelect={value}
                                        value={value}
                                        onSelect={(value)=>{
                                            let oldCheck = this.state.check;
                                            let newCheck = [...oldCheck];
                                            newCheck[index] = !newCheck[index];
                                            this.setState({
                                                check:newCheck
                                            });
                                        }}>
                                        <Text>{`checkout_${index}`}</Text>
                                    </Item>
                                );
                            })
                        }
                    </CheckGroup>
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
    },
    radiogroup:{},
    radio_item:{
        marginBottom:10,
        marginLeft:10
    }
});

export default Second;