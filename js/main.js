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
    'nav-home':'Home','nav-proj':'Projects','nav-cont':'Contact',
    'hero-tag':'MSc ROBOTICS ENGINEER',
    'h1a':'Building robots that','h1b':'bridge imagination & reality',
    'hero-sub':'Mann Janodia\u00a0•\u00a0MSc Robotics\u00a0•\u00a0Autonomous Systems',
    'hero-desc':"I build robots that think, navigate, and act — from a 6-DOF arm sorting test tubes with ±2mm precision to gesture-controlled drones flying in real time. My goal: make robotics smarter and more accessible.",
    'hero-resume':'Resume',
    'about-tag':'About Me','about-title':'Why I Build Robots',
    'about-h3':'From Curiosity to Engineering',
    'about-p1':'My passion for robotics began when I realised that the gap between "what robots can do" and "what we need them to do" is simply engineering problems waiting to be solved.',
    'about-p2':"I don't just write code — I build complete systems. From a robotic arm sorting samples with millimetre precision to a drone responding to hand gestures in real time, I turn complex challenges into working solutions.",
    'about-strong':'What drives me?',
    'about-p3':'The moment hardware, software, and intelligence converge perfectly.',
    'proj-tag':'Featured Work','proj-title':'Projects','proj-desc':'Click any project card to see full details',
    'p1-name':'Niryo NED2 RFID Sorting',
    'p1-short':'6-DOF arm + TurtleBot4 + ESP32 RFID for autonomous test-tube sorting.',
    'p2-name':'Gesture Multi-Drone Control',
    'p2-short':'Two-hand gesture control of 3 drones using a custom 5-layer neural network in Webots.',
    'p3-name':'TurtleBot4 Queuing Navigation',
    'p3-short':'Dynamic occupancy-aware navigation — TurtleBot queues when waypoints are occupied.',
    'p4-name':'Camera Servo Tracking (RPi)',
    'p4-short':'YOLO + Picamera2 real-time object tracking with MG996R pan-tilt servos on Raspberry Pi 4.',
    'p5-name':'Autonomous Mapping Robot',
    'p5-short':'Two-Arduino robot that maps a room autonomously and returns with scheduled stops.',
    'p6-name':'Project 6 — Your Title',
    'p6-short':'Short description. Replace with your actual project.',
    'click':'Click to expand →',
    'sk-tag':'Technical Arsenal','sk-title':'Skills',
    'sk1-cat':'Languages',
    'sk2-cat':'Robotics & ROS2',
    'sk3-cat':'AI & Computer Vision',
    'sk4-cat':'Hardware',
    'sk5-cat':'Tools & Platforms',
    'exp-tag':'Work History','exp-title':'Experience','exp-desc':'Roles and internships that shaped my engineering journey',
    'e1-date':'2023 — 2024',
    'e1-role':'Team Lead — Robocon',
    'e1-co':'Your University / Institute Name',
    'e1-desc':'Led a team of engineers in designing, building, and programming robots for the ABU Robocon competition. Responsible for overall system architecture, mechanical design coordination, and software integration.',
    'e2-date':'Year — Year',
    'e2-role':'Internship Title',
    'e2-co':'Company Name',
    'e2-desc':'Add your internship description here. Include what you built, what technologies you used, and the impact you made.',
    'e3-date':'Year — Year',
    'e3-role':'Internship Title',
    'e3-co':'Company Name',
    'e3-desc':'Add your second internship description here. What you built, technologies, and impact.',
    'ct-title':'Contact','ct-tag':"Let's chat about robots!",
    'soc-gh':'GitHub','soc-li':'LinkedIn','soc-cv':'Resume',
    'footer':'Made by Mann Janodia',
    /* modal content */
    'm-overview':'Overview','m-challenges':'Key Achievements',
    'm-skills-used':'Skills & Tools','m-sk-context':'Context',
    'stat-acc':'Accuracy','stat-up':'Uptime','stat-cyc':'Cycle Time',
    'stat-spd':'Speed','stat-lat':'Latency','stat-dock':'Docking',
    'stat-map':'SLAM Map','stat-auto':'Autonomous',
    'lnk-gh':'GitHub','lnk-rp':'Report',
    'm-niryo-ov':'Integrated Niryo NED2 6-axis robotic arm with TurtleBot4 mobile platform for automated lab sorting. ESP32 + PN532 reads RFID tags to identify each test tube and route it to the correct bin.',
    'm-niryo-l1':'Resolved ±15mm offset by removing calibrate_auto() and implementing manual joint-space calibration',
    'm-niryo-l2':'Flask middleware orchestrates ESP32 (WebSocket), Niryo (TCP PyNiryo), TurtleBot4 (ROS2)',
    'm-niryo-l3':'Non-blocking WebSocket stream for continuous RFID scanning during arm movement',
    'm-niryo-l4':'Ubuntu 24.04, ROS2 Jazzy; ESP32 + PN532 over I2C · Robot IP: 192.168.8.150',
    'm-drone-ov':'Two-hand gesture control of 3 simulated DJI Mavic2Pro drones in Webots. Left hand selects which drone(s); right hand commands actions. Custom 5-layer neural network built from scratch in NumPy.',
    'm-drone-l1':'Left hand: 4 classes (Drone 1/2/3/All) — Right hand: 6 actions (Takeoff/Land/Up/Down/Flip/Hover)',
    'm-drone-l2':'Custom fully-connected network: 35→64→32→16→N trained with Adam, L-BFGS, and Nelder-Mead',
    'm-drone-l3':'Mass compensation mid-flight — drone adjusts thrust proportionally when mass changes',
    'm-drone-l4':'35 hand-landmark features per hand extracted from MediaPipe HandLandmarker API',
    'm-queue-ov':'Dynamic occupancy-aware navigation for TurtleBot4. The robot automatically reroutes to a queue position when a target waypoint is occupied. Built on ROS2 Jazzy Nav2 with SLAM.',
    'm-queue-l1':'Server node maintains waypoint occupancy states (FREE/OCCUPIED); client reroutes automatically',
    'm-queue-l2':'Nav2 action server for sequential multi-waypoint missions with dynamic obstacle avoidance',
    'm-queue-l3':'Precision docking using ArUco markers at ±5cm; complete 40m² SLAM map of H101 lab',
    'm-cam-ov':'Real-time multi-object detection and tracking on Raspberry Pi 4 using YOLOv8 (NCNN-exported) with two MG996R servos for pan-tilt camera control.',
    'm-cam-l1':'Picamera2 + YOLOv8n NCNN model for low-latency inference on Pi hardware',
    'm-cam-l2':'PID-style proportional control (pan + tilt) keeps selected class centred in frame',
    'm-cam-l3':'Configurable target class (default: person), deadband, max step angle, and proportional gain',
    'm-cam-l4':'External 5V servo power supply; pigpio for PWM signal generation on GPIO17/18',
    'm-auto-ov':'Two-Arduino autonomous robot that maps a room by moving forward until hitting a wall, then returns with 5 equally-spaced stops. Bridge slowdown and obstacle detection included.',
    'm-auto-l1':'Master board: 3 HC-SR04 sensors + LEDs; Slave board: DRV8833 motor PWM + encoder counting',
    'm-auto-l2':'850 encoder ticks = 1 wheel revolution; minimum detectable distance 7.06μm',
    'm-auto-l3':'Bridge upward sensor triggers 50% speed slowdown; rear obstacle terminates run safely',
    'm-auto-l4':'Max velocity 36.63 cm/s at PWM 200; one-way serial Master Pin11 → Slave Pin8',
    'sk1-desc':'Python primary for robotics. C++ for performance-critical nodes. Bash for system scripting.',
    'sk2-desc':'Full ROS2 Jazzy systems on Ubuntu 24.04 — Nav2, SLAM, MoveIt2 for real robot deployment.',
    'sk3-desc':'Custom 5-layer NNs from scratch. MediaPipe HandLandmarker. OpenCV + ArUco pose estimation. YOLOv8 NCNN for RPi.',
    'sk4-desc':'Hands-on with Niryo NED2, TurtleBot4, ESP32, Raspberry Pi 4. Debugged I2C, WiFi, TCP.',
    'sk5-desc':'Webots, Gazebo for simulation. Flask REST APIs. All projects on GitHub with documented history.'
  },
  hi: {
    'nav-home':'होम','nav-proj':'प्रोजेक्ट्स','nav-cont':'संपर्क',
    'hero-tag':'एमएससी रोबोटिक्स इंजीनियर',
    'h1a':'ऐसे रोबोट बनाता हूं जो','h1b':'कल्पना और वास्तविकता को जोड़ें',
    /* Name in Hindi */
    'hero-sub':'मन जनोदिया\u00a0•\u00a0एमएससी रोबोटिक्स\u00a0•\u00a0स्वायत्त प्रणालियाँ',
    'hero-desc':'मैं ऐसे रोबोट बनाता हूं जो सोचते, नेविगेट और काम करते हैं — ±2mm सटीकता से टेस्ट ट्यूब छांटने वाली आर्म से लेकर इशारों से नियंत्रित ड्रोन तक।',
    'hero-resume':'रिज्यूमे',
    'about-tag':'मेरे बारे में','about-title':'मैं रोबोट क्यों बनाता हूं',
    'about-h3':'जिज्ञासा से इंजीनियरिंग तक',
    'about-p1':'"रोबोट क्या कर सकते हैं" और "हमें उनसे क्या कराना है" के बीच की खाई सिर्फ इंजीनियरिंग की समस्याएं हैं — यही मेरी रुचि का आधार है।',
    'about-p2':'मैं सिर्फ कोड नहीं लिखता — मैं पूरे सिस्टम बनाता हूं। जटिल चुनौतियों को काम करने वाले समाधानों में बदलना मेरा जुनून है।',
    'about-strong':'मुझे क्या प्रेरित करता है?',
    'about-p3':'वह पल जब हार्डवेयर, सॉफ्टवेयर और बुद्धिमत्ता एकदम सही तरीके से मिलते हैं।',
    'proj-tag':'विशेष कार्य','proj-title':'प्रोजेक्ट्स','proj-desc':'पूरा विवरण देखने के लिए किसी भी कार्ड पर क्लिक करें',
    'p1-name':'निर्यो NED2 RFID सॉर्टिंग',
    'p1-short':'स्वचालित टेस्ट-ट्यूब छंटाई के लिए 6-DOF आर्म + TurtleBot4 + ESP32 RFID।',
    'p2-name':'इशारा मल्टी-ड्रोन नियंत्रण',
    'p2-short':'Webots में 3 ड्रोन को दो-हाथ इशारों और कस्टम न्यूरल नेटवर्क से नियंत्रित करना।',
    'p3-name':'TurtleBot4 क्यूइंग नेविगेशन',
    'p3-short':'गतिशील अधिभोग-जागरूक नेविगेशन — वेपॉइंट व्यस्त होने पर TurtleBot क्यू में लगता है।',
    'p4-name':'कैमरा सर्वो ट्रैकिंग (RPi)',
    'p4-short':'Raspberry Pi 4 पर YOLO + Picamera2 से रियल-टाइम ऑब्जेक्ट ट्रैकिंग।',
    'p5-name':'स्वायत्त मैपिंग रोबोट',
    'p5-short':'दो-Arduino रोबोट जो कमरे को स्वचालित रूप से मैप करता है और शेड्यूल्ड स्टॉप के साथ वापस आता है।',
    'p6-name':'प्रोजेक्ट 6 — शीर्षक',
    'p6-short':'संक्षिप्त विवरण। अपने वास्तविक प्रोजेक्ट से बदलें।',
    'click':'विवरण देखने के लिए क्लिक करें →',
    'sk-tag':'तकनीकी दक्षता','sk-title':'कौशल',
    /* Skill categories in Hindi */
    'sk1-cat':'प्रोग्रामिंग भाषाएं',
    'sk2-cat':'रोबोटिक्स और ROS2',
    'sk3-cat':'AI और कंप्यूटर विज़न',
    'sk4-cat':'हार्डवेयर',
    'sk5-cat':'टूल्स और प्लेटफॉर्म',
    'exp-tag':'कार्य इतिहास','exp-title':'अनुभव','exp-desc':'भूमिकाएं और इंटर्नशिप जिन्होंने मेरी यात्रा को आकार दिया',
    /* Dates in Hindi */
    'e1-date':'२०२३ — २०२४',
    'e1-role':'टीम लीड — रोबोकॉन',
    'e1-co':'आपके विश्वविद्यालय / संस्थान का नाम',
    'e1-desc':'ABU Robocon प्रतियोगिता के लिए रोबोट डिज़ाइन, निर्माण और प्रोग्रामिंग में एक इंजीनियरिंग टीम का नेतृत्व किया। समग्र सिस्टम आर्किटेक्चर, मैकेनिकल डिज़ाइन समन्वय और सॉफ़्टवेयर एकीकरण के लिए जिम्मेदार।',
    'e2-date':'वर्ष — वर्ष',
    'e2-role':'इंटर्नशिप पद',
    'e2-co':'कंपनी का नाम',
    'e2-desc':'अपनी इंटर्नशिप का विवरण यहां जोड़ें। आपने क्या बनाया, किन तकनीकों का उपयोग किया और क्या प्रभाव पड़ा।',
    'e3-date':'वर्ष — वर्ष',
    'e3-role':'इंटर्नशिप पद',
    'e3-co':'कंपनी का नाम',
    'e3-desc':'अपनी दूसरी इंटर्नशिप का विवरण यहां जोड़ें।',
    'ct-title':'संपर्क','ct-tag':'रोबोट के बारे में बात करते हैं!',
    'soc-gh':'गिटहब','soc-li':'लिंक्डइन','soc-cv':'रिज्यूमे',
    /* Name in Hindi in footer */
    'footer':'मन जनोदिया द्वारा बनाया गया',
    'm-overview':'सारांश','m-challenges':'मुख्य उपलब्धियां',
    'm-skills-used':'कौशल और टूल्स','m-sk-context':'संदर्भ',
    'stat-acc':'सटीकता','stat-up':'अपटाइम','stat-cyc':'चक्र समय',
    'stat-spd':'गति','stat-lat':'विलंबता','stat-dock':'डॉकिंग',
    'stat-map':'SLAM मैप','stat-auto':'स्वायत्त',
    'lnk-gh':'गिटहब','lnk-rp':'रिपोर्ट',
    'm-niryo-ov':'Niryo NED2 6-अक्ष आर्म को TurtleBot4 के साथ एकीकृत किया। ESP32 + PN532 RFID टैग पढ़कर सही Bin में भेजता है।',
    'm-niryo-l1':'calibrate_auto() हटाकर manual joint-space calibration से ±15mm offset ठीक किया',
    'm-niryo-l2':'Flask middleware ESP32, Niryo और TurtleBot4 को समन्वित करता है',
    'm-niryo-l3':'non-blocking WebSocket stream से लगातार RFID स्कैन',
    'm-niryo-l4':'Ubuntu 24.04, ROS2 Jazzy; I2C पर PN532',
    'm-drone-ov':'Webots में 3 DJI Mavic2Pro ड्रोन को दो-हाथ इशारों से नियंत्रित। NumPy में खरोंच से बनाया गया 5-परत न्यूरल नेटवर्क।',
    'm-drone-l1':'बायां हाथ: 4 वर्ग — दायां हाथ: 6 क्रियाएं',
    'm-drone-l2':'कस्टम नेटवर्क: 35→64→32→16→N; Adam, L-BFGS, Nelder-Mead से प्रशिक्षित',
    'm-drone-l3':'उड़ान के दौरान mass बदलने पर drone thrust स्वतः adjust होता है',
    'm-drone-l4':'MediaPipe HandLandmarker से 35 hand-landmark features',
    'm-queue-ov':'TurtleBot4 के लिए गतिशील अधिभोग नेविगेशन। वेपॉइंट व्यस्त होने पर रोबोट स्वचालित रूप से क्यू में जाता है।',
    'm-queue-l1':'सर्वर वेपॉइंट अधिभोग स्थिति बनाए रखता है; क्लाइंट स्वतः रीरूट करता है',
    'm-queue-l2':'Nav2 action server से बाधा-से-बचते हुए multi-waypoint navigation',
    'm-queue-l3':'ArUco से ±5cm डॉकिंग; 40m² H101 lab का SLAM map',
    'm-cam-ov':'Raspberry Pi 4 पर YOLOv8 (NCNN) और Picamera2 से रियल-टाइम object tracking, MG996R servos pan-tilt control।',
    'm-cam-l1':'Picamera2 + YOLOv8n NCNN — Pi hardware पर low-latency inference',
    'm-cam-l2':'Proportional control से selected class को frame centre में रखता है',
    'm-cam-l3':'Target class, deadband, gain सभी configurable constants हैं',
    'm-cam-l4':'External 5V servo supply; pigpio से PWM signal generation',
    'm-auto-ov':'दो-Arduino रोबोट जो आगे बढ़कर दीवार तक map करता है, फिर 5 समान-दूरी स्टॉप के साथ वापस आता है।',
    'm-auto-l1':'Master: 3 ultrasonic sensors + LEDs; Slave: motor PWM + encoder counting',
    'm-auto-l2':'850 encoder ticks = 1 चक्र; न्यूनतम दूरी 7.06μm',
    'm-auto-l3':'Bridge sensor पर 50% speed; पिछली बाधा पर सुरक्षित रुकाव',
    'm-auto-l4':'Max velocity 36.63 cm/s; one-way serial communication',
    'sk1-desc':'Python रोबोटिक्स के लिए प्राथमिक। C++ performance nodes के लिए। Bash scripting के लिए।',
    'sk2-desc':'Ubuntu 24.04 पर पूर्ण ROS2 Jazzy — Nav2, SLAM, MoveIt2।',
    'sk3-desc':'खरोंच से 5-परत NN। MediaPipe HandLandmarker। OpenCV + ArUco pose estimation। YOLOv8 NCNN।',
    'sk4-desc':'Niryo, TurtleBot4, ESP32, Raspberry Pi 4 के साथ हाथों-हाथ अनुभव।',
    'sk5-desc':'Webots, Gazebo simulation। Flask REST API। GitHub पर documented।'
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

