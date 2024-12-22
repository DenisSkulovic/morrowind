import { RequestStatusEnum } from "../../enum/RequestStatusEnum";

export const handlePending = (stateObject: any) => {
    stateObject.status = RequestStatusEnum.LOADING;
    stateObject.error = null;
}
export const handleRejected = (stateObject: any, action: any) => {
    stateObject.status = RequestStatusEnum.FAILED;
    stateObject.error = action.error.message || 'Failed to create content';
}
