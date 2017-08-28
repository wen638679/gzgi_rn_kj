import {Animated} from 'react-native'
import {forBottomOver} from './screenInterpolator';
export function defaultTransitionConfig(){
    return {
        transitionSpec: {
                duration: 230,
                //easing: Easing.in(Easing.poly(4)), // accelerate
                timing: Animated.spring,
                friction: 6,
                tension: 2,
        },
        screenInterpolator:forBottomOver
    }
}

export function createTransitionConfig(transitionSpec,screenInterpolator){
    return ()=>{
        return {
            transitionSpec,
            screenInterpolator
        }
    }
}

export function selectInterpolatorCreate(screenInterpolator){
    return ()=>{
        return {
            transitionSpec: {
                duration: 230,
                //easing: Easing.in(Easing.poly(4)), // accelerate
                timing: Animated.spring,
                friction: 6,
                tension: 2,
            },
            screenInterpolator
        }
    }
}