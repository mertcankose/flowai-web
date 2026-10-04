import { creditPacks, subscriptionPlans } from "@/constants/pricing";

/** The plan rows, for the legal pages' own lists. */
export const PlanItems = () => (
  <>
    {subscriptionPlans.map((plan) => (
      <li key={plan.name}>
        <strong>{plan.name}:</strong> {plan.price} - {plan.credits}
      </li>
    ))}
  </>
);

/** The credit pack rows, for the legal pages' own lists. */
export const PackItems = () => (
  <>
    {creditPacks.map((pack) => (
      <li key={pack.credits}>
        {pack.credits} credits - {pack.price}
      </li>
    ))}
  </>
);
