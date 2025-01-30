import asyncHandler from "express-async-handler";
import prisma from "../prisma/prismaClient.js";
import dotenv from "dotenv";
dotenv.config();
const spread = 5 || process.env.SPREAD;

const gameStart = asyncHandler(async (req, res) => {
  const { name, gameName } = req.body;

  const player = await prisma.player.create({
    data: { name, gameName },
    include: { objects: true }
  })

  res.status(200).send({
    message: `Player created successfully!`,
    player
  });
})

const checkCoordinates = asyncHandler(async (req, res) => {
  const { name, gameName, x, y } = req.body;

  const player = await prisma.player.findFirst({
    where: { name },
    include: { objects: true }
  })

  if (!player || !gameName || !x || !y) {
    throw new Error(`All fields are required!`);
  }

  const objects = await prisma.object.findMany({
    where: { gameName },
  })

  for (const object of objects) {
    if (player.objects.find((obj) => obj.name === object.name)) {
      console.log("Already found!");
      continue;
    }

    if ((object.x - spread <= parseFloat(x) && object.x + spread >= parseFloat(x)) &&
        (object.y - spread <= parseFloat(y) && object.y + spread >= parseFloat(y))) {

      const updatedPlayer = await prisma.player.update({
        where: { name, gameName },
        data: {
          objects:
            { connect: { name: object.name }
          }
        },
        include: { objects: true }
      })

      return res.status(200).json({
        message: `Player found an object successfully!`,
        updatedPlayer
      })
    }
  }

  return res.status(200).json({
    message: `Player did not find an object!`,
    player
  })
})

const gameEnd = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const player = await prisma.player.findFirst({
    where: { name },
  })

  if (!player) {
    throw new Error(`Player with name ${name} not found!`);
  }

  const createdAt = Math.floor(new Date(player.createdAt).getTime());
  console.log((Date.now() - createdAt )/ 1000);
  const updatedPlayer = await prisma.player.update({
    where: { name },
    data: { score: (Date.now() - createdAt) / 1000 }
  })

  res.status(200).json({
    message: `Player updated successfully!`,
    updatedPlayer
  })
})

export default { gameStart, checkCoordinates, gameEnd }