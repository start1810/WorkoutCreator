interface IWorkout {
  WId: number,
  type: 'run' | 'strength',
  sportType: 'easy' | 'interval' | 'threshold' | 'repeat',
  workoutDate: Date,
  description?: string,
  feedback: number,
  avgHR?: number,
  distM?: number,
  workDistM?: number,
  durationSec?: number,
}

const workout1: IWorkout = {
  WId: 1,
  type: 'run',
  sportType: 'easy',
  workoutDate: new Date(2023, 3, 1),
  feedback: 10,
  distM: 13160,
  durationSec: 1 * 60 * 60
}

export {}