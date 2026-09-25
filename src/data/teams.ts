export type PlayerRole = "tank" | "damage" | "support" | "flex"
export type StaffRole = "manager" | "captain" | "headCoach" | "coach"
export type PlatformType = "pc" | "console" | "mixed"

export type TeamPlayer = {
  username: string
  country: string
  role: PlayerRole
  sub?: boolean
  dnp?: boolean
}

export type TeamStaff = {
  username: string
  country: string
  role: StaffRole
}

export type TeamResult = {
  opponent: string
  score: string
  outcome: "win" | "loss"
}

export type Team = {
  id: string
  name: string
  region: string
  color: string
  platform: PlatformType
  skillTier: string
  players: TeamPlayer[]
  staff: TeamStaff[]
}

export type TeamRegion = {
  id: string
  label: string
  icon: string
  color: string
  teams: Team[]
}

export const teamRegions: TeamRegion[] = [
  {
    id: "emea",
    label: "teams.regions.emea",
    icon: "pixel:globe-americas-solid",
    color: "#92E63E",
    teams: [
      {
        id: "skyflock",
        name: "SkyFlock",
        region: "EMEA",
        color: "#FFFFFF",
        platform: "console",
        skillTier: "Open",
        players: [
          { username: "Galaxy", country: "ru", role: "tank" },
          { username: "iceliq", country: "ru", role: "damage" },
          { username: "indra", country: "so", role: "damage" },
          { username: "IZUYA", country: "fr", role: "support" },
          { username: "Arik", country: "ru", role: "support" },
        ],
        staff: [
          { username: "Sid", country: "gb", role: "manager" },
          { username: "Galaxy", country: "ru", role: "manager" },
        ],
      },
      {
        id: "swift",
        name: "Swift",
        region: "EMEA",
        color: "#D92A2A",
        platform: "pc",
        skillTier: "Open",
        players: [
          { username: "Mojo", country: "gb", role: "tank" },
          { username: "jop", country: "gb", role: "damage" },
          { username: "Snow", country: "es", role: "damage" },
          { username: "Luna", country: "de", role: "support" },
          { username: "dididoo", country: "de", role: "support" },
        ],
        staff: [
          { username: "Luna", country: "de", role: "captain" },
          { username: "Aubstacle", country: "us", role: "headCoach" },
          { username: "Lampy", country: "no", role: "coach" },
        ],
      },
      {
        id: "penguin",
        name: "Penguin",
        region: "EMEA",
        color: "#77CFE7",
        platform: "pc",
        skillTier: "Open",
        players: [
          { username: "Divine", country: "us", role: "tank" },
          { username: "Rose", country: "nl", role: "tank" },
          { username: "hori", country: "gb", role: "damage" },
          { username: "Prosper", country: "gb", role: "damage" },
          { username: "Octo", country: "de", role: "support" },
          { username: "Violet", country: "de", role: "support" },
          { username: "fifi", country: "pl", role: "support" },
          { username: "kay", country: "gb", role: "flex" },
        ],
        staff: [
          { username: "Prosper", country: "gb", role: "manager" },
          { username: "hori", country: "gb", role: "manager" },
          { username: "fifi", country: "pl", role: "manager" },
          { username: "hori", country: "gb", role: "captain" },
          { username: "hambal", country: "nl", role: "coach" },
        ],
      },
      {
        id: "nightwing",
        name: "Nightwing",
        region: "EMEA",
        color: "#5C33EE",
        platform: "pc",
        skillTier: "Open",
        players: [
          { username: "Kepler", country: "dz", role: "tank" },
          { username: "Yuri", country: "nl", role: "tank" },
          { username: "yiruzu", country: "de", role: "damage" },
          { username: "Swifty", country: "gb", role: "damage" },
          { username: "Orpheus", country: "de", role: "damage", dnp: true },
          { username: "Blaco", country: "dk", role: "support" },
          { username: "Sid", country: "gb", role: "support" },
        ],
        staff: [
          { username: "Kepler", country: "dz", role: "manager" },
          { username: "yiruzu", country: "de", role: "manager" },
          { username: "Blaco", country: "dk", role: "captain" },
          { username: "Yuri", country: "nl", role: "captain" },
          { username: "Aubstacle", country: "us", role: "headCoach" },
          { username: "Orpheus", country: "de", role: "coach" },
        ],
      },
      {
        id: "nightjar",
        name: "Satanic Nightjar",
        region: "EMEA",
        color: "#FFEA00",
        platform: "pc",
        skillTier: "4.1K",
        players: [
          { username: "Gambledore", country: "xx", role: "tank" },
          { username: "gUigo", country: "pt", role: "damage" },
          { username: "jevr", country: "ru", role: "damage" },
          { username: "Hagust", country: "no", role: "support" },
          { username: "Cat In The Row", country: "ru", role: "support" },
        ],
        staff: [
          { username: "Hurdle", country: "de", role: "manager" },
          { username: "Hagust", country: "no", role: "captain" },
          { username: "gUigo", country: "pt", role: "captain" },
        ],
      },
      {
        id: "kite",
        name: "Kite",
        region: "EMEA",
        color: "#BFD92A",
        platform: "pc",
        skillTier: "3.8K",
        players: [
          { username: "iced", country: "mx", role: "tank" },
          { username: "ninja", country: "dz", role: "damage" },
          { username: "Traceless", country: "nl", role: "support" },
        ],
        staff: [
          { username: "Luna", country: "de", role: "manager" },
          { username: "Kepler", country: "dz", role: "manager" },
          { username: "Sid", country: "gb", role: "manager" },
          { username: "Luna", country: "de", role: "coach" },
        ],
      },
      {
        id: "canary",
        name: "Canary",
        region: "EMEA",
        color: "#CC92E6",
        platform: "pc",
        skillTier: "3.5K",
        players: [
          { username: "Alex", country: "dk", role: "damage" },
          { username: "Pinkie", country: "dz", role: "support" },
          { username: "isa", country: "se", role: "flex" },
        ],
        staff: [
          { username: "Yuri", country: "nl", role: "manager" },
          { username: "Youseff", country: "ps", role: "coach" },
        ],
      },
      {
        id: "cuckoo",
        name: "Cuckoo",
        region: "EMEA",
        color: "#97BAD6",
        platform: "mixed",
        skillTier: "3.3K",
        players: [
          { username: "Tyraxxis", country: "gb", role: "tank" },
          { username: "FR4M3D", country: "gb", role: "damage" },
          { username: "LucaDiogo", country: "lu", role: "support" },
          { username: "ama", country: "fr", role: "support" },
          { username: "ItsToshi", country: "gb", role: "flex" },
        ],
        staff: [
          { username: "LucaDiogo", country: "lu", role: "manager" },
          { username: "Blaco", country: "dk", role: "coach" },
        ],
      },
      {
        id: "pigeon",
        name: "Pigeon",
        region: "EMEA",
        color: "#C7C7C7",
        platform: "mixed",
        skillTier: "3.3K",
        players: [
          { username: "CDN", country: "ro", role: "damage" },
          { username: "101", country: "gb", role: "damage" },
        ],
        staff: [
          { username: "hori", country: "gb", role: "manager" },
          { username: "CDN", country: "ro", role: "captain" },
          { username: "hori", country: "gb", role: "coach" },
        ],
      },
    ],
  },
  {
    id: "na",
    label: "teams.regions.na",
    icon: "pixel:globe-americas-solid",
    color: "#E75555",
    teams: [
      {
        id: "eagle",
        name: "Eagle",
        region: "NA",
        color: "#A06B54",
        platform: "pc",
        skillTier: "Open",
        players: [
          { username: "fundogparty", country: "mx", role: "tank" },
          { username: "Chase", country: "us", role: "tank" },
          { username: "Dark", country: "kw", role: "damage" },
          { username: "bvop", country: "us", role: "damage" },
          { username: "veintidosimon", country: "do", role: "support" },
          { username: "Nameless", country: "us", role: "support" },
          { username: "wuoko", country: "us", role: "support" },
        ],
        staff: [
          { username: "Kepler", country: "dz", role: "manager" },
          { username: "Dark", country: "kw", role: "captain" },
        ],
      },
      {
        id: "raven",
        name: "Raven",
        region: "NA",
        color: "#3364EE",
        platform: "pc",
        skillTier: "Open",
        players: [
          { username: "oops", country: "us", role: "tank" },
          { username: "Azrael", country: "us", role: "tank", sub: true },
          { username: "Kersite", country: "us", role: "damage" },
          { username: "Gilgamesh", country: "us", role: "damage" },
          { username: "Genesis", country: "us", role: "support" },
          { username: "Starkiller", country: "us", role: "support" },
          { username: "worryn", country: "us", role: "flex" },
        ],
        staff: [
          { username: "Genesis", country: "us", role: "manager" },
          { username: "Kepler", country: "dz", role: "manager" },
          { username: "Kersite", country: "us", role: "captain" },
          { username: "Aubstacle", country: "us", role: "coach" },
        ],
      },
      {
        id: "crow",
        name: "Crow",
        region: "NA",
        color: "#7C1AC7",
        platform: "pc",
        skillTier: "Open",
        players: [{ username: "Crow", country: "xx", role: "tank" }],
        staff: [
          { username: "Azrael", country: "us", role: "manager" },
          { username: "Kepler", country: "dz", role: "manager" },
          { username: "Crow", country: "xx", role: "captain" },
        ],
      },
      {
        id: "phoenix",
        name: "Phoenix",
        region: "NA",
        color: "#F59B46",
        platform: "pc",
        skillTier: "4K",
        players: [
          { username: "Azrael", country: "us", role: "tank" },
          { username: "SHER", country: "xx", role: "damage" },
          { username: "Kirby", country: "us", role: "damage", sub: true },
          { username: "Jwam", country: "mx", role: "support" },
          { username: "Doq", country: "xx", role: "support" },
        ],
        staff: [
          { username: "Azrael", country: "us", role: "manager" },
          { username: "Aubstacle", country: "us", role: "coach" },
        ],
      },
      {
        id: "kagu",
        name: "Kagu",
        region: "NA",
        color: "#6B9ED0",
        platform: "pc",
        skillTier: "3.8K",
        players: [
          { username: "Kepler", country: "dz", role: "tank" },
          { username: "Foxie", country: "us", role: "damage" },
          { username: "penny", country: "jp", role: "damage" },
          { username: "Sid", country: "gb", role: "support" },
          { username: "yiruzu", country: "de", role: "flex", sub: true },
        ],
        staff: [
          { username: "Sid", country: "gb", role: "manager" },
          { username: "Kepler", country: "dz", role: "manager" },
          { username: "Shadowy", country: "gb", role: "coach" },
          { username: "veintidosimon", country: "do", role: "coach" },
        ],
      },
      {
        id: "pelican",
        name: "Pelican",
        region: "NA",
        color: "#2C6E51",
        platform: "pc",
        skillTier: "3.5K",
        players: [
          { username: "pizzabot", country: "us", role: "tank" },
          { username: "Natsu", country: "mx", role: "damage" },
          { username: "NoNo", country: "ca", role: "damage" },
          { username: "AlpineOW", country: "us", role: "damage" },
          { username: "Spinda", country: "us", role: "support" },
          { username: "Holly", country: "us", role: "support" },
          { username: "autumn", country: "us", role: "support" },
          { username: "Starvii", country: "xx", role: "support", sub: true },
        ],
        staff: [
          { username: "femsick", country: "ie", role: "manager" },
          { username: "AlpineOW", country: "us", role: "captain" },
          { username: "pizzabot", country: "us", role: "captain" },
          { username: "Ivory", country: "us", role: "coach" },
          { username: "Hudson", country: "us", role: "coach" },
          { username: "Jubs", country: "ca", role: "coach" },
        ],
      },
    ],
  },
  {
    id: "sa",
    label: "teams.regions.sa",
    icon: "pixel:globe-americas-solid",
    color: "#F8B575",
    teams: [],
  },
  {
    id: "oce",
    label: "teams.regions.oce",
    icon: "pixel:globe-americas-solid",
    color: "#50ACF3",
    teams: [],
  },
]
