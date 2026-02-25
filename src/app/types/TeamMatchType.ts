interface TeamType{
  id:number,
  name:string,
  shortName:string,
  tla:string,
  crest:string
}

interface ScoreSide {
  home: number | null,
  away: number | null
};

export interface TeamMatchType{
  filters:{
    competitions:string,
    permission:string,
    limit:number
  },
  resultSet:{
    count:number,
    competitions:string,
    first:string,
    last:string,
    played:number,
    wins:number,
    draws:number,
    losses:number
  },
  matches:Array<{
      area:{
        id:number,
        name:string,
        code:string,
        flag:string
      },
      competition:{
        id:number,
        name:string,
        code:string,
        type:string,
        },
      season:{
        id:number,
        startDate:string,
        endDate:string,
        currentMatchday:number,
        winner:string | null
      },
      id:number,
      utcDate:string,
      status:string,
      matchday:number | null,
      stage:string,
      group:string | null,
      lastUpdated:string,

      homeTeam:TeamType,
      awayTeam:TeamType,

      score:{
        winner:string | null,
        duration:string,
        fullTime:ScoreSide,
        halfTime:ScoreSide
      },
    }>
}