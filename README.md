# Mann Janodia — Robotics Engineer Portfolio

A clean, dark-themed portfolio showcasing 3 robotics projects with live SVG animations.

---

## 📁 File Structure

```
portfolio/
├── index.html              ← Main HTML file (all content)
├── resume.pdf              ← ADD YOUR RESUME HERE
├── css/
│   └── style.css           ← All styling (dark theme, animations)
├── js/
│   ├── main.js             ← Language toggle, translations (EN/HI)
│   ├── showcase.js         ← 3 project animations (SVG scenes)
│   ├── background.js       ← Floating icon background canvas
│   └── modal.js            ← Modal open/close logic
└── images/
    └── photo.jpg           ← ADD YOUR PHOTO HERE
```

---

## 🚀 Quick Start (GitHub Pages)

### Step 1: Create GitHub Repository
1. Go to **github.com** → Sign in (create account if needed)
2. Click **+** (top-right) → **New repository**
3. Name it: `yourusername.github.io` (must match your username exactly, lowercase)
4. Set to **Public**
5. Click **Create repository**

### Step 2: Upload Files
**Option A: Drag & Drop (Easiest)**
1. Open your new repo on GitHub
2. Click **Add file** → **Upload files**
3. Drag all files into the browser window (keep folder structure):
   - index.html (root)
   - css/style.css
   - js/main.js, showcase.js, background.js, modal.js
   - images/ (folder)
4. Click **Commit changes**

**Option B: Git Command Line**
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
# Copy all portfolio files here
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

### Step 3: Add Your Content
1. Add your resume as `resume.pdf` in the root folder
2. Add your photo as `images/photo.jpg`
3. Edit `index.html` to add your real GitHub repo links (search for `#` in .mlink href elements)

### Step 4: Go Live
Your portfolio is now live at: **https://yourusername.github.io**

GitHub automatically deploys from the `main` branch. Changes take 1-3 minutes to appear.

---

## 📝 Edit Your Portfolio

### Change Personal Info
In `index.html`, search and replace:
- **mannjanodiauk@gmail.com** → your email
- **MannJanodia3404** → your GitHub username  
- **linkedin.com/in/mann-janodia** → your LinkedIn
- **github.com/MannJanodia3404** → your GitHub profile URL (appears in modal links)

### Update Experience Section
In `index.html`, find `<section id="experience">` and update:
- E1 (Robocon lead): dates, company, description, tags
- E2 & E3: your real internship details

### Update Project Links
In each project modal (search `id="m-p1"`, `id="m-p2"`, `id="m-p3"`), change:
```html
<a href="#" class="mlink" target="_blank">GitHub</a>
```
to:
```html
<a href="https://github.com/yourusername/your-repo-name" class="mlink" target="_blank">GitHub</a>
```

### Change Color Scheme
In `css/style.css`, edit `:root {}`:
- `--cyan: #00d9ff` (primary)
- `--purple: #7000ff` (secondary)
- `--pink: #ff006e` (accent)
- `--dark: #0d1220` (background)

---

## 🎬 Animation Explanation

### 3 Project Scenes (Auto-rotate every 5.5 seconds)

**Scene 1: Gesture Multi-Drone Control**
- Laptop with webcam → Right hand selects drone (d1/d2/d3) → Left hand controls direction
- d2 highlighted and hovering
- Signal path shows gesture commands flowing into simulation
- 3 propellers spinning on each drone

**Scene 2: TurtleBot4 Queuing Navigation**
- Map grid showing 3 waypoints (w1, w2, w3)
- w1 and w2 marked OCCUPIED (red rings, t1 and t2 robots inside)
- w3 marked FREE (cyan)
- t3 animates from docking station moving toward w3
- Logic box shows: check w1→occupied, check w2→occupied, check w3→FREE→go!

**Scene 3: Camera Servo Tracking (RPi)**
- Webcam view with person walking
- YOLO bounding box (blue) with confidence "person 0.92" follows the person
- Crosshair in the box centre tracks the person
- RPi 4 board on right with GPIO pins labeled
- Pan and tilt servo boxes showing motion
- Command arrows from RPi to servos
- Error signal feedback from bounding box back to servos

All animations loop infinitely. Click the dots below the showcase to manually switch scenes.

---

## 🌐 Bilingual Support (EN / हिं)

Click the **हिं/EN** button (top-right nav) to toggle Hindi translations.

**Translated elements:**
- All section titles, buttons, and text
- Project names and descriptions
- Skill categories
- Experience dates (uses Hindi numerals)
- Modal content
- Scene labels

**To add Hindi text for custom content:**
In `js/main.js`, find the `T = { en: { ... }, hi: { ... } }` object and add:
```javascript
en: {
  'your-key': 'English text',
  ...
},
hi: {
  'your-key': 'हिंदी पाठ',
  ...
}
```

Then in `index.html`, use: `<element data-t="your-key">English text</element>`

---

## 🎨 Customization Tips

### Update Modal Descriptions
Each project has a modal (click the project card). Edit in `index.html`:
- `id="m-p1"` → Project 1 details
- `id="m-p2"` → Project 2 details
- `id="m-p3"` → Project 3 details

### Add More Skills
In `<section id="skills">`, duplicate a `<div class="sk-row">` block:
```html
<div class="sk-row rev" onclick="openModal('m-skX')">
  <div class="sk-cat" data-t="skX-cat">Your Skill Category</div>
  <div class="chips">
    <span class="chip">Skill 1</span>
    <span class="chip">Skill 2</span>
  </div>
</div>
```

Create matching modal with `id="m-skX"`.

### Adjust Animation Speed
In `js/showcase.js`, change the interval (milliseconds):
```javascript
timer = setInterval(() => {
  const nextIdx = (window.currentScene + 1) % sceneContent.length;
  goScene(nextIdx);
}, 5500);  // ← change this number (currently 5.5 seconds)
```

---

## 📱 Responsive Design

Portfolio is fully responsive:
- **Desktop (>1024px)**: Full layout with showcase animation on right
- **Tablet (768-1024px)**: Compact layout, animations scale down
- **Mobile (<768px)**: Single column, showcase full-width at top

No changes needed — CSS handles it automatically.

---

## 🔒 Privacy & Security

- **No backend**: Purely static HTML/CSS/JS (hosted on GitHub infrastructure)
- **GitHub Pages**: Free, secure HTTPS by default
- **Email link**: `mailto:` link shows your address — keep this private or use a contact form

To hide email: Replace `<a href="mailto:...">Email</a>` with a comment-based contact CTA.

---

## ✅ Checklist Before Going Live

- [ ] Resume added as `resume.pdf`
- [ ] Photo added as `images/photo.jpg`
- [ ] Email address updated in footer
- [ ] GitHub username updated (nav + all modal links)
- [ ] LinkedIn profile added
- [ ] Experience section filled with your real roles
- [ ] Project 3 modal links point to your repos
- [ ] Tested on mobile (use browser DevTools)
- [ ] Tested language toggle (EN/हिं)
- [ ] All links open correctly

---

## 🐛 Troubleshooting

**Portfolio not showing online?**
- Wait 2-3 minutes for GitHub to deploy
- Hard refresh your browser (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)
- Check repo is set to **Public**
- Verify repo name is exactly `yourusername.github.io`

**Images not loading?**
- Ensure `resume.pdf` and `images/photo.jpg` exist in correct folders
- Use **relative paths** (already correct in HTML)
- Check file names are lowercase

**Hindi text not showing?**
- Verify fonts are loaded (check `<link>` tag for Hind font)
- Use data-t attributes matching keys in `main.js` T object

**Animations not animating?**
- Check browser supports CSS animations (all modern browsers)
- Open browser DevTools (F12) → Console, check for errors
- Ensure `showcase.js` is loading (Network tab)

---

## 📞 Support

For issues or customizations, refer to the **ANIMATION_GUIDE.md** (if included) for detailed animation editing.

---

**Portfolio Template** | Made with HTML, CSS, JavaScript  
**Hosted on GitHub Pages** | No deployment costs, no backend required

Enjoy! 🚀
