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
| 🌐 From | Where it's being sent from.                                                                                                                        |
| ✈️ Ships to   | The region(s) that the vendor ships to.                                                                                                              |
| 📡 Hubs               | Whether the vendor sells pre-assembled Hubs ([ESP32 board](../../hardware/boards/index.md) + [433 MHz transmitter](../../hardware/transmitter/index.md)). |
| ⚡️ Shockers           | Whether the vendor sells [shockers](../../hardware/shockers/index.md).                                                                                    |
| 📦 3D Prints   | Whether the vendor sells 3D-printed cases (for controllers) or spacers (for shockers).                                                                    |
| 🎨 Designs         | Whether the vendor sells the Official (Nullstalgia) OpenShock PCBs or Custom designs.                                                                                             |

## Vendor Picker

Use these filters to quickly find vendors that ship to you and offer the products you want.

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, watchEffect, nextTick } from 'vue'

const vendors = [
  // EUROPE
  { name: "Luc", link: "./luc", from: "🇩🇪 Germany", ships_to: ["EU"], hubs: true, shockers: false, prints3d: true, design: "Official", region: "EUROPE" },
  { name: "BosjesMan", link: "./bosjesman", from: "❓ Unspecified", ships_to: ["GLOBAL"], hubs: true, shockers: true, prints3d: true, design: "Custom", region: "EUROPE" },
  { name: "Nerex", link: "./nerex", from: "🇵🇹 Portugal", ships_to: ["EU"], hubs: true, shockers: true, prints3d: true, design: "Custom", region: "EUROPE" },
  { name: "Millkox", link: "./millkox", from: "🇳🇱 Netherlands", ships_to: ["GLOBAL"], hubs: true, shockers: true, prints3d: true, design: "Official", region: "EUROPE" },
  { name: "Yunadex", link: "./yunadex", from: "🇫🇮 Finland", ships_to: ["GLOBAL"], hubs: true, shockers: true, prints3d: true, design: "Custom", region: "EUROPE" },
  // NORTH_AMERICA
  { name: "Nullstalgia", link: "./nullstalgia", from: "🇺🇸 USA", ships_to: ["NA"], hubs: true, shockers: true, prints3d: true, design: "Official", region: "NORTH_AMERICA" },
  { name: "Sillypupkit", link: "./sillypupkit", from: "🇨🇦 Canada", ships_to: ["GLOBAL"], hubs: true, shockers: true, prints3d: true, design: "Custom", region: "NORTH_AMERICA" },
  { name: "NamelessNanashi", link: "./namelessnanashi", from: "🇺🇸 USA", ships_to: ["NA"], hubs: true, shockers: false, prints3d: true, design: "Custom", region: "NORTH_AMERICA" },
  // AUSTRALIA
  { name: "Ebthing", link: "./ebthing", from: "🇦🇺 Australia", ships_to: ["OCEANIA"], hubs: true, shockers: true, prints3d: true, design: "Custom", region: "AUSTRALIA" }
]

const selectedRegion = ref("")
const requireHubs = ref(false)
const requireShockers = ref(false)
const require3dPrints = ref(false)
const requireOfficialDesign = ref(false)
const requestedVendorAnchor = ref(null)

const regionNames = { EU: "🇪🇺 Europe", NA: "🌎 North America", OCEANIA: "🌏 Oceania", GLOBAL: "🌐 Worldwide" }
const shippingRegions = ["EU", "NA", "OCEANIA", "GLOBAL"]

const toBool = (value) => {
  if (typeof value === 'boolean') return value
  if (value === null || value === undefined) return false
  const normalized = String(value).trim().toLowerCase()
  return normalized === '1' || normalized === 'true' || normalized === 'yes' || normalized === 'on'
}
const vendorAnchor = (vendor) => {
  const slug = String(vendor.name)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
  return `vendor-${slug}`
}

const showHubsFilter = computed(() => vendors.some(v => !v.hubs))
const showShockersFilter = computed(() => vendors.some(v => !v.shockers))
const show3dPrintsFilter = computed(() => vendors.some(v => !v.prints3d))

const baseFiltered = computed(() => {
  let result = vendors
  if (selectedRegion.value) {
    result = result.filter(v => v.ships_to.includes(selectedRegion.value) || v.ships_to.includes("GLOBAL"))
  }
  if (showHubsFilter.value && requireHubs.value) result = result.filter(v => v.hubs)
  if (showShockersFilter.value && requireShockers.value) result = result.filter(v => v.shockers)
  if (show3dPrintsFilter.value && require3dPrints.value) result = result.filter(v => v.prints3d)
  if (requireOfficialDesign.value) result = result.filter(v => v.design === "Official")
  return result
})

const syncFiltersToUrl = () => {
  if (typeof window === 'undefined') return

  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)

  if (selectedRegion.value) params.set('region', selectedRegion.value)
  else params.delete('region')

  if (showHubsFilter.value && requireHubs.value) params.set('hubs', '1')
  else params.delete('hubs')

  if (showShockersFilter.value && requireShockers.value) params.set('shockers', '1')
  else params.delete('shockers')

  if (show3dPrintsFilter.value && require3dPrints.value) params.set('prints3d', '1')
  else params.delete('prints3d')

  if (requireOfficialDesign.value) params.set('official', '1')
  else params.delete('official')

  const search = params.toString()
  const nextUrl = `${url.pathname}${search ? `?${search}` : ''}${url.hash}`
  window.history.replaceState({}, '', nextUrl)
}

const readVendorHash = () => {
  if (typeof window === 'undefined') return
  const hash = window.location.hash
  requestedVendorAnchor.value = hash && hash.length > 1 ? decodeURIComponent(hash.slice(1)) : null
}

onMounted(() => {
  if (typeof window === 'undefined') return

  const params = new URLSearchParams(window.location.search)

  const region = params.get('region')
  if (region && shippingRegions.includes(region)) selectedRegion.value = region

  requireHubs.value = showHubsFilter.value && toBool(params.get('hubs'))
  requireShockers.value = showShockersFilter.value && toBool(params.get('shockers'))
  require3dPrints.value = show3dPrintsFilter.value && toBool(params.get('prints3d'))
  requireOfficialDesign.value = toBool(params.get('official'))

  readVendorHash()
  window.addEventListener('hashchange', readVendorHash)
})

onBeforeUnmount(() => {
  if (typeof window === 'undefined') return
  window.removeEventListener('hashchange', readVendorHash)
})

watch([selectedRegion, requireHubs, requireShockers, require3dPrints, requireOfficialDesign], () => {
  syncFiltersToUrl()
})

watchEffect(async () => {
  if (typeof window === 'undefined') return
  if (!requestedVendorAnchor.value) return

  const anchor = requestedVendorAnchor.value
  await nextTick()
  const el = document.getElementById(anchor)
  if (!el) return

  el.scrollIntoView({ block: 'start' })
  if (requestedVendorAnchor.value === anchor) {
    requestedVendorAnchor.value = null
  }
})

const compareVendorsByName = (a, b) => String(a?.name ?? '').localeCompare(String(b?.name ?? ''), undefined, { sensitivity: 'base', numeric: true })
const sortVendorsByName = (list) => [...list].sort(compareVendorsByName)

const vendorsEurope = computed(() => sortVendorsByName(baseFiltered.value.filter(v => v.region === "EUROPE")))
const vendorsNorthAmerica = computed(() => sortVendorsByName(baseFiltered.value.filter(v => v.region === "NORTH_AMERICA")))
const vendorsAustralia = computed(() => sortVendorsByName(baseFiltered.value.filter(v => v.region === "AUSTRALIA")))

const checkX = (value) => value ? "✅" : "❌"
</script>

<!-- FILTERS -->
<div>
  <label for="region">✈️ Ships to: </label>
  <select id="region" v-model="selectedRegion">
    <option value="">Show vendors serving any region</option>
    <option v-for="region in shippingRegions" :key="region" :value="region">
      {{ regionNames[region] }}
    </option>
  </select>
</div>

<div v-if="showHubsFilter" style="margin-top:0.5em; display:flex; align-items:center; gap:0.5em;">
  <label for="require-hubs">📡 Only show vendors that sell hubs: </label>
  <input type="checkbox" id="require-hubs" v-model="requireHubs" />
</div>

<div v-if="showShockersFilter" style="margin-top:0.5em; display:flex; align-items:center; gap:0.5em;">
  <label for="require-shockers">⚡️ Only show vendors that sell shockers: </label>
  <input type="checkbox" id="require-shockers" v-model="requireShockers" />
</div>

<div v-if="show3dPrintsFilter" style="margin-top:0.5em; display:flex; align-items:center; gap:0.5em;">
  <label for="require-3dprints">📦 Only show vendors with 3D Prints: </label>
  <input type="checkbox" id="require-3dprints" v-model="require3dPrints" />
</div>

<div style="margin-top:0.5em; display:flex; align-items:center; gap:0.5em;">
  <label for="require-official">🎨 Only show vendors using the Official (Nullstalgia) PCB design: </label>
  <input type="checkbox" id="require-official" v-model="requireOfficialDesign" />
</div>

## Vendors List

<!-- EUROPE -->
<template v-if="vendorsEurope.length">
<h3>Europe</h3>
<table aria-label="Available hardware vendors in the Europe region">
  <thead>
    <tr>
      <th>Vendor</th>
      <th>🌐 From</th>
      <th>✈️ Ships to</th>
      <th>📡 Hubs</th>
      <th>⚡️ Shockers</th>
      <th>📦 3D Prints</th>
      <th>🎨 Design type</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="vendor in vendorsEurope" :key="vendor.name" :id="vendorAnchor(vendor)">
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
<table aria-label="Available hardware vendors in the North America region">
  <thead>
    <tr>
      <th>Vendor</th>
      <th>🌐 From</th>
      <th>✈️ Ships to</th>
      <th>📡 Hubs</th>
      <th>⚡️ Shockers</th>
      <th>📦 3D Prints</th>
      <th>🎨 Design type</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="vendor in vendorsNorthAmerica" :key="vendor.name" :id="vendorAnchor(vendor)">
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
<table aria-label="Available hardware vendors in the Australia region">
  <thead>
    <tr>
      <th>Vendor</th>
      <th>🌐 From</th>
      <th>✈️ Ships to</th>
      <th>📡 Hubs</th>
      <th>⚡️ Shockers</th>
      <th>📦 3D Prints</th>
      <th>🎨 Design type</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="vendor in vendorsAustralia" :key="vendor.name" :id="vendorAnchor(vendor)">
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
