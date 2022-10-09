import { useReducer, useEffect, useRef } from 'react';

// 这个函数是加强版的useReducer
// 加强在于：这个函数返回的dispatch不但可以接受action对象当参数，还能接收函数当参数
export function useThunkReducer(reducer, initialState) {
        const [state, dispatch] = useReducer(reducer, initialState);
        const stateRef = useRef(state);
        useEffect(() => {
                stateRef.current = state
        }, [state]);
        const getState = () => {
                return { ...stateRef.current }
        };
        const thunkDispatch = action => {
                typeof action === 'function'
                        ? action(thunkDispatch , getState)
                        : dispatch(action)
        };
        return [state, thunkDispatch]
}