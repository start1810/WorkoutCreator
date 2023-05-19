export const workoutsSort = ( workoutsList ) => {
    const editedWorkouts = workoutsList.sort((a,b) => b.date.getTime() - a.date.getTime())
    const firstWorkoutDay = editedWorkouts[editedWorkouts.length - 1].date;
    const listWeeks = [];
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7 - currentDate.getDay())
    while (currentDate.getTime() > firstWorkoutDay.getTime()) {
      const weekDays = [];
      for ( let i = 0; i < 7 ; i++) {
        weekDays.push({
          date: new Date(currentDate.getTime()),
          workouts: [],
        });
        currentDate.setDate(currentDate.getDate() - 1);
      }
      listWeeks.push(weekDays)
    }
    for (const elem of workoutsList) {
      for (const item of listWeeks) {
        item.find((day) => {
          if (day.date.toLocaleDateString() === elem.date.toLocaleDateString()) {
            day.workouts.push(elem)
          }
        });
      }
    }
    return listWeeks
  }