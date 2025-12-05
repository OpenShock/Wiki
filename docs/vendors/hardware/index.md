---
tags:
  - hardware
  - vendor
  - second-party-vendor
---

# Hardware vendors

This is a **non-curated list** of self-reported vendors from the OpenShock **community**.

::: warning Disclaimer
The OpenShock team does not provide **any** guarantees about the quality of products or services rendered.
:::

## Explanation

| Term                  | Meaning                                                                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| :earth_americas: From | Where it's being sent from.                                                                                                                        |
| :airplane: Ships to   | The region(s) that a vendor ships to.                                                                                                              |
| :electric_plug: Hubs  | Whether they sell pre-assembled Hubs ([ESP32 board](../../hardware/boards/index.md) + [433 MHz transmitter](../../hardware/transmitter/index.md)). |
| ⚡ Shockers            | Whether they sell [shockers](../../hardware/shockers/index.md).                                                                                    |
| :package: 3D Prints   | Whether they sell 3D-printed cases (for controllers) or spacers (for shockers).                                                                    |
| :art: Designs         | Whether they sell Official OpenShock or Custom design.                                                                                             |

## Vendor Picker

This tool helps you find the best vendor for your needs. Filter vendors based on shipping regions, product offerings, and design options.

<script setup>
import { ref, computed } from 'vue'

const vendors = [
  { name: "Luc", link: "./luc", from: "🇩🇪 Germany", ships_to: ["EU"], hubs: true, shockers: false, prints3d: true, design: "Official", region: "EUROPE" },
  { name: "BosjesMan", link: "./bosjesman", from: "", ships_to: ["GLOBAL"], hubs: true, shockers: true, prints3d: true, design: "Custom", region: "EUROPE" },
  { name: "Nerex", link: "./nerex", from: "🇵🇹 Portugal", ships_to: ["EU"], hubs: true, shockers: true, prints3d: true, design: "Custom", region: "EUROPE" },
  { name: "millkox", link: "./millkox", from: "🇳🇱 Netherlands", ships_to: ["GLOBAL"], hubs: true, shockers: true, prints3d: true, design: "Official", region: "EUROPE" },
  { name: "Yunadex", link: "./yunadex", from: "🇫🇮 Finland", ships_to: ["GLOBAL"], hubs: true, shockers: true, prints3d: true, design: "Official", region: "EUROPE" },

  { name: "nullstalgia", link: "./nullstalgia", from: "🇺🇸 North America", ships_to: ["NA"], hubs: true, shockers: true, prints3d: true, design: "Official", region: "NORTH_AMERICA" },
  { name: "sillypupkit", link: "./sillypupkit", from: "", ships_to: ["GLOBAL"], hubs: true, shockers: true, prints3d: true, design: "Custom", region: "NORTH_AMERICA" },
  { name: "NamelessNanashi", link: "./namelessnanashi", from: "🇺🇸 North America", ships_to: ["NA"], hubs: true, shockers: false, prints3d: true, design: "Custom", region: "NORTH_AMERICA" },

  { name: "ebthing", link: "./ebthing", from: "🇦🇺 Australia", ships_to: ["OCEANIA"], hubs: true, shockers: true, prints3d: true, design: "Custom", region: "AUSTRALIA" }
]

const selectedRegion = ref("")
const shockersFilter = ref("")
const designFilter = ref("")

const regionNames = { EU: "Europe", NA: "North America", OCEANIA: "Oceania", GLOBAL: "Global" }
const shippingRegions = ["EU", "NA", "OCEANIA", "GLOBAL"]

const baseFiltered = computed(() => {
  let result = vendors
  if (selectedRegion.value) {
    result = result.filter(v => v.ships_to.includes(selectedRegion.value) || v.ships_to.includes("GLOBAL"))
  }
  if (shockersFilter.value === "YES") result = result.filter(v => v.shockers)
  if (designFilter.value) result = result.filter(v => v.design === designFilter.value)
  return result
})

const vendorsEurope = computed(() => baseFiltered.value.filter(v => v.region === "EUROPE"))
const vendorsNorthAmerica = computed(() => baseFiltered.value.filter(v => v.region === "NORTH_AMERICA"))
const vendorsAustralia = computed(() => baseFiltered.value.filter(v => v.region === "AUSTRALIA"))

const checkX = (value) => value ? "✅" : "❌"
</script>

<!-- FILTERS -->
<div>
  <label for="region">Select a shipping region: </label>
  <select id="region" v-model="selectedRegion">
    <option value="">-- Select region --</option>
    <option v-for="region in shippingRegions" :key="region" :value="region">
      Ships to {{ region === "GLOBAL" ? "Worldwide" : regionNames[region] }}
    </option>
  </select>
</div>

<div style="margin-top:0.5em;">
  <label for="shockers">Select if shockers sold too: </label>
  <select id="shockers" v-model="shockersFilter">
    <option value="">-- Show all vendors --</option>
    <option value="YES">Show only vendors that sell shockers too</option>
  </select>
</div>

<div style="margin-top:0.5em;">
  <label for="design">Select design type: </label>
  <select id="design" v-model="designFilter">
    <option value="">-- Show all designs --</option>
    <option value="Custom">Show only Custom designs</option>
    <option value="Official">Show only Official OpenShock designs</option>
  </select>
</div>

## Vendors List

<!-- EUROPE -->
<template v-if="vendorsEurope.length">
<h3>Europe</h3>
<table>
  <thead>
    <tr>
      <th>Vendor</th>
      <th>🌍 From</th>
      <th>✈️ Ships to</th>
      <th>⚡ Hubs</th>
      <th>⚡ Shockers</th>
      <th>📦 3D Prints</th>
      <th>🎨 Design type</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="vendor in vendorsEurope" :key="vendor.name">
      <td><a :href="vendor.link">{{ vendor.name }}</a></td>
      <td>{{ vendor.from }}</td>
      <td>{{ vendor.ships_to.map(r => regionNames[r]).join(", ") }}</td>
      <td>{{ checkX(vendor.hubs) }}</td>
      <td>{{ checkX(vendor.shockers) }}</td>
      <td>{{ checkX(vendor.prints3d) }}</td>
      <td>{{ vendor.design }}</td>
    </tr>
  </tbody>
</table>
</template>

<!-- NORTH AMERICA -->
<template v-if="vendorsNorthAmerica.length">
<h3>North America</h3>
<table>
  <thead>
    <tr>
      <th>Vendor</th>
      <th>🌍 From</th>
      <th>✈️ Ships to</th>
      <th>⚡ Hubs</th>
      <th>⚡ Shockers</th>
      <th>📦 3D Prints</th>
      <th>🎨 Design type</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="vendor in vendorsNorthAmerica" :key="vendor.name">
      <td><a :href="vendor.link">{{ vendor.name }}</a></td>
      <td>{{ vendor.from }}</td>
      <td>{{ vendor.ships_to.map(r => regionNames[r]).join(", ") }}</td>
      <td>{{ checkX(vendor.hubs) }}</td>
      <td>{{ checkX(vendor.shockers) }}</td>
      <td>{{ checkX(vendor.prints3d) }}</td>
      <td>{{ vendor.design }}</td>
    </tr>
  </tbody>
</table>
</template>

<!-- AUSTRALIA -->
<template v-if="vendorsAustralia.length">
<h3>Australia</h3>
<table>
  <thead>
    <tr>
      <th>Vendor</th>
      <th>🌍 From</th>
      <th>✈️ Ships to</th>
      <th>⚡ Hubs</th>
      <th>⚡ Shockers</th>
      <th>📦 3D Prints</th>
      <th>🎨 Design type</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="vendor in vendorsAustralia" :key="vendor.name">
      <td><a :href="vendor.link">{{ vendor.name }}</a></td>
      <td>{{ vendor.from }}</td>
      <td>{{ vendor.ships_to.map(r => regionNames[r]).join(", ") }}</td>
      <td>{{ checkX(vendor.hubs) }}</td>
      <td>{{ checkX(vendor.shockers) }}</td>
      <td>{{ checkX(vendor.prints3d) }}</td>
      <td>{{ vendor.design }}</td>
    </tr>
  </tbody>
</table>
</template>

_Want to be on this list? Hit up a maintainer on [Discord](https://discord.gg/OpenShock)._
