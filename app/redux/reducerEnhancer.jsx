/** 增强reducer，可以用来完成撤销和重做
 * reducer enhancer（或者 higher order reducer）作为一个函数，接收 reducer 作为参数并返回一个新的 reducer，这个新的 reducer   可以处理新的 action，或者维护更多的 state，亦或者将它无法处理的 action 委托给原始的 reducer 处理。这不是什么新模式，    combineReducers()也是 reducer enhancer，因为它同样接收多个 reducer 并返回一个新的 reducer。
 *  **/
import {fromJS} from 'immutable'
export  default  (reducer) => {
  // 以一个空的 action 调用 reducer 来产生初始的 state
  const initialState =fromJS({
        past: [],
        present:reducer(undefined,{}),//初始化当前的状态，然后放在past队列中
        future: []
    }
  )
  // 返回一个可以执行撤销和重做的新的reducer
  return function (state = initialState, action) {
    switch (action.type) {
      case 'UNDO':
      if(state.get('past').size == 0) return state;
        return state
            .update('future', future => {
                return future.unshift(state.get('present'));
            })
            .set('present', state.get('past').last())
            .update('past', past => {
                return past.pop();
            });
      case 'REDO':
      if(state.get('future').size == 0) return state;      
        return state
            .update('past', past => {
                return past.push(state.get('present'));
            })
            .set('present', state.get('future').first())
            .update('future', future => {
                return future.shift();
            });
      default:
        // 将其他 action 委托给原始的 reducer 处理
        let present = state.get('present');
        let newPresent = reducer(present, action);
        if (present === newPresent) return state;
        return state
            .update('past', past => past.push(present))
            .set('present', newPresent)
            .update('future', future => {
                return future.clear();
        })
    }
  }
}
