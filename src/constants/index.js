import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UX Researcher",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
];

const experiences = [
  {
    title: "Big Data Analyst",
    company_name: "Inixindo Jogja",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Juli 2024 - September 2024",
    points: [
      "Data Resources, melakukan survey pelanggan, laporan harian, dan database internal",
      "Data Visualization, pembuatan grafik dan diagram berdasarkan analisis temuan",
      "Data Pattern Recognition, identifikasi permintaan costumer,analisis korelasi , dan prediksi",
      "Data Mining, Mengumpulkan data dari sistem basis data internal, file log, survei, media sosial, dan platform",
      
    ],
  },
];

const testimonials = [

];

const projects = [
  {
    name: "Pemesanan Tiket Pendakian",
    description:
      "Website Pemesanan Tiket Pendakian Gunung Sindoro adalah platform digital yang memudahkan calon pendaki untuk memesan tiket secara online. Aplikasi ini menawarkan fitur seperti pemilihan tanggal pendakian, pilihan jalur pendakian, pembayaran tiket yang aman, serta informasi detail mengenai persyaratan dan regulasi pendakian.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sobat Tani",
    description:
      "Sobat Tani adalah aplikasi inovatif yang dirancang untuk membantu para petani dan generasi muda dalam mengoptimalkan kegiatan pertanian dengan teknik dan teknologi modern. Aplikasi ini menyediakan berbagai fitur seperti panduan praktik pertanian berkelanjutan, akses informasi cuaca terkini, harga pasar komoditas, dan tips manajemen lahan.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "HydrateX",
    description:
      "Aplikasi ini memantau jumlah cairan yang dikonsumsi dan memberikan rekomendasi yang dipersonalisasi berdasarkan data seperti usia, berat badan, aktivitas fisik, dan cuaca. Fitur notifikasi cerdas mengingatkan pengguna untuk minum air pada waktu yang tepat, sementara analisis data visual membantu memahami pola hidrasi harian.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "reactnative",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
