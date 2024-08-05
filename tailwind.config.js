import defaultTheme from './themes/default.mjs'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      text: {
        // Text
        primary: 'light-dark(#1a1a1a, #ffffff)',
        secondary: 'light-dark(#5c5c5c, #cccccc)',
        tertiary: 'light-dark(#868686, #969696)',
        disabled: 'light-dark(#9b9b9b, #717171)',
        // Accent Text
        accentPrimary: 'light-dark(#2e3c60, #cee6ed)',
        accentSecondary: 'light-dark(#11173a, #cee6ed)',
        accentTertiary: 'light-dark(#485c80, #adc5d5)',
        accentDisabled: 'light-dark(#9b9b9b, #717171)',
        // Text On Accent
        onAccentPrimary: 'light-dark(#ffffff, #000000)',
        onAccentSecondary: 'light-dark(#fbfbfb, #101010)',
        onAccentDisabled: 'light-dark(#ffffff, #969696)',
        onAccentSelected: 'light-dark(#ffffff, #ffffff)',
      },
      fill: {
        // Control Fill
        controlDefault: 'light-dark(#fbfbfb, #2d2d2d)',
        controlSecondary: 'light-dark(#f6f6f6, #323232)',
        controlTertiary: 'light-dark(#f5f5f5, #272727)',
        controlQuarternary: 'light-dark(#f5f5f5, #272727)',
        controlDisabled: 'light-dark(#2a2a2a, #2a2a2a)',
        controlTransparent: 'light-dark(#f3f3f3, #202020)',
        controlInputActive: 'light-dark(#ffffff, #1f1f1f)',
        // Control Alt Fill
        controlAltTransparent: 'light-dark(#f3f3f3, #202020)',
        controlAltSecondary: 'light-dark(#ededed, #1d1d1d)',
        controlAltTertiary: 'light-dark(#e5e5e5, #2a2a2a)',
        controlAltQuarternary: 'light-dark(#dcdcdc, #303030)',
        controlAltDisabled: 'light-dark(#f3f3f3, #202020)',
        // Neutral Solid
        controlSolidDefault: 'light-dark(#ffffff, #454545)',
        // Neutral Strong
        controlStrongDefault: 'light-dark(#868686, #9a9a9a)',
        controlStrongDisabled: 'light-dark(#a6a6a6, #575757)',
        // Subtle Fill
        subtleTransparent: 'light-dark(#f3f3f3, #202020)',
        subtleSecondary: 'light-dark(#eaeaea, #2d2d2d)',
        subtleTertiary: 'light-dark(#ededed, #292929)',
        subtleDisabled: 'light-dark(#f3f3f3, #202020)',
        // Control On Image Fill
        onImageDefault: 'light-dark(#fcfcfc, #1e1e1e)',
        onImageSecondary: 'light-dark(#f3f3f3, #1a1a1a)',
        onImageTertiary: 'light-dark(#ebebeb, #131313)',
        onImageDisabled: 'light-dark(#f3f3f3, #1e1e1e)',
        // Accent Fill
        accentDefault: 'light-dark(#485c80, #adc5d5)',
        accentSecondary: 'light-dark(#596b8c, #9eb4c2)',
        accentTertiary: 'light-dark(#6a7a97, #90a3b0)',
        accentDisabled: 'light-dark(#bfbfbf, #434343)',
        accentSelected: 'light-dark(#5c769a, #5c769a)',
      },
      stroke: {
        // Card Stroke
        cardDefault: 'light-dark(#e5e5e5, #1d1d1d)',
        cardDefaultSolid: 'light-dark(#ebebeb, #1c1c1c)',
        // Control Elevation (gradient strokes)
        controlElevationBorder: 'light-dark(#e5e5e5, #303030)',
        circleElevationBorder: {
          '0': 'light-dark(#e5e5e5, #303030)',
          '100': 'light-dark(#cccccc, #353535)',
        },
        textControlElevationBorder: 'light-dark(#e5e5e5, #303030)',
        TextControlElevationBorderFocused: 'light-dark(#e5e5e5, #303030)',
        accentControlElevationBorder: 'light-dark(#f4f4f4, #313131)',
        // Control Stroke
        controlDefault: 'light-dark(#e5e5e5, #303030)',
        controlSecondary: 'light-dark(#cccccc, #353535)',
        controlOnAccentDefault: 'light-dark(#f4f4f4, #313131)',
        controlOnAccentSecondary: 'light-dark(#929292, #1c1c1c)',
        controlOnAccentTertiary: 'light-dark(#bfbfbf, #191919)',
        controlOnAccentDisabled: 'light-dark(#e5e5e5, #1a1a1a)',
        controlForStrongFillWhenOnImage: 'light-dark(#f7f7f7, #131313)',
        // Control Strong Stroke
        controlStrongDefault: 'light-dark(#868686, #9a9a9a)',
        controlStrongDisabled: 'light-dark(#bfbfbf, #434343)',
        // Surface Stroke
        surfaceDefault: 'light-dark(#c1c1c1, #424242)',
        surfaceFlyout: 'light-dark(#e5e5e5, #1a1a1a)',
        // Divider Stroke
        dividerDefault: 'light-dark(#e5e5e5, #323232)',
        // Focus Stroke
        focusOuter: 'light-dark(#1a1a1a, #ffffff)',
        focusInner: 'light-dark(#fbfbfb, #0a0a0a)',
      },
      bg: {
        // Card Background
        cardDefault: 'light-dark(#fbfbfb, #2b2b2b)',
        cardSecondary: 'light-dark(#f4f4f4, #272727)',
        cardTertiary: 'light-dark(#fbfbfb, #2b2b2b)',
        // Smoke Background
        cmokeDefault: 'light-dark(#aaaaaa, #161616)',
        // Layer
        layerDefault: 'light-dark(#f9f9f9, #272727)',
        layerAlt: 'light-dark(#ffffff, #2b2b2b)',
        // Layer On Acrylic
        layerOnAcrylicDefault: 'light-dark(#f6f6f6, #282828)',
        // Layer On Mica Base Alt
        layerOnMicaBaseAltDefault: 'light-dark(#fbfbfb, #2c2c2c)',
        layerOnMicaBaseAltTertiary: 'light-dark(#f9f9f9, #2c2c2c)',
        layerOnMicaBaseAltTransparent: 'light-dark(#f3f3f3, #202020)',
        layerOnMicaBaseAltSecondary: 'light-dark(#e9e9e9, #2d2d2d)',
        // Solid Background
        solidBase: 'light-dark(#f3f3f3, #202020)',
        solidBaseAlt: 'light-dark(#dadada, #0a0a0a)',
        solidSecondary: 'light-dark(#eeeeee, #1c1c1c)',
        solidTertiary: 'light-dark(#f9f9f9, #282828)',
        solidQuarternary: 'light-dark(#ffffff, #2c2c2c)',
        solidQuinary: 'light-dark(#ffffff, #2c2c2c)',
        solidSenary: 'light-dark(#ffffff, #2c2c2c)',
        // Mica Background
        micaBase: 'light-dark(#f6f6f6, #282828)',
        micaBaseAlt: 'light-dark(#f6f6f6, #282828)',
        // Acrylic Background
        acrylicBase: 'light-dark(#efefef, #212121)',
        acrylicDefault: 'light-dark(#f8f8f8, #2d2d2d)',
        // Accent Acrylic Background
        accentAcrylicBase: 'light-dark(#d2e5eb, #d1e4ea)',
        accentAcrylicDefault: 'light-dark(#d1e4ea, #42516e)',
      },
      signal: {
        success: 'light-dark(#0f7b0f, #6ccb5f)',
        caution: 'light-dark(#9d5d00, #fce100)',
        Critical: 'light-dark(#c42b1c, #ff99a4)',
        successBackground: 'light-dark(#dff6dd, #393d1b)',
        cautionBackground: 'light-dark(#fff4ce, #433519)',
        criticalBackground: 'light-dark(#fde7e9, #442726)',
        attention: 'light-dark(#868686, #adc5d5)',
        neutral: 'light-dark(#868686, #9a9a9a)',
        solidNeutral: 'light-dark(#8a8a8a, #9d9d9d)',
        attentionBackground: 'light-dark(#f4f4f4, #272727)',
        neutralBackground: 'light-dark(#ededed, #272727)',
        solidNeutralBackground: 'light-dark(#f3f3f3, #2e2e2e)',
        solidAttentionBackground: 'light-dark(#f7f7f7, #2e2e2e)',
      },
      color: defaultTheme,
    },
    spacing: {
      0: '0px',
      px: '1px',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
  },
  plugins: [],
}
