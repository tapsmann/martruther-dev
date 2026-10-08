import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconBuildingWarehouse,
  IconCheck,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconRoute,
  IconShieldCheck,
  IconTruck,
} from "@tabler/icons-react";
import { useState, type FormEvent } from "react";

import { APP_TITLE } from "@/lib/app-config";
import {
  EMAIL,
  PHONE_PRIMARY,
  PHONE_PRIMARY_HREF,
  PHONE_SECONDARY,
  PHONE_SECONDARY_HREF,
  WHATSAPP_URL,
} from "@/lib/site";

export function meta() {
  return [
    { title: APP_TITLE },
    {
      name: "description",
      content:
        "Reliable freight and haulage from Martruther Logistics in Harare. Request a quote for 15T and 30T transport across Zimbabwe.",
    },
  ];
}

const serviceOptions = [
  "Full truckload (FTL)",
  "Part loads",
  "Same-day / next-day runs",
  "Scheduled contracts",
];

const values = [
  {
    number: "01",
    title: "Punctuality",
    text: "Clear ETAs and dependable handovers.",
  },
  {
    number: "02",
    title: "Safety",
    text: "Careful handling from loading to delivery.",
  },
  {
    number: "03",
    title: "Communication",
    text: "One responsive point of contact.",
  },
];

export default function HomeRoute() {
  const [submitted, setSubmitted] = useState(false);

  function handleQuoteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const pickup = String(form.get("pickup") ?? "");
    const delivery = String(form.get("delivery") ?? "");
    const goods = String(form.get("goods") ?? "");
    const weight = String(form.get("weight") ?? "");
    const date = String(form.get("date") ?? "");
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const subject = encodeURIComponent(
      `Quote request: ${pickup} to ${delivery}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nPickup: ${pickup}\nDelivery: ${delivery}\nGoods: ${goods}\nWeight: ${weight}\nPreferred date: ${date}`,
    );

    setSubmitted(true);
    window.open(
      `https://wa.me/263771191655?text=${body}`,
      "_blank",
      "noopener,noreferrer",
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <section className="ml-hero" id="top">
        <div className="ml-container ml-hero-grid">
          <div className="ml-hero-copy">
            <p className="ml-kicker">
              <span className="ml-kicker-line" /> Harare-based freight partner
            </p>
            <h1>
              Freight that arrives with <em>confidence.</em>
            </h1>
            <p className="ml-hero-lede">
              Reliable freight and haulage for businesses that need a capable
              team, a clear ETA, and no surprises on the road.
            </p>
            <div className="ml-hero-actions">
              <a className="ml-button ml-button-primary" href="#contact">
                Get a quote <IconArrowRight size={18} />
              </a>
              <a
                className="ml-text-link ml-light-link"
                href={PHONE_PRIMARY_HREF}
              >
                <IconPhone size={17} /> {PHONE_PRIMARY}
              </a>
            </div>
            <div className="ml-hero-note">
              <span className="ml-live-dot" /> Quotes answered within 2 hours
              during operating hours
            </div>
          </div>

          <div
            className="ml-dispatch-board"
            aria-label="Martruther Logistics dispatch overview"
          >
            <div className="ml-board-topline">
              <span>DISPATCH / 2022â€”NOW</span>
              <span>MTLâ€”01</span>
            </div>
            <div className="ml-board-route">
              <div className="ml-route-label ml-route-start">
                <span className="ml-route-dot" />
                HARARE
              </div>
              <div className="ml-route-line">
                <span />
                <span />
                <span />
              </div>
              <div className="ml-route-label ml-route-end">
                <span className="ml-route-dot ml-route-dot-end" />
                ZIMBABWE
              </div>
            </div>
            <div className="ml-board-truck">
              <IconTruck size={96} stroke={1.1} />
              <div className="ml-board-wheel wheel-one" />
              <div className="ml-board-wheel wheel-two" />
            </div>
            <div className="ml-board-footer">
              <span>2 TRUCKS</span>
              <span>15T + 30T</span>
              <span>
                <IconShieldCheck size={16} /> INSURED
              </span>
            </div>
          </div>
        </div>
        <div className="ml-hero-grid-lines" aria-hidden="true" />
      </section>

      <section className="ml-trust-strip" aria-label="Company highlights">
        <div className="ml-container ml-trust-grid">
          <div className="ml-trust-item">
            <strong>
              30T <span>&amp;</span> 15T
            </strong>
            <span>capacity available</span>
          </div>
          <div className="ml-trust-item">
            <strong>
              Fully licensed <span>&amp;</span> insured
            </strong>
            <span>credentials available on request</span>
          </div>
          <div className="ml-trust-item">
            <strong>Harare based</strong>
            <span>Zimbabwe routes by arrangement</span>
          </div>
          <div className="ml-trust-item ml-trust-contact">
            <IconPhone size={18} />
            <a href={PHONE_PRIMARY_HREF}>{PHONE_PRIMARY}</a>
          </div>
        </div>
      </section>

      <section id="services" className="ml-section ml-section-light">
        <div className="ml-container">
          <div className="ml-section-heading ml-heading-split">
            <div>
              <p className="ml-kicker ml-kicker-dark">
                <span className="ml-kicker-line" /> What we move
              </p>
              <h2>
                The right truck for the <em>job at hand.</em>
              </h2>
            </div>
            <p className="ml-section-intro">
              From construction materials to time-sensitive deliveries, we match
              the load to the truck and the route to your schedule.
            </p>
          </div>

          <div className="ml-service-grid">
            <article className="ml-service-card ml-service-card-dark">
              <div className="ml-card-top">
                <span>01 / HEAVY HAULAGE</span>
                <IconTruck size={22} />
              </div>
              <div className="ml-service-capacity">
                30<span>T</span>
              </div>
              <h3>30 Tonne Truck</h3>
              <p>
                For bulk haulage, palletized freight, construction materials,
                and long-haul work that needs serious capacity.
              </p>
              <div className="ml-service-tags">
                <span>Bulk loads</span>
                <span>Long-haul</span>
                <span>Construction</span>
              </div>
            </article>
            <article className="ml-service-card ml-service-card-amber">
              <div className="ml-card-top">
                <span>02 / AGILE DELIVERY</span>
                <IconRoute size={22} />
              </div>
              <div className="ml-service-capacity">
                15<span>T</span>
              </div>
              <h3>15 Tonne Truck</h3>
              <p>
                For smaller loads, local deliveries, last-mile distribution, and
                time-sensitive runs around your operation.
              </p>
              <div className="ml-service-tags">
                <span>Local loads</span>
                <span>Last-mile</span>
                <span>Fast turnarounds</span>
              </div>
            </article>
          </div>

          <div className="ml-offering-row">
            <span className="ml-offering-label">Available on request</span>
            <div className="ml-offering-options">
              {serviceOptions.map((option) => (
                <span key={option}>
                  <IconCheck size={15} /> {option}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="ml-section ml-about-section">
        <div className="ml-container ml-about-grid">
          <div className="ml-about-intro">
            <p className="ml-kicker ml-kicker-dark">
              <span className="ml-kicker-line" /> A small team, properly
              committed
            </p>
            <h2>
              Built to be the part of transport you{" "}
              <em>don't have to worry about.</em>
            </h2>
            <p>
              Martruther Logistics was established in 2022 by Martin Mahere with
              a straightforward belief: trust is earned in the details. We are
              growing carefully, keeping communication close and every load
              accountable.
            </p>
            <div className="ml-address">
              <IconMapPin size={19} />
              <span>
                1401 3rd Avenue, Glen View 1<br />
                Harare, Zimbabwe
              </span>
            </div>
          </div>
          <div className="ml-about-side">
            <div className="ml-people-card">
              <div className="ml-card-top">
                <span>THE PEOPLE BEHIND THE LOAD</span>
                <IconBuildingWarehouse size={21} />
              </div>
              <div className="ml-person">
                <span>Owner &amp; CEO</span>
                <strong>Martin Mahere</strong>
              </div>
              <div className="ml-person">
                <span>Finance Manager</span>
                <strong>Ruth Washaya</strong>
              </div>
              <div className="ml-person">
                <span>Administrator</span>
                <strong>Steven Washaya</strong>
              </div>
            </div>
            <div className="ml-values-row">
              {values.map((value) => (
                <div className="ml-value" key={value.number}>
                  <span>{value.number}</span>
                  <strong>{value.title}</strong>
                  <p>{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" className="ml-section ml-fleet-section">
        <div className="ml-container">
          <div className="ml-section-heading ml-heading-split ml-fleet-heading">
            <div>
              <p className="ml-kicker">
                <span className="ml-kicker-line" /> Our working fleet
              </p>
              <h2>
                Two trucks. <em>Ready to work.</em>
              </h2>
            </div>
            <p className="ml-section-intro">
              A focused fleet means direct attention, practical planning, and
              equipment selected for the work we take on.
            </p>
          </div>
          <div className="ml-fleet-grid">
            <article className="ml-fleet-card">
              <div className="ml-fleet-visual ml-fleet-visual-heavy">
                <span>MTL / 30</span>
              </div>
              <div className="ml-fleet-details">
                <div>
                  <span className="ml-fleet-label">HEAVY HAULAGE</span>
                  <h3>30 Tonne Truck</h3>
                </div>
                <span className="ml-fleet-index">01</span>
              </div>
              <dl>
                <div>
                  <dt>Best for</dt>
                  <dd>Bulk and long-haul</dd>
                </div>
                <div>
                  <dt>Load type</dt>
                  <dd>Palletized / materials</dd>
                </div>
                <div>
                  <dt>Availability</dt>
                  <dd>Scheduled or quoted</dd>
                </div>
              </dl>
            </article>
            <article className="ml-fleet-card">
              <div className="ml-fleet-visual ml-fleet-visual-light">
                <span>MTL / 15</span>
              </div>
              <div className="ml-fleet-details">
                <div>
                  <span className="ml-fleet-label">AGILE DELIVERY</span>
                  <h3>15 Tonne Truck</h3>
                </div>
                <span className="ml-fleet-index">02</span>
              </div>
              <dl>
                <div>
                  <dt>Best for</dt>
                  <dd>Local and last-mile</dd>
                </div>
                <div>
                  <dt>Load type</dt>
                  <dd>Smaller commercial loads</dd>
                </div>
                <div>
                  <dt>Availability</dt>
                  <dd>Same-day by arrangement</dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="ml-section ml-contact-section">
        <div className="ml-container ml-contact-grid">
          <div className="ml-contact-copy">
            <p className="ml-kicker">
              <span className="ml-kicker-line" /> Start the conversation
            </p>
            <h2>
              Tell us where it needs to <em>go.</em>
            </h2>
            <p>
              Share the essentials and we will come back with a practical route
              and competitive quote.
            </p>
            <div className="ml-contact-list">
              <a href={PHONE_PRIMARY_HREF}>
                <IconPhone size={19} />
                <span>
                  {PHONE_PRIMARY}
                  <small>Primary line</small>
                </span>
              </a>
              <a href={PHONE_SECONDARY_HREF}>
                <IconPhone size={19} />
                <span>
                  {PHONE_SECONDARY}
                  <small>Alternative line</small>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`}>
                <IconMail size={19} />
                <span>
                  {EMAIL}
                  <small>Email us anytime</small>
                </span>
              </a>
            </div>
            <a
              className="ml-whatsapp-link"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandWhatsapp size={19} /> Message us on WhatsApp{" "}
              <IconArrowRight size={16} />
            </a>
          </div>

          <form className="ml-quote-form" onSubmit={handleQuoteSubmit}>
            <div className="ml-form-heading">
              <span>QUOTE REQUEST</span>
              <span>01 / 01</span>
            </div>
            <div className="ml-form-grid">
              <label>
                <span>Pickup location</span>
                <input name="pickup" placeholder="e.g. Harare" required />
              </label>
              <label>
                <span>Delivery location</span>
                <input name="delivery" placeholder="e.g. Bulawayo" required />
              </label>
              <label>
                <span>Goods type</span>
                <input
                  name="goods"
                  placeholder="What are you moving?"
                  required
                />
              </label>
              <label>
                <span>Approx. weight</span>
                <input name="weight" placeholder="e.g. 12 tonnes" required />
              </label>
              <label>
                <span>Preferred date</span>
                <input name="date" type="date" required />
              </label>
              <label>
                <span>Your name</span>
                <input name="name" placeholder="Contact name" required />
              </label>
              <label className="ml-form-full">
                <span>Phone number</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Best number to reach you"
                  required
                />
              </label>
            </div>
            <button type="submit" className="ml-button ml-button-submit">
              {submitted ? "Opening your emailâ€¦" : "Send quote request"}{" "}
              <IconArrowRight size={18} />
            </button>
            <p className="ml-form-note">
              Your request opens a prefilled email and WhatsApp message. For
              urgent loads, call or WhatsApp.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
