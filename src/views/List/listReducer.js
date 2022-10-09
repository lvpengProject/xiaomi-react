
import { ListAPI } from "@/api";


const ActionTypes = {
    BEGIN_LOADING: 'BEGIN_LOADING',
    UPDATE_LIST: 'UPDATE_LIST',
}
export const Actions = {
    getData: () => async (dispatch, getState ) => {
        dispatch({ type: ActionTypes.BEGIN_LOADING });
        await new Promise(resolve => setTimeout(() => resolve(), 1500));
        const payload = await ListAPI.get(getState().model);
        dispatch({ type: ActionTypes.UPDATE_LIST, payload });
    }
}

export default function (state, { type, payload } = {}) {
    switch (type) {
        case ActionTypes.BEGIN_LOADING:
            return { ...state, isLoading: true }
        case ActionTypes.UPDATE_LIST:
            return {
                ...state,isLoading: false,
                hasMore: payload.length === state.model.pageSize,
                list: payload
            }
    }
}
