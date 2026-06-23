import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import * as fs from "fs";
import * as path from "path";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const projectsPath = path.join(process.cwd(), "src/data/projects.json");
  const projectsData = JSON.parse(fs.readFileSync(projectsPath, "utf-8"));

  console.log("Seeding projects...");

  for (const project of projectsData) {
    await prisma.project.upsert({
      where: { id: project.id },
      update: project,
      create: project,
    });
  }

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
