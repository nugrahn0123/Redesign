import type { ReactElement } from "react";
import { PwReveal } from "@/components/payway/pw-reveal";

/* ---- ikon lucide inline (verbatim dari markup) ---- */

const sparklesIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-sparkles w-4 h-4 text-[#198F38] fill-[#198F38]"
  >
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" />
    <path d="M22 5h-4" />
    <path d="M4 17v2" />
    <path d="M5 18H3" />
  </svg>
);

const zapIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-zap w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </svg>
);

const globeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-globe w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const chartColumnIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chart-column w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const shieldCheckIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-shield-check w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const usersIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-users w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const creditCardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-credit-card w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const smartphoneIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-smartphone w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const walletIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-wallet w-[22px] h-[22px] text-[#198F38] fill-[#198F3810]"
  >
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
  </svg>
);

const arrowUpRightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-up-right w-3 h-3 text-[#042718]"
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

/* ---- data konten (verbatim dari markup) ---- */

type PwFeatureBullet = {
  icon: ReactElement;
  lead: string;
  rest: string;
};

type PwFeature = {
  /** offset sticky-stack per kartu */
  stickyTop: string;
  label: string;
  title: string;
  shortDescription: string;
  description: string;
  bullets: PwFeatureBullet[];
  imageSrc: string;
  imageAlt: string;
};

const PW_FEATURES: PwFeature[] = [
  {
    stickyTop: "top-[60px] md:top-[80px]",
    label: "EduDigi",
    title: "EduDigi",
    shortDescription:
      "Belajar menggunakan layanan digital dengan aman, bijak, dan bertanggung jawab.",
    description:
      "EduDigi merupakan program edukasi pada aplikasi SAKU SULTAN yang dirancang untuk meningkatkan pengetahuan dan keterampilan digital para mitra serta masyarakat. Program ini menyajikan pembelajaran yang praktis dan mudah dipahami, khususnya mengenai penggunaan layanan keuangan digital secara bijak, aman, dan bertanggung jawab.\n\nMelalui EduDigi, pengguna dapat mempelajari cara bertransaksi digital, menjaga kerahasiaan PIN dan kode OTP, melindungi data pribadi, mengenali modus penipuan daring, serta memanfaatkan teknologi untuk mengembangkan usaha.\n\nKehadiran EduDigi menegaskan bahwa SAKU SULTAN tidak hanya menyediakan layanan transaksi, tetapi juga turut membangun masyarakat yang semakin cakap dan aman di era digital.\n\nEduDigi — Belajar Digital, Bertransaksi Aman, Usaha Makin Berkembang.",
    bullets: [
      {
        icon: zapIcon,
        lead: "Belajar layanan digital",
        rest: "Materi praktis dan mudah dipahami untuk mitra serta masyarakat.",
      },
      {
        icon: globeIcon,
        lead: "Bertransaksi dengan aman",
        rest: "Pelajari cara menjaga PIN, OTP, dan data pribadi.",
      },
      {
        icon: chartColumnIcon,
        lead: "Mendukung perkembangan usaha",
        rest: "Manfaatkan teknologi untuk mengembangkan usaha di era digital.",
      },
    ],
    imageSrc: "/images/payway/Edudigi.png",
    imageAlt: "EduDigi",
  },
  {
    stickyTop: "top-[80px] md:top-[100px]",
    label: "PASSOLO",
    title: "PASSOLO",
    shortDescription:
      "Kirim tanda kasih untuk acara pernikahan dan kegiatan sosial secara praktis.",
    description:
      "PASSOLO merupakan fitur yang mengangkat tradisi masyarakat Sulawesi Selatan dalam memberikan sumbangan atau tanda kasih pada acara pernikahan dan kegiatan sosial lainnya ke dalam layanan digital.\n\nMelalui fitur ini, pengguna dapat mengirim passolo secara lebih mudah, cepat, dan praktis melalui aplikasi SAKU SULTAN, meskipun tidak sempat hadir langsung di lokasi acara. Transaksi juga dapat tercatat dengan rapi sehingga lebih mudah diperiksa kembali.\n\nKehadiran PASSOLO menjadi bentuk perpaduan antara kearifan lokal dan teknologi — melestarikan budaya saling membantu sekaligus menyesuaikannya dengan kebutuhan masyarakat masa kini.\n\nPASSOLO — Tradisi Tetap Terjaga, Berbagi Jadi Lebih Mudah.",
    bullets: [
      {
        icon: zapIcon,
        lead: "Kirim tanda kasih",
        rest: "Berikan passolo untuk acara pernikahan dan kegiatan sosial lainnya.",
      },
      {
        icon: shieldCheckIcon,
        lead: "Tetap terhubung",
        rest: "Kirim passolo meskipun tidak sempat hadir langsung di lokasi acara.",
      },
      {
        icon: usersIcon,
        lead: "Tercatat dengan rapi",
        rest: "Periksa kembali riwayat transaksi dengan lebih mudah.",
      },
    ],
    imageSrc: "/images/payway/Passolo.jpeg",
    imageAlt: "PasSolo",
  },
  {
    stickyTop: "top-[100px] md:top-[120px]",
    label: "QTRA",
    title: "QTRA",
    shortDescription:
      "Transfer dana lebih cepat, praktis, dan aman melalui aplikasi SAKU SULTAN.",
    description:
      "QTRA atau Quick Transfer merupakan fitur transfer cepat pada aplikasi SAKU SULTAN yang dirancang untuk memudahkan pengguna mengirim dana secara praktis, aman, dan efisien melalui satu aplikasi.\n\nDengan QTRA, pengguna dapat melakukan transfer tanpa harus melalui proses yang panjang. Cukup memilih tujuan transfer, memasukkan nominal, memeriksa kembali data penerima, lalu mengonfirmasi transaksi. Fitur ini membantu pengguna menghemat waktu dalam memenuhi kebutuhan transaksi sehari-hari.\n\nQTRA memberikan beberapa manfaat utama:\n• Proses transfer lebih cepat dan sederhana.\n• Transaksi dapat dilakukan kapan saja melalui ponsel.\n• Mengurangi kesalahan dengan halaman konfirmasi data penerima.\n• Riwayat transaksi tersimpan sehingga mudah diperiksa kembali.\n• Mendukung kebutuhan pribadi maupun aktivitas usaha Mitra SAKU SULTAN.\n\nQTRA menjadi bagian dari komitmen SAKU SULTAN dalam menghadirkan layanan keuangan digital yang mudah digunakan oleh masyarakat. Kehadirannya diharapkan dapat mempercepat perputaran transaksi, mendukung kegiatan usaha para mitra, serta memperluas kebiasaan bertransaksi secara digital.\n\nQTRA — Quick Transfer: Kirim dana lebih cepat, praktis, dan aman bersama SAKU SULTAN.\n\nCatatan: tujuan transfer, biaya layanan, batas nominal, dan waktu pemrosesan mengikuti ketentuan resmi yang berlaku pada aplikasi SAKU SULTAN.",
    bullets: [
      {
        icon: creditCardIcon,
        lead: "Proses cepat dan sederhana",
        rest: "Pilih tujuan, masukkan nominal, periksa data, lalu konfirmasi.",
      },
      {
        icon: smartphoneIcon,
        lead: "Transfer kapan saja",
        rest: "Kirim dana melalui ponsel untuk kebutuhan pribadi maupun usaha.",
      },
      {
        icon: chartColumnIcon,
        lead: "Riwayat mudah diperiksa",
        rest: "Konfirmasi penerima dan riwayat transaksi membantu mengurangi kesalahan.",
      },
    ],
    imageSrc: "/images/payway/Q-tra.png",
    imageAlt: "Q-tra",
  },
];

/* ---- sub-komponen kartu fitur (struktur identik antar blok) ---- */

function FeatureBlock({ feature, index }: { feature: PwFeature; index: number }) {
  const flip = index % 2 === 1;
  return (
    <PwReveal
      className={`pw-feature-card sticky w-full max-w-[1248px] bg-[#F6FDFF] border border-[#04271803] rounded-[30px] shadow-[0_8px_20px_0_rgba(4,39,24,0.04)] overflow-hidden ${feature.stickyTop}`}
    >
      {/* Nomor raksasa serif sebagai aksen latar */}
      <span
        aria-hidden="true"
        className={`pointer-events-none select-none absolute -top-8 md:-top-12 ${flip ? "left-4 md:left-10" : "right-4 md:right-10"} [font-family:var(--pw-font-serif)] italic text-[120px] md:text-[200px] leading-none text-[#198F380D]`}
      >
        0{index + 1}
      </span>
      <div className={`flex flex-col ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} items-start gap-8 md:gap-14 px-6 md:px-14 pt-8 md:pt-12 pb-0`}>
        <div className="w-full lg:w-[572px] pt-4 md:pt-[32px] flex flex-col gap-6 md:gap-8 shrink-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 bg-[#198F380F] pl-[14px] pr-[16px] py-[6px] rounded-full border border-[#198F381A] w-fit mb-4">
              {sparklesIcon}
              <span className="font-sans font-normal text-base text-[#198F38] tracking-[-0.3px]">
                {feature.label}
              </span>
            </div>
            <h4 className="max-w-[432px] font-semibold text-[32px] md:text-[42px] leading-[38px] md:leading-[48px] tracking-[-1.2px] md:tracking-[-2px] text-[#042718] mb-3">
              {feature.title}
            </h4>
            <p className="max-w-[508px] font-sans text-base leading-7 text-[#042718cc]">
              {feature.shortDescription}
            </p>
          </div>
          <div className="flex flex-col gap-4 md:gap-5 w-full lg:w-[572px]">
            {feature.bullets.map((bullet, index) => (
              <div key={bullet.lead} className="flex flex-col gap-4 md:gap-5">
                <div className="flex gap-4 items-start w-full">
                  <div className="w-10 h-10 rounded-full border border-[#0427181a] flex items-center justify-center shrink-0">
                    {bullet.icon}
                  </div>
                  <div className="flex flex-col">
                    <p className="font-sans text-lg leading-[28px] text-[#042718cc] max-w-[508px]">
                      <span className="font-medium text-[#042718]">{bullet.lead}</span> {bullet.rest}
                    </p>
                  </div>
                </div>
                {index < feature.bullets.length - 1 && (
                  <div className="h-[1px] w-full bg-[#04271810]" />
                )}
              </div>
            ))}
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.saku_sultan"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center bg-[#042718] border border-[#0427180f] rounded-full overflow-hidden transition-all duration-300 h-[44px] w-fit mt-2 md:mt-0 mb-8 md:mb-16"
          >
            <div className="absolute right-[6px] w-8 h-8 bg-white rounded-full flex items-center justify-center z-10">
              {arrowUpRightIcon}
            </div>
            <span className="block pl-[18px] pr-[46px] font-sans font-medium text-base leading-6 tracking-[-0.3px] text-white whitespace-nowrap">
              Download Aplikasi
            </span>
          </a>
        </div>
        <div className="w-full lg:w-[508px] h-[280px] md:h-[360px] lg:h-auto lg:self-stretch relative flex justify-center items-center lg:pb-10">
          <PwReveal className="relative w-full h-full flex items-center justify-center" delay={200}>
            <div
              className={`absolute inset-x-2 inset-y-4 rounded-[28px] bg-gradient-to-br from-[#198F3821] via-[#D6EFFF59] to-[#198F380a] ${flip ? "-rotate-3" : "rotate-3"}`}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={feature.imageAlt}
              loading="lazy"
              decoding="async"
              className={`relative max-h-full max-w-full object-contain rounded-[20px] shadow-[0_16px_36px_0_rgba(4,39,24,0.14)] transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] ${flip ? "rotate-2" : "-rotate-2"}`}
              src={feature.imageSrc}
            />
          </PwReveal>
        </div>
      </div>
      <details className="group mx-6 mb-10 mt-2 md:mx-12 md:mb-14">
        <summary className="flex cursor-pointer list-none items-center justify-center gap-3 rounded-full border border-[#0427181a] px-5 py-3 font-sans text-base font-medium text-[#042718] transition-colors hover:bg-[#198F380F] [&::-webkit-details-marker]:hidden">
          <span>Selengkapnya tentang {feature.title}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 transition-transform duration-300 group-open:rotate-180"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </summary>
        {/* Panel overlay: tinggi kartu tak berubah saat dibuka, teks di-scroll
            internal sehingga tetap terbaca sebelum kartu berikutnya menimpa. */}
        <div className="absolute inset-x-4 top-4 bottom-[104px] md:inset-x-10 md:top-8 md:bottom-[120px] z-10 hidden group-open:block">
          <div className="h-full overflow-y-auto overscroll-contain rounded-[24px] border border-[#0427181a] bg-[#F6FDFF]/95 backdrop-blur-md shadow-[0_8px_24px_0_rgba(4,39,24,0.08)] p-6 md:p-8">
            <p className="mx-auto max-w-[900px] whitespace-pre-line font-sans text-base leading-7 text-[#042718cc]">
              {feature.description}
            </p>
          </div>
        </div>
      </details>
    </PwReveal>
  );
}

/* ---- section utama ---- */

export function PwFeaturesTriple() {
  return (
    <section
      id="fitur-lengkap"
      className="w-full bg-white flex flex-col items-center py-24 gap-16 scroll-mt-24"
    >
      <div className="w-full max-w-[1440px] px-6 lg:px-[96px] flex flex-col items-center gap-[64px]">
        <div className="flex flex-col items-center text-center gap-6">
          <PwReveal className="flex items-center gap-2 bg-[#198F380F] pl-[14px] pr-[16px] py-[6px] rounded-full border border-[#198F381A]">
            {sparklesIcon}
            <span className="font-sans font-normal text-base text-[#198F38] tracking-[-0.3px]">
              Fitur Unggulan
            </span>
          </PwReveal>
          <PwReveal className="w-full max-w-[760px]" delay={100}>
            <h2 className="w-full font-semibold text-[32px] md:text-[42px] lg:text-[52px] leading-[38px] md:leading-[48px] lg:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px] text-[#042718]">
              Fitur Saku Sultan yang Sesuai dengan Kebutuhan Harian
            </h2>
          </PwReveal>
        </div>
        <div className="flex flex-col gap-12 w-full items-center">
          {PW_FEATURES.map((feature, index) => (
            <FeatureBlock key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
