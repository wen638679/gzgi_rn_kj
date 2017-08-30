/**
 * Created by hasee on 2017/8/29.
 */
import React,{Component,ReactElement} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import Box from './Box';
//import Item from './Item';

class RadioGroup extends Component{
    static defaultProps = {
        selectedIndex:-1
    }

    static propTypes = {
        selectedIndex:PropTypes.number,
        onSelectChange:PropTypes.func,
        style:PropTypes.oneOfType([PropTypes.number,PropTypes.object]),
        selectBox:PropTypes.element,
        box:PropTypes.element
    }

    renderItem(){
        console.log(this.props.selectedIndex);
        const {children, selectedIndex} = this.props;
        return React.Children.map(children, (value, index)=>{
            let isSelect = index  == selectedIndex;
            let oldProp = value.props;
            let tempProp = {};
            tempProp.isSelect = isSelect;
            if(!oldProp.box){
                if(this.props.box){
                    tempProp.box = this.props.box;
                }else {
                    tempProp.box = <Box/>;
                }
            }
            if(!oldProp.selectBox){
                if(this.props.selectBox){
                    tempProp.selectBox = this.props.selectBox;
                }else {
                    tempProp.selectBox = <Box isSelect={true}/>
                }
            }
            tempProp.onSelect = (value)=>{
                oldProp.onSelect && oldProp.onSelect(value);
                this.props.onSelectChange  && this.props.onSelectChange(value, index);
            };
            tempProp.key = 'radio_item_'+oldProp.value+index;
            let newProp = Object.assign({},oldProp,tempProp);
            delete newProp.children;
            return React.cloneElement(value,newProp,oldProp.children);
        });
    }

    render(){
        const {style} = this.props;
        return(
            <View style={[style,styles.container]}>
                {this.renderItem()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding:5,
    }
});

export default RadioGroup;