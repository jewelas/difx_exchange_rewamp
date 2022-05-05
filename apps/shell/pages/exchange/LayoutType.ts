
export const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }

export function getLayoutType(isStatic?: boolean) {
  const isStaticWidgets = isStatic || true;
  const ThreeCols = [

    // Col 1
    {
      i: "order-book",
      x: 0,
      y: 0,
      w: 6,
      h: 13,
      minH: 13,
      static: isStaticWidgets,
    },

    // Col 2
    {
      i: "pair-info",
      x: 6,
      y: 0,
      w: 12,
      h: 1,
      minH: 1,
      maxH: 1,
      static: isStaticWidgets,
    },
    { i: "chart", x: 6, y: 1, w: 12, h: 6, static: isStaticWidgets },
    { i: "place-order", x: 6, y: 2, w: 12, h: 6, static: isStaticWidgets },

    // Col 3
    { i: "pair-search", x: 18, y: 0, w: 6, h: 6, static: isStaticWidgets },
    { i: "trade-info", x: 18, y: 1, w: 6, h: 7, static: isStaticWidgets },

    // Row 2
    { i: "report", x: 0, y: 3, w: 24, h: 5, static: isStaticWidgets },
  ];

  const TwoCols = [
    {
      i: "pair-info",
      x: 0,
      y: 0,
      w: 16,
      h: 1,
      minH: 1,
      maxH: 1,
      static: isStaticWidgets,
    },
    { i: "chart", x: 0, y: 1, w: 16, h: 6, static: isStaticWidgets },
    { i: "place-order", x: 0, y: 2, w: 16, h: 6, static: isStaticWidgets },

    { i: "pair-search", x: 16, y: 0, w: 8, h: 6, static: isStaticWidgets },
    { i: "trade-info", x: 16, y: 1, w: 8, h: 7, static: isStaticWidgets },

    { i: "report", x: 0, y: 0, w: 16, h: 13, static: isStaticWidgets },
    {
      i: "order-book",
      x: 16,
      y: 0,
      w: 8,
      h: 13,
      minH: 13,
      static: isStaticWidgets,
    },
  ];

  return { lg:ThreeCols, md:TwoCols, sm:TwoCols };
}
