export interface Product {
  name: string;
  image: string;
  specs: string;
  price: string;
  oldPrice?: string;
  category: "city" | "trekking" | "mtb" | "kids" | "gravel" | "e-gravel";
  brand: string;
}

export const cityProducts: Product[] = [
  {
    name: "HoheAcht AMO Eko Vilago RT",
    image: "/images/products/cache_18482193.png",
    specs: "Shimano Steps E6110 Motor, Shimano 504 Wh Akku, Schiebehilfe, 8-Gang Shimano Nexus Nabenschaltung mit Rücktritt, Shimano Scheibenbremse",
    price: "3.499,00 €",
    category: "city",
    brand: "HoheAcht",
  },
  {
    name: "Victoria Cysalo 7",
    image: "/images/products/cache_18756920.png",
    specs: 'Bosch Smart System "Active Line Plus" Motor, Bosch 545 Wh Akku, Schiebehilfe, 8-Gang Shimano Nexus Nabenschaltung mit Rücktrittbremse, vollhydraulische Shimano Scheibenbremsen, Bosch Purion 200 Farbdisplay',
    price: "2.799,00 €",
    category: "city",
    brand: "Victoria",
  },
  {
    name: "Victoria Cysalo 5",
    image: "/images/products/cache_18756907.png",
    specs: 'Bosch "Active Line Plus" Motor, Bosch 400 Wh Akku, Schiebehilfe, 7-Gang Shimano Nexus Nabenschaltung mit Rücktrittbremse, vollhydraulische Felgenbremsen Magura HS11, Bosch Purion 200m Farbdisplay',
    price: "2.499,00 €",
    category: "city",
    brand: "Victoria",
  },
  {
    name: "Victoria Cysalo 9",
    image: "/images/products/cache_18756926.png",
    specs: 'Bosch Smart System "Active Line Plus" Motor, Bosch 545 Wh Akku, Schiebehilfe, 8-Gang Shimano Nexus Nabenschaltung mit Rücktrittbremse, vollhydraulische Shimano Scheibenbremsen, Bosch Purion 200 Farbdisplay, Gates Riemenantrieb',
    price: "2.999,00 €",
    category: "city",
    brand: "Victoria",
  },
  {
    name: "Victoria Fylgran 7",
    image: "/images/products/cache_18231471.png",
    specs: "Leichtes klappbares E-Bike, Bosch Performance Line SX Motor, Bosch 400 Wh Akku, Schiebehilfe, 5-Gang Shimano Nexus Nabenschaltung E, vollhydraulische Scheibenbremsen, Gates Riemenantrieb",
    price: "3.999,00 €",
    category: "city",
    brand: "Victoria",
  },
  {
    name: "Victoria Fylgran 3",
    image: "/images/products/cache_17474567.png",
    specs: 'Bosch Smart System "Performance" Motor, Bosch 545 Wh Akku, Schiebehilfe, 5-Gang Shimano Nexus Nabenschaltung mit oder ohne Rücktrittbremse erhältlich, Shimano Scheibenbremse, Bosch LED Remote Display, Gates Riemenantrieb',
    price: "3.999,00 €",
    category: "city",
    brand: "Victoria",
  },
  {
    name: "Qio Eins AP-8 #1",
    image: "/images/products/cache_18756940.png",
    specs: 'Bosch Smart System "Active Line Plus" Motor, Bosch 400 Wh Akku, Schiebehilfe, 8-Gang Shimano Nexus Nabenschaltung, wahlweise mit oder ohne Rücktrittbremse, vollhydraulische TRP Scheibenbremsen, Bosch Purion 200 Farbdisplay',
    price: "3.299,00 €",
    category: "city",
    brand: "QiO",
  },
];

export const trekkingProducts: Product[] = [
  {
    name: "Conway Cairon C 1.0 B",
    image: "/images/products/cache_18415250.png",
    specs: 'Bosch "Performance" Motor, wahlweise mit Bosch 600 Wh oder 800Wh Akku, Schiebehilfe, 8-Gang Shimano Nexus Nabenschaltung mit Rücktrittbremse, TEKTRO Scheibenbremse, Bosch Purion 200 Farbdisplay, Gates Riemenantrieb',
    price: "3.599,00 € / 3.799,00 €",
    category: "trekking",
    brand: "Conway",
  },
  {
    name: "Conway Cairon T 4.5",
    image: "/images/products/cache_18415250.png",
    specs: 'Bosch "Performance CX" Motor, Bosch 625 Wh Akku, Schiebehilfe, 5-Gang Shimano Nexus Nabenschaltung, Shimano Scheibenbremse, Bosch Kiox 300 Display, Gates Riemenantrieb',
    price: "4.199,00 €",
    category: "trekking",
    brand: "Conway",
  },
  {
    name: "HoheAcht Amola Terra",
    image: "/images/products/cache_18415265.png",
    specs: "Shimano Steps EP600 Motor, Shimano 630 Wh Akku, Schiebehilfe, Shimano Cues Kettenschaltung, Shimano Scheibenbremse, Shimano Steps Farbdisplay mit Bluetooth-Funktion",
    price: "4.999,00 €",
    category: "trekking",
    brand: "HoheAcht",
  },
  {
    name: "Victoria Tresalo 5",
    image: "/images/products/cache_18231476.png",
    specs: 'Bosch "Active Line Plus" Motor, Bosch 545 Wh Akku, Schiebehilfe, 7-Gang Shimano Nexus Nabenschaltung mit Rücktrittbremse, Shimano Scheibenbremsen, Bosch Purion 200 Farbdisplay',
    price: "2.999,00 €",
    category: "trekking",
    brand: "Victoria",
  },
  {
    name: "Victoria Tresalo 16",
    image: "/images/products/cache_16889545.JPG",
    specs: 'Bosch "Performance CX" Smart System Motor, Bosch 750 Wh Akku, Schiebehilfe, 11-Gang Sunrace Kettenschaltung, vollhydraulische Shimano Scheibenbremse, Bosch Kiox 300 Display',
    price: "2.999,00 €",
    oldPrice: "4.299,00 €",
    category: "trekking",
    brand: "Victoria",
  },
  {
    name: "Victoria Manoc 5",
    image: "/images/products/cache_18231480.png",
    specs: 'Bosch "Performance CX" Motor, Bosch 750 Wh Akku, Schiebehilfe, Enviolo Nabenschaltung, vollhydraulische Tektro Scheibenbremse, Bosch Kiox 300 Display, Gates Riemenantrieb',
    price: "3.599,00 €",
    oldPrice: "5.199,00 €",
    category: "trekking",
    brand: "Victoria",
  },
  {
    name: "HoheAcht Amola Aventuro",
    image: "/images/products/cache_18415502.png",
    specs: "Shimano Steps EP801 Motor, Shimano Steps 630 Wh Akku, Schiebehilfe, 14-Gang Rohloff Nabenschaltung mit Freilauf, vollhydraulische Hayes Scheibenbremse, Shimano Steps Farbdisplay mit Bluetooth-Funktion, LED Beleuchtung",
    price: "7.199,00 €",
    category: "trekking",
    brand: "HoheAcht",
  },
];

export const mtbProducts: Product[] = [
  {
    name: "Conway Cairon S 2.0",
    image: "/images/products/cache_17474899.png",
    specs: 'Bosch Smart System "Performance CX" Motor, Bosch 500 / 625 Wh Akku, Schiebehilfe, 9-Gang Tektro Kettenschaltung, vollhydraulische Tektro Scheibenbremse, Bosch Intuvia 100 Display',
    price: "3.099,00 € / 3.299,00 €",
    category: "mtb",
    brand: "Conway",
  },
  {
    name: "HoheAcht Sento Roko",
    image: "/images/products/cache_17474899.png",
    specs: 'Shimano Steps "DU-EP6" Motor, Shimano 504 Wh Akku, Schiebehilfe, 12-Gang Sram SX Eagle Kettenschaltung, vollhydraulische Shimano Scheibenbremse, Shimano Farbdisplay, inkl. Batteriebeleuchtung',
    price: "1.599,00 €",
    oldPrice: "3.999,00 €",
    category: "mtb",
    brand: "HoheAcht",
  },
  {
    name: "Conway eWME 5.9MX",
    image: "/images/products/cache_17474911.png",
    specs: 'Shimano Steps "EP800" Motor, Bosch 720 Wh Akku, Schiebehilfe, 12-Gang Shimano Deore XT Kettenschaltung, vollhydraulische Shimano Scheibenbremse, DT-Swiss SPLIN H 1900 Laufradsatz, Luftfederung',
    price: "5.699,00 €",
    category: "mtb",
    brand: "Conway",
  },
  {
    name: "Conway Ryvon LT 10.0",
    image: "/images/products/cache_17474915.png",
    specs: 'Bosch Smart System "Performance SX" Motor, Bosch 400 Wh Akku, Schiebehilfe, 12-Gang SRAM XO Eagle AXS Kettenschaltung, vollhydraulische TRP Scheibenbremse, Bosch LED Remote Display, ACROSS Enduro Carbon 29" Laufradsatz, FOX Luftfederung',
    price: "9.999,00 €",
    category: "mtb",
    brand: "Conway",
  },
];

export const kidsProducts: Product[] = [
  {
    name: "Conway Razz 2.0 Kids MTB",
    image: "/images/products/cache_17474899.png",
    specs: 'Leichtes Jugend-MTB, 7-Gang Shimano Kettenschaltung, Tektro V-Brake, erhältlich in 20" und 24"',
    price: "ab 449,95 €",
    category: "kids",
    brand: "Conway",
  },
  {
    name: "Conway Razz C 2.4 Kids MTB",
    image: "/images/products/cache_17474899.png",
    specs: 'Leichtes Jugend-MTB, 8-Gang Shimano Kettenschaltung, Tektro V-Brake, erhältlich in 20" und 24"',
    price: "ab 549,49 €",
    category: "kids",
    brand: "Conway",
  },
];

export const gravelProducts: Product[] = [
  {
    name: "Conway Nyvo 4",
    image: "/images/products/cache_18415236.png",
    specs: "24-Gang Shimano GRX Kettenschaltung, vollhydraulische Shimano Scheibenbremsen, Aluminium Rahmen, Carbon Gabel",
    price: "1.699,95 €",
    category: "gravel",
    brand: "Conway",
  },
  {
    name: "Conway Nyvo 10",
    image: "/images/products/cache_18415236.png",
    specs: "10-Gang Shimano GRX Kettenschaltung, vollhydraulische Shimano Scheibenbremsen, Carbon Rahmen, Carbon Gabel",
    price: "2.499,95 €",
    category: "gravel",
    brand: "Conway",
  },
  {
    name: "Conway Nyvo 12c",
    image: "/images/products/cache_18415236.png",
    specs: "24-Gang Shimano GRX Kettenschaltung, vollhydraulische Shimano Scheibenbremsen, Carbon Rahmen, Carbon Gabel, DT-Swiss Systemlaufradsatz, helle LED-Beleuchtung, Gepäckträger, Schutzbleche und Ständer",
    price: "3.199,95 €",
    category: "gravel",
    brand: "Conway",
  },
  {
    name: "Conway Nyvo 16",
    image: "/images/products/cache_18415236.png",
    specs: "13-Gang SRAM Force AXS Kettenschaltung, vollhydraulische SRAM Scheibenbremsen, Carbon Rahmen, Carbon Gabel, Newman Carbon System-Laufradsatz",
    price: "4.499,95 €",
    category: "gravel",
    brand: "Conway",
  },
  {
    name: "HoheAcht Lumo Ripio",
    image: "/images/products/cache_18415236.png",
    specs: "Mahle X35+ (40Nm) Motor, Mahle 250wh Akku, 11-Gang Shimano GRX 600 Kettenschaltung, vollhydraulische Shimano Scheibenbremsen, Carbon Gabel, MAVIC Allroad 700 Laufradsatz",
    price: "3.499,00 €",
    category: "e-gravel",
    brand: "HoheAcht",
  },
  {
    name: "Conway Nyvon 8.0",
    image: "/images/products/cache_18415236.png",
    specs: "Bosch Performance SX Motor, Bosch 400Wh Compacttube Akku, 10-Gang Shimano Cues Kettenschaltung, vollhydraulische Shimano Scheibenbremsen, Carbon Rahmen, Carbon Gabel",
    price: "3.999,95 €",
    category: "e-gravel",
    brand: "Conway",
  },
  {
    name: "Conway Nyvon 9.0",
    image: "/images/products/cache_18415236.png",
    specs: "Bosch Performance SX Motor, Bosch 400Wh Compacttube Akku, 12-Gang SRAM Apex Kettenschaltung, vollhydraulische SRAM Scheibenbremsen, Carbon Rahmen, Carbon Gabel, Mavic Allroad System-Laufradsatz",
    price: "4.399,95 €",
    category: "e-gravel",
    brand: "Conway",
  },
  {
    name: "Conway Nyvon 12.0",
    image: "/images/products/cache_18415236.png",
    specs: "Bosch Performance SX Motor, Bosch 400Wh Compacttube Akku, 13-Gang SRAM Rival AXS Kettenschaltung, vollhydraulische SRAM Scheibenbremsen, Carbon Rahmen, Carbon Gabel, Newman Performance System-Laufradsatz",
    price: "4.999,95 €",
    category: "e-gravel",
    brand: "Conway",
  },
];

export const leasingPartners = [
  { name: "JobRad", image: "/images/leasing/cache_16887430.png", url: "https://www.jobrad.org/" },
  { name: "BusinessBike", image: "/images/leasing/cache_16887431.png", url: "https://www.businessbike.de/" },
  { name: "Eurorad", image: "/images/leasing/cache_16887433.png", url: "https://www.eurorad.de/" },
  { name: "Company-Bike", image: "/images/leasing/cache_16887440.png", url: "https://www.company-bike.com/" },
  { name: "Rad im Dienst", image: "/images/leasing/cache_16887435.JPG", url: "https://www.radimdienst.de/" },
  { name: "Lease a Bike", image: "/images/leasing/cache_16887436.JPG", url: "https://www.leaseabike.de/" },
  { name: "eleasa", image: "/images/leasing/cache_18683276.png", url: "https://www.eleasa.de/dienstfahrrad/arbeitnehmer" },
  { name: "Bikeleasing", image: "/images/leasing/cache_18021913.png", url: "https://www.bikeleasing.de/" },
  { name: "Mein-Dienstrad", image: "/images/leasing/cache_18021915.png", url: "https://www.mein-dienstrad.de/" },
  { name: "FinanceaBike", image: "/images/leasing/cache_16887441.JPG", url: "https://www.financeabike.de/" },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "City / Urban", href: "/city-urban" },
  { label: "Trekking / SUV", href: "/trekking-suv" },
  { label: "MTB / Kids", href: "/mtb-kids" },
  { label: "Gravel / Rennrad", href: "/gravel-rennrad" },
  { label: "Leasing", href: "/leasing" },
  { label: "Kontakt", href: "/kontakt" },
];

export const contactInfo = {
  phone: "05441/9950044",
  mobile: "017622649706",
  email: "radschloss-diepholz@web.de",
  address: "Amtsweide 2, 49356 Diepholz",
  owner: "Max Borchering",
  title: "Zweiradmechanikermeister",
  ustId: "DE318353919",
  openingHours: [
    { day: "Dienstag", time: "14:00 – 18:00 Uhr" },
    { day: "Mittwoch", time: "14:00 – 18:00 Uhr" },
    { day: "Donnerstag", time: "14:00 – 18:00 Uhr" },
    { day: "Freitag", time: "14:00 – 18:00 Uhr" },
  ],
};
