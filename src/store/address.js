
import { AddressAPI } from "../api";

const initState = { list: [], isInit: false, }
const ActionTypes = {
    ADDRESS_INIT: 'ADDRESS_INIT',
    ADDRESS_ADD: 'ADDRESS_ADD',
    ADDRESS_UPDATE: 'ADDRESS_UPDATE',
    ADDRESS_REMOVE: 'ADDRESS_REMOVE',
    ADDRESS_SET_DEFAULT: 'ADDRESS_SET_DEFAULT'
}

export const Actions = {
    init: () => async (dispatch, getState) => {
        const state = getState();
        if(state.address.isInit) return;
        const payload = await AddressAPI.get();
        dispatch({ type: ActionTypes.ADDRESS_INIT, payload })
    },
    add: (payload) => async (dispatch) => {
        let id = await AddressAPI.add(payload);
        dispatch({ type: ActionTypes.ADDRESS_ADD, payload: { ...payload, id } })
    },
    update: (payload) => async(dispatch) => {
        await AddressAPI.update(payload);
        dispatch({ type: ActionTypes.ADDRESS_UPDATE, payload })
    },
    remove: (payload) => async (dispatch) => {
        await AddressAPI.remove(payload);
        dispatch({ type: ActionTypes.ADDRESS_REMOVE, payload })
    },
    setDefault: payload => async (dispatch) => {
        await AddressAPI.setDefault(payload);
        dispatch({ type: ActionTypes.ADDRESS_SET_DEFAULT, payload })
    }
}

let reducer = (state = initState, {type, payload} = {}) => {
    let i = -1;
    switch (type) {
        case ActionTypes.ADDRESS_INIT:
            return { list: payload };
        case ActionTypes.ADDRESS_ADD:
            state.list.push({ ...payload });
            return { list: [...state.list] }
        case ActionTypes.ADDRESS_UPDATE:
            i = state.list.findIndex(item => item.id === payload.id)
            state.list.splice(i, 1, { ...payload });
            return { list: [...state.list] };
        case ActionTypes.ADDRESS_REMOVE:
            i = state.list.findIndex(item => item.id ===payload);
            state.list.splice(i, 1);
            return { list: [...state.list] };
        case ActionTypes.ADDRESS_SET_DEFAULT:
            state.list.find(item => item.isDefault === 1).isDefault = 0;
            state.list.find(item => item.id === payload).isDefault = 1;
            return { list: [...state.list] }
        default:
            return state;
    }
}

export default reducer
