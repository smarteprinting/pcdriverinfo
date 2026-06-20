import { Metadata } from 'next';

export function constructMetadata({
  title = 'PC Driver Info - Clear, plain-English driver guides',
  description = 'Your trusted resource for understanding printer drivers, troubleshooting issues, and finding clear answers without technical complexity.',
  image = '/og-image.png',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      siteName: 'PC Driver Info',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    metadataBase: new URL('https://pcdriverinfo.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
