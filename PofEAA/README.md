<p align="center">
  <img src="https://img.shields.io/badge/PofEAA-Enterprise_Patterns-green?style=for-the-badge" alt="PofEAA" />
</p>

# 📗 Patterns of Enterprise Application Architecture (PofEAA)

> **A catalog of patterns for building enterprise applications, as described by Martin Fowler in his book _"Patterns of Enterprise Application Architecture"_ (2002).**

---

## ❓ The Problem

Enterprise applications face unique challenges that go beyond basic OOP design:

- 🗄️ **Data persistence** — How do you map objects to relational databases?
- 🌐 **Distribution** — How do you structure applications across multiple layers and services?
- 🔄 **Concurrency** — How do you handle multiple users modifying the same data?
- 📊 **Business logic** — Where does complex domain logic live?

Without established patterns, enterprise systems become tangled webs of database calls mixed with business logic, making them impossible to test, scale, or maintain.

## ✅ The Solution

Martin Fowler identified and documented **51 patterns** covering the key architectural concerns of enterprise software:

| Category                     | Focus                                                            |
| ---------------------------- | ---------------------------------------------------------------- |
| **Domain Logic**             | Transaction Script, Domain Model, Table Module                   |
| **Data Source Architecture** | Table Data Gateway, Row Data Gateway, Active Record, Data Mapper |
| **Object-Relational**        | Unit of Work, Identity Map, Lazy Load, Repository                |
| **Web Presentation**         | MVC, Page Controller, Front Controller, Template View            |
| **Distribution**             | Remote Facade, Data Transfer Object (DTO)                        |
| **Concurrency**              | Optimistic Offline Lock, Pessimistic Offline Lock                |

---

## 🚧 Status

> Implementations coming soon. This section will be expanded with TypeScript examples following the same **Problem → Solution → Essence** structure as the GoF patterns.

---

<p align="center">
  <a href="../README.md">⬅ Back to Home</a>
</p>
