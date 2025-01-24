import { urlFor } from '@/sanity/lib/image';
import { SanityAsset } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';

interface PortableTextImageProps {
    node: {
        asset: SanityAsset;
        alt?: string;
        className?: string;
        width: number;
        height: number;
    };
}

export default function PortableTextImage({ node }: PortableTextImageProps) {
    const url = urlFor(node.asset).url();
    const webpUrl = urlFor(node.asset).format('webp').url();
    const altText = node.alt ?? ""
    const className = node.className
    // const width = node.width
    // const height = node.height

    return (
        <picture>
            <source srcSet={webpUrl} type="image/webp" />
            <Image
                src={url}
                alt={altText}
                loading="lazy"
                layout="responsive"
                width={200}
                height={200}
                className={className}
            />
        </picture>
    );
}