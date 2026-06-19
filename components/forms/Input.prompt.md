Labelled form control for enquiry, admission and volunteer forms. Renders an input, textarea or select with label, hint and error handling.

```jsx
<Input label="Full name" placeholder="Your name" required />
<Input label="Programme of interest" as="select" options={["Baking & Confectionery","Weaving","Computer Skills"]} />
<Input label="Message" as="textarea" hint="Tell us about the learner" />
<Input label="Email" type="email" error="Please enter a valid email" />
```

Props: `as` (`input`/`textarea`/`select`), `options` for selects, `hint`, `error`, `required`.
