import { Pricing } from "@/components/sections/Pricing";

export default function PricingPage() {
  return (
    <div className="pt-10">
      <div className="container-xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-base-heading">Pricing</h1>
      </div>
      <Pricing />
    </div>
  );
}
