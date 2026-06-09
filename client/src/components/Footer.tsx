import { Link } from "react-router-dom"
import { Bike } from "lucide-react"
import { footerData } from "../assets/assets"

const Footer = () => {
  return (
    <footer className="bg-app-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/20">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Bike className="size-5 text-white" />
              <span className="text-lg font-semibold">{footerData.brand.name}</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              {footerData.brand.description}
            </p>
            <div className="flex items-center gap-3 mt-1">
              {footerData.brand.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-8 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors duration-200"
                >
                  <social.icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Customer Service */}
          {footerData.sections.map((section, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-5">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    {"to" in link ? (
                      <Link
                        to={link.to!}
                        className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={"href" in link ? link.href : "#"}
                        className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {footerData.contact.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                  <item.icon className="size-4 mt-0.5 shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            {footerData.bottom.copyright}
          </p>
          <div className="flex items-center gap-4">
            {footerData.bottom.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer