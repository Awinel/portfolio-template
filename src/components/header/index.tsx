import clsx from 'clsx'
import Portfolio from '@/lib/actions/portfolio'
import { transformMedia } from '@/lib/helper/transformMedia'
import Image from 'next/image'

const portfolio = await Portfolio()
const header = portfolio.header
const headerImage = transformMedia(portfolio.header.header_image_small)
const backgroundImage = transformMedia(portfolio.header.background_image)

export default function Header() {
  return (
    <header
      className={clsx('sticky top-0 h-screen z-0', {
        'bg-cover': backgroundImage?.url,
      })}
      style={backgroundImage?.url ? { backgroundImage: `url(${backgroundImage.url})` } : undefined}
    >
      <div className="relative top-30 text-center space-y-5">
        <h1 className="text-foreground text-4xl font-bold">{header.name}</h1>
        <div className="relative w-fit m-auto">
          <h2 className="animate-typing text-2xl font-bold">{header.profession}</h2>
        </div>
      </div>

      {headerImage?.url && (
        <Image
          src={headerImage!.url}
          alt={headerImage!.alt || header.name}
          width={600}
          height={600}
          className="mask-b-from-80% relative top-50"
        />
      )}
    </header>
  )
}
