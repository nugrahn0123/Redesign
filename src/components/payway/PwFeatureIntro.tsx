import { PwReveal } from "@/components/payway/pw-reveal";

const CORE_FEATURES = [
  {
    name: "Edudigi",
    image: "/images/payway/Edudigi.png",
    alt: "Edudigi",
    description:
      "Solusi digital untuk kebutuhan pendidikan yang praktis dan mudah diakses.",
  },
  {
    name: "PasSolo",
    image: "/images/payway/Passolo.jpeg",
    alt: "PasSolo",
    description:
      "Layanan digital untuk mendukung aktivitas harian masyarakat Solo.",
  },
  {
    name: "Q-tra",
    image: "/images/payway/Q-tra.png",
    alt: "Q-tra",
    description:
      "Pembayaran dan transaksi digital yang cepat, aman, dan nyaman.",
  },
] as const;

export function PwFeatureIntro() {
  return (
    <section
      id="fitur"
      className="w-full bg-white flex justify-center py-24 scroll-mt-24"
    >
      <div className="w-full max-w-[1440px] px-6 lg:px-[96px] flex flex-col items-center gap-[64px]">
        <div className="flex flex-col items-center text-center gap-6">
          <PwReveal className="flex items-center gap-2 bg-[#198F380F] pl-[14px] pr-[16px] py-[6px] rounded-full border border-[#198F381A]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-[#198F38] fill-[#198F38]"
              aria-hidden="true"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>
            <span className="font-sans font-normal text-base text-[#198F38] tracking-[-0.3px]">
              Fitur Inti
            </span>
          </PwReveal>
          <PwReveal className="w-full max-w-[760px]" delay={100}>
            <h2 className="w-full font-heading font-semibold text-[32px] md:text-[42px] lg:text-[52px] leading-[38px] md:leading-[48px] lg:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px] text-[#042718]">
              Fitur Saku Sultan yang Sesuai dengan Kebutuhan Harian
            </h2>
          </PwReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {CORE_FEATURES.map((feature, index) => (
            <PwReveal
              key={feature.name}
              className="group overflow-hidden rounded-[28px] border border-[#042718]/8 bg-[#F6FDFF] shadow-[0_8px_20px_rgba(4,39,24,0.05)]"
              delay={index * 100}
            >
              <div className="flex h-[260px] items-center justify-center overflow-hidden bg-white p-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.image}
                  alt={feature.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-heading text-[28px] font-semibold leading-tight tracking-[-1px] text-[#042718]">
                  {feature.name}
                </h3>
                <p className="mt-3 font-sans text-base leading-7 text-[#042718cc]">
                  {feature.description}
                </p>
              </div>
            </PwReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
