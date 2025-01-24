import { PortableTextReactComponents } from '@portabletext/react';

const customPortableText: Partial<PortableTextReactComponents> = {
    block: {
        normal: ({ children }) => <p className="text-base leading-relaxed">{children}</p>,
        h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
        h4: ({ children }) => <h4 className="text-lg font-bold mb-2">{children}</h4>,
        h5: ({ children }) => <h5 className="text-base font-semibold mb-1">{children}</h5>,
        h6: ({ children }) => <h6 className="text-base font-medium mb-1">{children}</h6>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
                {children}
            </blockquote>
        ),
        unstyled: ({ children }) => children,
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc pl-5 my-4">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal pl-5 my-4">{children}</ol>,
    },
    listItem: ({ children }) => <li className="mb-2">{children}</li>,
    marks: {
        em: ({ children }) => <em className="italic">{children}</em>,
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        underline: ({ children }) => <span className="underline">{children}</span>,
        link: ({ children, value }) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
            >
                {children}
            </a>
        ),
        'strike-through': ({ children }) => <del className="line-through">{children}</del>,
        code: ({ children }) => (
            <code className="bg-gray-100 rounded px-1 py-0.5 text-sm font-mono">
                {children}
            </code>
        ),
    },
};

export default customPortableText;