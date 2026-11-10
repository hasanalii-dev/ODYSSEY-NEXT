import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { triggerHaptic } from '../../../utils/haptics';
import { useGsapParallax } from '../../../utils/useGsapParallax';
import './GalleryGridSection.css';

const YEARS = [
  'All Years',
  '2026 Edition',
  '2025 Edition',
  '2024 Edition',
];

const CATEGORIES = [
  'All Moments',
  'STEAMSCAPE',
  'Prototype Quest',
  'Photography Exhibition',
  'Gymnastics Display',
  'Pure Bazaar',
];

const GALLERY_ITEMS = [
  // ================= 2026 EDITION =================
  {
    id: '2026-steam-01',
    year: '2026',
    yearBadge: 'ODYSSEY 2026',
    category: 'STEAMSCAPE',
    title: 'Autonomous Robotics & Circuit Systems',
    subtitle: 'STEAM Flagship Exhibition 2026',
    src: 'https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/487769142_1107127921435173_6078268032149726610_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=PfDGcaAnTU8Q7kNvwHE8HSX&_nc_oc=AdoVFJVfKkaG-hQO1WIealkJp43EZnxffwtqjImecgE6zJkQFS7fqqnz_92XTwhCWUU&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=RSayBlILr40EA8drlHGwUw&_nc_ss=7b2a8&oh=00_AQRVXlyeAWqqqodJbiZ7VfKOsk8oa1MakMdBK2UTHfPBVQ&oe=6AF91CF2',
    aspect: 'panoramic',
    frameId: 'FRAME // 01',
    parallaxSpeed: 16,
  },
  {
    id: '2026-proto-01',
    year: '2026',
    yearBadge: 'ODYSSEY 2026',
    category: 'Prototype Quest',
    title: 'Rapid Engineering & Functional Prototyping',
    subtitle: 'The Big Fix Challenge 2026',
    src: 'https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/487758518_1107127648101867_6285843284761430893_n.jpg?stp=dst-jpg_tt6&cstp=mx1523x2048&ctp=s1523x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=VSLcOoaE69MQ7kNvwGGJKch&_nc_oc=AdrO9M6EBMT1Ir0fE6WEdDNgjmrGLFsRxhgfKKg5TrvsAFZNyXGkBtz2gheOXhIuIO4&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=4vsqQivI-vY5OJvprxk8Gw&_nc_ss=7b2a8&oh=00_AQStjKDaFRsxTVzTbWYbdN7fL5OUUQ9oeURiFS01fubKUg&oe=6AF91715',
    aspect: 'portrait',
    frameId: 'FRAME // 02',
    parallaxSpeed: 14,
  },
  {
    id: '2026-photo-01',
    year: '2026',
    yearBadge: 'ODYSSEY 2026',
    category: 'Photography Exhibition',
    title: 'Urban Architecture & Human Ecology',
    subtitle: 'What Would You Fix? 2026',
    src: 'https://scontent.fkhi6-1.fna.fbcdn.net/v/t39.30808-6/487519314_1107127994768499_3461325318965772925_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Kc8fhGW9ZkIQ7kNvwHVqKBZ&_nc_oc=Adp3ELZ9gE-FakCAWQ33ZQdERrt24pMMEy2HYw6d64nTCM5YYVvSY_zLMOXt0M7EY0U&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&_nc_gid=I7V5v8lY6Klr_hFLbQeBwA&_nc_ss=7b2a8&oh=00_AQSt5jcnJ0hls6-Tmtq5pA9bbAJL6A7NtNjGGRe3pIXvLA&oe=6AF8F929',
    aspect: 'landscape',
    frameId: 'FRAME // 03',
    parallaxSpeed: 18,
  },
  {
    id: '2026-gym-01',
    year: '2026',
    yearBadge: 'ODYSSEY 2026',
    category: 'Gymnastics Display',
    title: 'Athletic Motion & Adaptability Through Movement',
    subtitle: 'The Big Fix Through Movement 2026',
    src: 'https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/487917493_1107128011435164_3549777143798863380_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=ITesVTdc3DYQ7kNvwH0dedF&_nc_oc=Adq7r72Tg4Cd1GhVjUZmFx2W355I8TVzti9n3RxcMZ7SMNgwq4WMaxlLAFBbo1gLmLg&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=1iETFh6WyjbepBRuJmTXFw&_nc_ss=7b2a8&oh=00_AQTZNMD3-dG1gkEXPVj8_ssauF-LN-YQYPfeQkYZN9dr6A&oe=6AF91411',
    aspect: 'landscape',
    frameId: 'FRAME // 04',
    parallaxSpeed: 15,
  },
  {
    id: '2026-bazaar-01',
    year: '2026',
    yearBadge: 'ODYSSEY 2026',
    category: 'Pure Bazaar',
    title: 'Student Enterprise, Branding & Creative Marketplace',
    subtitle: 'Youth Innovation Enterprise 2026',
    src: 'https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/487461277_1107127624768536_2956459387362441883_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=pmPe3bRqA_8Q7kNvwHINUxB&_nc_oc=Adp899HqPuOpAIlalgYxZ2uUWpRuwjba_URZCBviIO2ylXseyjP9JWehBVV2Qo7Ko9A&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=i59pJXu5AIUg1e8TqhRoCg&_nc_ss=7b2a8&oh=00_AQQfa2p8HRqdhaDUYxd9bJ1iiVe1CwTn0ReMts7IPYDTLQ&oe=6AF92547',
    aspect: 'panoramic',
    frameId: 'FRAME // 05',
    parallaxSpeed: 17,
  },
  {
    id: '2026-proto-02',
    year: '2026',
    yearBadge: 'ODYSSEY 2026',
    category: 'Prototype Quest',
    title: 'Collaborative Design Sprint & Kinematic Testing',
    subtitle: 'Special Award Competition 2026',
    src: 'https://scontent.fkhi6-2.fna.fbcdn.net/v/t39.30808-6/487542115_1107127944768504_3941264642126644960_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=zaZbXQgyMngQ7kNvwG6hPO1&_nc_oc=Ado9s7x3vRxRyEPIJmA64aRObb_4vz5Mow2X-RJ-RhCmmOjy1L8UiALJuA47jEXHflA&_nc_zt=23&_nc_ht=scontent.fkhi6-2.fna&_nc_gid=A5hcGF852kzHZJWMUxycKw&_nc_ss=7b2a8&oh=00_AQSO5NI5WrR1Xmfx4LLOf3EGtA8GFhrxwwlyF8aj1prLJA&oe=6AF92955',
    aspect: 'landscape',
    frameId: 'FRAME // 06',
    parallaxSpeed: 18,
  },
  {
    id: '2026-steam-02',
    year: '2026',
    yearBadge: 'ODYSSEY 2026',
    category: 'STEAMSCAPE',
    title: 'Interactive Engineering Models & Environmental Solutions',
    subtitle: 'Applied Science Floor 2026',
    src: 'https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/487553805_1107127638101868_4048418912339009535_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=LVW8RjulnP4Q7kNvwE3wg1G&_nc_oc=Ado7QtNUplrNZvSPDopddEmvmxWSUx89w8e7jUNImmes2DuKcfjIFvAhefa7HMjmm2o&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=RYAZ3sStmpttEPy2ZHl4hw&_nc_ss=7b2a8&oh=00_AQRymq6v-ym0_o6NyNNZnlD45tdzsuHmVwDLQNrAaqhi4Q&oe=6AF91E38',
    aspect: 'landscape',
    frameId: 'FRAME // 07',
    parallaxSpeed: 15,
  },

  // ================= 2025 EDITION =================
  {
    id: '2025-steam-01',
    year: '2025',
    yearBadge: 'ODYSSEY 2025',
    category: 'STEAMSCAPE',
    title: 'Microcontroller Architecture & Sensor Integration',
    subtitle: 'Applied Technical Science 2025',
    src: 'https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/487793744_1107127968101835_8863822752964392907_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=lCL5Izur_4IQ7kNvwGepwGj&_nc_oc=AdromCoo37MjlxNUB_uxyofT5l2U09row2O8VoSUiZCfqQ4IlniUmrg2B-Lkv8hEviE&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=6lHMyiQvgEmi7Jv11QPGqg&_nc_ss=7b2a8&oh=00_AQTjmHX40559xxWCorM2zE6ft300ZIJkK_TUfZ9oNY0TQw&oe=6AF91773',
    aspect: 'panoramic',
    frameId: 'FRAME // 08',
    parallaxSpeed: 15,
  },
  {
    id: '2025-proto-01',
    year: '2025',
    yearBadge: 'ODYSSEY 2025',
    category: 'Prototype Quest',
    title: 'Clean Energy Aerodynamics & Kinetic Modelling',
    subtitle: 'Sustainable Engineering Sprint 2025',
    src: 'https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/488208814_1107127734768525_6223421835978815888_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1667&ctp=s2048x1667&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=I3b9zIhDeNgQ7kNvwHBY9AF&_nc_oc=AdrUhlD2lAXXjYcBeTR83g_gn-KB6joXtwd5qhZ4NUHzGOuRZCkO3BwvwrnVFxmTFVw&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=IynYUbXlk1l3GmDV3RwYAQ&_nc_ss=7b2a8&oh=00_AQQ9izSsp-P2CAMzUH3m7q8QrPLWEYBV9JcV0khGfafnlg&oe=6AF90C26',
    aspect: 'portrait',
    frameId: 'FRAME // 09',
    parallaxSpeed: 16,
  },
  {
    id: '2025-photo-01',
    year: '2025',
    yearBadge: 'ODYSSEY 2025',
    category: 'Photography Exhibition',
    title: 'Environmental Balance & Perspective Study',
    subtitle: 'What Would You Fix? 2025',
    src: 'https://scontent.fkhi6-1.fna.fbcdn.net/v/t39.30808-6/487754320_1107128488101783_3125534135546658295_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=f6mhCPwLgycQ7kNvwGEelBH&_nc_oc=Adrxd2CAk_kgFPPs-8m1B8a8mlCjQrg6D6hgdJXDDXCui_FRZwbc19zIny7sJsP45T8&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&_nc_gid=wd3f0sc2FY5qaA7MLMmRrw&_nc_ss=7b2a8&oh=00_AQQ1mkItY93ffT44X6lcM5yxkmlZscMG69eZQRlb31kw9g&oe=6AF90260',
    aspect: 'landscape',
    frameId: 'FRAME // 10',
    parallaxSpeed: 16,
  },
  {
    id: '2025-gym-01',
    year: '2025',
    yearBadge: 'ODYSSEY 2025',
    category: 'Gymnastics Display',
    title: 'Precision Kinematics, Balance & Kinetic Teamwork',
    subtitle: 'Synchronized Movement Showcase 2025',
    src: 'https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/487474648_1107128521435113_4943448668016538195_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=IGA0yYnT0CEQ7kNvwETZ7PH&_nc_oc=AdqOWMkU8r642lB-rMAZ241RtXEwV3_PR9RVfuWzyig9feAnJ0Eq-jpvNHMiu7X53d8&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=e1tp5aluiG6nCNimRgijWw&_nc_ss=7b2a8&oh=00_AQSdRxGldG80LR1HffY3rclH3N6LB93t05nFBJv6mBrnhg&oe=6AF92412',
    aspect: 'landscape',
    frameId: 'FRAME // 11',
    parallaxSpeed: 15,
  },
  {
    id: '2025-bazaar-01',
    year: '2025',
    yearBadge: 'ODYSSEY 2025',
    category: 'Pure Bazaar',
    title: 'Sustainable Merchandising & Prototype Showcase',
    subtitle: 'Student Entrepreneurship Floor 2025',
    src: 'https://scontent.fkhi6-1.fna.fbcdn.net/v/t39.30808-6/487463007_1107128438101788_4452423440890184352_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=sPQu6dCrM0QQ7kNvwHArTW9&_nc_oc=Adq7Yu1iBmTBi4SAG_P2AhMsCGlLEYaK4b8ddbjIGfz3d1vBJGUSv_MDXL4xi8ie750&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&_nc_gid=Q6AkSyXqp5jXhLv_WJOGrw&_nc_ss=7b2a8&oh=00_AQTvTeU2WEuPd6bLKzy8iuWetK-x1TTVphvgmiEN7VMxzw&oe=6AF912CD',
    aspect: 'panoramic',
    frameId: 'FRAME // 12',
    parallaxSpeed: 14,
  },
  {
    id: '2025-steam-02',
    year: '2025',
    yearBadge: 'ODYSSEY 2025',
    category: 'STEAMSCAPE',
    title: 'Hands-on Scientific Inquiry & Discovery Labs',
    subtitle: 'Nexter\'s Interactive Exhibition 2025',
    src: 'https://scontent.fkhi6-1.fna.fbcdn.net/v/t39.30808-6/487493598_1107128458101786_8580945477984565311_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=G5s58MBB2eAQ7kNvwEyHIyu&_nc_oc=Adqe81SJPbjCT3uD5NXvIJxBahzX4MWIN3X395gG28dx4ExHNZDSUw4hBLMfhez5jis&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&_nc_gid=_mhvdSLdQtX3e_-Od4kNuw&_nc_ss=7b2a8&oh=00_AQRddhS2hQi5wLppbiGSzcCFjaWmqmFv_8sK7yqa43TDNQ&oe=6AF91C0D',
    aspect: 'landscape',
    frameId: 'FRAME // 13',
    parallaxSpeed: 17,
  },
  {
    id: '2025-proto-02',
    year: '2025',
    yearBadge: 'ODYSSEY 2025',
    category: 'Prototype Quest',
    title: 'Mechanical Design & Rapid Solution Sprint',
    subtitle: 'Prototyping Proving Ground 2025',
    src: 'https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/488004398_1107128444768454_6096448369290316371_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=uMyNqv03Yj8Q7kNvwH5kDhP&_nc_oc=Adqo9uG4PgP3Rm_oMNrguNV1tK5F_JwYFKTQB7Vv8ItaBjK-_qFWjoDcaj0TUbDVL-U&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=I-oI44j1vkjjvoG-ji9-VQ&_nc_ss=7b2a8&oh=00_AQSVB7aePjp5u0Oeb42nyZm8JemltDuWBoSPgUBHkQZ90w&oe=6AF8FACD',
    aspect: 'landscape',
    frameId: 'FRAME // 14',
    parallaxSpeed: 15,
  },

  // ================= 2024 EDITION =================
  {
    id: '2024-steam-01',
    year: '2024',
    yearBadge: 'ODYSSEY 2024',
    category: 'STEAMSCAPE',
    title: 'Inaugural Robotics Arena & Robotic Manipulators',
    subtitle: 'Odyssey STEAM Launch 2024',
    src: 'https://scontent.fkhi6-2.fna.fbcdn.net/v/t39.30808-6/487749145_1107128441435121_5239530494688517532_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=d0v4aepI_tcQ7kNvwF2_fZo&_nc_oc=AdqBGvHH_2VzDaBWM3jwmcuiTci6mwuAslTnCHos51jXDR1DS-cqjcTMQQbey0JXd0w&_nc_zt=23&_nc_ht=scontent.fkhi6-2.fna&_nc_gid=reeOU_GdRcIIGWa9Y0RNXw&_nc_ss=7b2a8&oh=00_AQTuKT1sfLbEb-hDGB0dBqeOVcZS6-h3lE6m8dBMcTbiEg&oe=6AF92D66',
    aspect: 'panoramic',
    frameId: 'FRAME // 15',
    parallaxSpeed: 15,
  },
  {
    id: '2024-proto-01',
    year: '2024',
    yearBadge: 'ODYSSEY 2024',
    category: 'Prototype Quest',
    title: 'Structural Tensile Modelling & Load Testing',
    subtitle: 'Inaugural Design Sprint 2024',
    src: 'https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/487730320_1107128544768444_6570104885151057714_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=YGd1Q2S2g6AQ7kNvwFa1QOI&_nc_oc=Ado4mXyjhsGikuGL8E7VPSeMcZAWL20ft6uiBuHlZXvt3NjkzWMrhTJQiYcAswbBlWw&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=2ohD44y1jxo9fo6-8QCDHQ&_nc_ss=7b2a8&oh=00_AQRpocAt7z69xXqQbUSrCHGuKiwwVz3a3FzuaoUmyd5rSA&oe=6AF911D6',
    aspect: 'portrait',
    frameId: 'FRAME // 16',
    parallaxSpeed: 16,
  },
  {
    id: '2024-photo-01',
    year: '2024',
    yearBadge: 'ODYSSEY 2024',
    category: 'Photography Exhibition',
    title: 'Portraits of Everyday Community Solutions',
    subtitle: 'What Would You Fix? Debut 2024',
    src: 'https://scontent.fkhi6-1.fna.fbcdn.net/v/t39.30808-6/487752117_1107128584768440_8502172160388442901_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Yoq5qOdyNrcQ7kNvwHEL7w-&_nc_oc=Adqn9ihJzhWCr_ickw146MtcWrMyiQX4Nz3hCR5uYmiBQSpOo37m7afUNjrHLwuG0wk&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&_nc_gid=O9jlAQZftyijRtbfptxlDw&_nc_ss=7b2a8&oh=00_AQS1mqdRClOVAEyCsDeXGDZ_KrvOl-0-i-N7IrN6WGbl_A&oe=6AF90B47',
    aspect: 'landscape',
    frameId: 'FRAME // 17',
    parallaxSpeed: 18,
  },
  {
    id: '2024-gym-01',
    year: '2024',
    yearBadge: 'ODYSSEY 2024',
    category: 'Gymnastics Display',
    title: 'Foundational Floor Acrobatics & Balance Formations',
    subtitle: 'Athletic Expression Showcase 2024',
    src: 'https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/487992761_1107128524768446_5769045422144442640_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=4wjYvLnIIRgQ7kNvwH15jO2&_nc_oc=AdpXo_ErDyABQOOzCLiLw4asIGunTrwHfGp7Hu50JUe9RL6nOCSY2nRrzpKKWZo1VD4&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=3IjyiCyMjAXiO7V1vPptSQ&_nc_ss=7b2a8&oh=00_AQSzmzQ1ezORTY5_m3CcGdGTFzW1U7IzYidt6kb0qB3xyQ&oe=6AF92A02',
    aspect: 'portrait',
    frameId: 'FRAME // 18',
    parallaxSpeed: 14,
  },
  {
    id: '2024-bazaar-01',
    year: '2024',
    yearBadge: 'ODYSSEY 2024',
    category: 'Pure Bazaar',
    title: 'Inaugural Pure Bazaar Student Commercial Hub',
    subtitle: 'Creative Enterprise Floor 2024',
    src: 'https://scontent.fkhi6-2.fna.fbcdn.net/v/t39.30808-6/487461274_1107128624768436_1096618036344573762_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=hQTCaqLvfroQ7kNvwFrnvJa&_nc_oc=Adoip2LuOzO9IhYL1W8mmcgMz1-Nk1nRm7ASBCWJ9745fxCZSABbPmMP-G1iJY8at3M&_nc_zt=23&_nc_ht=scontent.fkhi6-2.fna&_nc_gid=S0OH9-hUouSJOYnoaVXWWQ&_nc_ss=7b2a8&oh=00_AQST1D4GC7Aq8zB7JDVoehxVMEpDYT7BGpW0gM5LkB30yA&oe=6AF8FF1E',
    aspect: 'panoramic',
    frameId: 'FRAME // 19',
    parallaxSpeed: 16,
  },
  {
    id: '2024-steam-02',
    year: '2024',
    yearBadge: 'ODYSSEY 2024',
    category: 'STEAMSCAPE',
    title: 'Circuit Boards, Soldering & Electronic Synthesis',
    subtitle: 'Hardware Prototyping Lab 2024',
    src: 'https://scontent.fkhi6-1.fna.fbcdn.net/v/t39.30808-6/488005643_1107127728101859_1908031332342939555_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_ohc=z5L3KETSF24Q7kNvwE63P4w&_nc_oc=AdoE58HB9MmNCj8p45pNj8UjDPGcpYqN_NRc6s8I96ZIBp7-zqSZHpx_HJr0ix5jOK0&_nc_zt=23&_nc_ht=scontent.fkhi6-1.fna&_nc_gid=QdBh7DoSTyCCYfDZSRChpg&_nc_ss=7b2a8&oh=00_AQRqS5RZQpVZEyEkm3aIOLpcbNet_2l8Auk8bqGZrw_c9A&oe=6AF9047D',
    aspect: 'landscape',
    frameId: 'FRAME // 20',
    parallaxSpeed: 15,
  },
];

/**
 * Individual Gallery Card with Dedicated Skeleton Loader & GSAP Parallax Scrub
 */
const GalleryCard = ({ item, onOpenLightbox }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const parallaxImgRef = useGsapParallax(item.parallaxSpeed || 15, 1);

  return (
    <div className={`gallery-card-item ${item.aspect}`} onClick={() => onOpenLightbox(item)}>
      {/* 1. Rectangular Visual Window (Parallax viewport with Skeleton) */}
      <div className="gallery-card-viewport">
        {/* Shimmering Obsidian Skeleton Loader */}
        {!isLoaded && <div className="gallery-skeleton-shimmer" />}

        {/* Parallax Image element */}
        <img
          ref={parallaxImgRef}
          src={item.src}
          alt={item.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`gallery-parallax-image ${isLoaded ? 'is-loaded' : 'is-loading'}`}
        />

        {/* Subtle Specular Vignette Scrim */}
        <div className="gallery-card-scrim" />

        {/* Hover Zoom Icon Indicator */}
        <div className="gallery-zoom-pill" aria-hidden="true">
          <Maximize2 size={16} />
        </div>
      </div>

      {/* 2. Structured Editorial Information Block (Clean Spacing, NO overlap) */}
      <div className="gallery-card-details">
        {/* Category Pill Tag */}
        <div className="gallery-meta-row">
          <span className="gallery-cat-badge">{item.category}</span>
        </div>

        {/* Editorial Title */}
        <h3 className="gallery-card-title">{item.title}</h3>

        {/* Subtitle */}
        <p className="gallery-card-subtitle">{item.subtitle}</p>
      </div>
    </div>
  );
};

export const GalleryGridSection = () => {
  const [activeYear, setActiveYear] = useState('All Years');
  const [activeCategory, setActiveCategory] = useState('All Moments');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesYear =
      activeYear === 'All Years' || item.year === activeYear.split(' ')[0];
    const matchesCategory =
      activeCategory === 'All Moments' || item.category === activeCategory;
    return matchesYear && matchesCategory;
  });

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectYear = (year) => {
    triggerHaptic('selection');
    setActiveYear(year);
  };

  const handleSelectCategory = (category) => {
    triggerHaptic('selection');
    setActiveCategory(category);
  };

  const handleOpenLightbox = (item) => {
    triggerHaptic('pop');
    setSelectedImage(item);
  };

  const handleNavigateLightbox = (direction) => {
    if (!selectedImage) return;
    triggerHaptic('selection');
    const currentIndex = filteredItems.findIndex((img) => img.id === selectedImage.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = filteredItems.length - 1;
    if (nextIndex >= filteredItems.length) nextIndex = 0;
    setSelectedImage(filteredItems[nextIndex]);
  };

  return (
    <section className="gallery-grid-section" id="explore">
      <div className="gallery-grid-container">
        {/* Section Header: Section 3 Title */}
        <div className="gallery-section-header">
          <div className="gallery-section-eyebrow">
            <span className="gallery-eyebrow-dot" />
            <span>3-YEAR HISTORICAL VISUAL ARCHIVE</span>
          </div>

          <h2 className="gallery-section-title">
            Explore the <span className="gallery-section-title-accent">Gallery</span>
          </h2>
        </div>

        {/* Year Filter Controls: Past 3 Years Archive */}
        <div className="gallery-year-bar" role="tablist" aria-label="Odyssey Edition Years">
          {YEARS.map((yearOption) => {
            const isActive = activeYear === yearOption;
            return (
              <button
                key={yearOption}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelectYear(yearOption)}
                className={`gallery-year-pill ${isActive ? 'active' : ''}`}
              >
                <span>{yearOption}</span>
              </button>
            );
          })}
        </div>

        {/* Minimalist Dark Glass Category Filter Bar */}
        <div className="gallery-filter-bar" role="tablist" aria-label="Gallery Categories">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelectCategory(category)}
                className={`gallery-filter-pill ${isActive ? 'active' : ''}`}
              >
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Visual Exhibition Grid with Parallax & Skeleton Loaders */}
        <div className="gallery-masonry-grid">
          {filteredItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onOpenLightbox={handleOpenLightbox}
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          FULL-SCREEN DARK GLASS LIGHTBOX MODAL
          ========================================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="gallery-lightbox-content"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="gallery-lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close fullscreen view"
              >
                <X size={20} />
              </button>

              {/* Lightbox Stage with Nav Arrows */}
              <div className="gallery-lightbox-stage">
                <button
                  className="gallery-lightbox-arrow prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigateLightbox(-1);
                  }}
                  aria-label="Previous photograph"
                >
                  <ChevronLeft size={24} />
                </button>

                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="gallery-lightbox-img"
                />

                <button
                  className="gallery-lightbox-arrow next"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigateLightbox(1);
                  }}
                  aria-label="Next photograph"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Lightbox Metadata Bar */}
              <div className="gallery-lightbox-meta">
                <div className="gallery-lightbox-tags">
                  <span className="gallery-lightbox-category">{selectedImage.category}</span>
                </div>
                <h3 className="gallery-lightbox-title">{selectedImage.title}</h3>
                <p className="gallery-lightbox-subtitle">{selectedImage.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
