import Image from 'next/image'
import Card from '../ui/card'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Portfolio from '@/lib/actions/portfolio'
import { transformMedia } from '@/lib/helper/transformMedia'

const portfolio = await Portfolio()
const about = portfolio.about
const aboutImage = transformMedia(about.profile_image_small)

export default function About() {
  return (
    <>
      <Card id="about">
        <h2 className="text-2xl font-bold text-center p-2">About Me</h2>
        <div className="flex flex-col justify-center items-center my-5">
          <Image
            src={aboutImage!.url}
            alt={aboutImage?.alt || portfolio.header.name}
            width={200}
            height={200}
            className="border-border border-2 shadow-2xl"
          />
        </div>
        <div>
          <RichText data={about.about} className="p-5 max-w-5xl mx-auto" />
        </div>
      </Card>
    </>
  )
}
