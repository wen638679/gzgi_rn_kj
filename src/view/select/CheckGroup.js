/**
 * Created by hasee on 2017/8/30.
 */
import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';
import PropTypes from 'prop-types';
import Box from './Box';

class CheckGroup extends Component{
    static propTypes = {
        box:PropTypes.element,
        selectBox:PropTypes.element,
        style:PropTypes.oneOfType([PropTypes.number,PropTypes.object]),
        boxColor:PropTypes.string,
        selectColor:PropTypes.string
    }

    renderItem = ()=>{
        const {children} = this.props;
        return React.Children.map(children,(value,index)=>{
            let oldProp = value.props;
            let tempProp = {};
            if(!oldProp.box){
                if(this.props.box){
                    tempProp.box = this.props.box;
                }else{
                    tempProp.box = <Box mode='check' color={this.props.boxColor}/>;
                }
            }
            if(!oldProp.selectBox){
                if(this.props.selectBox){
                    tempProp.selectBox = this.props.selectBox;
                }else{
                    tempProp.selectBox = <Box mode="check" isSelect={true} selectColor={this.props.selectColor}/>
                }
            }
            tempProp.key = 'check_item_'+oldProp.value+'_'+index;
            let newProp = Object.assign({},oldProp,tempProp);
            delete newProp.children;
            return React.cloneElement(value, newProp, oldProp.children);
        })
    }

    render(){
        return (
            <View
                style={[styles.container,this.props.style]}>
                {this.renderItem()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding:5
    }
});

export default CheckGroup;