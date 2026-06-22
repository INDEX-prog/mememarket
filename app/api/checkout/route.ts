import { NextResponse } from "next/server";

export async function POST(): Promise<NextResponse> {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  
  // If no Stripe key configured, return a helpful message
  if (!stripeSecretKey) {
    return NextResponse.json(
      {
        error: "Stripe is not configured yet. Add STRIPE_SECRET_KEY to your environment variables.",
        setupUrl: "https://dashboard.stripe.com/apikeys",
      },
      { status: 503 }
    );
  }

  try {
    // Dynamic import to avoid errors when Stripe isn't configured
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2023-10-16",
    });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Create Stripe Checkout Session with 30-day free trial
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "MemeMarket Pro",
              description: "Full access to 200+ licensed corporate memes",
            },
            unit_amount: 1900, // $19.00
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 30,
      },
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    console.error("Stripe checkout error:", error);
    
    const errorMessage = error instanceof Error ? error.message : "Failed to create checkout session";
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
