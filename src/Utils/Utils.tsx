import {Color, Spots} from "../api/api";

export function createColorMap(): Map<Color, string> {
  const colorMap = new Map<Color, string>();
  colorMap.set(Color.RED, "Rood");
  colorMap.set(Color.GREEN, "Groen");
  colorMap.set(Color.YEllOW, "Geel");
  colorMap.set(Color.BLUE, "Blauw");
  return colorMap;
}

export function createSpotsMap(): Map<Spots, string> {
  const spotsMap = new Map<Spots, string>();
  spotsMap.set(Spots.dashed, "Dashed");
  spotsMap.set(Spots.dotted, "Dotted");
  spotsMap.set(Spots.double, "Double");
  spotsMap.set(Spots.groove, "Groove");
  spotsMap.set(Spots.solid, "Solid")
  spotsMap.set(Spots.hidden, "Hidden");
  spotsMap.set(Spots.inset, "Inset");
  spotsMap.set(Spots.ridge, "Ridge");
  spotsMap.set(Spots.none, "None");
  spotsMap.set(Spots.outset, "Outset");
  return spotsMap;
}
