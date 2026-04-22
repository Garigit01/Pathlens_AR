# 🚀 PathLense – Smart Indoor Navigation System

PathLense is a **full-stack, software-based indoor navigation system** that simulates Augmented Reality (AR) guidance inside buildings like malls, hospitals, and campuses.

It provides **real-time visual directions**, **offline support**, and **smart routing** — all without requiring external hardware like BLE beacons.

---

## 🧠 Problem Statement

Traditional GPS navigation fails in indoor environments due to weak signals and poor accuracy. Users often struggle to find locations inside large buildings.

PathLense solves this by providing:
- 📍 Indoor navigation
- 🎥 AR-like visual guidance
- 📦 Offline-first functionality

---

## 💡 Key Features

- 🎯 **AR Simulation**
  - Webcam-based navigation view
  - Direction arrows overlay (↑ ↓ ← →)
  - Distance indicators & instructions

- 🧭 **Smart Routing**
  - Shortest path using A* algorithm
  - Step-by-step navigation

- 📦 **Offline-First System**
  - Cached map data using localStorage
  - Works even without internet

- 🔄 **Dynamic Data Sync**
  - Fetches "Blueprint Pack" from server
  - Stores map, coordinates, POIs

- 🔍 **Semantic Search**
  - Understands keywords like:
    - "toilet" → restroom, washroom
    - "lift" → elevator

- 🗺️ **Indoor Map View**
  - 2D map with rooms and corridors
  - User position tracking (simulated)

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js

### Database
- JSON (or MongoDB optional)

### APIs & Browser Features
- getUserMedia (Webcam access)
- localStorage (offline caching)

---

## ⚙️ System Architecture