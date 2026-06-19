Pill-shaped brand button — use for any call-to-action; `support` variant (marigold) is reserved for donate/volunteer asks.

```jsx
<Button variant="primary" size="lg">Apply for Admission</Button>
<Button variant="support" iconLeft={<HeartIcon/>}>Support Us</Button>
<Button variant="secondary">Learn More</Button>
```

Variants: `primary` (forest-green fill), `support` (marigold fill, warm CTA), `secondary` (green outline), `ghost` (text only), `onDark` (white fill for use on the forest-green sections). Sizes: `sm` / `md` / `lg`. Pass `href` to render as a link, `iconLeft`/`iconRight` for icons, `fullWidth` to stretch.
