type VoyageTeam = {
    teamId: number;
    memberId: number;
};

export type CustomRequest = Request & {
    user: {
        userId: string;
        email: string;
        roles: string[];
        voyageTeams: VoyageTeam[];
    };
}
