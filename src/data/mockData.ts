// Mock data for regions, cities, and shelters

export interface Region {
  id: string;
  name_ar: string;
  slug: string;
  icon: string;
  cityCount: number;
  shelterCount: number;
}

export interface City {
  id: string;
  region_id: string;
  name_ar: string;
  slug: string;
  shelterCount: number;
}

export interface Shelter {
  id: string;
  city_id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  address_text: string;
  is_verified: boolean;
  created_at: string;
}

export const regions: Region[] = [
  { id: "1", name_ar: "الشمال", slug: "north", icon: "🏔️", cityCount: 8, shelterCount: 24 },
  { id: "2", name_ar: "الجنوب", slug: "south", icon: "🏜️", cityCount: 6, shelterCount: 18 },
  { id: "3", name_ar: "الضفة الغربية", slug: "west-bank", icon: "🏘️", cityCount: 10, shelterCount: 32 },
  { id: "4", name_ar: "القدس", slug: "jerusalem", icon: "🕌", cityCount: 5, shelterCount: 15 },
];

export const cities: City[] = [
  { id: "c1", region_id: "1", name_ar: "الناصرة", slug: "nazareth", shelterCount: 5 },
  { id: "c2", region_id: "1", name_ar: "أم الفحم", slug: "umm-al-fahm", shelterCount: 4 },
  { id: "c3", region_id: "1", name_ar: "سخنين", slug: "sakhnin", shelterCount: 3 },
  { id: "c4", region_id: "1", name_ar: "عرابة", slug: "arraba", shelterCount: 3 },
  { id: "c5", region_id: "1", name_ar: "طمرة", slug: "tamra", shelterCount: 3 },
  { id: "c6", region_id: "1", name_ar: "شفاعمرو", slug: "shfaram", shelterCount: 3 },
  { id: "c7", region_id: "1", name_ar: "كفر كنا", slug: "kafr-kanna", shelterCount: 2 },
  { id: "c8", region_id: "1", name_ar: "عكا", slug: "akka", shelterCount: 1 },
  { id: "c9", region_id: "2", name_ar: "رهط", slug: "rahat", shelterCount: 5 },
  { id: "c10", region_id: "2", name_ar: "النقب", slug: "negev", shelterCount: 4 },
  { id: "c11", region_id: "2", name_ar: "حورة", slug: "hura", shelterCount: 3 },
  { id: "c12", region_id: "2", name_ar: "تل السبع", slug: "tel-sheva", shelterCount: 3 },
  { id: "c13", region_id: "2", name_ar: "اللقية", slug: "laqiya", shelterCount: 2 },
  { id: "c14", region_id: "2", name_ar: "كسيفة", slug: "kuseife", shelterCount: 1 },
  { id: "c15", region_id: "3", name_ar: "نابلس", slug: "nablus", shelterCount: 6 },
  { id: "c16", region_id: "3", name_ar: "الخليل", slug: "hebron", shelterCount: 5 },
  { id: "c17", region_id: "3", name_ar: "رام الله", slug: "ramallah", shelterCount: 5 },
  { id: "c18", region_id: "3", name_ar: "بيت لحم", slug: "bethlehem", shelterCount: 4 },
  { id: "c19", region_id: "3", name_ar: "جنين", slug: "jenin", shelterCount: 4 },
  { id: "c20", region_id: "3", name_ar: "طولكرم", slug: "tulkarem", shelterCount: 3 },
  { id: "c21", region_id: "3", name_ar: "قلقيلية", slug: "qalqilya", shelterCount: 2 },
  { id: "c22", region_id: "3", name_ar: "أريحا", slug: "jericho", shelterCount: 2 },
  { id: "c23", region_id: "3", name_ar: "سلفيت", slug: "salfit", shelterCount: 1 },
  { id: "c24", region_id: "4", name_ar: "البلدة القديمة", slug: "old-city", shelterCount: 4 },
  { id: "c25", region_id: "4", name_ar: "شعفاط", slug: "shuafat", shelterCount: 3 },
  { id: "c26", region_id: "4", name_ar: "سلوان", slug: "silwan", shelterCount: 3 },
  { id: "c27", region_id: "4", name_ar: "العيسوية", slug: "issawiya", shelterCount: 3 },
  { id: "c28", region_id: "4", name_ar: "جبل المكبر", slug: "jabal-mukaber", shelterCount: 2 },
];

export const shelters: Shelter[] = [
  { id: "s1", city_id: "c1", name: "ملجأ مدرسة الناصرة", description: "ملجأ عام في مدرسة الناصرة الثانوية", latitude: 32.7019, longitude: 35.3038, address_text: "شارع الناصرة الرئيسي", is_verified: true, created_at: "2024-01-15" },
  { id: "s2", city_id: "c1", name: "ملجأ البلدية", description: "ملجأ تابع لبلدية الناصرة", latitude: 32.7005, longitude: 35.2970, address_text: "بالقرب من مبنى البلدية", is_verified: true, created_at: "2024-01-20" },
  { id: "s3", city_id: "c1", name: "ملجأ حي الروم", description: "ملجأ في حي الروم الأرثوذكس", latitude: 32.7030, longitude: 35.3010, address_text: "حي الروم، الناصرة", is_verified: true, created_at: "2024-02-01" },
  { id: "s4", city_id: "c2", name: "ملجأ المركز الجماهيري", description: "ملجأ في المركز الجماهيري", latitude: 32.5166, longitude: 35.1500, address_text: "وسط أم الفحم", is_verified: true, created_at: "2024-01-18" },
  { id: "s5", city_id: "c2", name: "ملجأ حي الأغبارية", description: "ملجأ محلي في حي الأغبارية", latitude: 32.5200, longitude: 35.1530, address_text: "حي الأغبارية", is_verified: false, created_at: "2024-03-01" },
  { id: "s6", city_id: "c9", name: "ملجأ مجلس رهط", description: "ملجأ عام تابع للمجلس المحلي", latitude: 31.3926, longitude: 34.7542, address_text: "مبنى المجلس المحلي", is_verified: true, created_at: "2024-01-25" },
  { id: "s7", city_id: "c15", name: "ملجأ جامعة النجاح", description: "ملجأ في حرم جامعة النجاح الوطنية", latitude: 32.2211, longitude: 35.2544, address_text: "حرم الجامعة القديم", is_verified: true, created_at: "2024-02-10" },
  { id: "s8", city_id: "c17", name: "ملجأ بلدية رام الله", description: "ملجأ مركزي في رام الله", latitude: 31.9038, longitude: 35.2034, address_text: "وسط المدينة", is_verified: true, created_at: "2024-02-15" },
  { id: "s9", city_id: "c24", name: "ملجأ باب العامود", description: "ملجأ بالقرب من باب العامود", latitude: 31.7831, longitude: 35.2294, address_text: "باب العامود، البلدة القديمة", is_verified: true, created_at: "2024-01-30" },
  { id: "s10", city_id: "c16", name: "ملجأ الحرم الإبراهيمي", description: "ملجأ قريب من الحرم", latitude: 31.5246, longitude: 35.1107, address_text: "البلدة القديمة، الخليل", is_verified: true, created_at: "2024-02-20" },
];

export function getCitiesByRegion(regionId: string): City[] {
  return cities.filter(c => c.region_id === regionId);
}

export function getSheltersByCity(cityId: string): Shelter[] {
  return shelters.filter(s => s.city_id === cityId);
}

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find(r => r.slug === slug);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function getShelterById(id: string): Shelter | undefined {
  return shelters.find(s => s.id === id);
}

export function getVerifiedShelters(): Shelter[] {
  return shelters.filter(s => s.is_verified);
}
