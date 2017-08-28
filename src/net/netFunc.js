import axios from 'axios';
axios.defaults.baseURL = "http://108.88.0.56:8089";
axios.defaults.timeout = 60000;
axios.defaults.headers.post["Content-Type"] = "application/json";
const CancelToken = axios.CancelToken;

export type NetCallback = {
    success?: Function,
    fail?: Function,
    tokenExpire?:Function,
    timeout?:Function,
    cancel?:Function,
    progress?:Function
}

export type Cancel = {
    source?: Object
}

export async function getForJson(netCallback:NetCallback,path:string,params,config,cancel:Cancel){
    let source = CancelToken.source();
    cancel && (cancel.source = source);
    config = config ? config : {};
    config.params = params;
    config.cancelToken = source.token;
    try{
        let result = await axios.get(path,config);
        handleResult(netCallback,result.data);
    }catch(error){
        console.log(error);
        if(axios.isCancel(error)){
            netCallback.cancel();
            return;
        }
        handleError(netCallback, error);
    }
}

export async function postForJson(netCallback:?NetCallback,path:string,params,config,cancel:?Cancel){
    let source = CancelToken.source();
    cancel && (cancel.source = source);
    config = config ? config : {};
    config.cancelToken = source.token;
    try{
        let result = await axios.post(path,params,config);
        handleResult(netCallback,result.data);
    }catch(error){
        if(axios.isCancel(error)){
            netCallback.cancel();
            return;
        }
        handleError(netCallback,error);
    }
}

export async function uploadForJson(netCallback:?NetCallback,path:string,file,filename,params,config,cancel:?Cancel){
    let source = CancelToken.source();
    cancel && (cancel.source = source);
    config = config ? config : {};
    config.cancelToken = source.token;
    config.onUploadProgress = (event)=>{
        netCallback.progress(event.total,event.load);
    }
    let formData = new FormData();
    formData.append(filename, file);
    Object.keys(params).map(value=>{
        formData.append(value,params[value]);
    })
    try{
        let result = await axios.post(path, formData, config);
        handleResult(netCallback,result.data);
    }catch(error){
        if(axios.isCancel(error)){
            netCallback.cancel();
            return;
        }
        handleError(netCallback, error);
    }
}

export async function uploadsForJson(netCallback:?NetCallback = {}, path:string, params:?FormData,config,cancel:?Cancel){
    let source = CancelToken.source();
    cancel && (cancel.source = source);
    config = config ? config : {};
    config.cancelToken = source.token;
    config.onUploadProgress = (event)=>{
        netCallback.progress(event.total,event.load);
    }
    try{
        let result = await axios.post(path, params, config);
        handleResult(netCallback,result.data);
    }catch(error){
        if(axios.isCancel(error)){
            netCallback.cancel();
            return;
        }
        handleError(netCallback);
    }
}

export async function uploadSingleForJson(netCallback:?NetCallback = {},path:string,file,filename,config,cancel:?Cancel){
    let source = CancelToken.source();
    cancel && (cancel.source = source);
    config = config ? config : {};
    config.cancelToken = source.token;
    config.onUploadProgress = (event)=>{
        netCallback.progress(event.total,event.load);
    }
    let formData = new FormData();
    formData.append(filename, file);
    try{
        let result = await axios.post(path, formData, config);
        handleResult(netCallback, result.data);
    }catch(error){
        if(axios.isCancel(error)){
            netCallback.cancel();
            return;
        }
        handleError(netCallback, error);
    }
}

export async function uploadsSingleForJson(netCallback:?NetCallback = {},path:string, params:FormData, config, cancel:?Cancel){
    let source = CancelToken.source();
    cancel && (cancel.source = source);
    config = config ? config : {};
    config.cancelToken = source.token;
    config.onUploadProgress = (event)=>{
        netCallback.progress(event.total, event.load);
    }
    try{
        let result = await axios.post(path, params, config);
        handleResult(netCallback, result.data);
    }catch(error){
        if(axios.isCancel(error)){
            netCallback.cancel();
            return;
        }
        handleError(netCallback, error);
    }
}



function handleResult(netCallback:?NetCallback,data){
    console.log(data);
    if(data.core == 0){
        netCallback.success(data);
    }else if(data.core == 1){
        netCallback.tokenExpire();
    }
}

function handleError(netCallback:?NetCallback,error){
    if(error.response){
        netCallback.fail(error.response);
    }else if(error.message.startsWith('timeout')){
        netCallback.timeout();
    }
}
