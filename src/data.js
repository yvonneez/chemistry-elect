const topics = [
  {
    title: "Ionic Bonding",
    summary:
      "Ionic bonding occurs when electrons are transferred from a metal atom to a non-metal atom. This forms positively charged ions (cations) and negatively charged ions (anions). The oppositely charged ions are held together by strong electrostatic forces of attraction, forming a giant ionic lattice. Ionic compounds usually have high melting points and conduct electricity when molten or dissolved in water.",
    questions: [
      {
        question: "Ionic bonding involves the transfer of:",
        options: ["Protons", "Neutrons", "Electrons", "Nuclei"],
        answer: 2
      },
      {
        question: "Which type of elements form ionic bonds?",
        options: [
          "Metal and metal",
          "Non-metal and non-metal",
          "Metal and non-metal",
          "Noble gases only"
        ],
        answer: 2
      },
      {
        question: "What holds ions together in an ionic compound?",
        options: [
          "Weak intermolecular forces",
          "Covalent bonds",
          "Electrostatic attraction",
          "Magnetic forces"
        ],
        answer: 2
      },
      {
        question: "Why do ionic compounds have high melting points?",
        options: [
          "They contain large atoms",
          "They have weak bonds",
          "Strong forces between ions",
          "They are soluble in water"
        ],
        answer: 2
      },
      {
        question: "When can ionic compounds conduct electricity?",
        options: [
          "When solid only",
          "When molten or dissolved",
          "When cold",
          "Never"
        ],
        answer: 1
      }
    ]
  },

  {
    title: "Covalent Bonding",
    summary:
      "Covalent bonding occurs when atoms share pairs of electrons. This type of bonding usually happens between non-metal atoms. Covalent substances can exist as small molecules or giant covalent structures. Substances with simple molecules often have low melting and boiling points, while giant covalent structures have very high melting points.",
    questions: [
      {
        question: "Covalent bonding involves:",
        options: [
          "Transfer of electrons",
          "Sharing of electrons",
          "Loss of neutrons",
          "Movement of protons"
        ],
        answer: 1
      },
      {
        question: "Which elements usually form covalent bonds?",
        options: [
          "Metals only",
          "Metals and non-metals",
          "Non-metals only",
          "Noble gases only"
        ],
        answer: 2
      },
      {
        question: "Why do simple covalent molecules have low melting points?",
        options: [
          "Strong covalent bonds",
          "Weak intermolecular forces",
          "High density",
          "Electrical conductivity"
        ],
        answer: 1
      },
      {
        question: "Which is an example of a giant covalent structure?",
        options: ["Water", "Carbon dioxide", "Diamond", "Oxygen"],
        answer: 2
      },
      {
        question: "Do covalent compounds usually conduct electricity?",
        options: ["Yes, always", "Only when molten", "No", "Only when solid"],
        answer: 2
      }
    ]
  },

  {
    title: "Metallic Bonding",
    summary:
      "Metallic bonding occurs in metals and consists of a lattice of positive metal ions surrounded by a sea of delocalised electrons. The strong attraction between the positive ions and the delocalised electrons holds the structure together. Metallic bonding explains why metals conduct electricity, are malleable, ductile, and have high melting points.",
    questions: [
      {
        question: "Metallic bonding consists of metal ions and:",
        options: [
          "Shared protons",
          "Delocalised electrons",
          "Negative ions",
          "Covalent bonds"
        ],
        answer: 1
      },
      {
        question: "Why do metals conduct electricity?",
        options: [
          "They contain ions",
          "They have high density",
          "Delocalised electrons can move",
          "They are solid"
        ],
        answer: 2
      },
      {
        question: "Which property is explained by metallic bonding?",
        options: [
          "Low melting point",
          "Solubility in water",
          "Malleability",
          "Transparency"
        ],
        answer: 2
      },
      {
        question: "What happens to metallic bonding when heated?",
        options: [
          "Electrons stop moving",
          "Bonding becomes stronger",
          "Ions vibrate more",
          "Metal becomes ionic"
        ],
        answer: 2
      },
      {
        question: "Which substance shows metallic bonding?",
        options: ["Sodium", "Water", "Carbon dioxide", "Oxygen"],
        answer: 0
      }
    ]
  },

  {
    title: "Properties of Ionic and Covalent Substances",
    questions: [
      {
        question: "Why do ionic compounds usually have high melting points?",
        options: [
          "They contain strong covalent bonds",
          "They have weak intermolecular forces",
          "They have strong electrostatic attractions between ions",
          "They consist of small molecules"
        ],
        answer: 2
      },
      {
        question: "Which substance is most likely to conduct electricity when molten?",
        options: [
          "Diamond",
          "Sodium chloride",
          "Carbon dioxide",
          "Water"
        ],
        answer: 1
      },
      {
        question: "Why does diamond have a very high melting point?",
        options: [
          "It has weak forces between molecules",
          "It contains ions",
          "It has a giant covalent structure",
          "It contains delocalised electrons"
        ],
        answer: 2
      },
      {
        question: "Which property explains why graphite can conduct electricity?",
        options: [
          "Strong covalent bonds",
          "Delocalised electrons",
          "High density",
          "Ionic bonding"
        ],
        answer: 1
      },
      {
        question: "Which type of bonding is found in sodium chloride?",
        options: [
          "Covalent",
          "Metallic",
          "Hydrogen",
          "Ionic"
        ],
        answer: 3
      }
    ]
  },

  {
    title: "Comparing Diamond and Graphite",
    questions: [
      {
        question: "Diamond and graphite are both forms of:",
        options: [
          "Iron",
          "Carbon",
          "Silicon",
          "Sulphur"
        ],
        answer: 1
      },
      {
        question: "Why is graphite soft and slippery?",
        options: [
          "It has weak forces between layers",
          "It has strong ionic bonds",
          "It contains metal ions",
          "It melts easily"
        ],
        answer: 0
      },
      {
        question: "Which structure does diamond have?",
        options: [
          "Simple molecular",
          "Giant ionic",
          "Giant covalent",
          "Metallic lattice"
        ],
        answer: 2
      },
      {
        question: "Which form of carbon is used as a lubricant?",
        options: [
          "Diamond",
          "Graphite",
          "Fullerene",
          "Carbon dioxide"
        ],
        answer: 1
      },
      {
        question: "Why does diamond not conduct electricity?",
        options: [
          "It contains ions",
          "It has no free electrons",
          "It has weak bonds",
          "It melts easily"
        ],
        answer: 1
      }
    ]
  },

  {
    title: "Ions and Chemical Formulae",
    questions: [
      {
        question: "What charge does a magnesium ion have?",
        options: ["+1", "+2", "-1", "-2"],
        answer: 1
      },
      {
        question: "What is the formula of magnesium chloride?",
        options: ["MgCl", "MgCl₂", "Mg₂Cl", "Mg₂Cl₂"],
        answer: 1
      },
      {
        question: "Which ion is present in calcium fluoride?",
        options: [
          "Ca⁺",
          "Ca²⁺",
          "F⁺",
          "F²⁺"
        ],
        answer: 1
      },
      {
        question: "What is the correct formula for aluminium oxide?",
        options: [
          "AlO",
          "Al₂O",
          "Al₂O₃",
          "Al₃O₂"
        ],
        answer: 2
      },
      {
        question: "Why do ionic compounds form regular lattice structures?",
        options: [
          "Atoms share electrons",
          "Oppositely charged ions attract",
          "Electrons are delocalised",
          "Weak forces hold molecules together"
        ],
        answer: 1
      }
    ]
  },
  
];

export default topics;



