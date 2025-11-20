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
  {
    id: '5',
    title: 'The AI Renaissance',
    excerpt: 'How generative models are reshaping creativity and logic.',
    content: `
      <p>We are witnessing a paradigm shift. Artificial Intelligence is no longer just a tool for optimization; it has become a partner in creation.</p>
      <p>From generating art to debugging complex systems, AI is expanding the boundaries of what is possible. The question is no longer "what can AI do?" but "what will we do with it?"</p>
    `,
    date: 'February 02, 2024',
    readTime: '6 min read',
    tags: ['Technology', 'AI'],
  },
  {
    id: '6',
    title: 'Kyoto: A Timeless Journey',
    excerpt: 'Wandering through the ancient streets of Gion and Arashiyama.',
    content: `
      <p>Kyoto is a city where time seems to stand still. The rustle of bamboo in Arashiyama, the golden reflection of Kinkaku-ji, and the quiet dignity of Gion's wooden machiya.</p>
      <p>It is a place that teaches you to slow down, to observe, and to appreciate the fleeting beauty of the seasons.</p>
    `,
    date: 'February 18, 2024',
    readTime: '8 min read',
    tags: ['Travel'],
  },
  {
    id: '7',
    title: 'The Gig Economy Shift',
    excerpt: 'Navigating the new landscape of freelance and remote work.',
    content: `
      <p>The traditional 9-to-5 is fading. In its place, a dynamic gig economy is rising, driven by digital platforms and a desire for flexibility.</p>
      <p>While it offers freedom, it also brings uncertainty. Understanding the economics of this shift is crucial for the modern worker.</p>
    `,
    date: 'March 05, 2024',
    readTime: '5 min read',
    tags: ['Economy', 'Work'],
  },
  {
    id: '8',
    title: 'Quantum Leaps',
    excerpt: 'Understanding the basics of quantum computing.',
    content: `
      <p>Quantum computing promises to solve problems that are currently impossible for classical computers. By leveraging superposition and entanglement, these machines operate on a different level of reality.</p>
      <p>We are still in the early stages, but the potential to revolutionize medicine, cryptography, and materials science is immense.</p>
    `,
    date: 'March 22, 2024',
    readTime: '10 min read',
    tags: ['Technology', 'Science'],
  },
  {
    id: '9',
    title: 'Patagonia: Edge of the World',
    excerpt: 'Hiking the rugged trails of Torres del Paine.',
    content: `
      <p>Patagonia is raw, untamed nature. The wind howls across the steppe, and the granite towers of Torres del Paine pierce the sky.</p>
      <p>It is a reminder of our smallness in the face of the earth's grandeur. A journey here is not just a vacation; it is a pilgrimage to the wild.</p>
    `,
    date: 'April 10, 2024',
    readTime: '12 min read',
    tags: ['Travel', 'Nature'],
  },
  {
    id: '10',
    title: 'Crypto Winter & Spring',
    excerpt: 'Cyclical patterns in the digital asset market.',
    content: `
      <p>The cryptocurrency market is defined by its volatility. Booms are followed by busts, "winters" by "springs".</p>
      <p>Beyond the speculation lies a robust technology: blockchain. As the hype settles, the real utility of decentralized finance (DeFi) is beginning to emerge.</p>
    `,
    date: 'April 28, 2024',
    readTime: '7 min read',
    tags: ['Economy', 'Crypto'],
  },
  {
    id: '11',
    title: 'Sustainable Tech',
    excerpt: 'Innovations driving a greener future.',
    content: `
      <p>Technology is often blamed for environmental damage, but it is also our best hope for salvation. From carbon capture to advanced battery storage, green tech is accelerating.</p>
      <p>The intersection of ecology and engineering is where the most vital work of our century is happening.</p>
    `,
    date: 'May 15, 2024',
    readTime: '6 min read',
    tags: ['Technology', 'Environment'],
  },
  {
    id: '12',
    title: 'Digital Nomadism in Lisbon',
    excerpt: 'Why Portugal has become the hub for remote workers.',
    content: `
      <p>Lisbon offers the perfect blend of culture, climate, and connectivity. It has become a magnet for digital nomads seeking a high quality of life.</p>
      <p>But this influx brings challenges, from rising housing costs to gentrification. Balancing local needs with global trends is the city's next great test.</p>
    `,
    date: 'June 01, 2024',
    readTime: '9 min read',
    tags: ['Travel', 'Lifestyle'],
  },
  {
    id: '13',
    title: 'Inflation Dynamics',
    excerpt: 'Unpacking the causes and effects of rising prices.',
    content: `
      <p>Inflation is the silent thief of purchasing power. Understanding its root causes—supply chain shocks, monetary policy, demand surges—is key to financial literacy.</p>
      <p>In a globalized economy, a butterfly flapping its wings in one market can cause a hurricane of price hikes in another.</p>
    `,
    date: 'June 20, 2024',
    readTime: '8 min read',
    tags: ['Economy', 'Finance'],
  },
  {
    id: '14',
    title: 'The Web3 Promise',
    excerpt: 'Decentralization and the next era of the internet.',
    content: `
      <p>Web3 represents a vision of the internet where users own their data and identity. It is a reaction against the centralized silos of Web2.</p>
      <p>While still fraught with usability hurdles, the core ethos of permissionless innovation continues to drive developers forward.</p>
    `,
    date: 'July 08, 2024',
    readTime: '11 min read',
    tags: ['Technology', 'Web3'],
  }
];
