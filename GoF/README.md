<p align="center">
  <img src="https://img.shields.io/badge/Gang_of_Four-Design_Patterns-blueviolet?style=for-the-badge" alt="GoF" />
</p>

# 📘 Gang of Four (GoF) Design Patterns

> **The 23 foundational design patterns from the book _"Design Patterns: Elements of Reusable Object-Oriented Software"_ (1994) by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides.**

---

## ❓ The Problem

Software developers constantly reinvent solutions to the **same recurring design problems**: How do I create objects flexibly? How do I compose classes without rigidity? How do I change behavior at runtime?

Without established patterns, codebases tend to become:

- 🔴 **Tightly coupled** — changing one part breaks another.
- 🔴 **Rigid** — adding new features requires modifying existing code.
- 🔴 **Hard to maintain** — no shared vocabulary among team members.

## ✅ The Solution

The Gang of Four cataloged **23 proven solutions** organized into three categories, giving developers a **shared language** and **reusable blueprints** for flexible, maintainable object-oriented design.

---

## 🗂️ Pattern Categories

### 🏭 Creational Patterns

> _"How should objects be created?"_

Creational patterns abstract the instantiation process, making systems independent of how their objects are created, composed, and represented.

| Pattern                                       | Status  | Description                            |
| --------------------------------------------- | ------- | -------------------------------------- |
| [**Builder**](./creational/builder/README.md) | ✅ Done | Construct complex objects step by step |
| Abstract Factory                              | 🔜 Soon | Create families of related objects     |
| Factory Method                                | 🔜 Soon | Delegate instantiation to subclasses   |
| Prototype                                     | 🔜 Soon | Clone existing objects                 |
| Singleton                                     | 🔜 Soon | Ensure a class has only one instance   |

---

### 🧱 Structural Patterns

> _"How should objects be composed?"_

Structural patterns deal with object composition, forming larger structures from individual parts while keeping them flexible and efficient.

| Pattern                                       | Status  | Description                                |
| --------------------------------------------- | ------- | ------------------------------------------ |
| [**Adapter**](./structural/adapter/README.md) | ✅ Done | Make incompatible interfaces work together |
| Bridge                                        | 🔜 Soon | Separate abstraction from implementation   |
| Composite                                     | 🔜 Soon | Treat objects and groups uniformly         |
| Decorator                                     | 🔜 Soon | Add behavior dynamically                   |
| Facade                                        | 🔜 Soon | Provide a simplified interface             |
| Flyweight                                     | 🔜 Soon | Share objects to save memory               |
| Proxy                                         | 🔜 Soon | Control access to an object                |

---

### 🎭 Behavioral Patterns

> _"How should objects communicate?"_

Behavioral patterns define how objects interact and distribute responsibilities, focusing on algorithms and the flow of control.

| Pattern                                         | Status  | Description                                |
| ----------------------------------------------- | ------- | ------------------------------------------ |
| [**Strategy**](./behavioral/strategy/README.md) | ✅ Done | Swap algorithms at runtime                 |
| Chain of Responsibility                         | 🔜 Soon | Pass requests along a chain of handlers    |
| Command                                         | 🔜 Soon | Encapsulate actions as objects             |
| Iterator                                        | 🔜 Soon | Traverse collections uniformly             |
| Mediator                                        | 🔜 Soon | Reduce coupling between objects            |
| Memento                                         | 🔜 Soon | Capture and restore state                  |
| Observer                                        | 🔜 Soon | Notify dependents of state changes         |
| State                                           | 🔜 Soon | Alter behavior based on internal state     |
| Template Method                                 | 🔜 Soon | Define skeleton, defer steps to subclasses |
| Visitor                                         | 🔜 Soon | Add operations without modifying classes   |
| Interpreter                                     | 🔜 Soon | Define a grammar and interpret sentences   |

---

## 📖 How Each Pattern Is Documented

Every pattern in this repository follows a consistent structure:

```
📁 pattern-name/
├── README.md              → Problem, solution, analogy, and diagram
├── example-file.ts        → Self-contained TypeScript implementation
├── package.json           → Dependencies
└── tsconfig.json          → TypeScript configuration
```

Each `README.md` answers three key questions:

1. **🔴 What problem does it solve?** — The pain point that motivates the pattern.
2. **🟢 How does it solve it?** — The structural/behavioral mechanism.
3. **💡 What's the essence?** — A one-line takeaway to remember.

---

<p align="center">
  <sub>📚 Patterns are being added progressively — star the repo to stay updated!</sub>
</p>
