import {
    defaultTransitionConfig,
    createTransitionConfig,
    selectInterpolatorCreate
} from './api/transitionConfig';

export const defaultStackConfig = {
    mode:"card",
    headerMode:"none",
    transitionConfig:defaultTransitionConfig
}

export function createTransitionStackConfig(transitionSpec,screenInterpolator){
    return {
        mode:"card",
        headerMode:"none",
        transitionConfig:createTransitionConfig(transitionSpec,screenInterpolator)
    }
}

export function selectInterpolatorStackConfig(screenInterpolator){
    return {
        mode:"card",
        headerMode:"none",
        transitionConfig:selectInterpolatorCreate(screenInterpolator)
    }
}
