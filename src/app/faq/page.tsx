import type { Metadata } from 'next';
import FAQClient, { FAQItem } from './FAQClient';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Sourcing FAQ Desk | Bulk Molasses Sourcing | Saarthi Organics',
  description: 'Technical answers regarding molasses specifications, road tanker logistics, legal tax compliance, and commercial procurement contract parameters.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/faq',
  },
};

export default function FAQPage() {
  const faqs: FAQItem[] = [
    {
      q: "What is the typical Brix range of your molasses?",
      a: "We supply heavy industrial blackstrap molasses with a standardized refractometric Brix range of 82.0% to 88.0% (titrated at 20°C). This ensures high density, high concentration of total soluble solids, and stable shelf life under proper storage parameters."
    },
    {
      q: "What industries commonly use your molasses?",
      a: "Our sugarcane-derived molasses serves as a vital raw material feedstock across multiple manufacturing sectors. Common applications include ethanol fermentation in distilleries, carbohydrate binding in animal cattle feed mills, carbon sourcing in yeast plants, sand core binder formulations in foundries, organic nutrients in agriculture, flavor humectants in tobacco, and growth substrates in pharmaceutical manufacturing."
    },
    {
      q: "What packaging formats are available?",
      a: "While bulk liquid tanker delivery is our primary distribution channel, we accommodate varied industrial requirements. Packaging formats include dedicated road tankers (20 to 50 Metric Tons capacity), heavy-duty 1000L IBC Totes (approximately 1.4 MT net weight), Flexibags for export containers (20-24 MT), and standardized 200L steel or HDPE drums."
    },
    {
      q: "Can tanker deliveries be arranged?",
      a: "Yes. Bulk tanker supply is our specialized operation. We coordinate logistics utilizing our in-house fleet of tankers, ensuring reliable transit routing and priority dispatch schedules directly to your plant receiving valves."
    },
    {
      q: "Do you provide GST-compliant invoices?",
      a: "Yes. Saarthi Organics is a registered corporate tax-paying entity (GSTIN: 06AFEFS2128A1ZJ). Every delivery is accompanied by a valid GST Tax Invoice (HSN Code 1703), transit e-way bills, and necessary state excise passes to ensure legal compliance and smooth Input Tax Credit (ITC) reconciliation."
    },
    {
      q: "Can recurring monthly supply contracts be supported?",
      a: "Yes. We specialize in coordinating annual and monthly supply contracts with locked-in volume commitments. This guarantees raw material security for plant heads during the seasonal sugar mill crushing off-season (May to October)."
    },
    {
      q: "How is pricing determined for bulk orders?",
      a: "Bulk contract pricing is formulated based on current ex-mill sugarcane crushing rates, volume commitments, and delivery transit distances from our sourcing hubs in Karnal and neighboring sugar mills. We provide formal quotations with transparent freight breakdown structures."
    },
    {
      q: "What information is required to request a quotation?",
      a: "To provide an accurate B2B quote, we request your target volume (in Metric Tons), frequency of dispatch (daily, weekly, or monthly), preferred packaging format, delivery site postal PIN code, and any specific unloading gate constraints (such as coupler sizes or pump requirements)."
    },
    {
      q: "Can deliveries be arranged on short notice?",
      a: "Yes. By maintaining buffer stock reserves at our dedicated sourcing yards and partner mill storage tanks, we coordinate emergency tanker runs within 24 to 48 hours for contracted buyers to prevent distillery or plant shutdown scenarios."
    },
    {
      q: "Do you support buyers across multiple locations?",
      a: "Yes. We coordinate multi-destination corporate accounts, allowing national procurement teams to negotiate unified supply terms while our logistics desk manages local dispatches to individual factory units."
    },
    {
      q: "What documents can be provided with dispatches?",
      a: "Every shipment is accompanied by a complete dispatch dossier: GST Tax Invoice, e-Way Bill, Mill weighment slip, Gate pass, transport permit, and a laboratory Certificate of Analysis (COA) documenting refractometer Brix and Total Reducing Sugars (TRS) metrics."
    },
    {
      q: "How should molasses be handled upon receipt?",
      a: "Molasses should be stored in steel or concrete tanks with specialized bottom discharge lines. Due to its high viscosity, we recommend using positive displacement rotary lobe pumps. For winter dispatches in cold climates, our tankers are fitted with internal steam-heating coils to drop the viscosity for rapid unloading."
    },
    {
      q: "What factors influence molasses quality consistency?",
      a: "Consistency is impacted by sugarcane crushing variables, crop maturity, and sugar mill separation efficiency. We maintain parameters by sourcing directly from high-capacity modern sugar mill refineries and running laboratory QA titrations prior to terminal tanker loading."
    },
    {
      q: "Can custom packaging requirements be accommodated?",
      a: "Yes. For special industrial operations, we can coordinate packaging into client-specified container sizes or food-grade lined drums. Please outline your requirements with our sourcing desk."
    },
    {
      q: "What is the recommended method for requesting technical information?",
      a: "Procurement heads and laboratory managers can request Technical Data Sheets (TDS), material safety data sheets (MSDS), and pre-shipment laboratory sample kits (500ml) via our RFQ desk or by clicking the 'Request Technical Details' button on our forms."
    }
  ];

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Buyer Resources</span>
          <h1 className="subpage-hero-title">Sourcing FAQ Desk</h1>
          <p className="subpage-hero-desc">
            Technical answers regarding molasses specifications, road tanker logistics, legal tax compliance, and commercial procurement contract parameters.
          </p>
        </div>
      </div>

      {/* Render interactive component */}
      <FAQClient faqs={faqs} />

      {/* Static text representation for search indexer / SEO crawlers */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <h2>What is the typical Brix range of your molasses?</h2>
        <p>We supply heavy industrial blackstrap molasses with a standardized refractometric Brix range of 82.0% to 88.0% (titrated at 20°C). This ensures high density, high concentration of total soluble solids, and stable shelf life under proper storage parameters.</p>
        <h2>What industries commonly use your molasses?</h2>
        <p>Our sugarcane-derived molasses serves as a vital raw material feedstock across multiple manufacturing sectors. Common applications include ethanol fermentation in distilleries, carbohydrate binding in animal cattle feed mills, carbon sourcing in yeast plants, sand core binder formulations in foundries, organic nutrients in agriculture, flavor humectants in tobacco, and growth substrates in pharmaceutical manufacturing.</p>
        <h2>What packaging formats are available?</h2>
        <p>While bulk liquid tanker delivery is our primary distribution channel, we accommodate varied industrial requirements. Packaging formats include dedicated road tankers (20 to 50 Metric Tons capacity), heavy-duty 1000L IBC Totes (approximately 1.4 MT net weight), Flexibags for export containers (20-24 MT), and standardized 200L steel or HDPE drums.</p>
        <h2>Can tanker deliveries be arranged?</h2>
        <p>Yes. Bulk tanker supply is our specialized operation. We coordinate logistics utilizing our in-house fleet of tankers, ensuring reliable transit routing and priority dispatch schedules directly to your plant receiving valves.</p>
        <h2>Do you provide GST-compliant invoices?</h2>
        <p>Yes. Saarthi Organics is a registered corporate tax-paying entity (GSTIN: 06AFEFS2128A1ZJ). Every delivery is accompanied by a valid GST Tax Invoice (HSN Code 1703), transit e-way bills, and necessary state excise passes to ensure legal compliance and smooth Input Tax Credit (ITC) reconciliation.</p>
        <h2>Can recurring monthly supply contracts be supported?</h2>
        <p>Yes. We specialize in coordinating annual and monthly supply contracts with locked-in volume commitments. This guarantees raw material security for plant heads during the seasonal sugar mill crushing off-season (May to October).</p>
        <h2>How is pricing determined for bulk orders?</h2>
        <p>Bulk contract pricing is formulated based on current ex-mill sugarcane crushing rates, volume commitments, and delivery transit distances from our sourcing hubs in Karnal and neighboring sugar mills. We provide formal quotations with transparent freight breakdown structures.</p>
        <h2>What information is required to request a quotation?</h2>
        <p>To provide an accurate B2B quote, we request your target volume (in Metric Tons), frequency of dispatch (daily, weekly, or monthly), preferred packaging format, delivery site postal PIN code, and any specific unloading gate constraints (such as coupler sizes or pump requirements).</p>
        <h2>Can deliveries be arranged on short notice?</h2>
        <p>Yes. By maintaining buffer stock reserves at our dedicated sourcing yards and partner mill storage tanks, we coordinate emergency tanker runs within 24 to 48 hours for contracted buyers to prevent distillery or plant shutdown scenarios.</p>
        <h2>Do you support buyers across multiple locations?</h2>
        <p>Yes. We coordinate multi-destination corporate accounts, allowing national procurement teams to negotiate unified supply terms while our logistics desk manages local dispatches to individual factory units.</p>
        <h2>What documents can be provided with dispatches?</h2>
        <p>Every shipment is accompanied by a complete dispatch dossier: GST Tax Invoice, e-Way Bill, Mill weighment slip, Gate pass, transport permit, and a laboratory Certificate of Analysis (COA) documenting refractometer Brix and Total Reducing Sugars (TRS) metrics.</p>
        <h2>How should molasses be handled upon receipt?</h2>
        <p>Molasses should be stored in steel or concrete tanks with specialized bottom discharge lines. Due to its high viscosity, we recommend using positive displacement rotary lobe pumps. For winter dispatches in cold climates, our tankers are fitted with internal steam-heating coils to drop the viscosity for rapid unloading.</p>
        <h2>What factors influence molasses quality consistency?</h2>
        <p>Consistency is impacted by sugarcane crushing variables, crop maturity, and sugar mill separation efficiency. We maintain parameters by sourcing directly from high-capacity modern sugar mill refineries and running laboratory QA titrations prior to terminal tanker loading.</p>
        <h2>Can custom packaging requirements be accommodated?</h2>
        <p>Yes. For special industrial operations, we can coordinate packaging into client-specified container sizes or food-grade lined drums. Please outline your requirements with our sourcing desk.</p>
        <h2>What is the recommended method for requesting technical information?</h2>
        <p>Procurement heads and laboratory managers can request Technical Data Sheets (TDS), material safety data sheets (MSDS), and pre-shipment laboratory sample kits (500ml) via our RFQ desk or by clicking the &apos;Request Technical Details&apos; button on our forms.</p>
      </div>

      {/* Sourcing Action */}
      <FinalCTA />
    </main>
  );
}
