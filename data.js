const rooms = [
    { id: "C304", type: "Faculty Office", owner: "Dr. Benedicenti", features: ["Office Hours"] },
    { id: "C306", type: "Faculty Office", owner: "Dean's Office", features: ["Office Hours"] },
    { id: "C314", type: "Faculty Office", owner: "Co-Op Office", features: ["Office Hours"] },
    { id: "C315", type: "Faculty Office", owner: "Candace Currie", features: ["Office Hours"] },
    { id: "C316", type: "Faculty Office", owner: "Bryan Facey", features: ["Office Hours"] },
    { id: "C317", type: "Classroom", owner: null, features: ["Projector"] },
    { id: "C318", type: "Faculty Office", owner: "Dr. Kent", features: ["Office Hours"] },
    { id: "C319", type: "Faculty Office", owner: "Sonya Hull", features: ["Office Hours"] },
    { id: "C320", type: "Faculty Office", owner: "Dr. McAllister", features: ["Office Hours"] },
    { id: "C321", type: "Faculty Office", owner: "Dr. Bremner", features: ["Office Hours"] },
    { id: "C322", type: "Faculty Office", owner: "Dr. Evans", features: ["Office Hours"] },
    { id: "C323", type: "Faculty Office", owner: "Dr. Cook", features: ["Office Hours"] },
    { id: "Male Bathroom", type: "Washroom", owner: null, features: [] },
    { id: "Female Bathroom", type: "Washroom", owner: null, features: [] }
];

const announcements = [
    {
        title: "CSA Board Game Night!",
        time: "Jan 22 @ 6:00pm",
        description: "Come join us for games in the CS Lounge."
    }
];

const faqs = [
  { question: "What room number is the Dean's Office", answer: "C304" },
  { question: "What are the CS Library hours?", answer: "Mon–Thu 8am–9pm, Friday: 8am-5pm" },
  { question: "The kiosk isn't working properly, who do I contact?", answer: "Email itservicedesk@unb.ca" }
];