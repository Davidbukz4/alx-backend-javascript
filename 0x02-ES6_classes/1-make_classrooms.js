import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const items = [19, 20, 34];
  const res = items.map((item) => new ClassRoom(item));
  return res;
}
