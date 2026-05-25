const topics = [
  {
    title: "Physical Quantities and Units",
    summary:
      "Physical quantities are measurable properties in physics. They are divided into fundamental quantities and derived quantities. Units are standard measurements used to express these quantities. The SI system is the internationally accepted system of units.",
    questions: [
      { question: "Which of the following is a physical quantity?", options: ["Beauty", "Mass", "Happiness"], answer: 1 },
      { question: "The SI unit of length is?", options: ["Kilogram", "Meter", "Second"], answer: 1 },
      { question: "Which is a derived quantity?", options: ["Time", "Temperature", "Velocity"], answer: 2 },
      { question: "The SI unit of mass is?", options: ["Gram", "Kilogram", "Newton"], answer: 1 },
      { question: "Which instrument is used to measure time?", options: ["Thermometer", "Stopwatch", "Meter rule"], answer: 1 }
    ]
  },

  {
    title: "Fundamental Quantities",
    summary:
      "Fundamental quantities are basic physical quantities that cannot be derived from others. They include length, mass, time, electric current, temperature, amount of substance, and luminous intensity.",
    questions: [
      { question: "Which of these is a fundamental quantity?", options: ["Force", "Density", "Mass"], answer: 2 },
      { question: "The SI unit of temperature is?", options: ["Kelvin", "Celsius", "Fahrenheit"], answer: 0 },
      { question: "Electric current is measured in?", options: ["Ampere", "Volt", "Ohm"], answer: 0 },
      { question: "Which quantity is measured in mole?", options: ["Length", "Amount of substance", "Mass"], answer: 1 },
      { question: "Luminous intensity is measured in?", options: ["Candela", "Newton", "Joule"], answer: 0 }
    ]
  },

  {
    title: "Derived Quantities",
    summary:
      "Derived quantities are obtained from combinations of fundamental quantities. Examples include velocity, force, density, pressure, and energy. Their units are derived from SI base units.",
    questions: [
      { question: "Velocity is derived from?", options: ["Length and time", "Mass and time", "Current and temperature"], answer: 0 },
      { question: "The SI unit of force is?", options: ["Joule", "Newton", "Pascal"], answer: 1 },
      { question: "Density is defined as?", options: ["Mass × volume", "Mass ÷ volume", "Volume ÷ mass"], answer: 1 },
      { question: "Pressure is measured in?", options: ["Newton", "Pascal", "Watt"], answer: 1 },
      { question: "Energy is measured in?", options: ["Joule", "Ampere", "Meter"], answer: 0 }
    ]
  },

  {
    title: "Dimensions of Physical Quantities",
    summary:
      "Dimensions show how physical quantities relate to fundamental quantities such as mass, length, and time. Dimensional formulas are used to check equations and derive relationships between physical quantities.",
    questions: [
      { question: "The dimension of velocity is?", options: ["LT⁻¹", "MLT⁻²", "L²T⁻¹"], answer: 0 },
      { question: "Force has the dimension?", options: ["MLT⁻²", "ML²T⁻²", "LT⁻¹"], answer: 0 },
      { question: "The dimension of density is?", options: ["ML⁻³", "ML³", "M⁻¹L³"], answer: 0 },
      { question: "Pressure has the dimension?", options: ["ML⁻¹T⁻²", "MLT⁻²", "ML²T⁻²"], answer: 0 },
      { question: "Dimensional analysis is used to?", options: ["Measure temperature", "Check correctness of equations", "Measure pressure"], answer: 1 }
    ]
  },

  {
    title: "Measurement Instruments",
    summary:
      "Different instruments are used to measure physical quantities accurately. Examples include meter rule, vernier calipers, micrometer screw gauge, stopwatch, thermometer, and balance.",
    questions: [
      { question: "Which instrument measures length accurately?", options: ["Thermometer", "Meter rule", "Balance"], answer: 1 },
      { question: "Vernier calipers are used to measure?", options: ["Temperature", "Small lengths", "Time"], answer: 1 },
      { question: "Which instrument measures mass?", options: ["Balance", "Stopwatch", "Ammeter"], answer: 0 },
      { question: "Temperature is measured using?", options: ["Thermometer", "Barometer", "Voltmeter"], answer: 0 },
      { question: "Micrometer screw gauge measures?", options: ["Very small thickness", "Current", "Pressure"], answer: 0 }
    ]
  },

  {
    title: "Accuracy, Precision and Errors",
    summary:
      "Accuracy refers to how close a measurement is to the true value, while precision refers to consistency in repeated measurements. Errors may occur due to faulty instruments, wrong readings, or human mistakes.",
    questions: [
      { question: "Accuracy means?", options: ["Consistency", "Closeness to true value", "Random reading"], answer: 1 },
      { question: "Precision refers to?", options: ["Correct unit", "Repeated consistency", "Large error"], answer: 1 },
      { question: "An example of instrumental error is?", options: ["Parallax error", "Faulty thermometer", "Wrong calculation"], answer: 1 },
      { question: "Parallax error occurs when?", options: ["Reading at wrong angle", "Instrument is broken", "Object is hot"], answer: 0 },
      { question: "Repeated measurements help to?", options: ["Increase error", "Improve reliability", "Reduce units"], answer: 1 }
    ]
  }
];

export default topics;



