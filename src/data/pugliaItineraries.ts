export type PugliaDay = {
  day: number;
  title: string;
  city: {
    name: string;
    description: string;
  };
  beach: {
    name: string;
    description: string;
  };
};

export type PugliaItinerary = {
  id: "bari-central" | "lecce-salento" | "salento-deep-dive";
  title: string;
  focus: string;
  bases: {
    base1: string;
    base1Nights: string;
    base2: string;
    base2Nights: string;
  };
  days: PugliaDay[];
  keyBeaches: string[];
};

export const pugliaItineraries: PugliaItinerary[] = [
  {
    id: "bari-central",
    title: "Bari & Central Puglia",
    focus:
      "Historic ports, iconic whitewashed hilltop towns, trulli architecture, and Adriatic coves",

    bases: {
      base1: "Bari — Historic Center or Murat District",
      base1Nights: "Nights 1–3",
      base2: "Countryside Masseria around Ostuni or Ceglie Messapica",
      base2Nights: "Nights 4–6",
    },

    days: [
      {
        day: 1,
        title: "Bari Historic Center & Urban Coast",
        city: {
          name: "Bari",
          description:
            "Explore Bari Vecchia, watch local nonnas roll orecchiette on Via Arco Basso, and visit Basilica of Saint Nicholas.",
        },
        beach: {
          name: "Pane e Pomodoro Beach",
          description:
            "10 mins from the center, for an urban coastal stroll or swim.",
        },
      },
      {
        day: 2,
        title: "Dramatic Cliffs & Coastal Panoramas",
        city: {
          name: "Polignano a Mare",
          description:
            "Walk the cliffside panoramic balconies and whitewashed historic center.",
        },
        beach: {
          name: "Lama Monachile",
          description:
            "The famous pebble cove in Polignano, flanked by limestone cliffs.",
        },
      },
      {
        day: 3,
        title: "Fortified Harbor & Secluded Coves",
        city: {
          name: "Monopoli",
          description:
            "Tour Charles V Castle, ancient sea walls, and the vibrant fishing port streets.",
        },
        beach: {
          name: "Cala Monaci",
          description:
            "5–10 mins from Monopoli center, a serene sandy cove nestled between small rocks.",
        },
      },
      {
        day: 4,
        title: "Valle d'Itria Relocation & Trulli Towns",
        city: {
          name: "Alberobello & Locorotondo",
          description:
            "Check out of Bari; drive to Alberobello for the cone-roofed trulli, then spend the afternoon in Locorotondo.",
        },
        beach: {
          name: "Lido Morelli",
          description:
            "25 mins down to the coast, with a wide sandy stretch backed by dunes.",
        },
      },
      {
        day: 5,
        title: "Culinary Capital & Protected Marine Sanctuary",
        city: {
          name: "Ceglie Messapica",
          description:
            "Sample traditional Biscotto di Ceglie and tour its quiet medieval heart.",
        },
        beach: {
          name: "Torre Guaceto Nature Reserve",
          description:
            "25 mins from Ceglie, an undeveloped marine sanctuary with pristine waters.",
        },
      },
      {
        day: 6,
        title: "Baroque Architecture & The White City",
        city: {
          name: "Martina Franca & Ostuni",
          description:
            "Visit Martina Franca in the morning for grand Baroque plazas, ending the afternoon or evening in Ostuni.",
        },
        beach: {
          name: "Torre Pozzelle",
          description:
            "15 mins from Ostuni, a series of wild, protected rocky coves with translucent sea water.",
        },
      },
    ],

    keyBeaches: ["Lama Monachile", "Torre Guaceto", "Torre Pozzelle"],
  },

  {
    id: "lecce-salento",
    title: "Lecce & Salento Hub",
    focus:
      "Grand Baroque architecture, dual-coast access (Adriatic & Ionian seas), and vibrant coastal drives",

    bases: {
      base1: "Lecce — Historic Center",
      base1Nights: "Nights 1–3",
      base2: "Otranto — Town Center or Coastal Masseria",
      base2Nights: "Nights 4–6",
    },

    days: [
      {
        day: 1,
        title: "Baroque Capital Immersion",
        city: {
          name: "Lecce",
          description:
            "Explore Piazza del Duomo, Basilica di Santa Croce, and sample warm pasticciotto pastries.",
        },
        beach: {
          name: "Torre dell'Orso",
          description:
            "25 mins east of Lecce, featuring soft white sand, pine forests, and sea stacks.",
        },
      },
      {
        day: 2,
        title: "Ionian Sea Turquoise Waters",
        city: {
          name: "Porto Cesareo",
          description:
            "Drive west across the peninsula to explore the seaside town of Porto Cesareo.",
        },
        beach: {
          name: "Punta Prosciutto",
          description:
            "40 mins west of Lecce, famous for wild dunes and shallow turquoise water.",
        },
      },
      {
        day: 3,
        title: "Coastal Sinkholes & Fortified Walls",
        city: {
          name: "Roca Vecchia",
          description:
            "Explore the Roca Vecchia coastal region and surrounding historic watchtowers.",
        },
        beach: {
          name: "Cave of Poetry",
          description:
            "30 mins from Lecce, a stunning natural limestone swimming sinkhole.",
        },
      },
      {
        day: 4,
        title: "Easternmost Citadel",
        city: {
          name: "Otranto",
          description:
            "Check out of Lecce, relocate to Otranto, walk the medieval sea ramparts, and view the Cathedral floor mosaic.",
        },
        beach: {
          name: "Baia dei Turchi",
          description:
            "10 mins north of Otranto, reached via a scenic walk through pine forests.",
        },
      },
      {
        day: 5,
        title: "Western Fortified Island Town",
        city: {
          name: "Gallipoli",
          description:
            "Explore the island old town connected to the mainland via a 16th-century bridge.",
        },
        beach: {
          name: "Porto Selvaggio Beach",
          description:
            "20 mins north of Gallipoli, inside a protected natural park with a pine forest walk.",
        },
      },
      {
        day: 6,
        title: "Deep South Panorama",
        city: {
          name: "Santa Maria di Leuca",
          description:
            "Visit the southern tip of Italy, where the Adriatic and Ionian seas meet.",
        },
        beach: {
          name: "Marina di Pescoluse",
          description:
            "20 mins west of Leuca, nicknamed the “Maldives of Salento”.",
        },
      },
    ],

    keyBeaches: ["Punta Prosciutto", "Cave of Poetry", "Marina di Pescoluse"],
  },

  {
    id: "salento-deep-dive",
    title: "Complete Salento Deep Dive",
    focus:
      "A beach-centric loop dedicated purely to the southern peninsula's absolute best shorelines",

    bases: {
      base1: "Gallipoli — Western Ionian Base",
      base1Nights: "Nights 1–3",
      base2: "Otranto — Eastern Adriatic Base",
      base2Nights: "Nights 4–6",
    },

    days: [
      {
        day: 1,
        title: "Gallipoli Old Town & Ionian Sunset",
        city: {
          name: "Gallipoli",
          description:
            "Wander Gallipoli's old town walls, fish market, and enjoy waterfront dining over the Ionian Sea.",
        },
        beach: {
          name: "Baia Verde",
          description:
            "10 mins south of Gallipoli, a popular stretch of golden sand with vibrant beach clubs.",
        },
      },
      {
        day: 2,
        title: "The Northern Ionian Dunes",
        city: {
          name: "Porto Cesareo",
          description:
            "Explore the seaside fishing town, famous for fresh fish markets and harbour strolls.",
        },
        beach: {
          name: "Punta Prosciutto",
          description:
            "Spend a relaxed day along pristine white sand dunes and shallow crystal waters.",
        },
      },
      {
        day: 3,
        title: "Nature Reserves & Frescoed Towns",
        city: {
          name: "Galatina",
          description:
            "Stop inland to view medieval frescoes inside Basilica di Santa Caterina d'Alessandria.",
        },
        beach: {
          name: "Porto Selvaggio Beach",
          description:
            "Enjoy cliff swimming, pine-shaded paths, and natural spring waters.",
        },
      },
      {
        day: 4,
        title: "Cross to the Adriatic Coast & Medieval History",
        city: {
          name: "Otranto",
          description:
            "Check out of Gallipoli, drive east to Otranto, and visit the historic Aragonese Castle.",
        },
        beach: {
          name: "Baia dei Turchi",
          description:
            "A beautiful secluded cove surrounded by Mediterranean greenery.",
        },
      },
      {
        day: 5,
        title: "Dramatic Coastal Highway & Sea Caves",
        city: {
          name: "SP358, Castro & Santa Cesarea Terme",
          description:
            "Drive the SP358 coastal highway past Castro and Santa Cesarea Terme.",
        },
        beach: {
          name: "Cave of Poetry & Torre dell'Orso",
          description:
            "Visit Cave of Poetry in the morning, followed by Torre dell'Orso beach in the afternoon.",
        },
      },
      {
        day: 6,
        title: "The Southern Tip & White Sands",
        city: {
          name: "Santa Maria di Leuca",
          description:
            "View the iconic lighthouse and grand 19th-century coastal villas.",
        },
        beach: {
          name: "Marina di Pescoluse",
          description:
            "Finish with a relaxing day on wide, shallow white sand beaches.",
        },
      },
    ],

    keyBeaches: ["Baia dei Turchi", "Porto Selvaggio", "Punta Prosciutto"],
  },
];

export const defaultPugliaItinerary = pugliaItineraries[0];
