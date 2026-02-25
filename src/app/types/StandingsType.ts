
export interface StandingsType {
  filters:{
    season:number
  },
  competition:{
    emblem:string
  },
  season:{
    id:number,
    currentMatchday:number, //次節の番号が入る
    winner:string | null
  },
  standings:{
    type:'TOTAL' | 'HOME' | 'AWAY',
    table:{
        position:number, //順位の数字
        team:{
          id:number, //チームID
          name:string,
          shortName:string,
          tla:string,
          crest:string
        },
        playedGames:number,
        form:string, //直近5試合の結果
        won:number,
        draw:number,
        lost:number,
        points:number,
        goalsFor:number,
        goalsAgainst:number,
        goalDifference:number
      }[],
  }[],
}

export type StandingRow = StandingsType['standings'][number]['table'][number]