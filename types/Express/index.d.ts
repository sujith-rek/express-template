import {PrismaClient} from "@prisma/client";

declare global{
    namespace Express {
        interface Global {
            prisma: PrismaClient | undefined;
        }
    }
}

export default global;