import { CollectionAPI } from './apiCollection';

export class Conditioner {
    constructor(id = 1) {
        this.data = this.getConditioner(id);
    }

    async getConditioner(id) {
        let response = await CollectionAPI.getConditionerByID(id);
        return response;
    }
}