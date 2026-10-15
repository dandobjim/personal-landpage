/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        panel: "var(--panel)",
        panel2: "var(--panel-2)",
        edge: "var(--edge)",
        paper: "var(--paper)",
        muted: "var(--muted)",
        daruma: "var(--daruma)",
        gold: "var(--gold)",
        sage: "var(--sage)",
      },
      fontFamily: {
        display: ['"Press Start 2P"', "ui-monospace", "monospace"],
        body: ["VT323", "ui-monospace", '"Courier New"', "monospace"],
      },
    },
  },
  plugins: [],
};
