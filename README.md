# ⚛️ Custom React Counter App – Advanced Testing Showcase

A simple React Counter application built using a **custom hook**, fully tested with **React Testing Library**, `userEvent`, Jest, edge case validation, and mocking.

This project demonstrates professional frontend testing practices used in real-world production applications.

---

## 🚀 Features

- Custom React Hook (`useCounter`)
- Increment / Decrement
- Restart to initial value
- Switch sign (+ ↔ -)
- Edge case handling
- Full test coverage
- Console log mocking
- Realistic user interaction testing (`userEvent`)

---

## 🧠 Tech Stack

| Tool | Purpose |
|------|---------|
| React | UI Framework |
| Jest | Test Runner |
| React Testing Library | Component Testing |
| @testing-library/user-event | Realistic User Interactions |
| JavaScript (ES6+) | Language |

---

## 📂 Project Structure

```
src/
│
├── App.js
├── Counter.js
├── useCounter.js
│
├── Count.test.js
└── App.test.js
```

---

## 🧪 Testing Strategy

This project demonstrates a comprehensive testing approach across multiple dimensions:

### ✅ 1. Component Testing
- Verifies rendering behavior
- Ensures UI updates correctly after interactions
- Confirms button interactions produce expected results

### ✅ 2. Realistic User Interaction

Uses [`@testing-library/user-event`](https://testing-library.com/docs/user-event/intro/) instead of `fireEvent` to simulate actual user behavior:

```js
import userEvent from '@testing-library/user-event';

await userEvent.click(screen.getByText('Increment'));
```

### ✅ 3. Edge Case Testing

Covered scenarios:
- Switching sign of `0`
- Large number increments (100 clicks)
- Rapid clicking sequences
- Multiple sequential operations
- Restart after state mutation

### ✅ 4. Mocking & Spying

```js
jest.spyOn(console, "log").mockImplementation(() => {});
```

Ensures side effects are tested without polluting test output.

---

## 📊 Test Coverage

To generate a full coverage report:

```bash
npm test -- --coverage
```

Coverage includes:
- ✔ Statements
- ✔ Branches
- ✔ Functions
- ✔ Lines

---

## 🏗 Custom Hook Implementation

`useCounter.js` encapsulates all state logic, following the **separation of concerns** principle:

```js
const increment = () => setCount(prev => prev + 1);
const decrement = () => setCount(prev => prev - 1);
const restart   = () => setCount(initialValue);
const switchSign = () => setCount(prev => prev * -1);
```

| Layer | File | Responsibility |
|-------|------|---------------|
| State Logic | `useCounter.js` | All counter state and operations |
| UI Logic | `Counter.js` | Rendering and user interaction |
| Entry Point | `App.js` | App composition |

This separation improves **testability**, **reusability**, and **maintainability**.

---

## ▶️ Run Locally

**Install dependencies:**

```bash
npm install
```

**Start development server:**

```bash
npm start
```

**Run tests:**

```bash
npm test
```

**Run tests with coverage:**

```bash
npm test -- --coverage
```

---

## 💡 What This Project Demonstrates

| Concept | Description |
|--------|-------------|
| Deterministic Tests | Predictable, repeatable test outcomes |
| User-perspective Testing | Testing UI the way real users interact |
| Avoid Implementation Details | Tests focus on behavior, not internals |
| Proper Mocking Strategy | Clean mocking without side effects |
| Edge Case Validation | Handles boundary and unexpected inputs |
| Clean Test Structure | Organized using `describe` blocks |

---

## 📌 Why This Project Matters

> This repository is **not** about building a counter.

It demonstrates:

-  Professional frontend testing patterns
-  Clean architecture with custom hooks
-  Industry-recommended testing tools
-  Production-level test coverage mindset

---

## 📄 License

MIT © 2024