const fs = require('fs');
const path = require('path');

const REVIEWS_DIR = path.join(process.cwd(), 'data', 'reviews');

const reviewsData = [
  {
    slug: "astrobiology-and-space-life-sciences",
    title: "অ্যাস্ট্রোবায়োলজি ও স্পেস লাইফ সায়েন্সেস (Astrobiology & Space Life Sciences) উচ্চশিক্ষা ও ক্যারিয়ার",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে অ্যাস্ট্রোবায়োলজি ও স্পেস লাইফ সায়েন্সেস</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">পৃথিবীর বাইরে মহাবিশ্বে প্রাণের উৎপত্তি, বিবর্তন, সৌরজগতের অন্যান্য গ্রহ-উপগ্রহে (মঙ্গল, ইউরোপা, এনসেলাডাস) এক্সট্রাটেরেস্ট্রিয়াল প্রাণের অনুসন্ধান এবং দীর্ঘ মহাকাশ অভিযানে মানবদেহের অভিযোজন নিয়ে গবেষণার আধুনিকতম আন্তর্জাতিক বিজ্ঞান হলো অ্যাস্ট্রোবায়োলজি।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>মানবজাতির সবচেয়ে বড় মৌলিক প্রশ্নগুলোর অন্যতম: <em>"আমরা কি মহাবিশ্বে একা? পৃথিবীর বাইরে কি অন্য কোথাও প্রাণ আছে?"</em> বিজ্ঞানীদের মতে, শুধু আমাদের মিল্কিওয়ে গ্যালাক্সিতেই কোটি কোটি বাসযোগ্য এক্সোপ্ল্যানেট (Exoplanet) বিদ্যমান। এছাড়া মঙ্গল গ্রহের মাটির নিচে বরফ, বৃহস্পতির চাঁদ 'ইউরোপা' এবং শনির চাঁদ 'এনসেলাডাস'-এর বরফাবৃত তরল মহাসাগরে অণুজীব থাকার প্রবল সম্ভাবনা রয়েছে।</p>
      <p>অন্যদিকে নাসা ও স্পেসএক্সের আর্টেমিস ও মার্স মিশনে মানুষ যখন দীর্ঘ কয়েক বছর মহাকাশে মহাশূন্যের মাইক্রোগ্র্যাভিটি এবং কসমিক রেডিয়েশনের মধ্যে বসবাস করবে, তখন মানুষের হাড়ের ঘনত্ব হ্রাস, পেশীর ক্ষয়, ডিএনএ মিউটেশন এবং চোখের দৃষ্টির পরিবর্তন কীভাবে প্রতিরোধ করা যায়—তা সমাধান করার জন্যই স্পেস লাইফ সায়েন্সেস পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/aerospace-and-astronautical-engineering" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>অ্যারোস্পেস ও অ্যাস্ট্রোনটিক্যাল ইঞ্জিনিয়ারিং (Aerospace) - রকেট্রি ও মহাকাশযান ডিজাইন</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Advanced Curriculum Modules)</h2>
      <p>অ্যাস্ট্রোবায়োলজি জ্যোতির্বিজ্ঞান, আণবিক জীববিদ্যা, ভূরসায়ন ও স্পেস মেডিসিনের এক গভীর ইন্টারডিসিপ্লিনারি সমন্বয়:</p>

      <h3 class="review-h3">ক. প্রি-বায়োটিক কেমিস্ট্রি ও অরিজিন অব লাইফ</h3>
      <ul>
        <li><strong>অজৈব পদার্থ থেকে জৈব অণু সংশ্লেষণ:</strong> মিলার-ইউরে পরীক্ষা, আরএনএ ওয়ার্ল্ড হাইপোথিসিস ও হাইড্রোথার্মাল ভেন্ট পরিবেশ।</li>
        <li><strong>বায়োসিগনেচার ও বায়োমার্কার ডিটেকশন:</strong> বায়ুমণ্ডলে মিথেন, ফসফিন ও অক্সিজেনের মতো প্রাণের লক্ষণ স্পেকট্রোস্কোপি দিয়ে দূর থেকে শনাক্তকরণ (James Webb Space Telescope - JWST ডেটা অ্যানালাইসিস)।</li>
        <li><strong>এক্সট্রিমোফাইল বায়োলজি:</strong> পৃথিবীর চরম অ্যাসিডিক, চরম তেজস্ক্রিয় এবং অ্যান্টার্কটিকার বরফের নিচের জীবদের বেঁচে থাকার কৌশল।</li>
      </ul>

      <h3 class="review-h3">খ. প্ল্যানেটারি সায়েন্স ও হ্যাবিটেবিলিটি মডেলিং</h3>
      <ul>
        <li><strong>গোল্ডিলক্স জোন (Habitable Zone):</strong> নক্ষত্র থেকে উপযুক্ত দূরত্বে তরল পানির অস্তিত্ব সমীকরণ।</li>
        <li><strong>মার্শিয়ান অ্যানালগ এনভায়রনমেন্ট ল্যাব:</strong> মঙ্গল গ্রহের মাটির মতো উপাদান (Regolith) তৈরি করে সেখানে উদ্ভিদের বৃদ্ধির পরীক্ষা।</li>
        <li><strong>প্ল্যানেটারি প্রটেকশন প্রোটোকল:</strong> পৃথিবীর জীবাণু দিয়ে অন্য গ্রহ দূষিত হওয়া রোধ করার আন্তর্জাতিক নাসা প্রোটোকল।</li>
      </ul>

      <h3 class="review-h3">গ. স্পেস বায়োলজি ও স্পেস মেডিসিন</h3>
      <ul>
        <li><strong>মাইক্রোগ্র্যাভিটি ইফেক্টস:</strong> আন্তর্জাতিক মহাকাশ স্টেশনে (ISS) জিরো-গ্র্যাভিটিতে কোষে জিন এক্সপ্রেশন ও কার্ডিওভাসকুলার পরিবর্তন।</li>
        <li><strong>কসমিক রেডিয়েশন প্রোটেকশন:</strong> সোলার ফ্লেয়ার এবং গ্যালাকটিক কসমিক রশ্মি থেকে নভোচারীদের ডিএনএ সুরক্ষায় রেডিও-প্রটেক্টিভ ড্রাগ।</li>
        <li><strong>ক্লোজড-লুপ স্পেস লাইফ সাপোর্ট সিস্টেমস (ECLSS):</strong> মহাকাশযানে মূত্র ও আর্দ্রতা থেকে ১০০% বিশুদ্ধ খাবার পানি এবং অক্সিজেন রিসাইক্লিং।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও মঙ্গল গ্রহে মানব বসতি (The Future)</h2>
      <p>অ্যাস্ট্রোবায়োলজি আগামী দিনগুলোতে মহাকাশ অভিযানের অন্যতম প্রধান চালিকাশক্তি:</p>
      <ul>
        <li><strong>জেমস ওয়েব স্পেস টেলিস্কোপের মাধ্যমে বহির্জাগতিক প্রাণের আবিষ্কার:</strong> নিকটবর্তী কোনো ট্রাপিস্ট (TRAPPIST-1) গ্রহে বায়োসিগনেচার নিশ্চিত হলে তা মানব ইতিহাসের সবচেয়ে বড় বৈজ্ঞানিক আবিষ্কার হবে।</li>
        <li><strong>টেরাফর্মিং ও স্পেস এগ্রিকালচার:</strong> চাঁদে ও মঙ্গলে হাইড্রোপনিক্স ও এয়ারোপনিক্স পদ্ধতিতে খাদ্যের জন্য বিশেষায়িত স্পেস-ক্রপ চাষাবাদ।</li>
        <li><strong>ডিপ-স্পেস হিউম্যান হাইবারনেশন:</strong> দূরের গ্রহে যাত্রার সময় নভোচারীদের দীর্ঘমেয়াদী হাইবারনেশনে (কৃত্রিম ঘুম) রাখার চিকিৎসা প্রযুক্তি।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/genetic-engineering-and-biotechnology-geb-cu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>জেনেটিক ইঞ্জিনিয়ারিং অ্যান্ড বায়োটেকনোলজি (GEB) - জিন এডিটিং ও রেডিয়েশন রেজিস্ট্যান্স</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক স্পেস এজেন্সি স্কোপ (Career Opportunities)</h2>
      <p>আন্তর্জাতিক মহাকাশ গবেষণা সংস্থা ও বিশ্ববিদ্যালয়গুলোতে অ্যাস্ট্রোবায়োলজিস্টদের ব্যাপক কদর রয়েছে:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক প্রতিষ্ঠান ও স্পেস মিশনস</h3>
      <ul>
        <li><strong>স্পেস এজেন্সি ও ইনস্টিটিউট:</strong> NASA Astrobiology Program, NASA Ames Research Center, Jet Propulsion Laboratory (JPL), ESA (European Space Agency), SETI Institute (Search for Extraterrestrial Intelligence)।</li>
        <li><strong>কমার্শিয়াল স্পেস স্টেশন কোম্পানি:</strong> Axiom Space, Blue Origin (Orbital Reef), SpaceX Life Sciences Team।</li>
        <li><strong>গ্লোবাল প্ল্যানেটারি ল্যাবরেটরিজ।</strong></li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল পদবী ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Astrobiologist / Planetary Protection Officer:</strong> বার্ষিক গড় বেতন $১,১৫,০০০ – $১,৭৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Space Life Sciences Researcher:</strong> বার্ষিক গড় বেতন $১,১০,০০০ – $১,৬৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Exoplanet Biosignature Analyst:</strong> শীর্ষ জ্যোতির্বিজ্ঞান মানমন্দিরে সম্মানজনক বৈজ্ঞানিক পদ।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও সেরা বিশ্ববিদ্যালয়সমূহ</h3>
      <p>যুক্তরাষ্ট্রের University of Washington (Astrobiology Program), University of Arizona, Penn State; এবং যুক্তরাজ্যের University of Edinburgh (UK Centre for Astrobiology) ও Oxford University-তে সম্পূর্ণ ফুল-ফান্ডেড পিএইচডি স্কলারশিপ প্রদান করা হয়।</p>
    `
  },
  {
    slug: "semiconductor-device-physics-and-chip-fabrication",
    title: "সেমিকন্ডাক্টর ডিভাইস ফিজিক্স ও চিপ ফেব্রিকেশন (Semiconductor Physics & VLSI Fabrication) গাইড",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে সেমিকন্ডাক্টর ও চিপ ফেব্রিকেশন</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">আধুনিক সিলিকন চিপে মাত্র কয়েক বর্গ মিলিমিটারে ১০০ বিলিয়ন ট্রানজিস্টর খোদাই করার ফটো-লিথোগ্রাফি, কোয়ান্টাম ব্যান্ডগ্যাপ ইঞ্জিনিয়ারিং ও ভিএলএসআই (VLSI) চিপ ম্যানুফ্যাকচারিংয়ের বৈশ্বিক কৌশলগত বিজ্ঞান হলো সেমিকন্ডাক্টর ফেব্রিকেশন।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>বর্তমান ডিজিটাল বিশ্ব চলে সেমিকন্ডাক্টর চিপের ওপর। আপনার পকেটের স্মার্টফোন, কৃত্রিম বুদ্ধিমত্তার এনভিডিয়া সুপারকম্পিউটার, স্যাটেলাইট, বৈদ্যুতিক গাড়ি থেকে শুরু করে আধুনিক মিসাইল গাইডেন্স সিস্টেম—সবকিছুর মস্তিষ্ক হলো মাইক্রোচিপ। সেমিকন্ডাক্টর শিল্প হলো বর্তমানে বিশ্বের এক নম্বর ভূ-রাজনৈতিক ও প্রযুক্তিগত শক্তি (Chip Wars)।</p>
      <p>একটি সিলিকন ওয়েফারের ওপর ৩ ন্যানোমিটার বা ২ ন্যানোমিটারের মতো ক্ষুদ্রাতিক্ষুদ্র ট্রানজিস্টর খোদাই করতে এক্সট্রিম আল্ট্রাভায়োলেট (EUV) লেজার কীভাবে ব্যবহার করতে হয়, কোয়ান্টাম টানেলিং লিকেজ কীভাবে বন্ধ করতে হয় এবং FinFET ও Gate-All-Around (GAA) ন্যানোশিট ট্রানজিস্টর কীভাবে তৈরি করা যায়—তা শেখার জন্যই সেমিকন্ডাক্টর ডিভাইস ফিজিক্স ও চিপ ফেব্রিকেশন পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/eee-buet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>ইলেকট্রিক্যাল অ্যান্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং (EEE) - সার্কিট অ্যানালাইসিস ও ভিএলএসআই ডিজাইন</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Cleanroom & Physical Semiconductor Curriculum)</h2>
      <p>এই বিষয়টি সলিড স্টেট ফিজিক্স, মেটেরিয়াল কেমিস্ট্রি ও চিপ ফেব্রিকেশন প্রসেসের এক গভীর মেলবন্ধন:</p>

      <h3 class="review-h3">ক. সেমিকন্ডাক্টর ফিজিক্স ও কোয়ান্টাম ট্রান্সপোর্ট</h3>
      <ul>
        <li><strong>ব্যান্ড থিওরি ও ফার্মি-ডিরাক ডিস্ট্রিবিউশন:</strong> ড্রেন-সোর্স চার্জ ক্যারিয়ার মোবিলিটি ও ডোপিং মেকানিক্স।</li>
        <li><strong>সাব-থ্রেশহোল্ড লিকেজ ও কোয়ান্টাম টানেলিং:</strong> ন্যানোমিটার স্কেলে ট্রানজিস্টর অফ থাকার সময় বিদ্যুৎ অপচয় রোধ।</li>
        <li><strong>ওয়াইড ব্যান্ডগ্যাপ সেমিকন্ডাক্টরস:</strong> সিলিকন কার্বাইড (SiC) ও গ্যালিয়াম নাইট্রাইড (GaN) দিয়ে হাই-পাওয়ার ইভি ইনভার্টার ও ফাস্ট চার্জার চিপ তৈরি।</li>
      </ul>

      <h3 class="review-h3">খ. চিপ ফেব্রিকেশন প্রসেস ও ক্লিনরুম টেকনোলজিস (Fab Engineering)</h3>
      <ul>
        <li><strong>EUV ফটো-লিথোগ্রাফি:</strong> ১৩.৫ ন্যানোমিটার এক্সট্রিম আল্ট্রাভায়োলেট লাইট দিয়ে সিলিকন ওয়েফারে ট্রানজিস্টর প্যাটার্ন প্রিন্ট।</li>
        <li><strong>প্লাজমা এচিং (RIE) ও কেমিক্যাল মেকানিক্যাল পলিশিং (CMP):</strong> পারমাণবিক নিখুঁততায় ওয়েফার সমতলকরণ।</li>
        <li><strong>অ্যাটমিক লেয়ার ডিপোজিশন (ALD) ও আয়ন ইমপ্লান্টেশন:</strong> পরমাণুর একেকটি স্তরে ডোপ্যান্ট সংযোজন।</li>
      </ul>

      <h3 class="review-h3">গ. থ্রিডি আইসি প্যাকেজিং ও চিপলেট আর্কিটেকচার</h3>
      <ul>
        <li><strong>অ্যাডভান্সড ৩ডি প্যাকেজিং (CoWoS / Foveros):</strong> সিলিকন ইন্টারপোজারের মাধ্যমে একাধিক সিপিইউ, জিপিইউ ও হাই-ব্যান্ডউইথ মেমোরি (HBM3e) একত্রিত করা।</li>
        <li><strong>চিপ ইল্ড (Yield) অপটিমাইজেশন ও ডিফেক্ট ডেনসিটি কন্ট্রোল:</strong> ক্লিনরুম ক্লাস ১ পরিবেশে নিখুঁত চিপ উৎপাদন।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও গ্লোবাল চিপস অ্যাক্ট (The Future)</h2>
      <p>সেমিকন্ডাক্টর শিল্প আগামী দশকে ১ ট্রিলিয়ন ডলারের বাজার অতিক্রম করবে:</p>
      <ul>
        <li><strong>অ্যাঙ্গারস্ট্রম-এরা (Angstrom Era - A16, A14):</strong> সাব-ন্যানোমিটার স্কেলে চিপ ট্রানজিস্টর উৎপাদন এবং ব্যাকসাইড পাওয়ার ডেলিভারি নেটওয়ার্ক (BSPDN)।</li>
        <li><strong>সিলিকন ফোটনিক্স চিপস:</strong> ট্রানজিস্টরের ভেতরে তামার তারের বদলে আলোর গতিতে ডেটা ট্রান্সফার করে এআই ডাটা সেন্টারের পাওয়ার খরচ ৯০% হ্রাস।</li>
        <li><strong>গ্লোবাল সাপ্লাই চেইনের পুনর্গঠন:</strong> আমেরিকা, ইউরোপ ও জাপানে বিলিয়ন ডলারের নতুন ফ্যাব (Fab) স্থাপনের ফলে প্রকৌশলীদের বিশ্বব্যাপী তীব্র চাহিদা তৈরি হয়েছে।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/nanoengineering-and-molecular-nanotechnology" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>ন্যানোইঞ্জিনিয়ারিং (Nanoengineering) - আণবিক ন্যানোমেটেরিয়াল ও ন্যানোফেব্রিকেশন</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক নিয়োগকারী সংস্থা (Career Opportunities)</h2>
      <p>সেমিকন্ডাক্টর ফ্যাব ও চিপ ডিজাইন কোম্পানিগুলোতে বিশ্বসেরা ক্যারিয়ার সুযোগ রয়েছে:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক ফ্যাব ও চিপ জায়ান্টস</h3>
      <ul>
        <li><strong>সেমিকন্ডাক্টর ফাউন্ট্রি ও ইকুইপমেন্ট জায়ান্ট:</strong> TSMC (তাইওয়ান), ASML (নেদারল্যান্ডস), Intel Foundry Services, Samsung Electronics, Applied Materials, Lam Research, Tokyo Electron, KLA।</li>
        <li><strong>ফ্যাবলেস চিপমেকার ও এআই জায়ান্ট:</strong> Nvidia, AMD, Apple (Silicon Engineering Group), Qualcomm, Broadcom, MediaTek।</li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল ভূমিকা ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Semiconductor Process Integration Engineer:</strong> বার্ষিক গড় বেতন $১,৩৫,০০০ – $২,১৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Lithography / EUV Engineer:</strong> বার্ষিক গড় বেতন $১,৪০,০০০ – $২,২৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Advanced Packaging & Yield Engineer:</strong> বার্ষিক $১,৩০,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও সেরা বিশ্ববিদ্যালয়সমূহ</h3>
      <p>যুক্তরাষ্ট্রের Purdue University, UC Berkeley, Stanford, University of Texas at Austin; তাইওয়ানের National Taiwan University (NTU) ও NTHU; এবং বেলজিয়ামের IMEC ইনস্টিটিউটে সেমিকন্ডাক্টর ফ্যাব গবেষণায় ১০০% ফুল ফান্ডিং পাওয়া যায়।</p>
    `
  },
  {
    slug: "synthetic-biology-and-metabolic-engineering",
    title: "সিন্থেটিক বায়োলজি ও মেটাবলিক ইঞ্জিনিয়ারিং (Synthetic Biology & Cellular Agriculture) রিভিউ",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে সিন্থেটিক বায়োলজি</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">জীবের ডিএনএ কোডকে কম্পিউটারের সফটওয়্যার কোডের মতো স্ক্র্যাচ থেকে নতুন করে লিখে ব্যাকটেরিয়া ও ইস্টকে মাইক্রোস্কোপিক কারখানায় রূপান্তর করে ওষুধ, সুগন্ধি, ক্লিন ফুয়েল ও ল্যাব-গ্রোন মাংস তৈরির যুগান্তকারী বিজ্ঞান হলো সিন্থেটিক বায়োলজি।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>ঐতিহ্যগত বায়োটেকনোলজিতে একটি জীবের প্রাকৃতিক জিন অন্য জীবে প্রতিস্থাপন করা হতো। কিন্তু সিন্থেটিক বায়োলজি পুরো জীববিজ্ঞানের সংজ্ঞাই বদলে দিয়েছে। এখানে কম্পিউটার ইঞ্জিনিয়ারিংয়ের মতো স্ট্যান্ডার্ড বায়োলজিক্যাল পার্টস (BioBricks) ব্যবহার করে ডিএনএ সিন্থেসাইজারের মাধ্যমে সম্পূর্ণ নতুন জিনোমিক সার্কিট ডিজাইন করা হয়।</p>
      <p>গাছ না কেটেই ল্যাবে ইস্ট দিয়ে প্রাকৃতিক সুগন্ধি ও ভ্যানিলিন তৈরি করা, একটি গরু হত্যা না করেই সেলুলার ফারমেন্টেশনের মাধ্যমে নিখুঁত গরুর দুধ ও পনির তৈরি করা এবং বাতাস থেকে কার্বন ডাই অক্সাইড খেয়ে প্লাস্টিক তৈরি করতে পারে এমন কাস্টম ব্যাকটেরিয়া ইঞ্জিনিয়ারিং করার জন্যই সিন্থেটিক বায়োলজি পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/genetic-engineering-and-biotechnology-geb-cu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>জেনেটিক ইঞ্জিনিয়ারিং অ্যান্ড বায়োটেকনোলজি (GEB) - রিকম্বিন্যান্ট ডিএনএ ও সেল বায়োলজি</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Synthetic Biology & Metabolic Curriculum)</h2>
      <p>এই বিষয়টি জেনেটিক সার্কিট ডিজাইন, অটোমেটেড ল্যাবরেটরি বায়োলজি ও বায়োপ্রসেস ইঞ্জিনিয়ারিংয়ের এক সমন্বিত প্ল্যাটফর্ম:</p>

      <h3 class="review-h3">ক. জেনেটিক সার্কিট ও বায়োলজিক্যাল লজিক গেটস</h3>
      <ul>
        <li><strong>সিন্থেটিক জিন সার্কিট ডিজাইন:</strong> কোষে লজিক গেট (AND, OR, NOT gates), টগল সুইচ ও জেনেটিক অসিলেটর প্রোগ্রামিং।</li>
        <li><strong>ডি নোভো ডিএনএ সিন্থেসিস ও ক্রিসপার ২.০:</strong> প্রাইম এডিটিং এবং বেস এডিটিং দিয়ে জিনের ত্রুটিহীন পুনঃলিখন।</li>
        <li><strong>সেল-ফ্রি সিন্থেটিক বায়োলজি:</strong> কোনো জীবিত কোষ ছাড়াই টেস্টটিউবে সরাসরি ডিএনএ থেকে ওষুধ ও প্রোটিন উৎপাদন।</li>
      </ul>

      <h3 class="review-h3">খ. মেটাবলিক পাথওয়ে ইঞ্জিনিয়ারিং ও সেলুলার এগ্রিকালচার</h3>
      <ul>
        <li><strong>ফ্লাক্স ব্যালেন্স অ্যানালাইসিস (FBA):</strong> কম্পিউটেশনাল মডেলিং দিয়ে মাইক্রোবের পুষ্টি রূপান্তরের হার অপটিমাইজেশন।</li>
        <li><strong>প্রেসিশন ফারমেন্টেশন:</strong> ইস্ট ও অ্যালজি দিয়ে অ্যানিম্যাল-ফ্রি মিল্ক প্রোটিন, ডিমের প্রোটিন ও কালচার্ড মিট তৈরি।</li>
        <li><strong>বায়োরিয়্যাক্টর স্কেল-আপ:</strong> হাজার লিটারের স্টেইনলেস স্টিল ভ্যাটে কাস্টম জীবাণু ফারমেন্টেশন প্রসেস পরিচালনা।</li>
      </ul>

      <h3 class="review-h3">গ. বায়ো-ডিজাইন সফটওয়্যার ও ল্যাব অটোমেশন</h3>
      <ul>
        <li><strong>কম্পিউটার-এইডেড ডিজাইন (CAD for Biology):</strong> Benchling, Geneious ও কাস্টম পাইথন লাইব্রেরি দিয়ে জিন ডিজাইন।</li>
        <li><strong>রোবোটিক ক্লাউড ল্যাবরেটরিজ:</strong> স্বয়ংক্রিয় রোবটিক লিকুইড হ্যান্ডলার দিয়ে প্রতিদিন হাজার হাজার জিন পরীক্ষা করা।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা (The Post-Petroleum Bioeconomy)</h2>
      <p>সিন্থেটিক বায়োলজি বিশ্ব অর্থনীতিকে পেট্রোলিয়াম-ভিত্তিক থেকে সম্পূর্ণ বায়ো-ভিত্তিক মডেলে রূপান্তর করবে:</p>
      <ul>
        <li><strong>পরিবেশবান্ধব নাইট্রোজেন-ফিক্সিং শস্য:</strong> কৃত্রিম সার ছাড়াই বাতাসে থাকা নাইট্রোজেন নিজে থেকে গ্রহণ করতে পারে এমন চাল ও গমের উদ্ভাবন।</li>
        <li><strong>বায়োলজিক্যাল লিভিং কম্পিউটিং:</strong> ব্যাকটেরিয়ার ডিএনএ-তে টেরাবাইট ডেটা স্টোর করা এবং পেটের ভেতর ডায়াগনস্টিক সেন্সর হিসেবে জীবন্ত ব্যাকটেরিয়া প্রবেশ করানো।</li>
        <li><strong>১০০% বায়ো-ডিগ্রেডেবল টেক্সটাইল:</strong> মাকড়সার জালের মতো সুপার-স্ট্রং সিল্ক তৈরি যা প্লাস্টিক পলিয়েস্টার সুতাকে সম্পূর্ণ প্রতিস্থাপন করবে।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/ch-e-buet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>কেমিক্যাল ইঞ্জিনিয়ারিং (Chemical Engineering) - বায়োরিয়্যাক্টর ডিজাইন ও মাস ট্রান্সফার</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও শীর্ষ বায়োটেক স্টার্টআপস (Career Opportunities)</h2>
      <p>সিন্থেটিক বায়োলজিস্টদের জন্য সিলিকন ভ্যালি ও বস্টনের মতো গ্লোবাল বায়োটেক হাবে ব্যাপক চাহিদা রয়েছে:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক কোম্পানি ও সিনবায়ো হাবস</h3>
      <ul>
        <li><strong>সিন্থেটিক বায়োলজি জায়ান্টস:</strong> Ginkgo Bioworks (Boston), Amyris, Zymergen, Twist Bioscience, Codexis।</li>
        <li><strong>সেলুলার এগ্রিকালচার ও ফুড-টেক:</strong> Perfect Day Foods, Impossible Foods, UPSIDE Foods, Beyond Meat।</li>
        <li><strong>গ্লোবাল এগ্রো ও কেমিক্যাল জায়ান্ট:</strong> Bayer Crop Science, Novozymes, DSM-Firmenich, BASF।</li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল ভূমিকা ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Synthetic Biologist / Strain Engineer:</strong> বার্ষিক গড় বেতন $১,২০,০০০ – $১,৮০,০০০ মার্কিন ডলার।</li>
        <li><strong>Metabolic Modeling Scientist:</strong> বার্ষিক গড় বেতন $১,২৫,০০০ – $১,৯০,০০০ মার্কিন ডলার।</li>
        <li><strong>Fermentation Scale-Up Director:</strong> বার্ষিক $২,১০,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও বিশ্বখ্যাত ল্যাবসমূহ</h3>
      <p>যুক্তরাষ্ট্রের MIT (Synthetic Biology Center), Stanford University (Bioengineering Department), UC Berkeley; যুক্তরাজ্যের Imperial College London (Centre for Synthetic Biology); এবং সুইজারল্যান্ডের ETH Zurich সিন্থেটিক বায়োলজিতে বিশ্বসেরা পিএইচডি ফেলোশিপ প্রদান করে।</p>
    `
  },
  {
    slug: "nuclear-fusion-and-plasma-engineering",
    title: "নিউক্লিয়ার ফিউশন ও প্লাজমা ইঞ্জিনিয়ারিং (Nuclear Fusion & Clean Energy Physics) পূর্ণাঙ্গ গাইড",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে নিউক্লিয়ার ফিউশন ও প্লাজমা ইঞ্জিনিয়ারিং</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">সূর্য ও নক্ষত্রের শক্তির উৎস—নিউক্লিয়ার ফিউশন বিক্রিয়াকে পৃথিবীতে টোকামাক ও লেজার কনফাইনমেন্টের মাধ্যমে ১০০ মিলিয়ন ডিগ্রি সেলসিয়াসের প্লাজমা সৃষ্টি করে অসীম, কার্বনমুক্ত ও তেজস্ক্রিয় বর্জ্যহীন ক্লিন এনার্জি উৎপাদনের চূড়ান্ত ভবিষ্যৎ বিজ্ঞান হলো নিউক্লিয়ার ফিউশন ইঞ্জিনিয়ারিং।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>বর্তমান নিউক্লিয়ার পাওয়ার প্ল্যান্টগুলো চলে 'ফিশন' (Fission) প্রক্রিয়ায়—যেখানে ভারী ইউরেনিয়াম পরমাণু ভেঙে শক্তি পাওয়া যায়। কিন্তু এতে চেরনোবিল বা ফুকুশিমার মতো ম্যাল্টডাউনের ঝুঁকি এবং হাজার বছর ধরে তেজস্ক্রিয় বর্জ্য সংরক্ষণের সমস্যা থাকে। অন্যদিকে 'নিউক্লিয়ার ফিউশন' হলো সম্পূর্ণ বিপরীত এবং সূর্যের মতো নিরাপদ প্রক্রিয়া—যেখানে সমুদ্রের পানির সাধারণ হাইড্রোজেন আইসোটোপ (ডিউটেরিয়াম) জোড়া লেগে শক্তি তৈরি হয়। মাত্র এক গ্লাস পানি ও একটি ল্যাপটপ ব্যাটারির লিথিয়াম দিয়ে একজন মানুষের পুরো জীবনের প্রয়োজনীয় বিদ্যুৎ উৎপাদন সম্ভব!</p>
      <p>সূর্যের চেয়েও ৫ গুণ বেশি উত্তপ্ত (১০০ মিলিয়ন ডিগ্রি সেলসিয়াসের) প্লাজমাকে কীভাবে শক্তিশালী সুপারকন্ডাক্টিং চুম্বক দিয়ে শূন্যে ভাসিয়ে রাখা যায় (Magnetic Confinement - Tokamak) এবং পৃথিবীর বুক থেকে স্থায়ীভাবে জীবাশ্ম জ্বালানির যুগ শেষ করে অসীম বিদ্যুৎ উৎপাদন নিশ্চিত করা যায়—তার জন্যই এই ডিসিপ্লিন পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/nuclear-engineering-buet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>নিউক্লিয়ার ইঞ্জিনিয়ারিং (Nuclear Engineering - BUET) - পারমাণবিক রিঅ্যাক্টর ও রেডিয়েশন সুরক্ষা</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Deep Theoretical & Experimental Syllabus)</h2>
      <p>নিউক্লিয়ার ফিউশন প্লাজমা পদার্থবিজ্ঞান, সুপারকন্ডাক্টিং ম্যাগনেট ও মেটেরিয়াল ইঞ্জিনিয়ারিংয়ের এক চরম তাত্ত্বিক ও ব্যবহারিক মেলবন্ধন:</p>

      <h3 class="review-h3">ক. প্লাজমা ফিজিক্স ও ম্যাগনেটো-হাইড্রোডাইনামিক্স (MHD)</h3>
      <ul>
        <li><strong>প্লাজমা স্টেট ও ডেবাই শিল্ডিং:</strong> পদার্থের চতুর্থ অবস্থা প্লাজমার চার্জ ব্যালেন্স ও আয়ন কাইনেটিক্স।</li>
        <li><strong>MHD ইকুইলিব্রিয়াম ও প্লাজমা ইনস্ট্যাবিলিটি:</strong> সসেজ ও কিঙ্ক ইনস্ট্যাবিলিটি দমন করে প্লাজমার টার্বুলেন্স নিয়ন্ত্রণ।</li>
        <li><strong>লসন ক্রাইটেরিয়ন ও কিউ ফ্যাক্টর (Q Factor > 1):</strong> ফিউশন বিক্রিয়ায় দেওয়া শক্তির চেয়ে বেশি উৎপাদিত নেট এনার্জি গেইন ক্যালকুলেশন।</li>
      </ul>

      <h3 class="review-h3">খ. ফিউশন ডিভাইস আর্কিটেকচার (Tokamaks, Stellarators & Laser Fusion)</h3>
      <ul>
        <li><strong>টোকামাক (Tokamak) ও স্টেলারেটর (Stellarator) ডিজাইন:</strong> টরোইডাল ম্যাগনেটিক ফিল্ড এবং হেলিকাল কয়েল কনফিগারেশন।</li>
        <li><strong>হাই-টেম্পারেচার সুপারকন্ডাক্টিং (HTS) ম্যাগনেটস:</strong> REBCO টেপ দিয়ে ২০ টেসলার অতি-শক্তিশালী চৌম্বক ক্ষেত্র তৈরি।</li>
        <li><strong>ইনার্শিয়াল কনফাইনমেন্ট ফিউশন (ICF):</strong> বিশ্বের সবচেয়ে শক্তিশালী লেজার বিম দিয়ে হাইড্রোজেন প্যালেট সংকুচিত করে ফিউশন ইগনিশন (NIF - National Ignition Facility)।</li>
      </ul>

      <h3 class="review-h3">গ. প্লাজমা ফেসিং মেটেরিয়ালস ও হিট ফ্লাক্স ইঞ্জিনিয়ারিং</h3>
      <ul>
        <li><strong>ডাইভারটার (Divertor) ও ফার্স্ট ওয়াল মেটেরিয়ালস:</strong> টাংস্টেন ও লিকুইড লিথিয়াম দিয়ে চরম তাপ সহ্যকারী শিল্ড ডিজাইন।</li>
        <li><strong>ট্রিটিয়াম ব্রিডিং ব্ল্যাঙ্কেট:</strong> ফিউশন রিঅ্যাক্টরের ভেতরেই লিথিয়াম থেকে নিজস্ব ট্রিটিয়াম জ্বালানি স্বয়ংক্রিয়ভাবে উৎপাদন।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও বাণিজ্যিক ফিউশন পাওয়ার প্ল্যান্ট (The Future)</h2>
      <p>আমরা ইতিহাসের সেই মাহেন্দ্রক্ষণে দাঁড়িয়ে আছি যখন ফিউশন ল্যাবরেটরি থেকে বাণিজ্যিক গ্রিডে প্রবেশের দ্বারপ্রান্তে:</p>
      <ul>
        <li><strong>ITER মেগা-প্রজেক্ট:</strong> ফ্রান্সে বিশ্বের ৩৫টি দেশের ৩৫ বিলিয়ন ডলারের যৌথ উদ্যোগে বিশ্বের বৃহত্তম ফিউশন রিঅ্যাক্টর কমিশনিং।</li>
        <li><strong>প্রাইভেট ফিউশন বিপ্লব:</strong> Commonwealth Fusion Systems (CFS), Helion Energy ও Tokamak Energy-এর মতো স্টার্টআপগুলো ২০৩০-এর দশকের শুরুতেই গ্রিডে বিদ্যুৎ সরবরাহের লক্ষ্যে কাজ করছে।</li>
        <li><strong>ডিপ স্পেস ফিউশন প্রপালশন:</strong> ফিউশন রকেটের মাধ্যমে মাত্র ৩০ দিনে পৃথিবী থেকে মঙ্গল গ্রহে পৌঁছানোর মিশন।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/physics" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>পদার্থবিজ্ঞান (Physics) - থার্মোনিউক্লিয়ার ফিজিক্স ও ইলেক্ট্রোম্যাগনেটিজম</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও বৈশ্বিক গবেষণাগারসমূহ (Career Opportunities)</h2>
      <p>ফিউশন ইঞ্জিনিয়ারদের জন্য বিশ্বজুড়ে বিলিয়ন ডলার বিনিয়োগের কারণে চাকরির সুযোগ অভাবনীয় গতিতে বাড়ছে:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক ফিউশন প্রতিষ্ঠানসমূহ</h3>
      <ul>
        <li><strong>আন্তর্জাতিক মেগা প্রজেক্ট ও জাতীয় ল্যাব:</strong> ITER Organization (ফ্রান্স), Lawrence Livermore National Laboratory (NIF), Princeton Plasma Physics Laboratory (PPPL), Max Planck Institute for Plasma Physics (Wendelstein 7-X, জার্মানি), UKAEA (Culham Centre for Fusion Energy)।</li>
        <li><strong>শীর্ষ প্রাইভেট ফিউশন কোম্পানি:</strong> Commonwealth Fusion Systems (MIT স্পিন-অফ), Helion Energy (OpenAI এর Sam Altman অর্থায়িত), TAE Technologies, Tokamak Energy, General Fusion।</li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল ভূমিকা ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Plasma Physicist / Fusion Diagnostics Engineer:</strong> বার্ষিক গড় বেতন $১,৪০,০০০ – $২,২০,০০০ মার্কিন ডলার।</li>
        <li><strong>High-Temperature Superconducting Magnet Engineer:</strong> বার্ষিক গড় বেতন $১,৪৫,০০০ – $২,২৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Fusion Reactor Systems Lead:</strong> বার্ষিক $২,৫০,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও সেরা বিশ্ববিদ্যালয়সমূহ</h3>
      <p>যুক্তরাষ্ট্রের MIT (Plasma Science and Fusion Center - PSFC), Princeton University, UC San Diego, University of Wisconsin-Madison; যুক্তরাজ্যের University of Oxford, Imperial College London; এবং ফ্রান্সের École Polytechnique ও Sorbonne University ফিউশন ফিজিক্সে সম্পূর্ণ ফুল-ফান্ডেড পিএইচডি প্রদান করে।</p>
    `
  },
  {
    slug: "space-law-and-planetary-policy",
    title: "স্পেস ল ও গ্লোবাল স্যাটেলাইট রেগুলেশনস (Space Law & Satellite Policy) বিষয় পরিচিতি",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে স্পেস ল ও প্ল্যানেটারি পলিসি</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">মহাকাশের আন্তর্জাতিক চুক্তি, স্যাটেলাইট কক্ষপথ ও রেডিও ফ্রিকোয়েন্সি বরাদ্দ, চাঁদে ও মঙ্গলে খনিজ খনন ও সম্পদ স্বত্বাধিকার আইন, স্পেস ডেব্রিস (মহাকাশ আবর্জনা) নিয়ন্ত্রণ এবং বাণিজ্যিক মহাকাশ পর্যটনের আন্তর্জাতিক আইনবিদ্যা হলো স্পেস ল।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>মহাকাশ এখন আর কেবল সরকারি বৈজ্ঞানিক গবেষণার জায়গা নয়; এটি বিলিয়ন ডলারের বাণিজ্যিক মহাকাশ অর্থনীতিতে (Space Commercialization) রূপান্তরিত হয়েছে। লো-আর্থ অরবিটে স্টারলিংকের হাজার হাজার স্যাটেলাইট ঘুরছে, ব্যক্তিগত কোম্পানি মানুষ নিয়ে মহাকাশ পর্যটনে যাচ্ছে এবং একাধিক দেশ চাঁদের দক্ষিণ মেরুর জল ও মূল্যবান খনিজের ওপর নিয়ন্ত্রণ প্রতিষ্ঠার চেষ্টা করছে।</p>
      <p>মহাকাশে যদি একটি স্যাটেলাইট অন্য দেশের স্যাটেলাইটের সাথে ধাক্কা খায়, তবে আন্তর্জাতিক ক্ষতিপূরণ কে দেবে? চাঁদে কোনো প্রাইভেট কোম্পানি ঘাঁটি বানালে সেই জমির মালিকানা কার হবে? আর মহাকাশে অস্ত্র প্রতিযোগিতা (Space Weaponization) রোধ করার আইনগত ফ্রেমওয়ার্ক কী হবে? এই ধরণের যুগান্তকারী আন্তর্জাতিক আইনি জটিলতা সমাধান এবং বৈশ্বিক স্পেস পলিসি তৈরির জন্যই স্পেস ল পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/law-cu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>আইন বিভাগ (Faculty of Law) - আন্তর্জাতিক আইন ও মানবাধিকার</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (UN Treaties & Space Legal Modules)</h2>
      <p>স্পেস ল আন্তর্জাতিক আইন, ভূরাজনীতি, টেলিকম রেগুলেশন এবং মহাকাশ অর্থনীতির এক অনন্য ইন্টারডিসিপ্লিনারি মিশ্রণ:</p>

      <h3 class="review-h3">ক. জাতিসংঘের পঞ্চ মহাকাশ চুক্তি (The UN Core Space Treaties)</h3>
      <ul>
        <li><strong>আউটার স্পেস ট্রিটি (Outer Space Treaty, 1967):</strong> মহাকাশ কোনো একক দেশের সার্বভৌম মালিকানাধীন হতে পারবে না এবং মহাকাশে গণবিধ্বংসী অস্ত্র নিষিদ্ধের মূল ভিত্তি।</li>
        <li><strong>স্পেস লায়াবিলিটি কনভেনশন (Liability Convention, 1972):</strong> রকেট বা স্যাটেলাইটের ধ্বংসাবশেষে পৃথিবীতে বা মহাকাশে অন্য দেশের ক্ষতি হলে আন্তর্জাতিক ক্ষতিপূরণ নির্ধারণ।</li>
        <li><strong>রেজিস্ট্রেশন কনভেনশন ও রেসকিউ এগ্রিমেন্ট:</strong> মহাকাশযানের নিবন্ধন এবং বিপদে পড়া নভোচারীদের আন্তর্জাতিক উদ্ধার নীতি।</li>
        <li><strong>মুন এগ্রিমেন্ট ও আর্টেমিস অ্যাকর্ডস (Artemis Accords):</strong> চাঁদে ও অন্যান্য গ্রহ-উপগ্রহে আন্তর্জাতিক বৈজ্ঞানিক সহযোগিতা ও সম্পদ আহরণ প্রটোকল।</li>
      </ul>

      <h3 class="review-h3">খ. স্যাটেলাইট স্পেকট্রাম ও অরবিটাল স্লট রেগুলেশনস</h3>
      <ul>
        <li><strong>আইটিইউ (ITU - International Telecommunication Union) রেগুলেশনস:</strong> জিওস্টেশনারি কক্ষপথ (GEO) ও রেডিও ফ্রিকোয়েন্সি ব্যান্ডের আন্তর্জাতিক বরাদ্দ ও পাইরেসি রোধ।</li>
        <li><strong>ন্যাশনাল স্পেস লাইসেন্সিং (FAA / FCC):</strong> বাণিজ্যিক রকেট লঞ্চ এবং লো-আর্থ অরবিট মেগা-কনস্টেলেশনের সরকারি লাইসেন্সিং প্রক্রিয়া।</li>
      </ul>

      <h3 class="review-h3">গ. স্পেস ডেব্রিস মিটিগেশন ও স্পেস ট্রাফিক ম্যানেজমেন্ট</h3>
      <ul>
        <li><strong>কেসলার সিন্ড্রোম (Kessler Syndrome) প্রতিরোধ:</strong> মেয়াদোত্তীর্ণ স্যাটেলাইট কক্ষপথ থেকে সরিয়ে ফেলার বাধ্যতামূলক আন্তর্জাতিক আইন।</li>
        <li><strong>মহাকাশ ইন্স্যুরেন্স ও কমার্শিয়াল কন্ট্রাক্ট ল:</strong> স্যাটেলাইট উৎক্ষেপণ ব্যর্থতার শতকোটি ডলারের বীমা বিরোধ নিষ্পত্তি।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও বাংলাদেশের স্যাটেলাইট নীতিনির্ধারণ (The Future)</h2>
      <p>বঙ্গবন্ধু স্যাটেলাইট-১ এর সফল উৎক্ষেপণ এবং বঙ্গবন্ধু স্যাটেলাইট-২ ও সাবমেরিন কেবল সুরক্ষার মতো কৌশলগত ক্ষেত্রে বাংলাদেশের জন্যও দক্ষ স্পেস ল বিশেষজ্ঞের প্রয়োজনীয়তা ক্রমশ বাড়ছে:</p>
      <ul>
        <li><strong>লুনার ইকোনমি ও মাইনিং ল:</strong> চাঁদের হিলিয়াম-৩ ও বিরল মৃত্তিকা খনিজ উত্তোলনে বেসরকারি কোম্পানির আন্তর্জাতিক লাইসেন্সিং গাইডলাইন।</li>
        <li><strong>স্পেস স্টেশন ও অ্যাস্ট্রোনট সিটিজেনশিপ:</strong> মহাকাশ স্টেশনে মানব সন্তানের জন্ম হলে তার নাগরিকত্ব ও শ্রম আইন নির্ধারণ।</li>
        <li><strong>মহাকাশ সাইবার নিরাপত্তা ও স্পেস জ্যামিং আইন:</strong> স্যাটেলাইট সিগন্যাল হ্যাকিং ও স্পেস জ্যামিংয়ের বিরুদ্ধে আন্তর্জাতিক জুরিসডিকশন।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/international-relations-ir-cu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>আন্তর্জাতিক সম্পর্ক (International Relations - IR) - গ্লোবাল ডিপ্লোম্যাসি ও ভূরাজনীতি</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক চাকরির দিগন্ত (Career Opportunities)</h2>
      <p>জাতিসংঘ, জাতীয় মহাকাশ কমিশন এবং স্যাটেলাইট অপারেটরদের জন্য স্পেস ল এক্সপার্ট অপরিহার্য:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক প্রতিষ্ঠানসমূহ</h3>
      <ul>
        <li><strong>জাতিসংঘ ও আন্তর্জাতিক সংস্থা:</strong> UN Office for Outer Space Affairs (UNOOSA - Vienna), ITU (Geneva), European Space Policy Institute (ESPI)।</li>
        <li><strong>আন্তর্জাতিক স্পেস এজেন্সি ও রেগুলেটর:</strong> NASA Office of the General Counsel, ESA Legal Affairs, US Federal Communications Commission (FCC - Space Bureau)।</li>
        <li><strong>কমার্শিয়াল স্পেস জায়ান্টস:</strong> SpaceX Legal Counsel, Blue Origin, OneWeb, SES Satellites, Intelsat, Viasat, প্লাস শীর্ষ আন্তর্জাতিক ল ফার্ম (যেমন: Hogan Lovells, Milbank, DLA Piper - Space Law Practice)।</li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল পদবী ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Space & Satellite Regulatory Counsel:</strong> বার্ষিক গড় বেতন $১,৩৫,০০০ – $২,১৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Space Policy Analyst / Diplomat:</strong> বার্ষিক গড় বেতন $১,১৫,০০০ – $১,৭০,০০০ মার্কিন ডলার।</li>
        <li><strong>Commercial Space Contracts Partner:</strong> শীর্ষ আন্তর্জাতিক ল ফার্মে পার্টনার হিসেবে বার্ষিক $৩,০০,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও বিশ্বের সেরা স্পেস ল ইনস্টিটিউট</h3>
      <p>কানাডার McGill University (Institute of Air and Space Law - বিশ্বের সবচেয়ে প্রাচীন ও সেরা স্পেস ল ইনস্টিটিউট); নেদারল্যান্ডসের Leiden University (International Institute of Air and Space Law); যুক্তরাষ্ট্রের University of Mississippi School of Law (National Center for Remote Sensing, Air, and Space Law); এবং যুক্তরাজ্যের University of Nebraska Space Law প্রোগ্রামে বিশ্বসেরা মাস্টার্স অব লজ (LL.M) ও ফেলোশিপ উন্মুক্ত।</p>
    `
  }
];

reviewsData.forEach(item => {
  const filePath = path.join(REVIEWS_DIR, `${item.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(item, null, 2), 'utf-8');
});

console.log(`Successfully generated ${reviewsData.length} ultra-detailed 700+ words reviews for Session 3!`);
