import { CollectionAPI } from './apiCollection';

export const Conditioner = {
    async getConditioner(id) {
        let response = await CollectionAPI.getConditionerByID(id);
        return response;
    }
}