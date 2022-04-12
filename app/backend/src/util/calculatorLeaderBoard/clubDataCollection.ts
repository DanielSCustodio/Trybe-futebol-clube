const clubDataCollectionHome = (club:any, matchs:any) => {
  const totalVictories = matchs.filter((m:any) => m.homeTeamGoals > m.awayTeamGoals).length;
  const totalDraws = matchs.filter((m: any) => m.homeTeamGoals === m.awayTeamGoals).length;
  const totalLosses = matchs.filter((m: any) => m.homeTeamGoals < m.awayTeamGoals).length;
  const goalsFavor = matchs.reduce((acc:any, curr:any) => curr.homeTeamGoals + acc, 0);
  const goalsOwn = matchs.reduce((acc: any, curr: any) => curr.awayTeamGoals + acc, 0);
  const totalGames = matchs.length;
  const totalPoints = totalVictories * 3 + totalDraws;
  return { name: club,
    totalPoints,
    totalGames: matchs.length,
    totalVictories,
    totalDraws,
    totalLosses,
    goalsFavor,
    goalsOwn,
    goalsBalance: goalsFavor - goalsOwn,
    efficiency: +((totalPoints / (totalGames * 3)) * 100).toFixed(2),
  };
};

const clubDataCollectionAway = (club: any, matchs: any) => {
  const totalVictories = matchs.filter((m: any) => m.homeTeamGoals < m.awayTeamGoals).length;
  const totalDraws = matchs.filter((m: any) => m.homeTeamGoals === m.awayTeamGoals).length;
  const totalLosses = matchs.filter((m: any) => m.homeTeamGoals > m.awayTeamGoals).length;
  const goalsFavor = matchs.reduce((acc: any, curr: any) => curr.awayTeamGoals + acc, 0);
  const goalsOwn = matchs.reduce((acc: any, curr: any) => curr.homeTeamGoals + acc, 0);
  const totalPoints = totalVictories * 3 + totalDraws;
  const totalGames = matchs.length;
  return { name: club,
    totalPoints,
    totalGames: matchs.length,
    totalVictories,
    totalDraws,
    totalLosses,
    goalsFavor,
    goalsOwn,
    goalsBalance: goalsFavor - goalsOwn,
    efficiency: +((totalPoints / (totalGames * 3)) * 100).toFixed(2),
  };
};

export { clubDataCollectionHome, clubDataCollectionAway };
