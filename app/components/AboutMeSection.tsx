import { PortableText } from '@portabletext/react';
import customPortableText from './PortableText';
import { Author } from '@/sanity.types'

interface AboutMeSectionProps {
    author: Author;
}

function AboutMeSection({ author }: AboutMeSectionProps) {
    return (
        <section className="mt-10">
            {author?.bio && (
                <div className="mb-4">
                    <PortableText
                        value={author.bio}
                        components={customPortableText}
                    />
                </div>
            )}
        </section>
    )
}

export default AboutMeSection