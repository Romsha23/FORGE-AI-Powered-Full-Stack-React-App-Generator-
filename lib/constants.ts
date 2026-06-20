// lib/constants.ts

export const PLANS = {
  free: {
    label: "Free",
    credits: 10,
    price: 0,
    clerkPlanId: null, // Free plan doesn't need a plan ID
  },
  starter: {
    label: "Starter",
    credits: 50,
    price: 9,
    clerkPlanId: "starter", // Use the SLUG you created in Clerk, NOT the cplan_ ID
  },
  pro: {
    label: "Pro",
    credits: 150,
    price: 29,
    clerkPlanId: "pro", // Use the SLUG you created in Clerk
  },
} as const;

export const CREDIT_COST_PER_GENERATION = 1;
export const MIN_CREDITS_TO_GENERATE = 1;

export const PRICING_PLANS = [
  {
    key: "free",
    label: "Free",
    description: "Start building. No credit card required.",
    price: 0,
    featured: false,
    planId: null, // Free plan doesn't use CheckoutButton
    active: true,
    features: ["10 generations / month", "Live preview", "Export to zip"],
  },
  {
    key: "starter",
    label: "Starter",
    description: "For developers who build regularly.",
    price: 9,
    featured: true,
    planId: "cplan_3Ez1o4wF8XIfTIYI90vmrWVQZPA", // ✅ Use slug: "starter" (NOT cplan_...)
    active: true,
    features: [
      "50 generations / month",
      "Image uploads",
      "Live preview",
      "Export to zip",
    ],
  },
  {
    key: "pro",
    label: "Pro",
    description: "For power users who ship fast.",
    price: 29,
    featured: false,
    planId: "cplan_3Ez2EevZwavDNCE77YoRj84dYuO", // ✅ Use slug: "pro" (NOT cplan_...)
    active: true,
    features: [
      "150 generations / month",
      "Priority AI (faster response)",
      "Live preview",
      "Export to zip",
      "Image uploads",
      "Access to Forge Pro Agent",
    ],
  },
] as const;