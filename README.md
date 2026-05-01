# Mann Janodia — Personal Portfolio

My personal robotics engineering portfolio, built from scratch with vanilla HTML, CSS, and JavaScript. 

Live at: **https://mannjanodia3404.github.io**

---

## What's in here

This is a single-page portfolio that covers my robotics projects, skills, experience, and contact info. It has a bilingual toggle (English / Hindi), animated project showcase scenes in the hero section, and expandable project modals with full technical details.

```
├── index.html              # Main page — everything lives here
├── css/
│   └── style.css           # All styling
├── js/
│   ├── main.js             # Language toggle, scroll reveal, translations
│   ├── modal.js            # Project modal open/close logic
│   ├── showcase.js         # Hero scene carousel (the animated SVG switcher)
│   └── background.js       # Animated canvas background
├── images/
│   └── photo.jpg           # My photo in the About section
└── resume.pdf              # Downloadable resume
```

---

## Projects covered

- **Gesture Multi-Drone Control** — Two-hand gesture control of 3 DJI Mavic2Pro drones in Webots using a custom 5-layer neural network built from scratch in NumPy. MediaPipe reads hand landmarks, the network classifies gestures in real time, and commands are written to a shared JSON file the drone controllers read every 8ms.

- **Camera Servo Tracking (RPi)** — YOLOv8 NCNN running on a Raspberry Pi 4 with Picamera2, tracking objects with two MG996R pan-tilt servos via pigpio PWM. Proportional control keeps the target class centred at 30fps.

- **TurtleBot4 Occupancy Navigation** — ROS2 Jazzy + Nav2 system where the robot checks waypoint occupancy before navigating. Built two nodes: a server that tracks FREE/OCCUPIED state per waypoint, and a client that auto-reroutes when a slot is taken. Deployed on a real TurtleBot4 in an indoor lab environment.

- **Autonomous Mapping Robot** — Dual-Arduino (Master/Slave) robot that maps a room using HC-SR04 ultrasonic sensors and encoder odometry, then executes a return journey with equally-spaced scheduled stops. Bridge detection slows the robot to 50% speed automatically.

- **Niryo NED2 Test Tube Sorting System** — Three-system integration: Niryo NED2 arm, TurtleBot4, and an ESP32+PN532 RFID scanner. TurtleBot docks, triggers the arm via Flask REST API, arm picks a tube, holds it at the scanner, ESP32 reads the RFID tag and sends the UID over WiFi, arm routes to the correct bin. All coordinated through threading events — zero human intervention.

---

## How the language toggle works

The Hindi/English toggle is handled entirely in `js/main.js`. Every translatable element in the HTML has a `data-t="key"` attribute. When you click the toggle button, `toggleLang()` loops through all those elements and swaps the text using the `T.en` or `T.hi` translation objects.

**Important:** if you change any text directly in `index.html` on an element that has a `data-t` attribute, you must also update the matching string in `T.en` inside `main.js` — otherwise toggling back to English will restore the old text.

For elements that contain child HTML (like a `<br>` or a styled `<span>` inside a paragraph), the outer `<p>` should not have `data-t` on it — put `data-t` on the inner `<span>` elements separately. This stops `textContent` from wiping out the child elements when the language switches.

---

## Making changes

**Editing project cards** — find the `.proj-grid` section in `index.html`. Each card has `data-t` keys on the `<h3>` and `<p>` — update both the HTML and `T.en` in `main.js`.

**Editing modal details** — modals are at the bottom of `index.html` before the closing `</div>` of `.overlay`. Each modal has an `id` matching its card's `onclick` value.

**Adding a translation** — add the key/value pair to both `T.en` and `T.hi` in `main.js`, then add `data-t="your-key"` to the element in `index.html`.

**Updating experience/skills** — find the `#experience` and `#skills` sections in `index.html`. The `data-t` keys for role, company and description are `e1-role`, `e1-co`, `e1-desc` (and `e2-`, `e3-` for the others). Mirror any text changes in `main.js`.

---

## Deploying changes

This site is hosted on GitHub Pages directly from the `main` branch. Any push to `main` triggers a redeploy automatically — usually live within 1–2 minutes.

```bash
# Stage your changes
git add index.html js/main.js

# Commit
git commit -m "Your message here"

# Push
git push origin main
```

After pushing, open the site in an **incognito window** (`Ctrl+Shift+N`) to bypass browser cache and see the changes immediately. If the browser is still showing the old version, do a hard refresh with `Ctrl+Shift+R`.

If the browser keeps caching an old version of `main.js`, add a version query string to the script tag at the bottom of `index.html`:

```html
<script src="js/main.js?v=3"></script>
```

Increment the number each time you want to force a fresh download.

---

## Tech stack

| What | How |
|---|---|
| Structure | Vanilla HTML5 |
| Styling | CSS3 with custom properties |
| Interactivity | Vanilla JavaScript (ES6+) |
| Animations | CSS keyframes + canvas API |
| Project scenes | Inline SVG with CSS animations |
| Hosting | GitHub Pages |
| Fonts | Space Grotesk, IBM Plex Mono, Hind (Google Fonts) |

---

## Contact

- Email: mannjanodiauk@gmail.com
- GitHub: https://github.com/MannJanodia3404
- LinkedIn: https://www.linkedin.com/in/mann-janodia/
