// import { Conditioner } from './conditioner';
import { CollectionAPI } from './apiCollection';

export const ConditionerList = {
    async getAllConditioners() {
        let response = await CollectionAPI.getAllConditioners();
        console.log("1111", response);
        return response;
    }
}