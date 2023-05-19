import { workoutsSort } from "./workoutSort.js";

const monthName = {
  '1': 'янв',
  '2': 'фев',
  '3': 'мар',
  '4': 'апр',
  '5': 'мая',
  '6': 'июн',
  '7': 'июл',
  '8': 'авг',
  '9': 'сен',
  '10': 'окт',
  '11': 'ноя',
  '12': 'дек',
}

export const countWeekValue = (workouts) => {
  const sortedWorkouts = workoutsSort(workouts);
  const weekResult = []
  for ( const week of sortedWorkouts ) {
    let totalDistance = 0;
    let totalWorkDistance = 0;
    for ( const day of week ) {
      for ( const workout of day.workouts) {
      totalDistance += workout.distM;
      totalWorkDistance += workout.workDistM;
      }
    }
    const weekName = week[6].date.getDate() +  monthName[`${(week[6].date.getMonth() + 1)}`] + 
                     ' - ' + week[0].date.getDate() + monthName[`${(week[0].date.getMonth() + 1)}`];
    weekResult.push({
      weekName,
      totalDistance,
      totalWorkDistance,
      percentIntensity: totalWorkDistance / totalDistance,
    });
  }
  return weekResult;
}