onEvent("recipes", (event) => {
  const arsTrees = ["blue", "purple", "green", "red"];

  arsTrees.forEach((type) => {
    event.recipes.botanypots.crop({
      seed: {
        item: `ars_nouveau:${type}_archwood_sapling`,
      },
      categories: ["dirt"],
      growthTicks: 2400,
      display: {
        block: `ars_nouveau:${type}_archwood_sapling`,
      },
      drops: [
        {
          chance: 1.0,
          output: {
            item: `ars_nouveau:${type}_archwood_log`,
          },
          minRolls: 2,
          maxRolls: 4,
        },
        {
          chance: 0.75,
          output: {
            item: `ars_nouveau:${type}_archwood_leaves`,
          },
          minRolls: 1,
          maxRolls: 3,
        },
        {
          chance: 0.05,
          output: {
            item: `ars_nouveau:${type}_archwood_sapling`,
          },
          minRolls: 1,
          maxRolls: 2,
        },
      ],
    });
  });

  event.recipes.botanypots.crop({
    seed: {
      item: "farmersdelight:cabbage_seeds",
    },
    categories: ["dirt", "farmland"],
    growthTicks: 1200,
    display: {
      type: "botanypots:aging",
      block: "farmersdelight:cabbages",
    },
    drops: [
      {
        chance: 1.0,
        output: {
          item: "farmersdelight:cabbage",
        },
      },
      {
        chance: 0.05,
        output: {
          item: "farmersdelight:cabbage_seeds",
        },
      },
    ],
  });

  event.recipes.botanypots.crop({
    seed: {
      item: "farmersdelight:tomato_seeds",
    },
    categories: ["dirt", "farmland"],
    growthTicks: 1200,
    display: {
      type: "botanypots:aging",
      block: "farmersdelight:tomatoes",
    },
    drops: [
      {
        chance: 1.0,
        output: {
          item: "farmersdelight:tomato",
        },
      },
      {
        chance: 0.05,
        output: {
          item: "farmersdelight:tomato_seeds",
        },
      },
    ],
  });

  event.recipes.botanypots.crop({
    seed: {
      item: "farmersdelight:rice",
    },
    categories: ["water"],
    growthTicks: 1200,
    display: {
      type: "botanypots:aging",
      block: "farmersdelight:rice",
    },
    drops: [
      {
        chance: 1.0,
        output: {
          item: "farmersdelight:rice",
        },
      },
      {
        chance: 0.05,
        output: {
          item: "farmersdelight:rice_panicle",
        },
      },
    ],
  });

  event.recipes.botanypots.crop({
    seed: {
      item: "farmersdelight:onion",
    },
    categories: ["dirt", "farmland"],
    growthTicks: 1200,
    display: {
      type: "botanypots:aging",
      block: "farmersdelight:onions",
    },
    drops: [
      {
        chance: 1.0,
        output: {
          item: "farmersdelight:onion",
        },
      },
    ],
  });

  event.recipes.botanypots.pot_interaction({
    held_ingredient: {
      tag: "bookshelf:hoes",
    },
    soil_ingredient: {
      item: "farmersdelight:rich_soil",
    },
    soil_output: {
      item: "farmersdelight:rich_soil_farmland",
      count: 1,
    },
    sound: {
      sound: "minecraft:item.hoe.till",
      category: "blocks",
    },
  });
});
