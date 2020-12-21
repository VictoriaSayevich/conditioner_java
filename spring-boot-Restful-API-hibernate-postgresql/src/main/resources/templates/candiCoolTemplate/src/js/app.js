// import { CollectionAPI } from './apiCollection';
import { ConditionerDOM } from './templateBuilder';


console.log("My work");

// async function test() {
//     let response = await CollectionAPI.getConditionerByID(4);
//     console.log(response.brend);
// }


window.addEventListener("DOMContentLoaded", function() {
    ConditionerDOM.createBanner();
    // ConditionerDOM.createCarousel();
    ConditionerDOM.createConditionerList();
});