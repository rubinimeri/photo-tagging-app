-- CreateTable
CREATE TABLE "Game" (
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Object" (
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "gameName" TEXT,

    CONSTRAINT "Object_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Player" (
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "score" DOUBLE PRECISION,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_name_key" ON "Game"("name");

-- AddForeignKey
ALTER TABLE "Object" ADD CONSTRAINT "Object_gameName_fkey" FOREIGN KEY ("gameName") REFERENCES "Game"("name") ON DELETE SET NULL ON UPDATE CASCADE;
