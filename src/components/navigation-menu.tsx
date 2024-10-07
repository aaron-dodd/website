import '@/styles/globals.css';

interface Props {
    items: {
        category: string,
        links: {
            text: string,
            href: string
        }[],
    }[],
}

export function NavigationMenu({ items }: Props) {
    return (
        <ul className="xs:flex md:block">{items.map((item, i) => {
            return (
                <li key={`category-${i}`}>
                    <div>{item.category}</div>
                    <ul>{item.links.map((link, j) => {
                        return (
                            <li key={`item-${j}`}><a className="bold underline" href={link.href}>{link.text}</a></li>
                        )
                    })}</ul>
                </li>
            );
        })}</ul>
    );
}