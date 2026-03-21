const rooms = [
    { id: "ITC304", type: "Faculty Office", floor: "C", owner: "Dr. Benedicenti", features: ["Office Hours"] },
    { id: "ITC306", type: "Faculty Office", floor: "C", owner: "Dean's Office", features: ["Office Hours"] },
    { id: "ITC314", type: "Faculty Office", floor: "C", owner: "Co-Op Office", features: ["Office Hours"] },
    { id: "ITC315", type: "Faculty Office", floor: "C", owner: "Candace Currie", features: ["Office Hours"] },
    { id: "ITC316", type: "Faculty Office", floor: "C", owner: "Bryan Facey", features: ["Office Hours"] },
    { id: "ITC317", type: "Classroom",      floor: "C", owner: null, features: ["Projector"] },
    { id: "ITC318", type: "Faculty Office", floor: "C", owner: "Dr. Kent", features: ["Office Hours"] },
    { id: "ITC319", type: "Faculty Office", floor: "C", owner: "Sonya Hull", features: ["Office Hours"] },
    { id: "ITC320", type: "Faculty Office", floor: "C", owner: "Dr. McAllister", features: ["Office Hours"] },
    { id: "ITC321", type: "Faculty Office", floor: "C", owner: "Dr. Bremner", features: ["Office Hours"] },
    { id: "ITC322", type: "Faculty Office", floor: "C", owner: "Dr. Evans", features: ["Office Hours"] },
    { id: "ITC323", type: "Faculty Office", floor: "C", owner: "Dr. Cook", features: ["Office Hours"] },
    { id: "Male Bathroom",               type: "Washroom", floor: "C", owner: null, features: [] },
    { id: "Female Bathroom",             type: "Washroom", floor: "C", owner: null, features: [] },
    { id: "Male Bathroom floor D",       type: "Washroom", floor: "D", owner: null, features: [] },
    { id: "Female Bathroom floor D",     type: "Washroom", floor: "D", owner: null, features: [] },
    { id: "CS Lounge",                   type: "Social",   floor: "D", owner: null, features: [] },
    { id: "ITD414", type: "Lab",           floor: "D", owner: null, features: [] },
    { id: "ITD415", type: "Lab",           floor: "D", owner: null, features: [] },
    { id: "ITD418", type: "Faculty Office", floor: "D", owner: "", features: ["Office Hours"] },
    { id: "ITD419", type: "Faculty Office", floor: "D", owner: "", features: ["Office Hours"] },
    { id: "ITD420", type: "Faculty Office", floor: "D", owner: "Dr. Fleming", features: ["Office Hours"] },
    { id: "ITD421", type: "Faculty Office", floor: "D", owner: "", features: ["Office Hours"] },
    { id: "ITD422", type: "Faculty Office", floor: "D", owner: "Dr. Bidlake", features: ["Office Hours"] },
    { id: "ITD423", type: "Faculty Office", floor: "D", owner: "", features: ["Office Hours"] },
];

const announcements = [
    {
        title: "CSA Board Game Night!",
        time: "Jan 22 @ 18:00",
        description: "Come join us for games, snacks, and prizes in the CS Lounge. All students welcome."
    },
    {
        title: "Co-Op Information Session",
        time: "Jan 25 @ 13:30",
        description: "Learn about upcoming co-op opportunities, application tips, and employer expectations."
    },
    {
        title: "Guest Talk: AI in Industry",
        time: "Jan 28 @ 16:00",
        description: "Industry professionals discuss real-world AI applications, careers, and emerging trends."
    },
    {
        title: "Midterm Exam Schedule Posted",
        time: "Available Now",
        description: "Midterm schedules are now available. Please check your course portal for details."
    },
    {
        title: "CS Help Centre Hours",
        time: "Mon–Fri @ 10:00–16:00",
        description: "Drop by the Help Centre for assistance with coursework, programming, and assignments."
    },
    {
        title: "Network Maintenance Notice",
        time: "Jan 30 @ 22:00–23:30",
        description: "Brief network interruptions may occur during scheduled system maintenance."
    },
    {
        title: "Winter Term Add/Drop Deadline",
        time: "Feb 02 @ 23:59",
        description: "Final deadline to modify course registrations. Late requests may not be approved."
    }
];

const faqs = [
  { question: "What room number is the Dean's Office", answer: "C304" },
  { question: "What are the CS Library hours?", answer: "Mon–Thu 8am–9pm, Friday: 8am-5pm" },
  { question: "The kiosk isn't working properly, who do I contact?", answer: "Email itservicedesk@unb.ca" }
];