import Portfolio from '@/lib/actions/portfolio'
import Card from '../ui/card'
import { transformMedia } from '@/lib/helper/transformMedia'
import React from 'react'
import ModalImage from '../ui/ModalImage'

const portfolio = await Portfolio()
const education = portfolio.education

export default function Education() {
  return (
    <>
      {education?.education_items && (
        <Card id="education" className="text-center space-y-5 ">
          {education.education_items.map((item) => {
            const certMedia = transformMedia(item.certification_image)
            return (
              <div key={item.id} className="p-5">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <h4 className="text-md">{item.date}</h4>
                {certMedia && certMedia.url && (
                  <ModalImage
                    src={certMedia.url}
                    alt={certMedia.alt || item.title || 'Certification Image'}
                    width={200}
                    height={200}
                    thumbClassName="mx-auto my-5 hover:shadow-lg transition duration-300 hover:scale-105 border-2 border-border "
                  />
                )}
              </div>
            )
          })}
        </Card>
      )}
    </>
  )
}
