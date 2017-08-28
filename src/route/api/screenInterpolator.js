export function forLeftOver(props){
    const {layout, position, scene} = props;
    const width = layout.initWidth;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const outputRange = [-width,0,0];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateX = position.interpolate({
        inputRange,
        outputRange
    });
    return {
        opacity,
        transform:[{translateX}]
    }
}

export function forRightOver(props){
    const {layout, position, scene} = props;
    const width = layout.initWidth;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const outputRange = [width,0,0];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateX = position.interpolate({
        inputRange,
        outputRange
    });
    return {
        opacity,
        transform:[{translateX}]
    }
}

export function forBottomOver(props){
    const {layout, position, scene} = props;
    const height = layout.initHeight;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const outputRange = [height,0,0];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateY = position.interpolate({
        inputRange,
        outputRange
    });
    return {
        opacity,
        transform:[{translateY}]
    }
}

export function forLeftPush(props){
    const {layout, position, scene} = props;
    const width = layout.initWidth;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const outputRange = [-width,0,width];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateX = position.interpolate({
        inputRange,
        outputRange
    });
    return {
        opacity,
        transform:[{translateX}]
    }
}

export function forRightPush(props){
    const {layout, position, scene} = props;
    const width = layout.initWidth;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const outputRange = [width,0,-width];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateX = position.interpolate({
        inputRange,
        outputRange
    });
    return {
        opacity,
        transform:[{translateX}]
    }
}

export function forLeftPull(props){
    const {layout, position, scene} = props;
    const width = layout.initWidth;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const outputRange = [-width,0,-width];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateX = position.interpolate({
        inputRange,
        outputRange
    });
    return {
        opacity,
        transform:[{translateX}]
    }
}

export function forRightPull(props){
    const {layout, position, scene} = props;
    const width = layout.initWidth;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const outputRange = [width,0,width];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateX = position.interpolate({
        inputRange,
        outputRange
    });
    return {
        opacity,
        transform:[{translateX}]
    }
}

export function forBottomPull(props){
    const {layout, position, scene} = props;
    const height = layout.initHeight;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const outputRange = [height,0,height];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateY = position.interpolate({
        inputRange,
        outputRange
    });
    return {
        opacity,
        transform:[{translateY}]
    }
}

export function forLeftTopOver(props){
    const {layout, position, scene} = props;
    const width = layout.initWidth;
    const height = layout.initHeight;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const xRange = [-width,0,0];
    const yRange = [-height,0,0];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateX = position.interpolate({
        inputRange,
        outputRange:xRange
    });
    const translateY = position.interpolate({
        inputRange,
        outputRange:yRange
    });
    return {
        opacity,
        transform:[{translateX},{translateY}]
    }
}

export function forLeftTopPull(props){
    const {layout, position, scene} = props;
    const width = layout.initWidth;
    const height = layout.initHeight;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const xRange = [-width,0,width];
    const yRange = [-height,0,-height];
    //const outputRange = [height,0,height];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateX = position.interpolate({
        inputRange,
        outputRange:xRange
    });
    const translateY = position.interpolate({
        inputRange,
        outputRange:yRange
    });
    return {
        opacity,
        transform:[{translateX},{translateY}]
    }
}

export function forLeftTopPush(props){
    const {layout, position, scene} = props;
    const width = layout.initWidth;
    const height = layout.initHeight;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const xRange = [-width,0,width];
    const yRange = [-height,0,height];
    //const outputRange = [height,0,height];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateX = position.interpolate({
        inputRange,
        outputRange:xRange
    });
    const translateY = position.interpolate({
        inputRange,
        outputRange:yRange
    });
    return {
        opacity,
        transform:[{translateX},{translateY}]
    }
}

export function forRightTopOver(props){
    const {layout, position, scene} = props;
    const width = layout.initWidth;
    const height = layout.initHeight;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const xRange = [width,0,0];
    const yRange = [-height,0,0];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateX = position.interpolate({
        inputRange,
        outputRange:xRange
    });
    const translateY = position.interpolate({
        inputRange,
        outputRange:yRange
    });
    return {
        opacity,
        transform:[{translateX},{translateY}]
    }
}

export function forRightTopPull(props){
    const {layout, position, scene} = props;
    const width = layout.initWidth;
    const height = layout.initHeight;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const xRange = [width,0,-width];
    const yRange = [-height,0,-height];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateX = position.interpolate({
        inputRange,
        outputRange:xRange
    });
    const translateY = position.interpolate({
        inputRange,
        outputRange:yRange
    });
    return {
        opacity,
        transform:[{translateX},{translateY}]
    }
}

export function forRightTopPush(props){
    const {layout, position, scene} = props;
    const width = layout.initWidth;
    const height = layout.initHeight;
    const index = scene.index;
    const inputRange = [index-1,index,index+1];
    const xRange = [width,0,-width];
    const yRange = [-height,0,height];
    const opacity = position.interpolate({
        inputRange,
        outputRange:[0,1,0]
    });
    const translateX = position.interpolate({
        inputRange,
        outputRange:xRange
    });
    const translateY = position.interpolate({
        inputRange,
        outputRange:yRange
    });
    return {
        opacity,
        transform:[{translateX},{translateY}]
    }
}