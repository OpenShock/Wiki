export default {
  "/": [
    {
      text: "Home",
      items: [
        { text: "Home", link: "/" },
        { text: "FAQ", link: "/home/faq" },
        { text: "Safety", link: "/home/safety-rules" },
      ],
    },
    {
      text: "Legal and Privacy",
      items: [
        { text: "Terms and Conditions", link: "/legal/terms-and-conditions" },
        { text: "Privacy Policy", link: "/legal/privacy-policy" },
        { text: "Code of Conduct", link: "/legal/code-of-conduct" },
        { text: "License", link: "/legal/license" },
      ],
    },
  ],
  "/guides/": [
    {
      text: "Quickstart",
      items: [
        { text: "What you need", link: "/guides/quickstart/what-you-need" },
      ],
    },
    {
      text: "OpenShock",
      link: "/guides/openshock/",
      items: [
        {
          text: "How to flash your board",
          link: "/guides/openshock/how-to-flash-your-board",
        },
        { text: "First setup", link: "/guides/openshock/first-setup" },
        { text: "How to update", link: "/guides/openshock/how-to-update" },
        { text: "Sharelinks", link: "/guides/openshock/sharelinks" },
        { text: "Sharecodes", link: "/guides/openshock/sharecodes" },
        {
          text: "Offline remote setup",
          link: "/guides/openshock/offline-remote-setup",
        },
        { text: "Using the E-Stop", link: "/guides/openshock/e-stop-guide" },
      ],
    },
    {
      text: "Do It Yourself",
      items: [
        { text: "Overview", link: "/guides/diy/" },
        { text: "Hardware", link: "/guides/diy/hardware-buying" },
        { text: "Assembling", link: "/guides/diy/assembling" },
        { text: "E-Stop", link: "/guides/diy/e-stop" },
      ],
    },
    {
      text: "ShockOsc",
      items: [
        { text: "Basic", link: "/guides/shockosc/basic" },
        { text: "Avatar setup VRC", link: "/guides/shockosc/avatar-setup-vrc" },
        { text: "Avatar setup CVR", link: "/guides/shockosc/avatar-setup-cvr" },
        { text: "Parameters", link: "/guides/shockosc/parameters" },
      ],
    },
    {
      text: "Self Hosting",
      items: [{ text: "Overview", link: "/guides/selfhosting/" }],
    },
  ],
  "/dev/": [
    {
      text: "Developer",
      items: [
        { text: "Overview", link: "/dev/" },
        { text: "Contributing", link: "/dev/contributing/" },
        {
          text: "Compile firmware",
          link: "/dev/contributing/compile-firmware",
        },
        { text: "Backend", link: "/dev/contributing/backend" },
      ],
    },
  ],
  "/hardware/": [
    {
      text: "Overview",
      link: "/hardware/",
    },
    {
      text: "Firmware",
      items: [{ text: "Status LED", link: "/hardware/firmware/status-led" }],
    },
    {
      text: "Shockers",
      items: [
        { text: "Overview", link: "/hardware/shockers/" },
        { text: "Caixianlin", link: "/hardware/shockers/caixianlin" },
        { text: "Petrainer", link: "/hardware/shockers/petrainer" },
      ],
    },
    {
      text: "Remotes",
      items: [{ text: "Identifying", link: "/hardware/remotes/identifying" }],
    },
    {
      text: "Boards",
      items: [
        { text: "Overview", link: "/hardware/boards/" },
        {
          text: "OpenShock Core v1",
          link: "/hardware/boards/openshock/core-v1",
        },
        {
          text: "OpenShock Core v2",
          link: "/hardware/boards/openshock/core-v2",
        },
        { text: "PiShock 2023", link: "/hardware/boards/pishock/2023-pishock" },
        {
          text: "PiShock Lite 2021Q3",
          link: "/hardware/boards/pishock/2021q3-lite",
        },
        {
          text: "PiShock Plus 2021Q1",
          link: "/hardware/boards/pishock/2021q1-plus",
        },
        {
          text: "Seeed XIAO ESP32S3",
          link: "/hardware/boards/seeed/xiao-esp32s3",
        },
        {
          text: "Wemos D1 mini ESP32",
          link: "/hardware/boards/wemos/d1-mini-esp32",
        },
        {
          text: "Wemos Lolin S2 mini",
          link: "/hardware/boards/wemos/lolin-s2-mini",
        },
        { text: "Wemos Lolin S3", link: "/hardware/boards/wemos/lolin-s3" },
        {
          text: "DFRobot Firebeetle",
          link: "/hardware/boards/dfr-firebeetle/dfr-firebeetle",
        },
        { text: "ESP32-S3 DORx", link: "/hardware/boards/china/esp32s3-dorx" },
      ],
    },
    {
      text: "Transmitter",
      items: [
        { text: "Overview", link: "/hardware/transmitter/" },
        { text: "Open Smart", link: "/hardware/transmitter/china/open-smart" },
      ],
    },
  ],
  "/vendors/": [
    {
      text: "Hardware",
      items: [
        { text: "Overview", link: "/vendors/hardware/" },
        { text: "Luc", link: "/vendors/hardware/luc" },
        { text: "Nullstalgia", link: "/vendors/hardware/nullstalgia" },
        { text: "Millkox", link: "/vendors/hardware/millkox" },
        { text: "Bosjesman", link: "/vendors/hardware/bosjesman" },
        { text: "SillyPupKit", link: "/vendors/hardware/sillypupkit" },
        { text: "NamelessNanashi", link: "/vendors/hardware/namelessnanashi" },
        { text: "Nerex", link: "/vendors/hardware/nerex" },
        { text: "Ebthing", link: "/vendors/hardware/ebthing" },
        { text: "Yunadex", link: "/vendors/hardware/yunadex" },
        { text: "MeguminVRC", link: "/vendors/hardware/meguminvrc" },
        { text: "MarkDasWolf", link: "/vendors/hardware/markdaswolf" }
      ],
    },
  ],
  "/troubleshooting/": [
    {
      text: "Troubleshooting",
      items: [
        { text: "Hub", link: "/troubleshooting/hub" },
        { text: "ShockOsc", link: "/troubleshooting/shockosc" },
        { text: "Shocker pairing", link: "/troubleshooting/shocker-pairing" },
      ],
    },
  ],
};
