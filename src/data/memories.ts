import gizaEgypt from "../assets/images/memories/gizaEgypt.webp";
import nassauBahamas from "../assets/images/memories/nassauBahamas.webp";
import seljalandsfossIceland from "../assets/images/memories/seljalandsfossIceland.webp";
import chichenItzaMexico from "../assets/images/memories/chichenItzaMexico.webp";
import NiagaraFallsCanada from "../assets/images/memories/NiagaraFallsCanada.webp";
import glastonburyUK from "../assets/images/memories/glastonburyUK.webp";
import sanBenedetto from "../assets/images/memories/sanBenedetto.webp";
import lakeOhridNorthMacedonia from "../assets/images/memories/lakeOhridNorthMacedonia.webp";
import philadelphiaUSA from "../assets/images/memories/philadelphiaUSA.webp";
import pitlochryScotland from "../assets/images/memories/pitlochryScotland.webp";
import newYorkUSA from "../assets/images/memories/newYorkUSA.webp";
import capetownsouthAfrica from "../assets/images/memories/capetownsouthAfrica.webp";
import plettenburghsouthAfrica from "../assets/images/memories/plettenburghsouthAfrica.webp";
import sardiniaItaly from "../assets/images/memories/sardiniaItaly.webp";
import sevilleSpain from "../assets/images/memories/sevilleSpain.webp";
import algarvePortugal from "../assets/images/memories/AlgarvePortugal.webp";
import cappadociaTurkey from "../assets/images/memories/cappadociaTurkey.webp";
import summerdownUnitedKingdom from "../assets/images/memories/summerdownUnitedKingdom.webp";
import lochLomondScotland from "../assets/images/memories/lochLomondScotland.webp";
import lakeGardaItaly from "../assets/images/memories/lakeGardaItaly.webp";

import type { ImageMetadata } from "astro";

export interface City {
  id: string;
  name: string;
  country: string;

  coordinates: {
    lng: number;
    lat: number;
  };
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

    image: sevilleSpain,
  },
  {
    id: "loch-lomond",
    name: "Loch Lomond",
    country: "United Kingdom",
    coordinates: {
      lng: -4.6303,
      lat: 56.1015,
    },

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

    image: cappadociaTurkey,
  },

  {
    id: "summerdown",
    name: "Basingstoke",
    country: "United Kingdom",
    coordinates: {
      lng: -0.2796,
      lat: 51.3128,
    },

    image: summerdownUnitedKingdom,
  },
];
