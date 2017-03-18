const createReducer = (initialState,handlers)=>{
    return (state = initialState, action) => { 
        if(handlers.hasOwnProperty(action.type)) return handlers[action.type](state,action);
        return state ;
    }
}
/**
 * sliceReducers 仅初始化 的时候执行 一次，调用此方法会为rootHandlers上的每个节点调用一次createReducer
 * @param:
 * initialState:初始化state
 * rootHandlers:state上每个节点对应的处理逻辑的集合
 * */
export const sliceReducers = (initialState,rootHandlers) =>{
    let reducers = {};
    for (let key in rootHandlers){
        reducers[key] = createReducer(initialState.get(key),rootHandlers[key]);
    }
    return reducers;
}

export const mapActionCreators= (acObject,dispatch) => {
        // make a copy of the tree ,in case of monipulate
        let result = {};
        const looper = function (obj, result) {
            forEach(obj, function (val, key) {
                if (typeof (val) === 'object') {
                    result[key] = {};
                    looper(val, result[key]);
                }
                if (typeof (val) === 'function') result[key] = function () {
                    dispatch(val.apply(undefined,arguments))
                }
            })
        };
        looper(acObject, result);
        return result;
    }
function forEach(target, cb) {
    if (Array.isArray(target)) {
        for (let value of target) {
            cb(value);
        }
    } else {
        let keysArr = Object.keys(target);
        for (let key of keysArr) {
            cb(target[key], key);
        }
    }
}