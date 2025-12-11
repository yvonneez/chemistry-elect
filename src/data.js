
const topics = [
  {
      title: "Properties of Metals",
summary:
"Metals are generally lustrous, malleable, ductile, good conductors of heat and electricity, and have high melting points and densities. They form positive ions (cations) and often produce basic oxides. Metallic bonding — a lattice of positive ions in a sea of delocalised electrons — explains many metallic properties.",
questions: [
{ question: "Which property explains why metals can be drawn into wires?", options: ["Malleability", "Ductility", "Lustre", "Brittleness"], answer: 1 },
{ question: "Metals conduct electricity because they have _______.", options: ["Mobile protons", "Delocalised electrons", "Ionic bonds", "Strong covalent networks"], answer: 1 },
{ question: "Which oxide type do most metals form when they burn in oxygen?", options: ["Acidic oxides", "Basic oxides", "Neutral oxides", "Amphoteric oxides"], answer: 1 },
{ question: "High melting points in metals are mainly due to _______.", options: ["Weak intermolecular forces", "Strong metallic bonds", "Hydrogen bonding", "Van der Waals forces"], answer: 1 },
{ question: "High boiling points in metals are mainly due to _______.", options: ["Weak intermolecular forces", "Strong metallic bonds", "Hydrogen bonding", "Van der Waals forces"], answer: 1 },   
   ]

  },
   {
    title: "Metal Reactions",
summary:
"Metals react in characteristic ways: with acids to produce a salt and hydrogen, with oxygen to form oxides, and with water (some metals) to produce hydroxides and hydrogen. Reaction reactivity varies across metals; displacement reactions occur when a more reactive metal displaces a less reactive metal from its salt solution.",
questions: [
{ question: "What gas is commonly produced when a metal reacts with an acid?", options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"], answer: 1 },
{ question: "Which metal reacts vigorously with cold water?", options: ["Iron", "Sodium", "Copper", "Gold"], answer: 1 },
{ question: "A displacement reaction occurs when _______.", options: ["A less reactive metal displaces a more reactive metal", "A more reactive metal displaces a less reactive metal", "Two metals form an alloy", "An acid displaces a metal"], answer: 1 },
{ question: "Which product forms when magnesium burns in oxygen?", options: ["MgO (magnesium oxide)", "Mg(OH)2", "MgCl2", "MgSO4"], answer: 0 },
{ question: "When iron reacts with dilute hydrochloric acid, the salt formed is _______.", options: ["NaCl", "FeCl2", "Fe2O3", "KCl"], answer: 1 }
    ]
  },
  {
   title: "Reactivity of Metals & Their Uses",
summary:
"Metal reactivity follows a reactivity series (e.g., K, Na, Ca, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au). Highly reactive metals are used where reactivity is needed or avoided where corrosion is a problem. Less reactive metals (Cu, Ag, Au) are useful in electrical wiring, jewellery, and coinage. Reactivity determines extraction method and applications.",
questions: [
{ question: "Which metal is least likely to corrode and is often found in jewellery?", options: ["Potassium", "Iron", "Gold", "Sodium"], answer: 2 },
{ question: "Which metal sits above hydrogen in the reactivity series and will react with acids to produce H2?", options: ["Copper", "Silver", "Zinc", "Gold"], answer: 2 },
{ question: "Why is aluminium often used for aircraft parts?", options: ["Very reactive without protection", "Low density and good strength", "High density and fragility", "Poor electrical conductivity"], answer: 1 },
{ question: "Which metal is commonly used for electrical wiring because it balances conductivity and cost?", options: ["Iron", "Copper", "Gold", "Lead"], answer: 1 },
{ question: "Which application uses a very reactive metal sacrificially to protect steel from corrosion?", options: ["Galvanising with zinc", "Plating with gold", "Painting with varnish", "Alloying with copper"], answer: 0 }
]
    
  },
   {
   title: "Identifying Metal Ions",
summary:
"Metal ions can be identified by characteristic flame test colours, precipitation reactions with reagents (e.g., NaOH, NH3), and by complex formation. Flame tests: lithium (red), sodium (yellow), potassium (lilac), calcium (brick red), copper (green/blue). Precipitate colours help distinguish ions (e.g., Cu2+ gives blue precipitate with NaOH).",
questions: [
{ question: "What colour flame does sodium produce in a flame test?", options: ["Red", "Yellow", "Green", "Lilac"], answer: 1 },
{ question: "Which reagent commonly forms a blue precipitate with Cu2+ ions?", options: ["NaOH", "HCl", "AgNO3", "BaCl2"], answer: 0 },
{ question: "Potassium gives which flame colour?", options: ["Lilac", "Orange", "Blue", "No colour"], answer: 0 },
{ question: "Silver ions (Ag+) form a white precipitate with which reagent?", options: ["NaOH", "NH3", "AgNO3", "Cl- (as in NaCl)"], answer: 3 },
{ question: "Which test can distinguish between Pb2+ and Ca2+ by forming different coloured precipitates with KI?", options: ["Flame test", "Precipitation with iodide", "pH indicator", "Reaction with oxygen"], answer: 1 }
]
  },
  {
    title: "Extraction of Metals",
summary:
"Metal extraction depends on reactivity. Very reactive metals (K, Na, Ca, Mg, Al) are extracted by electrolysis of molten compounds; moderately reactive metals (Zn, Fe) are often extracted by reduction with carbon (smelting) or other reducing agents. Less reactive metals may be found native and require minimal processing. The choice of method is guided by thermodynamics and economics.",
questions: [
{ question: "Which method is typically used to extract aluminium from its ore?", options: ["Electrolysis of molten alumina", "Reduction with carbon at low temperature", "Displacement with zinc", "Hydrometallurgy at room temperature"], answer: 0 },
{ question: "Iron is commonly extracted from haematite by reduction with _______.", options: ["Carbon (coke)", "Electrolysis", "Sodium", "Mercury"], answer: 0 },
{ question: "Which metal is often purified by electrolytic refining to obtain high purity?", options: ["Gold", "Copper", "Iron", "Sodium"], answer: 1 },
{ question: "A metal that occurs in the Earth uncombined (native) is likely to be _______.", options: ["Very reactive", "Unreactive (e.g., gold)", "Extracted by electrolysis", "Always an alloy"], answer: 1 },
{ question: "Which factor most influences the choice between electrolysis and reduction with carbon?", options: ["The colour of the metal", "Reactivity of the metal (position in reactivity series)", "Occurrence of the ore on land or sea", "Taste of the metal"], answer: 1 }
]
  },
  {
    title: "Metal Corrosion",
summary:
"Corrosion is the gradual destruction of metals by chemical reactions with their environment (commonly oxidation). Iron rusting (formation of hydrated iron(III) oxide) requires oxygen and water. Protection methods include painting, galvanising (zinc sacrificial coating), alloying (stainless steel), and cathodic protection.",
questions: [
{ question: "Rusting of iron requires which two substances?", options: ["Carbon dioxide and nitrogen", "Oxygen and water", "Hydrogen and chlorine", "Sunlight and ozone"], answer: 1 },
{ question: "Which protective method uses a more reactive metal to protect iron?", options: ["Painting", "Galvanising", "Polishing", "Annealing"], answer: 1 },
{ question: "Stainless steel resists corrosion due to the presence of which element?", options: ["Lead", "Chromium", "Mercury", "Calcium"], answer: 1 },
{ question: "Cathodic protection works by making the metal surface act as the _______.", options: ["Anode (where corrosion occurs)", "Cathode (protected)", "Oxidising agent", "Electrolyte"], answer: 1 },
{ question: "Which condition speeds up corrosion?", options: ["Dry, oxygen-free environment", "Presence of saltwater and oxygen", "Protective paint coating", "Low temperature and no moisture"], answer: 1 }
]
  },
  {
   title: "Alloys",
summary:
"Alloys are mixtures of a metal with one or more other elements (metals or non-metals) designed to improve properties: strength, hardness, corrosion resistance, or reduced melting point. Examples: steel (iron + carbon) is stronger than pure iron; brass (copper + zinc) is used for fittings; bronze (copper + tin) is harder than copper.",
questions: [
{ question: "Steel is primarily an alloy of iron and which element?", options: ["Carbon", "Aluminium", "Copper", "Zinc"], answer: 0 },
{ question: "Which alloy is commonly used for making coins and musical instruments (brass)?", options: ["Copper + tin", "Copper + zinc", "Iron + carbon", "Aluminium + magnesium"], answer: 1 },
{ question: "Why are alloys often stronger than pure metals?", options: ["Alloys always have lower melting points", "Different-sized atoms distort the lattice and hinder dislocation motion", "Alloys are always lighter", "Alloys are more reactive"], answer: 1 },
{ question: "Which alloy is used for non-corrosive cutlery and kitchenware?", options: ["Bronze", "Stainless steel", "Brass", "Cast iron"], answer: 1 },
{ question: "An alloy designed to have low melting point for soldering is called _______.", options: ["Steel", "Solder (e.g., tin-lead alloy)", "Bronze", "Stainless steel"], answer: 1 }
]
  }
];

export default topics;
