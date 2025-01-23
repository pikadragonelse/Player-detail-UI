export const statusTeam = (
    homeScore: number,
    awayScore: number,
    isHomeTeam: boolean
) => {
    if (homeScore === awayScore) return "win";

    if (isHomeTeam) {
        return homeScore > awayScore ? "win" : "lose";
    } else {
        return awayScore > homeScore ? "win" : "lose";
    }
};

export const colorScore = (
    homeScore: number,
    awayScore: number,
    isHomeTeam: boolean
) => {
    if (homeScore === awayScore) return "bg-[#0038E0]";

    if (isHomeTeam) {
        return homeScore > awayScore
            ? "bg-[#2187E5] font-medium"
            : "bg-gradient-to-b";
    } else {
        return awayScore > homeScore
            ? "bg-[#2187E5] font-medium"
            : "bg-gradient-to-t";
    }
};
