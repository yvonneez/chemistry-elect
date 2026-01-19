const topics = [
  {
    title: "Solids, Liquids and Gases",
    summary:
      "Matter exists in three main states: solids, liquids, and gases. Solids have a fixed shape and volume because their particles are closely packed and only vibrate. Liquids have a fixed volume but no fixed shape as their particles can slide past one another. Gases have neither fixed shape nor volume because their particles are far apart and move freely.",
    questions: [
      { question: "Which state of matter has a fixed shape and volume?", options: ["Solid", "Liquid", "Gas"], answer: 0 },
      { question: "Which state has a fixed volume but no fixed shape?", options: ["Solid", "Liquid", "Gas"], answer: 1 },
      { question: "Particles are far apart and move freely in?", options: ["Solid", "Liquid", "Gas"], answer: 2 },
      { question: "Which state of matter is easily compressed?", options: ["Solid", "Liquid", "Gas"], answer: 2 },
      { question: "Why do solids keep their shape?", options: ["Particles move freely", "Particles vibrate in fixed positions", "Particles are far apart"], answer: 1 }
    ]
  },

  {
    title: "Kinetic Particle Theory of Matter",
    summary:
      "The kinetic particle theory states that all matter is made up of tiny particles in constant random motion. These particles possess kinetic energy, which increases as temperature increases. The theory explains the differences in properties of solids, liquids, and gases based on particle motion and arrangement.",
    questions: [
      { question: "Matter is made up of?", options: ["Energy", "Tiny particles", "Cells"], answer: 1 },
      { question: "Particles in matter are always?", options: ["Stationary", "In random motion", "Moving only when heated"], answer: 1 },
      { question: "Increasing temperature causes particles to?", options: ["Move slower", "Stop moving", "Move faster"], answer: 2 },
      { question: "Which state has particles with the highest kinetic energy?", options: ["Solid", "Liquid", "Gas"], answer: 2 },
      { question: "Kinetic particle theory explains?", options: ["States of matter", "Electric current", "Atomic number"], answer: 0 }
    ]
  },

  {
    title: "Change of State",
    summary:
      "Change of state occurs when matter changes from one state to another due to heating or cooling. Examples include melting, freezing, evaporation, boiling, and condensation. During a change of state, the temperature remains constant while energy is used to break or form intermolecular forces.",
    questions: [
      { question: "Change from solid to liquid is called?", options: ["Freezing", "Melting", "Condensation"], answer: 1 },
      { question: "Change from gas to liquid is called?", options: ["Evaporation", "Condensation", "Boiling"], answer: 1 },
      { question: "Which change of state occurs during cooling?", options: ["Melting", "Freezing", "Boiling"], answer: 1 },
      { question: "During a change of state, temperature?", options: ["Increases", "Decreases", "Remains constant"], answer: 2 },
      { question: "Energy supplied during melting is used to?", options: ["Increase temperature", "Break forces between particles", "Stop particle motion"], answer: 1 }
    ]
  },

  {
    title: "Effect of Temperature and Pressure on the Volume of a Gas",
    summary:
      "The volume of a gas depends on temperature and pressure. When temperature increases at constant pressure, gas volume increases because particles move faster (Charles’ law). When pressure increases at constant temperature, gas volume decreases as particles are forced closer together (Boyle’s law).",
    questions: [
      { question: "Increasing temperature at constant pressure causes gas volume to?", options: ["Decrease", "Increase", "Remain constant"], answer: 1 },
      { question: "Which law relates pressure and volume of a gas?", options: ["Charles’ law", "Boyle’s law", "Newton’s law"], answer: 1 },
      { question: "Increasing pressure causes gas volume to?", options: ["Increase", "Decrease", "Stay the same"], answer: 1 },
      { question: "Gas expands when heated because particles?", options: ["Shrink", "Move faster", "Stop moving"], answer: 1 },
      { question: "For Charles’ law to apply, which must be constant?", options: ["Pressure", "Volume", "Mass"], answer: 0 }
    ]
  },

  {
    title: "Diffusion",
    summary:
      "Diffusion is the movement of particles from a region of higher concentration to a region of lower concentration until evenly spread. It occurs fastest in gases, slower in liquids, and very slowly in solids due to differences in particle speed and spacing.",
    questions: [
      { question: "Diffusion is the movement of particles from?", options: ["Low to high concentration", "High to low concentration", "Cold to hot"], answer: 1 },
      { question: "Diffusion occurs fastest in?", options: ["Solid", "Liquid", "Gas"], answer: 2 },
      { question: "Why is diffusion fastest in gases?", options: ["Particles are heavy", "Particles move freely and fast", "Particles are close together"], answer: 1 },
      { question: "Diffusion in liquids is slower because particles?", options: ["Do not move", "Are closer together", "Are heavier"], answer: 1 },
      { question: "An example of diffusion is?", options: ["Ice melting", "Perfume spreading in air", "Water freezing"], answer: 1 }
    ]
  }
];

export default topics;



