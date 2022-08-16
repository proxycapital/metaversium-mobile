import { ImageSourcePropType } from "react-native"

export interface WithId {
  id: number
}

export interface MenuIconProps {
  opacity: number,
  fillColor: string
}

export type BuildingName = "Timber Camp" | "Stone Quarry" | "Iron Mine" | "Barracks" | "Brewery"

const Resources = {
  wood: "wood",
  stone: "stone",
  iron: "iron",

  wheat: "wheat",
  hop: "hop",
} as const

export type Resource = typeof Resources[keyof typeof Resources]

export type ResourceDataType = {
  id: number,
  name: Resource,
  amount: number,
}

export interface Worker {
  name: string;
  status: string;
  currentWork: string;
  image: ImageSourcePropType
}

export interface Building {
  level: number;
  type: string;
  name: BuildingName;
  resourse: string;
  resourseRate: number;
}
