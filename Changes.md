# FridgePolice Changes

## What the App Does
FridgePolice helps roommates track shared food items, request portions, and maintain accurate fridge inventory.

The application focuses on handling messy real-world roommate situations correctly.

---

## Scenario 1 — Prevent Double Allocation

When the final portion of food is requested, only one roommate can receive approval.

The app prevents multiple approvals for the same remaining portion using an approval lock.

---

## Scenario 2 — Approved but Never Consumed

If food is approved but never consumed and later spoils, the app clears the approval and removes the remaining quantity.

This prevents stale approvals from remaining active forever.

---

## Scenario 3 — Identical Item Names

The app uses unique item IDs instead of item names to distinguish identical food items such as two ketchup bottles.

This prevents conflicts between visually similar items.

---

## Scenario 4 — Inventory Correction

The app allows manual inventory correction when real fridge conditions do not match the app state.

This handles situations where food was consumed without being recorded.

---

## Engineering Decisions

- Used React local state instead of a database to keep implementation simple.
- Kept all logic inside a single component for easy review.
- Focused on correctness of product behavior rather than production-level architecture.