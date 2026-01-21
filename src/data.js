const topics = [
   {
    title: "Speed",
    summary:
      "Speed is the distance travelled per unit time. It is a scalar quantity and does not consider direction. ",
    questions: [
      { question:"Speed is?", options:["Distance × time","Distance ÷ time","Time ÷ distance"], answer:1 },
      { question:"Speed is a?", options:["Vector","Scalar","Force"], answer:1 },
      { question:"SI unit of speed?", options:["m","m/s","kg"], answer:1 },
      { question:"Speed does not include?", options:["Distance","Time","Direction"], answer:2 },
      { question:"Speed measures how?", options:["Fast an object moves","Heavy an object is","Large an object is"], answer:0 }
    ]
  },

  {
    title: "Velocity",
    summary:
      "Velocity is the speed of an object in a given direction. Unlike speed, velocity is a vector quantity. ",
    questions: [
      { question:"Velocity is?", options:["Speed only","Speed with direction","Distance only"], answer:1 },
      { question:"Velocity is a?", options:["Scalar","Vector","Unit"], answer:1 },
      { question:"Which includes direction?", options:["Speed","Velocity","Distance"], answer:1 },
      { question:"SI unit of velocity?", options:["m/s","m","s"], answer:0 },
      { question:"Changing direction affects?", options:["Speed only","Velocity","Distance"], answer:1 }
    ]
  },

  {
    title: "Acceleration",
    summary:
      "Acceleration is the rate of change of velocity with time. It occurs when an object changes speed, direction, or both.",
    questions: [
      { question:"Acceleration is change in?", options:["Speed","Velocity","Distance"], answer:1 },
      { question:"Acceleration occurs when?", options:["Velocity is constant","Velocity changes","Object stops"], answer:1 },
      { question:"Formula for acceleration?", options:["v/t","(v−u)/t","s/t"], answer:1 },
      { question:"SI unit of acceleration?", options:["m/s","m/s²","kg"], answer:1 },
      { question:"Deceleration is?", options:["Negative acceleration","Zero speed","Constant motion"], answer:0 }
    ]
  },

  {
    title: "Distance–Time Graph",
    summary:
      "A distance–time graph shows how distance changes with time. The gradient of the graph represents speed. ",
    questions: [
      { question:"Distance–time graph shows?", options:["Speed change","Distance vs time","Acceleration vs time"], answer:1 },
      { question:"Gradient represents?", options:["Acceleration","Speed","Distance"], answer:1 },
      { question:"Straight line graph means?", options:["Changing speed","Constant speed","No motion"], answer:1 },
      { question:"Horizontal line shows?", options:["Constant speed","At rest","Acceleration"], answer:1 },
      { question:"Steeper graph means?", options:["Slower speed","Higher speed","No movement"], answer:1 }
    
    ]
  },

  {
    title: "Speed–Time Graph",
    summary:
      "A speed–time graph shows how speed changes with time. The gradient represents acceleration, while the area under the graph represents distance travelled.",
    questions: [
      { question:"Speed–time graph gradient gives?", options:["Speed","Acceleration","Distance"], answer:1 },
      { question:"Area under graph gives?", options:["Speed","Distance","Acceleration"], answer:1 },
      { question:"Horizontal line means?", options:["Constant speed","No motion","Changing speed"], answer:0 },
      { question:"Positive gradient shows?", options:["Deceleration","Acceleration","Rest"], answer:1 },
      { question:"Negative gradient means?", options:["Acceleration","Deceleration","Constant speed"], answer:1 }
    ]
  
  },
   {
    title: "Acceleration of Free Fall",
    summary:
      "The acceleration of free fall is the constant acceleration experienced by an object falling under the influence of gravity alone. Near the Earth’s surface, this acceleration is approximately 9.8 m/s² and is represented by the symbol g. All objects fall with the same acceleration in the absence of air resistance.",
    questions: [
      { question:"Free fall occurs when an object is under?", options:["Air pressure only","Gravity only","Magnetism"], answer:1 },
      { question:"Symbol for acceleration due to gravity?", options:["a","g","v"], answer:1 },
      { question:"Value of g on Earth is about?", options:["9.8 m/s","9.8 m/s²","98 m/s²"], answer:1 },
      { question:"In free fall, objects fall?", options:["At different rates","At the same rate","Depending on mass"], answer:1 },
      { question:"Free fall ignores?", options:["Gravity","Air resistance","Time"], answer:1 }
        
    ]
  },
];

export default topics;





