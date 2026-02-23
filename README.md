<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Design_Patterns-FF6F61?style=for-the-badge&logo=bookstack&logoColor=white" alt="Design Patterns" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

# 🏗️ Design Patterns — Learn by Example

> **A hands-on collection of software design patterns implemented in TypeScript with real-world analogies and practical code examples.**

---

## 🎯 Why This Repository?

Design patterns are **battle-tested solutions** to recurring software design problems. Yet, most resources explain them with abstract UML diagrams that feel disconnected from real code.

This repository takes a different approach:

- 🧩 **Problem → Solution** — Each pattern starts with a concrete problem you'd face in a real project.
- 💻 **Runnable Code** — Every example is a self-contained TypeScript file you can execute instantly.
- 🌍 **Real-World Analogies** — Concepts are mapped to everyday objects and scenarios for intuitive understanding.

---

## 📚 Pattern Catalog

| Category                               | Patterns                                     | Description                                        |
| -------------------------------------- | -------------------------------------------- | -------------------------------------------------- |
| 📘 [**GoF Patterns**](./GoF/README.md) | Strategy, Builder, Adapter, _...more coming_ | The classic 23 patterns from the Gang of Four book |
| 📗 [**PofEAA**](./PofEAA/README.md)    | _Coming soon_                                | Enterprise architecture patterns by Martin Fowler  |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/ross2p/paternt.git
cd paternt

# Navigate to any pattern and run it
cd GoF/behavioral/strategy
npm install
npx ts-node payment-strategy.ts
```

---

## 🗂️ Repository Structure

```
paternt/
├── GoF/                          # Gang of Four Patterns
│   ├── behavioral/               #   Behavioral patterns
│   │   └── strategy/             #     Strategy pattern example
│   ├── creational/               #   Creational patterns
│   │   └── builder/              #     Builder pattern example
│   └── structural/               #   Structural patterns
│       └── adapter/              #     Adapter pattern example
├── PofEAA/                       # Patterns of Enterprise Application Architecture
└── README.md                     # ← You are here
```

---

<p align="center">
  <sub>Made with ❤️ to make design patterns accessible and practical.</sub>
</p>
