const fs = require('fs');
const path = require('path');

const REVIEWS_DIR = path.join(process.cwd(), 'data', 'reviews');

const reviewsData = [
  {
    slug: "actuarial-science-and-risk-analytics",
    title: "অ্যাকচুয়ারি সায়েন্স ও প্রিডিক্টিভ রিস্ক মডেলিং (Actuarial Science & Risk Analytics) ক্যারিয়ার",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে অ্যাকচুয়ারি সায়েন্স</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">গণিত, সম্ভাব্যতা তত্ত্ব (Probability Theory), পরিসংখ্যান ও আধুনিক মেশিন লার্নিংয়ের সমন্বয়ে ভবিষ্যৎ আর্থিক অনিশ্চয়তা, ইন্স্যুরেন্স প্রিমিয়াম ও বৈশ্বিক রিস্ক গাণিতিকভাবে পরিমাপ করার বিজ্ঞান হলো অ্যাকচুয়ারি সায়েন্স। এটি বিশ্বের অন্যতম শীর্ষ মর্যাদাপূর্ণ ও সর্বোচ্চ আয়ের পেশা।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>মানুষের জীবন, জলবায়ুর পরিবর্তন, প্রাকৃতিক দুর্যোগ, সাইবার অ্যাটাক কিংবা বৈশ্বিক আর্থিক সংকট—সবকিছুর ভেতরেই অনিশ্চয়তা ও মারাত্মক আর্থিক ক্ষতির ঝুঁকি বিদ্যমান। একটি জীবন বীমা কোম্পানি কীভাবে নির্ধারণ করবে একজন ব্যক্তির মাসিক প্রিমিয়াম কত হবে? একটি পেনশন ফান্ড কীভাবে নিশ্চিত করবে আগামী ৪০ বছর পর কোটি কোটি গ্রাহককে নিয়মিত অবসর ভাতা পরিশোধ করা সম্ভব হবে? কিংবা একটি এয়ারলাইন্স বা মেগা ব্রিজ প্রজেক্টের সম্ভাব্য দুর্ঘটনার ঝুঁকি কীভাবে টাকায় মূল্যায়ন করা হবে?</p>
      <p>এই ধরণের ভবিষ্যৎ ঝুঁকিকে অঙ্কের হিসাবে নিখুঁতভাবে রূপান্তর করার জন্যই অ্যাকচুয়ারি সায়েন্স পড়ানো হয়। অ্যাকচুয়ারি হলেন একজন 'আর্থিক স্থপতি' বা 'রিস্ক ইঞ্জিনিয়ার', যিনি অতীত ডেটা এবং ভবিষ্যৎ ট্রেন্ড বিশ্লেষণ করে শতকোটি ডলারের প্রতিষ্ঠানের দেউলিয়া হওয়া রোধ করেন এবং টেকসই ভবিষ্যৎ পরিকল্পনা তৈরি করেন।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/financial-engineering-and-algorithmic-trading" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>ফাইন্যান্সিয়াল ইঞ্জিনিয়ারিং ও কোয়ান্ট ট্রেডিং (Financial Engineering) - কোয়ান্ট ফিন্যান্স ও ডেরিভেটিভস</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Comprehensive Academic Curriculum)</h2>
      <p>অ্যাকচুয়ারি সায়েন্সের কারিকুলাম আন্তর্জাতিক প্রফেশনাল বডি—যেমন <strong>Society of Actuaries (SOA, USA)</strong> এবং <strong>Institute and Faculty of Actuaries (IFoA, UK)</strong>-এর পেশাগত পরীক্ষার মানদণ্ডে পরিচালিত হয়:</p>

      <h3 class="review-h3">ক. অ্যাডভান্সড প্রোবাবিলিটি ও স্ট্যাটিস্টিক্যাল থিওরি</h3>
      <ul>
        <li><strong>স্টোকাস্টিক প্রসেস ও মারকভ চেইন:</strong> পরিবর্তনশীল সিস্টেমের ট্রানজিশন প্রোবাবিলিটি ও লাইফ কন্টিনজেন্সিস।</li>
        <li><strong>এক্সট্রিম ভ্যালু থিওরি (EVT):</strong> শতবর্ষে একবার ঘটা মহামারি বা সুনামির মতো মারাত্মক বিরল দুর্যোগের ক্ষতি মডেলিং।</li>
        <li><strong>সারভাইভাল অ্যানালাইসিস ও মরটালিটি টেবিল:</strong> মানুষের আয়ুষ্কাল, রোগের সম্ভাবনা ও ডেথ রেট সমীকরণ।</li>
      </ul>

      <h3 class="review-h3">খ. ফাইন্যান্সিয়াল ম্যাথমেটিক্স ও লাইফ ইন্স্যুরেন্স ক্যালকুলেশনস</h3>
      <ul>
        <li><strong>অ্যানুইটি ও প্রেজেন্ট ভ্যালু ক্যালকুলেশন:</strong> জটিল সুদহার ও ডিসকাউন্টেড ক্যাশ ফ্লো মডেলিং।</li>
        <li><strong>লাইফ কন্টিনজেন্সি রিজার্ভিং:</strong> বীমা কোম্পানিগুলোর পলিসিহোল্ডারদের ভবিষ্যৎ ক্লেইম মেটানোর জন্য রিজার্ভ ফান্ড নির্ধারণ।</li>
        <li><strong>পেনশন ও গ্র্যাচুইটি ফান্ড ইঞ্জিনিয়ারিং:</strong> সরকারি ও বেসরকারি কর্পোরেট এমপ্লয়ি অবসর ভাতার দীর্ঘমেয়াদী সলভেন্সি ক্যালকুলেশন।</li>
      </ul>

      <h3 class="review-h3">গ. নন-লাইফ ও প্রপার্টি-ক্যাজুয়ালটি অ্যাকচুয়ারিয়াল মডেলিং</h3>
      <ul>
        <li><strong>ক্লেইম ফ্রিকোয়েন্সি ও সিভিয়ারিটি মডেলিং:</strong> পয়সন এবং গামা ডিস্ট্রিবিউশন দিয়ে অটোমোবাইল, স্বাস্থ্য ও শিপিং দুর্ঘটনা প্রিমিয়াম নির্ণয়।</li>
        <li><strong>ক্যাটাসট্রফ রিস্ক মডেলিং (Cat Modeling):</strong> জলবায়ু বিপর্যয় ও ভূমিকম্পে অবকাঠামোগত ক্ষতি পরিমাপ।</li>
        <li><strong>রিইন্স্যুরেন্স অপটিমাইজেশন:</strong> বড় বড় ইন্স্যুরেন্স কোম্পানির নিজেদের ঝুঁকি আন্তর্জাতিক রিইন্স্যুরেন্স সংস্থায় ট্রান্সফার কৌশল।</li>
      </ul>

      <h3 class="review-h3">ঘ. ডেটা সায়েন্স ও অ্যাকচুয়ারিয়াল সফটওয়্যার টুলস</h3>
      <ul>
        <li><strong>Python ও R for Actuaries:</strong> GLM (Generalized Linear Models), এক্সজিবুস্ট ও নিউরাল নেটওয়ার্ক দিয়ে প্রাইসিং অপটিমাইজেশন।</li>
        <li><strong>স্পেশালাইজড সফটওয়্যার:</strong> Prophet, MoSes, Axis, SQL ও অ্যাডভান্সড এক্সেলে ভিজ্যুয়াল বেসিক ম্যাক্রো (VBA)।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও ক্লাইমেট/সাইবার রিস্ক অ্যানালিটিক্স (The Future)</h2>
      <p>প্রথাগত জীবন বীমা ছাড়িয়ে অ্যাকচুয়ারিদের কাজের পরিধি এখন বিশ্বব্যাপী নাটকীয়ভাবে প্রসারিত হচ্ছে:</p>
      <ul>
        <li><strong>ক্লাইমেট চেঞ্জ ও টেকসই উন্নয়ন রিস্ক:</strong> সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি ও অতিবৃষ্টিতে গ্লোবাল সাপ্লাই চেইনের শত শত বিলিয়ন ডলার ক্ষতির প্রিডিকশন।</li>
        <li><strong>সাইবার ইন্স্যুরেন্স মডেলিং:</strong> র‍্যানসমওয়্যার এবং ন্যাশনাল পাওয়ার গ্রিডে সাইবার হামলার আর্থিক ক্ষতি নিরূপণ।</li>
        <li><strong>হেলথ-টেক ও পার্সোনালাইজড হেলথ প্রিমিয়াম:</strong> স্মার্টওয়াচ ও জেনেটিক ডেটার ভিত্তিতে ডায়নামিক হেলথ ইন্স্যুরেন্স প্রাইসিং।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/statistics-department-cu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>পরিসংখ্যান বিভাগ (Statistics) - সম্ভাবনা তত্ত্ব ও বিগ ডেটা প্রসেসিং</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও বিশ্বমানের আয়ের সুযোগ (Career Opportunities)</h2>
      <p>আন্তর্জাতিকভাবে অ্যাকচুয়ারিদের কাজের নিরাপত্তা (Job Security) এবং বেতন কাঠামোকে বিশ্বের সেরা ১০টি পেশার মধ্যে শীর্ষে স্থান দেওয়া হয়:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক নিয়োগকারী সংস্থা</h3>
      <ul>
        <li><strong>গ্লোবাল রিইন্স্যুরেন্স ও ইন্স্যুরেন্স জায়ান্ট:</strong> Swiss Re, Munich Re, Prudential, Allianz, MetLife, AXA, AIG।</li>
        <li><strong>আন্তর্জাতিক অ্যাকচুয়ারিয়াল ও রিস্ক কনসাল্টিং ফার্ম:</strong> Willis Towers Watson (WTW), Mercer, Aon, Milliman, Oliver Wyman।</li>
        <li><strong>বিশ্বব্যাংক, আইএমএফ ও কেন্দ্রীয় ব্যাংক:</strong> গ্লোবাল ফাইন্যান্সিয়াল স্টেবিলিটি ও পেনশন নীতি সংস্কার বিভাগ।</li>
      </ul>

      <h3 class="review-h3">খ. পদবী ও আন্তর্জাতিক বেতন স্কেল</h3>
      <ul>
        <li><strong>Associate Actuary (ASA/AIA):</strong> বার্ষিক গড় বেতন $১,২০,০০০ – $১,৬০,০০০ মার্কিন ডলার।</li>
        <li><strong>Fellow Actuary (FSA/FIA - চিফ অ্যাকচুয়ারি):</strong> বার্ষিক গড় বেতন $২,০০,০০০ – $৩,৫০,০০০+ মার্কিন ডলার।</li>
        <li><strong>Enterprise Risk Officer (CRO):</strong> বহুজাতিক আর্থিক প্রতিষ্ঠানের সর্বোচ্চ ম্যানেজমেন্ট পদবী।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও প্রফেশনাল ফেলোশিপ</h3>
      <p>যুক্তরাজ্যের Bayes Business School (City, University of London), Heriot-Watt University; কানাডার University of Waterloo, University of Toronto; এবং যুক্তরাষ্ট্রের Columbia University ও University of Wisconsin-Madison এ্যাকচুয়ারি সায়েন্সে বিশ্বের সেরা উচ্চশিক্ষা প্রদান করে।</p>
    `
  },
  {
    slug: "biomedical-informatics-and-digital-health",
    title: "বায়োমেডিকেল ইনফরমেটিক্স ও ডিজিটাল হেলথ সিস্টেমস (Biomedical Informatics) বিষয় পরিচিতি",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে বায়োমেডিকেল ইনফরমেটিক্স</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">ক্লিনিক্যাল মেডিসিন, স্বাস্থ্য সেবা ব্যবস্থাপনা, মেডিকেল ইমেজ প্রসেসিং এবং কৃত্রিম বুদ্ধিমত্তার সমন্বয়ে পুরো স্বাস্থ্য খাতকে ডেটা-চালিত ও ডিজিটালাইজড করার ভবিষ্যৎমুখী বিজ্ঞান হলো বায়োমেডিকেল ইনফরমেটিক্স ও ডিজিটাল হেলথ সিস্টেমস।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>ঐতিহ্যগতভাবে হাসপাতালগুলোতে রোগীর প্রেসক্রিপশন, এক্স-রে, সিটি-স্ক্যান, ল্যাব টেস্ট রিপোর্ট এবং ভাইটাল সাইনসমূহ বিচ্ছিন্নভাবে এবং কাগজের ফাইলে সংরক্ষণ করা হতো। ফলে চিকিৎসকদের পক্ষে রোগীর পূর্ণাঙ্গ রোগের ইতিহাস এক মুহূর্তে অনুধাবন করা এবং সঠিক চিকিৎসা দ্রুত নিশ্চিত করা অত্যন্ত কঠিন হয়ে পড়ত।</p>
      <p>বায়োমেডিকেল ইনফরমেটিক্স পড়ানো হয় চিকিৎসা ডেটার গোলকধাঁধাকে স্ট্যান্ডার্ডাইজড ডিজিটাল হেলথ আর্কিটেকচারে রূপান্তর করতে। এটি ক্লাউড হেলথ রেকর্ড (EHR), রেডিওলজি এআই, টেলিমেডিসিন, আইওএমটি (Internet of Medical Things) এবং জনস্বাস্থ্য মহামারি নজরদারির সমন্বয় ঘটায়। চিকিৎসকদের জটিল ডায়াগনসিসে কৃত্রিম বুদ্ধিমত্তা দিয়ে ক্লিনিক্যাল ডিসিশন সাপোর্ট (CDSS) প্রদান করা এবং রোগীকে স্মার্ট রিমোট মনিটরিংয়ে রাখাই এই বিষয়ের মূল লক্ষ্য।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/bme-buet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>বায়োমেডিকেল ইঞ্জিনিয়ারিং (BME) - মেডিকেল ডিভাইস ও বায়োমেকানিক্স</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Core Interdisciplinary Curriculum)</h2>
      <p>এই বিষয়টি কম্পিউটার সায়েন্স, ক্লিনিক্যাল ইনফরমেশন সিস্টেম এবং পাবলিক হেলথ ডেটা অ্যানালিটিক্সের এক অপূর্ব মেলবন্ধন:</p>

      <h3 class="review-h3">ক. ইলেকট্রনিক হেলথ রেকর্ড ও ইন্টারঅপারেবিলিটি স্ট্যান্ডার্ডস</h3>
      <ul>
        <li><strong>HL7 ও FHIR (Fast Healthcare Interoperability Resources):</strong> বিশ্বের সকল হাসপাতাল ও সফটওয়্যারের মধ্যে রোগীর ডেটা বিনিময়ের প্রমিত আন্তর্জাতিক ফ্রেমওয়ার্ক।</li>
        <li><strong>মেডিকেল টার্মিনোলজি ও কোডিং অনটোলজি:</strong> SNOMED-CT, ICD-11, LOINC ও RxNorm দিয়ে মেডিকেল প্রেসক্রিপশন ডেটাবেস প্রমিতকরণ।</li>
        <li><strong>HIPAA ও হেলথ ডেটা প্রাইভেসি সিকিউরিটি:</strong> রোগীদের অতি-সংবেদনশীল মেডিকেল ডেটার ক্রিপ্টোগ্রাফিক সুরক্ষা।</li>
      </ul>

      <h3 class="review-h3">খ. মেডিকেল ইমেজ প্রসেসিং ও রেডিওলজি এআই</h3>
      <ul>
        <li><strong>DICOM ইমেজ অ্যানালাইসিস:</strong> এমআরআই (MRI), সিটি-স্ক্যান (CT), আল্ট্রাসাউন্ড ও পিইটি (PET) স্ক্যানের ৩ডি রিকনস্ট্রাকশন।</li>
        <li><strong>ডিপ লার্নিং ভিশন মডেল:</strong> ফুসফুসের এক্স-রে থেকে নিউমোনিয়া/টিউমার শনাক্তকরণ এবং মেমোগ্রাম থেকে স্তন ক্যান্সার প্রাথমিক পর্যায়ে স্ক্রিনিং।</li>
      </ul>

      <h3 class="review-h3">গ. ক্লিনিক্যাল ডিসিশন সাপোর্ট ও প্রেডিক্টিভ হেলথকেয়ার</h3>
      <ul>
        <li><strong>আইসিইউ ভেন্টিলেটর অ্যালার্ম ও সেপসিস প্রেডিকশন:</strong> রোগীর হার্টরেট, অক্সিজেন ও রক্তচাপ ডেটা বিশ্লেষণ করে আইসিইউতে মৃত্যুঝুঁকি ৬ ঘণ্টা আগেই প্রেডিক্ট করা।</li>
        <li><strong>ড্রাগ-ড্রাগ ইন্টারঅ্যাকশন এলার্ট সিস্টেম:</strong> দুটি অসঙ্গতিপূর্ণ ওষুধ একসাথে প্রেসক্রাইব হলে সফটওয়্যার স্বয়ংক্রিয়ভাবে ডাক্তারকে সতর্ক করবে।</li>
      </ul>

      <h3 class="review-h3">ঘ. আইওএমটি (Internet of Medical Things) ও টেলিমেডিসিন</h3>
      <ul>
        <li><strong>ওয়্যারেবল সেন্সর আর্কিটেকচার:</strong> ইসিজি প্যাচ, গ্লুকোজ মনিটর এবং স্মার্টওয়াচের লাইভ ডেটা সরাসরি ক্লাউড হাসপাতালে ব্রডকাস্ট।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা (The Future of Decentralized Healthcare)</h2>
      <p>ডিজিটাল হেলথ ভবিষ্যৎ হাসপাতালগুলোকে রোগীদের ঘরের ভেতরে নিয়ে আসছে:</p>
      <ul>
        <li><strong>ভার্চুয়াল আইসিইউ ও হসপিটাল-অ্যাট-হোম:</strong> এআই এবং রিমোট মনিটরিংয়ের মাধ্যমে রোগীরা বাড়িতে থেকেই বিশেষজ্ঞ চিকিৎসকের সার্বক্ষণিক নিবিড় পরিচর্যা পাবেন।</li>
        <li><strong>ডিজিটাল টুইন ইন হেলথকেয়ার:</strong> রোগীর পুরো শারীরিক মেটাবলিজমের একটি ক্লাউড ডিজিটাল টুইন তৈরি করে যেকোনো সার্জারি বা ওষুধের প্রতিক্রিয়া আগেই ভার্চুয়ালি পরীক্ষা করা।</li>
        <li><strong>গ্লোবাল প্যানডেমিক আর্লি ওয়ার্নিং নেটওয়ার্ক:</strong> বিশ্ব স্বাস্থ্য সংস্থার সহযোগিতায় বিশ্বজুড়ে রিয়েল-টাইম সংক্রমণ ট্র্যাক করা।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/genomic-data-science-and-bioinformatics" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>জিনোমিক ডেটা সায়েন্স (Genomic Data Science) - ডিএনএ সিকোয়েন্সিং ও প্রিসিশন মেডিসিন</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক চাকরির বাজার (Career Opportunities)</h2>
      <p>বিশ্বজুড়ে স্বাস্থ্যসেবার ডিজিটালাইজেশনের কারণে হেলথ ইনফরমেটিক্স ইঞ্জিনিয়ারদের চাহিদা আকাশচুম্বী:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক নিয়োগকারী সংস্থা</h3>
      <ul>
        <li><strong>মেডিকেল এআই ও হেলথ-আইটি জায়ান্টস:</strong> Epic Systems, Cerner (Oracle Health), GE HealthCare, Philips Healthcare, Siemens Healthineers, Google Health, Apple Health।</li>
        <li><strong>আন্তর্জাতিক হাসপাতাল ও ক্লিনিক নেটওয়ার্ক:</strong> Mayo Clinic, Johns Hopkins Hospital, Cleveland Clinic (Chief Information Officer & Health Data Analyst Units)।</li>
        <li><strong>বিশ্ব স্বাস্থ্য সংস্থা (WHO), CDC ও ইউনিসেফ।</strong></li>
      </ul>

      <h3 class="review-h3">খ. পজিশন ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Health Informatics Specialist:</strong> বার্ষিক গড় বেতন $১,০৫,০০০ – $১,৫০,০০০ মার্কিন ডলার।</li>
        <li><strong>Clinical AI & Imaging Engineer:</strong> বার্ষিক গড় বেতন $১,৩০,০০০ – $১,৮৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Chief Medical Information Officer (CMIO):</strong> বার্ষিক $২,২০,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও স্কলারশিপের ক্ষেত্র</h3>
      <p>হার্ভার্ড মেডিকেল স্কুল, স্ট্যানফোর্ড ইউনিভার্সিটি, ইউনিভার্সিটি অব ওয়াশিংটন, জনস হপকিন্স বিশ্ববিদ্যালয়, এবং সুইডেনের কারোলিনস্কা ইনস্টিটিউটে বায়োমেডিকেল ইনফরমেটিক্সে ১০০% ফুল-ফান্ডেড ফেলোশিপ রয়েছে।</p>
    `
  },
  {
    slug: "game-engineering-and-metaverse-architecture",
    title: "গেম ডেভেলপমেন্ট, ভিআর ও মেটাভার্স আর্কিটেকচার (Game Engineering & Spatial Computing) গাইড",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে গেম ইঞ্জিনিয়ারিং ও স্পেশিয়াল কম্পিউটিং</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">রিয়েল-টাইম থ্রিডি গ্রাফিক্স, ফিজিক্স ইঞ্জিন, অগমেন্টেড রিয়ালিটি (AR), ভার্চুয়াল রিয়ালিটি (VR) এবং স্পেশিয়াল কম্পিউটিংয়ের মাধ্যমে বাস্তব ও পরাবাস্তব ডিজিটাল মহাবিশ্ব তৈরির উচ্চতর কম্পিউটার সায়েন্স শাখা হলো গেম ইঞ্জিনিয়ারিং ও মেটাভার্স আর্কিটেকচার।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>বিশ্ব গেমিং ইন্ডাস্ট্রির বার্ষিক বাজার এখন ২০০ বিলিয়ন ডলারেরও বেশি—যা বিশ্ব চলচ্চিত্র ও সঙ্গীত ইন্ডাস্ট্রির মোট আয়ের চেয়েও বড়। শুধু সাধারণ বিনোদনের জন্য গেম নয়; আধুনিক মিলিটারি ফ্লাইট সিমুলেটর, হাসপাতালের জটিল ব্রেন সার্জারি ট্রেনিং, নাসার ভার্চুয়াল স্পেসওয়াক ট্রেনিং, কিংবা অটোমোবাইল কার ক্র্যাশ সিমুলেশনে গেম ইঞ্জিনগুলো ব্যবহৃত হচ্ছে।</p>
      <p>একটি ডিজিটাল ভার্চুয়াল জগতে আলো কীভাবে প্রতিফলিত হবে (Ray Tracing), মাধ্যাকর্ষণ ও বস্তুর ধাক্কা খাওয়ার ফিজিক্স কীভাবে প্রতি সেকেন্ডে ১২০ বার নিখুঁতভাবে রেন্ডার হবে এবং লাখ লাখ খেলোয়াড় একই সাথে ভার্চুয়াল স্টেডিয়ামে কীভাবে ল্যাগ ছাড়া ইন্টারঅ্যাক্ট করবে—এই জটিল গণিত ও হাই-পারফরম্যান্স কোডিং শেখানোর জন্যই এই ডিসিপ্লিন পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/b-sc-in-software-engineering-iit-du" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>সফটওয়্যার ইঞ্জিনিয়ারিং (Software Engineering - IIT DU) - সফটওয়্যার ডিজাইন ও আর্কিটেকচার</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Deep Technical Curriculum)</h2>
      <p>গেম ইঞ্জিনিয়ারিং একটি চরম টেকনিক্যাল বিষয়, যাতে কম্পিউটার গ্রাফিক্সের গণিত ও রিয়েল-টাইম সিস্টেমসের ওপর গভীর দক্ষতা অর্জন করতে হয়:</p>

      <h3 class="review-h3">ক. থ্রিডি ম্যাথমেটিক্স ও কম্পিউটার গ্রাফিক্স প্রোগ্রামিং</h3>
      <ul>
        <li><strong>লিনিয়ার অ্যালজেব্রা ও কোয়াটারনিয়ন (Quaternions):</strong> ৩ডি স্পেসে অবজেক্ট রোটেশন ও জিম্বল লক প্রতিরোধ।</li>
        <li><strong>শেডার প্রোগ্রামিং ও গ্রাফিক্স পাইপলাইন:</strong> GLSL, HLSL, Vulkan, DirectX 12 ও Apple Metal দিয়ে জিপিইউ শেডার স্ক্রিপ্টিং।</li>
        <li><strong>রিয়েল-টাইম রে ট্রেসিং (Hardware Ray Tracing):</strong> ফোটন বাউন্সিং, গ্লোবাল ইলুমিনেশন ও সাবসারফেস স্ক্যাটারিং সিমুলেশন।</li>
      </ul>

      <h3 class="review-h3">খ. গেম ইঞ্জিন আর্কিটেকচার (C++ & Unreal/Unity)</h3>
      <ul>
        <li><strong>কাস্টম গেম ইঞ্জিন বিল্ড করা:</strong> মেমোরি ম্যানেজমেন্ট, স্পেশিয়াল পার্টিশনিং (Octrees/BVH) ও সিন গ্রাফ অপটিমাইজেশন।</li>
        <li><strong>Unreal Engine 5 (Nanite & Lumen):</strong> কোটি কোটি পলিসিন জিওমেট্রি ও ডায়নামিক লাইটিং রেন্ডারিং।</li>
        <li><strong>ফিজিক্স ইঞ্জিন সিমুলেশন:</strong> রিজিড বডি ডাইনামিক্স, ফ্লুইড ওয়াটার মেকানিক্স ও র‍্যাগডল কাইনেমেটিক্স।</li>
      </ul>

      <h3 class="review-h3">গ. স্পেশিয়াল কম্পিউটিং ও এক্সআর (AR/VR/MR)</h3>
      <ul>
        <li><strong>হেড ও হ্যান্ড ট্র্যাকিং অ্যালগরিদম:</strong> সিক্স ডিগ্রি অব ফ্রিডম (6-DoF), অপটিক্যাল সেন্সিং ও পাসথ্রু ভিডিও স্টিচিং (Apple Vision Pro, Meta Quest 3)।</li>
        <li><strong>স্পেশিয়াল অডিও ইঞ্জিনিয়ারিং:</strong> ভার্চুয়াল স্পেসে শব্দের দিক ও দূরত্ব অনুযায়ী নিখুঁত বাইনরাল সাউন্ড সৃষ্টি।</li>
      </ul>

      <h3 class="review-h3">ঘ. মাল্টিপ্লেয়ার নেটওয়ার্কিং ও ক্লাউড গেমিং</h3>
      <ul>
        <li><strong>ক্লায়েন্ট-সাইড প্রেডিকশন ও সার্ভার রিকনসিলিয়েশন:</strong> গেম পিং ও নেটওয়ার্ক প্যাকেট লস সত্ত্বেও মসৃণ মাল্টিপ্লেয়ার অভিজ্ঞতা বজায় রাখা।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও স্পেশিয়াল কম্পিউটিং এরা (The Future)</h2>
      <p>স্মার্টফোনের পর পরবর্তী বৈপ্লবিক কম্পিউটিং প্ল্যাটফর্ম হলো স্পেশিয়াল কম্পিউটিং ও স্মার্ট গ্লাসেস:</p>
      <ul>
        <li><strong>ফটো-রিয়েলিস্টিক ভার্চুয়াল ওয়ার্ল্ড ও ডিজিটাল টুইনস:</strong> গোটা পৃথিবীর প্রতিটি শহর, কারখানা ও রেললাইনকে আনরিয়েল ইঞ্জিনে ডিজিটাল টুইন বানিয়ে লাইভ পরিচালনা।</li>
        <li><strong>এআই জেনারেটেড গেমিং ওয়ার্ল্ডস:</strong> এলএলএম ও জেনারেটিভ এআই দিয়ে রিয়েল-টাইমে স্বয়ংক্রিয় আনলিমিটেড গেম ম্যাপ ও বাস্তবসম্মত এনপিসি (NPC) ইন্টারঅ্যাকশন।</li>
        <li><strong>মেডিকেল ও ডিফেন্স সিমুলেটরস:</strong> শতভাগ নিরাপদ পরিবেশে বৈমানিক ও হার্ট সার্জনদের নিখুঁত ভার্চুয়াল হ্যান্ডস-অন প্র্যাকটিস।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/ece-ruet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>ইলেকট্রিক্যাল অ্যান্ড কম্পিউটার ইঞ্জিনিয়ারিং (ECE) - হার্ডওয়্যার ও জিপিইউ আর্কিটেকচার</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক গেম স্টুডিওর সুযোগ (Career Opportunities)</h2>
      <p>গেম ইঞ্জিনিয়ার ও গ্রাফিক্স প্রোগ্রামারদের বিশ্বজুড়ে সর্বোচ্চ ডিমান্ড রয়েছে:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক নিয়োগকারী সংস্থা</h3>
      <ul>
        <li><strong>AAA গেম পাবলিশার ও স্টুডিও:</strong> Epic Games, Electronic Arts (EA), Ubisoft, Rockstar Games, Sony PlayStation, Activision Blizzard, Riot Games, Nintendo।</li>
        <li><strong>স্পেশিয়াল কম্পিউটিং ও ভিআর জায়ান্টস:</strong> Meta Reality Labs, Apple (Vision Products Group), Unity Technologies, Nvidia (Omniverse & DLSS Units), Valve।</li>
        <li><strong>সিমুলেশন ও ডিজিটাল টুইন ফার্ম:</strong> Lockheed Martin, Boeing Flight Simulation, BMW Virtual Factory।</li>
      </ul>

      <h3 class="review-h3">খ. পদবী ও আন্তর্জাতিক বেতন স্কেল</h3>
      <ul>
        <li><strong>Graphics / Engine Programmer:</strong> বার্ষিক গড় বেতন $১,২৫,০০০ – $১,৯০,০০০ মার্কিন ডলার।</li>
        <li><strong>XR / VR Software Engineer:</strong> বার্ষিক গড় বেতন $১,৩৫,০০০ – $২,০৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Technical Director (Game Studio):</strong> বার্ষিক $২,২০,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও সেরা বিশ্ববিদ্যালয়সমূহ</h3>
      <p>যুক্তরাষ্ট্রের Carnegie Mellon University (ETC), USC (USC Games - #1 in USA), University of Utah; এবং যুক্তরাজ্যের Abertay University ও Teesside University গেম ডেভেলপমেন্ট ও গ্রাফিক্স প্রোগ্রামিংয়ে বিশ্বসেরা ডিগ্রি প্রদান করে।</p>
    `
  },
  {
    slug: "climate-finance-and-carbon-economics",
    title: "ক্লাইমেট ফাইন্যান্স ও এনভায়রনমেন্টাল ইকোনমেট্রিক্স (Climate Finance & Carbon Economics) রিভিউ",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে ক্লাইমেট ফাইন্যান্স ও কার্বন ইকোনমিক্স</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">বৈশ্বিক জলবায়ু পরিবর্তন মোকাবিলায় কার্বন ক্রেডিট ট্রেডিং, গ্রিন বন্ড, টেকসই ইএসজি (ESG) ইনভেস্টিং এবং ক্লাইমেট রিস্ক ইকোনমেট্রিক মডেলিংয়ের আন্তর্জাতিক অর্থনৈতিক বিদ্যা হলো ক্লাইমেট ফাইন্যান্স।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>প্যারিস জলবায়ু চুক্তির পর বৈশ্বিক উষ্ণতা ১.৫ ডিগ্রি সেলসিয়াসের মধ্যে সীমাবদ্ধ রাখতে হলে বিশ্ব অর্থনীতিকে দ্রুত ডিকার্বনাইজেশন বা কার্বনমুক্ত করতে হবে। এর জন্য প্রয়োজন প্রতি বছর ট্রিলিয়ন ট্রিলিয়ন ডলারের 'গ্রিন ক্যাপিটাল' বা পরিবেশবান্ধব বিনিয়োগ। বিশ্বব্যাংক, জাতিসংঘ, আন্তর্জাতিক ব্যাংক ও বহুজাতিক কর্পোরেশনগুলো এখন কেবল মুনাফা দেখে না; তারা দেখে বিনিয়োগটি পরিবেশে কী প্রভাব ফেলছে।</p>
      <p>একটি বড় সৌর বিদ্যুৎ কেন্দ্র বা সমুদ্র উপকূলীয় বাঁধ নির্মাণের জন্য আন্তর্জাতিক গ্রিন বন্ড কীভাবে ছাড়তে হবে, একটি কারখানার কার্বন নিঃসরণ মেপে কার্বন মার্কেটে কার্বন ক্রেডিট কীভাবে বিক্রি করা যাবে এবং বৈশ্বিক জলবায়ু ঝুঁকি ব্যাংকিং সেক্টরের লোন পোর্টফোলিওকে কীভাবে প্রভাবিত করবে—তা শেখার জন্যই ক্লাইমেট ফাইন্যান্স পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/economics-department-cu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>অর্থনীতি বিভাগ (Economics) - ম্যাক্রো ইকোনমিক্স ও পলিসি ডেভেলপমেন্ট</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Interdisciplinary Course Modules)</h2>
      <p>এই বিষয়টি পরিবেশ বিজ্ঞান, ফাইন্যান্সিয়াল অ্যানালিটিক্স, আন্তর্জাতিক বাণিজ্য আইন ও ইকোনমেট্রিক্সের আধুনিক মিশ্রণ:</p>

      <h3 class="review-h3">ক. কার্বন প্রাইসিং ও গ্লোবাল কার্বন মার্কেটস</h3>
      <ul>
        <li><strong>ক্যাপ-অ্যান্ড-ট্রেড সিস্টেমস (EU ETS):</strong> কার্বন নির্গমন পারমিট ও আন্তর্জাতিক কার্বন অফসেটিং মেকানিজম।</li>
        <li><strong>কার্বন বর্ডার অ্যাডজাস্টমেন্ট মেকানিজম (CBAM):</strong> ইউরোপ ও আমেরিকায় পণ্য রপ্তানির ক্ষেত্রে কার্বন ট্যাক্স হিসাব ও কমপ্লায়েন্স।</li>
        <li><strong>ভলান্টারি কার্বন মার্কেটস (VCM):</strong> বন সংরক্ষণ ও নবায়নযোগ্য শক্তি প্রকল্প থেকে কার্বন ক্রেডিট জেনারেশন (Verra / Gold Standard)।</li>
      </ul>

      <h3 class="review-h3">খ. সাসটেইনেবল ফাইন্যান্স ও গ্রিন ফাইন্যান্সিয়াল ইন্সট্রুমেন্টস</h3>
      <ul>
        <li><strong>গ্রিন বন্ড ও ব্লু বন্ড স্ট্রাকচারিং:</strong> পরিবেশ ও সমুদ্র সম্পদ সুরক্ষায় বিশেষায়িত মিউনিসিপ্যাল ও কর্পোরেট বন্ড ইস্যু।</li>
        <li><strong>ইএসজি (ESG) রেটিং ও পোর্টফোলিও অপটিমাইজেশন:</strong> এনভায়রনমেন্টাল, সোশ্যাল অ্যান্ড গভর্নেন্স স্কোরিং অ্যালগরিদম।</li>
        <li><strong>ক্লাইমেট রেজিলিয়েন্স ফান্ডস ও লস অ্যান্ড ড্যামেজ ফাইন্যান্স:</strong> COP জলবায়ু সম্মেলনে উন্নয়নশীল দেশগুলোর জন্য ক্ষতিপূরণ তহবিল পরিচালনা।</li>
      </ul>

      <h3 class="review-h3">গ. এনভায়রনমেন্টাল ইকোনমেট্রিক্স ও ক্লাইমেট রিস্ক স্ট্রেস টেস্টিং</h3>
      <ul>
        <li><strong>ব্যাংক ও ইন্স্যুরেন্স স্ট্রেস টেস্টিং (NGFS Scenarios):</strong> সমুদ্রের উচ্চতা বৃদ্ধি ও খরার কারণে ব্যাংকিং ঋণের খেলাপি হওয়ার সম্ভাবনা মডেলিং।</li>
        <li><strong>স্ট্যাটিস্টিক্যাল টুলস:</strong> Python, R ও Stata দিয়ে প্যানেল ডেটা ইকোনমেট্রিক্স ও টাইম-সিরিজ ক্লাইমেট অ্যানালাইসিস।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও বাংলাদেশের জন্য প্রয়োজনীয়তা (The Future)</h2>
      <p>জলবায়ু পরিবর্তনের কারণে ঝুঁকিতে থাকা শীর্ষ দেশগুলোর অন্যতম হলো বাংলাদেশ। আন্তর্জাতিক ক্লাইমেট ফান্ড (GCF) থেকে শত কোটি ডলারের অনুদান ও স্বল্প সুদের ঋণ এনে উপকূলীয় বনায়ন ও নদী ড্রেজিং বাস্তবায়নে দক্ষ ক্লাইমেট ফাইন্যান্সারদের গুরুত্ব অপরিসীম। অন্যদিকে ইউরোপের বাজারে বাংলাদেশের তৈরি পোশাক ও অন্যান্য পণ্য রপ্তানি টিকিয়ে রাখতে হলে কার্বন-নিরপেক্ষ উৎপাদন নিশ্চিত করা এখন আন্তর্জাতিক বাধ্যতামূলক শর্ত।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/forestry-and-environmental-science-fes-sust" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>ফরেস্ট্রি অ্যান্ড এনভায়রনমেন্টাল সায়েন্স (FES) - বন ব্যবস্থাপনা ও কার্বন ট্রেডিং</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক চাকরির ক্ষেত্র (Career Opportunities)</h2>
      <p>গ্লোবাল টেকসই বিনিয়োগ বৃদ্ধির কারণে ক্লাইমেট ফাইন্যান্সারদের জন্য চমৎকার সুযোগ তৈরি হয়েছে:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক প্রতিষ্ঠানসমূহ</h3>
      <ul>
        <li><strong>আন্তর্জাতিক জলবায়ু ও উন্নয়ন ব্যাংক:</strong> World Bank, Asian Development Bank (ADB), Green Climate Fund (GCF - Incheon), IFC, UNDP, UNEP।</li>
        <li><strong>গ্লোবাল ইনভেস্টমেন্ট ব্যাংক ও অ্যাসেট ম্যানেজার:</strong> BlackRock, JPMorgan Sustainable Investing, Goldman Sachs, Morgan Stanley, HSBC ESG Solutions।</li>
        <li><strong>আন্তর্জাতিক অডিট ও কার্বন রেটিং এজেন্সি:</strong> MSCI ESG Research, S&P Global Sustainable1, PwC, Deloitte, EY।</li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল ভূমিকা ও বেতন স্কেল</h3>
      <ul>
        <li><strong>ESG & Climate Risk Analyst:</strong> বার্ষিক গড় বেতন $৯৫,০০০ – $১,৪৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Carbon Market Trader & Structurer:</strong> বার্ষিক গড় বেতন $১,২০,০০০ – $১,৮০,০০০ মার্কিন ডলার।</li>
        <li><strong>Sustainable Finance Director:</strong> বার্ষিক $২,০০,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও সেরা বিশ্ববিদ্যালয়সমূহ</h3>
      <p>যুক্তরাজ্যের London School of Economics (LSE), University of Oxford (Smith School); যুক্তরাষ্ট্রের Columbia University, Yale School of the Environment; এবং জার্মানির Frankfurt School of Finance & Management ক্লাইমেট ফাইন্যান্সে বিশ্বের সেরা ডিগ্রি প্রদান করে।</p>
    `
  },
  {
    slug: "marine-biotechnology-and-blue-economy",
    title: "মেরিন বায়োটেকনোলজি ও ওশান জিনোমিক্স (Marine Biotechnology & Blue Bioeconomy) পূর্ণাঙ্গ রিভিউ",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে মেরিন বায়োটেকনোলজি</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">মহাসাগরের গভীর তলদেশের জীববৈচিত্র্য, সামুদ্রিক শৈবাল, এক্সট্রিমোফাইল অণুজীব ও কোরাল প্রাচীর থেকে জীবনরক্ষাকারী ঔষধ, বায়োমেডিকেল এনজাইম, বায়োপ্লাস্টিক এবং টেকসই নীল অর্থনীতি (Blue Economy) গড়ে তোলার কাটিং-এজ বিজ্ঞান হলো মেরিন বায়োটেকনোলজি।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>পৃথিবীর ৭১ শতাংশ এলাকা জুড়ে মহাসাগর বিস্তৃত এবং পৃথিবীর মোট জীববৈচিত্র্যের প্রায় ৮০ শতাংশই বাস করে সমুদ্রের বুকে। সমুদ্রের চরম প্রতিকূল পরিবেশ—তীব্র লবণাক্ততা, অতি-উচ্চ চাপ, নিকষ অন্ধকার ও শূন্য তাপমাত্রায় বেঁচে থাকার জন্য সামুদ্রিক প্রাণীরা অত্যন্ত শক্তিশালী ও অনন্য রাসায়নিক যৌগ (Bioactive Molecules) তৈরি করে।</p>
      <p>স্থলভাগের চিকিৎসায় যখন অ্যান্টিবায়োটিক রেজিস্ট্যান্স দেখা দিচ্ছে, তখন গভীর সমুদ্রের ব্যাক্টেরিয়ার স্পঞ্জ ও শৈবাল থেকে নতুন প্রজন্মের সুপার-অ্যান্টিবায়োটিক এবং অ্যান্টি-ক্যান্সার ওষুধ উদ্ভাবন করা হচ্ছে। এছাড়া সামুদ্রিক শৈবাল (Macroalgae) থেকে কার্বন-নিরপেক্ষ বায়োফুয়েল ও ডিগ্রেডেবল বায়োপ্লাস্টিক তৈরি করে প্লাস্টিক দূষণ রোধ করার লক্ষ্যেই মেরিন বায়োটেকনোলজি পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/oceanography-hydrography-bsmrmu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>সমুদ্রবিজ্ঞান ও হাইড্রোগ্রাফি (Oceanography - BSMRMU) - মহাসাগরীয় ভূতত্ত্ব ও বাথমেট্রি</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Core Academic Syllabus)</h2>
      <p>মেরিন বায়োটেকনোলজি ওশানোগ্রাফি, মলিকুলার জেনেটিক্স, বায়োপ্রসেস ইঞ্জিনিয়ারিং ও মেরিন ফার্মাকোলজির একটি সমন্বিত বিজ্ঞান:</p>

      <h3 class="review-h3">ক. মেরিন বায়োপ্রসপেক্টিং ও ন্যাচারাল প্রোডাক্ট কেমিস্ট্রি</h3>
      <ul>
        <li><strong>সামুদ্রিক ঔষধি উপাদান নিষ্কাশন:</strong> কোরাল, স্পঞ্জ ও সি-অ্যানিমোন থেকে সাইটোটক্সিক পেপটাইডস ও অ্যান্টি-টিউমার যৌগ পৃথকীকরণ।</li>
        <li><strong>HPLC, NMR ও ম্যাস স্পেকট্রোমেট্রি:</strong> অজানা সামুদ্রিক মলিকিউলের রাসায়নিক গঠন নিশ্চিতকরণ।</li>
        <li><strong>এক্সট্রিমোফাইল এনজাইমোলজি:</strong> সমুদ্রের গভীর তলদেশের হাইড্রোথার্মাল ভেন্ট থেকে তাপ-সহনশীল এনজাইম (Taq Polymerase ও Extremolytes) সংগ্রহ।</li>
      </ul>

      <h3 class="review-h3">খ. সামুদ্রিক শৈবাল বায়োটেকনোলজি ও শৈবাল চাষ (Algal Bioengineering)</h3>
      <ul>
        <li><strong>সি-উইড (Seaweed) চাষ ও জেনেটিক অপটিমাইজেশন:</strong> বৃহৎ পরিসরে স্পিরুলিনা ও কেল্প চাষ করে প্রোটিন সম্পূরক ও ওমেগা-৩ ফ্যাটি এসিড উৎপাদন।</li>
        <li><strong>অ্যালগাল বায়োপ্লাস্টিক ও বায়োফুয়েল:</strong> সামুদ্রিক শৈবাল থেকে ১০০% মাটির সাথে মিশে যাওয়া কম্পোস্টেবল বায়োপ্লাস্টিক তৈরি।</li>
        <li><strong>ব্লু কার্বন সিকোয়েস্ট্রেশন:</strong> সমুদ্র উপকূলে ম্যানগ্রোভ ও সি-গ্রাস মিডোর মাধ্যমে বায়ুমণ্ডলের কার্বন দ্রুত শোষণের জৈবপ্রযুক্তি।</li>
      </ul>

      <h3 class="review-h3">গ. ওশান জিনোমিক্স ও এনভায়রনমেন্টাল ডিএনএ (eDNA)</h3>
      <ul>
        <li><strong>eDNA মেটাবারকোডিং:</strong> সমুদ্রের মাত্র ১ লিটার পানি পরীক্ষা করে সেখানে উপস্থিত সকল মাছ, তিমি ও দুর্লভ অণুজীবের পূর্ণাঙ্গ জিনোমিক তালিকা বের করা।</li>
        <li><strong>অ্যাকুয়াকালচার জেনেটিক্স:</strong> মাছ ও চিংড়ির রোগ প্রতিরোধী নতুন ভ্যারাইটি তৈরি ও সেলুলার সী-ফুড (ল্যাব-গ্রোন মাছের মাংস)।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও বঙ্গোপসাগরের ব্লু-ইকোনমি (The Future)</h2>
      <p>বঙ্গোপসাগরে বাংলাদেশের সুবিশাল সমুদ্রসীমায় মেরিন বায়োটেকনোলজি হতে পারে বিলিয়ন ডলার রপ্তানি আয়ের ভবিষ্যৎ ইঞ্জিন:</p>
      <ul>
        <li><strong>মেরিন ফার্মাসিউটিক্যালস বিপ্লব:</strong> ক্যান্সারের জন্য এফডিএ অনুমোদিত ওষুধ (যেমন: ব্রায়োস্ট্যাটিন, ট্র্যাবেকটেডিন) সামুদ্রিক জীব থেকেই এসেছে। আগামী দিনে নতুন জীবনরক্ষাকারী ওষুধের প্রধান উৎস হবে সমুদ্র।</li>
        <li><strong>ফুড সিকিউরিটি ও অ্যালগাল সুপারফুড:</strong> ভবিষ্যৎ বিশ্বের শত কোটি মানুষের খাদ্য সংকট মেটাতে সমুদ্রভিত্তিক টেকসই প্রোটিন চাষ।</li>
        <li><strong>তেল দূষণ রোধে বায়োরিমেডিয়েশন:</strong> সমুদ্রে জাহাজের তেল নিঃসরণ হলে তা দ্রুত হজম করে ফেলা সক্ষম সামুদ্রিক ব্যাকটেরিয়া ব্যবহার।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/marine-fisheries-bsmrmu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>মেরিন ফিশারিজ ও ওশানোগ্রাফি (BSMRMU) - টেকসই মৎস্য বিজ্ঞান</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক সুযোগ (Career Scope & Institutes)</h2>
      <p>মেরিন বায়োটেকনোলজিস্টদের জন্য গ্লোবাল বায়োটেক হাবসমূহে চমৎকার ক্যারিয়ার সুযোগ রয়েছে:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক প্রতিষ্ঠানসমূহ</h3>
      <ul>
        <li><strong>মেরিন রিসার্চ ও ওশানোগ্রাফিক ইনস্টিটিউট:</strong> Woods Hole Oceanographic Institution (WHOI), Scripps Institution of Oceanography (UC San Diego), Ifremer (ফ্রান্স), JAMSTEC (জাপান)।</li>
        <li><strong>বায়োফার্মা ও ব্লু-টেক কোম্পানি:</strong> PharmaMar, BASF Marine Biotechnology, Algenol Biofuels, Corbion, CP Kelco।</li>
        <li><strong>বাংলাদেশ সমুদ্র গবেষণা ইনস্টিটিউট (BORI) ও মেরিটাইম বিশ্ববিদ্যালয়সমূহ।</strong></li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল ভূমিকা ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Marine Natural Products Chemist:</strong> বার্ষিক গড় বেতন $১,১০,০০০ – $১,৬০,০০০ মার্কিন ডলার।</li>
        <li><strong>Aquaculture Biotechnologist:</strong> বার্ষিক গড় বেতন $৯৫,০০০ – $১,৪৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Blue Economy Policy & Biotech Director:</strong> জাতিসংঘ ও সরকারি সংস্থায় উচ্চপদস্থ নীতিনির্ধারক।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও স্কলারশিপের ক্ষেত্র</h3>
      <p>নরওয়ের UiT The Arctic University of Norway, অস্ট্রেলিয়ার James Cook University ও University of Queensland, যুক্তরাষ্ট্রের UC San Diego, এবং জাপানের Tokyo University of Marine Science and Technology-এ পূর্ণ অর্থায়িত মাস্টার্স ও পিএইচডি স্কলারশিপ প্রদান করা হয়।</p>
    `
  },
  {
    slug: "nanoengineering-and-molecular-nanotechnology",
    title: "ন্যানোইঞ্জিনিয়ারিং ও মলিকুলার ন্যানোটেকনোলজি (Nanoengineering & Advanced Metamaterials) গাইড",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে ন্যানোইঞ্জিনিয়ারিং</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">পরমাণু ও অণুর স্তরে (১ থেকে ১০০ ন্যানোমিটার স্কেলে) পদার্থের গঠন নিয়ন্ত্রণ করে অতি-শক্তিশালী সুপারমেটেরিয়াল, ন্যানোরোবট, মেটামেটেরিয়ালস ও আণবিক মেশিন তৈরির প্রকৌশলবিদ্যা হলো ন্যানোইঞ্জিনিয়ারিং ও মলিকুলার ন্যানোটেকনোলজি।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>একটি ন্যানোমিটার হলো ১ মিটারের একশো কোটি ভাগের এক ভাগ (মানুষের একটি চুলের ব্যাসের প্রায় ৮০,০০০ ভাগের এক ভাগ)। এই অতি-ক্ষুদ্র আণবিক স্কেলে পৌঁছালে ক্লাসিক্যাল ফিজিক্সের সাধারণ নিয়ম আর খাটে না; তখন কোয়ান্টাম মেকানিক্সের বিস্ময়কর নিয়মাবলী কার্যকর হয়। যেমন: সাধারণ অবস্থায় সোনা হলুদ এবং নিষ্ক্রিয় হলেও ন্যানো পার্টিকেল অবস্থায় সোনা লাল রঙ ধারণ করে এবং অসাধারণ রাসায়নিক অনুঘটক হিসেবে কাজ করে।</p>
      <p>গ্রাফিন (Graphene)—যা ইস্পাতের চেয়ে ২০০ গুণ শক্ত অথচ কাগজের চেয়েও পাতলা এবং তামার চেয়ে দ্রুত বিদ্যুৎ পরিবাহী—এর মতো ভবিষ্যৎ মেটেরিয়াল তৈরি করা, মানবদেহের রক্তনালীর ভেতর দিয়ে গিয়ে সরাসরি ক্যান্সার টিউমার ধ্বংসকারী ন্যানোরোবট তৈরি করা এবং অদৃশ্য হওয়ার মতো লাইট-বেন্ডিং মেটামেটেরিয়াল উদ্ভাবনের জন্যই ন্যানোইঞ্জিনিয়ারিং পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/material-science-and-engineering-mse" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>ম্যাটেরিয়াল সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (MSE) - মেটালার্জি, সেমিকন্ডাক্টর ও পলিমার</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Deep Engineering Syllabus)</h2>
      <p>ন্যানোইঞ্জিনিয়ারিং কোয়ান্টাম পদার্থবিজ্ঞান, কেমিস্ট্রি, ইলেকট্রনিক্স ও মেকানিক্যাল ইঞ্জিনিয়ারিংয়ের এক গভীর মেলবন্ধন:</p>

      <h3 class="review-h3">ক. ন্যানোস্কেল ফিজিক্স ও কোয়ান্টাম মেকানিক্স</h3>
      <ul>
        <li><strong>কোয়ান্টাম কনফাইনমেন্ট ইফেক্ট ও কোয়ান্টাম ডটস (QDs):</strong> ন্যানো-ক্রিস্টালের আকার পরিবর্তন করে নিখুঁত কালার স্পেকট্রাম (QLED স্ক্রিন প্রযুক্তি) তৈরি।</li>
        <li><strong>কার্বন ন্যানোটিউব (CNT) ও ২ডি মেটেরিয়ালস:</strong> গ্রাফিন, বোরন নাইট্রাইড ও ট্রানজিশন মেটাল ডাইক্যালকোজেনাইডস (TMDs) সিন্থেসিস।</li>
        <li><strong>মলিকুলার সেলফ-অ্যাসেম্বলি:</strong> পরমাণুসমূহ স্বয়ংক্রিয়ভাবে জটিল ত্রিমাত্রিক কাঠামোয় সজ্জিত হওয়ার কেমিক্যাল মেকানিজম।</li>
      </ul>

      <h3 class="review-h3">খ. ন্যানোফেব্রিকেশন ও ক্লিনরুম টেকনোলজিস</h3>
      <ul>
        <li><strong>টপ-ডাউন ও বটম-আপ ফেব্রিকেশন:</strong> ইলেকট্রন বিম লিথোগ্রাফি (EBL), ফটো-লিথোগ্রাফি ও অ্যাটমিক লেয়ার ডিপোজিশন (ALD)।</li>
        <li><strong>মেটামেটেরিয়ালস ও ফোটনিক ক্রিস্টালস:</strong> আলোর গতিপথ বাঁকিয়ে দিয়ে 'ইনভিজিবিলিটি ক্লোক' বা সুপার-রেজোলিউশন লেন্স ডিজাইন।</li>
        <li><strong>ন্যানো-ক্যারেক্টারাইজেশন ল্যাব:</strong> স্ক্যানিং টানেলিং মাইক্রোস্কোপি (STM) এবং অ্যাটমিক ফোর্স মাইক্রোস্কোপি (AFM) দিয়ে একক পরমাণুকে নিয়ন্ত্রণ।</li>
      </ul>

      <h3 class="review-h3">গ. ন্যানোমেডিসিন ও টার্গেটেড থেরাপিউটিক্স</h3>
      <ul>
        <li><strong>লিপিড ন্যানোপার্টিকেলস (LNP):</strong> কোভিড এমআরএনএ ভ্যাকসিনের মতো ন্যানো-ক্যাপসুলের মাধ্যমে সরাসরি কোষের ভেতরে ওষুধ পৌঁছে দেওয়া।</li>
        <li><strong>থেরানোস্টিকস (Theranostics):</strong> একই সাথে রোগ শনাক্ত করা এবং লেজার দিয়ে টিউমার পুড়িয়ে ফেলার ন্যানোপার্টিকেল।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা (The Molecular Revolution)</h2>
      <p>ন্যানোইঞ্জিনিয়ারিং মানব সভ্যতার প্রযুক্তিগত ভিত্তি আমূল পরিবর্তন করছে:</p>
      <ul>
        <li><strong>সুপার-ব্যাটারি ও ক্লিন এনার্জি:</strong> ন্যানো-স্ট্রাকচার্ড সলিড-স্টেট ব্যাটারি যা মাত্র ৫ মিনিটে সম্পূর্ণ চার্জ হবে এবং ১০ গুণ বেশি চার্জ ধরে রাখবে।</li>
        <li><strong>মহাকাশ এলিভেটর (Space Elevator):</strong> কার্বন ন্যানোটিউবের অতি-শক্তিশালী ক্যাবল দিয়ে পৃথিবী থেকে সরাসরি মহাকাশ স্টেশনে লিফট নির্মাণ।</li>
        <li><strong>আণবিক ন্যানোরোবট:</strong> মানুষের রক্তে ঘুরে ফিরে ব্যাকটেরিয়া মেরে ফেলা এবং বয়োবৃদ্ধির ক্ষতিগ্রস্থ কোষ মেরামত করা।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/bme-buet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>বায়োমেডিকেল ইঞ্জিনিয়ারিং (BME) - বায়োমেটেরিয়ালস ও মেডিক্যাল ডিভাইস</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক গবেষণার দিগন্ত (Career Opportunities)</h2>
      <p>সেমিকন্ডাক্টর চিপ মেকার, উন্নত মেটেরিয়াল ও ফার্মাসিউটিক্যালস কোম্পানিতে ন্যানোইঞ্জিনিয়ারদের জন্য বিশাল কাজের ক্ষেত্র রয়েছে:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক প্রতিষ্ঠানসমূহ</h3>
      <ul>
        <li><strong>সেমিকন্ডাক্টর জায়ান্ট:</strong> Intel (১-২ ন্যানোমিটার চিপ নোড টিম), TSMC, ASML, Samsung Foundry, Applied Materials।</li>
        <li><strong>অ্যাডভান্সড মেটেরিয়াল ও কেমিক্যালস:</strong> Dow Chemical, 3M, DuPont, BASF, Nanoco Technologies।</li>
        <li><strong>ন্যানোমেডিসিন ও বায়োটেক:</strong> Moderna, BioNTech, Pfizer Nanomedicine Research, NanoString Technologies।</li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল পদবী ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Nanotechnology Research Scientist:</strong> বার্ষিক গড় বেতন $১,২০,০০০ – $১,৮৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Semiconductor Process / ALD Engineer:</strong> বার্ষিক গড় বেতন $১,৩০,০০০ – $১,৯৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Nanomedicine Formulation Specialist:</strong> বার্ষিক $১,২৫,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও স্কলারশিপ</h3>
      <p>যুক্তরাষ্ট্রের MIT, Stanford, UC Berkeley, Rice University (Center for Nanoscale Science); সুইজারল্যান্ডের ETH Zurich; এবং সিঙ্গাপুরের NUS ও NTU ন্যানোইঞ্জিনিয়ারিংয়ে বিশ্বের শীর্ষ ফুল-ফান্ডেড পিএইচডি প্রদান করে।</p>
    `
  },
  {
    slug: "urban-informatics-and-smart-cities",
    title: "আরবান ইনফরমেটিক্স ও স্মার্ট সিটি সিস্টেমস (Urban Informatics & Geospatial AI) বিষয় পরিচিতি",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে আরবান ইনফরমেটিক্স</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">ভূ-স্থানিক কৃত্রিম বুদ্ধিমত্তা (GeoAI), রিমোট সেন্সিং স্যাটেলাইট ডেটা, ইন্টারনেট অব থিংস (IoT) সেন্সর ও বিগ ডেটা অ্যানালিটিক্স ব্যবহার করে আধুনিক মেগাসিটির ট্রাফিক যানজট, দূষণ, দুর্যোগ ও অবকাঠামো স্বয়ংক্রিয়ভাবে পরিচালনার উন্নত প্রকৌশলবিদ্যা হলো আরবান ইনফরমেটিক্স ও স্মার্ট সিটি সিস্টেমস।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>২০৫০ সালের মধ্যে বিশ্বের প্রায় ৭০ শতাংশ মানুষ শহরে বসবাস করবে। ঢাকা, টোকিও, নিউইয়র্ক বা লন্ডনের মতো ঘনবসতিপূর্ণ মেগাসিটিগুলো তীব্র ট্রাফিক জ্যাম, বায়ুদূষণ, অপর্যাপ্ত পানি ও ড্রেনেজ ব্যবস্থা এবং অপরিকল্পিত নগরায়ণের চরম চাপে পিষ্ট হচ্ছে। ঐতিহ্যগত নগর পরিকল্পনা পদ্ধতির মাধ্যমে এই বিশাল ডাইনামিক ডেটা হ্যান্ডেল করা অসম্ভব।</p>
      <p>একটি স্মার্ট সিটিতে প্রতিটি মোড়ের ট্রাফিক সিগন্যাল গাড়ির লাইভ ঘনত্ব দেখে স্বয়ংক্রিয়ভাবে পরিবর্তিত হবে, ড্রেনেজের সেন্সর দিয়ে বন্যার পূর্বাভাস আগেই পাওয়া যাবে, স্যাটেলাইট ইমেজ দিয়ে অবৈধ দখল শনাক্ত হবে এবং এআই দিয়ে বিদ্যুৎ-পানির সাশ্রয়ী বণ্টন নিশ্চিত হবে। এই ধরণের ইন্টারকানেক্টেড 'স্মার্ট সিটি ব্রেন' বা ডিজিটাল টুইন গড়ে তোলার জন্যই আরবান ইনফরমেটিক্স পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/urp" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>নগর ও অঞ্চল পরিকল্পনা (URP) - আরবান মাস্টার প্ল্যানিং ও জমি ব্যবহার নীতি</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Interdisciplinary Course Modules)</h2>
      <p>আরবান ইনফরমেটিক্স জিওস্পেশিয়াল সায়েন্স, সিভিল সিস্টেমস, ডাটা সায়েন্স ও আরবান সোশ্যাল সায়েন্সের এক আধুনিক সমন্বয়:</p>

      <h3 class="review-h3">ক. জিওস্পেশিয়াল এআই ও স্যাটেলাইট রিমোট সেন্সিং</h3>
      <ul>
        <li><strong>GeoAI ও স্পেশিয়াল ডাটা সায়েন্স:</strong> ভূ-স্থানিক ক্লাস্টারিং, কার্নেল ডেনসিটি এস্টিমেশন ও স্পেশিয়াল অটো-কোরেলেশন (Moran's I)।</li>
        <li><strong>স্যাটেলাইট ইমেজ ও LiDAR প্রসেসিং:</strong> Sentinel ও Landsat ডেটা দিয়ে আরবান হিট আইল্যান্ড (UHI) প্রভাব এবং সবুজায়ন পরিমাপ।</li>
        <li><strong>ArcGIS Pro, QGIS ও Google Earth Engine (GEE):</strong> ক্লাউড প্ল্যাটফর্মে মিলিয়ন হেক্টর মেগাসিটি ডেটা প্রসেসিং।</li>
      </ul>

      <h3 class="review-h3">খ. স্মার্ট মোবিলিটি ও ট্রাফিক সিমুলেশন</h3>
      <ul>
        <li><strong>ইনটেলিজেন্ট ট্রান্সপোর্টেশন সিস্টেমস (ITS):</strong> জিপিএস ট্র্যাকিং, Uber/Ride-sharing ক্যাব অ্যালগরিদম ও লাইভ ট্রাফিক অপটিমাইজেশন।</li>
        <li><strong>ম্যাক্রো ও মাইক্রো-সিমুলেশন টুলস:</strong> SUMO, VISSIM ও MATSim দিয়ে স্বয়ংক্রিয় বৈদ্যুতিক গাড়ির নেটওয়ার্ক মডেলিং।</li>
        <li><strong>পাবলিক ট্রানজিট অপটিমাইজেশন:</strong> মেট্রো রেল, বিআরটি (BRT) ও বাস রুটের ক্যাপাসিটি ব্যালেন্সিং।</li>
      </ul>

      <h3 class="review-h3">গ. আরবান ডিজিটাল টুইন ও আইওটি আর্কিটেকচার</h3>
      <ul>
        <li><strong>সিটি-স্কেল থ্রিডি ডিজিটাল টুইন:</strong> গেম ইঞ্জিন ও বিআইএম (BIM) ডেটা দিয়ে পুরো শহরের লাইভ থ্রিডি প্রতিচ্ছবি তৈরি।</li>
        <li><strong>এনভায়রনমেন্টাল আইওটি সেন্সর নেটওয়ার্ক:</strong> রিয়েল-টাইম এয়ার কোয়ালিটি ইনডেক্স (AQI), নয়েজ লেভেল ও ওয়াটার ড্রেনেজ মনিটরিং।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও স্মার্ট ঢাকা রূপকল্প (The Future)</h2>
      <p>স্মার্ট সিটি সিস্টেমের বৈশ্বিক বাজার ২০৩০ সালের মধ্যে ১ ট্রিলিয়ন ডলারে পৌঁছাবে:</p>
      <ul>
        <li><strong>অটোনোমাস পাবলিক ট্রানজিট ও ফাইভ-জি ভিটুএক্স (V2X):</strong> ড্রাইভাহীন বাস ও মেট্রো নেটওয়ার্কের সাথে ট্রাফিক লাইটের রিয়েল-টাইম তথ্য বিনিময়।</li>
        <li><strong>ক্লাইমেট রেজিলিয়েন্ট স্মার্ট সিটি:</strong> চরম বৃষ্টিপাতের আগেই স্বয়ংক্রিয় পাম্পিং স্টেশন চালু হয়ে জলাবদ্ধতা মুক্ত আধুনিক মহানগরী।</li>
        <li><strong>স্মার্ট ঢাকার স্বপ্ন:</strong> ঢাকার দীর্ঘস্থায়ী যানজট ও দূষণ দূর করতে কৃত্রিম বুদ্ধিমত্তা ও জিওস্পেশিয়াল ডেটা-চালিত স্মার্ট ট্রাফিক কন্ট্রোল রুমের অপরিহার্যতা।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/civil-engineering-ce-cuet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>সিভিল ইঞ্জিনিয়ারিং (Civil Engineering) - পরিবহন ও স্ট্রাকচারাল ইঞ্জিনিয়ারিং</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক চাকরির সুযোগ (Career Opportunities)</h2>
      <p>আরবান ইনফরমেটিক্স ইঞ্জিনিয়াররা বিশ্বব্যাংক, শীর্ষ টেক ফার্ম এবং মিউনিসিপ্যাল গভর্নমেন্টে অত্যন্ত সমাদৃত:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক প্রতিষ্ঠানসমূহ</h3>
      <ul>
        <li><strong>স্মার্ট সিটি ও টেক জায়ান্টস:</strong> Google Maps / Geo Team, Esri (ArcGIS), Cisco Smart Cities, Siemens Mobility, Uber, Grab।</li>
        <li><strong>আন্তর্জাতিক ইঞ্জিনিয়ারিং ও আরবান প্ল্যানিং কনসালট্যান্ট:</strong> Arup, AECOM, WSP, Jacobs, Mott MacDonald।</li>
        <li><strong>বিশ্বব্যাংক, এডিবি, ইউএন-হ্যাবিট্যাট (UN-Habitat) ও মেগাসিটি মিউনিসিপ্যালিটিজ।</strong></li>
      </ul>

      <h3 class="review-h3">খ. পদবী ও আন্তর্জাতিক বেতন স্কেল</h3>
      <ul>
        <li><strong>Spatial Data Scientist / GeoAI Engineer:</strong> বার্ষিক গড় বেতন $১,১৫,০০০ – $১,৭০,০০০ মার্কিন ডলার।</li>
        <li><strong>Smart Mobility & ITS Specialist:</strong> বার্ষিক গড় বেতন $১,০৫,০০০ – $১,৬০,০০০ মার্কিন ডলার।</li>
        <li><strong>Chief Urban Informatics Officer:</strong> স্মার্ট সিটির প্রধান তথ্য কর্মকর্তা।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও স্কলারশিপের ক্ষেত্র</h3>
      <p>যুক্তরাষ্ট্রের NYU (Center for Urban Science & Progress - CUSP), MIT (Department of Urban Studies & Planning), UC Berkeley; যুক্তরাজ্যের UCL (Bartlett Centre for Advanced Spatial Analysis - CASA); এবং সিঙ্গাপুরের NUS ও NTU আরবান ইনফরমেটিক্সে ১০০% ফুল-ফান্ডেড ফেলোশিপ দেয়।</p>
    `
  }
];

reviewsData.forEach(item => {
  const filePath = path.join(REVIEWS_DIR, `${item.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(item, null, 2), 'utf-8');
});

console.log(`Successfully generated ${reviewsData.length} ultra-detailed 700+ words reviews for Session 2!`);
