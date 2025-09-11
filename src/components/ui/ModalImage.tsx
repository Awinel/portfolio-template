'use client'

import React, { useState } from 'react'

interface ModalImageProps {
  src: string
  alt?: string
  thumbClassName?: string
  imgClassName?: string
  width?: number
  height?: number
}

export default function ModalImage({
  src,
  alt = '',
  thumbClassName = '',
  imgClassName = '',
  width = 200,
  height = 200,
}: ModalImageProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-pointer ${thumbClassName}`}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div className="relative overflow-auto max-h-screen max-w-screen p-2">
            <img
              src={src}
              alt={alt}
              className={`w-auto h-auto max-h-[90vh] max-w-[90vw] p-5 ${imgClassName}`}
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={(e) => {
                e.stopPropagation()
                setOpen(false)
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  )
}
