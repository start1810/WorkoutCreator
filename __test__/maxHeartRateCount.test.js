import { maxHeartRateCount } from "../userActivites/maxHeartRateCount.js";

const testProfile = {
    UId: 1,
    name: 'Artyom Striganov',
    birth: new Date(1997, 9, 18),
};
console.log(maxHeartRateCount(testProfile));