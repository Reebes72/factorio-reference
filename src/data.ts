export const items = {
  "wooden-chest": {
    "name": "wooden-chest",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "fuel_category": "chemical",
    "stack_size": 50,
    "fuel_value": 4000000,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "storage",
    "order": "a[items]-a[wooden-chest]",
    "place_result": "wooden-chest"
  }
,
  "iron-chest": {
    "name": "iron-chest",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "storage",
    "order": "a[items]-b[iron-chest]",
    "place_result": "iron-chest"
  }
,
  "steel-chest": {
    "name": "steel-chest",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "storage",
    "order": "a[items]-c[steel-chest]",
    "place_result": "steel-chest"
  }
,
  "storage-tank": {
    "name": "storage-tank",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "storage",
    "order": "b[fluid]-a[storage-tank]",
    "place_result": "storage-tank"
  }
,
  "transport-belt": {
    "name": "transport-belt",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "belt",
    "order": "a[transport-belt]-a[transport-belt]",
    "place_result": "transport-belt"
  }
,
  "fast-transport-belt": {
    "name": "fast-transport-belt",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "belt",
    "order": "a[transport-belt]-b[fast-transport-belt]",
    "place_result": "fast-transport-belt"
  }
,
  "express-transport-belt": {
    "name": "express-transport-belt",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "belt",
    "order": "a[transport-belt]-c[express-transport-belt]",
    "place_result": "express-transport-belt"
  }
,
  "underground-belt": {
    "name": "underground-belt",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "belt",
    "order": "b[underground-belt]-a[underground-belt]",
    "place_result": "underground-belt"
  }
,
  "fast-underground-belt": {
    "name": "fast-underground-belt",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "belt",
    "order": "b[underground-belt]-b[fast-underground-belt]",
    "place_result": "fast-underground-belt"
  }
,
  "express-underground-belt": {
    "name": "express-underground-belt",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "belt",
    "order": "b[underground-belt]-c[express-underground-belt]",
    "place_result": "express-underground-belt"
  }
,
  "splitter": {
    "name": "splitter",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "belt",
    "order": "c[splitter]-a[splitter]",
    "place_result": "splitter"
  }
,
  "fast-splitter": {
    "name": "fast-splitter",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "belt",
    "order": "c[splitter]-b[fast-splitter]",
    "place_result": "fast-splitter"
  }
,
  "express-splitter": {
    "name": "express-splitter",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "belt",
    "order": "c[splitter]-c[express-splitter]",
    "place_result": "express-splitter"
  }
,
  "loader": {
    "name": "loader",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "belt",
    "order": "d[loader]-a[basic-loader]",
    "place_result": "loader"
  }
,
  "fast-loader": {
    "name": "fast-loader",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "belt",
    "order": "d[loader]-b[fast-loader]",
    "place_result": "fast-loader"
  }
,
  "express-loader": {
    "name": "express-loader",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "belt",
    "order": "d[loader]-c[express-loader]",
    "place_result": "express-loader"
  }
,
  "burner-inserter": {
    "name": "burner-inserter",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "inserter",
    "order": "a[burner-inserter]",
    "place_result": "burner-inserter"
  }
,
  "inserter": {
    "name": "inserter",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "inserter",
    "order": "b[inserter]",
    "place_result": "inserter"
  }
,
  "long-handed-inserter": {
    "name": "long-handed-inserter",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "inserter",
    "order": "c[long-handed-inserter]",
    "place_result": "long-handed-inserter"
  }
,
  "fast-inserter": {
    "name": "fast-inserter",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "inserter",
    "order": "d[fast-inserter]",
    "place_result": "fast-inserter"
  }
,
  "filter-inserter": {
    "name": "filter-inserter",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "inserter",
    "order": "e[filter-inserter]",
    "place_result": "filter-inserter"
  }
,
  "stack-inserter": {
    "name": "stack-inserter",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "inserter",
    "order": "f[stack-inserter]",
    "place_result": "stack-inserter"
  }
,
  "stack-filter-inserter": {
    "name": "stack-filter-inserter",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "inserter",
    "order": "g[stack-filter-inserter]",
    "place_result": "stack-filter-inserter"
  }
,
  "small-electric-pole": {
    "name": "small-electric-pole",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "fuel_category": "chemical",
    "stack_size": 50,
    "fuel_value": 4000000,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "order": "a[energy]-a[small-electric-pole]",
    "place_result": "small-electric-pole"
  }
,
  "medium-electric-pole": {
    "name": "medium-electric-pole",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "order": "a[energy]-b[medium-electric-pole]",
    "place_result": "medium-electric-pole"
  }
,
  "big-electric-pole": {
    "name": "big-electric-pole",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "order": "a[energy]-c[big-electric-pole]",
    "place_result": "big-electric-pole"
  }
,
  "substation": {
    "name": "substation",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "order": "a[energy]-d[substation]",
    "place_result": "substation"
  }
,
  "pipe": {
    "name": "pipe",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "order": "a[pipe]-a[pipe]",
    "place_result": "pipe"
  }
,
  "pipe-to-ground": {
    "name": "pipe-to-ground",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "order": "a[pipe]-b[pipe-to-ground]",
    "place_result": "pipe-to-ground"
  }
,
  "pump": {
    "name": "pump",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "order": "b[pipe]-c[pump]",
    "place_result": "pump"
  }
,
  "rail": {
    "name": "rail",
    "type": "rail-planner",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "transport",
    "order": "a[train-system]-a[rail]",
    "place_result": "straight-rail"
  }
,
  "train-stop": {
    "name": "train-stop",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "transport",
    "order": "a[train-system]-c[train-stop]",
    "place_result": "train-stop"
  }
,
  "rail-signal": {
    "name": "rail-signal",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "transport",
    "order": "a[train-system]-d[rail-signal]",
    "place_result": "rail-signal"
  }
,
  "rail-chain-signal": {
    "name": "rail-chain-signal",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "transport",
    "order": "a[train-system]-e[rail-signal-chain]",
    "place_result": "rail-chain-signal"
  }
,
  "locomotive": {
    "name": "locomotive",
    "type": "item-with-entity-data",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "transport",
    "order": "a[train-system]-f[diesel-locomotive]",
    "place_result": "locomotive"
  }
,
  "cargo-wagon": {
    "name": "cargo-wagon",
    "type": "item-with-entity-data",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "transport",
    "order": "a[train-system]-g[cargo-wagon]",
    "place_result": "cargo-wagon"
  }
,
  "fluid-wagon": {
    "name": "fluid-wagon",
    "type": "item-with-entity-data",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "transport",
    "order": "a[train-system]-h[fluid-wagon]",
    "place_result": "fluid-wagon"
  }
,
  "artillery-wagon": {
    "name": "artillery-wagon",
    "type": "item-with-entity-data",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "transport",
    "order": "a[train-system]-i[artillery-wagon]",
    "place_result": "artillery-wagon"
  }
,
  "car": {
    "name": "car",
    "type": "item-with-entity-data",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "transport",
    "order": "b[personal-transport]-a[car]",
    "place_result": "car"
  }
,
  "tank": {
    "name": "tank",
    "type": "item-with-entity-data",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "transport",
    "order": "b[personal-transport]-b[tank]",
    "place_result": "tank"
  }
,
  "small-plane": {
    "name": "small-plane",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "transport",
    "order": "b[personal-transport]-c[small-plane]"
  }
,
  "logistic-robot": {
    "name": "logistic-robot",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "logistic-network",
    "order": "a[robot]-a[logistic-robot]",
    "place_result": "logistic-robot"
  }
,
  "construction-robot": {
    "name": "construction-robot",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "logistic-network",
    "order": "a[robot]-b[construction-robot]",
    "place_result": "construction-robot"
  }
,
  "logistic-chest-active-provider": {
    "name": "logistic-chest-active-provider",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "logistic-network",
    "order": "b[storage]-c[logistic-chest-active-provider]",
    "place_result": "logistic-chest-active-provider"
  }
,
  "logistic-chest-passive-provider": {
    "name": "logistic-chest-passive-provider",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "logistic-network",
    "order": "b[storage]-c[logistic-chest-passive-provider]",
    "place_result": "logistic-chest-passive-provider"
  }
,
  "logistic-chest-storage": {
    "name": "logistic-chest-storage",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "logistic-network",
    "order": "b[storage]-c[logistic-chest-storage]",
    "place_result": "logistic-chest-storage"
  }
,
  "logistic-chest-buffer": {
    "name": "logistic-chest-buffer",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "logistic-network",
    "order": "b[storage]-d[logistic-chest-buffer]",
    "place_result": "logistic-chest-buffer"
  }
,
  "logistic-chest-requester": {
    "name": "logistic-chest-requester",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "logistic-network",
    "order": "b[storage]-e[logistic-chest-requester]",
    "place_result": "logistic-chest-requester"
  }
,
  "roboport": {
    "name": "roboport",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "logistic-network",
    "order": "c[signal]-a[roboport]",
    "place_result": "roboport"
  }
,
  "small-lamp": {
    "name": "small-lamp",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "circuit-network",
    "order": "a[light]-a[small-lamp]",
    "place_result": "small-lamp"
  }
,
  "red-wire": {
    "name": "red-wire",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "circuit-network",
    "order": "b[wires]-a[red-wire]"
  }
,
  "green-wire": {
    "name": "green-wire",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "circuit-network",
    "order": "b[wires]-b[green-wire]"
  }
,
  "arithmetic-combinator": {
    "name": "arithmetic-combinator",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "circuit-network",
    "order": "c[combinators]-a[arithmetic-combinator]",
    "place_result": "arithmetic-combinator"
  }
,
  "decider-combinator": {
    "name": "decider-combinator",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "circuit-network",
    "order": "c[combinators]-b[decider-combinator]",
    "place_result": "decider-combinator"
  }
,
  "constant-combinator": {
    "name": "constant-combinator",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "circuit-network",
    "order": "c[combinators]-c[constant-combinator]",
    "place_result": "constant-combinator"
  }
,
  "power-switch": {
    "name": "power-switch",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "circuit-network",
    "order": "d[other]-a[power-switch]",
    "place_result": "power-switch"
  }
,
  "programmable-speaker": {
    "name": "programmable-speaker",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "circuit-network",
    "order": "d[other]-b[programmable-speaker]",
    "place_result": "programmable-speaker"
  }
,
  "stone-brick": {
    "name": "stone-brick",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "terrain",
    "order": "a[stone-brick]"
  }
,
  "concrete": {
    "name": "concrete",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "terrain",
    "order": "b[concrete]-a[plain]"
  }
,
  "hazard-concrete": {
    "name": "hazard-concrete",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "terrain",
    "order": "b[concrete]-b[hazard]"
  }
,
  "landfill": {
    "name": "landfill",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "terrain",
    "order": "c[landfill]-a[dirt]"
  }
,
  "cliff-explosives": {
    "name": "cliff-explosives",
    "type": "capsule",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 20,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "logistics",
    "subgroup": "terrain",
    "order": "d[cliff-explosives]"
  }
,
  "iron-axe": {
    "name": "iron-axe",
    "type": "mining-tool",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 20,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "tool",
    "order": "a[mining]-a[iron-axe]"
  }
,
  "steel-axe": {
    "name": "steel-axe",
    "type": "mining-tool",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 20,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "tool",
    "order": "a[mining]-b[steel-axe]"
  }
,
  "repair-pack": {
    "name": "repair-pack",
    "type": "repair-tool",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "tool",
    "order": "b[repair]-a[repair-pack]"
  }
,
  "blueprint": {
    "name": "blueprint",
    "type": "blueprint",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "tool",
    "order": "c[automated-construction]-a[blueprint]"
  }
,
  "dummy-selection-tool": {
    "name": "dummy-selection-tool",
    "type": "selection-tool",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "tool",
    "order": "c[automated-construction]-a[blueprint]"
  }
,
  "deconstruction-planner": {
    "name": "deconstruction-planner",
    "type": "deconstruction-item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "tool",
    "order": "c[automated-construction]-b[deconstruction-planner]"
  }
,
  "blueprint-book": {
    "name": "blueprint-book",
    "type": "blueprint-book",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "tool",
    "inventory_size": 1000,
    "order": "c[automated-construction]-c[blueprint-book]"
  }
,
  "boiler": {
    "name": "boiler",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "energy",
    "order": "b[steam-power]-a[boiler]",
    "place_result": "boiler"
  }
,
  "steam-engine": {
    "name": "steam-engine",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "energy",
    "order": "b[steam-power]-b[steam-engine]",
    "place_result": "steam-engine"
  }
,
  "steam-turbine": {
    "name": "steam-turbine",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "energy",
    "order": "b[steam-power]-c[steam-turbine]",
    "place_result": "steam-turbine"
  }
,
  "solar-panel": {
    "name": "solar-panel",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "energy",
    "order": "d[solar-panel]-a[solar-panel]",
    "place_result": "solar-panel"
  }
,
  "accumulator": {
    "name": "accumulator",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "energy",
    "order": "e[accumulator]-a[accumulator]",
    "place_result": "accumulator"
  }
,
  "electric-energy-interface": {
    "name": "electric-energy-interface",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "energy",
    "order": "e[electric-energy-interface]-b[electric-energy-interface]",
    "place_result": "electric-energy-interface"
  }
,
  "nuclear-reactor": {
    "name": "nuclear-reactor",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "energy",
    "order": "f[nuclear-energy]-a[reactor]",
    "place_result": "nuclear-reactor"
  }
,
  "heat-exchanger": {
    "name": "heat-exchanger",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "energy",
    "order": "f[nuclear-energy]-b[heat-exchanger]",
    "place_result": "heat-exchanger"
  }
,
  "heat-pipe": {
    "name": "heat-pipe",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "energy",
    "order": "f[nuclear-energy]-c[heat-pipe]",
    "place_result": "heat-pipe"
  }
,
  "burner-mining-drill": {
    "name": "burner-mining-drill",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "extraction-machine",
    "order": "a[items]-a[burner-mining-drill]",
    "place_result": "burner-mining-drill"
  }
,
  "electric-mining-drill": {
    "name": "electric-mining-drill",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "extraction-machine",
    "order": "a[items]-b[electric-mining-drill]",
    "place_result": "electric-mining-drill"
  }
,
  "offshore-pump": {
    "name": "offshore-pump",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 20,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "extraction-machine",
    "order": "b[fluids]-a[offshore-pump]",
    "place_result": "offshore-pump"
  }
,
  "pumpjack": {
    "name": "pumpjack",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 20,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "extraction-machine",
    "order": "b[fluids]-b[pumpjack]",
    "place_result": "pumpjack"
  }
,
  "stone-furnace": {
    "name": "stone-furnace",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "smelting-machine",
    "order": "a[stone-furnace]",
    "place_result": "stone-furnace"
  }
,
  "steel-furnace": {
    "name": "steel-furnace",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "smelting-machine",
    "order": "b[steel-furnace]",
    "place_result": "steel-furnace"
  }
,
  "electric-furnace": {
    "name": "electric-furnace",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "smelting-machine",
    "order": "c[electric-furnace]",
    "place_result": "electric-furnace"
  }
,
  "assembling-machine-1": {
    "name": "assembling-machine-1",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "production-machine",
    "order": "a[assembling-machine-1]",
    "place_result": "assembling-machine-1"
  }
,
  "assembling-machine-2": {
    "name": "assembling-machine-2",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "production-machine",
    "order": "b[assembling-machine-2]",
    "place_result": "assembling-machine-2"
  }
,
  "assembling-machine-3": {
    "name": "assembling-machine-3",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "production-machine",
    "order": "c[assembling-machine-3]",
    "place_result": "assembling-machine-3"
  }
,
  "oil-refinery": {
    "name": "oil-refinery",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "production-machine",
    "order": "d[refinery]",
    "place_result": "oil-refinery"
  }
,
  "chemical-plant": {
    "name": "chemical-plant",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "production-machine",
    "order": "e[chemical-plant]",
    "place_result": "chemical-plant"
  }
,
  "centrifuge": {
    "name": "centrifuge",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "production-machine",
    "order": "g[centrifuge]",
    "place_result": "centrifuge"
  }
,
  "lab": {
    "name": "lab",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "production-machine",
    "order": "g[lab]",
    "place_result": "lab"
  }
,
  "beacon": {
    "name": "beacon",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "module",
    "order": "a[beacon]",
    "place_result": "beacon"
  }
,
  "speed-module": {
    "name": "speed-module",
    "type": "module",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "module",
    "order": "a[speed]-a[speed-module-1]"
  }
,
  "speed-module-2": {
    "name": "speed-module-2",
    "type": "module",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "module",
    "order": "a[speed]-b[speed-module-2]"
  }
,
  "speed-module-3": {
    "name": "speed-module-3",
    "type": "module",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "module",
    "order": "a[speed]-c[speed-module-3]"
  }
,
  "effectivity-module": {
    "name": "effectivity-module",
    "type": "module",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "module",
    "order": "c[effectivity]-a[effectivity-module-1]"
  }
,
  "effectivity-module-2": {
    "name": "effectivity-module-2",
    "type": "module",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "module",
    "order": "c[effectivity]-b[effectivity-module-2]"
  }
,
  "effectivity-module-3": {
    "name": "effectivity-module-3",
    "type": "module",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "module",
    "order": "c[effectivity]-c[effectivity-module-3]"
  }
,
  "productivity-module": {
    "name": "productivity-module",
    "type": "module",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "module",
    "order": "c[productivity]-a[productivity-module-1]"
  }
,
  "productivity-module-2": {
    "name": "productivity-module-2",
    "type": "module",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "module",
    "order": "c[productivity]-b[productivity-module-2]"
  }
,
  "productivity-module-3": {
    "name": "productivity-module-3",
    "type": "module",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "production",
    "subgroup": "module",
    "order": "c[productivity]-c[productivity-module-3]"
  }
,
  "raw-wood": {
    "name": "raw-wood",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "fuel_category": "chemical",
    "stack_size": 100,
    "fuel_value": 4000000,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-resource",
    "order": "a[raw-wood]"
  }
,
  "coal": {
    "name": "coal",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "fuel_category": "chemical",
    "stack_size": 50,
    "fuel_value": 8000000,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-resource",
    "order": "b[coal]"
  }
,
  "stone": {
    "name": "stone",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-resource",
    "order": "d[stone]"
  }
,
  "iron-ore": {
    "name": "iron-ore",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-resource",
    "order": "e[iron-ore]"
  }
,
  "copper-ore": {
    "name": "copper-ore",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-resource",
    "order": "f[copper-ore]"
  }
,
  "uranium-ore": {
    "name": "uranium-ore",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-resource",
    "order": "g[uranium-ore]"
  }
,
  "raw-fish": {
    "name": "raw-fish",
    "type": "capsule",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-resource",
    "order": "h[raw-fish]"
  }
,
  "wood": {
    "name": "wood",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "fuel_category": "chemical",
    "stack_size": 50,
    "fuel_value": 2000000,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-material",
    "order": "a[wood]"
  }
,
  "iron-plate": {
    "name": "iron-plate",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-material",
    "order": "b[iron-plate]"
  }
,
  "copper-plate": {
    "name": "copper-plate",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-material",
    "order": "c[copper-plate]"
  }
,
  "solid-fuel": {
    "name": "solid-fuel",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "fuel_category": "chemical",
    "stack_size": 50,
    "fuel_value": 25000000,
    "fuel_acceleration_multiplier": 1.2,
    "fuel_top_speed_multiplier": 1.05,
    "group": "intermediate-products",
    "subgroup": "raw-material",
    "order": "c[solid-fuel]"
  }
,
  "steel-plate": {
    "name": "steel-plate",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-material",
    "order": "d[steel-plate]"
  }
,
  "plastic-bar": {
    "name": "plastic-bar",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-material",
    "order": "f[plastic-bar]"
  }
,
  "sulfur": {
    "name": "sulfur",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-material",
    "order": "g[sulfur]"
  }
,
  "battery": {
    "name": "battery",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-material",
    "order": "h[battery]"
  }
,
  "explosives": {
    "name": "explosives",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "raw-material",
    "order": "j[explosives]"
  }
,
  "crude-oil-barrel": {
    "name": "crude-oil-barrel",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "fill-barrel",
    "order": "b[crude-oil-barrel]"
  }
,
  "heavy-oil-barrel": {
    "name": "heavy-oil-barrel",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "fill-barrel",
    "order": "b[heavy-oil-barrel]"
  }
,
  "light-oil-barrel": {
    "name": "light-oil-barrel",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "fill-barrel",
    "order": "b[light-oil-barrel]"
  }
,
  "lubricant-barrel": {
    "name": "lubricant-barrel",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "fill-barrel",
    "order": "b[lubricant-barrel]"
  }
,
  "petroleum-gas-barrel": {
    "name": "petroleum-gas-barrel",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "fill-barrel",
    "order": "b[petroleum-gas-barrel]"
  }
,
  "sulfuric-acid-barrel": {
    "name": "sulfuric-acid-barrel",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "fill-barrel",
    "order": "b[sulfuric-acid-barrel]"
  }
,
  "water-barrel": {
    "name": "water-barrel",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "fill-barrel",
    "order": "b[water-barrel]"
  }
,
  "copper-cable": {
    "name": "copper-cable",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "a[copper-cable]"
  }
,
  "iron-stick": {
    "name": "iron-stick",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "b[iron-stick]"
  }
,
  "iron-gear-wheel": {
    "name": "iron-gear-wheel",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "c[iron-gear-wheel]"
  }
,
  "empty-barrel": {
    "name": "empty-barrel",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "d[empty-barrel]"
  }
,
  "electronic-circuit": {
    "name": "electronic-circuit",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "e[electronic-circuit]"
  }
,
  "advanced-circuit": {
    "name": "advanced-circuit",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "f[advanced-circuit]"
  }
,
  "processing-unit": {
    "name": "processing-unit",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "g[processing-unit]"
  }
,
  "engine-unit": {
    "name": "engine-unit",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "h[engine-unit]"
  }
,
  "electric-engine-unit": {
    "name": "electric-engine-unit",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "i[electric-engine-unit]"
  }
,
  "flying-robot-frame": {
    "name": "flying-robot-frame",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "l[flying-robot-frame]"
  }
,
  "satellite": {
    "name": "satellite",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "m[satellite]"
  }
,
  "rocket-control-unit": {
    "name": "rocket-control-unit",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "n[rocket-control-unit]"
  }
,
  "low-density-structure": {
    "name": "low-density-structure",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "o[rocket-structure]"
  }
,
  "rocket-fuel": {
    "name": "rocket-fuel",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "fuel_category": "chemical",
    "stack_size": 10,
    "fuel_value": 225000000,
    "fuel_acceleration_multiplier": 1.8,
    "fuel_top_speed_multiplier": 1.15,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "p[rocket-fuel]"
  }
,
  "rocket-part": {
    "name": "rocket-part",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true,
      "hidden": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "q[rocket-part]"
  }
,
  "nuclear-fuel": {
    "name": "nuclear-fuel",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "fuel_category": "chemical",
    "stack_size": 1,
    "fuel_value": 1210000000,
    "fuel_acceleration_multiplier": 2.5,
    "fuel_top_speed_multiplier": 1.15,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "q[uranium-rocket-fuel]"
  }
,
  "uranium-235": {
    "name": "uranium-235",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "r[uranium-235]"
  }
,
  "uranium-238": {
    "name": "uranium-238",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "r[uranium-238]"
  }
,
  "uranium-fuel-cell": {
    "name": "uranium-fuel-cell",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "fuel_category": "nuclear",
    "stack_size": 50,
    "fuel_value": 8000000000,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "r[uranium-processing]-a[uranium-fuel-cell]"
  }
,
  "used-up-uranium-fuel-cell": {
    "name": "used-up-uranium-fuel-cell",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "intermediate-product",
    "order": "r[used-up-uranium-fuel-cell]"
  }
,
  "science-pack-1": {
    "name": "science-pack-1",
    "type": "tool",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "science-pack",
    "order": "a[science-pack-1]"
  }
,
  "science-pack-2": {
    "name": "science-pack-2",
    "type": "tool",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "science-pack",
    "order": "b[science-pack-2]"
  }
,
  "science-pack-3": {
    "name": "science-pack-3",
    "type": "tool",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "science-pack",
    "order": "c[science-pack-3]"
  }
,
  "military-science-pack": {
    "name": "military-science-pack",
    "type": "tool",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "science-pack",
    "order": "d[military-science-pack]"
  }
,
  "production-science-pack": {
    "name": "production-science-pack",
    "type": "tool",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "science-pack",
    "order": "e[production-science-pack]"
  }
,
  "high-tech-science-pack": {
    "name": "high-tech-science-pack",
    "type": "tool",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "science-pack",
    "order": "f[high-tech-science-pack]"
  }
,
  "space-science-pack": {
    "name": "space-science-pack",
    "type": "tool",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 2000,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "science-pack",
    "order": "g[space-science-pack]"
  }
,
  "coin": {
    "name": "coin",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 100000,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "intermediate-products",
    "subgroup": "science-pack",
    "order": "y"
  }
,
  "pistol": {
    "name": "pistol",
    "type": "gun",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "gun",
    "order": "a[basic-clips]-a[pistol]"
  }
,
  "submachine-gun": {
    "name": "submachine-gun",
    "type": "gun",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "gun",
    "order": "a[basic-clips]-b[submachine-gun]"
  }
,
  "tank-machine-gun": {
    "name": "tank-machine-gun",
    "type": "gun",
    "flags": {
      "goes-to-main-inventory": true,
      "hidden": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "gun",
    "order": "a[basic-clips]-b[tank-machine-gun]"
  }
,
  "vehicle-machine-gun": {
    "name": "vehicle-machine-gun",
    "type": "gun",
    "flags": {
      "goes-to-main-inventory": true,
      "hidden": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "gun",
    "order": "a[basic-clips]-b[vehicle-machine-gun]"
  }
,
  "tank-flamethrower": {
    "name": "tank-flamethrower",
    "type": "gun",
    "flags": {
      "goes-to-main-inventory": true,
      "hidden": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "gun",
    "order": "b[flamethrower]-b[tank-flamethrower]"
  }
,
  "shotgun": {
    "name": "shotgun",
    "type": "gun",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "gun",
    "order": "b[shotgun]-a[basic]"
  }
,
  "combat-shotgun": {
    "name": "combat-shotgun",
    "type": "gun",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "gun",
    "order": "b[shotgun]-a[combat]"
  }
,
  "railgun": {
    "name": "railgun",
    "type": "gun",
    "flags": {
      "goes-to-main-inventory": true,
      "hidden": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "gun",
    "order": "c[railgun]"
  }
,
  "rocket-launcher": {
    "name": "rocket-launcher",
    "type": "gun",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "gun",
    "order": "d[rocket-launcher]"
  }
,
  "flamethrower": {
    "name": "flamethrower",
    "type": "gun",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "gun",
    "order": "e[flamethrower]"
  }
,
  "land-mine": {
    "name": "land-mine",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "gun",
    "order": "f[land-mine]",
    "place_result": "land-mine"
  }
,
  "artillery-wagon-cannon": {
    "name": "artillery-wagon-cannon",
    "type": "gun",
    "flags": {
      "goes-to-main-inventory": true,
      "hidden": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "gun",
    "order": "z[artillery]-a[cannon]"
  }
,
  "tank-cannon": {
    "name": "tank-cannon",
    "type": "gun",
    "flags": {
      "goes-to-main-inventory": true,
      "hidden": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "gun",
    "order": "z[tank]-a[cannon]"
  }
,
  "firearm-magazine": {
    "name": "firearm-magazine",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "a[basic-clips]-a[firearm-magazine]"
  }
,
  "piercing-rounds-magazine": {
    "name": "piercing-rounds-magazine",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "a[basic-clips]-b[piercing-rounds-magazine]"
  }
,
  "uranium-rounds-magazine": {
    "name": "uranium-rounds-magazine",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "a[basic-clips]-c[uranium-rounds-magazine]"
  }
,
  "shotgun-shell": {
    "name": "shotgun-shell",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "b[shotgun]-a[basic]"
  }
,
  "piercing-shotgun-shell": {
    "name": "piercing-shotgun-shell",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "b[shotgun]-b[piercing]"
  }
,
  "railgun-dart": {
    "name": "railgun-dart",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true,
      "hidden": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "c[railgun]"
  }
,
  "cannon-shell": {
    "name": "cannon-shell",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "d[cannon-shell]-a[basic]"
  }
,
  "explosive-cannon-shell": {
    "name": "explosive-cannon-shell",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "d[cannon-shell]-c[explosive]"
  }
,
  "uranium-cannon-shell": {
    "name": "uranium-cannon-shell",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "d[cannon-shell]-c[uranium]"
  }
,
  "explosive-uranium-cannon-shell": {
    "name": "explosive-uranium-cannon-shell",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "d[explosive-cannon-shell]-c[uranium]"
  }
,
  "artillery-shell": {
    "name": "artillery-shell",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "d[explosive-cannon-shell]-d[artillery]"
  }
,
  "rocket": {
    "name": "rocket",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "d[rocket-launcher]-a[basic]"
  }
,
  "explosive-rocket": {
    "name": "explosive-rocket",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 200,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "d[rocket-launcher]-b[explosive]"
  }
,
  "atomic-bomb": {
    "name": "atomic-bomb",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "d[rocket-launcher]-c[atomic-bomb]"
  }
,
  "flamethrower-ammo": {
    "name": "flamethrower-ammo",
    "type": "ammo",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "ammo",
    "order": "e[flamethrower]"
  }
,
  "grenade": {
    "name": "grenade",
    "type": "capsule",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "capsule",
    "order": "a[grenade]-a[normal]"
  }
,
  "cluster-grenade": {
    "name": "cluster-grenade",
    "type": "capsule",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "capsule",
    "order": "a[grenade]-b[cluster]"
  }
,
  "poison-capsule": {
    "name": "poison-capsule",
    "type": "capsule",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "capsule",
    "order": "b[poison-capsule]"
  }
,
  "slowdown-capsule": {
    "name": "slowdown-capsule",
    "type": "capsule",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "capsule",
    "order": "c[slowdown-capsule]"
  }
,
  "defender-capsule": {
    "name": "defender-capsule",
    "type": "capsule",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "capsule",
    "order": "d[defender-capsule]"
  }
,
  "distractor-capsule": {
    "name": "distractor-capsule",
    "type": "capsule",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "capsule",
    "order": "e[defender-capsule]"
  }
,
  "destroyer-capsule": {
    "name": "destroyer-capsule",
    "type": "capsule",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "capsule",
    "order": "f[destroyer-capsule]"
  }
,
  "discharge-defense-remote": {
    "name": "discharge-defense-remote",
    "type": "capsule",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "capsule",
    "order": "z"
  }
,
  "artillery-targeting-remote": {
    "name": "artillery-targeting-remote",
    "type": "capsule",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "capsule",
    "order": "zz"
  }
,
  "light-armor": {
    "name": "light-armor",
    "type": "armor",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "armor",
    "order": "a[light-armor]"
  }
,
  "heavy-armor": {
    "name": "heavy-armor",
    "type": "armor",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "armor",
    "order": "b[heavy-armor]"
  }
,
  "modular-armor": {
    "name": "modular-armor",
    "type": "armor",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "armor",
    "order": "c[modular-armor]"
  }
,
  "power-armor": {
    "name": "power-armor",
    "type": "armor",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "armor",
    "order": "d[power-armor]"
  }
,
  "power-armor-mk2": {
    "name": "power-armor-mk2",
    "type": "armor",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "armor",
    "order": "e[power-armor-mk2]"
  }
,
  "belt-immunity-equipment": {
    "name": "belt-immunity-equipment",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true,
      "hidden": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "equipment",
    "order": "a[belt-immunity]-a[belt-immunity]"
  }
,
  "solar-panel-equipment": {
    "name": "solar-panel-equipment",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 20,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "equipment",
    "order": "a[energy-source]-a[solar-panel]"
  }
,
  "fusion-reactor-equipment": {
    "name": "fusion-reactor-equipment",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 20,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "equipment",
    "order": "a[energy-source]-b[fusion-reactor]"
  }
,
  "energy-shield-equipment": {
    "name": "energy-shield-equipment",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "equipment",
    "order": "b[shield]-a[energy-shield-equipment]"
  }
,
  "energy-shield-mk2-equipment": {
    "name": "energy-shield-mk2-equipment",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "equipment",
    "order": "b[shield]-b[energy-shield-equipment-mk2]"
  }
,
  "battery-equipment": {
    "name": "battery-equipment",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "equipment",
    "order": "c[battery]-a[battery-equipment]"
  }
,
  "battery-mk2-equipment": {
    "name": "battery-mk2-equipment",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "equipment",
    "order": "c[battery]-b[battery-equipment-mk2]"
  }
,
  "personal-laser-defense-equipment": {
    "name": "personal-laser-defense-equipment",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 20,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "equipment",
    "order": "d[active-defense]-a[personal-laser-defense-equipment]"
  }
,
  "discharge-defense-equipment": {
    "name": "discharge-defense-equipment",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 20,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "equipment",
    "order": "d[active-defense]-b[discharge-defense-equipment]"
  }
,
  "exoskeleton-equipment": {
    "name": "exoskeleton-equipment",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "equipment",
    "order": "e[exoskeleton]-a[exoskeleton-equipment]"
  }
,
  "personal-roboport-equipment": {
    "name": "personal-roboport-equipment",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "equipment",
    "order": "e[robotics]-a[personal-roboport-equipment]"
  }
,
  "personal-roboport-mk2-equipment": {
    "name": "personal-roboport-mk2-equipment",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 5,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "equipment",
    "order": "e[robotics]-b[personal-roboport-mk2-equipment]"
  }
,
  "night-vision-equipment": {
    "name": "night-vision-equipment",
    "type": "item",
    "flags": {
      "goes-to-main-inventory": true
    }
,
    "stack_size": 20,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "equipment",
    "order": "f[night-vision]-a[night-vision-equipment]"
  }
,
  "stone-wall": {
    "name": "stone-wall",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 100,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "defensive-structure",
    "order": "a[stone-wall]-a[stone-wall]",
    "place_result": "stone-wall"
  }
,
  "gate": {
    "name": "gate",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "defensive-structure",
    "order": "a[wall]-b[gate]",
    "place_result": "gate"
  }
,
  "gun-turret": {
    "name": "gun-turret",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "defensive-structure",
    "order": "b[turret]-a[gun-turret]",
    "place_result": "gun-turret"
  }
,
  "laser-turret": {
    "name": "laser-turret",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "defensive-structure",
    "order": "b[turret]-b[laser-turret]",
    "place_result": "laser-turret"
  }
,
  "flamethrower-turret": {
    "name": "flamethrower-turret",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "defensive-structure",
    "order": "b[turret]-c[flamethrower-turret]",
    "place_result": "flamethrower-turret"
  }
,
  "artillery-turret": {
    "name": "artillery-turret",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "defensive-structure",
    "order": "b[turret]-d[artillery-turret]",
    "place_result": "artillery-turret"
  }
,
  "radar": {
    "name": "radar",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "defensive-structure",
    "order": "d[radar]-a[radar]",
    "place_result": "radar"
  }
,
  "rocket-silo": {
    "name": "rocket-silo",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "defensive-structure",
    "order": "e[rocket-silo]",
    "place_result": "rocket-silo"
  }
,
  "computer": {
    "name": "computer",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "defensive-structure",
    "order": "g[computer]"
  }
,
  "player-port": {
    "name": "player-port",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "combat",
    "subgroup": "defensive-structure",
    "order": "z[not-used]",
    "place_result": "player-port"
  }
,
  "item-with-inventory": {
    "name": "item-with-inventory",
    "type": "item-with-inventory",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "other",
    "subgroup": "other",
    "inventory_size": 1,
    "order": "s[item-with-inventory]-o[item-with-inventory]"
  }
,
  "item-with-label": {
    "name": "item-with-label",
    "type": "item-with-label",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "other",
    "subgroup": "other",
    "order": "s[item-with-label]-o[item-with-label]"
  }
,
  "item-with-tags": {
    "name": "item-with-tags",
    "type": "item-with-tags",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 1,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "other",
    "subgroup": "other",
    "order": "s[item-with-tags]-o[item-with-tags]"
  }
,
  "simple-entity-with-force": {
    "name": "simple-entity-with-force",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "other",
    "subgroup": "other",
    "order": "s[simple-entity-with-force]-f[simple-entity-with-force]",
    "place_result": "simple-entity-with-force"
  }
,
  "simple-entity-with-owner": {
    "name": "simple-entity-with-owner",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 50,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "other",
    "subgroup": "other",
    "order": "s[simple-entity-with-owner]-o[simple-entity-with-owner]",
    "place_result": "simple-entity-with-owner"
  }
,
  "infinity-chest": {
    "name": "infinity-chest",
    "type": "item",
    "flags": {
      "goes-to-quickbar": true,
      "hidden": true
    }
,
    "stack_size": 10,
    "fuel_value": 0,
    "fuel_acceleration_multiplier": 1,
    "fuel_top_speed_multiplier": 1,
    "group": "other",
    "subgroup": "other",
    "order": "t[item]-o[infinity-chest]",
    "place_result": "infinity-chest"
  }

}
;export const recipes = {
  "assembling-machine-1": {
    "name": "assembling-machine-1",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 3
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 9
    }
],
    "products": [{
      "type": "item",
      "name": "assembling-machine-1",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[assembling-machine-1]",
    "group": "production",
    "subgroup": "production-machine"
  }
,
  "firearm-magazine": {
    "name": "firearm-magazine",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 4
    }
],
    "products": [{
      "type": "item",
      "name": "firearm-magazine",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "a[basic-clips]-a[firearm-magazine]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "pistol": {
    "name": "pistol",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "copper-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "pistol",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 5,
    "order": "a[basic-clips]-a[pistol]",
    "group": "combat",
    "subgroup": "gun"
  }
,
  "piercing-rounds-magazine": {
    "name": "piercing-rounds-magazine",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "firearm-magazine",
      "amount": 1
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 1
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "piercing-rounds-magazine",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3,
    "order": "a[basic-clips]-b[piercing-rounds-magazine]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "submachine-gun": {
    "name": "submachine-gun",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 10
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "submachine-gun",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "a[basic-clips]-b[submachine-gun]",
    "group": "combat",
    "subgroup": "gun"
  }
,
  "uranium-rounds-magazine": {
    "name": "uranium-rounds-magazine",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "piercing-rounds-magazine",
      "amount": 1
    }
,{
      "type": "item",
      "name": "uranium-238",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "uranium-rounds-magazine",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "a[basic-clips]-c[uranium-rounds-magazine]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "beacon": {
    "name": "beacon",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 20
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 20
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 10
    }
,{
      "type": "item",
      "name": "copper-cable",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "beacon",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 15,
    "order": "a[beacon]",
    "group": "production",
    "subgroup": "module"
  }
,
  "burner-inserter": {
    "name": "burner-inserter",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "burner-inserter",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[burner-inserter]",
    "group": "logistics",
    "subgroup": "inserter"
  }
,
  "copper-cable": {
    "name": "copper-cable",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "copper-plate",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "copper-cable",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[copper-cable]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "solar-panel-equipment": {
    "name": "solar-panel-equipment",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "solar-panel",
      "amount": 5
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "solar-panel-equipment",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "a[energy-source]-a[solar-panel]",
    "group": "combat",
    "subgroup": "equipment"
  }
,
  "fusion-reactor-equipment": {
    "name": "fusion-reactor-equipment",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "processing-unit",
      "amount": 250
    }
],
    "products": [{
      "type": "item",
      "name": "fusion-reactor-equipment",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "a[energy-source]-b[fusion-reactor]",
    "group": "combat",
    "subgroup": "equipment"
  }
,
  "small-electric-pole": {
    "name": "small-electric-pole",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "wood",
      "amount": 2
    }
,{
      "type": "item",
      "name": "copper-cable",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "small-electric-pole",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[energy]-a[small-electric-pole]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution"
  }
,
  "medium-electric-pole": {
    "name": "medium-electric-pole",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 2
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "medium-electric-pole",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[energy]-b[medium-electric-pole]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution"
  }
,
  "big-electric-pole": {
    "name": "big-electric-pole",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "big-electric-pole",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[energy]-c[big-electric-pole]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution"
  }
,
  "substation": {
    "name": "substation",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 10
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "substation",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[energy]-d[substation]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution"
  }
,
  "sulfuric-acid": {
    "name": "sulfuric-acid",
    "enabled": false,
    "category": "chemistry",
    "ingredients": [{
      "type": "item",
      "name": "sulfur",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "water",
      "amount": 100
    }
],
    "products": [{
      "type": "fluid",
      "name": "sulfuric-acid",
      "amount_min": 50,
      "amount_max": 50,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "a[fluid]-f[sulfuric-acid]",
    "group": "intermediate-products",
    "subgroup": "fluid-recipes"
  }
,
  "grenade": {
    "name": "grenade",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "coal",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "grenade",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "a[grenade]-a[normal]",
    "group": "combat",
    "subgroup": "capsule"
  }
,
  "cluster-grenade": {
    "name": "cluster-grenade",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "grenade",
      "amount": 7
    }
,{
      "type": "item",
      "name": "explosives",
      "amount": 5
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "cluster-grenade",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "a[grenade]-b[cluster]",
    "group": "combat",
    "subgroup": "capsule"
  }
,
  "burner-mining-drill": {
    "name": "burner-mining-drill",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 3
    }
,{
      "type": "item",
      "name": "stone-furnace",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 3
    }
],
    "products": [{
      "type": "item",
      "name": "burner-mining-drill",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 2,
    "order": "a[items]-a[burner-mining-drill]",
    "group": "production",
    "subgroup": "extraction-machine"
  }
,
  "wooden-chest": {
    "name": "wooden-chest",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "wood",
      "amount": 4
    }
],
    "products": [{
      "type": "item",
      "name": "wooden-chest",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[items]-a[wooden-chest]",
    "group": "logistics",
    "subgroup": "storage"
  }
,
  "electric-mining-drill": {
    "name": "electric-mining-drill",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 3
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "electric-mining-drill",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 2,
    "order": "a[items]-b[electric-mining-drill]",
    "group": "production",
    "subgroup": "extraction-machine"
  }
,
  "iron-chest": {
    "name": "iron-chest",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 8
    }
],
    "products": [{
      "type": "item",
      "name": "iron-chest",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[items]-b[iron-chest]",
    "group": "logistics",
    "subgroup": "storage"
  }
,
  "steel-chest": {
    "name": "steel-chest",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 8
    }
],
    "products": [{
      "type": "item",
      "name": "steel-chest",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[items]-c[steel-chest]",
    "group": "logistics",
    "subgroup": "storage"
  }
,
  "light-armor": {
    "name": "light-armor",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 40
    }
],
    "products": [{
      "type": "item",
      "name": "light-armor",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3,
    "order": "a[light-armor]",
    "group": "combat",
    "subgroup": "armor"
  }
,
  "small-lamp": {
    "name": "small-lamp",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-stick",
      "amount": 3
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "small-lamp",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[light]-a[small-lamp]",
    "group": "logistics",
    "subgroup": "circuit-network"
  }
,
  "iron-axe": {
    "name": "iron-axe",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-stick",
      "amount": 2
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 3
    }
],
    "products": [{
      "type": "item",
      "name": "iron-axe",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[mining]-a[iron-axe]",
    "group": "production",
    "subgroup": "tool"
  }
,
  "steel-axe": {
    "name": "steel-axe",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-stick",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "steel-axe",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[mining]-b[steel-axe]",
    "group": "production",
    "subgroup": "tool"
  }
,
  "basic-oil-processing": {
    "name": "basic-oil-processing",
    "enabled": false,
    "category": "oil-processing",
    "ingredients": [{
      "type": "fluid",
      "name": "crude-oil",
      "amount": 100
    }
],
    "products": [{
      "type": "fluid",
      "name": "heavy-oil",
      "amount_min": 30,
      "amount_max": 30,
      "probability": 1
    }
,{
      "type": "fluid",
      "name": "light-oil",
      "amount_min": 30,
      "amount_max": 30,
      "probability": 1
    }
,{
      "type": "fluid",
      "name": "petroleum-gas",
      "amount_min": 40,
      "amount_max": 40,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 5,
    "order": "a[oil-processing]-a[basic-oil-processing]",
    "group": "intermediate-products",
    "subgroup": "fluid-recipes"
  }
,
  "advanced-oil-processing": {
    "name": "advanced-oil-processing",
    "enabled": false,
    "category": "oil-processing",
    "ingredients": [{
      "type": "fluid",
      "name": "water",
      "amount": 50
    }
,{
      "type": "fluid",
      "name": "crude-oil",
      "amount": 100
    }
],
    "products": [{
      "type": "fluid",
      "name": "heavy-oil",
      "amount_min": 10,
      "amount_max": 10,
      "probability": 1
    }
,{
      "type": "fluid",
      "name": "light-oil",
      "amount_min": 45,
      "amount_max": 45,
      "probability": 1
    }
,{
      "type": "fluid",
      "name": "petroleum-gas",
      "amount_min": 55,
      "amount_max": 55,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 5,
    "order": "a[oil-processing]-b[advanced-oil-processing]",
    "group": "intermediate-products",
    "subgroup": "fluid-recipes"
  }
,
  "coal-liquefaction": {
    "name": "coal-liquefaction",
    "enabled": false,
    "category": "oil-processing",
    "ingredients": [{
      "type": "item",
      "name": "coal",
      "amount": 10
    }
,{
      "type": "fluid",
      "name": "heavy-oil",
      "amount": 25
    }
,{
      "type": "fluid",
      "name": "steam",
      "amount": 50
    }
],
    "products": [{
      "type": "fluid",
      "name": "heavy-oil",
      "amount_min": 35,
      "amount_max": 35,
      "probability": 1
    }
,{
      "type": "fluid",
      "name": "light-oil",
      "amount_min": 15,
      "amount_max": 15,
      "probability": 1
    }
,{
      "type": "fluid",
      "name": "petroleum-gas",
      "amount_min": 20,
      "amount_max": 20,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 5,
    "order": "a[oil-processing]-c[coal-liquefaction]",
    "group": "intermediate-products",
    "subgroup": "fluid-recipes"
  }
,
  "pipe": {
    "name": "pipe",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "pipe",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[pipe]-a[pipe]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution"
  }
,
  "pipe-to-ground": {
    "name": "pipe-to-ground",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "pipe",
      "amount": 10
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "pipe-to-ground",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[pipe]-b[pipe-to-ground]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution"
  }
,
  "logistic-robot": {
    "name": "logistic-robot",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "flying-robot-frame",
      "amount": 1
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "logistic-robot",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[robot]-a[logistic-robot]",
    "group": "logistics",
    "subgroup": "logistic-network"
  }
,
  "construction-robot": {
    "name": "construction-robot",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "flying-robot-frame",
      "amount": 1
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "construction-robot",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[robot]-b[construction-robot]",
    "group": "logistics",
    "subgroup": "logistic-network"
  }
,
  "science-pack-1": {
    "name": "science-pack-1",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "copper-plate",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "science-pack-1",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 5,
    "order": "a[science-pack-1]",
    "group": "intermediate-products",
    "subgroup": "science-pack"
  }
,
  "speed-module": {
    "name": "speed-module",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "speed-module",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 15,
    "order": "a[speed]-a[speed-module-1]",
    "group": "production",
    "subgroup": "module"
  }
,
  "speed-module-2": {
    "name": "speed-module-2",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "speed-module",
      "amount": 4
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "processing-unit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "speed-module-2",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 30,
    "order": "a[speed]-b[speed-module-2]",
    "group": "production",
    "subgroup": "module"
  }
,
  "speed-module-3": {
    "name": "speed-module-3",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "speed-module-2",
      "amount": 5
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "processing-unit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "speed-module-3",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 60,
    "order": "a[speed]-c[speed-module-3]",
    "group": "production",
    "subgroup": "module"
  }
,
  "stone-brick": {
    "name": "stone-brick",
    "enabled": true,
    "category": "smelting",
    "ingredients": [{
      "type": "item",
      "name": "stone",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "stone-brick",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3.5,
    "order": "a[stone-brick]",
    "group": "logistics",
    "subgroup": "terrain"
  }
,
  "stone-furnace": {
    "name": "stone-furnace",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "stone",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "stone-furnace",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[stone-furnace]",
    "group": "production",
    "subgroup": "smelting-machine"
  }
,
  "stone-wall": {
    "name": "stone-wall",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "stone-brick",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "stone-wall",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[stone-wall]-a[stone-wall]",
    "group": "combat",
    "subgroup": "defensive-structure"
  }
,
  "rail": {
    "name": "rail",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "stone",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-stick",
      "amount": 1
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "rail",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[train-system]-a[rail]",
    "group": "logistics",
    "subgroup": "transport"
  }
,
  "train-stop": {
    "name": "train-stop",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 10
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 3
    }
],
    "products": [{
      "type": "item",
      "name": "train-stop",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[train-system]-c[train-stop]",
    "group": "logistics",
    "subgroup": "transport"
  }
,
  "rail-signal": {
    "name": "rail-signal",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "rail-signal",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[train-system]-d[rail-signal]",
    "group": "logistics",
    "subgroup": "transport"
  }
,
  "rail-chain-signal": {
    "name": "rail-chain-signal",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "rail-chain-signal",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[train-system]-e[rail-signal-chain]",
    "group": "logistics",
    "subgroup": "transport"
  }
,
  "locomotive": {
    "name": "locomotive",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "engine-unit",
      "amount": 20
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 10
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 30
    }
],
    "products": [{
      "type": "item",
      "name": "locomotive",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 4,
    "order": "a[train-system]-f[diesel-locomotive]",
    "group": "logistics",
    "subgroup": "transport"
  }
,
  "cargo-wagon": {
    "name": "cargo-wagon",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 10
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 20
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "cargo-wagon",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "a[train-system]-g[cargo-wagon]",
    "group": "logistics",
    "subgroup": "transport"
  }
,
  "fluid-wagon": {
    "name": "fluid-wagon",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 10
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 16
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 8
    }
,{
      "type": "item",
      "name": "storage-tank",
      "amount": 3
    }
],
    "products": [{
      "type": "item",
      "name": "fluid-wagon",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1.5,
    "order": "a[train-system]-h[fluid-wagon]",
    "group": "logistics",
    "subgroup": "transport"
  }
,
  "artillery-wagon": {
    "name": "artillery-wagon",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "engine-unit",
      "amount": 64
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 10
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 40
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 16
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "artillery-wagon",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 4,
    "order": "a[train-system]-i[artillery-wagon]",
    "group": "logistics",
    "subgroup": "transport"
  }
,
  "transport-belt": {
    "name": "transport-belt",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "transport-belt",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[transport-belt]-a[transport-belt]",
    "group": "logistics",
    "subgroup": "belt"
  }
,
  "fast-transport-belt": {
    "name": "fast-transport-belt",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 5
    }
,{
      "type": "item",
      "name": "transport-belt",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "fast-transport-belt",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[transport-belt]-b[fast-transport-belt]",
    "group": "logistics",
    "subgroup": "belt"
  }
,
  "express-transport-belt": {
    "name": "express-transport-belt",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 10
    }
,{
      "type": "item",
      "name": "fast-transport-belt",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "lubricant",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "express-transport-belt",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[transport-belt]-c[express-transport-belt]",
    "group": "logistics",
    "subgroup": "belt"
  }
,
  "gate": {
    "name": "gate",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "stone-wall",
      "amount": 1
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 2
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "gate",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[wall]-b[gate]",
    "group": "combat",
    "subgroup": "defensive-structure"
  }
,
  "wood": {
    "name": "wood",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "raw-wood",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "wood",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "a[wood]",
    "group": "intermediate-products",
    "subgroup": "raw-material"
  }
,
  "assembling-machine-2": {
    "name": "assembling-machine-2",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 9
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 3
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 5
    }
,{
      "type": "item",
      "name": "assembling-machine-1",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "assembling-machine-2",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[assembling-machine-2]",
    "group": "production",
    "subgroup": "production-machine"
  }
,
  "concrete": {
    "name": "concrete",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "stone-brick",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-ore",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "water",
      "amount": 100
    }
],
    "products": [{
      "type": "item",
      "name": "concrete",
      "amount": 10
    }
],
    "hidden": false,
    "energy": 10,
    "order": "b[concrete]-a[plain]",
    "group": "logistics",
    "subgroup": "terrain"
  }
,
  "hazard-concrete": {
    "name": "hazard-concrete",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "concrete",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "hazard-concrete",
      "amount": 10
    }
],
    "hidden": false,
    "energy": 0.25,
    "order": "b[concrete]-b[hazard]",
    "group": "logistics",
    "subgroup": "terrain"
  }
,
  "fill-crude-oil-barrel": {
    "name": "fill-crude-oil-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "crude-oil",
      "amount": 250
    }
],
    "products": [{
      "type": "item",
      "name": "crude-oil-barrel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "b[fill-crude-oil-barrel]",
    "group": "intermediate-products",
    "subgroup": "fill-barrel"
  }
,
  "fill-heavy-oil-barrel": {
    "name": "fill-heavy-oil-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "heavy-oil",
      "amount": 250
    }
],
    "products": [{
      "type": "item",
      "name": "heavy-oil-barrel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "b[fill-heavy-oil-barrel]",
    "group": "intermediate-products",
    "subgroup": "fill-barrel"
  }
,
  "fill-light-oil-barrel": {
    "name": "fill-light-oil-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "light-oil",
      "amount": 250
    }
],
    "products": [{
      "type": "item",
      "name": "light-oil-barrel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "b[fill-light-oil-barrel]",
    "group": "intermediate-products",
    "subgroup": "fill-barrel"
  }
,
  "fill-lubricant-barrel": {
    "name": "fill-lubricant-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "lubricant",
      "amount": 250
    }
],
    "products": [{
      "type": "item",
      "name": "lubricant-barrel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "b[fill-lubricant-barrel]",
    "group": "intermediate-products",
    "subgroup": "fill-barrel"
  }
,
  "fill-petroleum-gas-barrel": {
    "name": "fill-petroleum-gas-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "petroleum-gas",
      "amount": 250
    }
],
    "products": [{
      "type": "item",
      "name": "petroleum-gas-barrel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "b[fill-petroleum-gas-barrel]",
    "group": "intermediate-products",
    "subgroup": "fill-barrel"
  }
,
  "fill-sulfuric-acid-barrel": {
    "name": "fill-sulfuric-acid-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "sulfuric-acid",
      "amount": 250
    }
],
    "products": [{
      "type": "item",
      "name": "sulfuric-acid-barrel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "b[fill-sulfuric-acid-barrel]",
    "group": "intermediate-products",
    "subgroup": "fill-barrel"
  }
,
  "fill-water-barrel": {
    "name": "fill-water-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "water",
      "amount": 250
    }
],
    "products": [{
      "type": "item",
      "name": "water-barrel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "b[fill-water-barrel]",
    "group": "intermediate-products",
    "subgroup": "fill-barrel"
  }
,
  "heavy-oil-cracking": {
    "name": "heavy-oil-cracking",
    "enabled": false,
    "category": "chemistry",
    "ingredients": [{
      "type": "fluid",
      "name": "water",
      "amount": 30
    }
,{
      "type": "fluid",
      "name": "heavy-oil",
      "amount": 40
    }
],
    "products": [{
      "type": "fluid",
      "name": "light-oil",
      "amount_min": 30,
      "amount_max": 30,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 3,
    "order": "b[fluid-chemistry]-a[heavy-oil-cracking]",
    "group": "intermediate-products",
    "subgroup": "fluid-recipes"
  }
,
  "light-oil-cracking": {
    "name": "light-oil-cracking",
    "enabled": false,
    "category": "chemistry",
    "ingredients": [{
      "type": "fluid",
      "name": "water",
      "amount": 30
    }
,{
      "type": "fluid",
      "name": "light-oil",
      "amount": 30
    }
],
    "products": [{
      "type": "fluid",
      "name": "petroleum-gas",
      "amount_min": 20,
      "amount_max": 20,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 3,
    "order": "b[fluid-chemistry]-b[light-oil-cracking]",
    "group": "intermediate-products",
    "subgroup": "fluid-recipes"
  }
,
  "solid-fuel-from-light-oil": {
    "name": "solid-fuel-from-light-oil",
    "enabled": false,
    "category": "chemistry",
    "ingredients": [{
      "type": "fluid",
      "name": "light-oil",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "solid-fuel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3,
    "order": "b[fluid-chemistry]-c[solid-fuel-from-light-oil]",
    "group": "intermediate-products",
    "subgroup": "fluid-recipes"
  }
,
  "solid-fuel-from-petroleum-gas": {
    "name": "solid-fuel-from-petroleum-gas",
    "enabled": false,
    "category": "chemistry",
    "ingredients": [{
      "type": "fluid",
      "name": "petroleum-gas",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "solid-fuel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3,
    "order": "b[fluid-chemistry]-d[solid-fuel-from-petroleum-gas]",
    "group": "intermediate-products",
    "subgroup": "fluid-recipes"
  }
,
  "solid-fuel-from-heavy-oil": {
    "name": "solid-fuel-from-heavy-oil",
    "enabled": false,
    "category": "chemistry",
    "ingredients": [{
      "type": "fluid",
      "name": "heavy-oil",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "solid-fuel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3,
    "order": "b[fluid-chemistry]-e[solid-fuel-from-heavy-oil]",
    "group": "intermediate-products",
    "subgroup": "fluid-recipes"
  }
,
  "storage-tank": {
    "name": "storage-tank",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 20
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "storage-tank",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3,
    "order": "b[fluid]-a[storage-tank]",
    "group": "logistics",
    "subgroup": "storage"
  }
,
  "offshore-pump": {
    "name": "offshore-pump",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 2
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "offshore-pump",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[fluids]-a[offshore-pump]",
    "group": "production",
    "subgroup": "extraction-machine"
  }
,
  "pumpjack": {
    "name": "pumpjack",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 10
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "pumpjack",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 5,
    "order": "b[fluids]-b[pumpjack]",
    "group": "production",
    "subgroup": "extraction-machine"
  }
,
  "heavy-armor": {
    "name": "heavy-armor",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "copper-plate",
      "amount": 100
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 50
    }
],
    "products": [{
      "type": "item",
      "name": "heavy-armor",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "b[heavy-armor]",
    "group": "combat",
    "subgroup": "armor"
  }
,
  "inserter": {
    "name": "inserter",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "inserter",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[inserter]",
    "group": "logistics",
    "subgroup": "inserter"
  }
,
  "iron-plate": {
    "name": "iron-plate",
    "enabled": true,
    "category": "smelting",
    "ingredients": [{
      "type": "item",
      "name": "iron-ore",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3.5,
    "order": "b[iron-plate]",
    "group": "intermediate-products",
    "subgroup": "raw-material"
  }
,
  "iron-stick": {
    "name": "iron-stick",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "iron-stick",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[iron-stick]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "car": {
    "name": "car",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "engine-unit",
      "amount": 8
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 20
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "car",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 2,
    "order": "b[personal-transport]-a[car]",
    "group": "logistics",
    "subgroup": "transport"
  }
,
  "tank": {
    "name": "tank",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "engine-unit",
      "amount": 32
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 50
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 15
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "tank",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 5,
    "order": "b[personal-transport]-b[tank]",
    "group": "logistics",
    "subgroup": "transport"
  }
,
  "small-plane": {
    "name": "small-plane",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "plastic-bar",
      "amount": 100
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 200
    }
,{
      "type": "item",
      "name": "electric-engine-unit",
      "amount": 20
    }
,{
      "type": "item",
      "name": "battery",
      "amount": 100
    }
],
    "products": [{
      "type": "item",
      "name": "small-plane",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 30,
    "order": "b[personal-transport]-c[small-plane]",
    "group": "logistics",
    "subgroup": "transport"
  }
,
  "pump": {
    "name": "pump",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "engine-unit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 1
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "pump",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 2,
    "order": "b[pipe]-c[pump]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution"
  }
,
  "poison-capsule": {
    "name": "poison-capsule",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 3
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 3
    }
,{
      "type": "item",
      "name": "coal",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "poison-capsule",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "b[poison-capsule]",
    "group": "combat",
    "subgroup": "capsule"
  }
,
  "repair-pack": {
    "name": "repair-pack",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 2
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "repair-pack",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[repair]-a[repair-pack]",
    "group": "production",
    "subgroup": "tool"
  }
,
  "science-pack-2": {
    "name": "science-pack-2",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "inserter",
      "amount": 1
    }
,{
      "type": "item",
      "name": "transport-belt",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "science-pack-2",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 6,
    "order": "b[science-pack-2]",
    "group": "intermediate-products",
    "subgroup": "science-pack"
  }
,
  "energy-shield-equipment": {
    "name": "energy-shield-equipment",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "energy-shield-equipment",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "b[shield]-a[energy-shield-equipment]",
    "group": "combat",
    "subgroup": "equipment"
  }
,
  "energy-shield-mk2-equipment": {
    "name": "energy-shield-mk2-equipment",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "energy-shield-equipment",
      "amount": 10
    }
,{
      "type": "item",
      "name": "processing-unit",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "energy-shield-mk2-equipment",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "b[shield]-b[energy-shield-equipment-mk2]",
    "group": "combat",
    "subgroup": "equipment"
  }
,
  "shotgun": {
    "name": "shotgun",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 15
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 5
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 10
    }
,{
      "type": "item",
      "name": "wood",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "shotgun",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "b[shotgun]-a[basic]",
    "group": "combat",
    "subgroup": "gun"
  }
,
  "shotgun-shell": {
    "name": "shotgun-shell",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "copper-plate",
      "amount": 2
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "shotgun-shell",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3,
    "order": "b[shotgun]-a[basic]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "combat-shotgun": {
    "name": "combat-shotgun",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 15
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 5
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 10
    }
,{
      "type": "item",
      "name": "wood",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "combat-shotgun",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "b[shotgun]-a[combat]",
    "group": "combat",
    "subgroup": "gun"
  }
,
  "piercing-shotgun-shell": {
    "name": "piercing-shotgun-shell",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "shotgun-shell",
      "amount": 2
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "piercing-shotgun-shell",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "b[shotgun]-b[piercing]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "boiler": {
    "name": "boiler",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "stone-furnace",
      "amount": 1
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 4
    }
],
    "products": [{
      "type": "item",
      "name": "boiler",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[steam-power]-a[boiler]",
    "group": "production",
    "subgroup": "energy"
  }
,
  "steam-engine": {
    "name": "steam-engine",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 8
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "steam-engine",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[steam-power]-b[steam-engine]",
    "group": "production",
    "subgroup": "energy"
  }
,
  "steam-turbine": {
    "name": "steam-turbine",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 50
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 50
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "steam-turbine",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3,
    "order": "b[steam-power]-c[steam-turbine]",
    "group": "production",
    "subgroup": "energy"
  }
,
  "steel-furnace": {
    "name": "steel-furnace",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 6
    }
,{
      "type": "item",
      "name": "stone-brick",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "steel-furnace",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3,
    "order": "b[steel-furnace]",
    "group": "production",
    "subgroup": "smelting-machine"
  }
,
  "logistic-chest-active-provider": {
    "name": "logistic-chest-active-provider",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-chest",
      "amount": 1
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 3
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "logistic-chest-active-provider",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[storage]-c[logistic-chest-active-provider]",
    "group": "logistics",
    "subgroup": "logistic-network"
  }
,
  "logistic-chest-passive-provider": {
    "name": "logistic-chest-passive-provider",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-chest",
      "amount": 1
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 3
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "logistic-chest-passive-provider",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[storage]-c[logistic-chest-passive-provider]",
    "group": "logistics",
    "subgroup": "logistic-network"
  }
,
  "logistic-chest-storage": {
    "name": "logistic-chest-storage",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-chest",
      "amount": 1
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 3
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "logistic-chest-storage",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[storage]-c[logistic-chest-storage]",
    "group": "logistics",
    "subgroup": "logistic-network"
  }
,
  "logistic-chest-buffer": {
    "name": "logistic-chest-buffer",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-chest",
      "amount": 1
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 3
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "logistic-chest-buffer",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[storage]-d[logistic-chest-buffer]",
    "group": "logistics",
    "subgroup": "logistic-network"
  }
,
  "logistic-chest-requester": {
    "name": "logistic-chest-requester",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-chest",
      "amount": 1
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 3
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "logistic-chest-requester",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[storage]-e[logistic-chest-requester]",
    "group": "logistics",
    "subgroup": "logistic-network"
  }
,
  "gun-turret": {
    "name": "gun-turret",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 10
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 10
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "gun-turret",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "b[turret]-a[gun-turret]",
    "group": "combat",
    "subgroup": "defensive-structure"
  }
,
  "laser-turret": {
    "name": "laser-turret",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 20
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 20
    }
,{
      "type": "item",
      "name": "battery",
      "amount": 12
    }
],
    "products": [{
      "type": "item",
      "name": "laser-turret",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 20,
    "order": "b[turret]-b[laser-turret]",
    "group": "combat",
    "subgroup": "defensive-structure"
  }
,
  "flamethrower-turret": {
    "name": "flamethrower-turret",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 30
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 15
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 10
    }
,{
      "type": "item",
      "name": "engine-unit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "flamethrower-turret",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 20,
    "order": "b[turret]-c[flamethrower-turret]",
    "group": "combat",
    "subgroup": "defensive-structure"
  }
,
  "artillery-turret": {
    "name": "artillery-turret",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 60
    }
,{
      "type": "item",
      "name": "concrete",
      "amount": 60
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 40
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "artillery-turret",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 40,
    "order": "b[turret]-d[artillery-turret]",
    "group": "combat",
    "subgroup": "defensive-structure"
  }
,
  "underground-belt": {
    "name": "underground-belt",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 10
    }
,{
      "type": "item",
      "name": "transport-belt",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "underground-belt",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 1,
    "order": "b[underground-belt]-a[underground-belt]",
    "group": "logistics",
    "subgroup": "belt"
  }
,
  "fast-underground-belt": {
    "name": "fast-underground-belt",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 40
    }
,{
      "type": "item",
      "name": "underground-belt",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "fast-underground-belt",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 2,
    "order": "b[underground-belt]-b[fast-underground-belt]",
    "group": "logistics",
    "subgroup": "belt"
  }
,
  "express-underground-belt": {
    "name": "express-underground-belt",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 80
    }
,{
      "type": "item",
      "name": "fast-underground-belt",
      "amount": 2
    }
,{
      "type": "fluid",
      "name": "lubricant",
      "amount": 40
    }
],
    "products": [{
      "type": "item",
      "name": "express-underground-belt",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 2,
    "order": "b[underground-belt]-c[express-underground-belt]",
    "group": "logistics",
    "subgroup": "belt"
  }
,
  "red-wire": {
    "name": "red-wire",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "copper-cable",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "red-wire",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[wires]-a[red-wire]",
    "group": "logistics",
    "subgroup": "circuit-network"
  }
,
  "green-wire": {
    "name": "green-wire",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "copper-cable",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "green-wire",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "b[wires]-b[green-wire]",
    "group": "logistics",
    "subgroup": "circuit-network"
  }
,
  "assembling-machine-3": {
    "name": "assembling-machine-3",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "speed-module",
      "amount": 4
    }
,{
      "type": "item",
      "name": "assembling-machine-2",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "assembling-machine-3",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "c[assembling-machine-3]",
    "group": "production",
    "subgroup": "production-machine"
  }
,
  "battery-equipment": {
    "name": "battery-equipment",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "battery",
      "amount": 5
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "battery-equipment",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "c[battery]-a[battery-equipment]",
    "group": "combat",
    "subgroup": "equipment"
  }
,
  "battery-mk2-equipment": {
    "name": "battery-mk2-equipment",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "battery-equipment",
      "amount": 10
    }
,{
      "type": "item",
      "name": "processing-unit",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "battery-mk2-equipment",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "c[battery]-b[battery-equipment-mk2]",
    "group": "combat",
    "subgroup": "equipment"
  }
,
  "arithmetic-combinator": {
    "name": "arithmetic-combinator",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "copper-cable",
      "amount": 5
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "arithmetic-combinator",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "c[combinators]-a[arithmetic-combinator]",
    "group": "logistics",
    "subgroup": "circuit-network"
  }
,
  "decider-combinator": {
    "name": "decider-combinator",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "copper-cable",
      "amount": 5
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "decider-combinator",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "c[combinators]-b[decider-combinator]",
    "group": "logistics",
    "subgroup": "circuit-network"
  }
,
  "constant-combinator": {
    "name": "constant-combinator",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "copper-cable",
      "amount": 5
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "constant-combinator",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "c[combinators]-c[constant-combinator]",
    "group": "logistics",
    "subgroup": "circuit-network"
  }
,
  "copper-plate": {
    "name": "copper-plate",
    "enabled": true,
    "category": "smelting",
    "ingredients": [{
      "type": "item",
      "name": "copper-ore",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "copper-plate",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3.5,
    "order": "c[copper-plate]",
    "group": "intermediate-products",
    "subgroup": "raw-material"
  }
,
  "effectivity-module": {
    "name": "effectivity-module",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "effectivity-module",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 15,
    "order": "c[effectivity]-a[effectivity-module-1]",
    "group": "production",
    "subgroup": "module"
  }
,
  "effectivity-module-2": {
    "name": "effectivity-module-2",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "effectivity-module",
      "amount": 4
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "processing-unit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "effectivity-module-2",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 30,
    "order": "c[effectivity]-b[effectivity-module-2]",
    "group": "production",
    "subgroup": "module"
  }
,
  "effectivity-module-3": {
    "name": "effectivity-module-3",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "effectivity-module-2",
      "amount": 5
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "processing-unit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "effectivity-module-3",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 60,
    "order": "c[effectivity]-c[effectivity-module-3]",
    "group": "production",
    "subgroup": "module"
  }
,
  "electric-furnace": {
    "name": "electric-furnace",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 10
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "stone-brick",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "electric-furnace",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 5,
    "order": "c[electric-furnace]",
    "group": "production",
    "subgroup": "smelting-machine"
  }
,
  "empty-crude-oil-barrel": {
    "name": "empty-crude-oil-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "crude-oil-barrel",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "crude-oil",
      "amount_min": 250,
      "amount_max": 250,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "c[empty-crude-oil-barrel]",
    "group": "intermediate-products",
    "subgroup": "empty-barrel"
  }
,
  "empty-heavy-oil-barrel": {
    "name": "empty-heavy-oil-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "heavy-oil-barrel",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "heavy-oil",
      "amount_min": 250,
      "amount_max": 250,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "c[empty-heavy-oil-barrel]",
    "group": "intermediate-products",
    "subgroup": "empty-barrel"
  }
,
  "empty-light-oil-barrel": {
    "name": "empty-light-oil-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "light-oil-barrel",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "light-oil",
      "amount_min": 250,
      "amount_max": 250,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "c[empty-light-oil-barrel]",
    "group": "intermediate-products",
    "subgroup": "empty-barrel"
  }
,
  "empty-lubricant-barrel": {
    "name": "empty-lubricant-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "lubricant-barrel",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "lubricant",
      "amount_min": 250,
      "amount_max": 250,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "c[empty-lubricant-barrel]",
    "group": "intermediate-products",
    "subgroup": "empty-barrel"
  }
,
  "empty-petroleum-gas-barrel": {
    "name": "empty-petroleum-gas-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "petroleum-gas-barrel",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "petroleum-gas",
      "amount_min": 250,
      "amount_max": 250,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "c[empty-petroleum-gas-barrel]",
    "group": "intermediate-products",
    "subgroup": "empty-barrel"
  }
,
  "empty-sulfuric-acid-barrel": {
    "name": "empty-sulfuric-acid-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "sulfuric-acid-barrel",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "sulfuric-acid",
      "amount_min": 250,
      "amount_max": 250,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "c[empty-sulfuric-acid-barrel]",
    "group": "intermediate-products",
    "subgroup": "empty-barrel"
  }
,
  "empty-water-barrel": {
    "name": "empty-water-barrel",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "water-barrel",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "water",
      "amount_min": 250,
      "amount_max": 250,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "c[empty-water-barrel]",
    "group": "intermediate-products",
    "subgroup": "empty-barrel"
  }
,
  "iron-gear-wheel": {
    "name": "iron-gear-wheel",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "c[iron-gear-wheel]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "landfill": {
    "name": "landfill",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "stone",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "landfill",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "c[landfill]-a[dirt]",
    "group": "logistics",
    "subgroup": "terrain"
  }
,
  "long-handed-inserter": {
    "name": "long-handed-inserter",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 1
    }
,{
      "type": "item",
      "name": "inserter",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "long-handed-inserter",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "c[long-handed-inserter]",
    "group": "logistics",
    "subgroup": "inserter"
  }
,
  "modular-armor": {
    "name": "modular-armor",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 30
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 50
    }
],
    "products": [{
      "type": "item",
      "name": "modular-armor",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 15,
    "order": "c[modular-armor]",
    "group": "combat",
    "subgroup": "armor"
  }
,
  "productivity-module": {
    "name": "productivity-module",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "productivity-module",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 15,
    "order": "c[productivity]-a[productivity-module-1]",
    "group": "production",
    "subgroup": "module"
  }
,
  "productivity-module-2": {
    "name": "productivity-module-2",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "productivity-module",
      "amount": 4
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "processing-unit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "productivity-module-2",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 30,
    "order": "c[productivity]-b[productivity-module-2]",
    "group": "production",
    "subgroup": "module"
  }
,
  "productivity-module-3": {
    "name": "productivity-module-3",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "productivity-module-2",
      "amount": 5
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "processing-unit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "productivity-module-3",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 60,
    "order": "c[productivity]-c[productivity-module-3]",
    "group": "production",
    "subgroup": "module"
  }
,
  "railgun": {
    "name": "railgun",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 15
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 15
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 10
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "railgun",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "c[railgun]",
    "group": "combat",
    "subgroup": "gun"
  }
,
  "railgun-dart": {
    "name": "railgun-dart",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "railgun-dart",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "c[railgun]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "science-pack-3": {
    "name": "science-pack-3",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "engine-unit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "electric-mining-drill",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "science-pack-3",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 12,
    "order": "c[science-pack-3]",
    "group": "intermediate-products",
    "subgroup": "science-pack"
  }
,
  "roboport": {
    "name": "roboport",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 45
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 45
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 45
    }
],
    "products": [{
      "type": "item",
      "name": "roboport",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 5,
    "order": "c[signal]-a[roboport]",
    "group": "logistics",
    "subgroup": "logistic-network"
  }
,
  "slowdown-capsule": {
    "name": "slowdown-capsule",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 2
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 2
    }
,{
      "type": "item",
      "name": "coal",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "slowdown-capsule",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "c[slowdown-capsule]",
    "group": "combat",
    "subgroup": "capsule"
  }
,
  "splitter": {
    "name": "splitter",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "transport-belt",
      "amount": 4
    }
],
    "products": [{
      "type": "item",
      "name": "splitter",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "c[splitter]-a[splitter]",
    "group": "logistics",
    "subgroup": "belt"
  }
,
  "fast-splitter": {
    "name": "fast-splitter",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "splitter",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 10
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "fast-splitter",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 2,
    "order": "c[splitter]-b[fast-splitter]",
    "group": "logistics",
    "subgroup": "belt"
  }
,
  "express-splitter": {
    "name": "express-splitter",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "fast-splitter",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 10
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 10
    }
,{
      "type": "fluid",
      "name": "lubricant",
      "amount": 80
    }
],
    "products": [{
      "type": "item",
      "name": "express-splitter",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 2,
    "order": "c[splitter]-c[express-splitter]",
    "group": "logistics",
    "subgroup": "belt"
  }
,
  "personal-laser-defense-equipment": {
    "name": "personal-laser-defense-equipment",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "processing-unit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "laser-turret",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "personal-laser-defense-equipment",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "d[active-defense]-a[personal-laser-defense-equipment]",
    "group": "combat",
    "subgroup": "equipment"
  }
,
  "discharge-defense-equipment": {
    "name": "discharge-defense-equipment",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "processing-unit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 20
    }
,{
      "type": "item",
      "name": "laser-turret",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "discharge-defense-equipment",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "d[active-defense]-b[discharge-defense-equipment]",
    "group": "combat",
    "subgroup": "equipment"
  }
,
  "cannon-shell": {
    "name": "cannon-shell",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 2
    }
,{
      "type": "item",
      "name": "plastic-bar",
      "amount": 2
    }
,{
      "type": "item",
      "name": "explosives",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "cannon-shell",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "d[cannon-shell]-a[basic]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "explosive-cannon-shell": {
    "name": "explosive-cannon-shell",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 2
    }
,{
      "type": "item",
      "name": "plastic-bar",
      "amount": 2
    }
,{
      "type": "item",
      "name": "explosives",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "explosive-cannon-shell",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "d[cannon-shell]-c[explosive]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "uranium-cannon-shell": {
    "name": "uranium-cannon-shell",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "cannon-shell",
      "amount": 1
    }
,{
      "type": "item",
      "name": "uranium-238",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "uranium-cannon-shell",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 12,
    "order": "d[cannon-shell]-c[uranium]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "cliff-explosives": {
    "name": "cliff-explosives",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "explosives",
      "amount": 10
    }
,{
      "type": "item",
      "name": "grenade",
      "amount": 1
    }
,{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "cliff-explosives",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "d[cliff-explosives]",
    "group": "logistics",
    "subgroup": "terrain"
  }
,
  "defender-capsule": {
    "name": "defender-capsule",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "piercing-rounds-magazine",
      "amount": 1
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 2
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 3
    }
],
    "products": [{
      "type": "item",
      "name": "defender-capsule",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "d[defender-capsule]",
    "group": "combat",
    "subgroup": "capsule"
  }
,
  "empty-barrel": {
    "name": "empty-barrel",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "empty-barrel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "d[empty-barrel]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "explosive-uranium-cannon-shell": {
    "name": "explosive-uranium-cannon-shell",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "explosive-cannon-shell",
      "amount": 1
    }
,{
      "type": "item",
      "name": "uranium-238",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "explosive-uranium-cannon-shell",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 12,
    "order": "d[explosive-cannon-shell]-c[uranium]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "artillery-shell": {
    "name": "artillery-shell",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "explosive-cannon-shell",
      "amount": 4
    }
,{
      "type": "item",
      "name": "radar",
      "amount": 1
    }
,{
      "type": "item",
      "name": "explosives",
      "amount": 8
    }
],
    "products": [{
      "type": "item",
      "name": "artillery-shell",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 15,
    "order": "d[explosive-cannon-shell]-d[artillery]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "fast-inserter": {
    "name": "fast-inserter",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 2
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 2
    }
,{
      "type": "item",
      "name": "inserter",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "fast-inserter",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "d[fast-inserter]",
    "group": "logistics",
    "subgroup": "inserter"
  }
,
  "loader": {
    "name": "loader",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "inserter",
      "amount": 5
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "transport-belt",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "loader",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "d[loader]-a[basic-loader]",
    "group": "logistics",
    "subgroup": "belt"
  }
,
  "fast-loader": {
    "name": "fast-loader",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "fast-transport-belt",
      "amount": 5
    }
,{
      "type": "item",
      "name": "loader",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "fast-loader",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3,
    "order": "d[loader]-b[fast-loader]",
    "group": "logistics",
    "subgroup": "belt"
  }
,
  "express-loader": {
    "name": "express-loader",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "express-transport-belt",
      "amount": 5
    }
,{
      "type": "item",
      "name": "fast-loader",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "express-loader",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "d[loader]-c[express-loader]",
    "group": "logistics",
    "subgroup": "belt"
  }
,
  "military-science-pack": {
    "name": "military-science-pack",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "piercing-rounds-magazine",
      "amount": 1
    }
,{
      "type": "item",
      "name": "grenade",
      "amount": 1
    }
,{
      "type": "item",
      "name": "gun-turret",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "military-science-pack",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 10,
    "order": "d[military-science-pack]",
    "group": "intermediate-products",
    "subgroup": "science-pack"
  }
,
  "power-switch": {
    "name": "power-switch",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "copper-cable",
      "amount": 5
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "power-switch",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 2,
    "order": "d[other]-a[power-switch]",
    "group": "logistics",
    "subgroup": "circuit-network"
  }
,
  "programmable-speaker": {
    "name": "programmable-speaker",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "copper-cable",
      "amount": 5
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 4
    }
],
    "products": [{
      "type": "item",
      "name": "programmable-speaker",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 2,
    "order": "d[other]-b[programmable-speaker]",
    "group": "logistics",
    "subgroup": "circuit-network"
  }
,
  "power-armor": {
    "name": "power-armor",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "processing-unit",
      "amount": 40
    }
,{
      "type": "item",
      "name": "electric-engine-unit",
      "amount": 20
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 40
    }
],
    "products": [{
      "type": "item",
      "name": "power-armor",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 20,
    "order": "d[power-armor]",
    "group": "combat",
    "subgroup": "armor"
  }
,
  "radar": {
    "name": "radar",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "radar",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "d[radar]-a[radar]",
    "group": "combat",
    "subgroup": "defensive-structure"
  }
,
  "oil-refinery": {
    "name": "oil-refinery",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 15
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 10
    }
,{
      "type": "item",
      "name": "stone-brick",
      "amount": 10
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 10
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "oil-refinery",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "d[refinery]",
    "group": "production",
    "subgroup": "production-machine"
  }
,
  "rocket-launcher": {
    "name": "rocket-launcher",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 5
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "rocket-launcher",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "d[rocket-launcher]",
    "group": "combat",
    "subgroup": "gun"
  }
,
  "rocket": {
    "name": "rocket",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "explosives",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "rocket",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "d[rocket-launcher]-a[basic]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "explosive-rocket": {
    "name": "explosive-rocket",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "rocket",
      "amount": 1
    }
,{
      "type": "item",
      "name": "explosives",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "explosive-rocket",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "d[rocket-launcher]-b[explosive]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "atomic-bomb": {
    "name": "atomic-bomb",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "processing-unit",
      "amount": 20
    }
,{
      "type": "item",
      "name": "explosives",
      "amount": 10
    }
,{
      "type": "item",
      "name": "uranium-235",
      "amount": 30
    }
],
    "products": [{
      "type": "item",
      "name": "atomic-bomb",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 50,
    "order": "d[rocket-launcher]-c[atomic-bomb]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "solar-panel": {
    "name": "solar-panel",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 15
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "solar-panel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "d[solar-panel]-a[solar-panel]",
    "group": "production",
    "subgroup": "energy"
  }
,
  "steel-plate": {
    "name": "steel-plate",
    "enabled": false,
    "category": "smelting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 17.5,
    "order": "d[steel-plate]",
    "group": "intermediate-products",
    "subgroup": "raw-material"
  }
,
  "accumulator": {
    "name": "accumulator",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 2
    }
,{
      "type": "item",
      "name": "battery",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "accumulator",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "e[accumulator]-a[accumulator]",
    "group": "production",
    "subgroup": "energy"
  }
,
  "chemical-plant": {
    "name": "chemical-plant",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 5
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "chemical-plant",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 5,
    "order": "e[chemical-plant]",
    "group": "production",
    "subgroup": "production-machine"
  }
,
  "distractor-capsule": {
    "name": "distractor-capsule",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "defender-capsule",
      "amount": 4
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 3
    }
],
    "products": [{
      "type": "item",
      "name": "distractor-capsule",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 15,
    "order": "e[defender-capsule]",
    "group": "combat",
    "subgroup": "capsule"
  }
,
  "electric-energy-interface": {
    "name": "electric-energy-interface",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 2
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "electric-energy-interface",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "e[electric-energy-interface]-b[electric-energy-interface]",
    "group": "production",
    "subgroup": "energy"
  }
,
  "electronic-circuit": {
    "name": "electronic-circuit",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 1
    }
,{
      "type": "item",
      "name": "copper-cable",
      "amount": 3
    }
],
    "products": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "e[electronic-circuit]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "exoskeleton-equipment": {
    "name": "exoskeleton-equipment",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "processing-unit",
      "amount": 10
    }
,{
      "type": "item",
      "name": "electric-engine-unit",
      "amount": 30
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "exoskeleton-equipment",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "e[exoskeleton]-a[exoskeleton-equipment]",
    "group": "combat",
    "subgroup": "equipment"
  }
,
  "filter-inserter": {
    "name": "filter-inserter",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "fast-inserter",
      "amount": 1
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 4
    }
],
    "products": [{
      "type": "item",
      "name": "filter-inserter",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "e[filter-inserter]",
    "group": "logistics",
    "subgroup": "inserter"
  }
,
  "flamethrower": {
    "name": "flamethrower",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "flamethrower",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "e[flamethrower]",
    "group": "combat",
    "subgroup": "gun"
  }
,
  "flamethrower-ammo": {
    "name": "flamethrower-ammo",
    "enabled": false,
    "category": "chemistry",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 5
    }
,{
      "type": "fluid",
      "name": "light-oil",
      "amount": 50
    }
,{
      "type": "fluid",
      "name": "heavy-oil",
      "amount": 50
    }
],
    "products": [{
      "type": "item",
      "name": "flamethrower-ammo",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 6,
    "order": "e[flamethrower]",
    "group": "combat",
    "subgroup": "ammo"
  }
,
  "lubricant": {
    "name": "lubricant",
    "enabled": false,
    "category": "chemistry",
    "ingredients": [{
      "type": "fluid",
      "name": "heavy-oil",
      "amount": 10
    }
],
    "products": [{
      "type": "fluid",
      "name": "lubricant",
      "amount_min": 10,
      "amount_max": 10,
      "probability": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "e[lubricant]",
    "group": "intermediate-products",
    "subgroup": "fluid-recipes"
  }
,
  "power-armor-mk2": {
    "name": "power-armor-mk2",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "effectivity-module-3",
      "amount": 5
    }
,{
      "type": "item",
      "name": "speed-module-3",
      "amount": 5
    }
,{
      "type": "item",
      "name": "processing-unit",
      "amount": 40
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 40
    }
],
    "products": [{
      "type": "item",
      "name": "power-armor-mk2",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 25,
    "order": "e[power-armor-mk2]",
    "group": "combat",
    "subgroup": "armor"
  }
,
  "production-science-pack": {
    "name": "production-science-pack",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electric-engine-unit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "electric-furnace",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "production-science-pack",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 14,
    "order": "e[production-science-pack]",
    "group": "intermediate-products",
    "subgroup": "science-pack"
  }
,
  "personal-roboport-equipment": {
    "name": "personal-roboport-equipment",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 10
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 40
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 20
    }
,{
      "type": "item",
      "name": "battery",
      "amount": 45
    }
],
    "products": [{
      "type": "item",
      "name": "personal-roboport-equipment",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "e[robotics]-a[personal-roboport-equipment]",
    "group": "combat",
    "subgroup": "equipment"
  }
,
  "personal-roboport-mk2-equipment": {
    "name": "personal-roboport-mk2-equipment",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "personal-roboport-equipment",
      "amount": 5
    }
,{
      "type": "item",
      "name": "processing-unit",
      "amount": 100
    }
],
    "products": [{
      "type": "item",
      "name": "personal-roboport-mk2-equipment",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 20,
    "order": "e[robotics]-b[personal-roboport-mk2-equipment]",
    "group": "combat",
    "subgroup": "equipment"
  }
,
  "rocket-silo": {
    "name": "rocket-silo",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 1000
    }
,{
      "type": "item",
      "name": "concrete",
      "amount": 1000
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 100
    }
,{
      "type": "item",
      "name": "processing-unit",
      "amount": 200
    }
,{
      "type": "item",
      "name": "electric-engine-unit",
      "amount": 200
    }
],
    "products": [{
      "type": "item",
      "name": "rocket-silo",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 30,
    "order": "e[rocket-silo]",
    "group": "combat",
    "subgroup": "defensive-structure"
  }
,
  "advanced-circuit": {
    "name": "advanced-circuit",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 2
    }
,{
      "type": "item",
      "name": "plastic-bar",
      "amount": 2
    }
,{
      "type": "item",
      "name": "copper-cable",
      "amount": 4
    }
],
    "products": [{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 6,
    "order": "f[advanced-circuit]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "destroyer-capsule": {
    "name": "destroyer-capsule",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "distractor-capsule",
      "amount": 4
    }
,{
      "type": "item",
      "name": "speed-module",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "destroyer-capsule",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 15,
    "order": "f[destroyer-capsule]",
    "group": "combat",
    "subgroup": "capsule"
  }
,
  "high-tech-science-pack": {
    "name": "high-tech-science-pack",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "battery",
      "amount": 1
    }
,{
      "type": "item",
      "name": "processing-unit",
      "amount": 3
    }
,{
      "type": "item",
      "name": "speed-module",
      "amount": 1
    }
,{
      "type": "item",
      "name": "copper-cable",
      "amount": 30
    }
],
    "products": [{
      "type": "item",
      "name": "high-tech-science-pack",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 14,
    "order": "f[high-tech-science-pack]",
    "group": "intermediate-products",
    "subgroup": "science-pack"
  }
,
  "land-mine": {
    "name": "land-mine",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 1
    }
,{
      "type": "item",
      "name": "explosives",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "land-mine",
      "amount": 4
    }
],
    "hidden": false,
    "energy": 5,
    "order": "f[land-mine]",
    "group": "combat",
    "subgroup": "gun"
  }
,
  "night-vision-equipment": {
    "name": "night-vision-equipment",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 5
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "night-vision-equipment",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "f[night-vision]-a[night-vision-equipment]",
    "group": "combat",
    "subgroup": "equipment"
  }
,
  "nuclear-reactor": {
    "name": "nuclear-reactor",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "concrete",
      "amount": 500
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 500
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 500
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 500
    }
],
    "products": [{
      "type": "item",
      "name": "nuclear-reactor",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 8,
    "order": "f[nuclear-energy]-a[reactor]",
    "group": "production",
    "subgroup": "energy"
  }
,
  "heat-exchanger": {
    "name": "heat-exchanger",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 10
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 100
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "heat-exchanger",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 3,
    "order": "f[nuclear-energy]-b[heat-exchanger]",
    "group": "production",
    "subgroup": "energy"
  }
,
  "heat-pipe": {
    "name": "heat-pipe",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 10
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "heat-pipe",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 1,
    "order": "f[nuclear-energy]-c[heat-pipe]",
    "group": "production",
    "subgroup": "energy"
  }
,
  "plastic-bar": {
    "name": "plastic-bar",
    "enabled": false,
    "category": "chemistry",
    "ingredients": [{
      "type": "item",
      "name": "coal",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "petroleum-gas",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "plastic-bar",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 1,
    "order": "f[plastic-bar]",
    "group": "intermediate-products",
    "subgroup": "raw-material"
  }
,
  "stack-inserter": {
    "name": "stack-inserter",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 15
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 15
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "fast-inserter",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "stack-inserter",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "f[stack-inserter]",
    "group": "logistics",
    "subgroup": "inserter"
  }
,
  "centrifuge": {
    "name": "centrifuge",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "concrete",
      "amount": 100
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 50
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 100
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 100
    }
],
    "products": [{
      "type": "item",
      "name": "centrifuge",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 4,
    "order": "g[centrifuge]",
    "group": "production",
    "subgroup": "production-machine"
  }
,
  "lab": {
    "name": "lab",
    "enabled": true,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 10
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 10
    }
,{
      "type": "item",
      "name": "transport-belt",
      "amount": 4
    }
],
    "products": [{
      "type": "item",
      "name": "lab",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 2,
    "order": "g[lab]",
    "group": "production",
    "subgroup": "production-machine"
  }
,
  "processing-unit": {
    "name": "processing-unit",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 20
    }
,{
      "type": "item",
      "name": "advanced-circuit",
      "amount": 2
    }
,{
      "type": "fluid",
      "name": "sulfuric-acid",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "processing-unit",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "g[processing-unit]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "stack-filter-inserter": {
    "name": "stack-filter-inserter",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "stack-inserter",
      "amount": 1
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "stack-filter-inserter",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "g[stack-filter-inserter]",
    "group": "logistics",
    "subgroup": "inserter"
  }
,
  "sulfur": {
    "name": "sulfur",
    "enabled": false,
    "category": "chemistry",
    "ingredients": [{
      "type": "fluid",
      "name": "water",
      "amount": 30
    }
,{
      "type": "fluid",
      "name": "petroleum-gas",
      "amount": 30
    }
],
    "products": [{
      "type": "item",
      "name": "sulfur",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 1,
    "order": "g[sulfur]",
    "group": "intermediate-products",
    "subgroup": "raw-material"
  }
,
  "battery": {
    "name": "battery",
    "enabled": false,
    "category": "chemistry",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 1
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "sulfuric-acid",
      "amount": 20
    }
],
    "products": [{
      "type": "item",
      "name": "battery",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 5,
    "order": "h[battery]",
    "group": "intermediate-products",
    "subgroup": "raw-material"
  }
,
  "engine-unit": {
    "name": "engine-unit",
    "enabled": false,
    "category": "advanced-crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 1
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 1
    }
,{
      "type": "item",
      "name": "pipe",
      "amount": 2
    }
],
    "products": [{
      "type": "item",
      "name": "engine-unit",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "h[engine-unit]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "electric-engine-unit": {
    "name": "electric-engine-unit",
    "enabled": false,
    "category": "crafting-with-fluid",
    "ingredients": [{
      "type": "item",
      "name": "engine-unit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 2
    }
,{
      "type": "fluid",
      "name": "lubricant",
      "amount": 15
    }
],
    "products": [{
      "type": "item",
      "name": "electric-engine-unit",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 10,
    "order": "i[electric-engine-unit]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "explosives": {
    "name": "explosives",
    "enabled": false,
    "category": "chemistry",
    "ingredients": [{
      "type": "item",
      "name": "sulfur",
      "amount": 1
    }
,{
      "type": "item",
      "name": "coal",
      "amount": 1
    }
,{
      "type": "fluid",
      "name": "water",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "explosives",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 5,
    "order": "j[explosives]",
    "group": "intermediate-products",
    "subgroup": "raw-material"
  }
,
  "uranium-processing": {
    "name": "uranium-processing",
    "enabled": false,
    "category": "centrifuging",
    "ingredients": [{
      "type": "item",
      "name": "uranium-ore",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "uranium-235",
      "amount_min": 1,
      "amount_max": 1,
      "probability": 0.007
    }
,{
      "type": "item",
      "name": "uranium-238",
      "amount_min": 1,
      "amount_max": 1,
      "probability": 0.993
    }
],
    "hidden": false,
    "energy": 10,
    "order": "k[uranium-processing]",
    "group": "intermediate-products",
    "subgroup": "raw-material"
  }
,
  "flying-robot-frame": {
    "name": "flying-robot-frame",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electric-engine-unit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "battery",
      "amount": 2
    }
,{
      "type": "item",
      "name": "steel-plate",
      "amount": 1
    }
,{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 3
    }
],
    "products": [{
      "type": "item",
      "name": "flying-robot-frame",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 20,
    "order": "l[flying-robot-frame]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "satellite": {
    "name": "satellite",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "low-density-structure",
      "amount": 100
    }
,{
      "type": "item",
      "name": "solar-panel",
      "amount": 100
    }
,{
      "type": "item",
      "name": "accumulator",
      "amount": 100
    }
,{
      "type": "item",
      "name": "radar",
      "amount": 5
    }
,{
      "type": "item",
      "name": "processing-unit",
      "amount": 100
    }
,{
      "type": "item",
      "name": "rocket-fuel",
      "amount": 50
    }
],
    "products": [{
      "type": "item",
      "name": "satellite",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 5,
    "order": "m[satellite]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "rocket-control-unit": {
    "name": "rocket-control-unit",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "processing-unit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "speed-module",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "rocket-control-unit",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 30,
    "order": "n[rocket-control-unit]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "low-density-structure": {
    "name": "low-density-structure",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "steel-plate",
      "amount": 10
    }
,{
      "type": "item",
      "name": "copper-plate",
      "amount": 5
    }
,{
      "type": "item",
      "name": "plastic-bar",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "low-density-structure",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 30,
    "order": "o[rocket-structure]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "rocket-fuel": {
    "name": "rocket-fuel",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "solid-fuel",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "rocket-fuel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 30,
    "order": "p[rocket-fuel]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "rocket-part": {
    "name": "rocket-part",
    "enabled": false,
    "category": "rocket-building",
    "ingredients": [{
      "type": "item",
      "name": "rocket-control-unit",
      "amount": 10
    }
,{
      "type": "item",
      "name": "low-density-structure",
      "amount": 10
    }
,{
      "type": "item",
      "name": "rocket-fuel",
      "amount": 10
    }
],
    "products": [{
      "type": "item",
      "name": "rocket-part",
      "amount": 1
    }
],
    "hidden": true,
    "energy": 3,
    "order": "q[rocket-part]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "nuclear-fuel": {
    "name": "nuclear-fuel",
    "enabled": false,
    "category": "centrifuging",
    "ingredients": [{
      "type": "item",
      "name": "uranium-235",
      "amount": 1
    }
,{
      "type": "item",
      "name": "rocket-fuel",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "nuclear-fuel",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 60,
    "order": "q[uranium-rocket-fuel]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "uranium-fuel-cell": {
    "name": "uranium-fuel-cell",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "iron-plate",
      "amount": 10
    }
,{
      "type": "item",
      "name": "uranium-235",
      "amount": 1
    }
,{
      "type": "item",
      "name": "uranium-238",
      "amount": 19
    }
],
    "products": [{
      "type": "item",
      "name": "uranium-fuel-cell",
      "amount": 10
    }
],
    "hidden": false,
    "energy": 10,
    "order": "r[uranium-processing]-a[uranium-fuel-cell]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "nuclear-fuel-reprocessing": {
    "name": "nuclear-fuel-reprocessing",
    "enabled": false,
    "category": "centrifuging",
    "ingredients": [{
      "type": "item",
      "name": "used-up-uranium-fuel-cell",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "uranium-238",
      "amount": 3
    }
],
    "hidden": false,
    "energy": 50,
    "order": "r[uranium-processing]-b[nuclear-fuel-reprocessing]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "kovarex-enrichment-process": {
    "name": "kovarex-enrichment-process",
    "enabled": false,
    "category": "centrifuging",
    "ingredients": [{
      "type": "item",
      "name": "uranium-235",
      "amount": 40
    }
,{
      "type": "item",
      "name": "uranium-238",
      "amount": 5
    }
],
    "products": [{
      "type": "item",
      "name": "uranium-235",
      "amount": 41
    }
,{
      "type": "item",
      "name": "uranium-238",
      "amount": 2
    }
],
    "hidden": false,
    "energy": 50,
    "order": "r[uranium-processing]-c[kovarex-enrichment-process]",
    "group": "intermediate-products",
    "subgroup": "intermediate-product"
  }
,
  "discharge-defense-remote": {
    "name": "discharge-defense-remote",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "discharge-defense-remote",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "z",
    "group": "combat",
    "subgroup": "capsule"
  }
,
  "player-port": {
    "name": "player-port",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "electronic-circuit",
      "amount": 10
    }
,{
      "type": "item",
      "name": "iron-gear-wheel",
      "amount": 5
    }
,{
      "type": "item",
      "name": "iron-plate",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "player-port",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "z[not-used]",
    "group": "combat",
    "subgroup": "defensive-structure"
  }
,
  "artillery-targeting-remote": {
    "name": "artillery-targeting-remote",
    "enabled": false,
    "category": "crafting",
    "ingredients": [{
      "type": "item",
      "name": "processing-unit",
      "amount": 1
    }
,{
      "type": "item",
      "name": "radar",
      "amount": 1
    }
],
    "products": [{
      "type": "item",
      "name": "artillery-targeting-remote",
      "amount": 1
    }
],
    "hidden": false,
    "energy": 0.5,
    "order": "zz",
    "group": "combat",
    "subgroup": "capsule"
  }

}
;export const entities = {
  "wooden-chest": {
    "name": "wooden-chest",
    "type": "container",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[items]-a[wooden-chest]",
    "group": "logistics",
    "subgroup": "storage",
    "inventory_size": 16,
    "fluid_capacity": 0
  }
,
  "iron-chest": {
    "name": "iron-chest",
    "type": "container",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[items]-b[iron-chest]",
    "group": "logistics",
    "subgroup": "storage",
    "inventory_size": 32,
    "fluid_capacity": 0
  }
,
  "steel-chest": {
    "name": "steel-chest",
    "type": "container",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[items]-c[steel-chest]",
    "group": "logistics",
    "subgroup": "storage",
    "inventory_size": 48,
    "fluid_capacity": 0
  }
,
  "storage-tank": {
    "name": "storage-tank",
    "type": "storage-tank",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-b[fluid]-a[storage-tank]",
    "group": "logistics",
    "subgroup": "storage",
    "fluid_capacity": 25000
  }
,
  "transport-belt": {
    "name": "transport-belt",
    "type": "transport-belt",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[transport-belt]-a[transport-belt]",
    "group": "logistics",
    "subgroup": "belt",
    "belt_speed": 0.03125,
    "fluid_capacity": 0
  }
,
  "fast-transport-belt": {
    "name": "fast-transport-belt",
    "type": "transport-belt",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[transport-belt]-b[fast-transport-belt]",
    "group": "logistics",
    "subgroup": "belt",
    "belt_speed": 0.0625,
    "fluid_capacity": 0
  }
,
  "express-transport-belt": {
    "name": "express-transport-belt",
    "type": "transport-belt",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[transport-belt]-c[express-transport-belt]",
    "group": "logistics",
    "subgroup": "belt",
    "belt_speed": 0.09375,
    "fluid_capacity": 0
  }
,
  "underground-belt": {
    "name": "underground-belt",
    "type": "underground-belt",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-b[underground-belt]-a[underground-belt]",
    "group": "logistics",
    "subgroup": "belt",
    "belt_speed": 0.03125,
    "max_underground_distance": 5,
    "fluid_capacity": 0
  }
,
  "fast-underground-belt": {
    "name": "fast-underground-belt",
    "type": "underground-belt",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-b[underground-belt]-b[fast-underground-belt]",
    "group": "logistics",
    "subgroup": "belt",
    "belt_speed": 0.0625,
    "max_underground_distance": 7,
    "fluid_capacity": 0
  }
,
  "express-underground-belt": {
    "name": "express-underground-belt",
    "type": "underground-belt",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-b[underground-belt]-c[express-underground-belt]",
    "group": "logistics",
    "subgroup": "belt",
    "belt_speed": 0.09375,
    "max_underground_distance": 9,
    "fluid_capacity": 0
  }
,
  "splitter": {
    "name": "splitter",
    "type": "splitter",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-c[splitter]-a[splitter]",
    "group": "logistics",
    "subgroup": "belt",
    "belt_speed": 0.03125,
    "fluid_capacity": 0
  }
,
  "fast-splitter": {
    "name": "fast-splitter",
    "type": "splitter",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-c[splitter]-b[fast-splitter]",
    "group": "logistics",
    "subgroup": "belt",
    "belt_speed": 0.0625,
    "fluid_capacity": 0
  }
,
  "express-splitter": {
    "name": "express-splitter",
    "type": "splitter",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-c[splitter]-c[express-splitter]",
    "group": "logistics",
    "subgroup": "belt",
    "belt_speed": 0.09375,
    "fluid_capacity": 0
  }
,
  "loader": {
    "name": "loader",
    "type": "loader",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true,
      "fast-replaceable-no-build-while-moving": true
    }
,
    "order": "z-d[loader]-a[basic-loader]",
    "group": "logistics",
    "subgroup": "belt",
    "belt_speed": 0.03125,
    "fluid_capacity": 0
  }
,
  "fast-loader": {
    "name": "fast-loader",
    "type": "loader",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true,
      "fast-replaceable-no-build-while-moving": true
    }
,
    "order": "z-d[loader]-b[fast-loader]",
    "group": "logistics",
    "subgroup": "belt",
    "belt_speed": 0.0625,
    "fluid_capacity": 0
  }
,
  "express-loader": {
    "name": "express-loader",
    "type": "loader",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true,
      "fast-replaceable-no-build-while-moving": true
    }
,
    "order": "z-d[loader]-c[express-loader]",
    "group": "logistics",
    "subgroup": "belt",
    "belt_speed": 0.09375,
    "fluid_capacity": 0
  }
,
  "burner-inserter": {
    "name": "burner-inserter",
    "type": "inserter",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-a[burner-inserter]",
    "group": "logistics",
    "subgroup": "inserter",
    "inventory_size": 1,
    "burner_prototype": {
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1,
      "fuel_inventory_size": 1,
      "burnt_inventory_size": 0,
      "fuel_category": "chemical"
    }
,
    "fluid_capacity": 0
  }
,
  "inserter": {
    "name": "inserter",
    "type": "inserter",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-b[inserter]",
    "group": "logistics",
    "subgroup": "inserter",
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 6.6666666666667,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "long-handed-inserter": {
    "name": "long-handed-inserter",
    "type": "inserter",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-c[long-handed-inserter]",
    "group": "logistics",
    "subgroup": "inserter",
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 6.6666666666667,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "fast-inserter": {
    "name": "fast-inserter",
    "type": "inserter",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-d[fast-inserter]",
    "group": "logistics",
    "subgroup": "inserter",
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 8.3333333333333,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "filter-inserter": {
    "name": "filter-inserter",
    "type": "inserter",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-e[filter-inserter]",
    "group": "logistics",
    "subgroup": "inserter",
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 8.3333333333333,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "stack-inserter": {
    "name": "stack-inserter",
    "type": "inserter",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-f[stack-inserter]",
    "group": "logistics",
    "subgroup": "inserter",
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 16.666666666667,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "stack-filter-inserter": {
    "name": "stack-filter-inserter",
    "type": "inserter",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-g[stack-filter-inserter]",
    "group": "logistics",
    "subgroup": "inserter",
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 16.666666666667,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "small-electric-pole": {
    "name": "small-electric-pole",
    "type": "electric-pole",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[energy]-a[small-electric-pole]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "fluid_capacity": 0
  }
,
  "medium-electric-pole": {
    "name": "medium-electric-pole",
    "type": "electric-pole",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[energy]-b[medium-electric-pole]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "fluid_capacity": 0
  }
,
  "big-electric-pole": {
    "name": "big-electric-pole",
    "type": "electric-pole",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[energy]-c[big-electric-pole]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "fluid_capacity": 0
  }
,
  "substation": {
    "name": "substation",
    "type": "electric-pole",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[energy]-d[substation]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "fluid_capacity": 0
  }
,
  "pipe": {
    "name": "pipe",
    "type": "pipe",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[pipe]-a[pipe]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "fluid_capacity": 100
  }
,
  "pipe-to-ground": {
    "name": "pipe-to-ground",
    "type": "pipe-to-ground",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[pipe]-b[pipe-to-ground]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "max_underground_distance": 10,
    "fluid_capacity": 100
  }
,
  "pump": {
    "name": "pump",
    "type": "pump",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-b[pipe]-c[pump]",
    "group": "logistics",
    "subgroup": "energy-pipe-distribution",
    "energy_usage": 500,
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 0,
      "emissions": 4e-06,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 200,
    "pumping_speed": 200
  }
,
  "curved-rail": {
    "name": "curved-rail",
    "type": "curved-rail",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true,
      "building-direction-8-way": true
    }
,
    "order": "z-a[train-system]-a[rail]",
    "group": "logistics",
    "subgroup": "transport",
    "fluid_capacity": 0
  }
,
  "straight-rail": {
    "name": "straight-rail",
    "type": "straight-rail",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true,
      "building-direction-8-way": true
    }
,
    "order": "z-a[train-system]-a[rail]",
    "group": "logistics",
    "subgroup": "transport",
    "fluid_capacity": 0
  }
,
  "train-stop": {
    "name": "train-stop",
    "type": "train-stop",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true,
      "filter-directions": true
    }
,
    "order": "z-a[train-system]-c[train-stop]",
    "group": "logistics",
    "subgroup": "transport",
    "fluid_capacity": 0
  }
,
  "rail-signal": {
    "name": "rail-signal",
    "type": "rail-signal",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true,
      "building-direction-8-way": true,
      "filter-directions": true,
      "fast-replaceable-no-build-while-moving": true
    }
,
    "order": "z-a[train-system]-d[rail-signal]",
    "group": "logistics",
    "subgroup": "transport",
    "fluid_capacity": 0
  }
,
  "rail-chain-signal": {
    "name": "rail-chain-signal",
    "type": "rail-chain-signal",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true,
      "building-direction-8-way": true,
      "filter-directions": true,
      "fast-replaceable-no-build-while-moving": true
    }
,
    "order": "z-a[train-system]-e[rail-signal-chain]",
    "group": "logistics",
    "subgroup": "transport",
    "fluid_capacity": 0
  }
,
  "locomotive": {
    "name": "locomotive",
    "type": "locomotive",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "player-creation": true,
      "not-on-map": true
    }
,
    "order": "z-a[train-system]-f[diesel-locomotive]",
    "group": "logistics",
    "subgroup": "transport",
    "inventory_size": 3,
    "braking_force": 0.5,
    "burner_prototype": {
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1,
      "fuel_inventory_size": 3,
      "burnt_inventory_size": 0,
      "fuel_category": "chemical"
    }
,
    "fluid_capacity": 0
  }
,
  "cargo-wagon": {
    "name": "cargo-wagon",
    "type": "cargo-wagon",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "player-creation": true,
      "not-on-map": true
    }
,
    "order": "z-a[train-system]-g[cargo-wagon]",
    "group": "logistics",
    "subgroup": "transport",
    "inventory_size": 40,
    "braking_force": 0.5,
    "fluid_capacity": 0
  }
,
  "fluid-wagon": {
    "name": "fluid-wagon",
    "type": "fluid-wagon",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "player-creation": true,
      "not-on-map": true
    }
,
    "order": "z-a[train-system]-h[fluid-wagon]",
    "group": "logistics",
    "subgroup": "transport",
    "braking_force": 0.5,
    "fluid_capacity": 75000
  }
,
  "artillery-wagon": {
    "name": "artillery-wagon",
    "type": "artillery-wagon",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "player-creation": true,
      "not-on-map": true
    }
,
    "order": "z-a[train-system]-i[artillery-wagon]",
    "group": "logistics",
    "subgroup": "transport",
    "inventory_size": 1,
    "braking_force": 0.5,
    "fluid_capacity": 0
  }
,
  "car": {
    "name": "car",
    "type": "car",
    "flags": {
      "pushable": true,
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "player-creation": true
    }
,
    "order": "z-b[personal-transport]-a[car]",
    "group": "logistics",
    "subgroup": "transport",
    "inventory_size": 1,
    "braking_force": 0.002,
    "burner_prototype": {
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 0.6,
      "fuel_inventory_size": 1,
      "burnt_inventory_size": 0,
      "fuel_category": "chemical"
    }
,
    "fluid_capacity": 0
  }
,
  "tank": {
    "name": "tank",
    "type": "car",
    "flags": {
      "pushable": true,
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "player-creation": true
    }
,
    "order": "z-b[personal-transport]-b[tank]",
    "group": "logistics",
    "subgroup": "transport",
    "inventory_size": 2,
    "braking_force": 0.002,
    "burner_prototype": {
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 0.75,
      "fuel_inventory_size": 2,
      "burnt_inventory_size": 0,
      "fuel_category": "chemical"
    }
,
    "fluid_capacity": 0
  }
,
  "logistic-robot": {
    "name": "logistic-robot",
    "type": "logistic-robot",
    "flags": {
      "placeable-player": true,
      "placeable-off-grid": true,
      "player-creation": true,
      "not-on-map": true
    }
,
    "order": "z-a[robot]-a[logistic-robot]",
    "group": "logistics",
    "subgroup": "logistic-network",
    "inventory_size": 1,
    "max_payload_size": 1,
    "max_energy": 1500000,
    "fluid_capacity": 0
  }
,
  "construction-robot": {
    "name": "construction-robot",
    "type": "construction-robot",
    "flags": {
      "placeable-player": true,
      "placeable-off-grid": true,
      "player-creation": true,
      "not-on-map": true
    }
,
    "order": "z-a[robot]-b[construction-robot]",
    "group": "logistics",
    "subgroup": "logistic-network",
    "inventory_size": 1,
    "max_payload_size": 1,
    "max_energy": 1500000,
    "fluid_capacity": 0
  }
,
  "logistic-chest-active-provider": {
    "name": "logistic-chest-active-provider",
    "type": "logistic-container",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-b[storage]-c[logistic-chest-active-provider]",
    "group": "logistics",
    "subgroup": "logistic-network",
    "inventory_size": 48,
    "fluid_capacity": 0
  }
,
  "logistic-chest-passive-provider": {
    "name": "logistic-chest-passive-provider",
    "type": "logistic-container",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-b[storage]-c[logistic-chest-passive-provider]",
    "group": "logistics",
    "subgroup": "logistic-network",
    "inventory_size": 48,
    "fluid_capacity": 0
  }
,
  "logistic-chest-storage": {
    "name": "logistic-chest-storage",
    "type": "logistic-container",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-b[storage]-c[logistic-chest-storage]",
    "group": "logistics",
    "subgroup": "logistic-network",
    "inventory_size": 48,
    "fluid_capacity": 0
  }
,
  "logistic-chest-buffer": {
    "name": "logistic-chest-buffer",
    "type": "logistic-container",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-b[storage]-d[logistic-chest-buffer]",
    "group": "logistics",
    "subgroup": "logistic-network",
    "inventory_size": 48,
    "fluid_capacity": 0
  }
,
  "logistic-chest-requester": {
    "name": "logistic-chest-requester",
    "type": "logistic-container",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-b[storage]-e[logistic-chest-requester]",
    "group": "logistics",
    "subgroup": "logistic-network",
    "inventory_size": 48,
    "fluid_capacity": 0
  }
,
  "roboport": {
    "name": "roboport",
    "type": "roboport",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-c[signal]-a[roboport]",
    "group": "logistics",
    "subgroup": "logistic-network",
    "inventory_size": 7,
    "energy_usage": 833.33333333333,
    "electric_energy_source_prototype": {
      "buffer_capacity": 100000000,
      "usage_priority": "secondary-input",
      "input_flow_limit": 83333.333333333,
      "output_flow_limit": 0,
      "drain": 0,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "small-lamp": {
    "name": "small-lamp",
    "type": "lamp",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[light]-a[small-lamp]",
    "group": "logistics",
    "subgroup": "circuit-network",
    "energy_usage": 83.333333333333,
    "electric_energy_source_prototype": {
      "buffer_capacity": 88.888888888889,
      "usage_priority": "lamp",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 0,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "arithmetic-combinator": {
    "name": "arithmetic-combinator",
    "type": "arithmetic-combinator",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-c[combinators]-a[arithmetic-combinator]",
    "group": "logistics",
    "subgroup": "circuit-network",
    "energy_usage": 16.666666666667,
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 0,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "decider-combinator": {
    "name": "decider-combinator",
    "type": "decider-combinator",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-c[combinators]-b[decider-combinator]",
    "group": "logistics",
    "subgroup": "circuit-network",
    "energy_usage": 16.666666666667,
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 0,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "constant-combinator": {
    "name": "constant-combinator",
    "type": "constant-combinator",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-c[combinators]-c[constant-combinator]",
    "group": "logistics",
    "subgroup": "circuit-network",
    "fluid_capacity": 0
  }
,
  "power-switch": {
    "name": "power-switch",
    "type": "power-switch",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-d[other]-a[power-switch]",
    "group": "logistics",
    "subgroup": "circuit-network",
    "fluid_capacity": 0
  }
,
  "programmable-speaker": {
    "name": "programmable-speaker",
    "type": "programmable-speaker",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-d[other]-b[programmable-speaker]",
    "group": "logistics",
    "subgroup": "circuit-network",
    "energy_usage": 33.333333333333,
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 0,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "boiler": {
    "name": "boiler",
    "type": "boiler",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-b[steam-power]-a[boiler]",
    "group": "production",
    "subgroup": "energy",
    "inventory_size": 1,
    "burner_prototype": {
      "emissions": 1.5384615384615e-05,
      "category": "basic-solid",
      "effectivity": 0.5,
      "fuel_inventory_size": 1,
      "burnt_inventory_size": 0,
      "fuel_category": "chemical"
    }
,
    "target_temperature": 165,
    "fluid_capacity": 200
  }
,
  "steam-engine": {
    "name": "steam-engine",
    "type": "generator",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-b[steam-power]-b[steam-engine]",
    "group": "production",
    "subgroup": "energy",
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-output",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 0,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "maximum_temperature": 165,
    "fluid_usage_per_tick": 0.5,
    "fluid_capacity": 200
  }
,
  "steam-turbine": {
    "name": "steam-turbine",
    "type": "generator",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-b[steam-power]-c[steam-turbine]",
    "group": "production",
    "subgroup": "energy",
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-output",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 0,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "maximum_temperature": 500,
    "fluid_usage_per_tick": 1,
    "fluid_capacity": 200
  }
,
  "solar-panel": {
    "name": "solar-panel",
    "type": "solar-panel",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-d[solar-panel]-a[solar-panel]",
    "group": "production",
    "subgroup": "energy",
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "solar",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 0,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0,
    "production": 1000
  }
,
  "accumulator": {
    "name": "accumulator",
    "type": "accumulator",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-e[accumulator]-a[accumulator]",
    "group": "production",
    "subgroup": "energy",
    "electric_energy_source_prototype": {
      "buffer_capacity": 5000000,
      "usage_priority": "managed-accumulator",
      "input_flow_limit": 5000,
      "output_flow_limit": 5000,
      "drain": 0,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "electric-energy-interface": {
    "name": "electric-energy-interface",
    "type": "electric-energy-interface",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-e[electric-energy-interface]-b[electric-energy-interface]",
    "group": "production",
    "subgroup": "energy",
    "electric_energy_source_prototype": {
      "buffer_capacity": 10000000000,
      "usage_priority": "terciary",
      "input_flow_limit": 0,
      "output_flow_limit": 8333333333.3333,
      "drain": 0,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "nuclear-reactor": {
    "name": "nuclear-reactor",
    "type": "reactor",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-f[nuclear-energy]-a[reactor]",
    "group": "production",
    "subgroup": "energy",
    "inventory_size": 1,
    "burner_prototype": {
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1,
      "fuel_inventory_size": 1,
      "burnt_inventory_size": 1,
      "fuel_category": "nuclear"
    }
,
    "fluid_capacity": 0
  }
,
  "heat-exchanger": {
    "name": "heat-exchanger",
    "type": "boiler",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-f[nuclear-energy]-b[heat-exchanger]",
    "group": "production",
    "subgroup": "energy",
    "target_temperature": 500,
    "fluid_capacity": 200
  }
,
  "heat-pipe": {
    "name": "heat-pipe",
    "type": "heat-pipe",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-f[nuclear-energy]-c[heat-pipe]",
    "group": "production",
    "subgroup": "energy",
    "fluid_capacity": 0
  }
,
  "burner-mining-drill": {
    "name": "burner-mining-drill",
    "type": "mining-drill",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[items]-a[burner-mining-drill]",
    "group": "production",
    "subgroup": "extraction-machine",
    "resource_categories": {
      "basic-solid": true
    }
,
    "inventory_size": 1,
    "mining_speed": 0.35,
    "mining_power": 2.5,
    "energy_usage": 5000,
    "burner_prototype": {
      "emissions": 3.3333333333333e-05,
      "category": "basic-solid",
      "effectivity": 1,
      "fuel_inventory_size": 1,
      "burnt_inventory_size": 0,
      "fuel_category": "chemical"
    }
,
    "fluid_capacity": 0
  }
,
  "electric-mining-drill": {
    "name": "electric-mining-drill",
    "type": "mining-drill",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[items]-b[electric-mining-drill]",
    "group": "production",
    "subgroup": "extraction-machine",
    "resource_categories": {
      "basic-solid": true
    }
,
    "mining_speed": 0.5,
    "mining_power": 3,
    "energy_usage": 1500,
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 0,
      "emissions": 1e-04,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "offshore-pump": {
    "name": "offshore-pump",
    "type": "offshore-pump",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true,
      "filter-directions": true
    }
,
    "order": "z-b[fluids]-a[offshore-pump]",
    "group": "production",
    "subgroup": "extraction-machine",
    "fluid_capacity": 100,
    "pumping_speed": 20
  }
,
  "pumpjack": {
    "name": "pumpjack",
    "type": "mining-drill",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-b[fluids]-b[pumpjack]",
    "group": "production",
    "subgroup": "extraction-machine",
    "resource_categories": {
      "basic-fluid": true
    }
,
    "mining_speed": 1,
    "mining_power": 2,
    "energy_usage": 1500,
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 0,
      "emissions": 1e-04,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "stone-furnace": {
    "name": "stone-furnace",
    "type": "furnace",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-a[stone-furnace]",
    "group": "production",
    "subgroup": "smelting-machine",
    "crafting_speed": 1,
    "crafting_categories": {
      "smelting": true
    }
,
    "inventory_size": 1,
    "energy_usage": 3000,
    "burner_prototype": {
      "emissions": 1e-05,
      "category": "basic-solid",
      "effectivity": 1,
      "fuel_inventory_size": 1,
      "burnt_inventory_size": 0,
      "fuel_category": "chemical"
    }
,
    "fluid_capacity": 0
  }
,
  "steel-furnace": {
    "name": "steel-furnace",
    "type": "furnace",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-b[steel-furnace]",
    "group": "production",
    "subgroup": "smelting-machine",
    "crafting_speed": 2,
    "crafting_categories": {
      "smelting": true
    }
,
    "inventory_size": 1,
    "energy_usage": 3000,
    "burner_prototype": {
      "emissions": 2e-05,
      "category": "basic-solid",
      "effectivity": 1,
      "fuel_inventory_size": 1,
      "burnt_inventory_size": 0,
      "fuel_category": "chemical"
    }
,
    "fluid_capacity": 0
  }
,
  "electric-furnace": {
    "name": "electric-furnace",
    "type": "furnace",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-c[electric-furnace]",
    "group": "production",
    "subgroup": "smelting-machine",
    "crafting_speed": 2,
    "crafting_categories": {
      "smelting": true
    }
,
    "energy_usage": 3000,
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 100,
      "emissions": 5e-06,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "assembling-machine-1": {
    "name": "assembling-machine-1",
    "type": "assembling-machine",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-a[assembling-machine-1]",
    "group": "production",
    "subgroup": "production-machine",
    "crafting_speed": 0.5,
    "crafting_categories": {
      "crafting": true
    }
,
    "energy_usage": 1500,
    "electric_energy_source_prototype": {
      "buffer_capacity": 1600,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 50,
      "emissions": 3.3333333333333e-05,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "assembling-machine-2": {
    "name": "assembling-machine-2",
    "type": "assembling-machine",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-b[assembling-machine-2]",
    "group": "production",
    "subgroup": "production-machine",
    "crafting_speed": 0.75,
    "crafting_categories": {
      "crafting": true,
      "advanced-crafting": true,
      "crafting-with-fluid": true
    }
,
    "energy_usage": 2500,
    "electric_energy_source_prototype": {
      "buffer_capacity": 2666.6666666667,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 83.333333333333,
      "emissions": 1.6e-05,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "assembling-machine-3": {
    "name": "assembling-machine-3",
    "type": "assembling-machine",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-c[assembling-machine-3]",
    "group": "production",
    "subgroup": "production-machine",
    "crafting_speed": 1.25,
    "crafting_categories": {
      "crafting": true,
      "advanced-crafting": true,
      "crafting-with-fluid": true
    }
,
    "energy_usage": 3500,
    "electric_energy_source_prototype": {
      "buffer_capacity": 3733.3333333333,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 116.66666666667,
      "emissions": 8.5714285714286e-06,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "oil-refinery": {
    "name": "oil-refinery",
    "type": "assembling-machine",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-d[refinery]",
    "group": "production",
    "subgroup": "production-machine",
    "crafting_speed": 1,
    "crafting_categories": {
      "oil-processing": true
    }
,
    "energy_usage": 7000,
    "electric_energy_source_prototype": {
      "buffer_capacity": 7466.6666666667,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 233.33333333333,
      "emissions": 8.5714285714286e-06,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "chemical-plant": {
    "name": "chemical-plant",
    "type": "assembling-machine",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-e[chemical-plant]",
    "group": "production",
    "subgroup": "production-machine",
    "crafting_speed": 1.25,
    "crafting_categories": {
      "chemistry": true
    }
,
    "energy_usage": 3500,
    "electric_energy_source_prototype": {
      "buffer_capacity": 3733.3333333333,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 116.66666666667,
      "emissions": 8.5714285714286e-06,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "centrifuge": {
    "name": "centrifuge",
    "type": "assembling-machine",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-g[centrifuge]",
    "group": "production",
    "subgroup": "production-machine",
    "crafting_speed": 0.75,
    "crafting_categories": {
      "centrifuging": true
    }
,
    "energy_usage": 5833.3333333333,
    "electric_energy_source_prototype": {
      "buffer_capacity": 6222.2222222222,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 194.44444444444,
      "emissions": 1.6e-05,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "lab": {
    "name": "lab",
    "type": "lab",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-g[lab]",
    "group": "production",
    "subgroup": "production-machine",
    "energy_usage": 1000,
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 0,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "beacon": {
    "name": "beacon",
    "type": "beacon",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-a[beacon]",
    "group": "production",
    "subgroup": "module",
    "inventory_size": 2,
    "energy_usage": 8000,
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 8000,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "land-mine": {
    "name": "land-mine",
    "type": "land-mine",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "placeable-off-grid": true,
      "player-creation": true,
      "not-on-map": true
    }
,
    "order": "z-f[land-mine]",
    "group": "combat",
    "subgroup": "gun",
    "fluid_capacity": 0
  }
,
  "stone-wall": {
    "name": "stone-wall",
    "type": "wall",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-a[stone-wall]-a[stone-wall]",
    "group": "combat",
    "subgroup": "defensive-structure",
    "fluid_capacity": 0
  }
,
  "gate": {
    "name": "gate",
    "type": "gate",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-a[wall]-b[gate]",
    "group": "combat",
    "subgroup": "defensive-structure",
    "fluid_capacity": 0
  }
,
  "gun-turret": {
    "name": "gun-turret",
    "type": "ammo-turret",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-b[turret]-a[gun-turret]",
    "group": "combat",
    "subgroup": "defensive-structure",
    "inventory_size": 1,
    "fluid_capacity": 0
  }
,
  "laser-turret": {
    "name": "laser-turret",
    "type": "electric-turret",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "player-creation": true
    }
,
    "order": "z-b[turret]-b[laser-turret]",
    "group": "combat",
    "subgroup": "defensive-structure",
    "electric_energy_source_prototype": {
      "buffer_capacity": 801000,
      "usage_priority": "primary-input",
      "input_flow_limit": 160000,
      "output_flow_limit": 0,
      "drain": 400,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "flamethrower-turret": {
    "name": "flamethrower-turret",
    "type": "fluid-turret",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-b[turret]-c[flamethrower-turret]",
    "group": "combat",
    "subgroup": "defensive-structure",
    "fluid_capacity": 0
  }
,
  "artillery-turret": {
    "name": "artillery-turret",
    "type": "artillery-turret",
    "flags": {
      "placeable-neutral": true,
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-b[turret]-d[artillery-turret]",
    "group": "combat",
    "subgroup": "defensive-structure",
    "inventory_size": 1,
    "fluid_capacity": 0
  }
,
  "radar": {
    "name": "radar",
    "type": "radar",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-d[radar]-a[radar]",
    "group": "combat",
    "subgroup": "defensive-structure",
    "energy_usage": 5000,
    "electric_energy_source_prototype": {
      "buffer_capacity": 0,
      "usage_priority": "secondary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 0,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "rocket-silo": {
    "name": "rocket-silo",
    "type": "rocket-silo",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "z-e[rocket-silo]",
    "group": "combat",
    "subgroup": "defensive-structure",
    "crafting_speed": 1,
    "crafting_categories": {
      "rocket-building": true
    }
,
    "energy_usage": 4166.6666666667,
    "electric_energy_source_prototype": {
      "buffer_capacity": 4444.4444444444,
      "usage_priority": "primary-input",
      "input_flow_limit": 0,
      "output_flow_limit": 0,
      "drain": 138.88888888889,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "player-port": {
    "name": "player-port",
    "type": "player-port",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "z-z[not-used]",
    "group": "combat",
    "subgroup": "defensive-structure",
    "fluid_capacity": 0
  }
,
  "infinity-chest": {
    "name": "infinity-chest",
    "type": "infinity-container",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "infinity-chest",
    "group": "other",
    "subgroup": "other",
    "inventory_size": 48,
    "fluid_capacity": 0
  }
,
  "simple-entity-with-force": {
    "name": "simple-entity-with-force",
    "type": "simple-entity-with-force",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "s-e-w-f",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "simple-entity-with-owner": {
    "name": "simple-entity-with-owner",
    "type": "simple-entity-with-owner",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "s-e-w-o",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "cliff": {
    "name": "cliff",
    "type": "cliff",
    "flags": {
      "placeable-neutral": true
    }
,
    "order": "b[decorative]-l[rock]-b[big]",
    "group": "environment",
    "subgroup": "cliffs",
    "fluid_capacity": 0
  }
,
  "small-cliff": {
    "name": "small-cliff",
    "type": "cliff",
    "flags": {
      "placeable-neutral": true
    }
,
    "order": "b[decorative]-l[rock]-b[big]",
    "group": "environment",
    "subgroup": "cliffs",
    "fluid_capacity": 0
  }
,
  "player": {
    "name": "player",
    "type": "player",
    "flags": {
      "pushable": true,
      "placeable-off-grid": true,
      "breaths-air": true,
      "not-repairable": true,
      "not-on-map": true
    }
,
    "order": "a",
    "group": "environment",
    "subgroup": "creatures",
    "crafting_categories": {
      "crafting": true
    }
,
    "inventory_size": 60,
    "mining_speed": 0.01,
    "fluid_capacity": 0
  }
,
  "fish": {
    "name": "fish",
    "type": "fish",
    "flags": {
      "placeable-neutral": true,
      "not-on-map": true
    }
,
    "order": "b-a",
    "group": "environment",
    "subgroup": "creatures",
    "fluid_capacity": 0
  }
,
  "tree-01": {
    "name": "tree-01",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-a[tree-01]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-02": {
    "name": "tree-02",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-b[tree-02]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-03": {
    "name": "tree-03",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-c[tree-03]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-04": {
    "name": "tree-04",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-d[tree-04]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-05": {
    "name": "tree-05",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-e[tree-05]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-09": {
    "name": "tree-09",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-f[tree-09]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-02-red": {
    "name": "tree-02-red",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-g[tree-02-red]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-07": {
    "name": "tree-07",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-h[tree-07]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-06": {
    "name": "tree-06",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-i[tree-06]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-06-brown": {
    "name": "tree-06-brown",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-j[tree-06-brown]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-09-brown": {
    "name": "tree-09-brown",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-k[tree-09-brown]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-09-red": {
    "name": "tree-09-red",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-l[tree-09-red]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-08": {
    "name": "tree-08",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-m[tree-08]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-08-brown": {
    "name": "tree-08-brown",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-n[tree-08-brown]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "tree-08-red": {
    "name": "tree-08-red",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-a[regular]-o[tree-08-red]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "dead-dry-hairy-tree": {
    "name": "dead-dry-hairy-tree",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-b[dead-tree]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "dead-grey-trunk": {
    "name": "dead-grey-trunk",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-b[dead-tree]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "dead-tree-desert": {
    "name": "dead-tree-desert",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-b[dead-tree]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "dry-hairy-tree": {
    "name": "dry-hairy-tree",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-b[dead-tree]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "dry-tree": {
    "name": "dry-tree",
    "type": "tree",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "breaths-air": true
    }
,
    "order": "a[tree]-c[dry-tree]",
    "group": "environment",
    "subgroup": "trees",
    "fluid_capacity": 0
  }
,
  "rock-huge": {
    "name": "rock-huge",
    "type": "simple-entity",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "b[decorative]-l[rock]-a[huge]",
    "group": "environment",
    "subgroup": "grass",
    "fluid_capacity": 0
  }
,
  "rock-big": {
    "name": "rock-big",
    "type": "simple-entity",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "b[decorative]-l[rock]-b[big]",
    "group": "environment",
    "subgroup": "grass",
    "fluid_capacity": 0
  }
,
  "small-biter-corpse": {
    "name": "small-biter-corpse",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "building-direction-8-way": true,
      "not-repairable": true,
      "not-on-map": true
    }
,
    "order": "c[corpse]-a[biter]-a[small]",
    "group": "environment",
    "subgroup": "corpses",
    "fluid_capacity": 0
  }
,
  "medium-biter-corpse": {
    "name": "medium-biter-corpse",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "building-direction-8-way": true,
      "not-on-map": true
    }
,
    "order": "c[corpse]-a[biter]-b[medium]",
    "group": "environment",
    "subgroup": "corpses",
    "fluid_capacity": 0
  }
,
  "behemoth-biter-corpse": {
    "name": "behemoth-biter-corpse",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "building-direction-8-way": true,
      "not-on-map": true
    }
,
    "order": "c[corpse]-a[biter]-c[big]",
    "group": "environment",
    "subgroup": "corpses",
    "fluid_capacity": 0
  }
,
  "big-biter-corpse": {
    "name": "big-biter-corpse",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "building-direction-8-way": true,
      "not-on-map": true
    }
,
    "order": "c[corpse]-a[biter]-c[big]",
    "group": "environment",
    "subgroup": "corpses",
    "fluid_capacity": 0
  }
,
  "biter-spawner-corpse": {
    "name": "biter-spawner-corpse",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "c[corpse]-b[biter-spawner]",
    "group": "environment",
    "subgroup": "corpses",
    "fluid_capacity": 0
  }
,
  "small-spitter-corpse": {
    "name": "small-spitter-corpse",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "building-direction-8-way": true,
      "not-on-map": true
    }
,
    "order": "c[corpse]-b[spitter]-a[small]",
    "group": "environment",
    "subgroup": "corpses",
    "fluid_capacity": 0
  }
,
  "medium-spitter-corpse": {
    "name": "medium-spitter-corpse",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "building-direction-8-way": true,
      "not-on-map": true
    }
,
    "order": "c[corpse]-b[spitter]-b[medium]",
    "group": "environment",
    "subgroup": "corpses",
    "fluid_capacity": 0
  }
,
  "big-spitter-corpse": {
    "name": "big-spitter-corpse",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "building-direction-8-way": true,
      "not-on-map": true
    }
,
    "order": "c[corpse]-b[spitter]-c[big]",
    "group": "environment",
    "subgroup": "corpses",
    "fluid_capacity": 0
  }
,
  "behemoth-spitter-corpse": {
    "name": "behemoth-spitter-corpse",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "building-direction-8-way": true,
      "not-on-map": true
    }
,
    "order": "c[corpse]-b[spitter]-d[behemoth]",
    "group": "environment",
    "subgroup": "corpses",
    "fluid_capacity": 0
  }
,
  "spitter-spawner-corpse": {
    "name": "spitter-spawner-corpse",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "c[corpse]-c[spitter-spawner]",
    "group": "environment",
    "subgroup": "corpses",
    "fluid_capacity": 0
  }
,
  "small-worm-corpse": {
    "name": "small-worm-corpse",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "building-direction-8-way": true,
      "not-repairable": true,
      "not-on-map": true
    }
,
    "order": "c[corpse]-c[worm]-a[small]",
    "group": "environment",
    "subgroup": "corpses",
    "fluid_capacity": 0
  }
,
  "medium-worm-corpse": {
    "name": "medium-worm-corpse",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "building-direction-8-way": true,
      "not-repairable": true,
      "not-on-map": true
    }
,
    "order": "c[corpse]-c[worm]-b[medium]",
    "group": "environment",
    "subgroup": "corpses",
    "fluid_capacity": 0
  }
,
  "big-worm-corpse": {
    "name": "big-worm-corpse",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "building-direction-8-way": true,
      "not-repairable": true,
      "not-on-map": true
    }
,
    "order": "c[corpse]-c[worm]-c[big]",
    "group": "environment",
    "subgroup": "corpses",
    "fluid_capacity": 0
  }
,
  "small-remnants": {
    "name": "small-remnants",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-a[generic]-a[small]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "medium-remnants": {
    "name": "medium-remnants",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "building-direction-8-way": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-a[generic]-b[medium]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "big-remnants": {
    "name": "big-remnants",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-a[generic]-c[big]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "straight-rail-remnants": {
    "name": "straight-rail-remnants",
    "type": "rail-remnants",
    "flags": {
      "placeable-neutral": true,
      "building-direction-8-way": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-b[rail]-a[straight]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "curved-rail-remnants": {
    "name": "curved-rail-remnants",
    "type": "rail-remnants",
    "flags": {
      "placeable-neutral": true,
      "building-direction-8-way": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-b[rail]-b[curved]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "small-scorchmark": {
    "name": "small-scorchmark",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-b[scorchmark]-a[small]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "tree-01-stump": {
    "name": "tree-01-stump",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-b[tree]-a[tree-01]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "tree-02-stump": {
    "name": "tree-02-stump",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-b[tree]-b[tree-02]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "tree-03-stump": {
    "name": "tree-03-stump",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-b[tree]-c[tree-03]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "tree-04-stump": {
    "name": "tree-04-stump",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-b[tree]-d[tree-04]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "tree-05-stump": {
    "name": "tree-05-stump",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-b[tree]-e[tree-05]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "tree-06-stump": {
    "name": "tree-06-stump",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-b[tree]-f[tree-06]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "tree-07-stump": {
    "name": "tree-07-stump",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-b[tree]-g[tree-07]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "tree-08-stump": {
    "name": "tree-08-stump",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-b[tree]-h[tree-08]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "tree-09-stump": {
    "name": "tree-09-stump",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-b[tree]-i[tree-09]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "wall-remnants": {
    "name": "wall-remnants",
    "type": "corpse",
    "flags": {
      "placeable-neutral": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-c[wall]",
    "group": "environment",
    "subgroup": "remnants",
    "fluid_capacity": 0
  }
,
  "sand-rock-big": {
    "name": "sand-rock-big",
    "type": "simple-entity",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "b[decorative]-l[rock]-b[big]",
    "group": "environment",
    "subgroup": "wrecks",
    "fluid_capacity": 0
  }
,
  "big-ship-wreck-1": {
    "name": "big-ship-wreck-1",
    "type": "container",
    "flags": {
      "placeable-neutral": true
    }
,
    "order": "d[remnants]-d[ship-wreck]-a[big]-a",
    "group": "environment",
    "subgroup": "wrecks",
    "inventory_size": 3,
    "fluid_capacity": 0
  }
,
  "big-ship-wreck-2": {
    "name": "big-ship-wreck-2",
    "type": "container",
    "flags": {
      "placeable-neutral": true
    }
,
    "order": "d[remnants]-d[ship-wreck]-a[big]-b",
    "group": "environment",
    "subgroup": "wrecks",
    "inventory_size": 3,
    "fluid_capacity": 0
  }
,
  "big-ship-wreck-3": {
    "name": "big-ship-wreck-3",
    "type": "container",
    "flags": {
      "placeable-neutral": true
    }
,
    "order": "d[remnants]-d[ship-wreck]-a[big]-c",
    "group": "environment",
    "subgroup": "wrecks",
    "inventory_size": 3,
    "fluid_capacity": 0
  }
,
  "medium-ship-wreck": {
    "name": "medium-ship-wreck",
    "type": "simple-entity",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-d[ship-wreck]-b[medium]-a",
    "group": "environment",
    "subgroup": "wrecks",
    "fluid_capacity": 0
  }
,
  "small-ship-wreck": {
    "name": "small-ship-wreck",
    "type": "simple-entity",
    "flags": {
      "placeable-neutral": true,
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "d[remnants]-d[ship-wreck]-c[small]-a",
    "group": "environment",
    "subgroup": "wrecks",
    "fluid_capacity": 0
  }
,
  "small-biter": {
    "name": "small-biter",
    "type": "unit",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "placeable-off-grid": true,
      "breaths-air": true,
      "not-repairable": true
    }
,
    "order": "b-b-a",
    "group": "enemies",
    "subgroup": "enemies",
    "fluid_capacity": 0
  }
,
  "medium-biter": {
    "name": "medium-biter",
    "type": "unit",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "placeable-off-grid": true,
      "breaths-air": true,
      "not-repairable": true
    }
,
    "order": "b-b-b",
    "group": "enemies",
    "subgroup": "enemies",
    "fluid_capacity": 0
  }
,
  "big-biter": {
    "name": "big-biter",
    "type": "unit",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "placeable-off-grid": true,
      "breaths-air": true,
      "not-repairable": true
    }
,
    "order": "b-b-c",
    "group": "enemies",
    "subgroup": "enemies",
    "fluid_capacity": 0
  }
,
  "behemoth-biter": {
    "name": "behemoth-biter",
    "type": "unit",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "placeable-off-grid": true,
      "breaths-air": true,
      "not-repairable": true
    }
,
    "order": "b-b-d",
    "group": "enemies",
    "subgroup": "enemies",
    "fluid_capacity": 0
  }
,
  "small-spitter": {
    "name": "small-spitter",
    "type": "unit",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "placeable-off-grid": true,
      "breaths-air": true,
      "not-repairable": true
    }
,
    "order": "b-b-d",
    "group": "enemies",
    "subgroup": "enemies",
    "fluid_capacity": 0
  }
,
  "small-worm-turret": {
    "name": "small-worm-turret",
    "type": "turret",
    "flags": {
      "placeable-enemy": true,
      "breaths-air": true,
      "not-repairable": true
    }
,
    "order": "b-b-d",
    "group": "enemies",
    "subgroup": "enemies",
    "fluid_capacity": 0
  }
,
  "medium-spitter": {
    "name": "medium-spitter",
    "type": "unit",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "placeable-off-grid": true,
      "breaths-air": true,
      "not-repairable": true
    }
,
    "order": "b-b-e",
    "group": "enemies",
    "subgroup": "enemies",
    "fluid_capacity": 0
  }
,
  "medium-worm-turret": {
    "name": "medium-worm-turret",
    "type": "turret",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "breaths-air": true,
      "not-repairable": true
    }
,
    "order": "b-b-e",
    "group": "enemies",
    "subgroup": "enemies",
    "fluid_capacity": 0
  }
,
  "behemoth-spitter": {
    "name": "behemoth-spitter",
    "type": "unit",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "placeable-off-grid": true,
      "breaths-air": true,
      "not-repairable": true
    }
,
    "order": "b-b-f",
    "group": "enemies",
    "subgroup": "enemies",
    "fluid_capacity": 0
  }
,
  "big-spitter": {
    "name": "big-spitter",
    "type": "unit",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "placeable-off-grid": true,
      "breaths-air": true,
      "not-repairable": true
    }
,
    "order": "b-b-f",
    "group": "enemies",
    "subgroup": "enemies",
    "fluid_capacity": 0
  }
,
  "big-worm-turret": {
    "name": "big-worm-turret",
    "type": "turret",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "breaths-air": true,
      "not-repairable": true
    }
,
    "order": "b-b-f",
    "group": "enemies",
    "subgroup": "enemies",
    "fluid_capacity": 0
  }
,
  "biter-spawner": {
    "name": "biter-spawner",
    "type": "unit-spawner",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "not-repairable": true
    }
,
    "order": "b-b-g",
    "group": "enemies",
    "subgroup": "enemies",
    "fluid_capacity": 0
  }
,
  "spitter-spawner": {
    "name": "spitter-spawner",
    "type": "unit-spawner",
    "flags": {
      "placeable-player": true,
      "placeable-enemy": true,
      "not-repairable": true
    }
,
    "order": "b-b-h",
    "group": "enemies",
    "subgroup": "enemies",
    "fluid_capacity": 0
  }
,
  "market": {
    "name": "market",
    "type": "market",
    "flags": {
      "placeable-neutral": true,
      "player-creation": true
    }
,
    "order": "d-a-a",
    "group": "production",
    "subgroup": "production-machine",
    "fluid_capacity": 0
  }
,
  "defender": {
    "name": "defender",
    "type": "combat-robot",
    "flags": {
      "placeable-player": true,
      "placeable-off-grid": true,
      "player-creation": true,
      "not-repairable": true,
      "not-on-map": true
    }
,
    "order": "e-a-a",
    "group": "combat",
    "subgroup": "capsule",
    "max_energy": 0,
    "fluid_capacity": 0
  }
,
  "distractor": {
    "name": "distractor",
    "type": "combat-robot",
    "flags": {
      "placeable-player": true,
      "placeable-off-grid": true,
      "player-creation": true,
      "not-repairable": true,
      "not-on-map": true
    }
,
    "order": "e-a-b",
    "group": "combat",
    "subgroup": "capsule",
    "max_energy": 0,
    "fluid_capacity": 0
  }
,
  "destroyer": {
    "name": "destroyer",
    "type": "combat-robot",
    "flags": {
      "placeable-player": true,
      "placeable-off-grid": true,
      "player-creation": true,
      "not-repairable": true,
      "not-on-map": true
    }
,
    "order": "e-a-c",
    "group": "combat",
    "subgroup": "capsule",
    "max_energy": 0,
    "fluid_capacity": 0
  }
,
  "acid-projectile-purple": {
    "name": "acid-projectile-purple",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "acid-splash-purple": {
    "name": "acid-splash-purple",
    "type": "corpse",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "artillery-cannon-muzzle-flash": {
    "name": "artillery-cannon-muzzle-flash",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "artillery-flare": {
    "name": "artillery-flare",
    "type": "artillery-flare",
    "flags": {
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "artillery-projectile": {
    "name": "artillery-projectile",
    "type": "artillery-projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "atomic-bomb-wave": {
    "name": "atomic-bomb-wave",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "atomic-rocket": {
    "name": "atomic-rocket",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "big-artillery-explosion": {
    "name": "big-artillery-explosion",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "big-explosion": {
    "name": "big-explosion",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "big-ship-wreck-grass": {
    "name": "big-ship-wreck-grass",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "blood-explosion-big": {
    "name": "blood-explosion-big",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "blood-explosion-huge": {
    "name": "blood-explosion-huge",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "blood-explosion-small": {
    "name": "blood-explosion-small",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "blood-fountain": {
    "name": "blood-fountain",
    "type": "particle-source",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "blood-fountain-big": {
    "name": "blood-fountain-big",
    "type": "particle-source",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "blood-particle": {
    "name": "blood-particle",
    "type": "particle",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "blue-laser": {
    "name": "blue-laser",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "branch-particle": {
    "name": "branch-particle",
    "type": "particle",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "brown-asterisk": {
    "name": "brown-asterisk",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "brown-cane-cluster": {
    "name": "brown-cane-cluster",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "brown-cane-single": {
    "name": "brown-cane-single",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "brown-carpet-grass": {
    "name": "brown-carpet-grass",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "brown-coral-mini": {
    "name": "brown-coral-mini",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "brown-fluff": {
    "name": "brown-fluff",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "brown-fluff-dry": {
    "name": "brown-fluff-dry",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "brown-hairy-grass": {
    "name": "brown-hairy-grass",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "cannon-projectile": {
    "name": "cannon-projectile",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "character-corpse": {
    "name": "character-corpse",
    "type": "character-corpse",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "cliff-explosives": {
    "name": "cliff-explosives",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "cluster-grenade": {
    "name": "cluster-grenade",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "coal-particle": {
    "name": "coal-particle",
    "type": "particle",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "copper-ore-particle": {
    "name": "copper-ore-particle",
    "type": "particle",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "deconstructible-tile-proxy": {
    "name": "deconstructible-tile-proxy",
    "type": "deconstructible-tile-proxy",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "defender-capsule": {
    "name": "defender-capsule",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "destroyer-capsule": {
    "name": "destroyer-capsule",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "distractor-capsule": {
    "name": "distractor-capsule",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "dummy-flame-thrower-explosion": {
    "name": "dummy-flame-thrower-explosion",
    "type": "flame-thrower-explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "electric-beam": {
    "name": "electric-beam",
    "type": "beam",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "electric-beam-no-sound": {
    "name": "electric-beam-no-sound",
    "type": "beam",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "entity-ghost": {
    "name": "entity-ghost",
    "type": "entity-ghost",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "explosion": {
    "name": "explosion",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "explosion-gunshot": {
    "name": "explosion-gunshot",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "explosion-gunshot-small": {
    "name": "explosion-gunshot-small",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "explosion-hit": {
    "name": "explosion-hit",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "explosion-remnants-particle": {
    "name": "explosion-remnants-particle",
    "type": "particle",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "explosive-cannon-projectile": {
    "name": "explosive-cannon-projectile",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "explosive-rocket": {
    "name": "explosive-rocket",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "explosive-uranium-cannon-projectile": {
    "name": "explosive-uranium-cannon-projectile",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "fake-selection-box-2x2": {
    "name": "fake-selection-box-2x2",
    "type": "arrow",
    "flags": {
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "fire-flame": {
    "name": "fire-flame",
    "type": "fire",
    "flags": {
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "fire-flame-on-tree": {
    "name": "fire-flame-on-tree",
    "type": "fire",
    "flags": {
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "fire-sticker": {
    "name": "fire-sticker",
    "type": "sticker",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "flamethrower-fire-stream": {
    "name": "flamethrower-fire-stream",
    "type": "stream",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "flying-text": {
    "name": "flying-text",
    "type": "flying-text",
    "flags": {
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "garballo": {
    "name": "garballo",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "garballo-mini-dry": {
    "name": "garballo-mini-dry",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "green-asterisk": {
    "name": "green-asterisk",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "green-bush-mini": {
    "name": "green-bush-mini",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "green-carpet-grass": {
    "name": "green-carpet-grass",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "green-coral-mini": {
    "name": "green-coral-mini",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "green-hairy-grass": {
    "name": "green-hairy-grass",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "green-pita": {
    "name": "green-pita",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "green-pita-mini": {
    "name": "green-pita-mini",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "green-small-grass": {
    "name": "green-small-grass",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "grenade": {
    "name": "grenade",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "ground-explosion": {
    "name": "ground-explosion",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "handheld-flamethrower-fire-stream": {
    "name": "handheld-flamethrower-fire-stream",
    "type": "stream",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "iron-ore-particle": {
    "name": "iron-ore-particle",
    "type": "particle",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "item-on-ground": {
    "name": "item-on-ground",
    "type": "item-entity",
    "flags": {
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "item-request-proxy": {
    "name": "item-request-proxy",
    "type": "item-request-proxy",
    "flags": {
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "laser": {
    "name": "laser",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "laser-bubble": {
    "name": "laser-bubble",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "leaf-particle": {
    "name": "leaf-particle",
    "type": "leaf-particle",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "massive-explosion": {
    "name": "massive-explosion",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "medium-explosion": {
    "name": "medium-explosion",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "orange-arrow-with-circle": {
    "name": "orange-arrow-with-circle",
    "type": "arrow",
    "flags": {
      "placeable-off-grid": true,
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "orange-coral-mini": {
    "name": "orange-coral-mini",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "piercing-shotgun-pellet": {
    "name": "piercing-shotgun-pellet",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "poison-capsule": {
    "name": "poison-capsule",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "poison-cloud": {
    "name": "poison-cloud",
    "type": "smoke-with-trigger",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "railgun-beam": {
    "name": "railgun-beam",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "red-asterisk": {
    "name": "red-asterisk",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "rocket": {
    "name": "rocket",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "rocket-silo-rocket": {
    "name": "rocket-silo-rocket",
    "type": "rocket-silo-rocket",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "inventory_size": 1,
    "fluid_capacity": 0
  }
,
  "rocket-silo-rocket-shadow": {
    "name": "rocket-silo-rocket-shadow",
    "type": "rocket-silo-rocket-shadow",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "root-A": {
    "name": "root-A",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "root-B": {
    "name": "root-B",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "shell-particle": {
    "name": "shell-particle",
    "type": "particle",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "shotgun-pellet": {
    "name": "shotgun-pellet",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "slowdown-capsule": {
    "name": "slowdown-capsule",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "slowdown-sticker": {
    "name": "slowdown-sticker",
    "type": "sticker",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "small-ship-wreck-grass": {
    "name": "small-ship-wreck-grass",
    "type": "decorative",
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "smoke-for-migration": {
    "name": "smoke-for-migration",
    "type": "smoke",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "stone-particle": {
    "name": "stone-particle",
    "type": "particle",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "stun-sticker": {
    "name": "stun-sticker",
    "type": "sticker",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "tank-flamethrower-fire-stream": {
    "name": "tank-flamethrower-fire-stream",
    "type": "stream",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "tile-ghost": {
    "name": "tile-ghost",
    "type": "tile-ghost",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "tutorial-flying-text": {
    "name": "tutorial-flying-text",
    "type": "flying-text",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "uranium-cannon-explosion": {
    "name": "uranium-cannon-explosion",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "uranium-cannon-projectile": {
    "name": "uranium-cannon-projectile",
    "type": "projectile",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "uranium-cannon-shell-explosion": {
    "name": "uranium-cannon-shell-explosion",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "water-splash": {
    "name": "water-splash",
    "type": "explosion",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "wooden-particle": {
    "name": "wooden-particle",
    "type": "particle",
    "flags": {
      "not-on-map": true
    }
,
    "order": "",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "crude-oil": {
    "name": "crude-oil",
    "type": "resource",
    "flags": {
      "placeable-neutral": true
    }
,
    "order": "a-b-a",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "iron-ore": {
    "name": "iron-ore",
    "type": "resource",
    "flags": {
      "placeable-neutral": true
    }
,
    "order": "a-b-d",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "copper-ore": {
    "name": "copper-ore",
    "type": "resource",
    "flags": {
      "placeable-neutral": true
    }
,
    "order": "a-b-e",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "uranium-ore": {
    "name": "uranium-ore",
    "type": "resource",
    "flags": {
      "placeable-neutral": true
    }
,
    "order": "a-b-e",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "coal": {
    "name": "coal",
    "type": "resource",
    "flags": {
      "placeable-neutral": true
    }
,
    "order": "a-b-f",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "stone": {
    "name": "stone",
    "type": "resource",
    "flags": {
      "placeable-neutral": true
    }
,
    "order": "a-b-g",
    "group": "other",
    "subgroup": "other",
    "fluid_capacity": 0
  }
,
  "blue-chest": {
    "name": "blue-chest",
    "type": "container",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "b-l-u-e",
    "group": "other",
    "subgroup": "other",
    "inventory_size": 48,
    "fluid_capacity": 0
  }
,
  "hidden-electric-energy-interface": {
    "name": "hidden-electric-energy-interface",
    "type": "electric-energy-interface",
    "order": "h-e-e-i",
    "group": "other",
    "subgroup": "other",
    "electric_energy_source_prototype": {
      "buffer_capacity": 10000000000,
      "usage_priority": "terciary",
      "input_flow_limit": 0,
      "output_flow_limit": 8333333333.3333,
      "drain": 0,
      "emissions": 0,
      "category": "basic-solid",
      "effectivity": 1
    }
,
    "fluid_capacity": 0
  }
,
  "red-chest": {
    "name": "red-chest",
    "type": "container",
    "flags": {
      "placeable-player": true,
      "player-creation": true
    }
,
    "order": "r-e-d",
    "group": "other",
    "subgroup": "other",
    "inventory_size": 48,
    "fluid_capacity": 0
  }

}
;