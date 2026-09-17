import { PwHero } from "@/components/payway/PwHero";
import { PwInsights } from "@/components/payway/PwInsights";
import { PwProcess } from "@/components/payway/PwProcess";
import { PwFeaturesTriple } from "@/components/payway/PwFeaturesTriple";
import { PwTestimonials } from "@/components/payway/PwTestimonials";
import { PwCharts } from "@/components/payway/PwCharts";
import { PwFaq, FAQ_ITEMS } from "@/components/payway/PwFaq";
import { PwPricing } from "@/components/payway/PwPricing";
import { PwCtaFooter } from "@/components/payway/PwCtaFooter";
import { PwWhatsappButton } from "@/components/payway/PwWhatsappButton";

/** Structured data FAQPage agar tanya-jawab terbaca mesin pencari. */
const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

/**
 * / — halaman utama Saku Sultan landing.
 */
export default function PaywayPage() {
  return (
    <main id="konten-utama" className="w-full overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <PwHero />
      <PwInsights />
      <PwFeaturesTriple />
      <PwProcess />
      <PwTestimonials />
      <PwCharts />
      <PwPricing />
      <PwFaq />
      <PwCtaFooter />
      <PwWhatsappButton />
    </main>
  );
}
