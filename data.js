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
    { id: "MaleBathroom", type: "Washroom", owner: null, features: [] },
    { id: "FemaleBathroom", type: "Washroom", owner: null, features: [] }
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