import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.user.findMany();
    }

    userDetailsById(userId: string) {
        return this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                avatar: true,
                githubId: true,
                discordId: true,
                twitterId: true,
                linkedinId: true,
                email: true,
                gender: {
                    select: {
                        abbreviation: true,
                        description: true,
                    },
                },
                countryCode: true,
                timezone: true,
                comment: true,
                voyageTeamMembers: {
                    select: {
                        id: true,
                        voyageTeam: {
                            select: {
                                name: true,
                                tier: {
                                    select: {
                                        name: true,
                                        description: true,
                                    },
                                },
                            },
                        },
                        voyageRole: {
                            select: {
                                name: true,
                                description: true,
                            },
                        },
                        status: true,
                        hrPerSprint: true,
                        teamTechStackItemVotes: {
                            select: {
                                id: true,
                                teamTech: {
                                    select: {
                                        tech: {
                                            select: {
                                                id: true,
                                                name: true,
                                                category: {
                                                    select: {
                                                        name: true,
                                                        description: true,
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
}