/**
 * Created by hasee on 2017/8/29.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View,TouchableOpacity} from 'react-native';

class Item extends Component{
    static propTypes = {
        children:PropTypes.element,
        value:PropTypes.any,
        isSelect:PropTypes.bool,
        onSelect:PropTypes.func,
        box:PropTypes.element,
        selectBox:PropTypes.element,
        order:PropTypes.number,
        style:PropTypes.oneOfType([PropTypes.object,PropTypes.number])
    }
    static defaultProps={
        isSelect:false,
    }

    onSelect = ()=>{
        this.props.onSelect && this.props.onSelect(this.props.value);
    }

    render(){
        const {style, children, box, selectBox, isSelect} = this.props;
        return(
            <TouchableOpacity
                style={style}
                opacity={0.8}
                onPress={this.onSelect}>
                <View
                    style={styles.container}>
                    {isSelect ? selectBox : box}
                    {children}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    }
});

export default Item;