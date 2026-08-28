import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Hero from "@/components/marketing/Hero";
import ProblemSection from "@/components/marketing/ProblemSection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import NumberShowcase from "@/components/marketing/NumberShowcase";
import AirBrakeSection from "@/components/marketing/AirBrakeSection";
import PreviewGallery from "@/components/marketing/PreviewGallery";
import AudienceSection from "@/components/marketing/AudienceSection";
import IsIsNotSection from "@/components/marketing/IsIsNotSection";
import TrustSection from "@/components/marketing/TrustSection";
import HowItWorks from "@/components/marketing/HowItWorks";
import Pricing from "@/components/marketing/Pricing";
import FaqSection from "@/components/marketing/FaqSection";
import FinalCTA from "@/components/marketing/FinalCTA";
import { product } from "@/content/product";
import { assets } from "@/lib/assets";
import { site } from "@/lib/site";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.longDescription,
  image: `${site.url}${assets.cover.src}`,
  brand: { "@type": "Brand", name: product.name },
  offers: {
    "@type": "Offer",
    price: product.price,
    priceCurrency: product.currency,
    availability: "https://schema.org/InStock",
    url: `${site.url}/`,
  },
};

export const metadata: Metadata = {
  title: "California CDL Exam Sprint Guide | CDL Permit Test Study Guide",
  description:
    "A focused last-minute study guide for the California CDL permit test. Key numbers, air brakes, pre-trip inspection, and exam traps — in a 12-page PDF.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={productSchema} />
      <Hero />
      <ProblemSection />
      <FeatureGrid />
      <NumberShowcase />
      <AirBrakeSection />
      <PreviewGallery />
      <AudienceSection />
      <IsIsNotSection />
      <TrustSection />
      <HowItWorks />
      <Pricing />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
