
const topics = [
  {
      title: "Electricity & Chemistry",
      summary: "Electrochemistry studies how electricity interacts with chemical substances.Metallic conductors conduct electricity using electrons, while electrolytic conductors use ions.Electrolytes conduct only when molten or in solution because the ions are free to move.During electrolysis, cations move to the negative cathode, and anions move to the positive anode.Electrolysis decomposes ionic substances into simpler components. Understanding these principles isimportant for industrial extraction of metals, electroplating, and the decomposition of ionic compounds." ,
              
    questions:[
      {question:"Which particles carry electric current?", options:["Electrons","Ions","Neutrons"], answer:1},
      {question:"Cathode is where:", options:["Oxidation","Reduction","Nothing"], answer:1},
      {question:"Anions move to:", options:["Cathode","Anode","Electrolyte"], answer:1},
      {question:"Electrolysis converts:", options:["Chem→Elec","Elec→Chem","Mech→Heat"], answer:1},
      {question:"Positive ions are:", options:["Neutrons","Anions","Cations"], answer:2}
    ]
  },
   {
    title:"Electrolysis of Lead(II) Bromide",
    summary:"Lead(II) bromide is an ionic compound that cannot conduct electricity when solid because the ions are fixed in a lattice. When molten, ions become mobile and electrolysis can occur. Pb²⁺ ions migrate to the cathode and are reduced to lead metal, while Br⁻ ions migrate to the anode and are oxidised to form bromine gas. This demonstrates how molten ionic compounds decompose into their elements.",
    questions: [
      {question:"PbBr₂ conducts electricity when:", options:["Solid","Molten","Cold"], answer:1},
      {question:"Product at cathode in molten PbBr₂:", options:["Lead","Bromine","Oxygen"], answer:0},
      {question:"Which ions go to the anode?", options:["Pb²⁺","Br⁻","H⁺"], answer:1},
      {question:"Anode reaction type is:", options:["Reduction","Oxidation","Substitution"], answer:1},
      {question:"Bromine appears as:", options:["Brown gas","Colourless liquid","White solid"], answer:0}
    ]
  },
   {
    title:"Electrolysis of Aluminium Oxide",
    summary:"Aluminium is extracted from alumina using the Hall-Héroult process. Alumina has a very high melting point, so it is dissolved in molten cryolite to lower energy costs. During electrolysis, Al³⁺ ions are reduced at the cathode to aluminium, and O²⁻ ions are oxidised at the carbon anode to form oxygen gas. The oxygen reacts with the carbon anode to form carbon dioxide, so the anode gradually wears away and must be replaced.",
    questions: [
      {question:"Cryolite is used to:", options:["Raise melting point","Lower melting point","Increase mass"], answer:1},
      {question:"Cathode product is:", options:["Aluminium","Oxygen","CO₂"], answer:0},
      {question:"Carbon anodes wear out because:", options:["They melt","They react with oxygen","They dissolve"], answer:1},
      {question:"Ions discharged at anode carry:", options:["Positive charge","Negative charge","No charge"], answer:1},
      {question:"Hall-Héroult process extracts:", options:["Iron","Aluminium","Sodium"], answer:1}
    ]
  },
   {
    title:"Electrolysis of Aqueous Solutions",
    summary:"Aqueous solutions contain ions from the solute plus hydrogen ions and hydroxide ions from the water. Multiple ions compete for discharge. At the cathode, hydrogen is produced unless the metal ion is less reactive than hydrogen. At the anode, halide ions are discharged when concentrated; otherwise oxygen is produced from OH⁻ ions. Products depend on ion reactivity, concentration, and electrode type.",
    questions: [
      {question:"Aquestionueous solutions contain ions from solute and:", options:["Air","Water","Electrodes"], answer:1},
      {question:"Hydrogen forms at cathode when metal is:", options:["More reactive than H","Less reactive than H","A noble gas"], answer:1},
      {question:"Oxygen forms at anode when:", options:["Halides absent","Halides concentrated","Using metal electrodes"], answer:0},
      {question:"Always present ions are:", options:["SO₄²⁻","H⁺ and OH⁻","CO₃²⁻"], answer:1},
      {question:"Discharge depends mainly on:", opts:["Reactivity series","Solubility","Colour"], answer:0}
    ]
  },
  {
    title:"Electrolysis of copper (II) Sulphate",
    summary:"Copper(II) sulphate solution contains Cu²⁺, SO₄²⁻, H⁺, and OH⁻ ions. Using inert electrodes, copper is deposited at the cathode and oxygen gas is produced at the anode. Using copper electrodes turns the process into purification: the impure anode dissolves to release Cu²⁺ ions, which deposit as pure copper on the cathode. Insoluble impurities fall as anode sludge.",
    questions: [
      {question:"Cathode product with inert electrodes:", options:["Oxygen","Copper","Hydrogen"], answer:1},
      {question:"Using copper electrodes performs:", options:["Electroplating","Purification","Oxidising water"], answer:1},
      {question:"Ion unchanged in solution:", options:["SO₄²⁻","Cu²⁺","H⁺"], answer:0},
      {question:"Anode sludge is:", options:["Pure copper","Insoluble impurities","Water"], answer:1},
      {question:"CuSO₄ solution is:", options:["Blue","Green","Yellow"], answer:0}
    ]
  },
  {
    title:"Fuel Cells",
    summary:"Fuel cells convert chemical energy directly into electrical energy through redox reactions. The hydrogen fuel cell reacts hydrogen with oxygen to produce water, heat, and electricity. They operate continuously as long as fuel is supplied. Fuel cells are efficient and environmentally friendly, but they require expensive catalysts and hydrogen storage can be difficult.",
    questions: [
  {question:"Hydrogen fuel cells produce:", options:["CO₂","Water + electricity","Methane"], answer:1},
  {question:"Fuel cells convert:", options:["Chemical → Electrical","Heat → Chemical","Electrical → Chemical"], answer:0},
  {question:"Fuel cells run as long as:", options:["Electrolyte is heated","Fuel supplied","Electrodes cooled"], answer:1},
  {question:"A disadvantage is:", options:["Smoke emission","Expensive catalysts","No heat"], answer:1},
  {question:"They are clean because they produce:", options:["Only water","CO₂","Methane"], answer:0}
]
  },
  {
    title:"Electroplating",
    summary:"Electroplating coats one metal with another through electrolysis. The object to be plated is the cathode, while the anode is made of the plating metal. The electrolyte contains ions of the plating metal. During electrolysis, metal ions are reduced and deposited onto the object. Electroplating is used to improve appearance, prevent corrosion, and add protective coatings.",
    questions: [
  {question:"Object to be coated is the:", options:["Anode","Cathode","Electrolyte"], answer:1},
  {question:"Anode is made of:", options:["Carbon","Plating metal","Plastic"], answer:1},
  {question:"Electroplating works by:", options:["Oxidation","Reduction","Evaporation"], answer:1},
  {question:"Main purpose is:", options:["Raise melting point","Improve appearance or prevent corrosion","Increase mass"], answer:1},
  {question:"Electrolyte must contain:", options:["Water only","Ions of plating metal","Impurities"], answer:1}
]
  }
];

export default topics;
