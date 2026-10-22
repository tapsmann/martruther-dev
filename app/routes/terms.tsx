import { Link } from "react-router";

import { seoMeta } from "@/lib/seo";
import { EMAIL, PHONE_PRIMARY_HREF } from "@/lib/site";

export function meta() {
  return seoMeta({
    path: "/terms",
    title: "Terms of service",
    description:
      "The terms that apply to freight and haulage work with Martruther Logistics: quotes and pricing, booking, collection and delivery, claims, payment and liability.",
  });
}

export default function TermsRoute() {
  return (
    <article className="ml-page">
      <div className="ml-container ml-page-inner">
        <nav className="ml-page-crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Terms of service</span>
        </nav>

        <header className="ml-page-head">
          <p className="ml-kicker ml-kicker-dark">
            <span className="ml-kicker-line" /> Legal
          </p>
          <h1>Terms of service</h1>
          <p className="ml-page-updated">Last updated: to be confirmed</p>
        </header>

        <div className="ml-prose">
          <p className="ml-notice" role="note">
            <strong>Placeholder copy.</strong> This page is a structural
            placeholder. The wording below is illustrative only and is not legal
            advice or a binding agreement. Replace it with terms reviewed for
            your business before publishing.
          </p>

          <h2>1. Who these terms apply to</h2>
          <p>
            These terms apply to anyone requesting or receiving freight and
            haulage services from Martruther Logistics, trading from Harare,
            Zimbabwe. Placing a booking with us means you accept these terms.
          </p>

          <h2>2. Quotes and pricing</h2>
          <p>
            Quotes are prepared from the load details you provide — pickup and
            delivery points, goods type, approximate weight and preferred date.
            Prices depend on those details and on the route, and are confirmed
            in writing before any load is accepted.
          </p>

          <h2>3. Booking and confirmation</h2>
          <p>
            A booking is confirmed once we have issued a written quotation and
            you have accepted it. Until then, no capacity is reserved and no
            charge arises.
          </p>

          <h2>4. Your responsibilities</h2>
          <p>
            You are responsible for the accuracy of the load information you
            give us, for the safe loading of goods, and for disclosing any
            hazardous, restricted or over-dimensional cargo. Where a load
            requires permits, escorts or route clearance, tell us at the time of
            booking so these can be arranged and costed.
          </p>

          <h2>5. Collection and delivery</h2>
          <p>
            Delivery dates are estimates given in good faith based on the
            information available at booking. We are not liable for delays
            caused by circumstances outside our reasonable control, including
            road closures, weather, civil disruption and border delays.
          </p>

          <h2>6. Damage and claims</h2>
          <p>
            Please inspect goods on delivery and report any visible damage
            before the vehicle departs. Claims for concealed damage must be
            raised in writing within the period specified in the quotation or
            consignment note.
          </p>

          <h2>7. Payment</h2>
          <p>
            Payment terms, currency and accepted methods are set out in each
            quotation and are due according to those terms.
          </p>

          <h2>8. Liability</h2>
          <p>
            Our liability is limited to the carriage value of the goods unless
            agreed otherwise in writing. We are not liable for indirect or
            consequential loss, including loss of profit.
          </p>

          <h2>9. Governing law</h2>
          <p>
            These terms are governed by the laws of Zimbabwe, and any dispute is
            subject to the jurisdiction of the Zimbabwean courts.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or raised by phone on{" "}
            <a href={PHONE_PRIMARY_HREF}>our primary line</a> during working
            hours.
          </p>
        </div>

        <footer className="ml-page-foot">
          <Link className="ml-button ml-button-primary" to="/">
            Back to home
          </Link>
          <span className="ml-page-foot-links">
            <Link to="/privacy">Privacy policy</Link>
            <Link to="/cookies">Cookie policy</Link>
          </span>
        </footer>
      </div>
    </article>
  );
}
