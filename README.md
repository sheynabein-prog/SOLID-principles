# SOLID Principles in TypeScript

This repository contains practical, student-focused implementations of the five **SOLID Design Principles** using TypeScript. Each principle is demonstrated using clean, decoupled object-oriented programming (OOP) practices suitable for real-world scenarios like store checkouts, logistics, and notification engines.

---

## 📂 Project Structure

- `TS_SRP.ts` ── **Single Responsibility Principle (SRP)**: Separates cashier billing logic from inventory/warehouse stock management.
- `TS_OPEN.ts` ── **Open/Closed Principle (OCP)**: Implements extensible payment methods (Card, Mobile Money) via inheritance without mutating original source logic.
- `TS_LSP.ts` ── **Liskov Substitution Principle (LSP)**: Verifies that Car and Motorcycle child classes can safely substitute general Vehicle parent classes without breaking runtime execution.
- `TS_ISP.ts` ── **Interface Segregation Principle (ISP)**: Splits actions into small, specific interface layers (`Worker`, `Eater`) so automated Robots aren't forced to implement human functions.
- `TS_DIP.ts` ── **Dependency Inversion Principle (DIP)**: Uncouples high-level components from low-level systems by relying on a shared `NotificationService` abstraction interface.

---

## 🛠️ Environment Prerequisites & Setup

Ensure you have [Node.js](https://nodejs.org) installed on your machine.

1. **Install required dependencies:**
   ```bash
   npm install
   ```
   *Installs development dependencies including `typescript`, `ts-node`, and `@types/node` config maps.*

2. **Verify Configuration Files:**
   - Ensure `package.json` includes `"type": "module"` to allow modern ECMAScript module resolution.
   - Ensure `tsconfig.json` targets `"module": "Node16"` matching the strict local sandbox configuration.

---

## 🚀 How To Run The Code

You can test individual principles independently or run the entire test suite sequentially using the pre-configured scripts inside `package.json`.

### Run Individual Test Suites:
```bash
# Test Single Responsibility Principle
npm run test-srp

# Test Open/Closed Principle
npm run test-open

# Test Liskov Substitution Principle
npm run test-lsp

# Test Interface Segregation Principle
npm run test-isp

# Test Dependency Inversion Principle
npm run test-dip
```

### Run All Principles At Once:
To execute all 5 files sequentially and verify total project compilation, run:
```bash
npm run test-all
```

---

## 🎒 Key Takeaways (What I Learned)
- **Modularity:** Breaking systems into single-purpose components keeps code safe from unexpected bugs when updating adjacent modules.
- **Abstractions Over Implementations:** Programming to an interface rather than a concrete class makes it easy to swap system services (like changing an SMS alert tool for an Email server) instantly.
- **Inheritance vs Compositions:** Mastering how to extend and implement classes smoothly within clean TypeScript compilation workflows.
