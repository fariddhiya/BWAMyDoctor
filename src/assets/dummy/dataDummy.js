import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
} from '../../assets';
import {ILCatObat, ILCatPsikiater, ILCatUmum} from '../illustration';

const dataHospital = [
  {
    id: 1,
    type: 'Rumah Sakit',
    name: 'Citra Bunga Merdeka',
    address: 'Jalan Surya Sejahtera 20',
    pic: DummyHospital1,
  },
  {
    id: 2,
    type: 'Rumah Sakit Anak',
    name: 'Happy Family Kids',
    address: 'Jalan Surya Sejahtera 2',
    pic: DummyHospital2,
  },
  {
    id: 3,
    type: 'Rumah Sakit Jiwa',
    name: 'Tingkatan Paling Atas',
    address: 'Jalan Surya Sejahtera 20',
    pic: DummyHospital3,
  },
];

const dataDoctor = [
  {
    id: 1,
    profile: DummyDoctor1,
    name: 'Alexander Jannie',
    desc: 'Baik ibu, terima kasih banyak atas wakt...',
  },
  {
    id: 2,
    profile: DummyDoctor2,
    name: 'Nairobi Putri Hayza',
    desc: 'Oh tentu saja tidak karena jeruk it...',
  },
  {
    id: 3,
    profile: DummyDoctor3,
    name: 'John McParker Steve',
    desc: 'Oke menurut pak dokter bagaimana unt...',
  },
];

const dataCategory = [
  {
    id: 1,
    category: 'dokter umum',
  },
  {
    id: 2,
    category: 'psikiater',
  },
  {
    id: 3,
    category: 'dokter obat',
  },
  {
    id: 4,
    category: 'dokter umum',
  },
];

export {dataDoctor, dataHospital, dataCategory};
