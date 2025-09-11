import Portfolio from '@/lib/actions/portfolio'
import { transformMedia } from '@/lib/helper/transformMedia'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

const portfolio = await Portfolio()
const nav = portfolio.nav
const navLogo = transformMedia(portfolio.nav.logo)

export default function Nav() {
  return (
    <>
      {nav.style === 'default' && (
        <nav className="flex justify-between items-center p-2 bg-primary-foreground shadow-2xl border-border border-2 fixed w-full top-0 left-0 z-10">
          <Link href="/">
            <Image
              src={navLogo!.url}
              alt={navLogo?.alt || 'Navigation Logo'}
              width={80}
              height={80}
            />
          </Link>

          {nav.links && (
            <div className="flex space-x-4">
              {nav.links.map((link) => (
                <Link key={link.id} href={link.url}>
                  {link.label}
                </Link>
              ))}
            </div>
          )}
          {nav.buttons && (
            <div className="flex space-x-4">
              {nav.buttons &&
                nav.buttons.map((button) => (
                  <Link key={button.id} href={button.url}>
                    {button.label}
                  </Link>
                ))}
            </div>
          )}
        </nav>
      )}
      {nav.style === 'o1' && (
        <nav className={clsx('flex p-2 justify-between items-center', {})}>
          <Link href="/" className="text-start">
            <Image
              src={navLogo!.url}
              alt={navLogo?.alt || 'Navigation Logo'}
              width={80}
              height={80}
            />
          </Link>

          <div className="flex justify-between items-center gap-5">
            {nav.links && (
              <div className="flex space-x-4">
                {nav.links.map((link) => (
                  <Link key={link.id} href={link.url}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            {nav.buttons && (
              <div className="flex space-x-4">
                {nav.buttons &&
                  nav.buttons.map((button) => (
                    <Link key={button.id} href={button.url}>
                      {button.label}
                    </Link>
                  ))}
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  )
}
