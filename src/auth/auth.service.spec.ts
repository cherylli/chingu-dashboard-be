import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { PrismaService } from "../prisma/prisma.service";
import { GlobalService } from "../global/global.service";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { AppConfigService } from "../config/app/appConfig.service";
import { EmailService } from "../utils/emails/sendEmail";
import { AuthConfigService } from "../config/auth/authConfig.service";

describe("AuthService", () => {
    let service: AuthService;
    let config: AppConfigService;
    let emailService: EmailService;
    let authConfig: AuthConfigService;
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                {
                    provide: AppConfigService,
                    useValue: {
                        nodeEnv: jest.fn((key: string) =>
                            key === "NODE_ENV" ? "development" : undefined,
                        ),
                    },
                },
                {
                    provide: AuthConfigService,
                    useValue: {
                        getSecrets: jest.fn(() => ({
                            jwt: "jwt",
                            at: "at",
                            rt: "rt",
                        })),
                    },
                },
                {
                    provide: EmailService,
                    useValue: {
                        sendEmail: jest.fn(),
                    },
                },
                AuthService,
                {
                    provide: PrismaService,
                    useValue: {},
                },
                GlobalService,
                UsersService,
                JwtService,
            ],
        }).compile();
        config = module.get<AppConfigService>(AppConfigService);
        authConfig = module.get<AuthConfigService>(AuthConfigService);
        emailService = module.get<EmailService>(EmailService);
        service = module.get<AuthService>(AuthService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
    it("should be defiined", () => {
        expect(config).toBeDefined();
    });
    it("should be defined", () => {
        expect(authConfig).toBeDefined();
    });
    it("should be defiined", () => {
        expect(emailService).toBeDefined();
    });
});
