import React from 'react'
import Portfolio from '@/lib/actions/portfolio'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import Image from 'next/image'
import { transformMedia } from '@/lib/helper/transformMedia'
import clsx from 'clsx'
import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'

export default async function HomePage() {
  const portfolio = await Portfolio()
  const headerImage = transformMedia(portfolio.header.header_image)
  const backgroundImage = transformMedia(portfolio.header.background_image)
  const aboutImage = transformMedia(portfolio.about.profile_image)
  const footerLogo = transformMedia(portfolio.footer.logo)
  const navLogo = transformMedia(portfolio.nav.logo)

  return (
    <>
      <header
        className={clsx({
          'bg-contain': backgroundImage?.url,
        })}
        style={
          backgroundImage?.url ? { backgroundImage: `url(${backgroundImage.url})` } : undefined
        }
      >
        <nav>
          <Image
            src={navLogo!.url}
            alt={navLogo?.alt || 'Navigation Logo'}
            width={100}
            height={100}
          />
          {portfolio.nav.links.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.label}
            </Link>
          ))}
          {portfolio.nav.buttons &&
            portfolio.nav.buttons.map((button) => (
              <Link key={button.id} href={button.url}>
                {button.label}
              </Link>
            ))}
        </nav>

        <h1 className="text-foreground">{portfolio.header.name}</h1>
        <h2>{portfolio.header.profession}</h2>

        {headerImage?.url && (
          <Image
            src={headerImage.url}
            alt={headerImage.alt || portfolio.header.name}
            width={100}
            height={100}
          />
        )}
      </header>
      <main>
        <section id="about">
          <div>
            <RichText data={portfolio.about.about} />
          </div>
          <div>
            <Image
              src={aboutImage!.url}
              alt={aboutImage?.alt || portfolio.header.name}
              width={100}
              height={100}
            />
          </div>
        </section>
        {portfolio.education?.education_items && (
          <section id="education">
            {portfolio.education.education_items.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <h4>{item.date}</h4>
              </div>
            ))}
          </section>
        )}

        {portfolio.skills?.skills_items && (
          <section id="skills">
            {portfolio.skills.skills_items.length > 0 && (
              <table>
                <thead>
                  <tr>
                    {[...new Set(portfolio.skills.skills_items.map((item) => item.type))].map(
                      (type) => (
                        <th key={type}>{type}</th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {[...new Set(portfolio.skills.skills_items.map((item) => item.type))].map(
                      (type) => (
                        <td key={type}>
                          {portfolio
                            .skills!.skills_items!.filter((item) => item.type === type)
                            .map((item) => (
                              <div key={item.id}>{item.name}</div>
                            ))}
                        </td>
                      ),
                    )}
                  </tr>
                </tbody>
              </table>
            )}
          </section>
        )}
        {portfolio.projects && (
          <section id="projects">
            {portfolio.projects?.projects_items && (
              <div>
                {portfolio.projects.projects_items.map((item) => (
                  <div key={item.id}>
                    <h3>{item.name}</h3>
                    <h4>{item.type}</h4>
                    <Link href={item.url}>View Project</Link>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </main>
      <footer>
        {footerLogo && (
          <div>
            <Image
              src={footerLogo?.url}
              alt={footerLogo?.alt || 'Footer Logo'}
              width={100}
              height={100}
            />
          </div>
        )}
        <div>{portfolio.footer.copyright}</div>
        {portfolio.footer.links && (
          <div>
            {portfolio.footer.links.map((link) => (
              <Link key={link.id} href={link.url}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
        {portfolio.footer.social_links && (
          <div>
            {portfolio.footer.social_links.map((link) => (
              <Link key={link.id} href={link.url}>
                {link.platform}
              </Link>
            ))}
          </div>
        )}

        <ThemeToggle />
      </footer>
    </>
  )
}
