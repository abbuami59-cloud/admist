const fs = require('fs');
const path = require('path');

const REVIEWS_DIR = './data/reviews';
const files = fs.readdirSync(REVIEWS_DIR).filter(f => f.endsWith('.json'));

function cleanAndBuildSeoTitle(slug, currentTitle) {
  // Let's create a curated mapping or smart generator
  let title = currentTitle;

  // Custom mapping for highest quality and precision
  const exactMap = {
    "agricultural-economics-bau": "কৃষি অর্থনীতি ও গ্রামীণ সমাজবিজ্ঞান (Agricultural Economics - BAU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "agricultural-engineering-bau": "কৃষি প্রকৌশল ও প্রযুক্তি (Agricultural Engineering - BAU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "agriculture-department-bau": "কৃষি বিজ্ঞান অনুষদ (B.Sc. Agriculture - BAU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "animal-husbandry-bau": "পশুপালন অনুষদ (B.Sc. Animal Husbandry - BAU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "bioinformatics-engineering-bau": "বায়োইনফরমেটিক্স ইঞ্জিনিয়ারিং (Bioinformatics Engineering - BAU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "dvm-veterinary-medicine-bau": "ডক্টর অব ভেটেরিনারি মেডিসিন (DVM - BAU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "fisheries-faculty-bau": "মৎস্যবিজ্ঞান অনুষদ (Faculty of Fisheries - BAU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "food-engineering-bau": "ফুড ইঞ্জিনিয়ারিং ও প্রযুক্তি (Food Engineering - BAU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "food-safety-management-bau": "ফুড সেফটি ম্যানেজমেন্ট (Food Safety Management - BAU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    
    // Engineering & Technology
    "civil-engineering-kuet": "সিভিল ইঞ্জিনিয়ারিং (Civil Engineering - KUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "me-ruet": "মেকানিক্যাল ইঞ্জিনিয়ারিং (Mechanical Engineering - ME - RUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "mechanical-engineering-kuet": "মেকানিক্যাল ইঞ্জিনিয়ারিং (Mechanical Engineering - ME - KUET) Subject Review | ক্যারিয়ার ও ভবিষ্যৎ",
    "sust-mechanical-engineering": "মেকানিক্যাল ইঞ্জিনিয়ারিং (Mechanical Engineering - ME - SUST) Subject Review | ক্যারিয়ার গাইড",
    "cse-buet": "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE - BUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "cse-cuet": "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE - CUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "cse-kuet": "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE - KUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "cse-ruet": "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE - RUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "cse-sust": "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE - SUST) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "cu-cse": "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE - Chittagong University) Subject Review | ক্যারিয়ার গাইড",
    "du-cse": "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE - University of Dhaka) Subject Review | পূর্ণাঙ্গ গাইড",
    "swe-software-engineering": "সফটওয়্যার ইঞ্জিনিয়ারিং (Software Engineering - SWE) Subject Review | ক্যারিয়ার ও ভবিষ্যৎ প্রযুক্তি",
    "iit-swe-du": "ইনস্টিটিউট অব ইনফরমেশন টেকনোলজি (IIT - SWE - DU) Subject Review | সফটওয়্যার ইঞ্জিনিয়ারিং ক্যারিয়ার",
    "subject-review-iit-institute-of": "ইনস্টিটিউট অব ইনফরমেশন টেকনোলজি (IIT - Software Engineering) Subject Review | ক্যারিয়ার গাইড",
    "eee-buet": "তড়িৎ ও ইলেকট্রনিক কৌশল (EEE - BUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "eee-kuet": "তড়িৎ ও ইলেকট্রনিক প্রকৌশল (EEE - KUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "eee-ruet": "তড়িৎ ও ইলেকট্রনিক কৌশল (EEE - RUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "mec-eee": "ময়মনসিংহ ইঞ্জিনিয়ারিং কলেজ (EEE - MEC) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "cu-eee": "তড়িৎ ও ইলেকট্রনিক কৌশল (EEE - Chittagong University) Subject Review | ক্যারিয়ার গাইড",
    "bme-buet": "বায়োমেডিক্যাল ইঞ্জিনিয়ারিং (Biomedical Engineering - BME - BUET) Subject Review | ক্যারিয়ার গাইড",
    "bme-kuet": "বায়োমেডিক্যাল ইঞ্জিনিয়ারিং (Biomedical Engineering - BME - KUET) Subject Review | ক্যারিয়ার গাইড",
    "bme-mist": "বায়োমেডিক্যাল ইঞ্জিনিয়ারিং (Biomedical Engineering - BME - MIST) Subject Review | ক্যারিয়ার গাইড",
    "ipe-buet": "ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং (IPE - BUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "ipe-cuet": "ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং (IPE - CUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "ipe-kuet": "ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং (IPE - KUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "ipe-ruet": "ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং (IPE - RUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "ipe-sust": "ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং (IPE - SUST) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "mte-ruet": "মেকাট্রনিক্স ইঞ্জিনিয়ারিং (Mechatronics Engineering - MTE - RUET) Subject Review | ক্যারিয়ার গাইড",
    "mte-cuet": "মেকাট্রনিক্স ইঞ্জিনিয়ারিং (Mechatronics Engineering - MTE - CUET) Subject Review | ক্যারিয়ার গাইড",
    "name": "নেভাল আর্কিটেকচার অ্যান্ড মেরিন ইঞ্জিনিয়ারিং (NAME - BUET/MIST) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "naoe": "নেভাল আর্কিটেকচার অ্যান্ড অফশোর ইঞ্জিনিয়ারিং (NAOE - BSMRMU) Subject Review | ক্যারিয়ার গাইড",
    "wre": "পানি সম্পদ কৌশল (Water Resources Engineering - WRE - BUET/CUET) Subject Review | ক্যারিয়ার গাইড",
    "petroleum-and-mining-engineering": "পেট্রোলিয়াম অ্যান্ড মাইনিং ইঞ্জিনিয়ারিং (PME - SUST/CUET/JUST) Subject Review | ক্যারিয়ার গাইড",
    "pme-sust": "পেট্রোলিয়াম অ্যান্ড মাইনিং ইঞ্জিনিয়ারিং (PME - SUST) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "aerospace-and-astronautical-engineering": "অ্যারোস্পেস ও অ্যাস্ট্রোনটিক্যাল ইঞ্জিনিয়ারিং (Aerospace Engineering) Subject Review | ক্যারিয়ার গাইড",
    "ae-mist": "অ্যারোনটিক্যাল ইঞ্জিনিয়ারিং (Aeronautical Engineering - AE - MIST) Subject Review | ক্যারিয়ার গাইড",
    "gce-buet": "গ্লাস অ্যান্ড সিরামিক ইঞ্জিনিয়ারিং (GCE - BUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "gce-ruet": "গ্লাস অ্যান্ড সিরামিক ইঞ্জিনিয়ারিং (GCE - RUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "mse-ruet": "ম্যাটেরিয়ালস সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (MSE - RUET) Subject Review | ক্যারিয়ার গাইড",
    "mse-buet": "ম্যাটেরিয়ালস অ্যান্ড মেটালার্জিক্যাল ইঞ্জিনিয়ারিং (MME - BUET) Subject Review | ক্যারিয়ার গাইড",
    "mme-buet": "ম্যাটেরিয়ালস অ্যান্ড মেটালার্জিক্যাল ইঞ্জিনিয়ারিং (MME - BUET) Subject Review | ক্যারিয়ার গাইড",
    "becm-kuet": "বিল্ডিং ইঞ্জিনিয়ারিং অ্যান্ড কনস্ট্রাকশন ম্যানেজমেন্ট (BECM - KUET) Subject Review | ক্যারিয়ার গাইড",
    "becm-ruet": "বিল্ডিং ইঞ্জিনিয়ারিং অ্যান্ড কনস্ট্রাকশন ম্যানেজমেন্ট (BECM - RUET) Subject Review | ক্যারিয়ার গাইড",
    "le-kuet": "লেদার ইঞ্জিনিয়ারিং (Leather Engineering - LE - KUET) Subject Review | ক্যারিয়ার গাইড",
    "ece-ruet": "ইলেকট্রিক্যাল অ্যান্ড কম্পিউটার ইঞ্জিনিয়ারিং (ECE - RUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "ece-kuet": "ইলেকট্রনিক্স অ্যান্ড কমিউনিকেশন ইঞ্জিনিয়ারিং (ECE - KUET) Subject Review | ক্যারিয়ার গাইড",
    "ete-cuet": "ইলেকট্রনিক্স অ্যান্ড টেলিকমিউনিকেশন ইঞ্জিনিয়ারিং (ETE - CUET) Subject Review | ক্যারিয়ার গাইড",
    "ete-ruet": "ইলেকট্রনিক্স অ্যান্ড টেলিকমিউনিকেশন ইঞ্জিনিয়ারিং (ETE - RUET) Subject Review | ক্যারিয়ার গাইড",
    "nsu-ece": "ইলেকট্রিক্যাল অ্যান্ড কম্পিউটার ইঞ্জিনিয়ারিং (ECE - North South University) Subject Review | ক্যারিয়ার গাইড",
    "ice-pust": "ইনফরমেশন অ্যান্ড কমিউনিকেশন ইঞ্জিনিয়ারিং (ICE - PUST) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "ice-nstu": "ইনফরমেশন অ্যান্ড কমিউনিকেশন ইঞ্জিনিয়ারিং (ICE - NSTU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "ice-ru": "ইনফরমেশন অ্যান্ড কমিউনিকেশন ইঞ্জিনিয়ারিং (ICE - Rajshahi University) Subject Review | ক্যারিয়ার গাইড",
    "urp": "নগর ও অঞ্চল পরিকল্পনা (Urban and Regional Planning - URP) Subject Review | ক্যারিয়ার গাইড",
    "urp-kuet": "নগর ও অঞ্চল পরিকল্পনা (URP - KUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "urp-buet": "নগর ও অঞ্চল পরিকল্পনা (URP - BUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "ruet-architecture": "স্থাপত্য বিভাগ (Architecture - RUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "arch-buet": "স্থাপত্যকলা অনুষদ (Architecture - BUET) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "architecture-department-kuet": "স্থাপত্য বিভাগ (Architecture - KUET) Subject Review | ক্যারিয়ার গাইড",
    
    // Textile
    "ae-butex": "অ্যাপারেল ইঞ্জিনিয়ারিং (Apparel Engineering - BUTEX) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "dye-and-chemical-engineering-dce-butex": "ডাইস অ্যান্ড কেমিক্যাল ইঞ্জিনিয়ারিং (DCE - BUTEX) Subject Review | ক্যারিয়ার গাইড",
    "fabric-engineering-fe-butex": "ফ্যাব্রিক ইঞ্জিনিয়ারিং (Fabric Engineering - BUTEX) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "textile-engineering-management-tem-butex": "টেক্সটাইল ইঞ্জিনিয়ারিং ম্যানেজমেন্ট (TEM - BUTEX) Subject Review | ক্যারিয়ার গাইড",
    "tfd-butex": "টেক্সটাইল ফ্যাশন অ্যান্ড ডিজাইন (TFD - BUTEX) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "wet-process-engineering-wpe-butex": "ওয়েট প্রসেস ইঞ্জিনিয়ারিং (WPE - BUTEX) Subject Review | ক্যারিয়ার গাইড",
    "yarn-engineering-ye-butex": "ইয়ার্ন ইঞ্জিনিয়ারিং (Yarn Engineering - BUTEX) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "tpm-butex": "টেক্সটাইল প্রসেস ম্যানেজমেন্ট (TPM - BUTEX) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "environmental-science-and-engineering-ese-butex": "এনভায়রনমেন্টাল সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (ESE - BUTEX) Subject Review | ক্যারিয়ার গাইড",
    "industrial-and-production-engineering-ipe-butex": "ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং (IPE - BUTEX) Subject Review | ক্যারিয়ার গাইড",
    
    // Medical & Life Sciences
    "mbbs": "এমবিবিএস ও চিকিৎসা বিজ্ঞান (MBBS - Medical Studies) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "bds-dental": "বিডিএস ও ডেন্টাল সার্জারি (BDS - Dental Surgery) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "pharmacy-departmen": "ফার্মেসি বিভাগ (Department of Pharmacy) Subject Review | বিষয় পরিচিতি ও প্রফেশনাল ক্যারিয়ার গাইড",
    "pharmacy-department-cu": "ফার্মেসি বিভাগ (Pharmacy - Chittagong University) Subject Review | ক্যারিয়ার গাইড",
    "bmb-du": "প্রাণরসায়ন ও অনুপ্রাণ বিজ্ঞান (Biochemistry & Molecular Biology - DU) Subject Review | ক্যারিয়ার গাইড",
    "biochemistry-and-molecular-biology-bmb-cu": "প্রাণরসায়ন ও অনুপ্রাণ বিজ্ঞান (BMB - CU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "microbiology-department-du": "অণুজীববিজ্ঞান বিভাগ (Microbiology - University of Dhaka) Subject Review | ক্যারিয়ার গাইড",
    "microbiology-cu": "অণুজীববিজ্ঞান বিভাগ (Microbiology - Chittagong University) Subject Review | ক্যারিয়ার গাইড",
    "genetic-engineering-and-biotechnology-geb-cu": "জেনেটিক ইঞ্জিনিয়ারিং ও বায়োটেকনোলজি (GEB - CU) Subject Review | ক্যারিয়ার গাইড",
    "genetic-engineering-and-biotechnology-geb-du": "জেনেটিক ইঞ্জিনিয়ারিং ও বায়োটেকনোলজি (GEB - DU) Subject Review | ক্যারিয়ার গাইড",
    "geb-sust": "জেনেটিক ইঞ্জিনিয়ারিং ও বায়োটেকনোলজি (GEB - SUST) Subject Review | ক্যারিয়ার গাইড",
    "why-biotechnology": "বায়োটেকনোলজি ও জেনেটিক ইঞ্জিনিয়ারিং (Biotechnology & GEB) Subject Review | ভবিষ্যৎ ক্যারিয়ার গাইড",
    "botany-department-cu": "উদ্ভিদবিজ্ঞান বিভাগ (Botany - Chittagong University) Subject Review | ক্যারিয়ার গাইড",
    "zoology-departmen": "প্রাণিবিদ্যা বিভাগ (Zoology Department) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "soil-water-and-environment-du": "মৃত্তিকা, পানি ও পরিবেশ বিভাগ (Soil, Water & Environment - DU) Subject Review | ক্যারিয়ার গাইড",
    "forestry-cu": "বন ও পরিবেশ বিজ্ঞান ইনস্টিটিউট (Forestry & Environmental Science - CU) Subject Review | ক্যারিয়ার গাইড",
    "institute-of-forestry-and-environmental-sciences-cu": "বন ও পরিবেশ বিজ্ঞান ইনস্টিটিউট (IFES - CU) Subject Review | ক্যারিয়ার গাইড",
    "marine-science-cu": "মেরিন সায়েন্স ও সমুদ্রবিজ্ঞান (Institute of Marine Sciences - CU) Subject Review | ক্যারিয়ার গাইড",
    "oceanography-hydrography-bsmrmu": "সমুদ্রবিজ্ঞান ও হাইড্রোগ্রাফি (Oceanography & Hydrography - BSMRMU) Subject Review | ক্যারিয়ার গাইড",
    "fisheries-cu": "মৎস্যবিজ্ঞান অনুষদ (Fisheries - University of Chittagong) Subject Review | ক্যারিয়ার গাইড",
    
    // Business & Commerce
    "ca": "চার্টার্ড একাউন্টেন্সি (Chartered Accountancy - CA) Subject Review | প্রফেশনাল ক্যারিয়ার গাইড",
    "accounting-information-systems-ais-cu": "অ্যাকাউন্টিং অ্যান্ড ইনফরমেশন সিস্টেমস (AIS - CU) Subject Review | ক্যারিয়ার গাইড",
    "ais-du": "অ্যাকাউন্টিং অ্যান্ড ইনফরমেশন সিস্টেমস (AIS - University of Dhaka) Subject Review | ক্যারিয়ার গাইড",
    "finance-banking-cu": "ফিন্যান্স অ্যান্ড ব্যাংকিং বিভাগ (Finance & Banking - CU) Subject Review | ক্যারিয়ার গাইড",
    "marketing-department-cu": "মার্কেটিং বিভাগ (Department of Marketing - CU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "management-department-cu": "ম্যানেজমেন্ট ও হিউম্যান রিসোর্স (Department of Management - CU) Subject Review | ক্যারিয়ার গাইড",
    "banking-and-insurance-du": "ব্যাংকিং অ্যান্ড ইন্স্যুরেন্স বিভাগ (Banking & Insurance - DU) Subject Review | ক্যারিয়ার গাইড",
    "actuarial-science-and-risk-analytics": "অ্যাকচুয়ারি সায়েন্স ও রিস্ক অ্যানালিটিক্স (Actuarial Science) Subject Review | গ্লোবাল ক্যারিয়ার গাইড",
    "climate-finance-and-esg-investing": "ক্লাইমেট ফিন্যান্স ও ইএসজি ইনভেস্টিং (Climate Finance & ESG) Subject Review | ক্যারিয়ার গাইড",
    "tourism-and-hospitality-nstu": "ট্যুরিজম অ্যান্ড হসপিটালিটি ম্যানেজমেন্ট (THM - NSTU) Subject Review | ক্যারিয়ার গাইড",
    "port-management-and-logistics-pml": "পোর্ট ম্যানেজমেন্ট অ্যান্ড লজিস্টিকস (PML - BSMRMU) Subject Review | ক্যারিয়ার গাইড",
    "maritime-law-and-policy-mlp-bsmrmu": "মেরিটাইম ল অ্যান্ড পলিসি (Maritime Law & Policy - BSMRMU) Subject Review | ক্যারিয়ার গাইড",
    
    // Science & Applied Science
    "physics": "পদার্থবিজ্ঞান বিভাগ (Department of Physics) Subject Review | বৈশ্বিক গুরুত্ব ও ক্যারিয়ার সম্ভাবনা",
    "physics-department-phy-cu": "পদার্থবিজ্ঞান বিভাগ (Physics - Chittagong University) Subject Review | গবেষণা ও ক্যারিয়ার",
    "%e0%a6%97%e0%a6%a3%e0%a6%bf%e0%a6%a4%e0%a7%87-%e0%a6%ad%e0%a6%be%e0%a6%b2%e0%a7%8b-%e0%a6%af%e0%a7%81%e0%a6%95%e0%a7%8d%e0%a6%a4%e0%a6%bf%e0%a6%ac%e0%a7%8b%e0%a6%a7-%e0%a6%aa%e0%a7%8d%e0%a6%b0": "পদার্থবিজ্ঞান পড়ার মানসিক প্রস্তুতি ও বাস্তবিক পর্যালোচনা (Physics) Subject Review",
    "chemistry-cu": "রসায়ন বিভাগ (Department of Chemistry - CU) Subject Review | ক্যারিয়ার ও উচ্চশিক্ষা",
    "applied-chemistry-and-chemical-engineering-acce-du": "ফলিত রসায়ন ও কেমিকৌশল (ACCE - University of Dhaka) Subject Review | ক্যারিয়ার গাইড",
    "applied-chemistry-and-chemical-engineering-acce-ru": "ফলিত রসায়ন ও কেমিকৌশল (ACCE - Rajshahi University) Subject Review | ক্যারিয়ার গাইড",
    "mathematics-department-cu": "গণিত বিভাগ (Department of Mathematics - CU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "applied-mathematics-du": "ফলিত গণিত বিভাগ (Applied Mathematics - DU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "statistics-department-stat-cu": "পরিসংখ্যান বিভাগ (Statistics - CU) Subject Review | ডেটা সায়েন্স ও অ্যানালিটিক্স ক্যারিয়ার",
    "statistics-du": "পরিসংখ্যান বিভাগ (Department of Statistics - DU) Subject Review | ডেটা সায়েন্স ক্যারিয়ার",
    
    // Frontier Science & Tech
    "quantum-computing-and-information-science": "কোয়ান্টাম কম্পিউটিং ও ইনফরমেশন সায়েন্স (Quantum Computing) Subject Review | ভবিষ্যৎ ক্যারিয়ার গাইড",
    "semiconductor-device-physics-and-chip-fabrication": "সেমিকন্ডাক্টর ফিজিক্স ও ভিএলএসআই চিপ ফেব্রিকেশন (Semiconductor Physics) Subject Review | ক্যারিয়ার গাইড",
    "nuclear-fusion-and-plasma-engineering": "নিউক্লিয়ার ফিউশন ও প্লাজমা ইঞ্জিনিয়ারিং (Nuclear Fusion Engineering) Subject Review | ক্যারিয়ার গাইড",
    "nanoengineering-and-molecular-nanotechnology": "ন্যানোইঞ্জিনিয়ারিং ও মলিকুলার ন্যানোটেকনোলজি (Nanoengineering) Subject Review | ক্যারিয়ার গাইড",
    "synthetic-biology-and-metabolic-engineering": "সিন্থেটিক বায়োলজি ও মেটাবলিক ইঞ্জিনিয়ারিং (Synthetic Biology) Subject Review | ক্যারিয়ার গাইড",
    "astrobiology-and-space-biotechnology": "অ্যাস্ট্রোবায়োলজি ও স্পেস বায়োটেকনোলজি (Astrobiology) Subject Review | বৈশ্বিক গবেষণা ও ক্যারিয়ার",
    "urban-informatics-and-smart-cities": "আরবান ইনফরমেটিক্স ও স্মার্ট সিটি সিস্টেমস (Urban Informatics) Subject Review | ক্যারিয়ার গাইড",
    "renewable-energy-and-smart-grid": "রিনিউয়েবল এনার্জি ও স্মার্ট গ্রিড ইঞ্জিনিয়ারিং (Renewable Energy) Subject Review | ক্যারিয়ার গাইড",
    "game-design-and-interactive-media": "গেম ডিজাইন ও ইন্টারঅ্যাক্টিভ মিডিয়া আর্কিটেকচার (Game Design) Subject Review | ক্যারিয়ার গাইড",
    "space-law-and-planetary-policy": "স্পেস ল ও গ্লোবাল স্যাটেলাইট রেগুলেশনস (Space Law & Policy) Subject Review | আন্তর্জাতিক ক্যারিয়ার",
    
    // Humanities, Law & Social Sciences
    "law-department-cu": "আইন বিভাগ (Department of Law - Chittagong University) Subject Review | বিচার বিভাগ ও ক্যারিয়ার",
    "law-du": "আইন অনুষদ (Faculty of Law - University of Dhaka) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "criminology-and-police-science-cps-mbstu": "ক্রিমিনোলজি অ্যান্ড পুলিশ সায়েন্স (CPS - MBSTU) Subject Review | ক্যারিয়ার গাইড",
    "criminology-du": "অপরাধবিজ্ঞান বিভাগ (Department of Criminology - DU) Subject Review | ক্যারিয়ার গাইড",
    "economics-department-cu": "অর্থনীতি বিভাগ (Department of Economics - CU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "economics-du": "অর্থনীতি বিভাগ (Department of Economics - University of Dhaka) Subject Review | ক্যারিয়ার গাইড",
    "international-relations-du": "আন্তর্জাতিক সম্পর্ক বিভাগ (International Relations - IR - DU) Subject Review | ক্যারিয়ার গাইড",
    "english-language-and-literature-cu": "ইংরেজি ভাষা ও সাহিত্য (English Language & Literature - CU) Subject Review | ক্যারিয়ার গাইড",
    "english-du": "ইংরেজি বিভাগ (Department of English - University of Dhaka) Subject Review | ক্যারিয়ার গাইড",
    "bengali-department-cu": "বাংলা ভাষা ও সাহিত্য বিভাগ (Bangla - CU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "journalism-communication-cu": "যোগাযোগ ও সাংবাদিকতা বিভাগ (Journalism & Communication - CU) Subject Review | ক্যারিয়ার গাইড",
    "public-administration-department-pad": "লোকপ্রশাসন বিভাগ (Public Administration - PAD - SUST) Subject Review | বিসিএস ও ক্যারিয়ার",
    "public-administration-cu": "লোকপ্রশাসন বিভাগ (Public Administration - CU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "du-sociology": "সমাজবিজ্ঞান বিভাগ (Sociology - University of Dhaka) Subject Review | ক্যারিয়ার ও উচ্চশিক্ষা",
    "sociology-department-cu": "সমাজবিজ্ঞান বিভাগ (Sociology - Chittagong University) Subject Review | ক্যারিয়ার গাইড",
    "subject-review-anthropology": "নৃবিজ্ঞান বিভাগ (Department of Anthropology) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    "anthropology-cu": "নৃবিজ্ঞান বিভাগ (Anthropology - Chittagong University) Subject Review | ক্যারিয়ার গাইড",
    "psychology-department-cu": "মনোবিজ্ঞান বিভাগ (Department of Psychology - CU) Subject Review | মানসিক স্বাস্থ্য ও ক্যারিয়ার",
    "fine-arts-cu": "চারুকলা ইনস্টিটিউট (Institute of Fine Arts - CU) Subject Review | ক্রিয়েটিভ ক্যারিয়ার গাইড",
    "ier-du": "শিক্ষা ও গবেষণা ইনস্টিটিউট (Institute of Education and Research - IER - DU) Subject Review | ক্যারিয়ার",
    "farsi-language-and-literature-cu": "ফার্সি ভাষা ও সাহিত্য বিভাগ (Farsi - CU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "islamic-studies-cu": "ইসলামিক স্টাডিজ বিভাগ (Islamic Studies - CU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "history-department-cu": "ইতিহাস বিভাগ (Department of History - CU) Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার",
    "islamic-history-and-culture-cu": "ইসলামের ইতিহাস ও সংস্কৃতি বিভাগ (Islamic History & Culture - CU) Subject Review | ক্যারিয়ার",
    "nstu-education-administration": "শিক্ষা প্রশাসন বিভাগ (Educational Administration - NSTU) Subject Review | ক্যারিয়ার গাইড",
    
    // Portals & Guides
    "subject-review": "বাংলাদেশের বিশ্ববিদ্যালয়ের সকল বিষয়ের মাস্টার ইনডেক্স ও Subject Review নির্দেশিকা",
    "pubd": "বাংলাদেশের পাবলিক বিশ্ববিদ্যালয়ের ভর্তি ও একাডেমিক তথ্য সহায়িকা | Subject Review গাইড",
    "sylebus-of-kue": "খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (KUET) একাডেমিক সিলেবাস ও ক্রেডিট কাঠামো | Subject Review",
    "syllabus-of-mechanical-kue": "মেকানিক্যাল ইঞ্জিনিয়ারিং (ME - KUET) বিস্তারিত একাডেমিক সিলেবাস ও কোর্স কারিকুলাম | Subject Review"
  };

  if (exactMap[slug]) {
    return exactMap[slug];
  }

  // If already contains "Subject Review"
  if (/subject review/i.test(title)) {
    // Ensure properly formatted
    title = title.replace(/\s*\|\s*subject review/i, ' Subject Review');
    if (!title.includes('Subject Review')) {
      title = title.replace(/subject review/i, 'Subject Review');
    }
    return title;
  }

  // Otherwise append cleanly
  return `${title} Subject Review | বিষয় পরিচিতি ও ক্যারিয়ার গাইড`;
}

let updatedCount = 0;
const list = [];

files.forEach(file => {
  const filePath = path.join(REVIEWS_DIR, file);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw);
  const slug = data.slug || file.replace('.json', '');

  const newTitle = cleanAndBuildSeoTitle(slug, data.title);
  
  data.title = newTitle;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  updatedCount++;

  list.push({
    id: data.id || list.length + 1,
    slug: slug,
    title: newTitle
  });
});

// Sort by ID
list.sort((a, b) => a.id - b.id);
list.forEach((item, index) => {
  item.id = index + 1;
});

const tsContent = 'export interface ReviewMeta {\n  id: number;\n  slug: string;\n  title: string;\n}\n\nexport const reviewsList: ReviewMeta[] = ' + JSON.stringify(list, null, 2) + ';\n';

fs.writeFileSync('./data/reviews-list.ts', tsContent, 'utf-8');

console.log(`Successfully updated ${updatedCount} review files and reviews-list.ts with SEO-friendly titles containing 'Subject Review'!`);
