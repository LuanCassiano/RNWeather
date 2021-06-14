import { produce } from 'immer';

export default function City(state: any, action: any) {
    return produce(state, draft => {
        switch (action.type) {
            default:
                break;
        }
    });
}