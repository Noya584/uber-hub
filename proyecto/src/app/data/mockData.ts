import { Group, Member, Ride, HistoryEntry, Expense, WeeklyExpense } from '../types';

export const rides: Ride[] = [
  {
    id: 'ride-1',
    memberId: 'sofia',
    origin: 'Av. Libertador 1234',
    destination: 'Colegio San Pedro',
    status: 'en-viaje',
    progress: 65,
    eta: 8,
    driver: {
      name: 'Carlos Mendez',
      photo: 'CM',
      rating: 4.9,
      vehicle: 'Toyota Corolla Blanco',
      plate: 'AB123CD',
    },
    category: 'Comfort',
    price: 3200,
  },
  {
    id: 'ride-2',
    memberId: 'luis',
    origin: 'Calle 45 #678',
    destination: 'Oficina Central',
    status: 'en-viaje',
    progress: 88,
    eta: 4,
    driver: {
      name: 'María González',
      photo: 'MG',
      rating: 4.8,
      vehicle: 'Chevrolet Cruze Negro',
      plate: 'XY789ZW',
    },
    category: 'UberX',
    price: 2800,
  },
  {
    id: 'ride-3',
    memberId: 'pablo',
    origin: 'Plaza Mayor',
    destination: 'Aeropuerto Internacional',
    status: 'pendiente',
    progress: 0,
    eta: 0,
    category: 'Black',
    price: 5500,
  },
];

export const members: Member[] = [
  {
    id: 'sofia',
    name: 'Sofía',
    avatar: 'S',
    group: 'familia',
    status: 'active',
    role: 'Hija',
    currentRide: rides[0],
  },
  {
    id: 'luis',
    name: 'Luis',
    avatar: 'L',
    group: 'familia',
    status: 'active',
    role: 'Padre',
    currentRide: rides[1],
  },
  {
    id: 'pablo',
    name: 'Pablo',
    avatar: 'P',
    group: 'familia',
    status: 'pending',
    role: 'Hijo',
    currentRide: rides[2],
  },
  {
    id: 'juan',
    name: 'Juan',
    avatar: 'J',
    group: 'familia',
    status: 'inactive',
    role: 'Hijo',
  },
];

export const groups: Group[] = [
  {
    id: 'familia',
    name: 'Familia',
    color: '#9C27B0',
    members: members.filter((m) => m.group === 'familia'),
    activeRides: 2,
  },
  {
    id: 'trabajo',
    name: 'Trabajo',
    color: '#4CAF50',
    members: [],
    activeRides: 0,
  },
  {
    id: 'amigos',
    name: 'Amigos',
    color: '#FFC107',
    members: [],
    activeRides: 0,
  },
];

export const historyEntries: HistoryEntry[] = [
  {
    date: '2025-06-08',
    passenger: 'Sofía',
    origin: 'Casa',
    destination: 'Colegio San Pedro',
    duration: '15 min',
    amount: 3200,
    driver: 'Carlos Mendez',
  },
  {
    date: '2025-06-08',
    passenger: 'Luis',
    origin: 'Casa',
    destination: 'Oficina Central',
    duration: '22 min',
    amount: 4100,
    driver: 'María González',
  },
  {
    date: '2025-06-07',
    passenger: 'Pablo',
    origin: 'Universidad',
    destination: 'Casa',
    duration: '18 min',
    amount: 2900,
    driver: 'Jorge Ruiz',
  },
  {
    date: '2025-06-07',
    passenger: 'Sofía',
    origin: 'Colegio San Pedro',
    destination: 'Casa',
    duration: '12 min',
    amount: 2600,
    driver: 'Ana López',
  },
  {
    date: '2025-06-06',
    passenger: 'Juan',
    origin: 'Casa',
    destination: 'Centro Comercial',
    duration: '25 min',
    amount: 3800,
    driver: 'Pedro Sánchez',
  },
  {
    date: '2025-06-06',
    passenger: 'Luis',
    origin: 'Oficina Central',
    destination: 'Restaurante La Plaza',
    duration: '10 min',
    amount: 2200,
    driver: 'Laura Martínez',
  },
];

export const expenses: Expense[] = [
  { member: 'Sofía', amount: 18500, rides: 12 },
  { member: 'Luis', amount: 24300, rides: 15 },
  { member: 'Pablo', amount: 15200, rides: 10 },
  { member: 'Juan', amount: 8900, rides: 6 },
];

export const weeklyExpenses: WeeklyExpense[] = [
  { week: 'Semana 1', amount: 12500 },
  { week: 'Semana 2', amount: 15800 },
  { week: 'Semana 3', amount: 18200 },
  { week: 'Semana 4', amount: 20400 },
];
