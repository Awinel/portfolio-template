import type { Media } from '@/payload-types'

export type FrontendMedia = {
  id: number | string
  url: string
  alt: string
  width?: number
  height?: number
}

export function transformMedia(media: Media | number | null | undefined): FrontendMedia | null {
  if (!media || typeof media === 'number' || !('url' in media)) return null

  return {
    id: media.id,
    url: media.url ?? '', // ensure url is always a string
    alt: media.alt ?? '',
    width: media.width ?? undefined,
    height: media.height ?? undefined,
  }
}
