export interface Article {
  id: number;
  slug: string;
  title: string;
  category: 'Quality' | 'Logistics' | 'Procurement' | 'Applications';
  summary: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    initials: string;
  };
  content: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "gst-compliance-input-tax-credit-sugarcane-molasses",
    title: "GST Compliance & Input Tax Credit (ITC) in Sugarcane Molasses Sourcing",
    category: "Procurement",
    summary: "Understand the regulatory framework governing molasses sourcing under the Indian GST system. Learn how to structure purchases, verify e-way bills, and secure instant input tax reconciliation to avoid corporate tax audit delays.",
    date: "June 08, 2026",
    readTime: "8 min read",
    image: "/molasses_plant.png",
    author: {
      name: "Ambuj Goyal",
      role: "Co-Founder & Sourcing Director",
      initials: "AG"
    },
    content: [
      "Sugarcane molasses is a heavily regulated commodity in India, subject to strict state excise rules and federal tax laws. Under the Indian Goods and Services Tax (GST) regime, molasses is classified under HSN Code 1703, carrying a standard GST rate of 28%. For heavy manufacturing units, distilleries, and chemical plants, managing the tax compliance of raw materials is vital to ensure cash flow efficiency.",
      "For industrial buyers, securing Input Tax Credit (ITC) is essential to reduce overall raw material costs. To successfully claim ITC without query flags, the procuring corporate entity must ensure that the supplier issues a valid tax invoice with matching GSTR-1 entries, which reconcile automatically in the buyer's GSTR-2B. Discrepancies between invoices and filings can result in the freezing of credit, leading to audit delays and cash flow bottlenecks.",
      "Furthermore, every bulk transport movement exceeding Rs. 50,000 requires a registered e-Way Bill specifying the transport vehicle registration number, cargo weight, and dispatch mill coordinates. At Saarthi Organics, we manage all compliance steps. E-Way bills, excise permits, and GST billing are generated instantly upon vehicle dispatch from our partner sugar mills, and our accounting desk ensures that GSTR filings are logged on-time, enabling seamless credit claims for your plant."
    ]
  },
  {
    id: 2,
    slug: "evaluating-total-reducing-sugars-trs-molasses",
    title: "Evaluating Total Reducing Sugars (TRS) in Industrial Molasses",
    category: "Quality",
    summary: "A deep dive into why TRS values determine sugar-to-alcohol conversion yields in fermentation chambers, and how to spot-test incoming tanker batches using refractometers and chemical analysis.",
    date: "May 24, 2026",
    readTime: "5 min read",
    image: "/industry_distilleries.png",
    author: {
      name: "Dr. Ananya Sen",
      role: "Head of Laboratory QA",
      initials: "AS"
    },
    content: [
      "In industrial bio-ethanol distilleries, the fermentation yield of sugarcane molasses is directly dictated by its sugar content. Total Reducing Sugars (TRS) represent the combined concentration of sucrose, glucose, and fructose present in the syrup. High-quality blackstrap molasses typically yields a TRS percentage of 45% to 50%. This value determines the total alcohol yield that can be extracted per ton of raw material.",
      "To evaluate TRS, laboratory technicians utilize chemical titration methods, primarily the Lane-Eynon method, or high-performance liquid chromatography (HPLC). Prior to unloading a road tanker, raw material inspectors perform a refractometer test to verify that the Brix density is at least 80% to 82%, and extract samples to run a quick Fehling's solution titration to ensure TRS levels meet contractual agreements. Checking these metrics prevents the unloading of low-sugar cargo.",
      "Low TRS molasses reduces the efficiency of yeast strains, resulting in lower alcohol conversion ratios per metric ton, which raises production costs. Saarthi Organics supports quality assurance through Certificate of Analysis (COA) documentation available on request, detailing key laboratory metrics prior to unloading."
    ]
  },
  {
    id: 3,
    slug: "winter-viscosity-control-cold-climate-transport",
    title: "Winter Viscosity Control: Cold-Climate Transport Logistics",
    category: "Logistics",
    summary: "Pumping heavy blackstrap molasses becomes problematic below 15°C. Review logistics engineering best practices, steam-coiled tankers, and intake piping layouts to keep your manufacturing plant running through winter.",
    date: "April 18, 2026",
    readTime: "7 min read",
    image: "/logistics_fleet.png",
    author: {
      name: "Anuj Tayal",
      role: "Co-Founder & Logistics Director",
      initials: "AT"
    },
    content: [
      "The physical flow behavior of sugarcane molasses is highly temperature-dependent. At warm temperatures, molasses acts as a pumpable fluid, but as the ambient temperature drops below 15°C, its viscosity increases exponentially, transforming it into a thick, semi-solid syrup that can clog standard transfer pumps and cause massive delays at the receiving station.",
      "In North India's winter months, bulk transport logistics face major challenges during early morning unloading. To overcome this, we employ dedicated transport road tankers equipped with internal steam-heating coils. Upon arrival at the client's plant, low-pressure steam is injected into the coils for 30 to 45 minutes, reducing the molasses viscosity to a pumpable range (typically around 5,000 to 10,000 centipoise) without scorching the sugars.",
      "Additionally, plants should maintain short intake pipelines, heat-trace their receiving manifolds, and use positive displacement rotary lobe pumps instead of standard centrifugal pumps to ensure smooth, uninterrupted discharge. We coordinate arrival times with plant managers to ensure steam hookups are prepped, reducing idle tanker time."
    ]
  },
  {
    id: 4,
    slug: "brix-concentration-yeast-yield-optimization",
    title: "Brix Concentration and Yeast Yield Optimization in Industrial Fermentation",
    category: "Quality",
    summary: "Explore the biochemistry of sucrose, glucose, and fructose ratios in blackstrap molasses. Discover how minor variations in Brix density directly impact industrial yeast reproduction cycles.",
    date: "April 02, 2026",
    readTime: "6 min read",
    image: "/industry_yeast.png",
    author: {
      name: "Dr. Ananya Sen",
      role: "Head of Laboratory QA",
      initials: "AS"
    },
    content: [
      "Industrial yeast manufacturing and yeast-based fermentation rely on molasses as a primary carbon source. Yeast growth (Saccharomyces cerevisiae) is highly sensitive to the osmotic pressure of the growth medium. If the sugar concentration is too high (excessive Brix), osmotic shock can occur, damaging yeast cell walls and halting reproduction, which ruins fermentation batches.",
      "Conversely, low Brix indicates dilution, which increases the risk of premature bacterial contamination (such as lactic acid bacteria) in storage tanks. The optimal Brix level for raw bulk molasses is 80° to 85° Bx. During yeast media preparation, this is diluted with sterile water to a working Brix of 10° to 15° Bx, supplemented with nitrogen (urea or ammonium salts) and phosphorus to sustain high growth yields.",
      "Saarthi Organics provides standardized, high-purity molasses specifically refined for yeast propagation, ensuring low ash content and high nutritional bioavailability for yeast cultures. We verify every load with refractometer analysis before dispatch."
    ]
  },
  {
    id: 5,
    slug: "molasses-high-adhesion-binder-casting-foundries",
    title: "Molasses as a High-Adhesion Binder in Casting Foundries",
    category: "Applications",
    summary: "A technical evaluation of blackstrap molasses as an organic sand core binder. Learn how thermal degradation properties compare with synthetic resins in high-temperature metal casting.",
    date: "March 15, 2026",
    readTime: "5 min read",
    image: "/industry_foundries.png",
    author: {
      name: "Vikram R. Joshi",
      role: "Materials Engineer",
      initials: "VJ"
    },
    content: [
      "In metal casting foundries, sand molds and cores must withstand intense heat and pressure when molten metal is poured. Traditionally, organic binders like linseed oil or synthetic resins have been used. However, blackstrap molasses represents a highly cost-effective, environmentally friendly organic binder for sand cores.",
      "When mixed with silica sand (typically 2% to 4% by weight) and clay, molasses provides excellent green strength, allowing the sand core to hold its shape prior to baking. During casting, as the molten metal fills the mold, the high heat causes the sugars in the molasses to undergo carbonization, forming a strong carbon bond that temporarily increases mold strength.",
      "Once the casting cools, the carbonized molasses easily crumbles (collapsibility), allowing clean sand removal from the cast metal piece without cracking the finished component, making it an excellent sustainable raw material choice."
    ]
  },
  {
    id: 6,
    slug: "optimizing-cattle-feed-formulations-high-brix-molasses",
    title: "Optimizing Cattle Feed Formulations with High-Brix Organic Molasses",
    category: "Applications",
    summary: "Understand how sugarcane molasses improves feed palatability, dust suppression, and digestion rates in dairy cattle feed pellets. Includes a nutrient profile breakdown.",
    date: "February 28, 2026",
    readTime: "6 min read",
    image: "/industry_cattle_feed.png",
    author: {
      name: "Amit Sharma",
      role: "Agricultural Analyst",
      initials: "AS"
    },
    content: [
      "Sugarcane molasses is widely utilized in animal nutrition as an additive in cattle feed formulations. It serves multiple purposes: it suppresses dust in feed mills, binds feed ingredients into compact pellets, and provides a rich source of highly digestible energy (carbohydrates) for livestock.",
      "Furthermore, the naturally sweet aroma and taste of molasses improve the palatability of cattle feed, encouraging feed intake in dairy cows. Molasses also stimulates rumen microbes, enhancing fiber digestion and improving milk yield and fat percentage.",
      "In feed mills, molasses is applied at 5% to 10% of the feed mixture. It is critical to maintain consistent moisture and sugar profiles to ensure feed pellets don't crumble during storage and transit. Saarthi Organics delivers animal-grade molasses with controlled moisture content, ready for industrial pellet mills."
    ]
  },
  {
    id: 7,
    slug: "what-is-blackstrap-molasses-procurement-guide",
    title: "What is Blackstrap Molasses? A Technical Procurement Guide",
    category: "Procurement",
    summary: "Understand the biochemical classification of blackstrap molasses, its extraction processes, and key technical parameters that corporate buyers must evaluate during procurement cycles.",
    date: "February 15, 2026",
    readTime: "6 min read",
    image: "/molasses_plant.png",
    author: {
      name: "Ambuj Goyal",
      role: "Co-Founder & Sourcing Director",
      initials: "AG"
    },
    content: [
      "Blackstrap molasses is the thick, dark, viscous syrup remaining after the third and final boiling cycle of sugarcane juice extraction. During sugarcane refining, sucrose is repeatedly crystallized and removed. The final crystallization strike yields a heavy co-product that contains concentrated minerals, vitamins, and a lower sucrose content, making it highly valuable for industrial fermentation and chemical processes.",
      "From a procurement perspective, blackstrap molasses is characterized by its high density (measured in Brix), mineral richness, and dark coloration. Standard commercial grades require a Brix density between 80.0% and 88.0%. Unlike light or dark table molasses, blackstrap is not intended for direct retail culinary use but is rather structured as a robust carbon and nitrogen media for heavy manufacturing.",
      "When auditing potential suppliers in India, purchasing heads should look for verifiable specs regarding Total Reducing Sugars (TRS), ash content, and sulfur dioxide residue. Saarthi Organics sources premium blackstrap molasses from major sugar crushing zones, offering comprehensive COA documentation for every tanker shipment."
    ]
  },
  {
    id: 8,
    slug: "uses-of-molasses-in-distilleries-bio-ethanol",
    title: "Uses of Sugarcane Molasses in Distilleries and Bio-Ethanol Production",
    category: "Applications",
    summary: "An in-depth look at how bio-ethanol plants and potable distilleries utilize blackstrap molasses feedstock to maximize ethanol conversion efficiency and manage distillation residues.",
    date: "January 20, 2026",
    readTime: "7 min read",
    image: "/industry_distilleries.png",
    author: {
      name: "Dr. Ananya Sen",
      role: "Head of Laboratory QA",
      initials: "AS"
    },
    content: [
      "Potable alcohol distilleries and bio-ethanol plants are the largest industrial consumers of sugarcane molasses in India. Molasses serves as the primary sugar-rich substrate for anaerobic fermentation. Yeast strains metabolize the simple sugars (sucrose, glucose, fructose) to produce ethanol and carbon dioxide as principal metabolic byproducts.",
      "The efficiency of this process relies heavily on the Total Reducing Sugars (TRS) ratio. When TRS ranges between 45% and 50%, the yeast performs with optimal cell density and minimal fermentation stalls. However, higher unfermentable sugar ratios or high volatile acidity can inhibit yeast growth and lead to unreacted sugars, reducing the overall alcohol yield per ton of feedstock.",
      "Furthermore, managing the wastewater or spent wash (slops) after distillation is a key challenge for plant heads. Using high-purity, low-ash molasses minimizes solids residue in the bottom of distillation columns, enhancing cleanup efficiency and supporting zero liquid discharge (ZLD) plant compliance. Saarthi Organics coordinates stable tanker supply grids, ensuring quality-locked feedstock to help distilleries maintain high production rates."
    ]
  },
  {
    id: 9,
    slug: "molasses-storage-best-practices-industrial",
    title: "Molasses Storage Best Practices for Heavy Industrial Plants",
    category: "Logistics",
    summary: "Discover how to design bulk storage tanks, prevent moisture condensation, manage viscosity, and eliminate spontaneous fermentation risks inside manufacturing plant yards.",
    date: "January 05, 2026",
    readTime: "6 min read",
    image: "/logistics_fleet.png",
    author: {
      name: "Anuj Tayal",
      role: "Co-Founder & Logistics Director",
      initials: "AT"
    },
    content: [
      "Storing bulk molasses requires specialized infrastructure. Because it is highly viscous and hygroscopic (absorbing moisture from the atmosphere), improper storage can lead to dilution at the surface, triggering bacterial spoilage or spontaneous fermentation inside storage vessels. This section outlines key design parameters for bulk storage facilities.",
      "First, storage tanks should be constructed from mild steel or concrete with epoxy lining. Bottom discharge lines should feature wide-diameter pipelines (typically 4 inches or wider) to handle high-viscosity flow. Tanks must be properly vented to allow the release of carbon dioxide and other gases generated by respiration, and rain shields must cover vents to prevent water ingress.",
      "Second, plant managers must monitor storage temperatures. In cold climates, keep the unloading manifold insulated and use low-pressure steam coils when necessary to maintain pumpability. Conversely, excessive heat can cause caramelization of sugars and loss of feed value. Saarthi Organics coordinates directly with plant engineers to plan tank size requirements and arrange optimized delivery schedules to maintain ideal inventory turnovers."
    ]
  },
  {
    id: 10,
    slug: "factors-affecting-molasses-quality-consistency",
    title: "Critical Factors Affecting Sugarcane Molasses Sourcing Quality",
    category: "Quality",
    summary: "Analyze the chemical and operational factors—from crop maturity to sugar mill refining technology—that dictate the quality and consistency of bulk molasses shipments.",
    date: "December 18, 2025",
    readTime: "5 min read",
    image: "/molasses_testing.png",
    author: {
      name: "Dr. Ananya Sen",
      role: "Head of Laboratory QA",
      initials: "AS"
    },
    content: [
      "Industrial buyers often experience quality variations between different molasses batches. These fluctuations stem from agronomic, operational, and climate factors during sugarcane cultivation and processing. Understanding these variables helps procurement teams anticipate feedstock quality.",
      "The primary factor is sugarcane crop maturity. Cane harvested at peak maturity (typically mid-season from January to March in North India) yields molasses with high TRS and stable Brix levels. In contrast, early-season or late-season harvests often produce higher concentrations of unfermentable organic solids. Additionally, the clarification and crystallization technology used by the sugar mill directly dictates the ash content and total sugar concentration left in the byproduct.",
      "Saarthi Organics mitigates these variations by maintaining direct relationships with modern sugar mill refineries. We monitor active production runs, test incoming tanker batches, and maintain dedicated quality checks to ensure that the material delivered to your plant matches standard specification guidelines."
    ]
  },
  {
    id: 11,
    slug: "choosing-reliable-molasses-supplier-india-checklist",
    title: "Choosing a Reliable Molasses Supplier in India: A B2B Sourcing Checklist",
    category: "Procurement",
    summary: "An essential checklist for corporate procurement teams, outlining key evaluation criteria for selecting a high-volume industrial molasses logistics and supply partner.",
    date: "December 02, 2025",
    readTime: "7 min read",
    image: "/logistics_fleet.png",
    author: {
      name: "Ambuj Goyal",
      role: "Co-Founder & Sourcing Director",
      initials: "AG"
    },
    content: [
      "For heavy manufacturing plants, animal feed mills, and distilleries, molasses is a critical feedstock. A delay in delivery or a sudden drop in Brix levels can lead to costly plant shutdowns. When evaluating potential bulk supply partners in India, purchasing heads must verify several key areas.",
      "First, evaluate logistics capability. A supplier relying on external transport brokers often struggles with priority dispatches during high-demand crop seasons. A partner with a dedicated, in-house fleet of liquid tankers guarantees transit reliability and quick dispatch times. Second, review regulatory and tax compliance. Because molasses transit is supervised by state excise bodies, ensure the supplier manages e-way bills, excise permits, and issues GST-compliant invoices immediately.",
      "Finally, check quality management systems. A reliable supplier should provide pre-shipment laboratory samples and issue a Certificate of Analysis (COA) for every load. Saarthi Organics is structured to meet these corporate requirements, combining direct refinery trade agreements, in-house tanker logistics, and strict compliance desks to support continuous industrial operations."
    ]
  }
];
