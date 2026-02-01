Animations
==========

This project now uses `framer-motion` for scroll-aware, entrance and staggered animations similar to the subtle motion found on modern landing pages (e.g., kinso.ai).

- Utility variants and helpers live in `src/lib/motion.tsx`.
- Sections use `MotionSection` (scroll-in + staggered children).
- Headings, cards, and CTAs use `fadeUp`, `fadeDown`, and `scaleIn` variants.
- User preference for reduced motion is respected via `prefers-reduced-motion` CSS.

To tweak animation timing or create new variants, edit `src/lib/motion.tsx`.
