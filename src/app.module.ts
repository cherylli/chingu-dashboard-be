import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { PrismaModule } from "./prisma/prisma.module";
import { IdeationModule } from "./ideation/ideation.module";

@Module({
    imports: [UserModule, PrismaModule, IdeationModule],
})
export class AppModule {}
