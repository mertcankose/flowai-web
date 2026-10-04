// The one place prices and credit amounts are written down. The Privacy
// Policy, the Terms and the EULA all render from this, so they cannot drift
// apart the way three hand-typed copies did.
//
// These are the United States App Store prices. The credit amounts are the
// ones the backend grants (RevenueCatService.productConfigs).

export const pricingUpdated = "October 4, 2026";

export const subscriptionPlans = [
  { name: "Annual Plan", price: "$99.99/year", credits: "80 credits per year" },
  { name: "Monthly Plan", price: "$19.99/month", credits: "15 credits per month" },
  { name: "Weekly Plan", price: "$6.99/week", credits: "5 credits per week" },
];

export const creditPacks = [
  { credits: 35, price: "$49.99" },
  { credits: 15, price: "$22.99" },
  { credits: 5, price: "$7.99" },
  { credits: 2, price: "$3.99" },
];

// Shown only to someone leaving the subscription screen.
export const introOffer = { price: "$4.99/week", credits: "5 credits per week" };
