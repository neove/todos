export const createReducer = (initialState,handlers)=>{
    return (state = initialState , action)=>{
        if(handlers.hasOwnProperty(action.type)) return handlers[action.type](state,action);
        return state ;
    }
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