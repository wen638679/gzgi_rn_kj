import {React} from 'react';
import {StackNavigator} from 'react-navigation';
import {defaultStackConfig} from './stackConfig';

export function createRouteForRouteConfig(routeConfig){
    return StackNavigator(routeConfig,defaultStackConfig);
}

export function createRoute(routeConfig,stackConfig){
    return StackNavigator(routeConfig,stackConfig);
}