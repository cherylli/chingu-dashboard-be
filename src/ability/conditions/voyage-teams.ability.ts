import { UserReq } from "../../global/types/CustomRequest";
import { Action } from "../ability.factory/ability.factory";
import { ForbiddenError } from "@casl/ability";
import { VoyageTeam } from "@prisma/client";
import { ForbiddenException } from "@nestjs/common";
import { abilityFactory } from "./shared.ability";

export const manageOwnVoyageTeamWithIdParam = (
    user: UserReq,
    teamIdParam: number,
) => {
    if (!user.voyageTeams.map((vt) => vt.teamId).includes(teamIdParam)) {
        throw new ForbiddenException(
            "VoyageTeam access control: You can only access data for your own voyage team.",
        );
    }
};

/***
 For future reference, this works, but it has to be of voyageTeamType without a special select statement
 So it should be used for cases when a team Id is not supplied (this would be an extra database query in most cases)
 but for cases when teamId is supplied as a parameter or in the req body, we can use that instead as there would
 less database query
 ***/
export const manageOwnVoyageTeam = (user: UserReq, voyageTeam: VoyageTeam) => {
    // mockUser for testing only
    const mockUser = {
        voyageTeams: [{ teamId: 2, memberId: 1 }],
        userId: "userId",
        email: "email",
        roles: ["voyager"],
    };
    const ability = abilityFactory.defineAbility(mockUser);

    ForbiddenError.from(ability).throwUnlessCan(Action.Read, {
        ...voyageTeam,
        __caslSubjectType__: "VoyageTeam",
    });
};
