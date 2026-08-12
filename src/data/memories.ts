export interface City {
  id: string;
  name: string;
  country: string;

  coordinates: {
    lng: number;
    lat: number;
  };

  history: string;
}

export const cities: City[] = [
  {
    id: "florence",
    name: "Florence",
    country: "Italy",
    coordinates: {
      lng: 11.2558,
      lat: 43.7696,
    },
    history:
      "Florence was one of the places that left a strong impression on me. I spent time here discovering the city, walking through its streets and experiencing its atmosphere.",
  },

  {
    id: "paris",
    name: "Paris",
    country: "France",
    coordinates: {
      lng: 2.3522,
      lat: 48.8566,
    },
    history:
      "Paris is connected to one of those moments that I still remember years later. There is something about this city that makes even ordinary walks feel memorable.",
  },

  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    coordinates: {
      lng: -9.1393,
      lat: 38.7223,
    },
    history:
      "Lisbon was a particularly memorable trip. The streets, the light and the atmosphere made this place very different from anywhere else I had been.",
  },

  {
    id: "new-york",
    name: "New York",
    country: "United States",
    coordinates: {
      lng: -74.006,
      lat: 40.7128,
    },
    history:
      "New York was one of those places where everything felt bigger and faster. This is the story of what brought me here.",
  },

  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    coordinates: {
      lng: 139.6917,
      lat: 35.6895,
    },
    history:
      "Tokyo was an unforgettable experience. The contrast between the quiet places and the intensity of the city made this trip particularly special.",
  },
];
