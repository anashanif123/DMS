export  const categories = [
    "Cardiologist",
    "Dermatologist",
    "Endocrinologist",
    "Gastroenterologist",
    "Hematologist",
    "Nephrologist",
    "Neurologist",
    "Oncologist",
    "Ophthalmologist",
    "Orthopedic Surgeon",
    "Otolaryngologist (ENT)",
    "Pediatrician",
    "Psychiatrist",
    "Pulmonologist",
    "Radiologist",
    "Rheumatologist",
    "Urologist",
    "Allergist/Immunologist",
    "Anesthesiologist",
    "Emergency Medicine Specialist",
    "Family Medicine Doctor",
    "General Surgeon",
    "Geriatrician",
    "Gynecologist",
    "Infectious Disease Specialist",
    "Internal Medicine Doctor",
    "Obstetrician",
    "Pathologist",
    "Plastic Surgeon",
    "Podiatrist",
    "Sports Medicine Specialist",
    "Vascular Surgeon"
  ];
  export const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      fees: "$150",
      category: "Cardiologist",
      hospital: "City Heart Hospital",
      gender: "Male",
      appointmentTime: "9:00 AM - 11:00 AM"
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      fees: "$120",
      category: "Dermatologist",
      hospital: "Skin Care Clinic",
      gender: "Female",
      appointmentTime: "10:00 AM - 12:00 PM"
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      fees: "$180",
      category: "Endocrinologist",
      hospital: "Metabolic Health Center",
      gender: "Female",
      appointmentTime: "8:30 AM - 10:30 AM"
    },
    {
      id: 4,
      name: "Dr. Michael Davis",
      fees: "$160",
      category: "Gastroenterologist",
      hospital: "Gastro Health Clinic",
      gender: "Male",
      appointmentTime: "1:15 PM - 3:15 PM"
    },
    {
      id: 5,
      name: "Dr. Linda Wilson",
      fees: "$200",
      category: "Hematologist",
      hospital: "Blood Health Institute",
      gender: "Female",
      appointmentTime: "10:30 AM - 12:30 PM"
    },
    {
      id: 6,
      name: "Dr. James Garcia",
      fees: "$140",
      category: "Nephrologist",
      hospital: "Kidney Care Hospital",
      gender: "Male",
      appointmentTime: "9:00 AM - 11:00 AM"
    },
    {
      id: 7,
      name: "Dr. Patricia Martinez",
      fees: "$210",
      category: "Neurologist",
      hospital: "Neuro Center",
      gender: "Female",
      appointmentTime: "2:00 PM - 4:00 PM"
    },
    {
      id: 8,
      name: "Dr. Robert Rodriguez",
      fees: "$250",
      category: "Oncologist",
      hospital: "Cancer Care Institute",
      gender: "Male",
      appointmentTime: "11:00 AM - 1:00 PM"
    },
    {
      id: 9,
      name: "Dr. Jennifer Lee",
      fees: "$130",
      category: "Ophthalmologist",
      hospital: "Eye Vision Hospital",
      gender: "Female",
      appointmentTime: "1:00 PM - 3:00 PM"
    },
    {
      id: 10,
      name: "Dr. William Anderson",
      fees: "$300",
      category: "Orthopedic Surgeon",
      hospital: "Bone & Joint Hospital",
      gender: "Male",
      appointmentTime: "3:00 PM - 5:00 PM"
    },
    {
      id: 11,
      name: "Dr. Jessica Thomas",
      fees: "$170",
      category: "ENT Specialist",
      hospital: "ENT Care Clinic",
      gender: "Female",
      appointmentTime: "10:00 AM - 12:00 PM"
    },
    {
      id: 12,
      name: "Dr. Christopher Jackson",
      fees: "$110",
      category: "Pediatrician",
      hospital: "Child Health Center",
      gender: "Male",
      appointmentTime: "9:30 AM - 11:30 AM"
    },
    {
      id: 13,
      name: "Dr. Susan White",
      fees: "$200",
      category: "Psychiatrist",
      hospital: "Mental Wellness Hospital",
      gender: "Female",
      appointmentTime: "11:00 AM - 1:00 PM"
    },
    {
      id: 14,
      name: "Dr. Matthew Harris",
      fees: "$160",
      category: "Pulmonologist",
      hospital: "Respiratory Health Center",
      gender: "Male",
      appointmentTime: "1:30 PM - 3:30 PM"
    },
    {
      id: 15,
      name: "Dr. Karen Martin",
      fees: "$220",
      category: "Radiologist",
      hospital: "Diagnostic Imaging Center",
      gender: "Female",
      appointmentTime: "8:00 AM - 10:00 AM"
    },
    {
      id: 16,
      name: "Dr. Charles Thompson",
      fees: "$190",
      category: "Rheumatologist",
      hospital: "Arthritis & Joint Clinic",
      gender: "Male",
      appointmentTime: "2:00 PM - 4:00 PM"
    },
    {
      id: 17,
      name: "Dr. Elizabeth Martinez",
      fees: "$180",
      category: "Urologist",
      hospital: "Uro Care Hospital",
      gender: "Female",
      appointmentTime: "10:30 AM - 12:30 PM"
    },
    {
      id: 18,
      name: "Dr. George Clark",
      fees: "$130",
      category: "Allergist/Immunologist",
      hospital: "Allergy Health Clinic",
      gender: "Male",
      appointmentTime: "9:00 AM - 11:00 AM"
    },
    {
      id: 19,
      name: "Dr. Nancy Lewis",
      fees: "$210",
      category: "Anesthesiologist",
      hospital: "Surgical Anesthesia Center",
      gender: "Female",
      appointmentTime: "12:00 PM - 2:00 PM"
    },
    {
      id: 20,
      name: "Dr. Daniel Robinson",
      fees: "$150",
      category: "Emergency Medicine Specialist",
      hospital: "Emergency Care Hospital",
      gender: "Male",
      appointmentTime: "3:00 PM - 5:00 PM"
    }
  ];
  
  export const appointments = [
  {
    user: {
      name: "Alice Johnson",
      email: "alice.johnson@example.com"
    },
    appointmentTime: "9:15 AM",
    status: "Confirmed",
    appointmentDate: "2024-11-10",
    doctor: {
      name: "Dr. John Smith",
      hospital: "City Heart Hospital"
    }
  },
  {
    user: {
      name: "Bob Martinez",
      email: "bob.martinez@example.com"
    },
    appointmentTime: "10:00 AM",
    status: "Pending",
    appointmentDate: "2024-11-11",
    doctor: {
      name: "Dr. Sarah Johnson",
      hospital: "Skin Care Clinic"
    }
  },
  {
    user: {
      name: "Catherine Brown",
      email: "catherine.brown@example.com"
    },
    appointmentTime: "8:45 AM",
    status: "Cancelled",
    appointmentDate: "2024-11-09",
    doctor: {
      name: "Dr. Emily Brown",
      hospital: "Metabolic Health Center"
    }
  },
  {
    user: {
      name: "David Lee",
      email: "david.lee@example.com"
    },
    appointmentTime: "1:30 PM",
    status: "Confirmed",
    appointmentDate: "2024-11-08",
    doctor: {
      name: "Dr. Michael Davis",
      hospital: "Gastro Health Clinic"
    }
  },
  {
    user: {
      name: "Emma Wilson",
      email: "emma.wilson@example.com"
    },
    appointmentTime: "10:45 AM",
    status: "Pending",
    appointmentDate: "2024-11-12",
    doctor: {
      name: "Dr. Linda Wilson",
      hospital: "Blood Health Institute"
    }
  },
  {
    user: {
      name: "Frank Garcia",
      email: "frank.garcia@example.com"
    },
    appointmentTime: "9:15 AM",
    status: "Confirmed",
    appointmentDate: "2024-11-13",
    doctor: {
      name: "Dr. James Garcia",
      hospital: "Kidney Care Hospital"
    }
  },
  {
    user: {
      name: "Grace Martinez",
      email: "grace.martinez@example.com"
    },
    appointmentTime: "2:15 PM",
    status: "Cancelled",
    appointmentDate: "2024-11-07",
    doctor: {
      name: "Dr. Patricia Martinez",
      hospital: "Neuro Center"
    }
  },
  {
    user: {
      name: "Henry Rodriguez",
      email: "henry.rodriguez@example.com"
    },
    appointmentTime: "11:30 AM",
    status: "Confirmed",
    appointmentDate: "2024-11-14",
    doctor: {
      name: "Dr. Robert Rodriguez",
      hospital: "Cancer Care Institute"
    }
  },
  {
    user: {
      name: "Isabella Lee",
      email: "isabella.lee@example.com"
    },
    appointmentTime: "1:15 PM",
    status: "Pending",
    appointmentDate: "2024-11-15",
    doctor: {
      name: "Dr. Jennifer Lee",
      hospital: "Eye Vision Hospital"
    }
  },
  {
    user: {
      name: "Jack Anderson",
      email: "jack.anderson@example.com"
    },
    appointmentTime: "3:30 PM",
    status: "Confirmed",
    appointmentDate: "2024-11-16",
    doctor: {
      name: "Dr. William Anderson",
      hospital: "Bone & Joint Hospital"
    }
  },
];
