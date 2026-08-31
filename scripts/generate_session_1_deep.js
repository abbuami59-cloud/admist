const fs = require('fs');
const path = require('path');

const REVIEWS_DIR = path.join(process.cwd(), 'data', 'reviews');

if (!fs.existsSync(REVIEWS_DIR)) {
  fs.mkdirSync(REVIEWS_DIR, { recursive: true });
}

const reviewsData = [
  {
    slug: "quantum-computing-and-information-science",
    title: "কোয়ান্টাম কম্পিউটিং ও ইনফরমেশন সায়েন্স (Quantum Computing & Information Science) পূর্ণাঙ্গ গাইডলাইন",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে কোয়ান্টাম কম্পিউটিং ও ইনফরমেশন সায়েন্স</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">কোয়ান্টাম মেকানিক্সের সুপারপজিশন ও এনট্যাঙ্গেলমেন্ট ব্যবহার করে ক্লাসিক্যাল কম্পিউটারের নাগালের বাইরের অতি-জটিল গাণিতিক হিসাব মিলিসেকেন্ডে সমাধান করার যুগান্তকারী বিজ্ঞান হলো কোয়ান্টাম কম্পিউটিং। এটি একবিংশ শতাব্দীর সবচেয়ে সম্ভাবনাময় ও বৈপ্লবিক ফ্রন্টিয়ার টেকনোলজি।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>আধুনিক ক্লাসিক্যাল কম্পিউটার (যা বাইনারি বিট ০ এবং ১ দিয়ে চলে) সিলিকন চিপের ফিজিক্যাল লিমিটেশনে পৌঁছে যাচ্ছে। মুরস ল (Moore's Law) প্রায় সমাপ্তির পথে। ড্রাগ ডিসকভারিতে কোটি কোটি মলিকুলার স্ট্রাকচার সিমুলেট করা, গ্লোবাল ক্লাইমেট মডেলিং, অত্যন্ত জটিল ফাইন্যান্সিয়াল পোর্টফোলিও অপটিমাইজেশন কিংবা আধুনিক ক্রিপ্টোগ্রাফি ব্রেক করার মতো সমস্যাগুলো সমাধান করতে প্রচলিত সুপারকম্পিউটারের শত শত বছর সময় লেগে যাবে।</p>
      <p>এই ধরণের মহাজাগতিক ও আণবিক জটিল হিসাব চোখের পলকে সম্পন্ন করার জন্যই কোয়ান্টাম কম্পিউটিং ও ইনফরমেশন সায়েন্স পড়ানো হয়। যেখানে সাধারণ কম্পিউটার তথ্যের একক হিসেবে 'বিট' (Bit) ব্যবহার করে, সেখানে কোয়ান্টাম কম্পিউটার 'কুবিট' (Qubit - Quantum Bit) ব্যবহার করে। কোয়ান্টাম সুপারপজিশনের (Superposition) কারণে একটি কুবিট একই সাথে ০ এবং ১ উভয় অবস্থায় থাকতে পারে এবং কোয়ান্টাম এনট্যাঙ্গেলমেন্টের (Entanglement) মাধ্যমে একাধিক কুবিট একে অপরের সাথে অলৌকিকভাবে সংযুক্ত হয়ে বিপুল প্যারালাল প্রসেসিং পাওয়ার তৈরি করে।</p>
      <p>এই ডিসিপ্লিনটির মূল লক্ষ্য হলো পদার্থবিজ্ঞানের কোয়ান্টাম নীতি এবং কম্পিউটার সায়েন্সের অ্যালগরিদমিক চিন্তাকে একত্রিত করে ভবিষ্যতের সুপার-ইন্টেলিজেন্ট কম্পিউটিং প্ল্যাটফর্ম গড়ে তোলা।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/physics" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>পদার্থবিজ্ঞান (Physics) - কোয়ান্টাম মেকানিক্স ও থিওরিটিক্যাল ফিজিক্সের ভিত্তি</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (What is Taught in the Curriculum)</h2>
      <p>কোয়ান্টাম কম্পিউটিং ও ইনফরমেশন সায়েন্স একটি অত্যন্ত গভীর ইন্টারডিসিপ্লিনারি বিষয়, যা ফিজিক্স, গণিত, ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং এবং কম্পিউটার সায়েন্সের এক অপূর্ব সমন্বয়। এর চার বছরের স্নাতক ও স্নাতকোত্তর পাঠ্যক্রমে নিম্নোক্ত মূল ক্ষেত্রসমূহ পড়ানো হয়:</p>
      
      <h3 class="review-h3">ক. কোয়ান্টাম মেকানিক্স ও ম্যাথমেটিক্যাল ফাউন্ডেশনস</h3>
      <ul>
        <li><strong>হিলবার্ট স্পেস ও লিনিয়ার অ্যালজেব্রা:</strong> ব্রাকেট নোটেশন (Dirac Bra-ket), অর্থোগোনাল ভেক্টর, হারমিশিয়ান অপারেটর ও ইউনিটরি ম্যাট্রিক্স।</li>
        <li><strong>কোয়ান্টাম স্টেট ও সুপারপজিশন:</strong> ব্লোচ স্ফিয়ার (Bloch Sphere) জিওমেট্রি এবং একাধিক কুবিটের স্টেট প্রিপারেশন।</li>
        <li><strong>কোয়ান্টাম মেজারমেন্ট ও কলাপ্স থিওরি:</strong> ভন নিউম্যান মেজারমেন্ট এবং ডিকোহেরেন্স (Decoherence) ফেনোমেনা।</li>
      </ul>

      <h3 class="review-h3">খ. কোয়ান্টাম অ্যালগরিদম ও সার্কিট ডিজাইন</h3>
      <ul>
        <li><strong>শোরস অ্যালগরিদম (Shor's Algorithm):</strong> পলিনোমিয়াল টাইমে প্রাইম ফ্যাক্টরাইজেশন (যা দিয়ে বর্তমান RSA এনক্রিপশন ব্রেক করা সম্ভব)।</li>
        <li><strong>গ্রোভার্স সার্চ অ্যালগরিদম (Grover's Algorithm):</strong> আনসর্টেড ডাটাবেস সার্চে কোয়ান্টাম স্পিডআপ (O(√N))।</li>
        <li><strong>কোয়ান্টাম ফুরিয়ার ট্রান্সফর্ম (QFT) ও ফেজ এস্টিমেশন:</strong> কোয়ান্টাম সিগন্যাল ও ফ্রিকোয়েন্সি অ্যানালাইসিস।</li>
        <li><strong>VQE (Variational Quantum Eigensolver) ও QAOA:</strong> নিয়ার-টার্ম কোয়ান্টাম অপটিমাইজেশন অ্যালগরিদম।</li>
      </ul>

      <h3 class="review-h3">গ. কোয়ান্টাম হার্ডওয়্যার আর্কিটেকচার ও ফিজিক্যাল কুবিট ফেব্রিকেশন</h3>
      <ul>
        <li><strong>সুপারকন্ডাক্টিং কুবিটস (Superconducting Transmon Qubits):</strong> ক্রায়োজেনিক ফ্রিজে চরম শূন্য তাপমাত্রায় (15 মিলিকেলভিন) সুপারকন্ডাক্টিং জংশন পরিচালনা (যেমন IBM ও Google Quantum AI ব্যবহার করে)।</li>
        <li><strong>ট্র্যাপড আয়ন ও নিউট্রাল অ্যাটম টেকনোলজি:</strong> লেজার বিম দিয়ে আয়ন ও পরমাণুকে শূন্যে ট্র্যাপ করে কুবিট কন্ট্রোল (IonQ, QuEra)।</li>
        <li><strong>ফটোনিক কোয়ান্টাম কম্পিউটিং:</strong> আলোর ফোটন কণা দিয়ে রুম টেম্পারেচারে কোয়ান্টাম লজিক গেট তৈরি (Xanadu, PsiQuantum)।</li>
        <li><strong>কোয়ান্টাম এরর কারেকশন (QEC):</strong> সারফেস কোড ও টপোলজিক্যাল মেথড দিয়ে ফল্ট-টলারেন্ট কোয়ান্টাম কম্পিউটার নির্মাণ।</li>
      </ul>

      <h3 class="review-h3">ঘ. কোয়ান্টাম সফটওয়্যার প্রোগ্রামিং ল্যাব</h3>
      <ul>
        <li><strong>Qiskit (IBM), Cirq (Google) ও PennyLane:</strong> ক্লাউডে সরাসরি আসল কোয়ান্টাম প্রসেসরে রিয়েল কুবিট সার্কিট রান করা।</li>
        <li><strong>কোয়ান্টাম মেশিন লার্নিং (QML):</strong> কোয়ান্টাম নিউরাল নেটওয়ার্ক ও কোয়ান্টাম কার্নেল মেথডস।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও বৈশ্বিক প্রভাব (The Future of the Subject)</h2>
      <p>কোয়ান্টাম কম্পিউটিং হলো আগামী ২০-৩০ বছরের বৈশ্বিক পরাশক্তি নির্ধারণের প্রধান প্রযুক্তি। বিশ্ব এখন NISQ (Noisy Intermediate-Scale Quantum) এরা পার হয়ে ফল্ট-টলারেন্ট কোয়ান্টাম কম্পিউটারের দিকে ধাবিত হচ্ছে।</p>
      <p>এর ভবিষ্যৎ প্রভাব পড়বে একাধিক মহাগুরুত্বপূর্ণ ক্ষেত্রে:</p>
      <ul>
        <li><strong>ড্রাগ ডিসকভারি ও ম্যাটেরিয়াল ইনোভেশন:</strong> প্রোটিন ফোল্ডিং এবং জটিল রাসায়নিক বন্ধন নিখুঁতভাবে সিমুলেট করে ক্যান্সার, আলঝেইমারসের অ্যান্টিবডি আবিষ্কার এবং সুপার-এফিশিয়েন্ট ব্যাটারি ডিজাইন কয়েক দিনে নামিয়ে আনা সম্ভব হবে।</li>
        <li><strong>পোস্ট-কোয়ান্টাম ক্রিপ্টোগ্রাফি (PQC):</strong> কোয়ান্টাম কম্পিউটার প্রচলিত এনক্রিপশন ভেঙে ফেলতে পারে বিধায় বিশ্বব্যাপী নতুন ল্যাটিস-ভিত্তিক পোস্ট-কোয়ান্টাম সিকিউরিটি অবকাঠামো তৈরি হচ্ছে।</li>
        <li><strong>কোয়ান্টাম ইন্টারনেট ও কোয়ান্টাম কি ডিস্ট্রিবিউশন (QKD):</strong> হ্যাক-প্রুফ যোগাযোগ ব্যবস্থা, যেখানে ফিজিক্সের নিয়মের কারণেই কোনো তথ্য চুরি করা অসম্ভব।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/cse-ruet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE) - সফটওয়্যার আর্কিটেকচার ও কোডিং</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও উচ্চশিক্ষার সুযোগ (Career Opportunities & Research Scope)</h2>
      <p>কোয়ান্টাম কম্পিউটিংয়ে দক্ষ গবেষক ও প্রকৌশলীর বিশ্বব্যাপী তীব্র ঘাটতি রয়েছে। ফলে এই বিষয়ের গ্র্যাজুয়েটরা বিশ্ববাজারে সর্বোচ্চ প্রারম্ভিক বেতন ও সম্মানের অধিকারী হন।</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক নিয়োগকারী সংস্থা</h3>
      <ul>
        <li><strong>টেক জায়ান্টস:</strong> Google Quantum AI (Santa Barbara), IBM Quantum, Microsoft Quantum (Station Q), Amazon Braket (AWS)।</li>
        <li><strong>বিশেষায়িত কোয়ান্টাম স্টার্টআপ:</strong> Rigetti Computing, IonQ, D-Wave Systems, Xanadu, PsiQuantum, Quantinuum।</li>
        <li><strong>ফাইন্যান্সিয়াল ও ডিফেন্স জায়ান্ট:</strong> JPMorgan Chase, Goldman Sachs, Lockheed Martin, NASA Quantum Artificial Intelligence Laboratory (QuAIL)।</li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল পজিশন ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Quantum Algorithm Engineer / Quantum Software Developer:</strong> বার্ষিক গড় বেতন $১,৪০,০০০ – $২,২০,০০০ মার্কিন ডলার।</li>
        <li><strong>Quantum Hardware Scientist / Cryogenic Engineer:</strong> বার্ষিক গড় বেতন $১,৬০,০০০ – $২,৫০,০০০ মার্কিন ডলার।</li>
        <li><strong>Post-Quantum Cryptographer:</strong> সাইবার সিকিউরিটি স্পেশালিস্ট হিসেবে বার্ষিক $১,৫০,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও পূর্ণ-অর্থায়িত স্কলারশিপ</h3>
      <p>যুক্তরাষ্ট্রের MIT, Stanford, Harvard, UC Berkeley, Caltech; যুক্তরাজ্যের University of Oxford, Cambridge; কানাডার Waterloo (Institute for Quantum Computing - IQC); এবং জার্মানির Max Planck Institute-এ কোয়ান্টাম ইনফরমেশনে ১০০% ফুল-ফান্ডেড পিএইচডি ও পোস্ট-ডক্টরাল ফেলোশিপ পাওয়া যায়।</p>
    `
  },
  {
    slug: "aerospace-and-astronautical-engineering",
    title: "অ্যারোস্পেস ও অ্যাস্ট্রোনটিক্যাল ইঞ্জিনিয়ারিং (Aerospace & Astronautical Engineering) পূর্ণাঙ্গ ক্যারিয়ার গাইড",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে অ্যারোস্পেস ও অ্যাস্ট্রোনটিক্যাল ইঞ্জিনিয়ারিং</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">বায়ুমণ্ডলে উড্ডয়নশীল আধুনিক বিমান, সুপারসনিক জেট এবং বায়ুমণ্ডলের বাইরে মহাকাশযান, রকেট, স্যাটেলাইট ও ডিপ-স্পেস প্রোব ডিজাইন, সিমুলেশন ও পরিচালনার সর্বাধুনিক প্রকৌশল শাখা হলো অ্যারোস্পেস ও অ্যাস্ট্রোনটিক্যাল ইঞ্জিনিয়ারিং।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>মানুষের আকাশ জয় এবং মহাবিশ্ব অনুসন্ধানের অদম্য আকাঙ্ক্ষা থেকে এই বিষয়ের জন্ম। একদিকে আধুনিক বেসামরিক বিমান চলাচল বৈশ্বিক যোগাযোগ ও অর্থনীতির প্রধান চালিকাশক্তি; অন্যদিকে মহাকাশ অর্থনীতি (Space Economy), স্যাটেলাইট যোগাযোগ, রিমোট সেন্সিং, ক্ষেপণাস্ত্র প্রতিরক্ষা ব্যবস্থা এবং চাঁদ ও মঙ্গলে মানব বসতি স্থাপনের মিশনসমূহ এখন বিশ্বের শীর্ষ অগ্রাধিকার।</p>
      <p>একটি যাত্রীবাহী বিমান কীভাবে শব্দের চেয়ে দ্রুত গতিতে আকাশে ভাসবে, চরম তাপমাত্রায় রকেটের ইঞ্জিন কীভাবে অক্ষত থাকবে, মহাকাশের চরম ভ্যাকুয়াম ও রেডিয়েশনে স্যাটেলাইট কীভাবে নিখুঁতভাবে পৃথিবী প্রদক্ষিণ করবে—এই জটিল পদার্থবৈজ্ঞানিক চ্যালেঞ্জগুলো সমাধান করার জন্য অ্যারোস্পেস অ্যান্ড অ্যাস্ট্রোনটিক্যাল ইঞ্জিনিয়ারিং পড়ানো হয়।</p>
      <p>এই বিষয়টি শিক্ষার্থীদের এমনভাবে দক্ষ করে তোলে যাতে তারা চরম প্রতিকূল পরিবেশে কাজ করার উপযোগী হাই-পারফরম্যান্স মেকানিক্যাল ও ইলেকট্রনিক সিস্টেম ডিজাইন করতে পারে।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/me-ruet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>মেকানিক্যাল ইঞ্জিনিয়ারিং (Mechanical Engineering) - থার্মোডাইনামিক্স ও ফ্লুইড মেকানিক্স</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (What is Taught in the Curriculum)</h2>
      <p>অ্যারোস্পেস ইঞ্জিনিয়ারিং প্রধানত দুটি ভাগে বিভক্ত: <strong>অ্যারোনটিক্স (বায়ুমণ্ডলের ভেতর বিমান বিদ্যা)</strong> এবং <strong>অ্যাস্ট্রোনটিক্স (মহাকাশযান ও রকেট বিদ্যা)</strong>। চার বছরের স্নাতক পাঠ্যক্রমে অন্তর্ভুক্ত মূল বিষয়সমূহ:</p>

      <h3 class="review-h3">ক. অ্যারোডাইনামিক্স ও ফ্লুইড মেকানিক্স (Aerodynamics & Compressible Flow)</h3>
      <ul>
        <li><strong>সাবসনিক ও সুপারসনিক অ্যারোডাইনামিক্স:</strong> এয়ারফয়েল ডিজাইন, লিফট ও ড্র্যাগ ফোর্স ক্যালকুলেশন, বাউন্ডারি লেয়ার থিওরি ও শকওয়েভ অ্যানালাইসিস।</li>
        <li><strong>কম্পিউটেশনাল ফ্লুইড ডাইনামিক্স (CFD):</strong> ANSYS Fluent ও OpenFOAM দিয়ে বিমানের ডানা ও রকেটের বডির চারপাশে বাতাসের ঘর্ষণ সিমুলেশন।</li>
        <li><strong>হিপারসনিক ফ্লাইট ডায়নামিক্স:</strong> শব্দের গতির ৫ গুণ (ম্যাক ৫+) বেশি গতিতে বায়ুর চরম আণবিক বিয়োজন ও থার্মাল ইফেক্ট।</li>
      </ul>

      <h3 class="review-h3">খ. প্রপালশন সিস্টেম ও রকেট্রি (Propulsion & Rocket Engines)</h3>
      <ul>
        <li><strong>এয়ার-ব্রিদিং জেট ইঞ্জিন:</strong> টার্বোজেট, টার্বোফ্যান, র‍্যামজেট ও স্ক্র্যামজেট ইঞ্জিনের থার্মোডাইনামিক সাইকেল।</li>
        <li><strong>রকেট প্রপালশন:</strong> সলিড ও লিকুইড প্রপেলান্ট রকেট ইঞ্জিন, ক্রায়োজেনিক ইঞ্জিন (লিকুইড হাইড্রোজেন/অক্সিজেন) এবং ইলেকট্রিক আয়ন থ্রাস্টার।</li>
        <li><strong>কম্বাশন চেম্বার ডিজাইন ও নজল ফ্লো:</strong> ডি লাভাল নজল (De Laval Nozzle) দিয়ে সুপারসনিক গ্যাস এক্সহস্ট তৈরি।</li>
      </ul>

      <h3 class="review-h3">গ. অ্যাস্ট্রোডাইনামিক্স ও অরবিটাল মেকানিক্স (Astrodynamics & Orbital Mechanics)</h3>
      <ul>
        <li><strong>কেপলারিয়ান অরবিট ও টু-বডি প্রবলেম:</strong> উপবৃত্তাকার কক্ষপথ, লো-আর্থ অরবিট (LEO), জিওস্টেশনারি অরবিট (GEO) গণনা।</li>
        <li><strong>হোহম্যান ট্রান্সফার ও গ্র্যাভিটি অ্যাসিস্ট:</strong> ন্যূনতম জ্বালানি খরচে এক গ্রহ থেকে অন্য গ্রহে মহাকাশযানের যাত্রা পরিকল্পনা।</li>
        <li><strong>স্যাটেলাইট অ্যাটিটিউড ডিটারমিনেশন অ্যান্ড কন্ট্রোল (ADCS):</strong> জাইরোস্কোপ ও রিঅ্যাকশন হুইল দিয়ে মহাকাশে স্যাটেলাইটের কোণ নিয়ন্ত্রণ।</li>
      </ul>

      <h3 class="review-h3">ঘ. অ্যারোস্পেস স্ট্রাকচার্স ও মেটেরিয়ালস</h3>
      <ul>
        <li><strong>লাইটওয়েট কম্পোজিট মেটেরিয়ালস:</strong> কার্বন ফাইবার রিইনফোর্সড পলিমার (CFRP), টাইটানিয়াম অ্যালয় ও হিট শিল্ড সিরামিক টাইলস।</li>
        <li><strong>অ্যাভিওনিক্স ও ফ্লাইট কন্ট্রোল:</strong> ফ্লাই-বাই-ওয়্যার সিস্টেম, অটো-পাইলট ও স্যাটেলাইট টেলিম্যাট্রি।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা ও বৈশ্বিক মহাকাশ অর্থনীতি (The Future of Aerospace)</h2>
      <p>বর্তমানে আমরা বাণিজ্যিক মহাকাশ যুগের (NewSpace Era) মধ্য দিয়ে যাচ্ছি। মহাকাশ খাতের বাজার আগামী দশকে ১ ট্রিলিয়ন ডলার ছাড়িয়ে যাবে বলে পূর্বাভাস দেওয়া হয়েছে।</p>
      <ul>
        <li><strong>পুনর্ব্যবহারযোগ্য রকেট ও ডিপ স্পেস ট্রাভেল:</strong> স্পেসএক্সের স্টারশিপ (Starship)-এর মতো মেগা রকেটের মাধ্যমে মঙ্গল গ্রহে মানব মিশন এবং স্পেস ট্যুরিজমের দ্রুত প্রসার।</li>
        <li><strong>মেগা স্যাটেলাইট কনস্টেলেশন:</strong> স্টারলিংক ও কুইপারের মতো হাজার হাজার লো-আর্থ অরবিট স্যাটেলাইটের মাধ্যমে গ্লোবাল হাই-স্পিড ব্রডব্যান্ড ইন্টারনেট নিশ্চিতকরণ।</li>
        <li><strong>অ্যাস্টেরয়েড মাইনিং ও লুনার বেস:</strong> চাঁদের দক্ষিণ মেরুতে আর্টেমিস মিশন এবং মহাজাগতিক উল্কাপিণ্ড থেকে প্লাটিনাম ও বিরল খনিজ উত্তোলন।</li>
        <li><strong>ইলেকট্রিক এভিয়েশন ও আরবান এয়ার মোবিলিটি (eVTOL):</strong> কার্বনমুক্ত পরিবেশবান্ধব ইলেকট্রিক যাত্রীবাহী ড্রোন ও এয়ার ট্যাক্সি।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/material-science-and-engineering-mse" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>ম্যাটেরিয়াল সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (MSE) - অ্যাডভান্সড এরোস্পেস অ্যালয় ও কম্পোজিট</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও বৈশ্বিক সুযোগ (Global Careers & Top Recruiters)</h2>
      <p>অ্যারোস্পেস ইঞ্জিনিয়ারদের জন্য বিশ্বজুড়ে অত্যন্ত মর্যাদাপূর্ণ ও আকর্ষণীয় ক্যারিয়ারের সুযোগ রয়েছে:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক প্রতিষ্ঠান ও স্পেস এজেন্সি</h3>
      <ul>
        <li><strong>স্পেস কোম্পানি:</strong> SpaceX, Blue Origin, Rocket Lab, Virgin Galactic, Sierra Space।</li>
        <li><strong>বিমান ও ডিফেন্স ম্যানুফ্যাকচারার:</strong> Boeing, Airbus, Lockheed Martin, Northrop Grumman, Rolls-Royce Aerospace।</li>
        <li><strong>জাতীয় ও আন্তর্জাতিক মহাকাশ গবেষণা সংস্থা:</strong> NASA, ESA (ইউরোপিয়ান স্পেস এজেন্সি), JAXA (জাপান), ISRO।</li>
        <li><strong>স্যাটেলাইট অপারেটর ও টেলিকম:</strong> SES, Intelsat, Eutelsat, বাংলাদেশ স্যাটেলাইট কোম্পানি লিমিটেড (বঙ্গবন্ধু স্যাটেলাইট-১ ও ২ পরিচালনা)।</li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল ভূমিকা ও স্যালারি প্যাকেজ</h3>
      <ul>
        <li><strong>Flight Dynamics & Trajectory Engineer:</strong> বার্ষিক গড় বেতন $১,২০,০০০ – $১,৯০,০০০ মার্কিন ডলার।</li>
        <li><strong>Propulsion / Rocket Engineer:</strong> বার্ষিক গড় বেতন $১,৩৫,০০০ – $২,১০,০০০ মার্কিন ডলার।</li>
        <li><strong>CFD Aerodynamicist:</strong> বিমান ও ফর্মুলা ১ রেসিং কার ডিজাইন কনসালট্যান্ট।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও স্কলারশিপ</h3>
      <p>যুক্তরাষ্ট্রের MIT, Purdue, Georgia Tech, Caltech, Stanford; যুক্তরাজ্যের Cranfield University, Imperial College London; ফ্রান্সের ISAE-SUPAERO এবং জার্মানির TU Munich ও TU Delft-এ অ্যারোস্পেস ইঞ্জিনিয়ারিংয়ে ফুল ফান্ডেড মাস্টার্স ও পিএইচডি স্কলারশিপ উন্মুক্ত।</p>
    `
  },
  {
    slug: "genomic-data-science-and-bioinformatics",
    title: "জিনোমিক ডেটা সায়েন্স ও প্রিসিশন মেডিসিন (Genomic Data Science & Precision Medicine) Subject Review",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে জিনোমিক ডেটা সায়েন্স</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">মানুষ ও অন্যান্য জীবের সম্পূর্ণ ডিএনএ কোড (৩০০ কোটি বেস পেয়ার) নেক্সট-জেনারেশন সিকোয়েন্সিংয়ের মাধ্যমে পাঠ করে বিগ ডেটা ও কৃত্রিম বুদ্ধিমত্তা দিয়ে বিশ্লেষণ করার বৈপ্লবিক বিজ্ঞান হলো জিনোমিক ডেটা সায়েন্স। এটি ব্যক্তিকেন্দ্রিক ওষুধ ও ক্যান্সার থেরাপির প্রাণকেন্দ্র।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>এক শতাব্দী ধরে চিকিৎসা বিজ্ঞানে 'একই ওষুধ সবার জন্য' (One-size-fits-all) নীতি অনুসরণ করা হয়েছে। কিন্তু বাস্তবে প্রতিটি মানুষের জিনোম সিকোয়েন্স আলাদা, ফলে একই ক্যান্সারের ওষুধ একজন রোগীর শরীরে জাদুর মতো কাজ করলেও অন্য রোগীর শরীরে মারাত্মক বিষক্রিয়া সৃষ্টি করতে পারে।</p>
      <p>হিউম্যান জিনোম প্রজেক্টের পর আধুনিক নেক্সট-জেনারেশন সিকোয়েন্সিং (NGS) প্রযুক্তির কল্যাণে একেকটি সিকোয়েন্সিং রানে টেরাবাইট পরিমাণের জিনোমিক ডেটা উৎপন্ন হচ্ছে। এই বিপুল ডিএনএ ও আরএনএ বিগ ডেটা বিশ্লেষণ করে রোগের সঠিক কারণ নির্ণয় করা, বংশগত রোগ প্রতিরোধ করা এবং নির্দিষ্ট রোগীর জিনের মিউটেশন অনুযায়ী ব্যক্তিকেন্দ্রিক ওষুধ (Personalized/Precision Medicine) ডিজাইন করার জন্য জিনোমিক ডেটা সায়েন্স পড়ানো হয়।</p>
      <p>এই বিষয়টির মাধ্যমে শিক্ষার্থীরা জানতে পারে কীভাবে কম্পিউটেশনাল অ্যালগরিদম ও মলিকুলার বায়োলজির মিলনে চিকিৎসাবিজ্ঞানকে প্রিভেন্টিভ এবং প্রিসিশন পর্যায়ে উন্নীত করা যায়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/genetic-engineering-and-biotechnology-geb-cu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>জেনেটিক ইঞ্জিনিয়ারিং অ্যান্ড বায়োটেকনোলজি (GEB) - জিন এডিটিং ও রিকম্বিন্যান্ট ডিএনএ</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Core Curriculum & Computational Labs)</h2>
      <p>জিনোমিক ডেটা সায়েন্সের কারিকুলামটি বায়োলজিক্যাল সায়েন্স, স্ট্যাটিস্টিক্স ও হাই-পারফরম্যান্স কম্পিউটিংয়ের এক শক্তিশালী ভারসাম্য:</p>

      <h3 class="review-h3">ক. জিনোমিক্স ও মলিকুলার জেনেটিক্স ফাউন্ডেশন</h3>
      <ul>
        <li><strong>জিনোম স্ট্রাকচার ও এপিজেনেটিক্স:</strong> এক্সোম (Exome), ইন্ট্রন-এক্সন স্প্লাইসিং, ডিএনএ মিথাইলেশন ও হিস্টোন মডিফিকেশন।</li>
        <li><strong>ভ্যারিয়েন্ট অ্যানালাইসিস:</strong> সিঙ্গেল নিউক্লিওটাইড পলিমরফিজম (SNP), ইনসার্শন-ডিলিশন (InDels) এবং স্ট্রাকচারাল ভ্যারিয়েশন (CNV)।</li>
        <li><strong>ট্রান্সক্রিপ্টোমিক্স ও সিঙ্গেল-সেল আরএনএ সিকোয়েন্সিং (scRNA-seq):</strong> পৃথক পৃথক কোষের জিন এক্সপ্রেশন প্যাটার্ন নিরূপণ।</li>
      </ul>

      <h3 class="review-h3">খ. বায়োইনফরমেটিক্স অ্যালগরিদম ও ডেটা পাইপলাইন</h3>
      <ul>
        <li><strong>সিকোয়েন্স অ্যালাইনমেন্ট অ্যালগরিদম:</strong> নীডলম্যান-উঞ্চ (Needleman-Wunsch), স্মিথ-ওয়াটারম্যান এবং বাউটি (Bowtie/BWA)।</li>
        <li><strong>NGS ডেটা প্রসেসিং পাইপলাইন:</strong> FASTQ কোয়ালিটি কন্ট্রোল (FastQC), SAM/BAM ফাইল প্রসেসিং এবং GATK (Genome Analysis Toolkit) দিয়ে ভ্যারিয়েন্ট কলিং।</li>
        <li><strong>ফাইলোজেনেটিক্স ও পপুলেশন জেনেটিক্স:</strong> বিবর্তনীয় ইতিহাস ও মানব মাইগ্রেশন রিকনস্ট্রাকশন।</li>
      </ul>

      <h3 class="review-h3">গ. মেশিন লার্নিং ও প্রিসিশন থেরাপিউটিক্স</h3>
      <ul>
        <li><strong>ডিপ লার্নিং ইন জিনোমিক্স:</strong> AlphaFold (প্রোটিন স্ট্রাকচার প্রেডিকশন), ডিপসি (DeepSEA) দিয়ে নন-কোডিং ডিএনএ মিউটেশনের ক্ষতিকর প্রভাব প্রেডিক্ট করা।</li>
        <li><strong>CRISPR অন-টার্গেট ও অফ-টার্গেট অপটিমাইজেশন:</strong> জিন এডিটিং গাইড আরএনএ (gRNA) ডিজাইনে এআই অ্যালগরিদমের প্রয়োগ।</li>
        <li><strong>ফার্মাকোজিনোমিক্স:</strong> রোগীর ডিএনএ ডেটা বিশ্লেষণ করে নির্দিষ্ট ওষুধের ডোজ ও পার্শ্বপ্রতিক্রিয়া নির্ধারণ।</li>
      </ul>

      <h3 class="review-h3">ঘ. প্রোগ্রামিং ও বিগ ডেটা টুলস</h3>
      <ul>
        <li><strong>Python (Biopython, Pandas, Scikit-learn) ও R (Bioconductor, DESeq2, Seurat):</strong> জিন এক্সপ্রেশন ও স্ট্যাটিস্টিক্যাল হিটম্যাপ জেনারেশন।</li>
        <li><strong>Linux Bash ও HPC ক্লাউড আর্কিটেকচার:</strong> AWS/Google Cloud Life Sciences ও ডকার কন্টেইনারাইজেশন।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা (The Era of Precision Health)</h2>
      <p>জিনোমিক ডেটা সায়েন্স মানব স্বাস্থ্যের চেহারা আমূল বদলে দিচ্ছে:</p>
      <ul>
        <li><strong>ক্যান্সার আর্লি ডিটেকশন ও লিকুইড বায়োপসি:</strong> রক্তে ঘুরে বেড়ানো সার্কুলেটিং টিউমার ডিএনএ (ctDNA) সিকোয়েন্স করে ক্যান্সার হওয়ার বছরখানেক আগেই তা শনাক্তকরণ।</li>
        <li><strong>জিনোম থেরাপির মাধ্যমে অন্ধত্ব ও বংশগত রোগ নিরাময়:</strong> ক্রিসপার এবং এমআরএনএ ভ্যাকসিনের পরবর্তী প্রজন্ম জিনোমিক ডেটার নির্ভুলতার ওপর নির্ভরশীল।</li>
        <li><strong>সিন্থেটিক জিনোমিক্স:</strong> সম্পূর্ণ নতুন সিন্থেটিক ব্যাকটেরিয়া বা ইস্ট তৈরি যা পরিবেশ থেকে কার্বন ডাই অক্সাইড শোষণ করবে অথবা ক্লিন বায়োফুয়েল তৈরি করবে।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/pharmacy-departmen" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>ফার্মেসি বিভাগ (Pharmacy Professional) - ফার্মাকোলজি ও ড্রাগ ডেভেলপমেন্ট</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক বাজার (Global Careers & Recruiters)</h2>
      <p>জিনোমিক ডেটা সায়েন্টিস্টরা বায়োটেক কোম্পানি, ক্যান্সার রিসার্চ হাসপাতাল এবং গ্লোবাল টেক জায়ান্টে অত্যন্ত সমাদৃত:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক কোম্পানি ও ইনস্টিটিউট</h3>
      <ul>
        <li><strong>জিনোমিক্স ও ডায়াগনস্টিক জায়ান্ট:</strong> Illumina, 10x Genomics, Thermo Fisher Scientific, Pacific Biosciences (PacBio), Invitae।</li>
        <li><strong>গ্লোবাল ফার্মা কোম্পানি:</strong> Genentech/Roche, AstraZeneca, Novartis, Pfizer, Moderna (Computational Biology Units)।</li>
        <li><strong>বিশ্বখ্যাত জিনোম রিসার্চ ইনস্টিটিউট:</strong> Broad Institute of MIT and Harvard, Wellcome Sanger Institute (UK), EMBL-EBI, National Institutes of Health (NIH)।</li>
      </ul>

      <h3 class="review-h3">খ. পজিশন ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Genomic Data Scientist / Computational Biologist:</strong> বার্ষিক গড় বেতন $১,২৫,০০০ – $১,৮৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Bioinformatics Pipeline Engineer:</strong> ক্লাউড ও বিগ ডেটা ম্যানেজমেন্টে বার্ষিক $১,২০,০০০ – $১,৭০,০০০ ডলার।</li>
        <li><strong>Clinical Genomic Variant Analyst:</strong> ডায়াগনস্টিক সেন্টারে বার্ষিক $১,১০,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও স্কলারশিপের ক্ষেত্র</h3>
      <p>হার্ভার্ড, কেমব্রিজ, অক্সফোর্ড, জনস হপকিন্স, ইউসি সান ডিয়েগো, কারোলিনস্কা ইনস্টিটিউট (সুইডেন) ও ইটিএইচ জুরিখ-এ ফুল-ফান্ডেড এমএস/পিএইচডি ও ন্যাশনাল হেলথ ইনস্টিটিউটের আন্তর্জাতিক ফেলোশিপ পাওয়া যায়।</p>
    `
  },
  {
    slug: "cognitive-science-and-neuro-ai",
    title: "কগনিটিভ সায়েন্স ও নিউরো-এআই (Cognitive Science & Neuro-AI) বিষয় পরিচিতি ও উচ্চশিক্ষা",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে কগনিটিভ সায়েন্স ও নিউরো-এআই</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">মানুষের মস্তিষ্ক কীভাবে চিন্তা করে, স্মৃতি সংরক্ষণ করে, ভাষা বোঝে এবং সিদ্ধান্ত নেয়—তার নিউরোবায়োলজিক্যাল রহস্য উন্মোচন করে মস্তিষ্কের অনুকরণে বুদ্ধিমান কৃত্রিম বুদ্ধিমত্তা ও ব্রেন-কম্পিউটার ইন্টারফেস (BCI) তৈরির ফ্রন্টিয়ার বিজ্ঞান হলো কগনিটিভ সায়েন্স ও নিউরো-এআই।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>বর্তমান কৃত্রিম বুদ্ধিমত্তা (AI) বিপুল ডেটা ও গণনা শক্তি দিয়ে অনেক চমক দেখালেও মানুষের মতো সত্যিকারের বুদ্ধি (Artificial General Intelligence - AGI), সাধারণ জ্ঞান (Common Sense) এবং অতি অল্প অভিজ্ঞতায় দ্রুত নতুন কিছু শেখার ক্ষমতা এখনো কম্পিউটারের নেই। অন্যদিকে মানব মস্তিষ্ক মাত্র ২০ ওয়াট বিদ্যুৎ খরচ করে কোটি কোটি জটিল নিউরনের মাধ্যমে বিশ্বকে বুঝতে ও কল্পনা করতে পারে।</p>
      <p>মস্তিষ্কের এই বিস্ময়কর মেকানিজম বুঝতে হলে এককভাবে শুধু কম্পিউটার সায়েন্স বা শুধু বায়োলজি যথেষ্ট নয়। এর জন্য প্রয়োজন নিউরোসায়েন্স, মনোবিজ্ঞান, কম্পিউটার সায়েন্স, দর্শন, ভাষাতত্ত্ব ও গণিতের সমন্বিত বিশ্লেষণ। সেই জন্যই কগনিটিভ সায়েন্স ও নিউরো-এআই পড়ানো হয়।</p>
      <p>এর মাধ্যমে একদিকে প্যারালাইজড রোগীদের ব্রেন চিপ দিয়ে কম্পিউটারের সাথে যুক্ত করা সম্ভব হচ্ছে, অন্যদিকে ব্রেন-ইন্সপায়ারড এআই মডেল (স্পাইকিং নিউরাল নেটওয়ার্ক, নিউরোমরফিক কম্পিউটিং) তৈরি হচ্ছে।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/psychology-department-cu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>মনোবিজ্ঞান বিভাগ (Psychology) - মানব আচরণ, মেমোরি ও কগনিশন</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. পাঠ্যক্রম ও ব্যবহারিক ক্ষেত্রসমূহ (What is Taught in the Curriculum)</h2>
      <p>কগনিটিভ সায়েন্স ও নিউরো-এআইয়ের পাঠ্যক্রমটি অত্যন্ত বুদ্ধিবৃত্তিক এবং আধুনিক গবেষণাগার নির্ভর:</p>

      <h3 class="review-h3">ক. কম্পিউটেশনাল নিউরোসায়েন্স ও ব্রেন সিগন্যাল প্রসেসিং</h3>
      <ul>
        <li><strong>নিউরন মেমব্রেন বায়োফিজিক্স:</strong> হজকিন-হাক্সলি (Hodgkin-Huxley) মডেল ও নিউরাল অ্যাকশন পটেনশিয়াল স্পাইক ডায়নামিক্স।</li>
        <li><strong>ব্রেন ইমেজিং টেকনিক্স:</strong> ইলেক্ট্রোএনসেফালোগ্রাফি (EEG), ফাংশনাল এমআরআই (fMRI) এবং মেগনিটোএনসেফালোগ্রাফি (MEG) সিগন্যাল ডিকোডিং।</li>
        <li><strong>ব্রেন-কম্পিউটার ইন্টারফেস (BCI):</strong> মস্তিষ্কের নিউরাল প্যাটার্ন রিড করে রোবোটিক হাত নিয়ন্ত্রণ ও প্যারালাইসিস পুনর্বাসন।</li>
      </ul>

      <h3 class="review-h3">খ. ব্রেন-ইন্সপায়ারড এআই ও কগনিটিভ আর্কিটেকচার</h3>
      <ul>
        <li><strong>স্পাইকিং নিউরাল নেটওয়ার্কস (SNNs):</strong> জৈবিক নিউরনের মতো ইভেন্ট-ড্রিভেন গণনা, যা অতি সামান্য শক্তিতে চলে।</li>
        <li><strong>নিউরোমরফিক চিপ ফেব্রিকেশন:</strong> Intel Loihi এবং IBM TrueNorth প্রসেসরে ব্রেন অ্যালগরিদম রান করা।</li>
        <li><strong>রিইনফোর্সমেন্ট লার্নিং ও ডোপামিন সিস্টেম মডেলিং:</strong> মস্তিষ্কের রিওয়ার্ড সার্কিট থেকে অনুপ্রাণিত হয়ে এআই ট্রেনিং।</li>
      </ul>

      <h3 class="review-h3">গ. সাইকোলিঙ্গুইস্টিক্স ও ন্যাচারাল ল্যাঙ্গুয়েজ কগনিশন</h3>
      <ul>
        <li>মস্তিষ্কে ভাষা প্রক্রিয়াকরণ (Broca's and Wernicke's Areas) এবং লার্জ ল্যাঙ্গুয়েজ মডেল (LLMs)-এর সাথে মানব ভাষার মেকানিজমের তুলনা।</li>
        <li>ভিজ্যুয়াল কগনিশন ও হিউম্যান পারসেপশন মেকানিক্স।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা (The Road to AGI & Cybernetic Symbiosis)</h2>
      <p>কগনিটিভ সায়েন্স ও নিউরো-এআই আগামী শতাব্দীর চিকিৎসাবিজ্ঞান ও প্রযুক্তি উভয় ক্ষেত্রে অভূতপূর্ব দিগন্ত উন্মোচন করছে:</p>
      <ul>
        <li><strong>নিউরালিংক ও সাইবারনেটিক ইমপ্ল্যান্ট:</strong> ব্রেন-চিপ প্রতিস্থাপনের মাধ্যমে দৃষ্টিহীনদের কৃত্রিম দৃষ্টিশক্তি প্রদান, কথা বলতে অক্ষম রোগীদের চিন্তা সরাসরি টেক্সটে রূপান্তর এবং মানুষের মেমোরি ব্যাকআপ।</li>
        <li><strong>আর্টিফিশিয়াল জেনারেল ইন্টেলিজেন্স (AGI):</strong> আত্মসচেতনতা, কারণ ও ফলাফল বিশ্লেষণ (Causal Reasoning) এবং মানুষের মতো যুক্তি সম্পন্ন এআই সিস্টেম।</li>
        <li><strong>অ্যালঝেইমার ও মানসিক ব্যাধি প্রতিরোধ:</strong> মস্তিষ্কের নিউরাল সার্কিটের ত্রুটি আগাম চিহ্নিত করে আলঝেইমার ও পারকিনসন্স রোগের স্থায়ী নিরাময়।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/bme-biomedical-engineering" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>বায়োমেডিকেল ইঞ্জিনিয়ারিং (BME) - কৃত্রিম অঙ্গ ও বায়োমেডিকেল ডিভাইস</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক কর্মক্ষেত্র (Global Career & Research)</h2>
      <p>নিউরো-এআই ও কগনিটিভ সায়েন্টিস্টরা বিশ্বজুড়ে সবচেয়ে উদ্ভাবনী ল্যাব ও কোম্পানিতে নেতৃত্ব দিচ্ছেন:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক কোম্পানি ও ইনস্টিটিউট</h3>
      <ul>
        <li><strong>নিউরোটেক কোম্পানি:</strong> Neuralink (Elon Musk), Paradromics, Synchron, Blackrock Neurotech, Kernel।</li>
        <li><strong>এআই রিসার্চ ল্যাবস:</strong> Google DeepMind (Neuroscience team), OpenAI, Meta Reality Labs, Microsoft Research।</li>
        <li><strong>গ্লোবাল টেক ও চিপ মেকার:</strong> Apple (Accessibility & Vision Pro), Intel (Neuromorphic Computing Lab)।</li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল পজিশন ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Brain-Computer Interface (BCI) Engineer:</strong> বার্ষিক গড় বেতন $১,৪০,০০০ – $২,২০,০০০ মার্কিন ডলার।</li>
        <li><strong>Neuro-AI Research Scientist:</strong> বার্ষিক গড় বেতন $১,৬০,০০০ – $২,৬০,০০০ মার্কিন ডলার।</li>
        <li><strong>Human-Computer Interaction (HCI) Cognitive Architect:</strong> বার্ষিক $১,৩০,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও স্কলারশিপের সুযোগ</h3>
      <p>যুক্তরাষ্ট্রের Stanford, MIT (Brain and Cognitive Sciences - BCS), UC San Diego, Johns Hopkins; যুক্তরাজ্যের UCL (Gatsby Computational Neuroscience Unit), Oxford; এবং জার্মানির Max Planck Institute for Brain Research-এ শতভাগ ফুল-ফান্ডেড পিএইচডি স্কলারশিপ বিদ্যমান।</p>
    `
  },
  {
    slug: "cyber-warfare-and-digital-forensics",
    title: "সাইবার ডিফেন্স, অফেনসিভ সিকিউরিটি ও ডিজিটাল ফরেনসিক্স (Cyber Warfare & Digital Forensics) রিভিউ",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে সাইবার ডিফেন্স ও ডিজিটাল ফরেনসিক্স</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">জাতীয় গুরুত্বপূর্ণ অবকাঠামো (পাওয়ার গ্রিড, ব্যাংকিং, মিলিটারি নেটওয়ার্ক) সাইবার আক্রমণ থেকে সুরক্ষিত রাখা, ম্যালওয়্যার রিভার্স ইঞ্জিনিয়ারিং এবং হ্যাকিং ও সাইবার অপরাধের ডিজিটাল আলামত উদ্ধার করে আদালতে উপস্থাপনের বিশেষায়িত নিরাপত্তা বিজ্ঞান।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>আধুনিক যুদ্ধ এখন শুধু স্থল, জল ও আকাশে সীমাবদ্ধ নেই; পঞ্চম যুদ্ধক্ষেত্র (Fifth Domain of Warfare) হলো সাইবার স্পেস। একটি শক্তিশালী রাষ্ট্রের পারমাণবিক বিদ্যুৎ কেন্দ্র, কেন্দ্রীয় ব্যাংকিং ব্যবস্থা, সামরিক যোগাযোগ কিংবা স্যাটেলাইট নিয়ন্ত্রণ কক্ষ মুহূর্তের মধ্যে একটিমাত্র জিরো-ডে ম্যালওয়্যার (Zero-day Malware) দিয়ে সম্পূর্ণ অচল করে দেওয়া সম্ভব।</p>
      <p>প্রতিদিন বিশ্বে কোটি কোটি ডলারের র‍্যানসমওয়্যার অ্যাটাক, স্টেট-স্পন্সরড এপিটি (Advanced Persistent Threat) অ্যাটাক এবং ডেটা ব্রিচের ঘটনা ঘটছে। এই ধরণের জটিল সাইবার যুদ্ধ প্রতিহত করা, সিকিউরিটি আর্কিটেকচারকে বুলেটপ্রুফ করা এবং কোনো আক্রমণ সংঘটিত হলে মেমোরি ও নেটওয়ার্কের প্রতিটি বাইট স্ক্যান করে হামলাকারীর সুনির্দিষ্ট ডিজিটাল প্রমাণ উদ্ধার করার জন্যই সাইবার ডিফেন্স ও ডিজিটাল ফরেনসিক্স পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/swe-software-engineering" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>সফটওয়্যার ইঞ্জিনিয়ারিং (Software Engineering) - সিকিউর কোডিং ও ক্লাউড সিস্টেমস</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. পাঠ্যক্রম ও ল্যাবরেটরি প্রশিক্ষণ (What is Taught in the Curriculum)</h2>
      <p>এই ডিসিপ্লিনটি অত্যন্ত কঠোর প্র্যাকটিক্যাল হ্যান্ডস-অন ল্যাবরেটরি নির্ভর। এর পাঠ্যক্রমে তিনটি প্রধান স্তম্ভ রয়েছে:</p>

      <h3 class="review-h3">ক. অফেনসিভ সিকিউরিটি ও এথিক্যাল হ্যাকিং (Red Teaming)</h3>
      <ul>
        <li><strong>পেনিট্রেশন টেস্টিং ও এক্সপ্লয়েট ডেভেলপমেন্ট:</strong> বাফার ওভারফ্লো, মেমোরি করাপশন, হিপ স্প্রেয়িং এবং শেলকোড রাইটিং।</li>
        <li><strong>নেটওয়ার্ক প্রোটোকল সিকিউরিটি:</strong> BGP হাইজ্যাকিং, DNS স্পুফিং, Wireshark দিয়ে প্যাকেট এনালাইসিস ও ম্যান-ইন-দ্য-মিডল অ্যাটাক প্রতিরোধ।</li>
        <li><strong>ওয়েব ও ক্লাউড ভালনারেবিলিটি:</strong> OWASP Top 10, SQLi, SSRF, AWS/Azure IAM মিসকনফিগারেশন এক্সপ্লয়েটেশন।</li>
      </ul>

      <h3 class="review-h3">খ. সাইবার ডিফেন্স ও এসওসি অপারেশনস (Blue Teaming)</h3>
      <ul>
        <li><strong>এসআইইএম (SIEM) ও এসওএআর (SOAR):</strong> Splunk, ELK Stack দিয়ে রিয়েল-টাইম সিকিউরিটি লগ ও ইনট্রুশন ডিটেকশন সিস্টেম (IDS/IPS)।</li>
        <li><strong>অ্যাডভান্সড ক্রিপ্টোগ্রাফি:</strong> পাবলিক-কি ইনফ্রাস্ট্রাকচার (PKI), এলিপটিক কার্ভ ক্রিপ্টোগ্রাফি (ECC) এবং জিরো-নলেজ প্রুফ (ZKP)।</li>
        <li><strong>জিরো ট্রাস্ট আর্কিটেকচার (ZTA):</strong> এন্টারপ্রাইজ নেটওয়ার্ক হার্ডেনিং ও মাইক্রোসেগমেন্টেশন।</li>
      </ul>

      <h3 class="review-h3">গ. ডিজিটাল ফরেনসিক্স ও ইনসিডেন্ট রেসপন্স (DFIR)</h3>
      <ul>
        <li><strong>মেমোরি ও ডিস্ক ফরেনসিক্স:</strong> Volatility টুল দিয়ে RAM ডাম্প এনালাইসিস এবং EnCase/Autopsy দিয়ে ডিলিট করা হার্ড ড্রাইভ ডেটা রিকভারি।</li>
        <li><strong>ম্যালওয়্যার রিভার্স ইঞ্জিনিয়ারিং:</strong> Ghidra ও IDA Pro দিয়ে ডিসঅ্যাসেম্বল করে ভাইরাসের সোর্স কোড ও C2 (Command & Control) সার্ভার শনাক্তকরণ।</li>
        <li><strong>চেইন অব কাস্টডি ও সাইবার আইন:</strong> ডিজিটাল প্রমাণ আদালতে গ্রহণযোগ্য করার আইনি প্রটোকল।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা (AI-Powered Cyber Warfare)</h2>
      <p>ভবিষ্যতের সাইবার নিরাপত্তা কৃত্রিম বুদ্ধিমত্তার দ্বিমুখী লড়াইয়ে রূপ নিয়েছে:</p>
      <ul>
        <li><strong>এআই-ড্রিভেন অফেন্স বনাম ডিফেন্স:</strong> আক্রমণকারীরা ডিপফেক, এআই পলিমরফিক ম্যালওয়্যার ব্যবহার করছে এবং ডিফেন্ডাররা অটোনোমাস এআই সিকিউরিটি বটের মাধ্যমে মিলিসেকেন্ডে প্যাচ প্রয়োগ করছে।</li>
        <li><strong>ক্রিটিক্যাল ইনফ্রাস্ট্রাকচার ও এসসিএডিএ (SCADA) প্রটেকশন:</strong> পারমাণবিক চুল্লি, পাওয়ার গ্রিড, ওয়াটার ট্রিটমেন্ট প্ল্যান্ট এবং স্মার্ট সিটির আইওটি নেটওয়ার্ক রক্ষা।</li>
        <li><strong>ক্লাউড ও স্পেস সাইবার সিকিউরিটি:</strong> কক্ষপথে ঘূর্ণায়মান স্যাটেলাইটের ডেটা লিঙ্ক সিকিউর রাখা।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/law-cu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>আইন বিভাগ (Faculty of Law) - সাইবার আইন ও ডিজিটাল প্রমাণ বিধিমালা</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক সার্টিফিকেশন (Global Careers & Certifications)</h2>
      <p>বিশ্বজুড়ে সাইবার সিকিউরিটিতে প্রায় ৩৫ লাখ শূন্য পদ রয়েছে এবং শূন্য বেকারত্বের হারের তালিকায় এটি অন্যতম শীর্ষ পেশা।</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক নিয়োগকারী সংস্থা</h3>
      <ul>
        <li><strong>সাইবার সিকিউরিটি জায়ান্ট:</strong> CrowdStrike, Palo Alto Networks, Mandiant (Google Cloud), FireEye, Fortinet, Cloudflare।</li>
        <li><strong>জাতীয় ও আন্তর্জাতিক গোয়েন্দা সংস্থা:</strong> NSA, CISA, FBI Cyber Division, Interpol Cybercrime Directorate, ডিফেন্স মিনিস্ট্রি।</li>
        <li><strong>ব্যাংকিং ও বিগ ফোর:</strong> JPMorgan, Goldman Sachs, Deloitte, PwC, KPMG, EY (Cyber Risk Services)।</li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল পজিশন ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Lead Penetration Tester / Red Teamer:</strong> বার্ষিক গড় বেতন $১,৩০,০০০ – $২,০০,০০০ মার্কিন ডলার।</li>
        <li><strong>Digital Forensics & Incident Response (DFIR) Specialist:</strong> বার্ষিক গড় বেতন $১,২৫,০০০ – $১,৮৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Chief Information Security Officer (CISO):</strong> এন্টারপ্রাইজ পর্যায়ে বার্ষিক $২,৫০,০০০ – $৫,০০,০০০+ মার্কিন ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. সম্মানজনক বৈশ্বিক সার্টিফিকেশন</h3>
      <p>OSCP (Offensive Security Certified Professional), CISSP, GIAC (GREM, GCFA), CEH Master এবং আন্তর্জাতিক ফুল-ফান্ডেড সাইবার সিকিউরিটি ফেলোশিপ (যেমন US CyberCorps Scholarship for Service)।</p>
    `
  },
  {
    slug: "renewable-energy-and-smart-grid",
    title: "রিনিউয়েবল এনার্জি ও স্মার্ট গ্রিড ইঞ্জিনিয়ারিং (Renewable Energy & Smart Grid Systems) ক্যারিয়ার গাইড",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে রিনিউয়েবল এনার্জি ও স্মার্ট গ্রিড ইঞ্জিনিয়ারিং</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">জীবাশ্ম জ্বালানিমুক্ত কার্বন-জিরো ভবিষ্যতের জন্য সৌর, বায়ু, হাইড্রোজেন ও ভূতাপীয় শক্তির সর্বোচ্চ রূপান্তর এবং এআই-চালিত দ্বিমুখী স্মার্ট পাওয়ার গ্রিডের মাধ্যমে নিরবচ্ছিন্ন বিদ্যুৎ বিতরণের সর্বাধুনিক টেকসই প্রকৌশলবিদ্যা।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>জলবায়ু পরিবর্তনের ক্ষতিকর প্রভাবে বৈশ্বিক তাপমাত্রা বৃদ্ধি, হিমবাহ গলন এবং চরম প্রাকৃতিক দুর্যোগ সমগ্র মানবজাতির অস্তিত্বকে হুমকির মুখে ফেলেছে। বিশ্বজুড়ে কয়লা, তেল ও গ্যাসের মতো জীবাশ্ম জ্বালানি পুড়িয়ে বিদ্যুৎ উৎপাদন করায় বিপুল গ্রিনহাউস গ্যাস নির্গত হচ্ছে। প্যারিস জলবায়ু চুক্তি এবং গ্লোবাল নেট-জিরো ২০৫০ লক্ষ্যমাত্রা অর্জন করতে হলে শতভাগ পরিচ্ছন্ন নবায়নযোগ্য জ্বালানিতে রূপান্তর অপরিহার্য।</p>
      <p>কিন্তু নবায়নযোগ্য শক্তির একটি বড় চ্যালেঞ্জ হলো এর ইন্টারমিটেন্সি (যেমন: রাতে সূর্য থাকে না, বাতাস সবসময় সমান গতিতে বয় না)। কীভাবে পেরোভস্কাইট সোলার সেল দিয়ে সর্বোচ্চ আলো বিদ্যুতে রূপান্তর করা যাবে, গ্রিন হাইড্রোজেন সেল দিয়ে শক্তি সংরক্ষণ করা যাবে এবং এআই-চালিত স্মার্ট পাওয়ার গ্রিড দিয়ে মুহূর্তে সারা দেশের বিদ্যুৎ ভারসাম্য রক্ষা করা যাবে—তা শেখানোর জন্যই এই প্রকৌশল শাখাটি বিশ্বজুড়ে পড়ানো হয়।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/mec-eee" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>ইলেকট্রিক্যাল অ্যান্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং (EEE) - পাওয়ার সিস্টেমস ও হাই ভোল্টেজ গ্রিড</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. পাঠ্যক্রম ও প্রকৌশল ল্যাবসমূহ (What is Taught in the Curriculum)</h2>
      <p>রিনিউয়েবল এনার্জি ও স্মার্ট গ্রিড ইঞ্জিনিয়ারিংয়ের কারিকুলাম পদার্থবিজ্ঞান, পাওয়ার ইলেকট্রনিক্স এবং আইওটি অটোমেশনের এক সমন্বিত রূপ:</p>

      <h3 class="review-h3">ক. সোলার ফটোভোলটাইক ও উইন্ড টারবাইন ইঞ্জিনিয়ারিং</h3>
      <ul>
        <li><strong>অ্যাডভান্সড পিভি ফিজিক্স:</strong> পেরোভস্কাইট ও সিলিকন ট্যান্ডেম সোলার সেল, কোয়ান্টাম ডট সোলার টেকনোলজি ও সেল এফিশিয়েন্সি অপটিমাইজেশন।</li>
        <li><strong>অফশোর ও অনশোর উইন্ড ফার্ম ডিজাইন:</strong> টারবাইন ব্লেড অ্যারোডাইনামিক্স, জেনারেটর মেকানিক্স ও উইন্ড রিসোর্স অ্যাসেসমেন্ট।</li>
      </ul>

      <h3 class="review-h3">খ. এনার্জি স্টোরেজ ও হাইড্রোজেন ফুয়েল সেলস</h3>
      <ul>
        <li><strong>নেক্সট-জেন ব্যাটারি কেমিস্ট্রি:</strong> সলিড-স্টেট লিথিয়াম ব্যাটারি, সোডিয়াম-আয়ন ও ভ্যানাডিয়াম রেডক্স ফ্লো ব্যাটারি।</li>
        <li><strong>গ্রিন হাইড্রোজেন ইকোনমি:</strong> ওয়াটার ইলেকট্রোলাইসিস (PEM/Alkaline) এবং ফুয়েল সেল দিয়ে ইলেকট্রিক যানবাহন পরিচালনা।</li>
      </ul>

      <h3 class="review-h3">গ. স্মার্ট পাওয়ার গ্রিড ও মাইক্রোগ্রাইড অটোমেশন</h3>
      <ul>
        <li><strong>পাওয়ার ইলেকট্রনিক্স ও ইনভার্টার টেকনোলজি:</strong> ডিসি থেকে এসি গ্রিড সিঙ্ক্রোনাইজেশন ও হারমোনিক ফিল্টারিং।</li>
        <li><strong>স্মার্ট মিটারিং ও আইওটি গ্রিড মনিটরিং:</strong> ওয়াইড-এরিয়া মেজারমেন্ট সিস্টেম (WAMS) ও ফেজর মেজারমেন্ট ইউনিট (PMU)।</li>
        <li><strong>মেশিন লার্নিং ফর লোড ফোরকাস্টিং:</strong> আবহাওয়া পূর্বাভাসের ওপর ভিত্তি করে বিদ্যুৎ চাহিদা ও উৎপাদনের স্বয়ংক্রিয় এআই ব্যালেন্সিং।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা (The Clean Energy Transition)</h2>
      <p>নবায়নযোগ্য জ্বালানি খাত বর্তমানে বিশ্বের দ্রুততম বর্ধনশীল বিনিয়োগ খাত:</p>
      <ul>
        <li><strong>গ্লোবাল এনার্জি ট্রানজিশন:</strong> আগামী দুই দশকে ট্রিলিয়ন ট্রিলিয়ন ডলারের বিনিয়োগ নবায়নযোগ্য জ্বালানি প্রকল্পে প্রবেশ করছে।</li>
        <li><strong>ইলেকট্রিক ভেহিকল (EV) চার্জিং ইনফ্রাস্ট্রাকচার ও ভি২জি (V2G - Vehicle-to-Grid):</strong> গাড়ি থেকে সরাসরি গ্রিডে বিদ্যুৎ ফেরতের স্মার্ট নেটওয়ার্ক।</li>
        <li><strong>ফ্লোটিং সোলার ও ডিপ-সি উইন্ড ফার্ম:</strong> ভূমির সংকট দূরীকরণে নদী ও সমুদ্রের ওপর ভাসমান মেগা পাওয়ার প্ল্যান্ট স্থাপন।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/environmental-science-sust" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>এনভায়রনমেন্টাল সায়েন্স (Environmental Science) - ক্লাইমেট মডেলিং ও পলিসি</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক বাজার (Global Clean Energy Careers)</h2>
      <p>পরিচ্ছন্ন জ্বালানি প্রকৌশলীদের জন্য আন্তর্জাতিকভাবে বিশাল চাকরির সুযোগ রয়েছে:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক নিয়োগকারী সংস্থা</h3>
      <ul>
        <li><strong>ক্লিন এনার্জি ও ইভি জায়ান্ট:</strong> Tesla Energy, Siemens Energy, Vestas, Ørsted, NextEra Energy, Enel Green Power।</li>
        <li><strong>পাওয়ার ইকুইপমেন্ট ও গ্রিড অপারেটর:</strong> Schneider Electric, ABB, General Electric (GE Renewable Energy)।</li>
        <li><strong>আন্তর্জাতিক শক্তি সংস্থা:</strong> International Renewable Energy Agency (IRENA), International Energy Agency (IEA), World Bank Energy Sector।</li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল ভূমিকা ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Smart Grid Systems Architect:</strong> বার্ষিক গড় বেতন $১,২০,০০০ – $১,৭৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Solar/Wind Project Engineer:</strong> বার্ষিক গড় বেতন $১,১০,০০০ – $১,৬০,০০০ মার্কিন ডলার।</li>
        <li><strong>Battery Energy Storage Specialist:</strong> বার্ষিক $১,২৫,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও স্কলারশিপ</h3>
      <p>জার্মানির TU Berlin, RWTH Aachen; ডেনমার্কের DTU (Technical University of Denmark); নেদারল্যান্ডসের TU Delft; এবং যুক্তরাষ্ট্রের UC Berkeley ও Stanford-এ ক্লিন এনার্জি বিষয়ে শীর্ষ Erasmus Mundus ও ফুল-ফান্ডেড স্কলারশিপ বিদ্যমান।</p>
    `
  },
  {
    slug: "autonomous-robotics-and-swarm-intelligence",
    title: "স্বায়ত্তশাসিত রোবোটিক্স ও সোয়ার্ম ইন্টেলিজেন্স (Autonomous Robotics & Swarm AI) বিষয় পরিচিতি",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে স্বায়ত্তশাসিত রোবোটিক্স ও সোয়ার্ম ইন্টেলিজেন্স</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">মানুষের হস্তক্ষেপ ছাড়াই পরিবেশ দেখে ও বুঝে স্বয়ংক্রিয়ভাবে সিদ্ধান্ত গ্রহণকারী রোবট (সেলফ ড্রাইভিং কার, হিউম্যানয়েড রোবট) এবং শত শত ড্রোনের সম্মিলিত সমন্বয়ে পিঁপড়া বা পাখির ঝাঁকের মতো বুদ্ধিমত্তা (Swarm Intelligence) প্রয়োগের সর্বাধুনিক রোবোটিক্স প্রকৌশল।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>পূর্বে রোবট বলতে কেবল কারখানার নির্দিষ্ট খাঁচায় আবদ্ধ প্রি-প্রোগ্রাম করা যান্ত্রিক হাত বোঝাতো। কিন্তু আধুনিক যুগে রোবটদের মুক্ত পরিবেশে মানুষের পাশাপাশি কাজ করতে হচ্ছে—যেমন ব্যস্ত রাস্তায় স্বয়ংক্রিয় গাড়ি চালানো, গুদামে হাজার হাজার অটোনোমাস মোবাইল রোবট (AMR) দ্বারা পার্সেল সাজানো, কিংবা মহাকাশ বা দুর্যোগ এলাকায় উদ্ধারকারী রোবট কুকুর ও হিউম্যানয়েড রোবট পাঠানো।</p>
      <p>একটি রোবট কীভাবে ক্যামেরা ও লাইডার দিয়ে চারপাশের থ্রিডি মানচিত্র তৈরি করবে (SLAM), পথ নির্ধারণ করবে এবং জটিল পরিস্থিতিতে সংঘর্ষ এড়িয়ে দ্রুত সিদ্ধান্ত নেবে—তা শেখানোর জন্য স্বায়ত্তশাসিত রোবোটিক্স পড়ানো হয়। একই সাথে শত শত ক্ষুদ্র ড্রোন কোনো কেন্দ্রীয় নিয়ন্ত্রণ ছাড়াই কীভাবে নিজেদের মধ্যে যোগাযোগ করে নিখুঁত উদ্ধার অভিযান বা সামরিক পাহারা পরিচালনা করতে পারে (Swarm Robotics)—তা এই ডিসিপ্লিনের অন্যতম প্রধান ভিত্তি।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/mte-ruet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>মেকাট্রনিক্স ইঞ্জিনিয়ারিং (MTE) - সেন্সর, পিএলসি ও অটোমেশন হার্ডওয়্যার</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. বিষয়ে কী কী পড়ানো হয় (Core Curriculum & Robotics Stack)</h2>
      <p>অটোনোমাস রোবোটিক্সের পাঠ্যক্রমটি মেকানিক্স, কন্ট্রোল থিওরি এবং কম্পিউটার ভিশনের এক চমৎকার মিশ্রণ:</p>

      <h3 class="review-h3">ক. রোবট কাইনেম্যাটিক্স ও ডায়নামিক্স</h3>
      <ul>
        <li><strong>ফরওয়ার্ড ও ইনভার্স কাইনেম্যাটিক্স:</strong> DH প্যারামিটার, কোয়াটারনিয়ন রোটেশন ও জ্যাকোবিয়ান ম্যাট্রিক্স।</li>
        <li><strong>মোবাইল রোবট লোকোমোশন:</strong> হুইলড, লেগড (Quadruped/Bipedal Boston Dynamics style) এবং এরিয়াল রোবোটিক্স ডায়নামিক্স।</li>
      </ul>

      <h3 class="review-h3">খ. পারসেপশন ও কম্পিউটার ভিশন (Robot Perception)</h3>
      <ul>
        <li><strong>লাইডার (LiDAR) ও পয়েন্ট ক্লাউড প্রসেসিং:</strong> 3D অবজেক্ট ডিটেকশন ও সেগমেন্টেশন।</li>
        <li><strong>ভিজ্যুয়াল স্ল্যাম (vSLAM):</strong> ক্যামেরা ফিড দিয়ে রিয়েল-টাইম লোক্যালাইজেশন ও সাইমুলটেনিয়াস ম্যাপিং।</li>
        <li><strong>সেন্সর ফিউশন:</strong> কালমান ফিল্টার (Extended Kalman Filter) দিয়ে IMU, GPS ও ওডোমেট্রি ডেটা একত্রিত করা।</li>
      </ul>

      <h3 class="review-h3">গ. সোয়ার্ম ইন্টেলিজেন্স ও মাল্টি-এজেন্ট সিস্টেমস</h3>
      <ul>
        <li><strong>বায়ো-ইন্সপায়ারড অ্যালগরিদমস:</strong> অ্যান্ট কলোনি অপটিমাইজেশন (ACO), পার্টিকেল সোয়ার্ম অপটিমাইজেশন (PSO)।</li>
        <li><strong>ডিসেন্ট্রালাইজড কন্ট্রোল ও কলিশন অ্যাভয়ডেন্স:</strong> শত শত ড্রোনের সেলফ-অরগানাইজিং ফর্মেশন ও কমিউনিকেশন প্রটোকল।</li>
      </ul>

      <h3 class="review-h3">ঘ. রোবট সফটওয়্যার ফ্রেমওয়ার্ক</h3>
      <ul>
        <li><strong>ROS 2 (Robot Operating System):</strong> নোড আর্কিটেকচার, পিউব-সাব মেসেজিং ও অ্যাকশন সার্ভার।</li>
        <li><strong>Gazebo, Isaac Sim (NVIDIA) ও Webots:</strong> ফিজিক্স সিমুলেশন ও রিইনফোর্সমেন্ট লার্নিং রোবট ট্রেনিং।</li>
        <li><strong>C++ ও Python:</strong> রিয়েল-টাইম লো-লেটেন্সি রোবট কন্ট্রোল প্রোগ্রামিং।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা (The Era of Physical AI & Humanoids)</h2>
      <p>অটোনোমাস রোবোটিক্স আগামী দশকের সবচেয়ে প্রভাবশালী শিল্প বিপ্লবের জন্ম দিচ্ছে:</p>
      <ul>
        <li><strong>জেনারেল পারপাস হিউম্যানয়েড রোবট:</strong> Tesla Optimus, Figure AI, Boston Dynamics Atlas—যা মানুষের দৈনন্দিন কাজ ও ফ্যাক্টরি দায়িত্ব নিজের কাঁধে তুলে নেবে।</li>
        <li><strong>লেভেল ৫ সেলফ ড্রাইভিং ভেহিকল:</strong> সম্পূর্ণ চালকবিহীন ট্যাক্সি (Waymo, Cruise) ও হাইওয়ে মালবাহী অটোনোমাস ট্রাক।</li>
        <li><strong>স্বায়ত্তশাসিত ড্রোন সোয়ার্ম:</strong> কৃষি জমিতে নির্ভুল কীটনাশক স্প্রে, বনাঞ্চলে অগ্নিনির্বাপণ এবং মহাকাশ অনুসন্ধানে রোবোটিক রোভার।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/ipe-ruet" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>ইন্ডাস্ট্রিয়াল অ্যান্ড প্রোডাকশন ইঞ্জিনিয়ারিং (IPE) - স্মার্ট ফ্যাক্টরি অটোমেশন ৪.০</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও আন্তর্জাতিক চাকরির বাজার (Global Robotics Careers)</h2>
      <p>অটোনোমাস সিস্টেম এবং রোবোটিক্স সফটওয়্যার ইঞ্জিনিয়ারদের বৈশ্বিক চাহিদা অত্যন্ত তুঙ্গে:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক কোম্পানি</h3>
      <ul>
        <li><strong>সেলফ ড্রাইভিং ও রোবোটিক্স কোম্পানি:</strong> Waymo, Tesla Autopilot, Figure AI, Boston Dynamics, Skydio, DJI।</li>
        <li><strong>ওয়্যারহাউস অটোমেশন জায়ান্ট:</strong> Amazon Robotics, Symbotic, KUKA, ABB Robotics।</li>
        <li><strong>চিপ মেকার ও এআই প্ল্যাটফর্ম:</strong> NVIDIA (Robotics & Omniverse), Qualcomm Robotics।</li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল ভূমিকা ও বেতন স্কেল</h3>
      <ul>
        <li><strong>Autonomous Vehicle Software Engineer:</strong> বার্ষিক গড় বেতন $১,৪৫,০০০ – $২,২৫,০০০ মার্কিন ডলার।</li>
        <li><strong>SLAM & Robotics Perception Engineer:</strong> বার্ষিক গড় বেতন $১,৪০,০০০ – $২,১৫,০০০ মার্কিন ডলার।</li>
        <li><strong>Robotics Controls & Swarm Architect:</strong> বার্ষিক $১,৩০,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও স্কলারশিপ</h3>
      <p>যুক্তরাষ্ট্রের Carnegie Mellon University (CMU Robotics Institute - বিশ্বের এক নম্বর রোবোটিক্স ল্যাব), MIT, Stanford, University of Michigan; এবং সুইজারল্যান্ডের ETH Zurich ও EPFL-এ রোবোটিক্সে ফুল-ফান্ডেড স্কলারশিপ বিদ্যমান।</p>
    `
  },
  {
    slug: "financial-engineering-and-algorithmic-trading",
    title: "ফাইন্যান্সিয়াল ইঞ্জিনিয়ারিং ও কোয়ান্টাম ফাইন্যান্স (Financial Engineering & Quantitative Finance) গাইড",
    content: `
      <div class="review-callout-card">
        <h3 class="text-base sm:text-lg font-bold text-emerald-900 dark:text-emerald-300 mb-1">💡 এক নজরে ফাইন্যান্সিয়াল ইঞ্জিনিয়ারিং</h3>
        <p class="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">উচ্চতর গণিত, স্টোকাস্টিক ক্যালকুলাস, আর্থিক অর্থনীতি এবং উচ্চ-গতির প্রোগ্রামিংয়ের সমন্বয়ে জটিল ডেরিভেটিভস প্রাইসিং, আর্থিক ঝুঁকি নিয়ন্ত্রণ এবং মাইক্রোসেকেন্ডে স্বয়ংক্রিয় অ্যালগরিদমিক ট্রেডিং (High-Frequency Trading) পরিচালনার অভিজাত অর্থশাস্ত্র।</p>
      </div>

      <h2 id="why-taught" class="review-h2">১. বিষয়টি কেন পড়ানো হয় (Why the Subject is Taught)</h2>
      <p>আধুনিক বৈশ্বিক আর্থিক বাজার (ওয়াল স্ট্রিট, লন্ডন স্টক এক্সচেঞ্জ, ক্রিপ্টো ডেরিভেটিভস) এখন আর মানুষের সাধারণ অনুভূতির ওপর চলে না। বৈশ্বিক বাণিজ্যের সিংহভাগ লেনদেন পরিচালিত হয় জটিল গাণিতিক মডেল এবং সুপার-ফাস্ট অ্যালগরিদমের মাধ্যমে, যা মিলি এবং মাইক্রোসেকেন্ডে বিশাল ডেটা প্যাটার্ন বিশ্লেষণ করে স্বয়ংক্রিয় কেনাবেচা সম্পন্ন করে।</p>
      <p>একটি জটিল আন্তর্জাতিক বন্ড বা অপশন কন্ট্রাক্টের প্রকৃত মূল্য কত হওয়া উচিত, আকস্মিক অর্থনৈতিক ধসে কোনো ব্যাংকের কত ট্রিলিয়ন ডলার ক্ষতি হতে পারে (Value at Risk - VaR), কিংবা বাজারের অস্থিরতা কাজে লাগিয়ে কীভাবে কম ঝুঁকিতে সর্বোচ্চ লাভ করা সম্ভব—এই জটিল আর্থিক ও গাণিতিক প্রশ্নগুলোর সমাধান তৈরি করার জন্যই ফাইন্যান্সিয়াল ইঞ্জিনিয়ারিং (বা কোয়ান্ট ফাইন্যান্স) পড়ানো হয়।</p>
      <p>এই বিষয়ের গ্র্যাজুয়েটদের বলা হয় 'কোয়ান্ট' (Quantitative Analyst / Quant Trader), যারা গাণিতিক দক্ষতায় ফাইন্যান্সের শীর্ষ আসনে বসেন।</p>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/finance-department-cu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>ফিন্যান্স ও ব্যাংকিং বিভাগ (Finance) - কর্পোরেট ফিন্যান্স ও ব্যাংকিং কৌশল</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="what-is-taught" class="review-h2">২. পাঠ্যক্রম ও গাণিতিক ভিত্তি (What is Taught in Quantitative Finance)</h2>
      <p>ফাইন্যান্সিয়াল ইঞ্জিনিয়ারিংয়ের কারিকুলামটি গণিত, অর্থনীতি ও সফটওয়্যার আর্কিটেকচারের সবচেয়ে কঠিন ও রোমাঞ্চকর পাঠ্যক্রমগুলোর একটি:</p>

      <h3 class="review-h3">ক. স্টোকাস্টিক ক্যালকুলাস ও ডেরিভেটিভস প্রাইসিং</h3>
      <ul>
        <li><strong>ইটো'স লেমা (Itô's Lemma) ও ব্রাউনিয়ান মোশন:</strong> শেয়ার বাজারের অনির্দেশ্য গতিপথের গাণিতিক মডেল।</li>
        <li><strong>ব্ল্যাক-শোলস-মার্টন (Black-Scholes-Merton) PDE:</strong> অপশন কন্ট্রাক্ট ভ্যালুয়েশন ও ভোলাটিলিটি স্মাইল অ্যানালাইসিস।</li>
        <li><strong>মন্তে কার্লো সিমুলেশন (Monte Carlo):</strong> লক্ষ লক্ষ সম্ভাব্য অর্থনৈতিক পরিস্থিতির সিমুলেশন করে রিস্ক অ্যাসেসমেন্ট।</li>
      </ul>

      <h3 class="review-h3">খ. অ্যালগরিদমিক ও হাই-ফ্রিকোয়েন্সি ট্রেডিং (HFT)</h3>
      <ul>
        <li><strong>অর্ডার বুক ডায়নামিক্স ও মার্কেট মাইক্রোস্ট্রাকচার:</strong> লিমিট অর্ডার বুক, বিড-আস্ক স্প্রেড ও লিকুইডিটি মডেলিং।</li>
        <li><strong>স্ট্যাটিস্টিক্যাল আরবিট্রাজ ও পেয়ারস ট্রেডিং:</strong> দুটি সম্পর্কিত স্টকের ক্ষণস্থায়ী মূল্য পার্থক্য থেকে কোয়ান্ট লাভ তৈরি।</li>
        <li><strong>লো-লেটেন্সি C++ প্রোগ্রামিং:</strong> কার্নেল বাইপাসিং (Kernel Bypass) ও FPGA হার্ডওয়্যার এক্সিলারেশন দিয়ে ন্যানোসেকেন্ডে অর্ডার এক্সিকিউশন।</li>
      </ul>

      <h3 class="review-h3">গ. মেশিন লার্নিং ও অল্টারনেটিভ ডেটা ইন ফাইন্যান্স</h3>
      <ul>
        <li>স্যাটেলাইট ইমেজ ও সোশ্যাল মিডিয়া সেন্টিমেন্ট অ্যানালাইসিস দিয়ে কোম্পানির রাজস্ব আগাম অনুমান।</li>
        <li>ডিপ রিইনফোর্সমেন্ট লার্নিং দিয়ে স্বয়ংক্রিয় পোর্টফোলিও অপটিমাইজেশন।</li>
      </ul>

      <h2 id="future-scope" class="review-h2">৩. ভবিষ্যৎ সম্ভাবনা (The Rise of Quantum Finance & DeFi)</h2>
      <p>কোয়ান্ট ফাইন্যান্স বর্তমান বিশ্বের সবচেয়ে প্রভাবশালী অর্থনৈতিক ক্ষেত্রে রূপ নিয়েছে:</p>
      <ul>
        <li><strong>কোয়ান্টাম ফাইন্যান্সিয়াল কম্পিউটিং:</strong> কোয়ান্টাম অ্যালগরিদম ব্যবহার করে বিশাল মাল্টি-অ্যাসেট পোর্টফোলিও মুহূর্তের মধ্যে নিখুঁত অপটিমাইজ করা।</li>
        <li><strong>ডিসেন্ট্রালাইজড ফাইন্যান্স (DeFi) ও ব্লকচেইন মার্কেট মেকিং:</strong> অটোমেটেড মার্কেট মেকার (AMM) ও স্মার্ট কন্ট্রাক্ট লিকুইডিটি মডেলিং।</li>
        <li><strong>ক্লাইমেট রিস্ক প্রাইসিং:</strong> জলবায়ু পরিবর্তনের কারণে রিয়েল এস্টেট ও বন্ডের মূল্য ঝুঁকির গাণিতিক মডেলিং।</li>
      </ul>

      <div class="review-internal-link-box">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">🔗 সংশ্লিষ্ট বিষয় পড়ুন</span>
        <a href="/subject-review/statistics-department-cu" class="font-bold text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 transition-colors flex items-center justify-between">
          <span>পরিসংখ্যান বিভাগ (Statistics) - সম্ভাবনা তত্ত্ব, আর প্রোগ্রামিং ও বিগ ডেটা</span>
          <span>→</span>
        </a>
      </div>

      <h2 id="career-opportunities" class="review-h2">৪. ক্যারিয়ার ও শীর্ষ বৈশ্বিক বেতন (Global Careers & Wall Street Salaries)</h2>
      <p>ফাইন্যান্সিয়াল ইঞ্জিনিয়ার ও কোয়ান্ট রিসার্চাররা পুরো প্রযুক্তি ও অর্থনীতি খাতের সর্বোচ্চ বেতনভোগী পেশাজীবীদের শীর্ষে অবস্থান করেন:</p>

      <h3 class="review-h3">ক. শীর্ষ আন্তর্জাতিক নিয়োগকারী হেজ ফান্ড ও ইনভেস্টমেন্ট ব্যাংক</h3>
      <ul>
        <li><strong>অভিজাত কোয়ান্ট হেজ ফান্ড ও প্রপ ট্রেডিং ফার্ম:</strong> Jane Street, Citadel, Renaissance Technologies (Medallion Fund), Two Sigma, Jump Trading, D. E. Shaw & Co.।</li>
        <li><strong>গ্লোবাল ইনভেস্টমেন্ট ব্যাংক:</strong> Goldman Sachs, Morgan Stanley, JPMorgan Chase (Quantitative Research), Barclays।</li>
      </ul>

      <h3 class="review-h3">খ. প্রফেশনাল পদ ও বিস্ময়কর বেতন কাঠামো</h3>
      <ul>
        <li><strong>Quantitative Trader / Researcher:</strong> নতুন গ্র্যাজুয়েটদের প্রারম্ভিক বেসিক বেতন ও পারফরম্যান্স বোনাস মিলিয়ে $৩,০০,০০০ – $৬,০০,০০০+ মার্কিন ডলার পর্যন্ত হয়ে থাকে।</li>
        <li><strong>Quantitative Developer (Low-Latency C++):</strong> বার্ষিক গড় $২,০০,০০০ – $৪,০০,০০০ মার্কিন ডলার।</li>
        <li><strong>Financial Risk Manager (FRM):</strong> ব্যাংক ও সেন্ট্রাল ব্যাংকে বার্ষিক $১,৬০,০০০+ ডলার।</li>
      </ul>

      <h3 class="review-h3">গ. উচ্চশিক্ষা ও বিশ্বমানের প্রোগ্রামসমূহ</h3>
      <p>যুক্তরাষ্ট্রের Princeton University (Bendheim Center for Finance), Columbia University (MSFE), Carnegie Mellon University (MSCF), UC Berkeley (MFE); এবং যুক্তরাজ্যের Oxford ও Imperial College London-এ বিশ্বের সেরা মাস্টার্স ইন ফাইন্যান্সিয়াল ইঞ্জিনিয়ারিং প্রোগ্রাম রয়েছে।</p>
    `
  }
];

let updatedCount = 0;
for (const rev of reviewsData) {
  const filePath = path.join(REVIEWS_DIR, `${rev.slug}.json`);
  const dataToSave = {
    slug: rev.slug,
    title: rev.title,
    content: rev.content
  };
  fs.writeFileSync(filePath, JSON.stringify(dataToSave, null, 2), 'utf8');
  updatedCount++;
}

console.log(`Successfully generated ${updatedCount} ultra-detailed 700+ words reviews for Session 1!`);
