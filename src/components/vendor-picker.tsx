"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";

interface Vendor {
  name: string;
  link: string;
  from: string;
  ships_to: string[];
  hubs: boolean;
  shockers: boolean;
  prints3d: boolean;
  design: string;
  region: string;
}

const vendors: Vendor[] = [
  // Europe
  {
    name: "BosjesMan",
    link: "./bosjesman",
    from: "\u2753 Unspecified",
    ships_to: ["GLOBAL"],
    hubs: true,
    shockers: true,
    prints3d: true,
    design: "Custom",
    region: "EUROPE",
  },
  {
    name: "Luc",
    link: "./luc",
    from: "\ud83c\udde9\ud83c\uddea Germany",
    ships_to: ["EU"],
    hubs: true,
    shockers: false,
    prints3d: true,
    design: "Official",
    region: "EUROPE",
  },
  {
    name: "MarkDasWolf",
    link: "./markdaswolf",
    from: "\ud83c\udde6\ud83c\uddf9 Austria",
    ships_to: ["EU"],
    hubs: true,
    shockers: true,
    prints3d: true,
    design: "Custom",
    region: "EUROPE",
  },
  {
    name: "MeguminVRC",
    link: "./meguminvrc",
    from: "\ud83c\udde9\ud83c\uddea Germany",
    ships_to: ["GLOBAL"],
    hubs: true,
    shockers: true,
    prints3d: true,
    design: "Custom",
    region: "EUROPE",
  },
  {
    name: "Millkox",
    link: "./millkox",
    from: "\ud83c\uddf3\ud83c\uddf1 Netherlands",
    ships_to: ["GLOBAL"],
    hubs: true,
    shockers: true,
    prints3d: true,
    design: "Official",
    region: "EUROPE",
  },
  {
    name: "Nerex",
    link: "./nerex",
    from: "\ud83c\uddf5\ud83c\uddf9 Portugal",
    ships_to: ["EU"],
    hubs: true,
    shockers: true,
    prints3d: true,
    design: "Custom",
    region: "EUROPE",
  },
  {
    name: "Yunadex",
    link: "./yunadex",
    from: "\ud83c\uddeb\ud83c\uddee Finland",
    ships_to: ["GLOBAL"],
    hubs: true,
    shockers: true,
    prints3d: true,
    design: "Custom",
    region: "EUROPE",
  },
  // North America
  {
    name: "ArtisanForgeDesigns",
    link: "./artisanforgedesigns",
    from: "\ud83c\uddfa\ud83c\uddf8 USA",
    ships_to: ["GLOBAL"],
    hubs: true,
    shockers: false,
    prints3d: true,
    design: "Custom",
    region: "NORTH_AMERICA",
  },
  {
    name: "NamelessNanashi",
    link: "./namelessnanashi",
    from: "\ud83c\uddfa\ud83c\uddf8 USA",
    ships_to: ["NA"],
    hubs: true,
    shockers: false,
    prints3d: true,
    design: "Custom",
    region: "NORTH_AMERICA",
  },
  {
    name: "Nullstalgia",
    link: "./nullstalgia",
    from: "\ud83c\uddfa\ud83c\uddf8 USA",
    ships_to: ["NA"],
    hubs: true,
    shockers: true,
    prints3d: true,
    design: "Official",
    region: "NORTH_AMERICA",
  },
  {
    name: "Sillypupkit",
    link: "./sillypupkit",
    from: "\ud83c\udde8\ud83c\udde6 Canada",
    ships_to: ["GLOBAL"],
    hubs: true,
    shockers: true,
    prints3d: true,
    design: "Custom",
    region: "NORTH_AMERICA",
  },
  // Australia
  {
    name: "Ebthing",
    link: "./ebthing",
    from: "\ud83c\udde6\ud83c\uddfa Australia",
    ships_to: ["OCEANIA"],
    hubs: true,
    shockers: true,
    prints3d: true,
    design: "Custom",
    region: "AUSTRALIA",
  },
];

const SHIPPING_REGIONS = ["EU", "NA", "OCEANIA", "GLOBAL"] as const;

const regionNames: Record<string, string> = {
  EU: "\ud83c\uddea\ud83c\uddfa Europe",
  NA: "\ud83c\udf0e North America",
  OCEANIA: "\ud83c\udf0f Oceania",
  GLOBAL: "\ud83c\udf10 Worldwide",
};

const sectionLabels: Record<string, string> = {
  EUROPE: "Europe",
  NORTH_AMERICA: "North America",
  AUSTRALIA: "Australia",
};

const checkX = (value: boolean) => (value ? "\u2705" : "\u274c");

const sortByName = (a: Vendor, b: Vendor) =>
  a.name.localeCompare(b.name, undefined, { sensitivity: "base", numeric: true });

function VendorTable({ vendors, region }: { vendors: Vendor[]; region: string }) {
  if (vendors.length === 0) return null;
  return (
    <>
      <h3>{sectionLabels[region]}</h3>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>{"\ud83c\udf10"} From</th>
              <th>{"\u2708\ufe0f"} Ships to</th>
              <th>{"\ud83d\udce1"} Hubs</th>
              <th>{"\u26a1\ufe0f"} Shockers</th>
              <th>{"\ud83d\udce6"} 3D Prints</th>
              <th>{"\ud83c\udfa8"} Design</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v) => (
              <tr key={v.name} id={`vendor-${v.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <td>
                  <Link href={v.link}>{v.name}</Link>
                </td>
                <td>{v.from}</td>
                <td>{v.ships_to.map((r) => regionNames[r]).join(", ")}</td>
                <td>{checkX(v.hubs)}</td>
                <td>{checkX(v.shockers)}</td>
                <td>{checkX(v.prints3d)}</td>
                <td>{v.design}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function VendorPicker() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [requireHubs, setRequireHubs] = useState(false);
  const [requireShockers, setRequireShockers] = useState(false);
  const [require3dPrints, setRequire3dPrints] = useState(false);
  const [requireOfficial, setRequireOfficial] = useState(false);

  // Read filters from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const region = params.get("region");
    if (region && (SHIPPING_REGIONS as readonly string[]).includes(region))
      setSelectedRegion(region);
    if (params.get("hubs") === "1") setRequireHubs(true);
    if (params.get("shockers") === "1") setRequireShockers(true);
    if (params.get("prints3d") === "1") setRequire3dPrints(true);
    if (params.get("official") === "1") setRequireOfficial(true);
  }, []);

  // Sync filters to URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedRegion) params.set("region", selectedRegion);
    if (requireHubs) params.set("hubs", "1");
    if (requireShockers) params.set("shockers", "1");
    if (require3dPrints) params.set("prints3d", "1");
    if (requireOfficial) params.set("official", "1");
    const search = params.toString();
    const nextUrl = `${window.location.pathname}${search ? `?${search}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", nextUrl);
  }, [selectedRegion, requireHubs, requireShockers, require3dPrints, requireOfficial]);

  const showHubsFilter = vendors.some((v) => !v.hubs);
  const showShockersFilter = vendors.some((v) => !v.shockers);
  const show3dPrintsFilter = vendors.some((v) => !v.prints3d);

  const filtered = useMemo(() => {
    let result = vendors;
    if (selectedRegion) {
      result = result.filter(
        (v) => v.ships_to.includes(selectedRegion) || v.ships_to.includes("GLOBAL"),
      );
    }
    if (requireHubs) result = result.filter((v) => v.hubs);
    if (requireShockers) result = result.filter((v) => v.shockers);
    if (require3dPrints) result = result.filter((v) => v.prints3d);
    if (requireOfficial) result = result.filter((v) => v.design === "Official");
    return result;
  }, [selectedRegion, requireHubs, requireShockers, require3dPrints, requireOfficial]);

  const europe = useMemo(
    () => filtered.filter((v) => v.region === "EUROPE").sort(sortByName),
    [filtered],
  );
  const northAmerica = useMemo(
    () => filtered.filter((v) => v.region === "NORTH_AMERICA").sort(sortByName),
    [filtered],
  );
  const australia = useMemo(
    () => filtered.filter((v) => v.region === "AUSTRALIA").sort(sortByName),
    [filtered],
  );

  return (
    <>
      <div className="flex flex-col gap-3 my-4 p-4 rounded-lg border bg-fd-card">
        <div className="flex items-center gap-2">
          <label htmlFor="region">{"\u2708\ufe0f"} Ships to:</label>
          <select
            id="region"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="rounded border bg-fd-background px-2 py-1"
          >
            <option value="">Show vendors serving any region</option>
            {SHIPPING_REGIONS.map((r) => (
              <option key={r} value={r}>
                {regionNames[r]}
              </option>
            ))}
          </select>
        </div>

        {showHubsFilter && (
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={requireHubs}
              onChange={(e) => setRequireHubs(e.target.checked)}
            />
            {"\ud83d\udce1"} Only show vendors that sell hubs
          </label>
        )}

        {showShockersFilter && (
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={requireShockers}
              onChange={(e) => setRequireShockers(e.target.checked)}
            />
            {"\u26a1\ufe0f"} Only show vendors that sell shockers
          </label>
        )}

        {show3dPrintsFilter && (
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={require3dPrints}
              onChange={(e) => setRequire3dPrints(e.target.checked)}
            />
            {"\ud83d\udce6"} Only show vendors with 3D Prints
          </label>
        )}

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={requireOfficial}
            onChange={(e) => setRequireOfficial(e.target.checked)}
          />
          {"\ud83c\udfa8"} Only show vendors using the Official (Nullstalgia) PCB design
        </label>
      </div>

      {europe.length === 0 && northAmerica.length === 0 && australia.length === 0 ? (
        <p className="my-4 text-fd-muted-foreground">No vendors match your current filters.</p>
      ) : (
        <>
          <VendorTable vendors={europe} region="EUROPE" />
          <VendorTable vendors={northAmerica} region="NORTH_AMERICA" />
          <VendorTable vendors={australia} region="AUSTRALIA" />
        </>
      )}
    </>
  );
}
