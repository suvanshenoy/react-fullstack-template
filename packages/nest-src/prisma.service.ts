import "dotenv/config";
import { Injectable } from "@nestjs/common";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { env } from "prisma/config";
import { PrismaClient } from "./prisma/generated/prisma/client";

@Injectable()
export class PrismaService extends PrismaClient {
	constructor() {
		const adapter = new PrismaBetterSqlite3({ url: env("DATABASE_URL") });
		super({ adapter });
	}
}
