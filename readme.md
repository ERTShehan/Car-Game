# 🏎️ Traffic Racer - 2D Web Game

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

A classic, fast-paced 2D car racing game built entirely with HTML, CSS, and jQuery. Dodge the oncoming traffic, survive as long as possible, and achieve the highest score!

🔴 **Live Demo:** https://traffic-racer-assignment-09.web.app/

## ✨ Features

* **Infinite Scrolling Environment:** The road animates continuously to simulate high-speed driving.
* **Dynamic Difficulty:** The game gets progressively harder! Speed and level increase automatically every 200 points.
* **Collision Detection:** Accurate hitboxes to detect crashes between the player's car and system-generated cars.
* **Score & Level Tracking:** Real-time UI updates for your current score and level.
* **Pause Functionality:** Need a break? Press `ESC` to pause and resume the game.
* **Audio Effects:** Includes crash sound effects for an immersive experience.

## 🎮 How to Play

Use your keyboard to control the car and avoid collisions:

* ⬆️ **Up Arrow:** Move Forward
* ⬇️ **Down Arrow:** Move Backward
* ⬅️ **Left Arrow:** Steer Left
* ➡️ **Right Arrow:** Steer Right
* ⏸️ **ESC Key:** Pause the game

## 🛠️ Technologies Used

* **HTML5:** Game structure and UI layout.
* **CSS3:** Styling, responsive game container, and static background rendering.
* **JavaScript (jQuery 3.6.0):** Game loop (`requestAnimationFrame`), DOM manipulation, event handling, and collision logic.

## 📂 Folder Structure

```text
Game Assignment 09/
├── assets/
│   ├── images/
│   │   ├── Car image.png
│   │   ├── My car image.png
│   │   ├── Road image2.png
│   │   └── timelapsed-vehicle-raod.jpg
│   └── sounds/
│       └── oversound.mp3
├── css/
│   └── index.css
├── js/
│   └── index.js
└── index.html