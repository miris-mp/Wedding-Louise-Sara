import gizaEgypt from "../assets/images/memories/gizaEgypt.jpg";
import nassauBahamas from "../assets/images/memories/nassauBahamas.jpg";
import seljalandsfossIceland from "../assets/images/memories/seljalandsfossIceland.jpg";
import chichenItzaMexico from "../assets/images/memories/chichenItzaMexico.webp";
import NiagaraFallsCanada from "../assets/images/memories/NiagaraFallsCanada.jpg";
import glastonburyUK from "../assets/images/memories/glastonburyUK.jpg";
import sanBenedetto from "../assets/images/memories/sanBenedetto.jpg";
import lakeOhridNorthMacedonia from "../assets/images/memories/lakeOhridNorthMacedonia.jpg";
import philadelphiaUSA from "../assets/images/memories/philadelphiaUSA.jpg";
import pitlochryScotland from "../assets/images/memories/pitlochryScotland.jpg";
import newYorkUSA from "../assets/images/memories/newYorkUSA.jpg";
import capetownsouthAfrica from "../assets/images/memories/capetownsouthAfrica.jpg";
import plettenburghsouthAfrica from "../assets/images/memories/plettenburghsouthAfrica.jpg";
import sardiniaItaly from "../assets/images/memories/sardiniaItaly.jpg";
import sevilleSpain from "../assets/images/memories/sevilleSpain.jpg";
import algarvePortugal from "../assets/images/memories/AlgarvePortugal.jpg";
import cappadociaTurkey from "../assets/images/memories/cappadociaTurkey.jpg";
import summerdownUnitedKingdom from "../assets/images/memories/summerdownUnitedKingdom.jpg";
import lochLomondScotland from "../assets/images/memories/lochLomondScotland.jpg";
import lakeGardaItaly from "../assets/images/memories/lakeGardaItaly.jpg";

import type { ImageMetadata } from "astro";

export interface City {
  id: string;
  name: string;
  country: string;

  coordinates: {
    lng: number;
    lat: number;
  };

  history: string;
  image: ImageMetadata;
}

export const cities: City[] = [
  {
    id: "giza",
    name: "Giza",
    country: "Egypt",
    coordinates: {
      lng: 31.1313,
      lat: 29.9765,
    },
    history:
      "Giza offered a profound connection to ancient history. Standing before the monumental pyramids and feeling the weight of thousands of years of human heritage was an extraordinary experience.",
    image: gizaEgypt,
  },

  {
    id: "nassau-bahamas",
    name: "Bahamas",
    country: "Bahamas",
    coordinates: {
      lng: -77.3554,
      lat: 25.0343,
    },
    history:
      "The trip to the Bahamas was defined by endless stretches of turquoise water and vibrant island life. It was a place that offered total tranquility and unhurried days by the sea.",
    image: nassauBahamas,
  },

  {
    id: "seljalandsfoss",
    name: "Seljalandsfoss",
    country: "Iceland",
    coordinates: {
      lng: -19.9886,
      lat: 63.6156,
    },
    history:
      "Seljalandsfoss captured the raw, dramatic beauty of Iceland's landscape. Walking behind the cascade and feeling the mist of the powerful waterfall was an invigorating moment.",
    image: seljalandsfossIceland,
  },

  {
    id: "chichen-itza",
    name: "Chichen Itza",
    country: "Mexico",
    coordinates: {
      lng: -88.5678,
      lat: 20.6843,
    },
    history:
      "Exploring Chichen Itza provided a captivating look into Maya civilization. The scale and astronomical precision of El Castillo made an indelible impression.",
    image: chichenItzaMexico,
  },

  {
    id: "lake-garda",
    name: "Lake Garda",
    country: "Italy",
    coordinates: {
      lng: 10.6408,
      lat: 45.6049,
    },
    history:
      "Lake Garda combined sweeping alpine backdrops with the relaxed charm of northern Italian lakeside towns. Wandering its historic shores felt both peaceful and inspiring.",
    image: lakeGardaItaly,
  },

  {
    id: "niagara-falls",
    name: "Niagara Falls",
    country: "Canada",
    coordinates: {
      lng: -79.0849,
      lat: 43.0896,
    },
    history:
      "Niagara Falls was a spectacular display of natural force. Seeing the sheer volume of water rushing over the edge left a lasting memory of nature's power.",
    image: NiagaraFallsCanada,
  },

  {
    id: "glastonbury",
    name: "Glastonbury",
    country: "United Kingdom",
    coordinates: {
      lng: -2.7169,
      lat: 51.1472,
    },
    history:
      "Glastonbury had a distinct atmosphere filled with myths, legends, and history. Climbing the Tor and taking in the panoramic views of the Somerset countryside was unforgettable.",
    image: glastonburyUK,
  },

  {
    id: "san-benedetto-del-tronto",
    name: "San Benedetto del Tronto",
    country: "Italy",
    coordinates: {
      lng: 13.8796,
      lat: 42.9553,
    },
    history:
      "San Benedetto del Tronto brought delightful moments along the Adriatic coast. The palm-lined promenade and fresh seafood captured the essence of coastal Italian summer.",
    image: sanBenedetto,
  },

  {
    id: "skopje",
    name: "Skopje (North Macedonia)",
    country: "North Macedonia",
    coordinates: {
      lng: 21.4314,
      lat: 41.9981,
    },
    history:
      "Exploring North Macedonia revealed a rich blend of cultural influences, ancient history, and scenic landscapes. It offered a unique and rewarding journey through Balkan heritage.",
    image: lakeOhridNorthMacedonia,
  },

  {
    id: "philadelphia",
    name: "Philadelphia",
    country: "United States",
    coordinates: {
      lng: -75.1652,
      lat: 39.9526,
    },
    history:
      "Philadelphia felt alive with historic significance and energy. From walking through historic cobblestone streets to enjoying its vibrant food scene, it was a memorable city to explore.",
    image: philadelphiaUSA,
  },

  {
    id: "pitlochry",
    name: "Pitlochry",
    country: "United Kingdom",
    coordinates: {
      lng: -3.7331,
      lat: 56.7042,
    },
    history:
      "Nestled in the Scottish Highlands, Pitlochry offered breathtaking mountain air, lush pine forests, and quiet charm. It was the perfect refuge in nature.",
    image: pitlochryScotland,
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
      "New York was one of those places where everything felt bigger and faster. Moving through its iconic neighborhoods made every corner feel like part of a larger story.",
    image: newYorkUSA,
  },

  {
    id: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    coordinates: {
      lng: 18.4241,
      lat: -33.9249,
    },
    history:
      "Cape Town stood out for its dramatic scenery, where majestic mountains meet two oceans. Standing atop Table Mountain looking out over the coastline was unforgettable.",
    image: capetownsouthAfrica,
  },

  {
    id: "plettenberg-bay",
    name: "Plettenberg Bay",
    country: "South Africa",
    coordinates: {
      lng: 23.3716,
      lat: -34.0575,
    },
    history:
      "Plettenberg Bay along the Garden Route was a haven of golden beaches, ocean wildlife, and coastal forest trails that showcased the incredible natural beauty of South Africa.",
    image: plettenburghsouthAfrica,
  },

  {
    id: "sardinia",
    name: "La pelosa, Stintino",
    country: "Italy",
    coordinates: {
      lng: 8.2019841,
      lat: 40.9629653,
    },
    history:
      "Sardinia felt like a world of its own, with crystal-clear waters, rugged mountainous interiors, and ancient coastal traditions that made every day of the trip feel special.",
    image: sardiniaItaly,
  },

  {
    id: "seville",
    name: "Seville",
    country: "Spain",
    coordinates: {
      lng: -5.9845,
      lat: 37.3891,
    },
    history:
      "Seville captivated me with its warm sun, historic Moorish architecture, and vibrant Andalusian spirit. Walking through the narrow streets of Barrio Santa Cruz was pure magic.",
    image: sevilleSpain,
  },

  {
    id: "algarve",
    name: "Algarve",
    country: "Portugal",
    coordinates: {
      lng: -8.0201,
      lat: 37.0179,
    },
    history:
      "The Algarve coastline was breathtaking with its dramatic golden sea cliffs, hidden coves, and warm ocean breeze. It was a place for pure relaxation and coastal exploration.",
    image: algarvePortugal,
  },

  {
    id: "loch-lomond",
    name: "Loch Lomond",
    country: "United Kingdom",
    coordinates: {
      lng: -4.6303,
      lat: 56.1015,
    },
    history:
      "Loch Lomond offered calm waters surrounded by rolling hills and Scottish highlands. The peacefulness of walking along the loch shore created a deeply restful atmosphere.",
    image: lochLomondScotland,
  },

  {
    id: "cappadocia",
    name: "Cappadocia",
    country: "Turkey",
    coordinates: {
      lng: 34.8289,
      lat: 38.6431,
    },
    history:
      "Cappadocia felt like stepping onto another planet. Seeing hot air balloons drift over fairy chimneys at sunrise was one of the most mesmerizing landscapes imaginable.",
    image: cappadociaTurkey,
  },

  {
    id: "summerdown",
    name: "Summerdown",
    country: "United Kingdom",
    coordinates: {
      lng: -0.2796,
      lat: 51.3128,
    },
    history:
      "Summerdown offered scenic rural English countryside trails and tranquil green pastures, ideal for a quiet getaway away from the fast pace of urban life.",
    image: summerdownUnitedKingdom,
  },
];
