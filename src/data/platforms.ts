export interface PlatformLink {
  label: string;
  url: string;
  isDeadline?: boolean;
  deadlineText?: string;
}

export interface Platform {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  siteUrl: string;
  siteName: string;
  description: string;
  submitInfo: string;
  links: PlatformLink[];
  bonus?: {
    title: string;
    description: string;
    link?: PlatformLink;
  };
  accentColor: string;
}

export const PLATFORMS: Platform[] = [
  {
    id: "nynj-host-committee",
    number: 1,
    title: "Official NYNJ World Cup Host Committee Calendar",
    subtitle: "NYNJ World Cup Concierge",
    siteUrl: "https://nynjfwc26.com/",
    siteName: "NYNJFW26.com",
    description:
      "NYNJFW26.com serves as the official World Cup information hub for the region. It\u2019s where you\u2019ll find the NYNJ World Cup Concierge, designed to help visitors and locals alike navigate World Cup-related events, activities and promotions in all five boroughs. Businesses that submit their World Cup-related plans to this platform will receive enhanced discoverability by Google Concierge users in the region for the duration of the games.",
    submitInfo:
      'Businesses can submit events through the "Community Events" calendar.',
    links: [
      {
        label: "Submit Community Events",
        url: "https://forms.office.com/Pages/ResponsePage.aspx?id=MiFjOM7AK0W23yKCaVDWoknRq8EFp4dFsz-7y8YhHylUQ01aN042VFJFWDZUMk0zNjhJNFcyMlJMNy4u",
      },
      {
        label: "Enroll in World Rewards Program",
        url: "https://form.jotform.com/260776454368166",
        isDeadline: true,
        deadlineText: "Deadline: May 22",
      },
    ],
    bonus: {
      title: "World Rewards Program",
      description:
        'Businesses offering World Cup specials or discounts can enroll in the "World Rewards Program," which incentivizes customers to frequent these businesses with points that are redeemable for official merchandise and match tickets.',
    },
    accentColor: "#D4AF37",
  },
  {
    id: "nyc-tourism",
    number: 2,
    title: "NYC Tourism + Conventions Events & Offers Platform",
    subtitle: "Official World Cup Partner",
    siteUrl: "https://www.nyctourism.com/",
    siteName: "NYCTourism.com",
    description:
      "NYC Tourism is one of the city\u2019s most heavily trafficked visitor information platforms\u2014and an official World Cup partner. Businesses listed on this site benefit from increased visibility among tourists searching for dining, nightlife, retail, and entertainment options during the tournament.",
    submitInfo:
      "Submissions open May 27 through the Offers & Events portal and will be accepted on a rolling basis through July 1. NYC Tourism recommends submitting at least two weeks in advance. Listings generally take three days to process.",
    links: [
      {
        label: "Submit Events & Offers (Opens May 27)",
        url: "https://admintools.nyctourism.com/world-cup-event",
      },
      {
        label: 'F&B: "Winners Special" Free Cup Program',
        url: "https://admintools.nyctourism.com/world-cup-cuisine"
      },
    ],
    bonus: {
      title: "Bonus: Sail4th & PRIDE",
      description:
        "Businesses can also use the calendar to promote programming tied to this summer\u2019s other major events: Sail4th and PRIDE.",
    },
    accentColor: "#2E86DE",
  },
  {
    id: "livemap-nyc",
    number: 3,
    title: "LiveMap.NYC",
    subtitle: "Chambers of Commerce + BIDs",
    siteUrl: "https://livemap.nyc/",
    siteName: "LIVEMAP.NYC",
    description:
      'LiveMap.NYC is a new, interactive five-borough business directory that maps every business on every block in all 5 boroughs. Backed by the "Summer of Opportunity" consortium\u2014the five Chambers of Commerce, BIDs, and Alliances\u2014LiveMap.NYC is the map New York has been waiting for.',
    submitInfo:
      "Businesses should submit their World Cup events and promos. You can also submit plans tied to Sail4th, Pride or other summer events. Updated weekly to ensure the accuracy of its listings. Businesses do not need to be Chamber members to participate.",
    links: [
      {
        label: "Submit Events & Promos",
        url: "https://livexyz.com/summer2026",
        isDeadline: true,
        deadlineText: "Deadline: June 1",
      },
    ],
    accentColor: "#27AE60",
  },
];
