const fs = require('fs');
const path = require('path');

const REVIEWS_DIR = path.join(process.cwd(), 'data', 'reviews');

const bauReviews = [
  {
    slug: "dvm-veterinary-medicine-bau",
    title: "ডক্টর অব ভেটেরিনারি মেডিসিন (DVM - BAU) বিষয় পরিচিতি ও ক্যারিয়ার গাইড",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে ডক্টর অব ভেটেরিনারি মেডিসিন (DVM - BAU)</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">বাংলাদেশ কৃষি বিশ্ববিদ্যালয় (বাকৃবি)-এর ভেটেরিনারি সাইন্স অনুষদ দেশের প্রাণিস্বাস্থ্য ও ক্লিনিক্যাল ভেটেরিনারি চিকিৎসার এক নম্বর পথিকৃৎ। ৫ বছর মেয়াদী (১০ সেমিস্টার) পেশাদার ডিভিএম ডিগ্রি ও ১ বছরের বাধ্যতামূলক ইন্টার্নশিপের মাধ্যমে শিক্ষার্থীদের আধুনিক ক্লিনিক্যাল ভেটেরিনারি সার্জন হিসেবে গড়ে তোলা হয়।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why DVM is Taught at BAU)</h2>
      <p>মানুষের স্বাস্থ্যের মতোই প্রাণিসম্পদের সুস্বাস্থ্য একটি দেশের খাদ্য নিরাপত্তা, পুষ্টি ও অর্থনীতির জন্য অপরিহার্য। এছাড়া মানবদেহের প্রায় ৬০% সংক্রামক রোগ এবং ৭৫% নতুন উদীয়মান রোগ (যেমন: অ্যানথ্রাক্স, বার্ড ফ্লু, র‍্যাবিস, ব্রুসেলোসিস) প্রাণীদেহ থেকে মানুষের শরীরে ছড়ায় (Zoonotic Diseases)। <strong>"One Health"</strong> বা একক স্বাস্থ্য ধারণার মূলভিত্তি হলো প্রাণিস্বাস্থ্য রক্ষা করা।</p>
      <p>গৃহপালিত পশু, দুগ্ধবতী গাভী, বাণিজ্যিক পোল্ট্রি, বন্যপ্রাণী ও পোষা প্রাণীর (Pets) জটিল রোগ নির্ণয়, আধুনিক আল্ট্রাসনোগ্রাফি ও এক্স-রে ডায়াগনোসিস, জীবনরক্ষাকারী সার্জারি, অ্যান্টিবায়োটিক রেজিস্ট্যান্স প্রতিরোধ এবং সংক্রামক এপিডেমিওলজি নিয়ন্ত্রণের বিশেষজ্ঞ চিকিৎসক তৈরি করতেই বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ে ডিভিএম (DVM) কোর্স পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/animal-husbandry-bau" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>বিএসসি ইন এনিম্যাল হাজবেন্ড্রি (Animal Husbandry - BAU) - পশুপালন ও ডেইরি সাইন্স</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Comprehensive Academic & Clinical Syllabus)</h2>
      <p>বাকৃবির ভেটেরিনারি সায়েন্স অনুষদে ৮টি বিশেষায়িত বিভাগের মাধ্যমে অত্যন্ত গভীর প্রি-ক্লিনিক্যাল, প্যারা-ক্লিনিক্যাল ও ক্লিনিক্যাল শিক্ষা প্রদান করা হয়:</p>

      <h3 class="review-h3">ক. প্রি-ক্লিনিক্যাল বেসিক সায়েন্স</h3>
      <ul>
        <li><strong>অ্যানাটমি ও হিস্টোলজি (Anatomy & Histology):</strong> বিভিন্ন স্তন্যপায়ী প্রাণী, পাখি ও বন্যপ্রাণীর হাড়, পেশী, স্নায়ুতন্ত্র ও অণুবীক্ষণিক টিস্যু কাঠামো ডিসেকশন।</li>
        <li><strong>ফিজিওলজি ও বায়োকেমিস্ট্রি (Physiology & Biochemistry):</strong> প্রাণিদেহের রক্ত সংবহন, শ্বসন, পরিপাক ও হরমোন নিঃসরণের শারীরবৃত্তীয় কার্যক্রম।</li>
      </ul>

      <h3 class="review-h3">খ. প্যারা-ক্লিনিক্যাল ডায়াগনোস্টিক মডিউলস</h3>
      <ul>
        <li><strong>ফার্মাকোলজি ও টক্সিকোলজি (Pharmacology & Toxicology):</strong> ভেটেরিনারি ড্রাগের ডোজ রেগুলেশন, ফার্মাকোকাইনেটিক্স ও বিষক্রিয়া চিকিৎসা।</li>
        <li><strong>মাইক্রোবায়োলজি ও হাইজিন (Microbiology & Hygiene):</strong> ব্যাকটেরিয়া, ভাইরাস ও ছত্রাকজনিত রোগ সনাক্তকরণ, ভ্যাকসিন প্রস্তুত প্রণালী ও ইমিউনোলজি।</li>
        <li><strong>প্যাথলজি ও প্যারাসাইটোলজি (Pathology & Parasitology):</strong> ময়নাতদন্ত (Necropsy), হিস্টোপ্যাথলজি ও অভ্যন্তরীণ পরজীবী প্রতিরোধ কৌশল।</li>
      </ul>

      <h3 class="review-h3">গ. ক্লিনিক্যাল ভেটেরিনারি মেডিসিন ও সার্জারি</h3>
      <ul>
        <li><strong>মেডিসিন ও এপিডেমিওলজি (Veterinary Medicine & Epidemiology):</strong> রুমিন্যান্ট ও নন-রুমিন্যান্ট প্রাণীর অভ্যন্তরীণ রোগ নির্ণয়, থেরাপিউটিক্স ও মহামারী নিয়ন্ত্রণ।</li>
        <li><strong>সার্জারি ও অবস্টেট্রিক্স (Surgery & Obstetrics):</strong> অর্থোপেডিক ও সফট-টিস্যু সার্জারি, অ্যানাস্থেসিওলজি, সিজারিয়ান সেকশন ও কৃত্রিম প্রজনন গাইনোকোলজি।</li>
        <li><strong>বাকৃবি ভেটেরিনারি ক্লিনিক ইন্টার্নশিপ:</strong> কেন্দ্রীয় ভেটেরিনারি টিচিং হাসপাতাল ও চিড়িয়াখানায় রিয়েল-টাইম রোগী অপারেশন ও প্রেসক্রিপশন।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও ওয়ান হেলথ রেভল্যুশন (The Future of DVM)</h2>
      <p>বর্তমান বিশ্বে ভেটেরিনারি মেডিসিনের গুরুত্ব দ্রুত সম্প্রসারিত হচ্ছে:</p>
      <ul>
        <li><strong>গ্লোবাল ওয়ান হেলথ ইনিশিয়েটিভ:</strong> প্যানডেমিক প্রতিরোধে বিশ্ব স্বাস্থ্য সংস্থা (WHO) ও জাতিসংঘের খাদ্য ও কৃষি সংস্থা (FAO)-এর অধীনে আন্তর্জাতিক মহামারী মনিটরিং।</li>
        <li><strong>স্মার্ট ভেটেরিনারি ক্লিনিক ও পেট কেয়ার ইন্ডাস্ট্রি:</strong> ঢাকা ও বড় শহরগুলোতে পোষা বিড়াল, কুকুর ও পাখির মাল্টি-স্পেশালিটি সুপার ক্লিনিকের ব্যাপক বিস্তার।</li>
        <li><strong>সেলুলার এগ্রিকালচার ও অ্যান্টিবায়োটিক-ফ্রি মিট প্রোডাকশন:</strong> আন্তর্জাতিক মাংস রপ্তানি মানদণ্ডে ড্রাগ রেসিডিউ কমানোর বৈজ্ঞানিক নেতৃত্ব।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/microbiology" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>অণুজীববিজ্ঞান (Microbiology) - ভাইরোলজি, ভ্যাকসিন ডেভলপমেন্ট ও ডায়াগনস্টিকস</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও জব সেক্টর (Career Opportunities for DVM Graduates)</h2>
      <p>ডিভিএম গ্র্যাজুয়েটদের দেশে ও বিদেশে অভাবনীয় বহুমুখী ক্যারিয়ারের সুযোগ রয়েছে:</p>

      <h3 class="review-h3">ক. সরকারি ও স্বায়ত্তশাসিত খাত</h3>
      <ul>
        <li><strong>বিসিএস লাইভস্টক ক্যাডার:</strong> উপজেলা প্রাণিসম্পদ কর্মকর্তা (ULO) ও ভেটেরিনারি সার্জন (VS - ৯ম গ্রেড)।</li>
        <li><strong>গবেষণা প্রতিষ্ঠান:</strong> বাংলাদেশ প্রাণিসম্পদ গবেষণা ইনস্টিটিউট (BLRI)-এ বৈজ্ঞানিক কর্মকর্তা, ঔষধ প্রশাসন অধিদপ্তর, জাতীয় চিড়িয়াখানা ও সাফারি পার্ক ভেটেরিনারি অফিসার।</li>
      </ul>

      <h3 class="review-h3">খ. করপোরেট ফার্মাসিউটিক্যাল ও এগ্রোভেট ইন্ডাস্ট্রি</h3>
      <ul>
        <li><strong>শীর্ষ ভেট ফার্মা ও ফিড মিলস:</strong> স্কয়ার ফার্মাসিউটিক্যালস (অ্যাগ্রোভেট ডিভিশন), রেনাটা এনিম্যাল হেলথ, একমি, এসিআই এনিম্যাল হেলথ, নোভারটিস, এভেনটিস-এ টেকনিক্যাল সার্ভিসেস ম্যানেজার ও প্রডাক্ট এক্সিকিউটিভ।</li>
        <li><strong>আন্তর্জাতিক ক্যারিয়ার ও ইমিগ্রেশন:</strong> কানাডা, অস্ট্রেলিয়া, যুক্তরাষ্ট্র ও যুক্তরাজ্যে North American Veterinary Licensing Examination (NAVLE) ও RCVS মেম্বারশিপ নিয়ে অত্যন্ত উচ্চ বেতনে লাইসেন্সধারী ভেটেরিনারি প্র্যাকটিস।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও ফুল-ফান্ডেড স্কলারশিপ</h3>
      <p>যুক্তরাষ্ট্রের UC Davis (বিশ্বের ১ নম্বর ভেট স্কুল), Cornell University, Royal Veterinary College (UK), University of Melbourne-এ প্রতি বছর বাকৃবির শিক্ষার্থীরা সম্পূর্ণ ফুল-ফান্ডেড এমএস ও পিএইচডি স্কলারশিপ নিয়ে উচ্চশিক্ষা গ্রহণ করছেন।</p>
    `
  },
  {
    slug: "animal-husbandry-bau",
    title: "বিএসসি ইন এনিম্যাল হাজবেন্ড্রি (Animal Husbandry - BAU) বিষয় পরিচিতি ও ক্যারিয়ার",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে বিএসসি ইন এনিম্যাল হাজবেন্ড্রি (Animal Husbandry - BAU)</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">বাংলাদেশের প্রাণিজ আমিষের চাহিদা পূরণ, ডেইরি ও পোল্ট্রি শিল্পের আধুনিক ব্রিডিং, বৈজ্ঞানিক পুষ্টি ব্যবস্থাপনা এবং মেগা এগ্রো-ফার্ম ব্যবস্থাপনার প্রধান কারিগর তৈরি করার বিশেষায়িত অনুষদ হলো বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ের পশুপালন অনুষদ (Faculty of Animal Husbandry)।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why Animal Husbandry is Taught at BAU)</h2>
      <p>একটি উন্নয়নশীল দেশে দুধ, ডিম ও মাংসের জোগান ছাড়া অপুষ্টি দূরীকরণ অসম্ভব। কিন্তু চিরাচরিত পদ্ধতিতে গবাদিপশু পালন করে বাণিজ্যিক লাভ সম্ভব নয়। আধুনিক জেনেটিক ব্রিডিংয়ের মাধ্যমে একটি গাভীর দুধ উৎপাদন দৈনিক ২ লিটার থেকে বাড়িয়ে ৩০ লিটারে উন্নীত করা, ব্রয়লার মুরগির বৃদ্ধির হার অপটিমাইজ করা এবং স্বল্প খরচে সুষম খাদ্য (Feed Formulation) তৈরি করাই হলো এনিম্যাল হাজবেন্ড্রির মূল কাজ।</p>
      <p>পশু-পাখির খাদ্য বিজ্ঞান (Animal Nutrition), উন্নত বংশগতি (Genetics & Breeding), ডেইরি প্রসেসিং (Dairy Science), পোল্ট্রি ব্যবস্থাপনা (Poultry Science) ও প্রাণিকল্যাণের সমন্বিত বৈজ্ঞানিক জ্ঞান দিতেই বাকৃবিতে এই কোর্স পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/dvm-veterinary-medicine-bau" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>ডক্টর অব ভেটেরিনারি মেডিসিন (DVM - BAU) - রোগ নির্ণয় ও ক্লিনিক্যাল চিকিৎসা</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Curriculum Breakdown across 5 Core Departments)</h2>
      <p>পশুপালন অনুষদে ৫টি অত্যন্ত সমৃদ্ধ বিভাগের অধীনে পাঠ্যক্রম সাজানো হয়েছে:</p>

      <h3 class="review-h3">ক. এনিম্যাল ব্রিডিং অ্যান্ড জেনেটিক্স (Animal Breeding & Genetics)</h3>
      <ul>
        <li><strong>পপুলেশন ও কোয়ান্টিটেটিভ জেনেটিক্স:</strong> উচ্চ উৎপাদনশীল বৈশিষ্ট্যের বংশগতি মডেলিং।</li>
        <li><strong>কৃত্রিম প্রজনন ও এমব্রায়ো ট্রান্সফার (ET):</strong> হিমায়িত সিমেন সংরক্ষণ ও সুপার-ওভুলেশন টেকনোলজি।</li>
        <li><strong>মলিকুলার ব্রিডিং ও মার্কার অ্যাসিস্টেড সিলেকশন (MAS):</strong> খরা ও তাপ সহনশীল জাত উদ্ভাবন।</li>
      </ul>

      <h3 class="review-h3">খ. এনিম্যাল নিউট্রিশন (Animal Nutrition)</h3>
      <ul>
        <li><strong>ফিড কেমিস্ট্রি ও মেটাবলিজম:</strong> প্রোটিন, অ্যামিনো অ্যাসিড, খনিজ ও ভিটামিনের পরিপাক মূল্যায়ন।</li>
        <li><strong>কম্পিউটারাইজড ফিড ফর্মুলেশন:</strong> লিনিয়ার প্রোগ্রামিং সফটওয়্যার দিয়ে সর্বনিম্ন খরচে পুষ্টিকর পশুখাদ্য ফর্মুলেশন।</li>
        <li><strong>সাইলেজ ও উন্নত ঘাস সংরক্ষণ:</strong> ভুট্টা ও নেপিয়ার ঘাসের সাইলেজ প্রসেসিং।</li>
      </ul>

      <h3 class="review-h3">গ. ডেইরি সায়েন্স ও পোল্ট্রি সায়েন্স (Dairy & Poultry Sciences)</h3>
      <ul>
        <li><strong>দুধ প্রক্রিয়াজাতকরণ ও ডেইরি টেকনোলজি:</strong> পাস্তুরাইজেশন, ইউএইচটি মিল্ক, পনির, মাখন ও আইসক্রিম উৎপাদন।</li>
        <li><strong>কমার্শিয়াল হ্যাচারি ও লেয়ার/ব্রয়লার ম্যানেজমেন্ট:</strong> অটোমেটেড পোল্ট্রি শেড, ইনকিউবেশন ও বায়োসিকিউরিটি।</li>
        <li><strong>প্রাণিসম্পদ বর্জ্য ব্যবস্থাপনা ও বায়োগ্যাস প্ল্যান্ট:</strong> পরিবেশবান্ধব গ্রিন এনার্জি উৎপাদন।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও বাণিজ্যিক এগ্রো-বিপ্লব (The Future of Animal Industry)</h2>
      <p>বর্তমানে বাংলাদেশে পোল্ট্রি ও ডেইরি শিল্প প্রায় ৫০,০০০ কোটি টাকার একটি বিশাল প্রাতিষ্ঠানিক অর্থনীতিতে পরিণত হয়েছে:</p>
      <ul>
        <li><strong>স্মার্ট ডেইরি ও প্রিসিশন লাইভস্টক ফার্মিং:</strong> রোবোটিক মিল্কিং সিস্টেম, কানের আরএফআইডি ট্যাগ দিয়ে গাভীর স্বাস্থ্য মনিটরিং ও এআই অ্যালগরিদম।</li>
        <li><strong>রপ্তানিমুখী মিট ও পোল্ট্রি প্রসেসিং:</strong> আন্তর্জাতিক হালাল মিট সার্টিফিকেট অর্জনের মাধ্যমে মধ্যপ্রাচ্যে মাংস রপ্তানির প্রস্তুতি।</li>
        <li><strong>পরিবেশবান্ধব মিথেন রিডাকশন:</strong> বিশেষ খাদ্য সাপ্লিমেন্টের মাধ্যমে গাভীর পেট থেকে গ্রিনহাউস মিথেন নির্গমন হ্রাস গবেষণা।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/food-engineering-bau" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>বিএসসি ইন ফুড ইঞ্জিনিয়ারিং (Food Engineering - BAU) - খাদ্য প্রক্রিয়াকরণ ও মান নিয়ন্ত্রণ</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও কর্মক্ষেত্র (Career Opportunities for AH Graduates)</h2>
      <p>এনিম্যাল হাজবেন্ড্রি গ্র্যাজুয়েটদের জন্য দেশে ও বিদেশে অভাবনীয় কর্মক্ষেত্র রয়েছে:</p>

      <h3 class="review-h3">ক. সরকারি ও স্বায়ত্তশাসিত চাকরি</h3>
      <ul>
        <li><strong>বিসিএস লাইভস্টক ক্যাডার:</strong> উপজেলা প্রাণিসম্পদ কর্মকর্তা (উৎপাদন) ও লাইভস্টক অফিসার (৯ম গ্রেড)।</li>
        <li><strong>গবেষণা প্রতিষ্ঠান:</strong> বিএলআরআই (BLRI), বাংলাদেশ প্রাণিসম্পদ অধিদপ্তর (DLS), দুধ সমবায় সমিতি (মিল্ক ভিটা)।</li>
      </ul>

      <h3 class="review-h3">খ. করপোরেট পোল্ট্রি, ডেইরি ও ফিডমিল ইন্ডাস্ট্রি</h3>
      <ul>
        <li><strong>শীর্ষস্থানীয় প্রতিষ্ঠান:</strong> কাজী ফার্মস গ্রুপ, সিপি বাংলাদেশ, প্যারাগন গ্রুপ, আফতাব বহুমুখী ফার্মস, নারিশ পোল্ট্রি, প্রাণ ডেইরি, আড়ং ডেইরি ও ব্র্যাক লাইভস্টক।</li>
        <li><strong>পদবী ও পারিশ্রমিক:</strong> ফার্ম ম্যানেজার, নিউট্রিশনিস্ট, ব্রিডিং স্পেশালিস্ট, ফিডমিল কোয়ালিটি কন্ট্রোলার হিসেবে আকর্ষণীয় বেতন ও আবাসন সুবিধা।</li>
      </ul>

      <h3 class="review-h3">গ. আন্তর্জাতিক ক্যারিয়ার ও উচ্চশিক্ষা</h3>
      <p>Wageningen University (নেদারল্যান্ডস - বিশ্বের ১ নম্বর এগ্রিকালচার বিশ্ববিদ্যালয়), University of Hohenheim (জার্মানি), University of Alberta (কানাডা)-এ প্রতি বছর শতভাগ স্কলারশিপ পাওয়া যায়।</p>
    `
  },
  {
    slug: "agricultural-economics-bau",
    title: "বিএসসি ইন এগ্রিকালচারাল ইকোনমিক্স (Agricultural Economics - BAU) বিষয় পরিচিতি ও ক্যারিয়ার",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে এগ্রিকালচারাল ইকোনমিক্স (BAU)</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">অর্থনীতি, ফাইন্যান্স, আন্তর্জাতিক বাণিজ্য ও ডেটা সায়েন্সের প্রায়োগিক সমন্বয়ে গঠিত বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ের কৃষি অর্থনীতি ও গ্রামীণ সমাজবিজ্ঞান অনুষদ (Faculty of Agricultural Economics and Rural Sociology) দেশের জাতীয় খাদ্য নীতি, এগ্রিবিজনেস ও উন্নয়ন অর্থনীতির শীর্ষ চালিকাশক্তি।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why Agricultural Economics is Taught at BAU)</h2>
      <p>শুধু খাদ্য উৎপাদন করলেই হয় না—উৎপাদিত পণ্য কীভাবে কৃষকের হাত থেকে ভোক্তার কাছে পৌঁছাবে, পণ্যের ন্যায্যমূল্য কীভাবে নির্ধারিত হবে, বিশ্ববাজারের মূল্যস্ফীতি কীভাবে নিয়ন্ত্রণ করা যাবে এবং কৃষিতে ঋণের সঠিক প্রবাহ কীভাবে নিশ্চিত করা হবে—তা সমাধানের জন্য উচ্চদক্ষ অর্থনীতিবিদ প্রয়োজন।</p>
      <p>সাধারণ অর্থনীতির মতো এটি কেবল তাত্ত্বিক নয়; বরং এটি ম্যাক্রো-ইকোনমিক্স, ইকোনোমেট্রিক্স, পলিসি অ্যানালাইসিস, সাপ্লাই চেইন ম্যানেজমেন্ট এবং এগ্রিবিজনেস ফাইন্যান্সের এক অনন্য বাস্তবসম্মত প্রায়োগিক মিশ্রণ। তাই জাতীয় ও আন্তর্জাতিক পর্যায়ে পলিসি মেকিংয়ের জন্য কৃষি অর্থনীতি পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/economics" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>অর্থনীতি (Economics) - মাইক্রো/ম্যাক্রো ইকোনমিক্স ও ইকোনোমেট্রিক্স</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Academic Curriculum & Analytical Modules)</h2>
      <p>কৃষি অর্থনীতি অনুষদে ৫টি প্রধান বিভাগের মাধ্যমে বিশ্বমানের পাঠ্যক্রম পরিচালিত হয়:</p>

      <h3 class="review-h3">ক. এগ্রিকালচারাল ইকোনমিক্স ও ফার্ম ম্যানেজমেন্ট</h3>
      <ul>
        <li><strong>মাইক্রো ও ম্যাক্রো ইকোনমিক মডেলিং:</strong> ভোক্তা আচরণ তত্ত্ব, উৎপাদন অর্থনীতি ও মোট জাতীয় আয় ভারসাম্য।</li>
        <li><strong>ফার্ম ম্যানেজমেন্ট ও প্রোডাকশন ইকোনমিক্স:</strong> লিমিটেড রিসোর্সে সর্বোচ্চ মুনাফা অর্জনের অপটিমাইজেশন টেকনিক।</li>
        <li><strong>পরিবেশ ও প্রাকৃতিক সম্পদ অর্থনীতি:</strong> টেকসই পরিবেশ সংরক্ষণ ও জলবায়ু প্রভাব মূল্যায়ন।</li>
      </ul>

      <h3 class="review-h3">খ. এগ্রিকালচারাল ফাইন্যান্স, ব্যাংকিং ও কো-অপারেশন</h3>
      <ul>
        <li><strong>রুরাল ক্রেডিট ও মাইক্রোফাইন্যান্স:</strong> গ্রামীণ ক্ষুদ্রঋণ ব্যবস্থাপনা, ক্রেডিট রিস্ক অ্যানালাইসিস ও ব্যাংকিং সিস্টেম।</li>
        <li><strong>কমোডিটি ট্রেডিং ও সাপ্লাই চেইন ম্যানেজমেন্ট:</strong> কোল্ড-চেইন লজিস্টিকস, মার্কেট ইন্টিগ্রেশন ও প্রাইস ভলাটিলিটি স্টাডিজ।</li>
      </ul>

      <h3 class="review-h3">গ. ইকোনোমেট্রিক্স, পরিসংখ্যান ও গ্রামীণ সমাজবিজ্ঞান</h3>
      <ul>
        <li><strong>ইকোনোমেট্রিক সফটওয়্যার টুলস:</strong> STATA, R, SPSS ও Python দিয়ে পলিসি ডেটা অ্যানালাইসিস ও টাইম সিরিজ ফোরকাস্টিং।</li>
        <li><strong>রুরাল সোসিওলজি ও ডেভেলপমেন্ট স্টাডিজ:</strong> জেন্ডার রোল, দারিদ্র্য দূরীকরণ কৌশল ও কমিউনিটি উন্নয়ন প্রোগ্রাম।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও বৈশ্বিক পলিসি মেকিং (The Future of Agri-Econ)</h2>
      <p>চতুর্থ শিল্পবিপ্লব ও জলবায়ু পরিবর্তনের যুগে কৃষি অর্থনীতিবিদদের ভূমিকা আরও গুরুত্বপূর্ণ হয়ে উঠেছে:</p>
      <ul>
        <li><strong>কার্বন ক্রেডিট ও টেকসই এগ্রি-ট্রেড:</strong> আন্তর্জাতিক জলবায়ু অর্থায়ন ও কার্বন বন্ড ইমপ্লিমেন্টেশন।</li>
        <li><strong>ডিজিটাল এগ্রি-ফিনটেক:</strong> কৃষকদের জন্য ব্লকচেইন সাপ্লাই চেইন ও মোবাইল ফাইন্যান্সিয়াল সার্ভিসের ডিজাইন।</li>
        <li><strong>গ্লোবাল ফুড সিকিউরিটি পলিসি:</strong> যুদ্ধ ও ভূ-রাজনৈতিক অস্থিরতায় বৈশ্বিক খাদ্য সরবরাহ অক্ষুণ্ন রাখার ম্যাক্রো পলিসি ডিজাইন।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/finance-du" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>ফিন্যান্স (Finance - DU) - ইনভেস্টমেন্ট ব্যাংকিং ও করপোরেট ফাইন্যান্স</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও কর্মক্ষেত্র (Career Opportunities for Agri-Economists)</h2>
      <p>কৃষি অর্থনীতির গ্র্যাজুয়েটরা করপোরেট, ব্যাংকিং এবং আন্তর্জাতিক সংস্থায় সবচেয়ে এগিয়ে থাকেন:</p>

      <h3 class="review-h3">ক. ব্যাংকিং ও আর্থিক খাত</h3>
      <ul>
        <li><strong>বাংলাদেশ ব্যাংক:</strong> সহকারী পরিচালক (AD) হিসেবে বিপুল সংখ্যক কৃষি অর্থনীতিবিদ কর্মরত।</li>
        <li><strong>রাষ্ট্রায়ত্ত ও বেসরকারি বাণিজ্যিক ব্যাংক:</strong> সিনিয়র অফিসার ও কৃষি ঋণ কর্মকর্তা হিসেবে বিশেষ প্রাধান্য।</li>
      </ul>

      <h3 class="review-h3">খ. আন্তর্জাতিক উন্নয়ন সংস্থা ও থিঙ্ক-ট্যাঙ্ক</h3>
      <ul>
        <li><strong>জাতিসংঘ ও গ্লোবাল বডিজ:</strong> FAO, World Bank, IFPRI (International Food Policy Research Institute), UNDP, WFP, ADB।</li>
        <li><strong>জাতীয় পলিসি রিসার্চ:</strong> BIDS (বাংলাদেশ উন্নয়ন গবেষণা প্রতিষ্ঠান), সেন্টার ফর পলিসি ডায়ালগ (CPD), সানেম (SANEM)।</li>
      </ul>

      <h3 class="review-h3">গ. সাধারণ বিসিএস ও বহুজাতিক করপোরেট প্রতিষ্ঠান</h3>
      <ul>
        <li><strong>বিসিএস প্রশাসন, পুলিশ, শুল্ক ও অডিট:</strong> সাধারণ ক্যাডারে কৃষি অর্থনীতিবিদদের সাফল্য ঈর্ষণীয়।</li>
        <li><strong>মাল্টিন্যাশনাল এগ্রিবিজনেস:</strong> ইউনিলিভার, নেসলে, এসিআই, বায়ার, সিনজেনটা ও স্কয়ার এগ্রোতে ব্র্যান্ড/মার্কেটিং ম্যানেজার।</li>
      </ul>

      <h3 class="review-h3">ঘ. উচ্চশিক্ষা ও সেরা আন্তর্জাতিক বিশ্ববিদ্যালয়</h3>
      <p>Cornell University, Purdue University, University of Illinois Urbana-Champaign (USA), Wageningen University (Netherlands) ও University of Göttingen (Germany)-এ ফুল ফান্ডেড মাস্টার্স ও পিএইচডির সুবর্ণ সুযোগ রয়েছে।</p>
    `
  },
  {
    slug: "agricultural-engineering-bau",
    title: "বিএসসি ইন এগ্রিকালচারাল ইঞ্জিনিয়ারিং (Agricultural Engineering - BAU) সম্পূর্ণ গাইড",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে বিএসসি ইন এগ্রিকালচারাল ইঞ্জিনিয়ারিং (BAU)</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">বাংলাদেশের কৃষিব্যবস্থাকে শতভাগ যান্ত্রিকীকরণ, স্বয়ংক্রিয় কম্বাইন হারভেস্টার, ড্রোন স্প্রেয়িং, সোলার ডিপ-টিউবওয়েল সেচ ও টেকসই গ্রামীণ অবকাঠামো বিনির্মাণের প্রধান পেশাদার প্রকৌশল ডিগ্রি হলো বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ের এগ্রিকালচারাল ইঞ্জিনিয়ারিং (Agri. Engg.)।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why Agricultural Engineering is Taught)</h2>
      <p>কৃষিতে তীব্র শ্রমিক সংকট ও জলবায়ু পরিবর্তনের প্রতিকূলতা কাটিয়ে উঠতে সনাতন চাষাবাদের যুগ শেষ। এখন জমি তৈরি থেকে ফসল কাটা পর্যন্ত দরকার ভারী ও সূক্ষ্ম যন্ত্রপাতি। একটি আধুনিক কম্বাইন হারভেস্টার যেখানে মাত্র ১ ঘণ্টায় ১ একর জমির ধান কেটে, মাড়াই করে বস্তাবন্দী করতে পারে, সেখানে সনাতন পদ্ধতিতে কয়েক দিন সময় লাগত।</p>
      <p>স্মার্ট ট্র্যাক্টর ও হারভেস্টার ডিজাইন, ভূগর্ভস্থ পানির অপচয়রোধে প্রিসিশন ড্রিপ ইরিগেশন, সোলার পাম্প সিস্টেম, পরিবেশবান্ধব সাইলো ও গ্রিনহাউস স্ট্রাকচার তৈরির জন্যই মেকানিক্যাল ও সিভিল ইঞ্জিনিয়ারিংয়ের মেলবন্ধনে এগ্রিকালচারাল ইঞ্জিনিয়ারিং পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/me-ruet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>মেকানিক্যাল ইঞ্জিনিয়ারিং (Mechanical Engineering) - থার্মোডিনামিক্স ও মেশিন ডিজাইন</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Engineering Core Curriculum)</h2>
      <p>বাকৃবির কৃষি প্রকৌশল ও প্রযুক্তি অনুষদে ইনস্টিটিউশন অব ইঞ্জিনিয়ার্স, বাংলাদেশ (IEB) অনুমোদিত পেশাদার সিলেবাস পড়ানো হয়:</p>

      <h3 class="review-h3">ক. ফার্ম পাওয়ার অ্যান্ড মেশিনারি (Farm Power & Machinery)</h3>
      <ul>
        <li><strong>ইন্টারনাল কম্বাশন ইঞ্জিন ও ট্র্যাক্টর পাওয়ার:</strong> ডিজেল ও পেট্রোল ইঞ্জিনের থার্মোডিনামিক্স, ট্রান্সমিশন ও ক্লাচ ডিজাইন।</li>
        <li><strong>মডার্ন ফার্ম মেশিনারি ডিজাইন:</strong> রাইস ট্রান্সপ্লান্টার, সিডার, রোটারি টিলার ও কম্বাইন হারভেস্টারের কাইনেম্যাটিক্স।</li>
        <li><strong>অ্যাগ্রিকালচারাল রোবোটিক্স ও ড্রোন টেকনোলজি:</strong> মাল্টিস্পেকট্রাল ক্যামেরা দিয়ে আগাছা ও সার ছিটানোর অটোনোমাস ড্রোন।</li>
      </ul>

      <h3 class="review-h3">খ. ইরিগেশন অ্যান্ড ওয়াটার ম্যানেজমেন্ট (Irrigation & Water Management)</h3>
      <ul>
        <li><strong>হাইড্রোলজি ও ফ্লুইড মেকানিক্স:</strong> ওপেন চ্যানেল ফ্লো, গ্রাউন্ডওয়াটার একুইফার মডেলিং ও পাম্প হাইড্রোলিক্স।</li>
        <li><strong>স্মার্ট ইরিগেশন সিস্টেমস:</strong> আইওটি সেন্সর নিয়ন্ত্রিত অটোমেটিক ড্রিপ এবং স্প্রিংকলার সেচ প্রযুক্তি।</li>
        <li><strong>ড্রেনেজ ও ওয়াটারশেড ম্যানেজমেন্ট:</strong> জলাবদ্ধতা নিষ্কাশন ও লবণাক্ততা প্রতিরোধ ব্যারেজ।</li>
      </ul>

      <h3 class="review-h3">গ. ফার্ম স্ট্রাকচার্স অ্যান্ড এনভায়রনমেন্টাল ইঞ্জিনিয়ারিং</h3>
      <ul>
        <li><strong>অটোমেটেড গ্রিনহাউস ও ভার্টিক্যাল ফার্মিং স্ট্রাকচার:</strong> জলবায়ু নিয়ন্ত্রিত আধুনিক পলিহাউস ডিজাইন।</li>
        <li><strong>কোল্ড স্টোরেজ ও গ্রেইন সাইলো ডিজাইন:</strong> খাদ্যশস্য দীর্ঘমেয়াদে তাজা রাখার এয়ার-কন্ডিশনিং ও ইনসুলেশন।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও কৃষি যান্ত্রিকীকরণ (The Future)</h2>
      <p>বাংলাদেশ সরকারের ৩,০০০ কোটি টাকার মেগা কৃষি যান্ত্রিকীকরণ প্রকল্পের মূল চালিকাশক্তি এই ইঞ্জিনিয়াররা:</p>
      <ul>
        <li><strong>এআই-পাওয়ার্ড প্রিসিশন এগ্রিকালচার:</strong> কৃত্রিম বুদ্ধিমত্তা ও জিপিএস গাইডেন্স দিয়ে সেন্টিমিটার নিখুঁততায় স্বয়ংক্রিয় ট্র্যাক্টর পরিচালনা।</li>
        <li><strong>সৌরশক্তিচালিত গ্রিন এনার্জি ফার্মিং:</strong> জাতীয় গ্রিডের ওপর চাপ কমিয়ে ১০০% সোলার সেচ নেটওয়ার্ক।</li>
        <li><strong>ইন্টারন্যাশনাল অ্যাগ্রো-মেকাট্রনিক্স:</strong> হাইড্রো ও এরোপনিক্স স্পেস ফার্মিং সিস্টেম ডিজাইন।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/civil-engineering-kuet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>সিভিল ইঞ্জিনিয়ারিং (Civil Engineering) - স্ট্রাকচারাল ডিজাইন ও ওয়াটার রিসোর্স</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও কর্মক্ষেত্র (Career for Agri. Engineers)</h2>
      <p>আইইবি (IEB) স্বীকৃত পেশাদার ইঞ্জিনিয়ার হিসেবে এই গ্র্যাজুয়েটদের সরকারি ও প্রাইভেট খাতে বিশাল চাহিদা রয়েছে:</p>

      <h3 class="review-h3">ক. সরকারি ও স্বায়ত্তশাসিত প্রকৌশল খাত</h3>
      <ul>
        <li><strong>বিএডিসি (BADC):</strong> সহকারী প্রকৌশলী (সেচ/মেশিনারি - ১ম শ্রেণি গেজেটেড কর্মকর্তা)।</li>
        <li><strong>বিএমডিএ (BMDA) ও পানি উন্নয়ন বোর্ড (BWDB):</strong> বরেন্দ্র বহুমুখী উন্নয়ন কর্তৃপক্ষ ও পানি উন্নয়ন বোর্ডের সহকারী প্রকৌশলী।</li>
        <li><strong>গবেষণা প্রতিষ্ঠান:</strong> বারি (BARI), ব্রি (BRRI), বিনা (BINA)-এর ফার্ম মেশিনারি ও সেচ বিভাগের সায়েন্টিফিক অফিসার।</li>
      </ul>

      <h3 class="review-h3">খ. করপোরেট অটোমোবাইল ও এগ্রো-মেশিনারি ইন্ডাস্ট্রি</h3>
      <ul>
        <li><strong>শীর্ষস্থানীয় ব্র্যান্ড:</strong> এসিআই মোটরস (সোনালিকা ট্র্যাক্টর ও ইয়ানমার), মেটাল প্রাইভেট লিঃ (ট্যাফে), আলিম ইন্ডাস্ট্রিজ, মাহিন্দ্রা বাংলাদেশ, এনার্জিপ্যাক।</li>
        <li><strong>মাল্টিন্যাশনাল ক্যারিয়ার:</strong> John Deere, Kubota, CLAAS ও New Holland-এর আন্তর্জাতিক মেকানিক্যাল ইঞ্জিনিয়ারিং রোল।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও গ্লোবাল স্কলারশিপ</h3>
      <p>Iowa State University, Texas A&M, University of Nebraska-Lincoln (USA), University of Hohenheim (Germany) এবং Kyoto University (Japan)-এ শতভাগ ফুল ফান্ডেড স্কলারশিপ নিয়ে পিএইচডি সম্পন্ন করার সুযোগ রয়েছে।</p>
    `
  },
  {
    slug: "food-engineering-bau",
    title: "বিএসসি ইন ফুড ইঞ্জিনিয়ারিং (Food Engineering - BAU) ক্যারিয়ার ও বিষয় পরিচিতি",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে বিএসসি ইন ফুড ইঞ্জিনিয়ারিং (BAU)</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">খাদ্যদ্রব্যের শিল্প-কারখানাভিত্তিক উৎপাদন, প্রসেসিং, পাস্তুরাইজেশন, স্বয়ংক্রিয় প্যাকেজিং, মান নিয়ন্ত্রণ এবং আন্তর্জাতিক ফুড সেফটি কমপ্লায়েন্স নিশ্চিতকরণের শীর্ষ পেশাদার প্রযুক্তিগত ডিগ্রি হলো বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ের ফুড ইঞ্জিনিয়ারিং (Food Engg.)।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why Food Engineering is Taught)</h2>
      <p>কৃষক যে আম, টমেটো বা দুধ উৎপাদন করে, উপযুক্ত প্রক্রিয়াজাতকরণ ও প্রিজারভেশন না থাকলে তা কয়েক দিনের মধ্যে পচে নষ্ট হয়ে যায়। ফুড ইঞ্জিনিয়াররা থার্মাল ও নন-থার্মাল প্রসেসিং, ফ্রিজ ড্রায়িং, কোল্ড-চেইন স্টোরেজ এবং ন্যানো-প্যাকেজিংয়ের মাধ্যমে খাদ্যপণ্যের পুষ্টিমান অক্ষুণ্ন রেখে মেয়াদ মাস ও বছর পর্যন্ত বৃদ্ধি করেন।</p>
      <p>একটি আধুনিক জুস কারখানা, কনফেকশনারি, দুগ্ধ প্রক্রিয়াকরণ প্ল্যান্ট কিংবা বেকারি কীভাবে সম্পূর্ণ স্বয়ংক্রিয়ভাবে স্বাস্থ্যসম্মত ও জীবাণুমুক্ত খাদ্য উৎপাদন করবে—তা নিশ্চিত করার জন্যই কেমিক্যাল, মেকানিক্যাল ও বায়োটেকনোলজির সমন্বয়ে ফুড ইঞ্জিনিয়ারিং পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/ch-e-buet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>কেমিক্যাল ইঞ্জিনিয়ারিং (Chemical Engineering) - ইউনিট অপারেশন ও রিঅ্যাকশন কাইনেটিক্স</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Industrial Food Engineering Curriculum)</h2>
      <p>বাকৃবির ফুড ইঞ্জিনিয়ারিং বিভাগের পাঠ্যক্রমে থার্মোডিনামিক্স, খাদ্য রসায়ন ও কোয়ালিটি কন্ট্রোল অন্তর্ভুক্ত:</p>

      <h3 class="review-h3">ক. ইউনিট অপারেশনস ও ফুড প্রসেস ইঞ্জিনিয়ারিং</h3>
      <ul>
        <li><strong>হিট ও মাস ট্রান্সফার:</strong> পাস্তুরাইজেশন, ইভাপোরেশন, স্প্রে ড্রায়িং ও ফ্রিজিং মেকানিক্স।</li>
        <li><strong>ফ্লুইড ফ্লো ও রিওলজি (Rheology):</strong> চকোলেট, জ্যাম, দুধ ও সিরোমের সান্দ্রতা ও পাইপলাইন ফ্লো ডিজাইন।</li>
        <li><strong>প্ল্যান্ট ডিজাইন ও ইকোনমিক্স:</strong> ফুড প্রসেসিং কারখানার লে-আউট এবং মেশিনারি ইন্সটলেশন।</li>
      </ul>

      <h3 class="review-h3">খ. ফুড কেমিস্ট্রি, মাইক্রোবায়োলজি ও সেফটি</h3>
      <ul>
        <li><strong>ফুড এনজাইমোলজি ও লিপিড কেমিস্ট্রি:</strong> রান্নার তেল রিফাইনিং, অ্যান্টি-অক্সিডেন্ট ও কালার স্ট্যাবিলিটি।</li>
        <li><strong>ফুড প্যাথোজেন ও থার্মাল ডেথ টাইম (D, z, F values):</strong> সালমোনেলা, ই-কোলাই ও বোটুলিনাম জীবাণু ধ্বংসের গাণিতিক মডেলিং।</li>
      </ul>

      <h3 class="review-h3">গ. অ্যাডভান্সড প্যাকেজিং ও কোয়ালিটি অ্যাসিওরেন্স</h3>
      <ul>
        <li><strong>মডিফাইড অ্যাটমোস্ফিয়ার প্যাকেজিং (MAP):</strong> ব্যাগের ভেতর নাইট্রোজেন ফ্লাশিং করে চিপস ও স্ন্যাকসের মচমচে ভাব বজায় রাখা।</li>
        <li><strong>আন্তর্জাতিক কমপ্লায়েন্স:</strong> HACCP, ISO 22000, BRCGS, US FDA ও হালাল ফুড সার্টিফিকেশন স্ট্যান্ডার্ড।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও গ্লোবাল কনজিউমার গুডস (The Future)</h2>
      <p>বিশ্বব্যাপী প্রসেসড ও রেডি-টু-ইট ফুড ইন্ডাস্ট্রি এখন ট্রিলিয়ন ডলারের বৈশ্বিক শিল্প:</p>
      <ul>
        <li><strong>ফাংশনাল ও নিউট্রাসিউটিক্যাল ফুডস:</strong> ডায়াবেটিক-ফ্রেন্ডলি সুগার-ফ্রি বেভারেজ, ওমেগা-৩ সমৃদ্ধ এনার্জি বার তৈরি।</li>
        <li><strong>স্মার্ট বায়োডিগ্রেডেবল প্যাকেজিং:</strong> সামুদ্রিক শৈবাল ও স্টার্চ দিয়ে পরিবেশবান্ধব ভোজ্য ফুড র‍্যাপার তৈরি।</li>
        <li><strong>নন-থার্মাল প্রসেসিং (HPP ও পালসড ইলেকট্রিক ফিল্ড):</strong> তাপ ছাড়াই অতি-উচ্চ চাপে জুসের স্বাদ ও ভিটামিন অক্ষুণ্ন রেখে জীবাণুমুক্তকরণ।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/food-safety-management-bau" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>বিএসসি ইন ফুড সেফটি ম্যানেজমেন্ট (Food Safety - BAU) - টক্সিকোলজি ও ফুড ল</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও শীর্ষ নিয়োগকারী প্রতিষ্ঠান (Career for Food Engineers)</h2>
      <p>ফুড ইঞ্জিনিয়ারদের চাকরির বাজার দেশের শীর্ষ এফএমসিজি (FMCG) ও বহুজাতিক কোম্পানিতে অত্যন্ত জমজমাট:</p>

      <h3 class="review-h3">ক. শীর্ষ বহুজাতিক ও জাতীয় করপোরেট প্রতিষ্ঠান</h3>
      <ul>
        <li><strong>মাল্টিন্যাশনাল জায়ান্টস:</strong> Nestlé Bangladesh, Unilever, PepsiCo (Transcom Beverages), Coca-Cola (Abdul Monem Ltd), Marico।</li>
        <li><strong>শীর্ষ জাতীয় খাদ্য শিল্প:</strong> প্রাণ-আরএফএল গ্রুপ (PRAN), আকিজ ফুড অ্যান্ড বেভারেজ (AFBL), স্কয়ার ফুড অ্যান্ড বেভারেজ, মেঘনা গ্রুপ অব ইন্ডাস্ট্রিজ (MGI), সিটি গ্রুপ (তীর), বসুন্ধরা ফুড, অলিম্পিক ইন্ডাস্ট্রিজ।</li>
        <li><strong>পদবীসমূহ:</strong> প্রোডাকশন ইঞ্জিনিয়ার, আরঅ্যান্ডডি (R&D) অফিসার, কিউএ/কিউসি (Quality Assurance) ম্যানেজার, সাপ্লাই চেইন হেড।</li>
      </ul>

      <h3 class="review-h3">খ. সরকারি ও আন্তর্জাতিক সংস্থা</h3>
      <ul>
        <li><strong>বাংলাদেশ স্ট্যান্ডার্ডস অ্যান্ড টেস্টিং ইনস্টিটিউশন (BSTI):</strong> সহকারী পরিচালক (পরীক্ষণ/মান)।</li>
        <li><strong>বাংলাদেশ নিরাপদ খাদ্য কর্তৃপক্ষ (BFSA) ও খাদ্য অধিদপ্তর (DG Food):</strong> ফুড সেফটি অফিসার ও রসায়নবিদ।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও স্কলারশিপ</h3>
      <p>University of Reading (UK), Wageningen University (Netherlands), Cornell University (USA), KU Leuven (Belgium)-এ ফুড প্রসেস ইঞ্জিনিয়ারিং ও টেকনোলজিতে ফুল ফান্ডিং পাওয়া যায়।</p>
    `
  },
  {
    slug: "bioinformatics-engineering-bau",
    title: "বিএসসি ইন বায়োইনফরমেটিক্স ইঞ্জিনিয়ারিং (Bioinformatics Engineering - BAU) বিষয় পরিচিতি",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে বিএসসি ইন বায়োইনফরমেটিক্স ইঞ্জিনিয়ারিং (BAU)</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">কম্পিউটার সায়েন্স (CSE), কৃত্রিম বুদ্ধিমত্তা (AI/ML), অ্যালগরিদম এবং মলিকুলার জিনোমিক্সের মেলবন্ধনে প্রতিষ্ঠিত বাংলাদেশের প্রথম ও একমাত্র স্নাতক পর্যায়ের ইঞ্জিনিয়ারিং ডিগ্রি হলো বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ের বায়োইনফরমেটিক্স ইঞ্জিনিয়ারিং (Bioinformatics Engg.)।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why Bioinformatics Engineering is Taught)</h2>
      <p>ডিএনএ সিকোয়েন্সিং প্রযুক্তির বিপ্লবের ফলে মানবদেহ, শস্য, পশুপাখি ও অণুজীবের ট্রিলিয়ন ট্রিলিয়ন টেরাবাইট বায়োলজিক্যাল বিগ ডেটা তৈরি হচ্ছে। সাধারণ বায়োলজিস্টদের পক্ষে কম্পিউটেশনাল অ্যালগরিদম ও ক্লাউড ক্লাস্টার ছাড়া এই সুবিশাল ডেটা বিশ্লেষণ করা অসম্ভব।</p>
      <p>একটি ক্যানসার ড্রাগ বা অ্যান্টিভাইরাল ভ্যাকসিন ডিজাইন করতে পাইথন প্রোগ্রামিং, পাইটরচ (PyTorch) ডিপ লার্নিং, প্রোটিন ফোল্ডিং এবং আলফাফোল্ড (AlphaFold) মডেলিং কীভাবে প্রয়োগ করতে হয়—তা শেখানোর জন্যই কম্পিউটার প্রকৌশল ও লাইফ সায়েন্সের সমন্বয়ে বাকৃবিতে এই ডিগ্রি চালু করা হয়েছে।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/cse-buet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE - BUET) - অ্যালগরিদম ও এআই আর্কিটেকচার</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Core CS & Computational Biology Syllabus)</h2>
      <p>এই ডিগ্রিতে সিএসই (CSE)-এর পূর্ণাঙ্গ কোর ফাউন্ডেশনের পাশাপাশি অ্যাডভান্সড বায়োলজিক্যাল ডেটা সায়েন্স পড়ানো হয়:</p>

      <h3 class="review-h3">ক. কোর কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE Track)</h3>
      <ul>
        <li><strong>প্রোগ্রামিং ও ডেটা স্ট্রাকচার্স:</strong> Python, C++, R, Java, Data Structures & Algorithm Design।</li>
        <li><strong>মেশিন লার্নিং ও ডিপ লার্নিং:</strong> বায়োলজিক্যাল প্যাটার্ন রিকগনিশন, ক্লাস্টারিং ও নিউরাল নেটওয়ার্কস।</li>
        <li><strong>ডাটাবেস ম্যানেজমেন্ট ও ক্লাউড কম্পিউটিং:</strong> SQL, NoSQL, Linux Shell Scripting, Docker ও AWS বায়ো-পাইপলাইন।</li>
      </ul>

      <h3 class="review-h3">খ. জিনোমিক ডেটা সায়েন্স ও সিকোয়েন্স অ্যানালাইসিস</h3>
      <ul>
        <li><strong>নেক্সট জেনারেশন সিকোয়েন্সিং (NGS):</strong> ইলুমিনা ও প্যাকবায়ো ডিএনএ রিড অ্যাসেম্বলি, ভ্যারিয়েন্ট কলিং।</li>
        <li><strong>স্ট্রাকচারাল বায়োইনফরমেটিক্স ও মলিকুলার ডকিং:</strong> AutoDock, PyMOL ও ড্রাগ-টার্গেট সিমুলেশন।</li>
        <li><strong>জিনোম-ওয়াইড অ্যাসোসিয়েশন স্টাডিজ (GWAS):</strong> ফসলের ফলন ও রোগের সাথে জড়িত জিনের ম্যাপিং।</li>
      </ul>

      <h3 class="review-h3">গ. সিস্টেমস বায়োলজি ও ক্রিসপার গাইড ডিজাইন</h3>
      <ul>
        <li><strong>CRISPR-Cas9 sgRNA অফ-টার্গেট প্রেডিকশন:</strong> এআই টুল দিয়ে নিখুঁত জিন এডিটিং অপটিমাইজেশন।</li>
        <li><strong>মেটাজিনোমিক্স:</strong> মাটির ও পেটের মাইক্রোবায়োমের মেটা-সিকোয়েন্সিং।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও এআই বায়োলজি বিপ্লব (The Future)</h2>
      <p>বিশ্বজুড়ে বায়োইনফরমেটিক্স ইঞ্জিনিয়ারদের চাহিদা আইটি ও বায়োফার্মা খাতে সর্বোচ্চ চূড়ায়:</p>
      <ul>
        <li><strong>কম্পিউটেশনাল ড্রাগ ডিসকভারি:</strong> ল্যাবে ১০ বছর গবেষণার বদলে সুপারকম্পিউটারে মাত্র কয়েক সপ্তাহে নতুন ক্যানসার ড্রাগ ডিজাইন।</li>
        <li><strong>স্মার্ট এগ্রো-জিনোমিক্স:</strong> এআই মডেল দিয়ে এমন শস্যের জিন নকশা করা যা সমুদ্রের লবণাক্ত পানিতেও মিষ্টি ফল দেবে।</li>
        <li><strong>প্রেসিশন অনকোলজি:</strong> রোগীর ব্যক্তিগত ডিএনএ মিউটেশন অনুযায়ী কাস্টমাইজড থেরাপি নির্ধারণ।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/genetic-engineering-and-biotechnology-geb-cu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>জেনেটিক ইঞ্জিনিয়ারিং (GEB) - আণবিক জীববিজ্ঞান ও রিকম্বিন্যান্ট ডিএনএ</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক নিয়োগের দিগন্ত (Career for Bioinformatics Engineers)</h2>
      <p>এই ডিগ্রির স্নাতকরা সফটওয়্যার ইঞ্জিনিয়ারিং এবং বায়োমেডিকেল ডেটা সায়েন্স উভয় খাতেই কাজ করতে সক্ষম:</p>

      <h3 class="review-h3">ক. গ্লোবাল সফটওয়্যার ও বায়োটেক জায়ান্টস</h3>
      <ul>
        <li><strong>গ্লোবাল ড্রাগ ও সিকোয়েন্সিং জায়ান্ট:</strong> Illumina, Thermo Fisher Scientific, Genentech, Pfizer, AstraZeneca, Novartis।</li>
        <li><strong>টেক জায়ান্টস ইন হেলথকেয়ার:</strong> Google DeepMind (AlphaFold টিম), Microsoft Genomics, AWS BioTech Analytics।</li>
      </ul>

      <h3 class="review-h3">খ. দেশীয় করপোরেট ও আইটি খাত</h3>
      <ul>
        <li><strong>সফটওয়্যার ইন্ডাস্ট্রি:</strong> পাইথন/এআই ডেভেলপার, ডেটা সায়েন্টিস্ট ও ক্লাউড ইঞ্জিনিয়ার হিসেবে দেশীয় শীর্ষ টেক কোম্পানিতে আকর্ষণীয় সুযোগ।</li>
        <li><strong>ডায়াগনস্টিক ও ফার্মা জিনোমিক্স:</strong> চাইল্ড হেলথ রিসার্চ ফাউন্ডেশন (CHRF - ড. সেঁজুতি সাহার ল্যাব), স্কয়ার ও ইনসেপ্টা ফার্মাসিউটিক্যালস।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও ফুল-ফান্ডেড পিএইচডি স্কলারশিপ</h3>
      <p>যুক্তরাষ্ট্রের Harvard University, MIT, Stanford, Johns Hopkins; যুক্তরাজ্যের Wellcome Sanger Institute ও Oxford; এবং জার্মানির EMBL (European Molecular Biology Laboratory)-এ শতভাগ ফুল স্কলারশিপ পাওয়া যায়।</p>
    `
  },
  {
    slug: "fisheries-faculty-bau",
    title: "বিএসসি ইন ফিশারিজ (Fisheries - BAU) বিষয় পরিচিতি ও উচ্চশিক্ষা সম্ভাবনা",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে বিএসসি ইন ফিশারিজ (Faculty of Fisheries - BAU)</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">বিশ্বে স্বাদুপানির মাছ উৎপাদনে বাংলাদেশের গৌরবময় ৩য় স্থান অর্জনের নেপথ্য রূপকার হলো বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ের মৎস্যবিজ্ঞান অনুষদ (Faculty of Fisheries)। আধুনিক অ্যাকুয়াকালচার, প্রণোদিত প্রজনন (Induced Breeding), সামুদ্রিক ব্লু-ইকোনমি ও মাছের জিনগত উন্নয়নের প্রধান কেন্দ্র এটি।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why Fisheries is Taught at BAU)</h2>
      <p>বাঙালির পাতে ৬০% প্রাণিজ আমিষের জোগান দেয় মাছ। এছাড়া হিমায়িত চিংড়ি ও মাছ রপ্তানি করে বাংলাদেশ প্রতি বছর হাজার হাজার কোটি টাকার বৈদেশিক মুদ্রা অর্জন করে। কিন্তু নদীদূষণ, জলবায়ু পরিবর্তন ও অতি-আহরণের ফলে দেশি বিলুপ্তপ্রায় মাছ হারিয়ে যেতে বসেছিল।</p>
      <p>হরমোন প্রয়োগে বিলুপ্তপ্রায় দেশি মাছের (পাবদা, গুলশা, ট্যাংরা, মেনি, আইড়) কৃত্রিম প্রজনন ও জিন পুল সংরক্ষণ, বায়োফ্লক ও আরএএস (RAS) প্রযুক্তিতে কম জায়গায় শতগুণ মাছ চাষ এবং বঙ্গোপসাগরের গভীর সমুদ্রের সামুদ্রিক মৎস্য সম্পদ ব্যবস্থাপনার বিশেষজ্ঞ বিজ্ঞানী তৈরিতেই ফিশারিজ অনুষদ কাজ করে।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/marine-biotechnology-and-blue-economy" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>মেরিন বায়োটেকনোলজি (Marine Bioeconomy) - গভীর সমুদ্রের ওশান জিনোমিক্স</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (5 Specialized Fisheries Departments)</h2>
      <p>বাকৃবির ফিশারিজ অনুষদে ৫টি অত্যন্ত সমৃদ্ধ বিভাগের মাধ্যমে আধুনিক পাঠদান সম্পন্ন হয়:</p>

      <h3 class="review-h3">ক. অ্যাকুয়াকালচার (Department of Aquaculture)</h3>
      <ul>
        <li><strong>ইনটেনসিভ ও সুপার-ইনটেনসিভ ফিশ কালচার:</strong> খাঁচায় মাছ চাষ, বায়োফ্লক প্রযুক্তি ও অ্যাকুয়াপনিক্স।</li>
        <li><strong>হ্যাচারি ম্যানেজমেন্ট ও ইনডিউসড ব্রিডিং:</strong> পিটুইটারি গ্ল্যান্ড (PG) হরমোন ও ওভাপ্রিম দিয়ে আধুনিক প্রজনন কৌশল।</li>
        <li><strong>ফিশ নিউট্রিশন ও ফিড মিলস:</strong> ফ্লোটিং ফিশ ফিড তৈরি ও প্রোবায়োটিক প্রয়োগ।</li>
      </ul>

      <h3 class="review-h3">খ. ফিশারিজ বায়োলজি অ্যান্ড জেনেটিক্স</h3>
      <ul>
        <li><strong>সিলেক্টিভ ব্রিডিং ও ট্রান্সজেনেসিস:</strong> দ্রুত বর্ধনশীল সুপার-তেলাপিয়া ও কার্প মাছের জেনেটিক স্টক তৈরি।</li>
        <li><strong>সাইটোজেনেটিক্স ও ক্রায়োপ্রিজারভেশন:</strong> মাছের বীর্য ও ডিম্বাণু তরল নাইট্রোজেনে মাইনাস ১৯৬ ডিগ্রি সেলসিয়াসে সংরক্ষণ।</li>
      </ul>

      <h3 class="review-h3">গ. ফিশারিজ ম্যানেজমেন্ট, টেকনোলজি ও মেরিন সায়েন্স</h3>
      <ul>
        <li><strong>ওয়াটার কোয়ালিটি প্যারামিটারস:</strong> দ্রবীভূত অক্সিজেন (DO), অ্যামোনিয়া বিষাক্ততা ও পিএইচ নিয়ন্ত্রণ।</li>
        <li><strong>পোস্ট-হারভেস্ট ফিশ প্রসেসিং:</strong> কোল্ড স্টোরেজ, ক্যানিং ও স্মোকিং টেকনিক।</li>
        <li><strong>মেরিন ফিশারিজ ও ব্লু ইকোনমি:</strong> স্যাটেলাইট রিমোট সেন্সিং দিয়ে বঙ্গোপসাগরে মাছের ঝাঁক শনাক্তকরণ।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও গ্লোবাল অ্যাকুয়াকালচার বিপ্লব (The Future)</h2>
      <p>বিশ্ব খাদ্য সংস্থায় অ্যাকুয়াকালচারকে ভবিষ্যতের সবচেয়ে সম্ভাবনাময় প্রোটিন উৎস হিসেবে ঘোষণা করা হয়েছে:</p>
      <ul>
        <li><strong>স্মার্ট আইওটি ফিশ ফার্মিং:</strong> স্মার্ট সেন্সর দিয়ে অটোমেটিক ফিডার পরিচালনা ও মাছের বৃদ্ধি ট্র্যাক করা।</li>
        <li><strong>রপ্তানিমুখী ভেনামি চিংড়ি (Vannamei Shrimp):</strong> বৈজ্ঞানিক কালচারের মাধ্যমে বিশ্ববাজারে বাংলাদেশের হিস্যা বৃদ্ধি।</li>
        <li><strong>সামুদ্রিক সি-উইড ও পার্ল কালচার:</strong> সেন্টমার্টিন ও উপকূলীয় অঞ্চলে মূল্যবান সামুদ্রিক শৈবাল ও মুক্তা চাষ।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/zoology" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>প্রাণিবিদ্যা (Zoology) - জলজ প্রাণিবিজ্ঞান ও ইকোসিস্টেম ডাইনামিক্স</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও জব সেক্টর (Career Opportunities for Fisheries Graduates)</h2>
      <p>ফিশারিজ গ্র্যাজুয়েটদের সরকারি, গবেষণা ও করপোরেট খাতে অভাবনীয় চাহিদা রয়েছে:</p>

      <h3 class="review-h3">ক. বিসিএস ও সরকারি চাকরি</h3>
      <ul>
        <li><strong>বিসিএস মৎস্য ক্যাডার:</strong> উপজেলা মৎস্য কর্মকর্তা (Upazila Fisheries Officer - UFO) হিসেবে ১ম শ্রেণির গেজেটেড কর্মকর্তা।</li>
        <li><strong>গবেষণা প্রতিষ্ঠান:</strong> বাংলাদেশ মৎস্য গবেষণা ইনস্টিটিউট (BFRI - ময়মনসিংহ), বাংলাদেশ মৎস্য উন্নয়ন কর্পোরেশন (BFDC)-এ বৈজ্ঞানিক কর্মকর্তা।</li>
      </ul>

      <h3 class="review-h3">খ. করপোরেট অ্যাকুয়া-ফিড ও হ্যাচারি ইন্ডাস্ট্রি</h3>
      <ul>
        <li><strong>শীর্ষস্থানীয় প্রতিষ্ঠান:</strong> মেগা ফিড, আফতাব একুয়া, কোয়ালিটি ফিড, প্যারাগন একুয়া, ফ্রেশ ফিড ও সিপি একুয়াচার।</li>
        <li><strong>রপ্তানিমুখী সি-ফুড প্রসেসিং প্ল্যান্ট:</strong> চট্টগ্রাম ও খুলনার শত শত মাছ ও চিংড়ি প্রক্রিয়াকরণ কারখানায় কোয়ালিটি ম্যানেজার।</li>
      </ul>

      <h3 class="review-h3">গ. আন্তর্জাতিক সংস্থা ও উচ্চশিক্ষা</h3>
      <ul>
        <li><strong>ওয়ার্ল্ডফিশ (WorldFish) ও এফএও (FAO):</strong> আন্তর্জাতিক অ্যাকুয়াকালচার স্পেশালিস্ট হিসেবে সম্মানজনক পদবী।</li>
        <li><strong>বিশ্বসেরা স্কলারশিপ:</strong> University of Stirling (UK - বিশ্বের ১ নম্বর অ্যাকুয়াকালচার ইনস্টিটিউট), Auburn University (USA), NTNU (Norway)-এ সম্পূর্ণ ফুল-ফান্ডেড স্কলারশিপ।</li>
      </ul>
    `
  },
  {
    slug: "food-safety-management-bau",
    title: "বিএসসি ইন ফুড সেফটি ম্যানেজমেন্ট (Food Safety Management - BAU) বিষয় পরিচিতি ও ক্যারিয়ার",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে ফুড সেফটি ম্যানেজমেন্ট (BAU)</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">খাদ্যে ভেজাল প্রতিরোধ, বিষাক্ত কেমিক্যাল ও কীটনাশকের অবশিষ্টাংশ শনাক্তকরণ, আন্তর্জাতিক খাদ্য আইন (Codex Alimentarius) প্রয়োগ এবং ফার্ম থেকে টেবিল পর্যন্ত নিরাপদ খাদ্য সরবরাহ নিশ্চিত করার আধুনিকতম বিশেষায়িত ডিগ্রি হলো বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ের ফুড সেফটি ম্যানেজমেন্ট (Food Safety Management)।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why Food Safety is Taught at BAU)</h2>
      <p>খাদ্য বিষক্রিয়া ও রাসায়নিক ভেজালের কারণে ক্যানসার, লিভার সিরোসিস ও কিডনি ফেইলিওরের মতো প্রাণঘাতী রোগের হার বিশ্বজুড়ে আশঙ্কাজনক হারে বাড়ছে। কৃষিজমিতে অতিরিক্ত বালাইনাশক, দুধে ফরমালিন, মাংসে অ্যান্টিবায়োটিক রেসিডিউ এবং রেস্তোরাঁর অস্বাস্থ্যকর খাবারের হুমকি মোকাবিলায় বিজ্ঞানসম্মত ফুড সেফটি অডিটর ও রেগুলেটর প্রয়োজন।</p>
      <p>টক্সিকোলজি, আধুনিক ল্যাব স্পেকট্রোমেট্রি (GC-MS, HPLC), মাইক্রোবায়োলজিক্যাল রিস্ক অ্যাসেসমেন্ট এবং জাতীয় ও আন্তর্জাতিক ফুড আইনের মেলবন্ধনে বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ের <em>Interdisciplinary Institute for Food Security (IIFS)</em> এই ডিগ্রিটি পরিচালনা করে।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/food-engineering-bau" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>বিএসসি ইন ফুড ইঞ্জিনিয়ারিং (Food Engineering - BAU) - শিল্পোৎপাদন ও প্রসেসিং</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Comprehensive Food Safety Syllabus)</h2>
      <p>খাদ্য নিরাপত্তা নিশ্চিতকরণে আধুনিক রসায়ন, আইন ও নিরীক্ষার সমন্বিত সিলেবাস:</p>

      <h3 class="review-h3">ক. ফুড টক্সিকোলজি ও কেমিক্যাল কন্টামিন্যান্টস</h3>
      <ul>
        <li><strong>হেভি মেটাল ও কীটনাশক বিশ্লেষণ:</strong> সীসা, ক্যাডমিয়াম, আর্সেনিক ও অরগানোফসফেটের অতি-ক্ষুদ্র পিপিবি (ppb) লেভেল ডিটেকশন।</li>
        <li><strong>মাইকোটক্সিন ও আফলাটক্সিন:</strong> বাদাম, ভুট্টা ও দুধে ছত্রাকজনিত ক্যানসার সৃষ্টিকারী বিষাক্ত উপাদান মূল্যায়ন।</li>
      </ul>

      <h3 class="review-h3">খ. মাইক্রোবায়োলজিক্যাল রিস্ক ও এলার্জেন ম্যানেজমেন্ট</h3>
      <ul>
        <li><strong>খাদ্যবাহিত প্যাথোজেন শনাক্তকরণ:</strong> লিস্টিরিয়া, ক্যাম্ফাইলোব্যাক্টার ও নোরোভাইরাসের র‍্যাপিড পিসিআর কিট টেস্ট।</li>
        <li><strong>ফুড অ্যালার্জেন ও ক্রস-কন্টামিনেশন প্রতিরোধ:</strong> গ্লুটেন, পিনাট ও সয়া অ্যালার্জেন কনট্রোল।</li>
      </ul>

      <h3 class="review-h3">গ. ফুড ল, সাপ্লাই চেইন ট্রেসিবিলিটি ও অডিট</h3>
      <ul>
        <li><strong>আন্তর্জাতিক ফুড রেগুলেশন:</strong> Codex Alimentarius, US FDA FSMA (Food Safety Modernization Act), EU Food Standards।</li>
        <li><strong>সাপ্লাই চেইন ব্লকচেইন ট্রেসিবিলিটি:</strong> খামার থেকে খুচরা বিক্রয় কেন্দ্র পর্যন্ত প্রতিটি লটের বারকোড ট্র্যাকিং।</li>
        <li><strong>ফুড অডিটিং প্র্যাকটিস:</strong> HACCP, ISO 22000, FSSC 22000 ও BRCGS আন্তর্জাতিক অডিট প্রটোকল।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও বৈশ্বিক মান নিয়ন্ত্রণ (The Future)</h2>
      <p>আন্তর্জাতিক খাদ্য রপ্তানি ও স্বাস্থ্যকর জীবনযাপনে খাদ্য নিরাপত্তা বিশেষজ্ঞদের ভূমিকা শীর্ষস্থানে:</p>
      <ul>
        <li><strong>স্মার্ট বায়োসেন্সর ও ন্যানোটেক ডিটেকশন:</strong> স্মার্টফোনের ক্যামেরায় বিশেষ ন্যানো-সেন্সর স্ট্রিপ ধরে মাত্র ৫ সেকেন্ডে খাদ্যের বিষাক্ততা নির্ণয়।</li>
        <li><strong>রপ্তানি বাধা অপসারণ:</strong> ইউরোপ ও আমেরিকায় বাংলাদেশের প্রক্রিয়াজাত খাদ্য এবং মাছ-মাংসের আন্তর্জাতিক ছাড়পত্র নিশ্চিতকরণ।</li>
        <li><strong>ন্যাশনাল অর্গানিক ফুড সার্টিফিকেশন:</strong> শতভাগ নিরাপদ অর্গানিক খামারের বৈজ্ঞানিক স্বীকৃতি প্রদান।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/law-du" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>আইন (Law - DU) - আন্তর্জাতিক বাণিজ্য আইন ও রেগুলেটরি ফ্রেমওয়ার্ক</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও কর্মক্ষেত্র (Career Opportunities in Food Safety)</h2>
      <p>ফুড সেফটি গ্র্যাজুয়েটদের জন্য সরকারি রেগুলেটরি বডি এবং আন্তর্জাতিক অডিট এজেন্সিতে বিশেষ সুযোগ রয়েছে:</p>

      <h3 class="review-h3">ক. সরকারি রেগুলেটরি সংস্থা</h3>
      <ul>
        <li><strong>বাংলাদেশ নিরাপদ খাদ্য কর্তৃপক্ষ (BFSA):</strong> ফুড সেফটি অফিসার (FSO - ৯ম গ্রেড) ও বৈজ্ঞানিক মূল্যায়ন কর্মকর্তা।</li>
        <li><strong>জাতীয় ভোক্তা অধিকার সংরক্ষণ অধিদপ্তর:</strong> বাজার মনিটরিং ও কোয়ালিটি কমপ্লায়েন্স বিশেষজ্ঞ।</li>
        <li><strong>বিএসটিআই (BSTI) ও রোগতত্ত্ব বিভাগ (IEDCR):</strong> ল্যাব অ্যানালিস্ট ও নিরাপদ খাদ্য পরিদর্শক।</li>
      </ul>

      <h3 class="review-h3">খ. আন্তর্জাতিক অডিট এজেন্সি ও করপোরেট খাদ্য শিল্প</h3>
      <ul>
        <li><strong>গ্লোবাল ইন্সপেকশন ও সার্টিফিকেশন বডি:</strong> SGS, Intertek, Bureau Veritas, TÜV SÜD-এ আন্তর্জাতিক ফুড অডিটর (উচ্চ বেতন স্কেল)।</li>
        <li><strong>শীর্ষস্থানীয় এফএমসিজি কোম্পানি:</strong> নেসলে, ইউনিলিভার, প্রাণ-আরএফএল, আকিজ ও স্কয়ার-এ ফুড সেফটি অ্যান্ড রেগুলেটরি অ্যাফেয়ার্স ম্যানেজার।</li>
      </ul>

      <h3 class="review-h3">গ. আন্তর্জাতিক উচ্চশিক্ষা</h3>
      <p>Michigan State University (Institute of Food Laws & Regulations), Wageningen University (Netherlands), University of Ghent (Belgium)-এ ফুড সেফটি অ্যান্ড হাইজিন সায়েন্সে ফুল স্কলারশিপ পাওয়া যায়।</p>
    `
  }
];

// Write individual JSON reviews
bauReviews.forEach((item, index) => {
  const filePath = path.join(REVIEWS_DIR, `${item.slug}.json`);
  const jsonContent = {
    id: 152 + index,
    slug: item.slug,
    title: item.title,
    content: item.content.trim()
  };
  fs.writeFileSync(filePath, JSON.stringify(jsonContent, null, 2), 'utf-8');
  console.log(`Created review: ${item.slug}.json`);
});

// Also upgrade agriculture-department-bau.json
const updatedAgriBAU = {
  id: 54,
  slug: "agriculture-department-bau",
  title: "বিএসসি ইন এগ্রিকালচার (B.Sc. Agriculture - BAU) পূর্ণাঙ্গ বিষয় পরিচিতি ও ক্যারিয়ার",
  content: `
    <div class="review-callout-card">
      <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে বিএসসি ইন এগ্রিকালচার (Faculty of Agriculture - BAU)</h3>
      <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">বাংলাদেশের ১৮ কোটি মানুষের খাদ্য নিরাপত্তা ও কৃষিব্যবস্থার মেরুদণ্ড হলো বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ের কৃষি অনুষদ (Faculty of Agriculture)। ১৬টি সমৃদ্ধ ডিপার্টমেন্টের সমন্বয়ে গঠিত এই অনুষদ উচ্চফলনশীল শস্য উদ্ভাবন, ক্লাইমেট-স্মার্ট ফার্মিং ও উদ্ভিদ জিনোমিক্সের জাতীয় পথিকৃৎ।</p>
    </div>

    <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why Agriculture is Taught at BAU)</h2>
    <p>জলবায়ু পরিবর্তনের কারণে সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি, দক্ষিণাঞ্চলে লবণাক্ততা বৃদ্ধি, খরা এবং নদীভাঙনে আবাদি জমি ক্রমাগত সংকুচিত হচ্ছে। কিন্তু প্রতি বছর খাদ্য চাহিদা বাড়ছে। কম জমিতে প্রতিকূল পরিবেশেও দ্বিগুণ ফলন দেয় এমন শস্যের জাত উদ্ভাবন করা এবং পরিবেশবান্ধব জৈব চাষাবাদ পদ্ধতি সম্প্রসারণ করাই কৃষিশিক্ষার মূল উদ্দেশ্য।</p>
    <p>ধান, গম, ভুট্টা, পাট, শাকসবজি ও ফলের জিনগত উন্নয়ন (Plant Breeding), মাটির উর্বরতা রক্ষা (Soil Science), পোকামাকড় ও রোগবালাই দমন (Entomology & Pathology) এবং কৃষকদের হাতে আধুনিক উদ্ভাবন পৌঁছে দেওয়ার (Extension Education) জন্যই বাংলাদেশ কৃষি বিশ্ববিদ্যালয়ে বিশ্বমানের বিএসসি এজি (অনার্স) কোর্স পড়ানো হয়।</p>

    <div class="review-internal-link-box">
      <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
      <a href="/subject-review/agricultural-engineering-bau" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
        <span>বিএসসি ইন এগ্রিকালচারাল ইঞ্জিনিয়ারিং (Agri. Engg. - BAU) - স্মার্ট ফার্মিং ও কম্বাইন হারভেস্টার</span>
        <span>→</span>
      </a>
    </div>

    <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Curriculum Breakdown across 16 Departments)</h2>
    <p>বাকৃবির কৃষি অনুষদে ৪ বছর মেয়াদী (৮ সেমিস্টার) পাঠ্যক্রম ১৬টি বিশেষায়িত বিভাগের মাধ্যমে পরিচালিত হয়:</p>

    <h3 class="review-h3">ক. ক্রপ প্রোডাকশন ও জেনেটিক ব্রিডিং</h3>
    <ul>
      <li><strong>জেনেটিক্স অ্যান্ড প্ল্যান্ট ব্রিডিং:</strong> ক্রিসপার-ক্যাস৯ (CRISPR-Cas9) জিন এডিটিং, হাইব্রিডাইজেশন ও বায়োফর্টিফাইড গোল্ডেন রাইস ডেভেলপমেন্ট।</li>
      <li><strong>এগ্রোনমি (Agronomy):</strong> আধুনিক ফসল উৎপাদন, বীজ প্রযুক্তি, শস্য আবর্তন ও পরিবেশবান্ধব আগাছানাশক ব্যবহার।</li>
      <li><strong>হর্টিকালচার (Horticulture):</strong> টিস্যু কালচার পদ্ধতিতে ভাইরাস-মুক্ত চারা উৎপাদন, হাইড্রোপনিক্স ও ড্রাগন-স্ট্রবেরি জাতীয় উচ্চমূল্যের ফল চাষ।</li>
    </ul>

    <h3 class="review-h3">খ. প্ল্যান্ট প্রটেকশন ও মৃত্তিকা স্বাস্থ্য</h3>
    <ul>
      <li><strong>প্ল্যান্ট প্যাথলজি (Plant Pathology):</strong> ছত্রাক, ব্যাকটেরিয়া ও ভাইরাসজনিত ফসলের রোগ নির্ণয় ও বায়োলজিক্যাল কন্ট্রোল।</li>
      <li><strong>এনটমোলজি (Entomology):</strong> ক্ষতিকর পোকামাকড় নিধনে সেক্স-ফেরোমোন ফাঁদ ও ইন্টিগ্রেটেড পেস্ট ম্যানেজমেন্ট (IPM)।</li>
      <li><strong>মৃত্তিকা বিজ্ঞান (Soil Science):</strong> মাটির মাইক্রোবায়োম, জৈব সার প্রস্তুত ও ন্যানো-ফার্টিলাইজার টেকনোলজি।</li>
    </ul>

    <h3 class="review-h3">গ. এগ্রোফরেস্ট্রি, বায়োটেকনোলজি ও এগ্রিকালচারাল কেমিস্ট্রি</h3>
    <ul>
      <li><strong>বায়োটেকনোলজি ও ক্রপ বায়োকেমিস্ট্রি:</strong> স্ট্রেস টলারেন্স জিনোম এডিটিং ও উদ্ভিদের সেকেন্ডারি মেটাবোলাইটস।</li>
      <li><strong>এগ্রিকালচারাল এক্সটেনশন এডুকেশন:</strong> তথ্য ও যোগাযোগ প্রযুক্তি (ICT in Agri) ব্যবহার করে মাঠ পর্যায়ের কৃষকদের কাছে দ্রুত প্রযুক্তি হস্তান্তর।</li>
    </ul>

    <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও ক্লাইমেট-রেজিলিয়েন্ট এগ্রিকালচার (The Future)</h2>
    <p>কৃষিবিজ্ঞান আগামী দিনগুলোতে বিশ্বের সবচেয়ে গুরুত্বপূর্ণ কৌশলগত বিজ্ঞান হিসেবে বিবেচিত হচ্ছে:</p>
    <ul>
      <li><strong>ক্লাইমেট-স্মার্ট শস্য উদ্ভাবন:</strong> জলমগ্নতা সহনশীল ডুবো-ধান, লবণাক্ততা সহনশীল শস্য ও খরা সহনশীল ভুট্টার উদ্ভাবন।</li>
      <li><strong>প্রেসিশন স্পেস-ফার্মিং ও আইওটি ড্রোনস:</strong> স্যাটেলাইট চিত্র ও ড্রোন দিয়ে মাটির আর্দ্রতা পরীক্ষা করে স্বয়ংক্রিয় সার প্রয়োগ।</li>
      <li><strong>ভার্টিক্যাল আরবান ফার্মিং:</strong> বহুতল ভবনে এলইডি লাইটের নিচে কৃত্রিম পরিবেশে সারা বছর বিষমুক্ত শাকসবজি উৎপাদন।</li>
    </ul>

    <div class="review-internal-link-box">
      <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
      <a href="/subject-review/botany-du" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
        <span>উদ্ভিদবিজ্ঞান (Botany - DU) - ট্যাক্সোনমি, প্ল্যান্ট ফিজিওলজি ও সাইটোলজি</span>
        <span>→</span>
      </a>
    </div>

    <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও কর্মক্ষেত্র (Career Opportunities for Agriculture Graduates)</h2>
    <p>বিএসসি এগ্রিকালচার গ্র্যাজুয়েটদের সরকারি, গবেষণা ও আন্তর্জাতিক ক্ষেত্রে রয়েছে মর্যাদাপূর্ণ ক্যারিয়ার:</p>

    <h3 class="review-h3">ক. বিসিএস কৃষি ক্যাডার ও সরকারি প্রতিষ্ঠান</h3>
    <ul>
      <li><strong>বিসিএস কৃষি ক্যাডার:</strong> কৃষি সম্প্রসারণ কর্মকর্তা (Agriculture Extension Officer - AEO, ৯ম গ্রেড গেজেটেড)।</li>
      <li><strong>জাতীয় কৃষি গবেষণা ইনস্টিটিউট:</strong> বারি (BARI), ব্রি (BRRI), বিনা (BINA), বিজেআরআই (BJRI), বিএডিসি (BADC)-এ সাইন্টিফিক অফিসার।</li>
    </ul>

    <h3 class="review-h3">খ. করপোরেট এগ্রোবিজনেস ও বহুজাতিক কোম্পানি</h3>
    <ul>
      <li><strong>শীর্ষস্থানীয় প্রতিষ্ঠান:</strong> এসিআই এগ্রোবিজনেস, স্কয়ার এগ্রোভেট, সিনজেনটা বাংলাদেশ, ব্র্যাক সিড, অটো ক্রপ কেয়ার, বায়ার ক্রপ সায়েন্স।</li>
      <li><strong>পদবী:</strong> প্রোডাক্ট ম্যানেজার, টেরিটরি অফিসার, সিড টেকনোলজিস্ট ও আরঅ্যান্ডডি এক্সিকিউটিভ।</li>
    </ul>

    <h3 class="review-h3">গ. ব্যাংকিং ও আন্তর্জাতিক সংস্থা</h3>
    <ul>
      <li><strong>বিশেষায়িত ব্যাংকিং:</strong> বাংলাদেশ ব্যাংক, বাংলাদেশ কৃষি ব্যাংক (BKB), রাজশাহী কৃষি উন্নয়ন ব্যাংক (RAKUB) ও বাণিজ্যিক ব্যাংকের রুরাল ক্রেডিট অফিসার।</li>
      <li><strong>আন্তর্জাতিক সংস্থা ও উচ্চশিক্ষা:</strong> FAO, IRRI, CIMMYT, World Bank; এবং Wageningen University (নেদারল্যান্ডস), Cornell University (USA), University of Tokyo-তে শতভাগ ফুল-ফান্ডেড স্কলারশিপ।</li>
    </ul>
  `
};

fs.writeFileSync(path.join(REVIEWS_DIR, 'agriculture-department-bau.json'), JSON.stringify(updatedAgriBAU, null, 2), 'utf-8');
console.log('Updated agriculture-department-bau.json successfully');
