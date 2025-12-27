export interface ScorersType {
  player: {
    id: number,
    name: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    nationality: string,
    section: string,
    position: string | null,
    shirtNumber: string | null,
    lastUpdated: string
  },
  team: {
    id: number,
    name: string,
    shortName: string,
    tla: string,
    crest: string,
    clubColors: string,
    lastUpdated: string
  },
  playedMatches: number,
  goals: number,
  assists:number |null,
  penalties: number
}