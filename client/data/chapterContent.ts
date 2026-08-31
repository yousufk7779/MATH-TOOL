import { c12Chem1HtmlOverview, c12Chem1HtmlSolutions, c12Chem1Mcqs } from "./content/c12-chem-1";
import { c12Chem2HtmlOverview, c12Chem2HtmlSolutions, c12Chem2Mcqs } from "./content/c12-chem-2";
import { c12Chem3HtmlOverview, c12Chem3HtmlSolutions, c12Chem3Mcqs } from "./content/c12-chem-3";
import { c12Chem4HtmlOverview, c12Chem4HtmlSolutions, c12Chem4Mcqs } from "./content/c12-chem-4";
import { c12Chem5HtmlOverview, c12Chem5HtmlSolutions, c12Chem5Mcqs } from "./content/c12-chem-5";
import { c12Chem6HtmlOverview, c12Chem6HtmlSolutions, c12Chem6Mcqs } from "./content/c12-chem-6";
import { c12Chem7HtmlOverview, c12Chem7HtmlSolutions, c12Chem7Mcqs } from "./content/c12-chem-7";
import { c12Chem8HtmlOverview, c12Chem8HtmlSolutions, c12Chem8Mcqs } from "./content/c12-chem-8";
import { c12Chem9HtmlOverview, c12Chem9HtmlSolutions, c12Chem9Mcqs } from "./content/c12-chem-9";
import { c12Chem10HtmlOverview, c12Chem10HtmlSolutions, c12Chem10Mcqs } from "./content/c12-chem-10";
import { ChapterHTMLs } from "./chapterHTMLs";
import {
  Definition,
  Formula,
  Question,
  Exercise,
  MCQ,
  Example,
  Theorem,
  ChapterContent,
} from "./types";

export type {
  Definition,
  Formula,
  Question,
  Exercise,
  MCQ,
  Example,
  Theorem,
  ChapterContent,
};

import { mathCh1 } from "./content/math-ch1";
import { mathCh2 } from "./content/math-ch2";
import { mathCh3 } from "./content/math-ch3";
import { mathCh4 } from "./content/math-ch4";
import { mathCh5 } from "./content/math-ch5";
import { mathCh6 } from "./content/math-ch6";
import { mathCh7 } from "./content/math-ch7";
import { mathCh8 } from "./content/math-ch8";
import { mathCh9 } from "./content/math-ch9";
import { mathCh10 } from "./content/math-ch10";
import { mathCh11 } from "./content/math-ch11";
import { mathCh12 } from "./content/math-ch12";
import { mathCh13 } from "./content/math-ch13";
import { mathCh14 } from "./content/math-ch14";
import { sciPhy1 } from "./content/sci-phy-1";
import { sciPhy2 } from "./content/sci-phy-2";
import { sciPhy3 } from "./content/sci-phy-3";
import { sciPhy4 } from "./content/sci-phy-4";
import { sciChem1 } from "./content/sci-chem-1";
import { sciChem2 } from "./content/sci-chem-2";
import { sciChem3 } from "./content/sci-chem-3";
import { sciChem4 } from "./content/sci-chem-4";
import { sciBio1 } from "./content/sci-bio-1";
import { sciBio2 } from "./content/sci-bio-2";
import { sciBio3 } from "./content/sci-bio-3";
import { sciBio4 } from "./content/sci-bio-4";
import { sciBio5 } from "./content/sci-bio-5";
import { sstHis1 } from "./content/sst-his-1";
import { sstHis2 } from "./content/sst-his-2";
import { sstHis3 } from "./content/sst-his-3";
import { sstHis4 } from "./content/sst-his-4";
import { sstHis5 } from "./content/sst-his-5";
import { sstHis6 } from "./content/sst-his-6";
import { sstGeo1 } from "./content/sst-geo-1";
import { sstGeo2 } from "./content/sst-geo-2";
import { sstGeo3 } from "./content/sst-geo-3";
import { sstGeo4 } from "./content/sst-geo-4";
import { sstGeo5 } from "./content/sst-geo-5";
import { sstGeo6 } from "./content/sst-geo-6";
import { sstGeo7 } from "./content/sst-geo-7";
import { sstCiv1 } from "./content/sst-civ-1";
import { sstCiv2 } from "./content/sst-civ-2";
import { sstCiv3 } from "./content/sst-civ-3";
import { sstCiv4 } from "./content/sst-civ-4";
import { sstCiv5 } from "./content/sst-civ-5";
import { sstEco1 } from "./content/sst-eco-1";
import { sstEco2 } from "./content/sst-eco-2";
import { sstEco3 } from "./content/sst-eco-3";
import { sstEco4 } from "./content/sst-eco-4";
import { sstEco5 } from "./content/sst-eco-5";
import { engPro1 } from "./content/eng-pro-1";
import { engPro2 } from "./content/eng-pro-2";
import { engPro3 } from "./content/eng-pro-3";
import { engPro4 } from "./content/eng-pro-4";
import { engPro5 } from "./content/eng-pro-5";
import { engPro6 } from "./content/eng-pro-6";
import { engPoe1 } from "./content/eng-poe-1";
import { engPoe2 } from "./content/eng-poe-2";
import { engPoe3 } from "./content/eng-poe-3";
import { engPoe4 } from "./content/eng-poe-4";
import { engPoe5 } from "./content/eng-poe-5";
import { engPoe6 } from "./content/eng-poe-6";
import { engSto1 } from "./content/eng-sto-1";
import { engSto2 } from "./content/eng-sto-2";
import { engSto3 } from "./content/eng-sto-3";
import { engSto4 } from "./content/eng-sto-4";
import { engSto5 } from "./content/eng-sto-5";
import { engSto6 } from "./content/eng-sto-6";
import { engGra1 } from "./content/eng-gra-1";
import { engGra2 } from "./content/eng-gra-2";
import { engGra3 } from "./content/eng-gra-3";
import { engGra4 } from "./content/eng-gra-4";
import { engGra5 } from "./content/eng-gra-5";
import { c9SciPhy1 } from "./content/c9-sci-phy-1";
import { c9SciPhy2 } from "./content/c9-sci-phy-2";
import { c9SciPhy3 } from "./content/c9-sci-phy-3";
import { c9SciPhy4 } from "./content/c9-sci-phy-4";
import { c9SciPhy5 } from "./content/c9-sci-phy-5";
import { c9SciPhy6 } from "./content/c9-sci-phy-6";
import { c9SciChem1 } from "./content/c9-sci-chem-1";
import { c9SciChem2 } from "./content/c9-sci-chem-2";
import { c9SciChem3 } from "./content/c9-sci-chem-3";
import { c9SciChem4 } from "./content/c9-sci-chem-4";
import { c9SciBio1 } from "./content/c9-sci-bio-1";
import { c9SciBio2 } from "./content/c9-sci-bio-2";
import { c9SciBio3 } from "./content/c9-sci-bio-3";
import { c9SciBio4 } from "./content/c9-sci-bio-4";
import { c11Phy1HtmlOverview, c11Phy1HtmlSolutions } from "./content/c11-phy-1";
import { c11Phy2HtmlOverview, c11Phy2HtmlSolutions } from "./content/c11-phy-2";
import { c11Phy3HtmlOverview, c11Phy3HtmlSolutions } from "./content/c11-phy-3";
import { c11Phy4HtmlOverview, c11Phy4HtmlSolutions } from "./content/c11-phy-4";
import { c11Phy5HtmlOverview, c11Phy5HtmlSolutions } from "./content/c11-phy-5";
import { c11Phy6HtmlOverview, c11Phy6HtmlSolutions } from "./content/c11-phy-6";
import { c11Phy7HtmlOverview, c11Phy7HtmlSolutions } from "./content/c11-phy-7";
import { c11Phy8HtmlOverview, c11Phy8HtmlSolutions } from "./content/c11-phy-8";
import { c11Phy9HtmlOverview, c11Phy9HtmlSolutions } from "./content/c11-phy-9";
import { c11Phy10HtmlOverview, c11Phy10HtmlSolutions } from "./content/c11-phy-10";
import { c11Chem1HtmlOverview, c11Chem1HtmlSolutions } from "./content/c11-chem-1";
import { c11Chem2HtmlOverview, c11Chem2HtmlSolutions } from "./content/c11-chem-2";
import { c11Chem3HtmlOverview, c11Chem3HtmlSolutions } from "./content/c11-chem-3";
import { c11Chem4HtmlOverview, c11Chem4HtmlSolutions } from "./content/c11-chem-4";
import { c11Chem5HtmlOverview, c11Chem5HtmlSolutions } from "./content/c11-chem-5";
import { c11Chem6HtmlOverview, c11Chem6HtmlSolutions } from "./content/c11-chem-6";
import { c11Chem7HtmlOverview, c11Chem7HtmlSolutions } from "./content/c11-chem-7";
import { c11Chem8HtmlOverview, c11Chem8HtmlSolutions } from "./content/c11-chem-8";
import { c11Chem9HtmlOverview, c11Chem9HtmlSolutions } from "./content/c11-chem-9";
import { c11Bot1HtmlOverview, c11Bot1HtmlSolutions } from "./content/c11-bot-1";
import { c11Bot2HtmlOverview, c11Bot2HtmlSolutions } from "./content/c11-bot-2";
import { c11Bot3HtmlOverview, c11Bot3HtmlSolutions } from "./content/c11-bot-3";
import { c11Bot4HtmlOverview, c11Bot4HtmlSolutions } from "./content/c11-bot-4";
import { c11Zoo1HtmlOverview, c11Zoo1HtmlSolutions } from "./content/c11-zoo-1";
import { c11Zoo2HtmlOverview, c11Zoo2HtmlSolutions } from "./content/c11-zoo-2";
import { c11Zoo3HtmlOverview, c11Zoo3HtmlSolutions } from "./content/c11-zoo-3";
import { c11Zoo4HtmlOverview, c11Zoo4HtmlSolutions } from "./content/c11-zoo-4";
import { c12Phy1HtmlOverview, c12Phy1HtmlSolutions, c12Phy1Mcqs } from "./content/c12-phy-1";
import { c12Phy2HtmlOverview, c12Phy2HtmlSolutions, c12Phy2Mcqs } from "./content/c12-phy-2";
import { c12Phy3HtmlOverview, c12Phy3HtmlSolutions, c12Phy3Mcqs } from "./content/c12-phy-3";
import { c12Phy4HtmlOverview, c12Phy4HtmlSolutions, c12Phy4Mcqs } from "./content/c12-phy-4";
import { c12Phy5HtmlOverview, c12Phy5HtmlSolutions, c12Phy5Mcqs } from "./content/c12-phy-5";
import { c12Phy6HtmlOverview, c12Phy6HtmlSolutions, c12Phy6Mcqs } from "./content/c12-phy-6";
import { c12Phy7HtmlOverview, c12Phy7HtmlSolutions, c12Phy7Mcqs } from "./content/c12-phy-7";
import { c12Phy8HtmlOverview, c12Phy8HtmlSolutions, c12Phy8Mcqs } from "./content/c12-phy-8";
import { c12Phy9HtmlOverview, c12Phy9HtmlSolutions, c12Phy9Mcqs } from "./content/c12-phy-9";
import { sstHisC91 } from "./content/sst-his-c9-1";
import { sstHisC92 } from "./content/sst-his-c9-2";
import { sstHisC93 } from "./content/sst-his-c9-3";
import { sstHisC94 } from "./content/sst-his-c9-4";
import { sstHisC95 } from "./content/sst-his-c9-5";
import { sstHisC96 } from "./content/sst-his-c9-6";
import { sstGeoC91 } from "./content/sst-geo-c9-1";
import { sstGeoC92 } from "./content/sst-geo-c9-2";
import { sstGeoC93 } from "./content/sst-geo-c9-3";
import { sstGeoC94 } from "./content/sst-geo-c9-4";
import { sstGeoC95 } from "./content/sst-geo-c9-5";
import { sstGeoC96 } from "./content/sst-geo-c9-6";
import { sstGeoC97 } from "./content/sst-geo-c9-7";
import { sstCivC91 } from "./content/sst-civ-c9-1";
import { sstCivC92 } from "./content/sst-civ-c9-2";
import { sstCivC93 } from "./content/sst-civ-c9-3";
import { sstCivC94 } from "./content/sst-civ-c9-4";
import { sstCivC95 } from "./content/sst-civ-c9-5";
import { sstCivC96 } from "./content/sst-civ-c9-6";
import { sstEcoC91 } from "./content/sst-eco-c9-1";
import { sstEcoC92 } from "./content/sst-eco-c9-2";
import { sstEcoC93 } from "./content/sst-eco-c9-3";
import { sstEcoC94 } from "./content/sst-eco-c9-4";
import { sstEcoC95 } from "./content/sst-eco-c9-5";
import { c7Sci1 } from "./content/c7-sci-1";
import { c7Sci2 } from "./content/c7-sci-2";
import { c7Sci3 } from "./content/c7-sci-3";
import { c7Sci4 } from "./content/c7-sci-4";
import { c7Sci5 } from "./content/c7-sci-5";
import { c7Sci6 } from "./content/c7-sci-6";
import { c7Sci7 } from "./content/c7-sci-7";
import { c7Sci8 } from "./content/c7-sci-8";
import { c7Hist1 } from "./content/c7-hist-1";
import { c7Hist2 } from "./content/c7-hist-2";
import { c7Hist3 } from "./content/c7-hist-3";
import { c7Hist4 } from "./content/c7-hist-4";
import { c7Hist5 } from "./content/c7-hist-5";
import { c7Hist6 } from "./content/c7-hist-6";
import { c7Hist7 } from "./content/c7-hist-7";
import { c7Hist8 } from "./content/c7-hist-8";
import { c7Geo1 } from "./content/c7-geo-1";
import { c7Geo2 } from "./content/c7-geo-2";
import { c7Geo3 } from "./content/c7-geo-3";
import { c7Geo4 } from "./content/c7-geo-4";
import { c7Geo5 } from "./content/c7-geo-5";
import { c7Geo6 } from "./content/c7-geo-6";
import { c7Geo7 } from "./content/c7-geo-7";
import { c7Geo8 } from "./content/c7-geo-8";
import { c7Civ1 } from "./content/c7-civ-1";
import { c7Civ2 } from "./content/c7-civ-2";
import { c7Civ3 } from "./content/c7-civ-3";
import { c7Civ4 } from "./content/c7-civ-4";
import { c7Civ5 } from "./content/c7-civ-5";
import { c7Civ6 } from "./content/c7-civ-6";
import { c7Civ7 } from "./content/c7-civ-7";
import { c7Civ8 } from "./content/c7-civ-8";
import { c7Civ9 } from "./content/c7-civ-9";
import { c7Sci9 } from "./content/c7-sci-9";
import { c7Sci10 } from "./content/c7-sci-10";
import { c7Sci11 } from "./content/c7-sci-11";
import { c7Sci12 } from "./content/c7-sci-12";
import { c7Sci13 } from "./content/c7-sci-13";
import { c8Sci1 } from "./content/c8-sci-1";
import { c8Sci2 } from "./content/c8-sci-2";
import { c8Sci3 } from "./content/c8-sci-3";
import { c8Sci4 } from "./content/c8-sci-4";
import { c8Sci5 } from "./content/c8-sci-5";
import { c8Sci6 } from "./content/c8-sci-6";
import { c8Sci7 } from "./content/c8-sci-7";
import { c8Sci8 } from "./content/c8-sci-8";
import { c8Sci9 } from "./content/c8-sci-9";
import { c8Sci10 } from "./content/c8-sci-10";
import { c8Sci11 } from "./content/c8-sci-11";
import { c8Sci12 } from "./content/c8-sci-12";
import { c8Sci13 } from "./content/c8-sci-13";
import { c8Math1 } from "./content/c8-math-1";
import { c8Math2 } from "./content/c8-math-2";
import { c8Math3 } from "./content/c8-math-3";
import { c8Math4 } from "./content/c8-math-4";
import { c8Math5 } from "./content/c8-math-5";
import { c8Math6 } from "./content/c8-math-6";
import { c8Math7 } from "./content/c8-math-7";
import { c8Math8 } from "./content/c8-math-8";
import { c8Math9 } from "./content/c8-math-9";
import { c8Math10 } from "./content/c8-math-10";
import { c8Math11 } from "./content/c8-math-11";
import { c8Math12 } from "./content/c8-math-12";
import { c8Math13 } from "./content/c8-math-13";

import { c9Math1 } from "./content/c9-math-1";
import { c9Math2 } from "./content/c9-math-2";
import { c9Math3 } from "./content/c9-math-3";
import { c9Math4 } from "./content/c9-math-4";
import { c9Math5 } from "./content/c9-math-5";
import { c9Math6 } from "./content/c9-math-6";
import { c9Math7 } from "./content/c9-math-7";
import { c9Math8 } from "./content/c9-math-8";
import { c9Math9 } from "./content/c9-math-9";
import { c9Math10 } from "./content/c9-math-10";
import { c9Math11 } from "./content/c9-math-11";
import { c7Math1 } from "./content/c7-math-1";
import { c7Math2 } from "./content/c7-math-2";
import { c7Math3 } from "./content/c7-math-3";
import { c7Math4 } from "./content/c7-math-4";
import { c7Math5 } from "./content/c7-math-5";
import { c7Math6 } from "./content/c7-math-6";
import { c7Math7 } from "./content/c7-math-7";
import { c7Math8 } from "./content/c7-math-8";
import { c7Math9 } from "./content/c7-math-9";
import { c7Math10 } from "./content/c7-math-10";
import { c7Math11 } from "./content/c7-math-11";
import { c7Math12 } from "./content/c7-math-12";
import { c7Math13 } from "./content/c7-math-13";

export const chapterContents: Record<string, ChapterContent> = {
  "c9-math-1": c9Math1,
  "c9-math-2": c9Math2,
  "c9-math-3": c9Math3,
  "c9-math-4": c9Math4,
  "c9-math-5": c9Math5,
  "c9-math-6": c9Math6,
  "c9-math-7": c9Math7,
  "c9-math-8": c9Math8,
  "c9-math-9": c9Math9,
  "c9-math-10": c9Math10,
  "c9-math-11": c9Math11,
  "c8-math-1": c8Math1,
  "c8-math-2": c8Math2,
  "c8-math-3": c8Math3,
  "c7-math-1": c7Math1,
  "c7-math-2": c7Math2,
  "c7-math-3": c7Math3,
  "c7-math-4": c7Math4,
  "c7-math-5": c7Math5,
  "c7-math-6": c7Math6,
  "c7-math-7": c7Math7,
  "c7-math-8": c7Math8,
  "c7-math-9": c7Math9,
  "c7-math-10": c7Math10,
  "c7-math-11": c7Math11,
  "c7-math-12": c7Math12,
  "c7-math-13": c7Math13,

  ch1: mathCh1,
  ch2: mathCh2,
  ch3: mathCh3,
  ch4: mathCh4,
  ch5: mathCh5,
  ch6: mathCh6,
  ch7: mathCh7,
  ch8: mathCh8,
  ch9: mathCh9,
  ch10: mathCh10,
  ch11: mathCh11,
  ch12: mathCh12,
  ch13: mathCh13,
  ch14: mathCh14,
  "sci-phy-1": sciPhy1,
  "sci-phy-2": sciPhy2,
  "sci-phy-3": sciPhy3,
  "sci-phy-4": sciPhy4,
  "sci-chem-1": sciChem1,
  "sci-chem-2": sciChem2,
  "sci-chem-3": sciChem3,
  "sci-chem-4": sciChem4,
  "sci-bio-1": sciBio1,
  "sci-bio-2": sciBio2,
  "sci-bio-3": sciBio3,
  "sci-bio-4": sciBio4,
  "sci-bio-5": sciBio5,
  "sst-his-1": sstHis1,
  "sst-his-2": sstHis2,
  "sst-his-3": sstHis3,
  "sst-his-4": sstHis4,
  "sst-his-5": sstHis5,
  "sst-his-6": sstHis6,
  "sst-geo-1": sstGeo1,
  "sst-geo-2": sstGeo2,
  "sst-geo-3": sstGeo3,
  "sst-geo-4": sstGeo4,
  "sst-geo-5": sstGeo5,
  "sst-geo-6": sstGeo6,
  "sst-geo-7": sstGeo7,
  "sst-civ-1": sstCiv1,
  "sst-civ-2": sstCiv2,
  "sst-civ-3": sstCiv3,
  "sst-civ-4": sstCiv4,
  "sst-civ-5": sstCiv5,
  "sst-eco-1": sstEco1,
  "sst-eco-2": sstEco2,
  "sst-eco-3": sstEco3,
  "sst-eco-4": sstEco4,
  "sst-eco-5": sstEco5,
  "eng-pro-1": engPro1,
  "eng-pro-2": engPro2,
  "eng-pro-3": engPro3,
  "eng-pro-4": engPro4,
  "eng-pro-5": engPro5,
  "eng-pro-6": engPro6,
  "eng-poe-1": engPoe1,
  "eng-poe-2": engPoe2,
  "eng-poe-3": engPoe3,
  "eng-poe-4": engPoe4,
  "eng-poe-5": engPoe5,
  "eng-poe-6": engPoe6,
  "eng-sto-1": engSto1,
  "eng-sto-2": engSto2,
  "eng-sto-3": engSto3,
  "eng-sto-4": engSto4,
  "eng-sto-5": engSto5,
  "eng-sto-6": engSto6,
  "eng-gra-1": engGra1,
  "eng-gra-2": engGra2,
  "eng-gra-3": engGra3,
  "eng-gra-4": engGra4,
  "eng-gra-5": engGra5,
  "c9-sci-phy-1": c9SciPhy1,
  "c9-sci-phy-2": c9SciPhy2,
  "c9-sci-phy-3": c9SciPhy3,
  "c9-sci-phy-4": c9SciPhy4,
  "c9-sci-phy-5": c9SciPhy5,
  "c9-sci-phy-6": c9SciPhy6,
  "c9-sci-chem-1": c9SciChem1,
  "c9-sci-chem-2": c9SciChem2,
  "c9-sci-chem-3": c9SciChem3,
  "c9-sci-chem-4": c9SciChem4,
  "c9-sci-bio-1": c9SciBio1,
  "c9-sci-bio-2": c9SciBio2,
  "c9-sci-bio-3": c9SciBio3,
  "c9-sci-bio-4": c9SciBio4,
  "c7-sci-1": c7Sci1,
  "c7-sci-2": c7Sci2,
  "c7-sci-3": c7Sci3,
  "c7-sci-4": c7Sci4,
  "c7-sci-5": c7Sci5,
  "c7-sci-6": c7Sci6,
  "c7-sci-7": c7Sci7,
  "c7-sci-8": c7Sci8,
  "c7-hist-1": c7Hist1,
  "c7-hist-2": c7Hist2,
  "c7-hist-3": c7Hist3,
  "c7-hist-4": c7Hist4,
  "c7-hist-5": c7Hist5,
  "c7-hist-6": c7Hist6,
  "c7-hist-7": c7Hist7,
  "c7-hist-8": c7Hist8,
  "c7-geo-1": c7Geo1,
  "c7-geo-2": c7Geo2,
  "c7-geo-3": c7Geo3,
  "c7-geo-4": c7Geo4,
  "c7-geo-5": c7Geo5,
  "c7-geo-6": c7Geo6,
  "c7-geo-7": c7Geo7,
  "c7-geo-8": c7Geo8,
  "c7-civ-1": c7Civ1,
  "c7-civ-2": c7Civ2,
  "c7-civ-3": c7Civ3,
  "c7-civ-4": c7Civ4,
  "c7-civ-5": c7Civ5,
  "c7-civ-6": c7Civ6,
  "c7-civ-7": c7Civ7,
  "c7-civ-8": c7Civ8,
  "c7-civ-9": c7Civ9,
  "c7-sci-9": c7Sci9,
  "c7-sci-10": c7Sci10,
  "c7-sci-11": c7Sci11,
  "c7-sci-12": c7Sci12,
  "c7-sci-13": c7Sci13,
  "c8-sci-1": c8Sci1,
  "c8-sci-2": c8Sci2,
  "c8-sci-3": c8Sci3,
  "c8-sci-4": c8Sci4,
  "c8-sci-5": c8Sci5,
  "c8-sci-6": c8Sci6,
  "c8-sci-7": c8Sci7,
  "c8-sci-8": c8Sci8,
  "c8-sci-9": c8Sci9,
  "c8-sci-10": c8Sci10,
  "c8-sci-11": c8Sci11,
  "c8-sci-12": c8Sci12,
  "c8-sci-13": c8Sci13,
  "sst-his-c9-1": sstHisC91,
  "sst-his-c9-2": sstHisC92,
  "sst-his-c9-3": sstHisC93,
  "sst-his-c9-4": sstHisC94,
  "sst-his-c9-5": sstHisC95,
  "sst-his-c9-6": sstHisC96,
  "sst-geo-c9-1": sstGeoC91,
  "sst-geo-c9-2": sstGeoC92,
  "sst-geo-c9-3": sstGeoC93,
  "sst-geo-c9-4": sstGeoC94,
  "sst-geo-c9-5": sstGeoC95,
  "sst-geo-c9-6": sstGeoC96,
  "sst-geo-c9-7": sstGeoC97,
  "sst-civ-c9-1": sstCivC91,
  "sst-civ-c9-2": sstCivC92,
  "sst-civ-c9-3": sstCivC93,
  "sst-civ-c9-4": sstCivC94,
  "sst-civ-c9-5": sstCivC95,
  "sst-civ-c9-6": sstCivC96,
  "sst-eco-c9-1": sstEcoC91,
  "sst-eco-c9-2": sstEcoC92,
  "sst-eco-c9-3": sstEcoC93,
  "sst-eco-c9-4": sstEcoC94,
  "sst-eco-c9-5": sstEcoC95,
};

const createEmptyContent = (
  id: string,
  num: number,
  title: string,
): ChapterContent => ({
  id,
  number: num,
  title,
  introduction: "",
  definitions: [],
  keyPoints: [],
  formulas: [],
  crux: [],
  exercises: [],
  examples: [],
  mcqs: [],
  summary: [],
});

const emptyChapters: string[] = [];
[9, 8, 7].forEach((c) => {
  for (let i = 1; i <= 14; i++) {
    emptyChapters.push(`c${c}-math-${i}`);
  }
  for (let i = 1; i <= 3; i++) {
    emptyChapters.push(`c${c}-sci-phy-${i}`);
    emptyChapters.push(`c${c}-sci-chem-${i}`);
    emptyChapters.push(`c${c}-sci-bio-${i}`);
  }
});

emptyChapters.forEach((id) => {
  if (!chapterContents[id]) {
    const num = parseInt(id.split("-").pop() || "1");
    chapterContents[id] = createEmptyContent(id, num, `Chapter ${num}`);
  }
});

chapterContents["c8-math-4"] = c8Math4;
chapterContents["c8-math-5"] = c8Math5;
chapterContents["c8-math-6"] = c8Math6;
chapterContents["c8-math-7"] = c8Math7;
chapterContents["c8-math-8"] = c8Math8;
chapterContents["c8-math-9"] = c8Math9;
chapterContents["c8-math-10"] = c8Math10;
chapterContents["c8-math-11"] = c8Math11;
chapterContents["c8-math-12"] = c8Math12;
chapterContents["c8-math-13"] = c8Math13;

// Create empty WebView-enabled chapters with native MCQs for Class 9 Social Science
const sstC9Categories = ["his", "geo", "civ", "eco"];
const sstC9CategoryNames: Record<string, string> = {
  his: "History",
  geo: "Geography",
  civ: "Political Science",
  eco: "Economics",
};

const class9HistoryTitles = [
  "The French Revolution",
  "Socialism in Europe and the Russian Revolution",
  "Nazism and the Rise of Hitler",
  "Forest Society and Colonialism",
  "Pastoralists in the Modern World",
  "The Integration of Princely States: A case study of Jammu and Kashmir",
];

const class9CivicsTitles = [
  "What is Democracy? Why Democracy?",
  "Constitutional Design",
  "Electoral Politics",
  "Working of Institutions",
  "Democratic Rights",
  "Electoral Politics in the Erstwhile State of Jammu & Kashmir",
];

const class9HistoryMCQs: Record<number, MCQ[]> = {
  1: [
    {
      id: "sst-his-c9-1-mcq-1",
      question: "The French Revolution broke out on:",
      options: [
        "14 July 1789",
        "14 June 1789",
        "14 August 1789",
        "14 January 1789",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-1-mcq-2",
      question: "Who was the ruler of France during the French Revolution?",
      options: ["Louis XIV", "Louis XV", "Louis XVI", "Louis XVIII"],
      correctAnswer: "c",
    },
    {
      id: "sst-his-c9-1-mcq-3",
      question: "The fortress-prison stormed by the people of Paris was the:",
      options: ["Bastille", "Versailles", "Tuileries", "Louvre"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-1-mcq-4",
      question: "The Third Estate comprised of:",
      options: ["Clergy", "Nobles", "Peasants and Businessmen", "Monarchy"],
      correctAnswer: "c",
    },
    {
      id: "sst-his-c9-1-mcq-5",
      question: "The national colors of France are:",
      options: [
        "Blue-White-Red",
        "Red-Green-Blue",
        "Yellow-White-Red",
        "Black-Red-Yellow",
      ],
      correctAnswer: "a",
    },
  ],
  2: [
    {
      id: "sst-his-c9-2-mcq-1",
      question: "Who led the Bolshevik Party during the Russian Revolution?",
      options: ["Vladimir Lenin", "Karl Marx", "Leon Trotsky", "Joseph Stalin"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-2-mcq-2",
      question: "The Russian Parliament is known as the:",
      options: ["Duma", "Reichstag", "Congress", "Parliament"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-2-mcq-3",
      question: "In which year did the Russian Revolution take place?",
      options: ["1905", "1917", "1914", "1921"],
      correctAnswer: "b",
    },
    {
      id: "sst-his-c9-2-mcq-4",
      question: "The Bolsheviks were a group of:",
      options: ["Radicals", "Liberals", "Conservatives", "Moderates"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-2-mcq-5",
      question: "What was the main slogan of the Bolsheviks in 1917?",
      options: [
        "Peace, Land, and Bread",
        "Liberty, Equality, Fraternity",
        "Workers of the World Unite",
        "No Taxation without Representation",
      ],
      correctAnswer: "a",
    },
  ],
  3: [
    {
      id: "sst-his-c9-3-mcq-1",
      question: "When did Adolf Hitler become the Chancellor of Germany?",
      options: ["1933", "1929", "1939", "1945"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-3-mcq-2",
      question: "What was the name of Hitler's political party?",
      options: [
        "Nazi Party",
        "Labour Party",
        "Socialist Party",
        "Democratic Party",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-3-mcq-3",
      question:
        "Which country did Germany invade in 1939, starting World War II?",
      options: ["Poland", "France", "Russia", "Austria"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-3-mcq-4",
      question: "The famous book 'Mein Kampf' was written by:",
      options: [
        "Adolf Hitler",
        "Joseph Goebbels",
        "Heinrich Himmler",
        "Benito Mussolini",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-3-mcq-5",
      question: "What was the German parliament building called?",
      options: ["Reichstag", "Duma", "Diet", "Bundestag"],
      correctAnswer: "a",
    },
  ],
  4: [
    {
      id: "sst-his-c9-4-mcq-1",
      question: "Who was the first Inspector General of Forests in India?",
      options: [
        "Dietrich Brandis",
        "George Yule",
        "Verrier Elwin",
        "Lord Dalhousie",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-4-mcq-2",
      question:
        "The system of scientific forestry was introduced in India by the:",
      options: ["British", "French", "Dutch", "Portuguese"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-4-mcq-3",
      question: "In which year was the first Indian Forest Act passed?",
      options: ["1865", "1878", "1927", "1855"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-4-mcq-4",
      question: "The shifting cultivation is known in Central America as:",
      options: ["Milpa", "Lading", "Chitemene", "Tavy"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-4-mcq-5",
      question: "Who led the forest rebellion in Bastar in 1910?",
      options: [
        "Gunda Dhur",
        "Birsa Munda",
        "Alluri Sitarama Raju",
        "Sidhu Murmu",
      ],
      correctAnswer: "a",
    },
  ],
  5: [
    {
      id: "sst-his-c9-5-mcq-1",
      question: "Guijar Bakarwals are pastoral nomads of which region?",
      options: [
        "Jammu and Kashmir",
        "Himachal Pradesh",
        "Rajasthan",
        "Maharashtra",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-5-mcq-2",
      question:
        "The pastoral community of Rajasthan that is known for camel herding is:",
      options: ["Raika", "Gaddi", "Bhotia", "Sherpa"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-5-mcq-3",
      question: "The Maasai pastoral community belongs to which continent?",
      options: ["Africa", "Asia", "Europe", "South America"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-5-mcq-4",
      question: "What are the seasonal pastures in high mountains called?",
      options: ["Bugyals", "Bhabar", "Kharif", "Rabi"],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-5-mcq-5",
      question: "The Gaddi shepherds belong to which state?",
      options: [
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Gujarat",
        "Uttarakhand",
      ],
      correctAnswer: "a",
    },
  ],
  6: [
    {
      id: "sst-his-c9-6-mcq-1",
      question:
        "Who was the last ruling Maharaja of Jammu and Kashmir at the time of integration?",
      options: [
        "Maharaja Hari Singh",
        "Maharaja Gulab Singh",
        "Maharaja Ranbir Singh",
        "Maharaja Pratap Singh",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-6-mcq-2",
      question:
        "On which date was the Instrument of Accession signed by Maharaja Hari Singh?",
      options: [
        "26 October 1947",
        "15 August 1947",
        "26 January 1950",
        "27 October 1947",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-6-mcq-3",
      question:
        "Which leader played a pivotal role in the integration of princely states into India?",
      options: [
        "Sardar Vallabhbhai Patel",
        "Jawaharlal Nehru",
        "Mahatma Gandhi",
        "Dr. B.R. Ambedkar",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-6-mcq-4",
      question:
        "What was the status of Jammu and Kashmir under Article 370 of the Indian Constitution?",
      options: [
        "Special Status",
        "Union Territory",
        "Associate State",
        "No Special Status",
      ],
      correctAnswer: "a",
    },
    {
      id: "sst-his-c9-6-mcq-5",
      question:
        "The Treaty of Amritsar (1846) marked the creation of the princely state of Jammu and Kashmir under:",
      options: ["Gulab Singh", "Ranjit Singh", "Hari Singh", "Ranbir Singh"],
      correctAnswer: "a",
    },
  ],
};

sstC9Categories.forEach((cat) => {
  const catName = sstC9CategoryNames[cat];
  const limit = cat === "geo" ? 7 : 6;
  for (let i = 1; i <= limit; i++) {
    const id = `sst-${cat}-c9-${i}`;
    if (chapterContents[id]) continue;
    const title =
      cat === "his"
        ? class9HistoryTitles[i - 1]
        : cat === "civ"
        ? class9CivicsTitles[i - 1]
        : `${catName} Chapter ${i}`;

    let htmlOverview = "";
    let htmlExercises = "";

    if (cat === "his") {
      htmlOverview = `
        <div style="padding: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: transparent;">
          <!-- Premium Info Card -->
          <div style="background-color: #1E1E2E; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
            <h3 style="color: #FF8A65; font-size: 18px; font-weight: 600; margin-top: 0; margin-bottom: 14px; display: flex; align-items: center;">
              <span style="margin-right: 8px; font-size: 18px;">💡</span> Core Learnings
            </h3>
            <ul style="color: #B3B3C6; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Explore critical timelines and major turning points of the period.</li>
              <li style="margin-bottom: 8px;">Understand the socio-political movements and economic causes of key events.</li>
              <li style="margin-bottom: 0;">Analyze impact, consequences, and long-term historical legacy on the modern world.</li>
            </ul>
          </div>
          
          <!-- Premium Status Card -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px dashed rgba(255, 255, 255, 0.15); border-radius: 12px; padding: 16px; display: flex; align-items: center; justify-content: center; gap: 10px;">
            <span style="font-size: 18px;">⏳</span>
            <span style="color: #94A3B8; font-size: 14px; font-weight: 400; text-align: center;">Comprehensive notes and answers are being processed. Stay tuned!</span>
          </div>
        </div>
      `;

      htmlExercises = `
        <div style="padding: 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: transparent;">
          <!-- Premium Status Card -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px dashed rgba(255, 255, 255, 0.15); border-radius: 12px; padding: 16px; display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 24px;">
            <span style="font-size: 18px;">⏳</span>
            <span style="color: #94A3B8; font-size: 14px; font-weight: 400; text-align: center;">NCERT Q&A Solutions for this chapter will be populated here very soon.</span>
          </div>

          <!-- Interactive Tip -->
          <div style="background-color: rgba(33, 150, 243, 0.08); border: 1px solid rgba(33, 150, 243, 0.25); border-radius: 12px; padding: 16px; display: flex; align-items: flex-start; gap: 12px;">
            <span style="font-size: 20px;">💡</span>
            <div>
              <h4 style="margin: 0 0 4px 0; color: #90CAF9; font-size: 15px; font-weight: 600;">Study Tip</h4>
              <p style="margin: 0; color: #B0BEC5; font-size: 13px; line-height: 1.5;">To prepare for exams, practice the dates and timelines first. You can write your own revision notes directly inside the <strong>Quick Notes</strong> screen!</p>
            </div>
          </div>
        </div>
      `;
    } else {
      htmlOverview = `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
          <h3 style="color: #FF8A65; text-align: left; margin-top: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Concepts</h3>
          <p style="line-height: 1.6; font-size: 17px;">Welcome to ${catName} Chapter ${i} Key Concepts. Content for this chapter is being prepared and will be available soon in this beautiful Web View layout!</p>
        </div>
      `;
      htmlExercises = `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
          <p style="color: #FF8A65; font-weight: bold; margin-bottom: 8px; font-size: 18px;">Question & Answers</p>
          <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px;">NCERT Q&A Solutions for ${catName} Chapter ${i} will be populated here very soon.</p>
        </div>
      `;
    }

    const defaultMcqs = [
      {
        id: `${id}-mcq-1`,
        question: `This is a sample multiple-choice question 1 for ${catName} Chapter ${i}.`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "a",
      },
      {
        id: `${id}-mcq-2`,
        question: `This is a sample multiple-choice question 2 for ${catName} Chapter ${i}.`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "b",
      },
      {
        id: `${id}-mcq-3`,
        question: `This is a sample multiple-choice question 3 for ${catName} Chapter ${i}.`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "c",
      },
      {
        id: `${id}-mcq-4`,
        question: `This is a sample multiple-choice question 4 for ${catName} Chapter ${i}.`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "d",
      },
      {
        id: `${id}-mcq-5`,
        question: `This is a sample multiple-choice question 5 for ${catName} Chapter ${i}.`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "a",
      },
    ];

    chapterContents[id] = {
      id,
      number: i,
      title: title,
      isHtmlView: true,
      htmlOverview: htmlOverview,
      htmlExercises: {
        "ex-sst-qa": htmlExercises,
      },
      exercises: [
        {
          id: "ex-sst-qa",
          name: "Q & A",
          questions: [],
        },
      ],
      mcqs: cat === "his" ? class9HistoryMCQs[i] : defaultMcqs,
      introduction: `Introduction for ${title}`,
    };
  }
});

// Create empty WebView-enabled chapters with native MCQs for Class 8 Social Science
const sstC8Categories = ["his", "geo", "civ"];
const sstC8CategoryNames: Record<string, string> = {
  his: "History",
  geo: "Geography",
  civ: "Political Science",
};

sstC8Categories.forEach((cat) => {
  const catName = sstC8CategoryNames[cat];
  for (let i = 1; i <= 6; i++) {
    const id = `sst-${cat}-c8-${i}`;
    chapterContents[id] = {
      id,
      number: i,
      title: `${catName} Chapter ${i}`,
      isHtmlView: true,
      htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
          <h3 style="color: #FF8A65; text-align: left; margin-top: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Key Concepts</h3>
          <p style="line-height: 1.6; font-size: 17px;">Welcome to ${catName} Chapter ${i} Key Concepts. Content for this chapter is being prepared and will be available soon in this beautiful Web View layout!</p>
        </div>
      `,
      htmlExercises: {
        "ex-sst-qa": `
          <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="color: #FF8A65; font-weight: bold; margin-bottom: 8px; font-size: 18px;">Question & Answers</p>
            <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px;">NCERT Q&A Solutions for ${catName} Chapter ${i} will be populated here very soon.</p>
          </div>
        `,
      },
      exercises: [
        {
          id: "ex-sst-qa",
          name: "Q & A",
          questions: [],
        },
      ],
      mcqs: [
        {
          id: `${id}-mcq-1`,
          question: `This is a sample multiple-choice question 1 for ${catName} Chapter ${i}.`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: "a",
        },
        {
          id: `${id}-mcq-2`,
          question: `This is a sample multiple-choice question 2 for ${catName} Chapter ${i}.`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: "b",
        },
        {
          id: `${id}-mcq-3`,
          question: `This is a sample multiple-choice question 3 for ${catName} Chapter ${i}.`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: "c",
        },
        {
          id: `${id}-mcq-4`,
          question: `This is a sample multiple-choice question 4 for ${catName} Chapter ${i}.`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: "d",
        },
        {
          id: `${id}-mcq-5`,
          question: `This is a sample multiple-choice question 5 for ${catName} Chapter ${i}.`,
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: "a",
        },
      ],
      introduction: `Introduction for ${catName} Chapter ${i}`,
    };
  }
});

// Dynamically generate Class 11 Science Chapter Web View Structures (Physics, Chemistry, Zoology, Botany)
const c11Subjects = [
  { prefix: "phy", title: "Physics", maxCh: 10 },
  { prefix: "chem", title: "Chemistry", maxCh: 9 },
  { prefix: "zoo", title: "Zoology", maxCh: 4 },
  { prefix: "bot", title: "Botany", maxCh: 4 },
];

const c11ThemeColors = [
  "#FF512F", // Ch 1 Coral Red
  "#FF9100", // Ch 2 Electric Amber
  "#00b09b", // Ch 3 Mint
  "#11998e", // Ch 4 Emerald
  "#00c6ff", // Ch 5 Bright Blue
  "#FF8A65", // Ch 6 Deep Orange
  "#AB47BC", // Ch 7 Magenta
  "#FDC830", // Ch 8 Gold
  "#FF007F", // Ch 9 Neon Rose
];

c11Subjects.forEach(({ prefix, title, maxCh }) => {
  for (let i = 1; i <= maxCh; i++) {
    const id = `c11-${prefix}-${i}`;
    const themeColor = c11ThemeColors[(i - 1) % c11ThemeColors.length];
    chapterContents[id] = {
      id,
      number: i,
      title: `Class 11 ${title} Chapter ${i}`,
      isHtmlView: true,
      htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
          <h3 style="color: ${themeColor}; text-align: left; margin-top: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Reference & Concept Guide</h3>
          <p style="line-height: 1.6; font-size: 16px;">Welcome to Class 11 ${title} Chapter ${i}. Key Concepts, definitions, formulas, and reference theory for this chapter will be rendered here in this responsive Web View layout.</p>
        </div>
      `,
      htmlExercises: {
        "ex-c11-qa": `
          <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 18px;">NCERT Solutions & Answers</p>
            <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px;">Detailed step-by-step NCERT Solutions for Class 11 ${title} Chapter ${i} will be populated here.</p>
          </div>
        `,
      },
      exercises: [
        {
          id: "ex-c11-qa",
          name: "Q & A",
          questions: [],
        },
      ],
      mcqs: Array.from({ length: 10 }, (_, index) => ({
        id: `${id}-mcq-${index + 1}`,
        question: `Class 11 ${title} Chapter ${i} - Practice Question ${index + 1}`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: ["a", "b", "c", "d"][index % 4],
        explanation: `Explanation for Class 11 ${title} Chapter ${i} Question ${index + 1}.`,
      })),
      introduction: `Class 11 ${title} Chapter ${i} Introduction`,
    };
  }
});

// Override Class 11 Physics Chapter 1 with full high-level Reference & Solutions content
const ch11Phy1 = chapterContents["c11-phy-1"];
if (ch11Phy1) {
  ch11Phy1.htmlOverview = c11Phy1HtmlOverview;
  if (!ch11Phy1.htmlExercises) {
    ch11Phy1.htmlExercises = {};
  }
  ch11Phy1.htmlExercises["ex-c11-qa"] = c11Phy1HtmlSolutions;
}

// Override Class 11 Physics Chapter 2 with full high-level Reference & Solutions content
const ch11Phy2 = chapterContents["c11-phy-2"];
if (ch11Phy2) {
  ch11Phy2.htmlOverview = c11Phy2HtmlOverview;
  if (!ch11Phy2.htmlExercises) {
    ch11Phy2.htmlExercises = {};
  }
  ch11Phy2.htmlExercises["ex-c11-qa"] = c11Phy2HtmlSolutions;
}

// Override Class 11 Physics Chapter 3 with full high-level Reference & Solutions content
const ch11Phy3 = chapterContents["c11-phy-3"];
if (ch11Phy3) {
  ch11Phy3.htmlOverview = c11Phy3HtmlOverview;
  if (!ch11Phy3.htmlExercises) {
    ch11Phy3.htmlExercises = {};
  }
  ch11Phy3.htmlExercises["ex-c11-qa"] = c11Phy3HtmlSolutions;
}

// Override Class 11 Physics Chapter 4 with full high-level Reference & Solutions content
const ch11Phy4 = chapterContents["c11-phy-4"];
if (ch11Phy4) {
  ch11Phy4.htmlOverview = c11Phy4HtmlOverview;
  if (!ch11Phy4.htmlExercises) {
    ch11Phy4.htmlExercises = {};
  }
  ch11Phy4.htmlExercises["ex-c11-qa"] = c11Phy4HtmlSolutions;
}

// Override Class 11 Physics Chapter 5 with full high-level Reference & Solutions content
const ch11Phy5 = chapterContents["c11-phy-5"];
if (ch11Phy5) {
  ch11Phy5.htmlOverview = c11Phy5HtmlOverview;
  if (!ch11Phy5.htmlExercises) {
    ch11Phy5.htmlExercises = {};
  }
  ch11Phy5.htmlExercises["ex-c11-qa"] = c11Phy5HtmlSolutions;
}

// Override Class 11 Physics Chapter 6 with full high-level Reference & Solutions content
const ch11Phy6 = chapterContents["c11-phy-6"];
if (ch11Phy6) {
  ch11Phy6.htmlOverview = c11Phy6HtmlOverview;
  if (!ch11Phy6.htmlExercises) {
    ch11Phy6.htmlExercises = {};
  }
  ch11Phy6.htmlExercises["ex-c11-qa"] = c11Phy6HtmlSolutions;
}

// Override Class 11 Physics Chapter 7 with full high-level Reference & Solutions content
const ch11Phy7 = chapterContents["c11-phy-7"];
if (ch11Phy7) {
  ch11Phy7.htmlOverview = c11Phy7HtmlOverview;
  if (!ch11Phy7.htmlExercises) {
    ch11Phy7.htmlExercises = {};
  }
  ch11Phy7.htmlExercises["ex-c11-qa"] = c11Phy7HtmlSolutions;
}

// Override Class 11 Physics Chapter 8 with full high-level Reference & Solutions content
const ch11Phy8 = chapterContents["c11-phy-8"];
if (ch11Phy8) {
  ch11Phy8.htmlOverview = c11Phy8HtmlOverview;
  if (!ch11Phy8.htmlExercises) {
    ch11Phy8.htmlExercises = {};
  }
  ch11Phy8.htmlExercises["ex-c11-qa"] = c11Phy8HtmlSolutions;
}

// Override Class 11 Physics Chapter 9 with full high-level Reference & Solutions content
const ch11Phy9 = chapterContents["c11-phy-9"];
if (ch11Phy9) {
  ch11Phy9.htmlOverview = c11Phy9HtmlOverview;
  if (!ch11Phy9.htmlExercises) {
    ch11Phy9.htmlExercises = {};
  }
  ch11Phy9.htmlExercises["ex-c11-qa"] = c11Phy9HtmlSolutions;
}

// Override Class 11 Physics Chapter 10 with full high-level Reference & Solutions content
const ch11Phy10 = chapterContents["c11-phy-10"];
if (ch11Phy10) {
  ch11Phy10.htmlOverview = c11Phy10HtmlOverview;
  if (!ch11Phy10.htmlExercises) {
    ch11Phy10.htmlExercises = {};
  }
  ch11Phy10.htmlExercises["ex-c11-qa"] = c11Phy10HtmlSolutions;
}

// Override Class 11 Chemistry Chapter 1 with full high-level Reference & Solutions content
const ch11Chem1 = chapterContents["c11-chem-1"];
if (ch11Chem1) {
  ch11Chem1.htmlOverview = c11Chem1HtmlOverview;
  if (!ch11Chem1.htmlExercises) {
    ch11Chem1.htmlExercises = {};
  }
  ch11Chem1.htmlExercises["ex-c11-qa"] = c11Chem1HtmlSolutions;
}

// Override Class 11 Chemistry Chapter 2 with full high-level Reference & Solutions content
const ch11Chem2 = chapterContents["c11-chem-2"];
if (ch11Chem2) {
  ch11Chem2.htmlOverview = c11Chem2HtmlOverview;
  if (!ch11Chem2.htmlExercises) {
    ch11Chem2.htmlExercises = {};
  }
  ch11Chem2.htmlExercises["ex-c11-qa"] = c11Chem2HtmlSolutions;
}

// Override Class 11 Chemistry Chapter 3 with full high-level Reference & Solutions content
const ch11Chem3 = chapterContents["c11-chem-3"];
if (ch11Chem3) {
  ch11Chem3.htmlOverview = c11Chem3HtmlOverview;
  if (!ch11Chem3.htmlExercises) {
    ch11Chem3.htmlExercises = {};
  }
  ch11Chem3.htmlExercises["ex-c11-qa"] = c11Chem3HtmlSolutions;
}

// Override Class 11 Chemistry Chapter 4 with full high-level Reference & Solutions content
const ch11Chem4 = chapterContents["c11-chem-4"];
if (ch11Chem4) {
  ch11Chem4.htmlOverview = c11Chem4HtmlOverview;
  if (!ch11Chem4.htmlExercises) {
    ch11Chem4.htmlExercises = {};
  }
  ch11Chem4.htmlExercises["ex-c11-qa"] = c11Chem4HtmlSolutions;
}

// Override Class 11 Chemistry Chapter 5 with full high-level Reference & Solutions content
const ch11Chem5 = chapterContents["c11-chem-5"];
if (ch11Chem5) {
  ch11Chem5.htmlOverview = c11Chem5HtmlOverview;
  if (!ch11Chem5.htmlExercises) {
    ch11Chem5.htmlExercises = {};
  }
  ch11Chem5.htmlExercises["ex-c11-qa"] = c11Chem5HtmlSolutions;
}

// Override Class 11 Chemistry Chapter 6 with full high-level Reference & Solutions content
const ch11Chem6 = chapterContents["c11-chem-6"];
if (ch11Chem6) {
  ch11Chem6.htmlOverview = c11Chem6HtmlOverview;
  if (!ch11Chem6.htmlExercises) {
    ch11Chem6.htmlExercises = {};
  }
  ch11Chem6.htmlExercises["ex-c11-qa"] = c11Chem6HtmlSolutions;
}

// Override Class 11 Chemistry Chapter 7 with full high-level Reference & Solutions content
const ch11Chem7 = chapterContents["c11-chem-7"];
if (ch11Chem7) {
  ch11Chem7.htmlOverview = c11Chem7HtmlOverview;
  if (!ch11Chem7.htmlExercises) {
    ch11Chem7.htmlExercises = {};
  }
  ch11Chem7.htmlExercises["ex-c11-qa"] = c11Chem7HtmlSolutions;
}

// Override Class 11 Chemistry Chapter 8 with full high-level Reference & Solutions content
const ch11Chem8 = chapterContents["c11-chem-8"];
if (ch11Chem8) {
  ch11Chem8.htmlOverview = c11Chem8HtmlOverview;
  if (!ch11Chem8.htmlExercises) {
    ch11Chem8.htmlExercises = {};
  }
  ch11Chem8.htmlExercises["ex-c11-qa"] = c11Chem8HtmlSolutions;
}

// Override Class 11 Chemistry Chapter 9 with full high-level Reference & Solutions content
const ch11Chem9 = chapterContents["c11-chem-9"];
if (ch11Chem9) {
  ch11Chem9.htmlOverview = c11Chem9HtmlOverview;
  if (!ch11Chem9.htmlExercises) {
    ch11Chem9.htmlExercises = {};
  }
  ch11Chem9.htmlExercises["ex-c11-qa"] = c11Chem9HtmlSolutions;
}

// Override Class 11 Botany Chapter 1 with full high-level Reference & Solutions content
const ch11Bot1 = chapterContents["c11-bot-1"];
if (ch11Bot1) {
  ch11Bot1.htmlOverview = c11Bot1HtmlOverview;
  if (!ch11Bot1.htmlExercises) {
    ch11Bot1.htmlExercises = {};
  }
  ch11Bot1.htmlExercises["ex-c11-qa"] = c11Bot1HtmlSolutions;
}

// Override Class 11 Botany Chapter 2 with full high-level Reference & Solutions content
const ch11Bot2 = chapterContents["c11-bot-2"];
if (ch11Bot2) {
  ch11Bot2.htmlOverview = c11Bot2HtmlOverview;
  if (!ch11Bot2.htmlExercises) {
    ch11Bot2.htmlExercises = {};
  }
  ch11Bot2.htmlExercises["ex-c11-qa"] = c11Bot2HtmlSolutions;
}

// Override Class 11 Botany Chapter 3 with full high-level Reference & Solutions content
const ch11Bot3 = chapterContents["c11-bot-3"];
if (ch11Bot3) {
  ch11Bot3.htmlOverview = c11Bot3HtmlOverview;
  if (!ch11Bot3.htmlExercises) {
    ch11Bot3.htmlExercises = {};
  }
  ch11Bot3.htmlExercises["ex-c11-qa"] = c11Bot3HtmlSolutions;
}

// Override Class 11 Botany Chapter 4 with full high-level Reference & Solutions content
const ch11Bot4 = chapterContents["c11-bot-4"];
if (ch11Bot4) {
  ch11Bot4.htmlOverview = c11Bot4HtmlOverview;
  if (!ch11Bot4.htmlExercises) {
    ch11Bot4.htmlExercises = {};
  }
  ch11Bot4.htmlExercises["ex-c11-qa"] = c11Bot4HtmlSolutions;
}

// Override Class 11 Zoology Chapter 1 with full high-level Reference & Solutions content
const ch11Zoo1 = chapterContents["c11-zoo-1"];
if (ch11Zoo1) {
  ch11Zoo1.htmlOverview = c11Zoo1HtmlOverview;
  if (!ch11Zoo1.htmlExercises) {
    ch11Zoo1.htmlExercises = {};
  }
  ch11Zoo1.htmlExercises["ex-c11-qa"] = c11Zoo1HtmlSolutions;
}

// Override Class 11 Zoology Chapter 2 with full high-level Reference & Solutions content
const ch11Zoo2 = chapterContents["c11-zoo-2"];
if (ch11Zoo2) {
  ch11Zoo2.htmlOverview = c11Zoo2HtmlOverview;
  if (!ch11Zoo2.htmlExercises) {
    ch11Zoo2.htmlExercises = {};
  }
  ch11Zoo2.htmlExercises["ex-c11-qa"] = c11Zoo2HtmlSolutions;
}

// Override Class 11 Zoology Chapter 3 with full high-level Reference & Solutions content
const ch11Zoo3 = chapterContents["c11-zoo-3"];
if (ch11Zoo3) {
  ch11Zoo3.htmlOverview = c11Zoo3HtmlOverview;
  if (!ch11Zoo3.htmlExercises) {
    ch11Zoo3.htmlExercises = {};
  }
  ch11Zoo3.htmlExercises["ex-c11-qa"] = c11Zoo3HtmlSolutions;
}

// Override Class 11 Zoology Chapter 4 with full high-level Reference & Solutions content
const ch11Zoo4 = chapterContents["c11-zoo-4"];
if (ch11Zoo4) {
  ch11Zoo4.htmlOverview = c11Zoo4HtmlOverview;
  if (!ch11Zoo4.htmlExercises) {
    ch11Zoo4.htmlExercises = {};
  }
  ch11Zoo4.htmlExercises["ex-c11-qa"] = c11Zoo4HtmlSolutions;
}

// Dynamically generate Class 12 Science Chapter Web View Structures (Physics, Chemistry, Zoology, Botany)
const c12Subjects = [
  { prefix: "phy", title: "Physics", maxCh: 9 },
  { prefix: "chem", title: "Chemistry", maxCh: 10 },
  { prefix: "zoo", title: "Zoology", maxCh: 4 },
  { prefix: "bot", title: "Botany", maxCh: 4 },
];

c12Subjects.forEach(({ prefix, title, maxCh }) => {
  for (let i = 1; i <= maxCh; i++) {
    const id = `c12-${prefix}-${i}`;
    const themeColor = c11ThemeColors[(i - 1) % c11ThemeColors.length];
    chapterContents[id] = {
      id,
      number: i,
      title: `Class 12 ${title} Chapter ${i}`,
      isHtmlView: true,
      htmlOverview: `
        <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
          <h3 style="color: ${themeColor}; text-align: left; margin-top: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">Reference & Concept Guide</h3>
          <p style="line-height: 1.6; font-size: 16px;">Welcome to Class 12 ${title} Chapter ${i}. Key Concepts, definitions, formulas, and reference theory for this chapter will be rendered here in this responsive Web View layout.</p>
        </div>
      `,
      htmlExercises: {
        "ex-c12-qa": `
          <div style="padding: 10px; color: #fff; text-align: justify; font-family: sans-serif;">
            <p style="color: ${themeColor}; font-weight: bold; margin-bottom: 8px; font-size: 18px;">NCERT Solutions & Answers</p>
            <p style="color: #E0E0E0; line-height: 1.6; font-size: 15px;">Detailed step-by-step NCERT Solutions for Class 12 ${title} Chapter ${i} will be populated here.</p>
          </div>
        `,
      },
      exercises: [
        {
          id: "ex-c12-qa",
          name: "Q & A",
          questions: [],
        },
      ],
      mcqs: Array.from({ length: 10 }, (_, index) => ({
        id: `${id}-mcq-${index + 1}`,
        question: `Class 12 ${title} Chapter ${i} - Practice Question ${index + 1}`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: ["a", "b", "c", "d"][index % 4],
        explanation: `Explanation for Class 12 ${title} Chapter ${i} Question ${index + 1}.`,
      })),
      introduction: `Class 12 ${title} Chapter ${i} Introduction`,
    };
  }
});

// Override Class 12 Physics Chapter 1 with full high-level Reference & Solutions content
const ch12Phy1 = chapterContents["c12-phy-1"];
if (ch12Phy1) {
  ch12Phy1.htmlOverview = c12Phy1HtmlOverview;
  ch12Phy1.htmlExercises = {
    "ex-c12-qa": c12Phy1HtmlSolutions,
  };
  ch12Phy1.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Phy1.mcqs = c12Phy1Mcqs;
}

// Override Class 12 Physics Chapter 2 with full high-level Reference & Solutions content
const ch12Phy2 = chapterContents["c12-phy-2"];
if (ch12Phy2) {
  ch12Phy2.htmlOverview = c12Phy2HtmlOverview;
  ch12Phy2.htmlExercises = {
    "ex-c12-qa": c12Phy2HtmlSolutions,
  };
  ch12Phy2.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Phy2.mcqs = c12Phy2Mcqs;
}

// Override Class 12 Physics Chapter 3 with full high-level Reference & Solutions content
const ch12Phy3 = chapterContents["c12-phy-3"];
if (ch12Phy3) {
  ch12Phy3.htmlOverview = c12Phy3HtmlOverview;
  ch12Phy3.htmlExercises = {
    "ex-c12-qa": c12Phy3HtmlSolutions,
  };
  ch12Phy3.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Phy3.mcqs = c12Phy3Mcqs;
}

// Override Class 12 Physics Chapter 4 with full high-level Reference & Solutions content
const ch12Phy4 = chapterContents["c12-phy-4"];
if (ch12Phy4) {
  ch12Phy4.htmlOverview = c12Phy4HtmlOverview;
  ch12Phy4.htmlExercises = {
    "ex-c12-qa": c12Phy4HtmlSolutions,
  };
  ch12Phy4.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Phy4.mcqs = c12Phy4Mcqs;
}

// Override Class 12 Physics Chapter 5 with full high-level Reference & Solutions content
const ch12Phy5 = chapterContents["c12-phy-5"];
if (ch12Phy5) {
  ch12Phy5.htmlOverview = c12Phy5HtmlOverview;
  ch12Phy5.htmlExercises = {
    "ex-c12-qa": c12Phy5HtmlSolutions,
  };
  ch12Phy5.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Phy5.mcqs = c12Phy5Mcqs;
}

// Override Class 12 Physics Chapter 6 with full high-level Reference & Solutions content
const ch12Phy6 = chapterContents["c12-phy-6"];
if (ch12Phy6) {
  ch12Phy6.htmlOverview = c12Phy6HtmlOverview;
  ch12Phy6.htmlExercises = {
    "ex-c12-qa": c12Phy6HtmlSolutions,
  };
  ch12Phy6.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Phy6.mcqs = c12Phy6Mcqs;
}

// Override Class 12 Physics Chapter 7 with full high-level Reference & Solutions content
const ch12Phy7 = chapterContents["c12-phy-7"];
if (ch12Phy7) {
  ch12Phy7.htmlOverview = c12Phy7HtmlOverview;
  ch12Phy7.htmlExercises = {
    "ex-c12-qa": c12Phy7HtmlSolutions,
  };
  ch12Phy7.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Phy7.mcqs = c12Phy7Mcqs;
}

// Override Class 12 Physics Chapter 8 with full high-level Reference & Solutions content
const ch12Phy8 = chapterContents["c12-phy-8"];
if (ch12Phy8) {
  ch12Phy8.htmlOverview = c12Phy8HtmlOverview;
  ch12Phy8.htmlExercises = {
    "ex-c12-qa": c12Phy8HtmlSolutions,
  };
  ch12Phy8.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Phy8.mcqs = c12Phy8Mcqs;
}

// Override Class 12 Physics Chapter 9 with full high-level Reference & Solutions content
const ch12Phy9 = chapterContents["c12-phy-9"];
if (ch12Phy9) {
  ch12Phy9.htmlOverview = c12Phy9HtmlOverview;
  ch12Phy9.htmlExercises = {
    "ex-c12-qa": c12Phy9HtmlSolutions,
  };
  ch12Phy9.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Phy9.mcqs = c12Phy9Mcqs;
}

export const isChapterAvailable = (chapterId: string): boolean => {
  return !!chapterContents[chapterId];
};

export const getChapterContent = (
  chapterId: string,
): ChapterContent | undefined => {
  return chapterContents[chapterId];
};

// Override Class 12 Chemistry Chapter 1 (Solutions)
const ch12Chem1 = chapterContents["c12-chem-1"];
if (ch12Chem1) {
  ch12Chem1.htmlOverview = c12Chem1HtmlOverview;
  ch12Chem1.htmlExercises = {
    "ex-c12-qa": c12Chem1HtmlSolutions,
  };
  ch12Chem1.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Chem1.mcqs = c12Chem1Mcqs;
}

// Override Class 12 Chemistry Chapter 2 (Electrochemistry)
const ch12Chem2 = chapterContents["c12-chem-2"];
if (ch12Chem2) {
  ch12Chem2.htmlOverview = c12Chem2HtmlOverview;
  ch12Chem2.htmlExercises = {
    "ex-c12-qa": c12Chem2HtmlSolutions,
  };
  ch12Chem2.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Chem2.mcqs = c12Chem2Mcqs;
}

// Override Class 12 Chemistry Chapter 3 (Chemical Kinetics)
const ch12Chem3 = chapterContents["c12-chem-3"];
if (ch12Chem3) {
  ch12Chem3.htmlOverview = c12Chem3HtmlOverview;
  ch12Chem3.htmlExercises = {
    "ex-c12-qa": c12Chem3HtmlSolutions,
  };
  ch12Chem3.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Chem3.mcqs = c12Chem3Mcqs;
}

// Override Class 12 Chemistry Chapter 4 (d and f-Block Elements)
const ch12Chem4 = chapterContents["c12-chem-4"];
if (ch12Chem4) {
  ch12Chem4.htmlOverview = c12Chem4HtmlOverview;
  ch12Chem4.htmlExercises = {
    "ex-c12-qa": c12Chem4HtmlSolutions,
  };
  ch12Chem4.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Chem4.mcqs = c12Chem4Mcqs;
}

// Override Class 12 Chemistry Chapter 5 (Coordination Compounds)
const ch12Chem5 = chapterContents["c12-chem-5"];
if (ch12Chem5) {
  ch12Chem5.htmlOverview = c12Chem5HtmlOverview;
  ch12Chem5.htmlExercises = {
    "ex-c12-qa": c12Chem5HtmlSolutions,
  };
  ch12Chem5.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Chem5.mcqs = c12Chem5Mcqs;
}

// Override Class 12 Chemistry Chapter 6 (Haloalkanes and Haloarenes)
const ch12Chem6 = chapterContents["c12-chem-6"];
if (ch12Chem6) {
  ch12Chem6.htmlOverview = c12Chem6HtmlOverview;
  ch12Chem6.htmlExercises = {
    "ex-c12-qa": c12Chem6HtmlSolutions,
  };
  ch12Chem6.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Chem6.mcqs = c12Chem6Mcqs;
}

// Override Class 12 Chemistry Chapter 7 (Alcohols, Phenols and Ethers)
const ch12Chem7 = chapterContents["c12-chem-7"];
if (ch12Chem7) {
  ch12Chem7.htmlOverview = c12Chem7HtmlOverview;
  ch12Chem7.htmlExercises = {
    "ex-c12-qa": c12Chem7HtmlSolutions,
  };
  ch12Chem7.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Chem7.mcqs = c12Chem7Mcqs;
}

// Override Class 12 Chemistry Chapter 8 (Aldehydes, Ketones and Carboxylic Acids)
const ch12Chem8 = chapterContents["c12-chem-8"];
if (ch12Chem8) {
  ch12Chem8.htmlOverview = c12Chem8HtmlOverview;
  ch12Chem8.htmlExercises = {
    "ex-c12-qa": c12Chem8HtmlSolutions,
  };
  ch12Chem8.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Chem8.mcqs = c12Chem8Mcqs;
}

// Override Class 12 Chemistry Chapter 9 (Organic Compounds Containing Nitrogen)
const ch12Chem9 = chapterContents["c12-chem-9"];
if (ch12Chem9) {
  ch12Chem9.htmlOverview = c12Chem9HtmlOverview;
  ch12Chem9.htmlExercises = {
    "ex-c12-qa": c12Chem9HtmlSolutions,
  };
  ch12Chem9.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Chem9.mcqs = c12Chem9Mcqs;
}

// Override Class 12 Chemistry Chapter 10 (Biomolecules)
const ch12Chem10 = chapterContents["c12-chem-10"];
if (ch12Chem10) {
  ch12Chem10.htmlOverview = c12Chem10HtmlOverview;
  ch12Chem10.htmlExercises = {
    "ex-c12-qa": c12Chem10HtmlSolutions,
  };
  ch12Chem10.exercises = [
    {
      id: "ex-c12-qa",
      name: "Q & A",
      questions: [],
    },
  ];
  ch12Chem10.mcqs = c12Chem10Mcqs;
}




