/* ============================================================
   main.js — Language toggle, scroll reveal, smooth scroll
   ============================================================ */

/* ─── SCROLL REVEAL ─── */
const ro = new IntersectionObserver(
  es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('go'); }),
  { threshold: .1 }
);
document.querySelectorAll('.rev').forEach(el => ro.observe(el));

/* ─── SMOOTH SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(a =>
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  })
);

/* ─── TRANSLATIONS ─── */
window.currentLang = 'en';

const T = {
  en: {
    /* ── Nav ── */
    'nav-home': 'Home',
    'nav-proj': 'Projects',
    'nav-cont': 'Contact',

    /* ── Hero ── */
    'hero-tag':    'MSc ROBOTICS ENGINEER',
    'h1a':         'Building robots that',
    'h1b':         'bridge imagination & reality',
    'hero-sub':    'Mann Janodia \u00a0\u2022\u00a0 MSc Robotics',
    'hero-desc':   'Full-stack robotics specialist building systems that perform. From tuning PID loops to training neural networks, I develop the "brain" and "body" in tandem.',
    'hero-goal':   'My goal: make robotics smarter and more accessible.',
    'hero-resume': 'Connect With Me',

    /* ── About ── */
    'about-tag':    'About Me',
    'about-title':  'Why I Build Robots',
    'about-h3':     'From Curiosity to Engineering',
    'about-p1':     'I am a robotics engineer specializing in full-stack architecture, focusing on the seamless integration of mechanical hardware, control software, and artificial intelligence. I am driven by the moment these disciplines converge \u2014 whether it\'s developing autonomous navigation systems or designing custom neural networks for adaptive flight simulations. I don\'t just write code; I build complete systems that turn complex technical challenges into functional, real-world solutions.',
    'about-p2':     'I am currently pursuing my MSc in Robotics Engineering at Middlesex University, building upon my BEng in Mechatronics with a minor specialization in AI and Machine Learning. My background includes developing award-winning, patent-pending self-balancing systems and vision-based specimen handling platforms using high-precision depth sensing. I am particularly interested in narrowing the gap between "what robots can do" and "what we need them to do" through rigorous validation and system optimization.',
    'about-p3':     "When I'm not in the lab, you can find me on the field playing competitive cricket, football, or volleyball. I also enjoy the strategic challenge of a chess match and reading new books.",
    'about-strong': 'What drives me?',
    'about-p4':     'The moment hardware, software, and intelligence converge perfectly.',

    /* ── Projects section header ── */
    'proj-tag':  'Featured Work',
    'proj-title':'Projects',
    'proj-desc': 'Click any project card to see full details',

    /* ── Project card names & short descriptions ── */
    'p1-name':  'Gesture Multi-Drone Control',
    'p1-short': 'Two-hand gesture control of 3 drones using a custom 5-layer neural network in Webots.',
    'p2-name':  'Camera Servo Tracking (RPi)',
    'p2-short': 'YOLO + Picamera2 real-time object tracking with MG996R pan-tilt servos on Raspberry Pi 4.',
    'p3-name':  'TurtleBot4 Occupancy Navigation',
    'p3-short': 'Dynamic waypoint scheduling with occupancy detection for autonomous navigation in real indoor environments.',
    'p4-name':  'Autonomous Mapping Robot',
    'p4-short': 'Dual-Arduino robot that autonomously maps a room and executes a planned return journey with equally-spaced scheduled stops.',
    'p5-name':  'Niryo NED2 Test Tube Sorting System',
    'p5-short': 'Fully autonomous lab system combining Niryo NED2 arm, TurtleBot4, and ESP32 RFID to pick, scan, and sort test tubes into bins with zero human intervention.',
    'click':    'Click to expand →',

    /* ── Skills ── */
    'sk-tag':   'Technical Arsenal',
    'sk-title': 'Skills',
    'sk1-cat':  'programming Languages',
    'sk2-cat':  'Robotics & ROS2',
    'sk3-cat':  'AI & Computer Vision',
    'sk4-cat':  'Hardware',
    'sk5-cat':  'Tools & Platforms',

    /* ── Experience ── */
    'exp-tag':  'Work History',
    'exp-title':'Experience',
    'exp-desc': 'Internships and roles that shaped my engineering journey',
    'e1-role':  'Radio Frequency Engineer',
    'e1-co':    'Optimized Solutions Limited',
    'e1-desc':  'Developed and validated RF-enabled embedded systems through rigorous signal analysis, environmental stress testing, and systematic hardware debugging to ensure reliability and compliance.',
    'e2-role':  'Electrical Engineer',
    'e2-co':    'Bosch Rexroth',
    'e2-desc':  'Conducted fault diagnosis and sensor calibration for hydraulic and electromechanical systems within cross-functional validation and verification teams.',
    'e3-role':  'Firmware Lead',
    'e3-co':    'Robofest',
    'e3-desc':  'Led firmware development and oversaw full hardware and electronics integration for a competitive robotics platform. Responsible for embedded software architecture, sensor interfacing, motor control pipelines, and ensuring reliable communication between all electronic subsystems.',

    /* ── Contact ── */
    'ct-title': 'Contact',
    'ct-tag':   "Let's chat about robots!",
    'soc-gh':   'GitHub',
    'soc-li':   'LinkedIn',
    'soc-cv':   'Resume',

    /* ── Footer ── */
    'footer': 'Made by Mann Janodia',

    /* ── Modal shared labels ── */
    'm-overview':    'Overview',
    'm-challenges':  'Key Achievements',
    'm-skills-used': 'Skills & Tools',
    'm-sk-context':  'Context',
    'lnk-gh':        'GitHub',

    /* ── Modal project overviews ── */
    'm-drone-ov': 'A fully gesture-driven system to control 3 simulated DJI Mavic2Pro drones in Webots using only hand gestures captured by a laptop webcam. Two separate neural networks — both built entirely from scratch in NumPy — classify left-hand pose (which drone to select) and right-hand pose (what action to perform), with results written to a shared JSON file that each drone\'s controller reads every 8ms.',
    'm-cam-ov':   'Real-time multi-object detection and tracking on Raspberry Pi 4 using YOLOv8 (NCNN-exported) with two MG996R servos for pan-tilt camera control.',
    'm-tb4-ov':   'Dynamic waypoint scheduling with occupancy detection for autonomous mobile robot navigation using Nav2 and SLAM on TurtleBot 4. Deployed in a real indoor environment (H101 lab map at Coventry University).',

    /* ── Skill modal context descriptions ── */
    'sk1-desc': 'Python primary for robotics. C++ for performance-critical nodes. Bash for system scripting.',
    'sk2-desc': 'Full ROS2 Jazzy systems on Ubuntu 24.04 — Nav2, SLAM, MoveIt2 for real robot deployment.',
    'sk3-desc': 'Custom 5-layer NNs from scratch. MediaPipe HandLandmarker. OpenCV ArUco pose estimation. YOLOv8 NCNN for RPi.',
    'sk4-desc': 'Hands-on with real robots. Debugged I2C, WiFi, TCP, serial comm. Solved mechanical offset issues.',
    'sk5-desc': 'Webots and Gazebo for simulation. Flask REST APIs for multi-system coordination. All on GitHub.',
  },

  hi: {
    /* ── Nav ── */
    'nav-home': 'होम',
    'nav-proj': 'प्रोजेक्ट्स',
    'nav-cont': 'संपर्क',

    /* ── Hero ── */
    'hero-tag':    'एमएससी रोबोटिक्स इंजीनियर',
    'h1a':         'ऐसे रोबोट बनाता हूं जो',
    'h1b':         'कल्पना और वास्तविकता को जोड़ें',
    'hero-sub':    'मन जनोदिया \u00a0\u2022\u00a0 एमएससी रोबोटिक्स',
    'hero-desc':   'ऐसे सिस्टम बनाने वाला फुल-स्टैक रोबोटिक्स विशेषज्ञ जो काम करते हैं। PID लूप ट्यूनिंग से लेकर न्यूरल नेटवर्क ट्रेनिंग तक, मैं "दिमाग" और "शरीर" दोनों को साथ विकसित करता हूं।',
    'hero-goal':   'मेरा लक्ष्य: रोबोटिक्स को स्मार्ट और सुलभ बनाना।',
    'hero-resume': 'मुझसे जुड़ें',

    /* ── About ── */
    'about-tag':    'मेरे बारे में',
    'about-title':  'मैं रोबोट क्यों बनाता हूं',
    'about-h3':     'जिज्ञासा से इंजीनियरिंग तक',
    'about-p1':     'मैं एक रोबोटिक्स इंजीनियर हूं जो फुल-स्टैक आर्किटेक्चर में विशेषज्ञता रखता हूं — मैकेनिकल हार्डवेयर, कंट्रोल सॉफ्टवेयर और आर्टिफिशियल इंटेलिजेंस के निर्बाध एकीकरण पर ध्यान केंद्रित करता हूं। मैं उस पल से प्रेरित होता हूं जब ये विषय एक साथ आते हैं — चाहे स्वायत्त नेविगेशन सिस्टम विकसित करना हो या कस्टम न्यूरल नेटवर्क डिज़ाइन करना। मैं सिर्फ कोड नहीं लिखता; मैं पूरे सिस्टम बनाता हूं।',
    'about-p2':     'मैं वर्तमान में Middlesex University में रोबोटिक्स इंजीनियरिंग में MSc कर रहा हूं, Mechatronics में BEng और AI/ML में माइनर के आधार पर। मेरी पृष्ठभूमि में पुरस्कार विजेता, पेटेंट-लंबित सेल्फ-बैलेंसिंग सिस्टम और उच्च-सटीक depth sensing का उपयोग करके vision-based स्पेसिमेन हैंडलिंग प्लेटफॉर्म शामिल हैं।',
    'about-p3':     'जब मैं लैब में नहीं होता, तो मैं क्रिकेट, फुटबॉल या वॉलीबॉल खेलता हूं। मुझे शतरंज की रणनीतिक चुनौती और किताबें पढ़ना भी पसंद है।',
    'about-strong': 'मुझे क्या प्रेरित करता है?',
    'about-p4':     'वह पल जब हार्डवेयर, सॉफ्टवेयर और बुद्धिमत्ता एकदम सही तरीके से मिलते हैं।',

    /* ── Projects section header ── */
    'proj-tag':  'विशेष कार्य',
    'proj-title':'प्रोजेक्ट्स',
    'proj-desc': 'पूरा विवरण देखने के लिए किसी भी कार्ड पर क्लिक करें',

    /* ── Project card names & short descriptions ── */
    'p1-name':  'इशारा मल्टी-ड्रोन नियंत्रण',
    'p1-short': 'Webots में 3 ड्रोन को दो-हाथ इशारों और कस्टम 5-लेयर न्यूरल नेटवर्क से नियंत्रित करना।',
    'p2-name':  'कैमरा सर्वो ट्रैकिंग (RPi)',
    'p2-short': 'Raspberry Pi 4 पर YOLO + Picamera2 से MG996R pan-tilt servos के साथ रियल-टाइम ऑब्जेक्ट ट्रैकिंग।',
    'p3-name':  'TurtleBot4 अधिभोग नेविगेशन',
    'p3-short': 'वास्तविक इनडोर वातावरण में स्वायत्त नेविगेशन के लिए गतिशील वेपॉइंट शेड्यूलिंग।',
    'p4-name':  'स्वायत्त मैपिंग रोबोट',
    'p4-short': 'दो-Arduino रोबोट जो कमरे को स्वचालित रूप से मैप करता है और समान दूरी वाले स्टॉप के साथ वापस आता है।',
    'p5-name':  'निर्यो NED2 टेस्ट ट्यूब छंटाई प्रणाली',
    'p5-short': 'Niryo NED2 आर्म, TurtleBot4 और ESP32 RFID को मिलाकर बिना मानव हस्तक्षेप के टेस्ट ट्यूब छांटने की पूर्ण स्वचालित प्रयोगशाला प्रणाली।',
    'click':    'विवरण देखने के लिए क्लिक करें →',

    /* ── Skills ── */
    'sk-tag':   'तकनीकी दक्षता',
    'sk-title': 'कौशल',
    'sk1-cat':  'प्रोग्रामिंग भाषाएं',
    'sk2-cat':  'रोबोटिक्स और ROS2',
    'sk3-cat':  'AI और कंप्यूटर विज़न',
    'sk4-cat':  'हार्डवेयर',
    'sk5-cat':  'टूल्स और प्लेटफॉर्म',

    /* ── Experience ── */
    'exp-tag':  'कार्य इतिहास',
    'exp-title':'अनुभव',
    'exp-desc': 'भूमिकाएं और इंटर्नशिप जिन्होंने मेरी यात्रा को आकार दिया',
    'e1-role':  'रेडियो फ्रीक्वेंसी इंजीनियर',
    'e1-co':    'Optimized Solutions Limited',
    'e1-desc':  'कठोर सिग्नल विश्लेषण, पर्यावरणीय तनाव परीक्षण और व्यवस्थित हार्डवेयर डीबगिंग के माध्यम से RF-सक्षम एम्बेडेड सिस्टम विकसित और मान्य किए।',
    'e2-role':  'इलेक्ट्रिकल इंजीनियर',
    'e2-co':    'Bosch Rexroth',
    'e2-desc':  'हाइड्रोलिक और इलेक्ट्रोमैकेनिकल सिस्टम के लिए फॉल्ट डायग्नोसिस और सेंसर कैलिब्रेशन किया।',
    'e3-role':  'फर्मवेयर लीड',
    'e3-co':    'Robofest',
    'e3-desc':  'प्रतिस्पर्धी रोबोटिक्स प्लेटफॉर्म के लिए फर्मवेयर विकास का नेतृत्व किया और संपूर्ण हार्डवेयर व इलेक्ट्रॉनिक्स इंटीग्रेशन की देखरेख की। एम्बेडेड सॉफ्टवेयर आर्किटेक्चर, सेंसर इंटरफेसिंग, मोटर कंट्रोल और सभी इलेक्ट्रॉनिक सबसिस्टम के बीच विश्वसनीय संचार सुनिश्चित करना।',

    /* ── Contact ── */
    'ct-title': 'संपर्क',
    'ct-tag':   'रोबोट के बारे में बात करते हैं!',
    'soc-gh':   'गिटहब',
    'soc-li':   'लिंक्डइन',
    'soc-cv':   'रिज्यूमे',

    /* ── Footer ── */
    'footer': 'मन जनोदिया द्वारा बनाया गया',

    /* ── Modal shared labels ── */
    'm-overview':    'सारांश',
    'm-challenges':  'मुख्य उपलब्धियां',
    'm-skills-used': 'कौशल और टूल्स',
    'm-sk-context':  'संदर्भ',
    'lnk-gh':        'गिटहब',

    /* ── Modal project overviews ── */
    'm-drone-ov': 'Webots में 3 DJI Mavic2Pro ड्रोन को लैपटॉप वेबकैम के सामने हाथ के इशारों से नियंत्रित करने की प्रणाली। NumPy में खरोंच से बने दो अलग न्यूरल नेटवर्क बाएं हाथ की मुद्रा (कौन सा ड्रोन) और दाएं हाथ की क्रिया का वर्गीकरण करते हैं।',
    'm-cam-ov':   'Raspberry Pi 4 पर YOLOv8 (NCNN) और Picamera2 का उपयोग करके pan-tilt कैमरा नियंत्रण के लिए दो MG996R servos के साथ रियल-टाइम ऑब्जेक्ट डिटेक्शन।',
    'm-tb4-ov':   'Nav2 और SLAM का उपयोग करके TurtleBot 4 के लिए स्वायत्त नेविगेशन में गतिशील वेपॉइंट शेड्यूलिंग। वास्तविक इनडोर वातावरण (H101 lab) में तैनात।',

    /* ── Skill modal context descriptions ── */
    'sk1-desc': 'Python रोबोटिक्स के लिए प्राथमिक। C++ performance nodes के लिए। Bash scripting के लिए।',
    'sk2-desc': 'Ubuntu 24.04 पर पूर्ण ROS2 Jazzy — Nav2, SLAM, MoveIt2 वास्तविक रोबोट तैनाती के लिए।',
    'sk3-desc': 'खरोंच से 5-लेयर NN। MediaPipe HandLandmarker। OpenCV ArUco पोज़ एस्टिमेशन। YOLOv8 NCNN।',
    'sk4-desc': 'वास्तविक रोबोट के साथ हाथों-हाथ अनुभव। I2C, WiFi, TCP, serial comm डीबग किया।',
    'sk5-desc': 'Webots और Gazebo सिमुलेशन के लिए। Flask REST APIs। सभी GitHub पर।',
  }
};

window.toggleLang = function () {
  const isHi = (window.currentLang !== 'hi');
  window.currentLang = isHi ? 'hi' : 'en';
  const btn = document.getElementById('lang-toggle');
  btn.textContent = isHi ? 'EN' : 'हिं';
  btn.classList.toggle('on', isHi);
  document.body.classList.toggle('hi', isHi);
  document.documentElement.lang = window.currentLang;

  const d = T[window.currentLang];
  document.querySelectorAll('[data-t]').forEach(el => {
    const v = d[el.dataset.t];
    if (v !== undefined) el.textContent = v;
  });

  /* update showcase label */
  const i = window.getCurrentScene ? window.getCurrentScene() : 0;
  const scTxt = document.getElementById('sc-txt');
  if (scTxt) {
    scTxt.textContent = isHi
      ? (window.showcaseLabelsHI || [])[i] || ''
      : (window.showcaseLabelsEN || [])[i] || '';
  }
};