import { Link } from "react-router";

import { APP_TITLE } from "@/lib/app-config";
import { EMAIL } from "@/lib/site";

export function meta() {
  return [
    { title: `Privacy policy — ${APP_TITLE}` },
    {
      name: "description",
      content: "How Martruther Logistics handles personal information.",
    },
  ];
}

export default function PrivacyRoute() {
  return (
    <article className="ml-page">
      <div className="ml-container ml-page-inner">
        <nav className="ml-page-crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Privacy policy</span>
        </nav>

        <header className="ml-page-head">
          <p className="ml-kicker ml-kicker-dark">
            <span className="ml-kicker-line" /> Legal
          </p>
          <h1>Privacy policy</h1>
          <p className="ml-page-updated">Last updated: to be confirmed</p>
        </header>

        <div className="ml-prose">
          <p className="ml-notice" role="note">
            <strong>Placeholder copy.</strong> This page is a structural
            placeholder. The wording below is illustrative only. Replace it with
            a policy that reflects what your business actually does before
            publishing.
          </p>

          <h2>What we collect</h2>
          <p>
            When you request a quote we collect the details you type into the
            form — your name, phone number, pickup and delivery locations, the
            goods you are moving, approximate weight and preferred date. You
            give us this information directly.
          </p>
          <p>
            We do not run analytics, advertising or tracking scripts on this
            website. See the cookie policy for details.
          </p>

          <h2>Why we use it</h2>
          <p>
            We use these details for one purpose: to prepare and send you a
            quote, and to arrange the transport if you accept it. We do not sell
            your information, and we do not use it for unrelated marketing.
          </p>

          <h2>Where it goes</h2>
          <p>
            The quote form builds an email and a WhatsApp message in your own
            browser and hands them to your email or messaging app. The
            information is not transmitted through a server we control. Once you
            send it, it reaches us through those third-party services.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiry details are kept only as long as needed to deal with your
            request and any resulting booking. Confirm your preferred retention
            period before publishing.
          </p>

          <h2>Sharing</h2>
          <p>
            We share details only where it is necessary to carry out the
            transport — for example with a driver or a subcontracted vehicle
            when that is required to complete a load. Add your own policy on
            sub-processors and cross-border transfers before publishing.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask us what information we hold about you, ask for
            corrections, or ask us to delete it. Contact us at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we will respond as soon
            as we can.
          </p>

          <h2>Security</h2>
          <p>
            Please do not send sensitive personal or commercial information
            through the quote form. We use the communication channels you choose
            when you submit a request.
          </p>

          <h2>Changes</h2>
          <p>
            If this policy changes we will update the date at the top of this
            page.
          </p>
        </div>

        <footer className="ml-page-foot">
          <Link className="ml-button ml-button-primary" to="/">
            Back to home
          </Link>
          <span className="ml-page-foot-links">
            <Link to="/terms">Terms of service</Link>
            <Link to="/cookies">Cookie policy</Link>
          </span>
        </footer>
      </div>
    </article>
  );
}
