export interface I_Competition {
  atpId: null;
  atpPriority: null;
  atpWeekId: null;
  comment: null;
  ctlTarget: null;
  description: null;
  distance: null;
  distanceUnits: null;
  eventDate: string;
  eventType: string;
  externalEventId: null;
  externalEventSource: null;
  goals: Goals;
  id: number;
  isHidden: boolean;
  isLocked: boolean;
  legs: Leg[];
  name: string;
  personId: number;
  raceTypeDuration: null;
  results: Result[];
  workouts: any[];
}

interface Goals {
  athleteEventId: number;
  athleteId: number;
  distance: null;
  finish: null;
  place: null;
  pr: null;
  time: null;
  written: any[];
}

interface Leg {
  distance: null;
  duration: null;
  legType: string;
  workoutId: null;
}

interface Result {
  entrants: null;
  place: null;
  resultType: string;
}
