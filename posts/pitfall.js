function listAllRooms() {
  const seed  = 196;
  const rooms = [seed];

  while (incrementLFSR(rooms[rooms.length - 1]) !== seed)
    rooms.push(incrementLFSR(rooms[rooms.length - 1]));

  for (let i = 0; i < rooms.length; i++)
    console.log(i + 1, bits, numToBinary(rooms[i]));
}

function verifyLFSRs() {
  const seed        = 196;
  const rightResult = [seed];

  while (incrementLFSR(rightResult[rightResult.length - 1]) !== seed)
    rightResult.push(incrementLFSR(rightResult[rightResult.length - 1]));

  const lastRoom    = rightResult[rightResult.length - 1];
  const leftResult  = [lastRoom];

  while (decrementLFSR(leftResult[leftResult.length - 1]) !== lastRoom)
    leftResult.push(decrementLFSR(leftResult[leftResult.length - 1]));

  if (rightResult.length !== leftResult.length) return false;

  for (let i = 0; i < rightResult.length; i++)
    if (rightResult[i] !== leftResult[leftResult.length - 1 - i])
      return false;

  return true;
}

function incrementLFSR(num) {
  const b3 = (num >> 3) & 1;
  const b4 = (num >> 4) & 1;
  const b5 = (num >> 5) & 1;
  const b7 = (num >> 7) & 1;

  num <<= 1;
  num %= 256;

  return num + ((b3 + b4 + b5 + b7) & 1);

}

function decrementLFSR(num) {
  const b4 = (num >> 4) & 1;
  const b5 = (num >> 5) & 1;
  const b6 = (num >> 6) & 1;
  const b0 = (num >> 0) & 1;

  num >>= 1;

  return num + 128*((b4 + b5 + b6 + b0) & 1);
}

function numToBinary(num) {
  const string = num.toString(2);
  return '0'.repeat(8 - string.length) + string;
}

listAllRooms();
console.log(verifyLFSRs());
