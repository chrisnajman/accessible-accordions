---
permalink: /index.html
---

[Website (Git Pages)](https://chrisnajman.github.io/accessible-accordions)

# Accessible Accordions

## Description

- Single and multiple item(s) accordions.

## HTML

- `.open` class hardcoded on accordion content.

## JavaScript

- `.open` class toggled on accordion content.
  -- Note: there is a slight jump when [the multiple acccordion page](https://chrisnajman.github.io/accessible-accordions/accordion-multiple.html) is first loaded. This is because of the hardcoded `open` class.
- ARIA attributes `[aria-hidden="true"]` and `[aria-expanded="true"]` added dynamically to indicate state of accordion content.
- `tabindex="0"` toggled on first child of accordion content (in this example an `h3`) to set/unset focus.

### Javascript Disabled

- All accordion content is displayed (because the `.open` class is not removed by Javascript).

## Testing

- Tested on:
  - Windows 10
    - Chrome
    - Firefox
    - Microsoft Edge

## Source

- [JavaScript and Accessibility: Accordions](https://www.a11ywithlindsey.com/blog/javascript-accessibility-accordions)
