let currentScene = 0;
const sceneNames = [
  "Gesture Multi-Drone (3× UAV)",
  "Camera Servo Tracking (RPi)",
  "TurtleBot4 Occupancy Queuing"
];

function goScene(i) {
  currentScene = i;
  
  // Hide all scenes
  document.querySelectorAll('.scene').forEach(scene => {
    scene.classList.remove('on');
  });
  
  // Show current scene
  document.querySelectorAll('.scene')[i].classList.add('on');
  
  // Update dots
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('on', index === i);
  });
  
  // Update label
  document.getElementById('sc-txt').textContent = sceneNames[i];
}

// Auto-rotate scenes every 8 seconds
setInterval(() => {
  currentScene = (currentScene + 1) % 3;
  goScene(currentScene);
}, 8000);