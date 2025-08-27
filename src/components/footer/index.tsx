import { transformMedia } from '@/lib/helper/transformMedia'
import Image from 'next/image'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import Portfolio from '@/lib/actions/portfolio'
import Link from 'next/link'

const portfolio = await Portfolio()
const footer = portfolio.footer

const footerLogo = transformMedia(footer.logo)

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col md:grid grid-cols-3 md:place-items-center justify-between items-center p-4 bg-primary-foreground border-2 border-border">
        {footer.social_links && (
          <div className="col-start-2 row-start-1">
            {footer.social_links.map((link) => (
              <Link key={link.id} href={link.url}>
                {link.platform}
              </Link>
            ))}
          </div>
        )}

        {footer.links && (
          <div className="col-start-2 row-start-2">
            {footer.links.map((link) => (
              <Link key={link.id} href={link.url}>
                {link.label}
              </Link>
            ))}
          </div>
        )}

        <div className="col-start-3">
          <ThemeToggle />
        </div>

        {footerLogo && (
          <div className="col-start-1 row-start-1">
            <Image
              src={footerLogo?.url}
              alt={footerLogo?.alt || 'Footer Logo'}
              width={100}
              height={100}
            />
          </div>
        )}

        <div className="col-start-2 row-start-3">
          &copy; {new Date().getFullYear()} {footer.copyright}
        </div>
      </footer>
    </>
  )
}
