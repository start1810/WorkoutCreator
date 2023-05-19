import { countWeekValue } from "../workoutActivites/weekValue.js";

const workout1 = {
    WId: 1,
    type: 'run',
    sportType: 'easy',
    date: new Date(2023, 3, 1),
    feedback: 10,
    distM: 13160,
    durationSec: 1 * 60 * 60
};
const workoutListTest = [ workout1 ];

console.log(countWeekValue(workoutListTest))