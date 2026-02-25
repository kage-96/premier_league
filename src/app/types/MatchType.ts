export interface Matchtype{
  competition:{
    id:number,
    emblem:string
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
    matchday:number,
    stage:string,
    group:string | null,
    lastUpdated:string,
    homeTeam:{
      id:number,
      name:string,
      shortName:string,
      tla:string,
      crest:string
      },
    awayTeam:{
      id:number,
      name:string,
      shortName:string,
      tla:string, //英語3字でチーム名を表す
      crest:string
      },
      score:{
        winner:string,
        duration:string,
        fullTime:{
          home:number,
          away:number
        },
        halfTime:{
          home:number,
          away:number
        }
      },
}