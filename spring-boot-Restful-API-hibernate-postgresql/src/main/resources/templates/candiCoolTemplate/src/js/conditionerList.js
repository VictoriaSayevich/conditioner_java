// import { Conditioner } from './conditioner';
import { CollectionAPI } from './apiCollection';

export const ConditionerList = {
    async getAllConditioners() {
        let response = await CollectionAPI.getAllConditioners();
        return response;
    }
}