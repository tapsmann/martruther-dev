import {
  IconArrowRight,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { Link } from "react-router";

import {
  ADDRESS_LINES,
  EMAIL,
  HOURS,
  LOGO_URL,
  PHONE_PRIMARY,
  PHONE_PRIMARY_HREF,
  PHONE_SECONDARY,
  PHONE_SECONDARY_HREF,
  WHATSAPP_URL,
} from "@/lib/site";

const SERVICES_LINKS = [
  { label: "30 tonne haulage", hash: "services" },
  { label: "15 tonne haulage", hash: "services" },
  { label: "Part loads", hash: "services" },
  { label: "Same-day runs", hash: "services" },
  { label: "Our fleet", hash: "fleet" },
];

const COMPANY_LINKS = [
  { label: "About us", hash: "about" },
  { label: "Our team", hash: "about" },
  { label: "Fleet", hash: "fleet" },
  { label: "Request a quote", hash: "contact" },
];

const LEGAL_LINKS = [
  { label: "Terms of service", to: "/terms" },
  { label: "Privacy policy", to: "/privacy" },
  { label: "Cookie policy", to: "/cookies" },
];

/** Footer. Sits on warm paper to mirror the translucent header. */
export function SiteFooter() {
  return (
    <footer className="ml-footer">
      <div className="ml-container ml-footer-inner">
        <div className="ml-footer-top">
          <div className="ml-footer-brand-col">
            <Link className="ml-brand ml-footer-brand" to="/">
              <img src={LOGO_URL} alt="" className="ml-brand-mark" />
              <span className="ml-brand-copy">
                <strong>MARTRUTHER</strong>
                <span>LOGISTICS</span>
              </span>
            </Link>
            <p className="ml-footer-tagline">
              Reliable freight and haulage across Zimbabwe, run from Harare by a
              small team that keeps every load accountable.
            </p>
            <div className="ml-footer-hours">
              <p className="ml-footer-hours-title">Working days</p>
              <dl>
                {Object.values(HOURS).map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd className={row.closed ? "is-closed" : undefined}>
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="ml-footer-col">
            <p className="ml-footer-col-title">Services</p>
            <ul>
              {SERVICES_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={`/#${item.hash}`} preventScrollReset>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-footer-col">
            <p className="ml-footer-col-title">Company</p>
            <ul>
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={`/#${item.hash}`} preventScrollReset>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  WhatsApp us <IconArrowRight size={13} />
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-footer-col">
            <p className="ml-footer-col-title">Get in touch</p>
            <div className="ml-footer-contact">
              <a href={PHONE_PRIMARY_HREF}>
                <IconPhone size={16} />
                <span>{PHONE_PRIMARY}</span>
              </a>
              <a href={PHONE_SECONDARY_HREF}>
                <IconPhone size={16} />
                <span>{PHONE_SECONDARY}</span>
              </a>
              <a href={`mailto:${EMAIL}`}>
                <IconMail size={16} />
                <span>{EMAIL}</span>
              </a>
              <span>
                <IconMapPin size={16} />
                <span>
                  {ADDRESS_LINES[0]}
                  <br />
                  {ADDRESS_LINES[1]}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="ml-footer-bottom">
          <div className="ml-footer-details">
            <span>
              <IconClock size={15} /> Mon&ndash;Sat, 07:00&ndash;17:00
            </span>
            <span>
              <IconMapPin size={15} /> {ADDRESS_LINES[1]}
            </span>
          </div>
          <nav className="ml-footer-legal" aria-label="Legal">
            {LEGAL_LINKS.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
          <span className="ml-footer-year">
            &copy; {new Date().getFullYear()} Martruther Logistics
          </span>
        </div>
      </div>
    </footer>
  );
}
