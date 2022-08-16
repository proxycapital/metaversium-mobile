import {
  ironLvl1, woodLvl1, oilLvl1, stoneLvl1, brewery,
} from "../assets/buildings"
import {
  wood, stone, iron, hop, money,
} from "../assets/resources"
import { BuildingName } from "../types"

const Buildings = {
  "timber camp": {
    lvl1: woodLvl1,
    lvl2: woodLvl1,
    lvl3: woodLvl1,
  },
  "stone quarry": {
    lvl1: stoneLvl1,
    lvl2: stoneLvl1,
    lvl3: stoneLvl1,
  },
  "iron mine": {
    lvl1: ironLvl1,
    lvl2: ironLvl1,
    lvl3: ironLvl1,
  },
  oil: oilLvl1,
  brewery,
}

const Resources = {
  wood,
  stone,
  iron,
  money,
  hop,
}

export const getBuildingImage = (
  name: BuildingName, resource: any, level: number, type: string,
) => {
  if (level && resource && type !== "brewery") {
    return Buildings[name.toLowerCase()][`lvl${level}`]
  }
  return Buildings[name.toLowerCase()]
}

export const getResourceImage = (resourse: string) => {
  if (!resourse) return ""
  return Resources[resourse]
}
