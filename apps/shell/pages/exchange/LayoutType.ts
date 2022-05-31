
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
      h: 17,
      minH: 17,
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
    { i: "chart", x: 6, y: 1, w: 12, h: 8, static: isStaticWidgets },
    { i: "place-order", x: 6, y: 9, w: 12, h: 8, static: isStaticWidgets },

    // Col 3
    { i: "pair-search", x: 18, y: 0, w: 6, h: 8, static: isStaticWidgets },
    { i: "trade-info", x: 18, y: 8, w: 6, h: 9, static: isStaticWidgets },

    // Row 2
    { i: "report", x: 0, y: 17, w: 24, h: 7, static: isStaticWidgets },
  ];

  const ThreeColsCompact = [

    // Col 1
    {
      i: "pair-info",
      x: 0,
      y: 0,
      w: 12,
      h: 1,
      minH: 1,
      maxH: 1,
      static: isStaticWidgets,
    },
    { i: "chart", x: 0, y: 1, w: 12, h: 9, static: isStaticWidgets },

    // Col 2
    {
      i: "order-book",
      x: 12,
      y: 0,
      w: 7,
      h: 10,
      minH: 10,
      static: isStaticWidgets,
    },

    // Col 3
    { i: "place-order", x: 19, y: 0, w: 5, h: 10, static: isStaticWidgets },


    // Row 2 - Col 1
    { i: "report", x: 0, y: 10, w: 18, h: 9, static: isStaticWidgets },

    // Row 2 - Col 2
    { i: "trade-info", x: 18, y: 10, w: 6, h: 9, static: isStaticWidgets },
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
    { i: "chart", x: 0, y: 1, w: 14, h: 8, static: isStaticWidgets },

    // Col 2
    {
      i: "order-book",
      x: 14,
      y: 0,
      w: 5,
      h: 17,
      minH: 17,
      static: isStaticWidgets,
    },

    // Col 3
    { i: "trade-info", x: 19, y: 0, w: 5, h: 17, static: isStaticWidgets },


    // Row 2 - Col 1
    { i: "pair-search", x: 0, y: 9, w: 5, h: 8, static: isStaticWidgets },

    // Row 2 - Col 2
    { i: "place-order", x: 5, y: 9, w: 9, h: 8, static: isStaticWidgets },

    // Row 3
    { i: "report", x: 0, y: 17, w: 24, h: 7, static: isStaticWidgets },
  ];

  const TwoCols = [

    // Row 1
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
    { i: "chart", x: 0, y: 1, w: 16, h: 8, static: isStaticWidgets },
    { i: "trade-info", x: 16, y: 0, w: 8, h: 9, static: isStaticWidgets },

    // Row 2
    { i: "place-order", x: 0, y: 9, w: 16, h: 8, static: isStaticWidgets },
    {
      i: "order-book",
      x: 16,
      y: 9,
      w: 8,
      h: 17,
      minH: 17,
      static: isStaticWidgets,
    },

    // Row 3
    { i: "report", x: 0, y: 17, w: 16, h: 17, static: isStaticWidgets },

    // Row 4
    { i: "pair-search", x: 16, y: 26, w: 8, h: 8, static: isStaticWidgets },

  ];

  let layout = ThreeColsDefault;
  if (type === 'compact') layout = ThreeColsCompact;
  else if (type === 'pro') layout = ThreeColsPro;
  return { lg: layout, md: TwoCols, sm: TwoCols };
}
