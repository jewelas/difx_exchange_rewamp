
export const breakpoints = { lg: 1200, md: 996, sm: 913, xs: 480, xxs: 0 }

export function getLayoutType(type: 'default' | 'compact' | 'pro', isStatic?: boolean) {
  const isStaticWidgets = isStatic || true;
  const ThreeColsDefault = [

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
    { i: "place-order", x: 6, y: 7, w: 12, h: 6, static: isStaticWidgets },

    // Col 3
    { i: "pair-search", x: 18, y: 0, w: 6, h: 6, static: isStaticWidgets },
    { i: "trade-info", x: 18, y: 6, w: 6, h: 7, static: isStaticWidgets },

    // Row 2
    { i: "report", x: 0, y: 13, w: 24, h: 5, static: isStaticWidgets },
  ];

  const ThreeColsCompact = [

    // Col 1
    {
      i: "pair-info",
      x: 0,
      y: 0,
      w: 14,
      h: 1,
      minH: 1,
      maxH: 1,
      static: isStaticWidgets,
    },
    { i: "chart", x: 0, y: 1, w: 14, h: 8, static: isStaticWidgets },

    // Col 2
    {
      i: "order-book",
      x: 14,
      y: 0,
      w: 5,
      h: 9,
      minH: 9,
      static: isStaticWidgets,
    },

    // Col 3
    { i: "place-order", x: 19, y: 0, w: 5, h: 9, static: isStaticWidgets },


    // Row 2 - Col 1
    { i: "report", x: 0, y: 9, w: 18, h: 7, static: isStaticWidgets },

    // Row 2 - Col 2
    { i: "trade-info", x: 18, y: 9, w: 6, h: 7, static: isStaticWidgets },
  ];

  const ThreeColsPro = [
    // Col 1
    {
      i: "pair-info",
      x: 0,
      y: 0,
      w: 14,
      h: 1,
      minH: 1,
      maxH: 1,
      static: isStaticWidgets,
    },
    { i: "chart", x: 0, y: 1, w: 14, h: 6, static: isStaticWidgets },

    // Col 2
    {
      i: "order-book",
      x: 14,
      y: 0,
      w: 5,
      h: 13,
      minH: 13,
      static: isStaticWidgets,
    },

    // Col 3
    { i: "trade-info", x: 19, y: 0, w: 5, h: 13, static: isStaticWidgets },


    // Row 2 - Col 1
    { i: "pair-search", x: 0, y: 7, w: 6, h: 6, static: isStaticWidgets },

    // Row 2 - Col 2
    { i: "place-order", x: 6, y: 7, w: 8, h: 6, static: isStaticWidgets },

    // Row 3
    { i: "report", x: 0, y: 13, w: 24, h: 5, static: isStaticWidgets },
  ];

  const TwoCols = [

    // Col 1
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
    { i: "place-order", x: 0, y: 7, w: 16, h: 6, static: isStaticWidgets },

    { i: "pair-search", x: 16, y: 0, w: 8, h: 6, static: isStaticWidgets },
    { i: "trade-info", x: 16, y: 6, w: 8, h: 7, static: isStaticWidgets },

    {
      i: "order-book",
      x: 16,
      y: 13,
      w: 8,
      h: 13,
      minH: 13,
      static: isStaticWidgets,
    },

    { i: "report", x: 0, y: 13, w: 16, h: 13, static: isStaticWidgets },
  ];

  let layout = ThreeColsDefault;
  if (type === 'compact') layout = ThreeColsCompact;
  else if (type === 'pro') layout = ThreeColsPro;
  return { lg: layout, md: TwoCols, sm: TwoCols };
}
