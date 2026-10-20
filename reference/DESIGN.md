---
name: "Copy of Australian IT Consulting"
theme: "light"

colors:
  neutral:
    shade-0: "#FFFFFF"
    shade-1: "#F2F2F2"
    shade-2: "#DAD9D8"
    shade-3: "#B6B4B2"
    shade-4: "#858380"
    shade-5: "#54524D"
    shade-6: "#24201A"
    shade-7: "#0C0801"
    white: "#FFFFFF"
  blumine:
    shade-1: "#E8EDF0"
    shade-2: "#D1DBE2"
    shade-3: "#5F839C"
    shade-4: "#1B4F72"
    shade-5: "#153F5B"
    shade-6: "#0A1F2D"
    shade-7: "#081722"
  curious-blue:
    shade-1: "#EAF2F8"
    shade-2: "#D5E6F2"
    shade-3: "#6CAAD3"
    shade-4: "#2E86C1"
    shade-5: "#246B9A"
    shade-6: "#12354D"
    shade-7: "#0D2839"
  puerto-rico:
    shade-1: "#ECF9F7"
    shade-2: "#DAF4EF"
    shade-3: "#7ED9C7"
    shade-4: "#48C9B0"
    shade-5: "#39A08C"
    shade-6: "#1C5046"
    shade-7: "#153C34"
  buttercup:
    shade-1: "#FDF5E7"
    shade-2: "#FCEBCF"
    shade-3: "#F6B959"
    shade-4: "#F39C12"
    shade-5: "#C27C0E"
    shade-6: "#613E07"
    shade-7: "#482E05"

typography:
  heading:
    fontFamily: "Manrope"
    fontWeight: 500
  body:
    fontFamily: "Inter"
    fontWeight: 400
  sizes:
    desktop:
      h1: 72px
      h2: 52px
      h3: 44px
      h4: 36px
      h5: 28px
      h6: 22px
      text-large: 22px
      text-medium: 18px
      text-regular: 16px
      text-small: 14px
      text-tiny: 12px
    mobile:
      h1: 44px
      h2: 40px
      h3: 32px
      h4: 24px
      h5: 20px
      h6: 18px
      text-large: 18px
      text-medium: 16px
      text-regular: 12px
      text-small: 12px
      text-tiny: 10px

ui:
  style: "sleek"
  buttonRadius: 6px
  tagRadius: 4px
  inputRadius: 6px

cards:
  style: "default"
  borderWidth: 1px
  dividerWidth: 1px
  radiusLarge: 8px
  radiusMedium: 8px
  radiusSmall: 8px

schemes:
  - name: "Scheme 1"
    background: "neutral-shade-0"
    backgroundHex: "#FFFFFF"
    foregroundHex: "#F2F2F2"
    textHex: "#0c0801"
    accentHex: "#1B4F72"
    borderValue: "#0c080126"
    useLogoVariant: light
    cssClass: "scheme-1"
  - name: "Scheme 2"
    background: "chromatic1-shade-7"
    backgroundHex: "#081722"
    foregroundHex: "#0A1F2D"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-2"
  - name: "Scheme 3"
    background: "chromatic1-shade-6"
    backgroundHex: "#0A1F2D"
    foregroundHex: "#081722"
    textHex: "#ffffff"
    accentHex: "#ffffff"
    borderValue: "#ffffff33"
    useLogoVariant: dark
    cssClass: "scheme-3"
  - name: "Scheme 4"
    background: "neutral-shade-2"
    backgroundHex: "#DAD9D8"
    foregroundHex: "#F2F2F2"
    textHex: "#0c0801"
    accentHex: "#1B4F72"
    borderValue: "#0c080126"
    useLogoVariant: light
    cssClass: "scheme-4"
  - name: "Scheme 5"
    background: "neutral-shade-1"
    backgroundHex: "#F2F2F2"
    foregroundHex: "#FFFFFF"
    textHex: "#0c0801"
    accentHex: "#1B4F72"
    borderValue: "#0c080126"
    useLogoVariant: light
    cssClass: "scheme-5"
---

# Copy of Australian IT Consulting — Design Specification

This file contains machine-readable design tokens in the YAML frontmatter above, and human-readable guidance below.

## Colors

The design uses a **light** theme with a neutral palette and 4 chromatic palettes.

- **Neutral shades** range from shade-0 (darkest) to shade-7 (lightest), plus white
- **Blumine** — primary shade: `#1B4F72`
- **Curious Blue** — primary shade: `#2E86C1`
- **Puerto Rico** — primary shade: `#48C9B0`
- **Buttercup** — primary shade: `#F39C12`

Use the CSS custom properties from `react/globals.css` for all colors (e.g. `--color-neutral-darkest`, `--color-blue-ribbon`).

## Typography

Headings use **Manrope** at weight 500. Body text uses **Inter** at weight 400.

The type scale has desktop and mobile sizes. Apply mobile sizes at smaller breakpoints. All values are in `react/globals.css`.

## UI Elements

UI style is **sleek** with button radius 6px. Cards use the **default** style with border-width 1px.

## Color Schemes

Sections use color schemes to control their visual appearance. Each scheme is derived from a single background color — all other colors (text, foreground, accent, border) are automatically computed for optimal contrast.

| Scheme | Background | Text | Accent | Logo | CSS class |
|--------|-----------|------|--------|------|-----------|
| Scheme 1 | Neutral White (#FFFFFF) | #0c0801 | #1B4F72 | light | `.scheme-1` |
| Scheme 2 | Blumine Darkest (#081722) | #ffffff | #ffffff | dark | `.scheme-2` |
| Scheme 3 | Blumine Darker (#0A1F2D) | #ffffff | #ffffff | dark | `.scheme-3` |
| Scheme 4 | Neutral Lighter (#DAD9D8) | #0c0801 | #1B4F72 | light | `.scheme-4` |
| Scheme 5 | Neutral Lightest (#F2F2F2) | #0c0801 | #1B4F72 | light | `.scheme-5` |

Apply a scheme by adding its CSS class to the section element. See `sitemap.md` for which scheme each section uses.

### Tweaking Schemes

To create visual variation, you can change which scheme a section uses. When switching schemes:

- Swap the CSS class (e.g. change `.scheme-1` to `.scheme-2`)
- All child elements automatically inherit the correct text, accent, and border colors
- Use the matching logo variant (`logo-light.svg` or `logo-dark.svg`) based on the scheme's `useLogoVariant`
- Alternate between light and dark schemes to create visual rhythm
