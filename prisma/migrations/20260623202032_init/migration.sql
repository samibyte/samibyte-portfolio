-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "videoUrl" TEXT,
    "githubUrl" TEXT NOT NULL,
    "demoUrl" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "techStack" JSONB NOT NULL,
    "problem" TEXT NOT NULL,
    "solution" TEXT NOT NULL,
    "challenges" TEXT NOT NULL,
    "learnings" TEXT NOT NULL,
    "results" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
