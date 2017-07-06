/**
 * Created by yura on 07.07.17.
 */


const initialState = {
    'a': 'a'
};


export default (action, state=initialState) => {
    switch (action.type) {
        case 1: {
            return state;
        }

        default: {
            return state;
        }
    }
}
