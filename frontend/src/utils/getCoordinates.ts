import {
  CROSSHAIR_WIDTH,
  TARGETING_BOX_WIDTH,
  TARGETING_BOX_HEIGHT,
} from "@/constants.ts";
import { Coordinates } from "@/types.ts";
import convertToPercentage from "@/utils/convertToPercentage.ts";

function getCoordinates(x: number, y: number, width: number, height: number) {
  const coordinates: Coordinates = {
    x: x + convertToPercentage(CROSSHAIR_WIDTH / 2, width),
    y: y - convertToPercentage(CROSSHAIR_WIDTH / 2, height),
  };

  if (!coordinates.x || !coordinates.y) return;

  if (coordinates.x + convertToPercentage(TARGETING_BOX_WIDTH, width) >= 99) {
    coordinates.x -= convertToPercentage(
      TARGETING_BOX_WIDTH + CROSSHAIR_WIDTH,
      width,
    );
  }

  if (coordinates.y <= 1) {
    coordinates.y += convertToPercentage(CROSSHAIR_WIDTH, height);
  }

  if (coordinates.y + convertToPercentage(TARGETING_BOX_HEIGHT, height) >= 99) {
    coordinates.y -= convertToPercentage(TARGETING_BOX_HEIGHT, height);
  }

  return coordinates;
}

export { getCoordinates };
