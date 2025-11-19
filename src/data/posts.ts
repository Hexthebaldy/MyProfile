export interface Post {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    tags: string[];
}

export const posts: Post[] = [
    {
        id: '1',
        title: 'The Art of Minimalism',
        excerpt: 'Exploring the beauty of less in a world of more.',
        content: `
      <p>Minimalism is not just about having fewer things; it's about making room for what truly matters. In design, this translates to clean lines, generous whitespace, and a focus on typography.</p>
      <p>When we strip away the unnecessary, we allow the essential to shine. This philosophy applies to code as much as it does to visual design.</p>
    `,
        date: 'October 24, 2023',
        readTime: '5 min read',
        tags: ['Design', 'Philosophy'],
    },
    {
        id: '2',
        title: 'Designing for the Dark',
        excerpt: 'Why dark mode is more than just a color flip.',
        content: `
      <p>Dark interfaces evoke a sense of mystery and elegance. They reduce eye strain in low-light environments and can save battery life on OLED screens.</p>
      <p>However, designing for dark mode requires careful consideration of contrast and color saturation. Pure black is often too harsh; deep grays and navies provide a softer, more luxurious feel.</p>
    `,
        date: 'November 12, 2023',
        readTime: '7 min read',
        tags: ['Design', 'UI/UX'],
    },
    {
        id: '3',
        title: 'The Future of Web Interactions',
        excerpt: 'Micro-interactions and the feel of software.',
        content: `
      <p>The difference between a good app and a great one often lies in the details. Micro-interactions—those subtle animations that respond to user input—make software feel alive.</p>
      <p>From the satisfying click of a button to the smooth transition between pages, these details build trust and delight.</p>
    `,
        date: 'December 05, 2023',
        readTime: '4 min read',
        tags: ['Technology', 'Interaction'],
    },
    {
        id: '4',
        title: 'Silence in Code',
        excerpt: 'Writing code that speaks by doing less.',
        content: `
      <p>Great code is often silent. It doesn't scream for attention with complex logic or flashy tricks. It simply works, efficiently and quietly.</p>
      <p>Refactoring is the art of silencing the noise in your codebase.</p>
    `,
        date: 'January 15, 2024',
        readTime: '3 min read',
        tags: ['Coding', 'Philosophy'],
    },
];
