/**
 * Created by hasee on 2017/8/29.
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

function Box({isSelect,color,selectColor,style,mode}){
    return(
        <View style={[style,styles[`${mode}_container`],{backgroundColor:isSelect?selectColor:color}]}>
            <View style={styles[`${mode}_cen_container`]}>
                <View style={[styles[`${mode}_end_container`],{backgroundColor:isSelect?selectColor:'#fff'}]}/>
            </View>
        </View>
    );
}

Box.propTypes = {
    isSelect:PropTypes.bool,
    color:PropTypes.string,
    selectColor:PropTypes.string,
    style:PropTypes.oneOfType([PropTypes.number,PropTypes.object]),
    mode:PropTypes.oneOf(['radio','check'])
}
Box.defaultProps = {
    isSelect:false,
    color:'#808080',
    selectColor:'#2E8FCC',
    mode:'radio'
}

const styles = StyleSheet.create({
    radio_container:{
        borderRadius:10,
    },
    radio_cen_container:{
        borderRadius:9,
        margin:1,
        backgroundColor:'#fff'
    },
    radio_end_container:{
        borderRadius:5,
        margin:4,
        minWidth:10,
        minHeight:10
    },
    check_container:{
        borderRadius:3,
    },
    check_cen_container:{
        borderRadius:4,
        margin:1,
        backgroundColor:'#fff'
    },
    check_end_container:{
        borderRadius:2,
        margin:4,
        minWidth:10,
        minHeight:10
    }
});

export default Box;