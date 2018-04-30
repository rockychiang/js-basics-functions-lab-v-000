function distanceFromHqInBlocks(location) {
  distance = location -42
  return distance < 0 ? distance * -1 : distance
}