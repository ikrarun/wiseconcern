import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_6VmRHOk4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"the-enchanting-world-of-astronomy\">The Enchanting World of Astronomy</h1>\n<p>Embark on a cosmic journey through the vast expanse of the universe and explore the wonders of astronomy:</p>\n<h2 id=\"unveiling-the-mysteries-of-the-cosmos\">Unveiling the Mysteries of the Cosmos</h2>\n<p>Dive into the mysteries of the cosmos, from distant galaxies to sparkling stars, and unravel the secrets of the universe.</p>\n<h2 id=\"stargazing-adventures\">Stargazing Adventures</h2>\n<p>Immerse yourself in the beauty of the night sky and embark on stargazing adventures to witness meteor showers, eclipses, and celestial phenomena.</p>\n<h2 id=\"the-dance-of-planets\">The Dance of Planets</h2>\n<p>Discover the intricate dance of planets as they orbit the sun, creating mesmerizing patterns in the night sky and shaping our understanding of the solar system.</p>\n<h2 id=\"cosmic-phenomena\">Cosmic Phenomena</h2>\n<p>Explore cosmic phenomena such as black holes, supernovae, and nebulae, and marvel at the awe-inspiring forces that shape the universe.</p>\n<h2 id=\"astronomical-discoveries\">Astronomical Discoveries</h2>\n<p>Learn about groundbreaking astronomical discoveries that have reshaped our understanding of the cosmos and expanded the frontiers of human knowledge.</p>\n<h2 id=\"the-poetry-of-the-stars\">The Poetry of the Stars</h2>\n<p>Contemplate the poetic beauty of the stars, constellations, and celestial bodies that have inspired art, literature, and human imagination throughout history.</p>\n<p>Embark on a celestial adventure and let the enchanting world of astronomy ignite your curiosity and wonder about the universe.</p>";

				const frontmatter = {"title":"The Enchanting World of Astronomy","image":"https://picsum.photos/seed/astronomy/300/200","description":"Embark on a cosmic journey through the wonders of the universe."};
				const file = "C:/Users/Arun/Documents/wiseconcern/src/content/blogs/The Enchanting World of Astronomy.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# The Enchanting World of Astronomy\r\n\r\nEmbark on a cosmic journey through the vast expanse of the universe and explore the wonders of astronomy:\r\n\r\n## Unveiling the Mysteries of the Cosmos\r\n\r\nDive into the mysteries of the cosmos, from distant galaxies to sparkling stars, and unravel the secrets of the universe.\r\n\r\n## Stargazing Adventures\r\n\r\nImmerse yourself in the beauty of the night sky and embark on stargazing adventures to witness meteor showers, eclipses, and celestial phenomena.\r\n\r\n## The Dance of Planets\r\n\r\nDiscover the intricate dance of planets as they orbit the sun, creating mesmerizing patterns in the night sky and shaping our understanding of the solar system.\r\n\r\n## Cosmic Phenomena\r\n\r\nExplore cosmic phenomena such as black holes, supernovae, and nebulae, and marvel at the awe-inspiring forces that shape the universe.\r\n\r\n## Astronomical Discoveries\r\n\r\nLearn about groundbreaking astronomical discoveries that have reshaped our understanding of the cosmos and expanded the frontiers of human knowledge.\r\n\r\n## The Poetry of the Stars\r\n\r\nContemplate the poetic beauty of the stars, constellations, and celestial bodies that have inspired art, literature, and human imagination throughout history.\r\n\r\nEmbark on a celestial adventure and let the enchanting world of astronomy ignite your curiosity and wonder about the universe.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"the-enchanting-world-of-astronomy","text":"The Enchanting World of Astronomy"},{"depth":2,"slug":"unveiling-the-mysteries-of-the-cosmos","text":"Unveiling the Mysteries of the Cosmos"},{"depth":2,"slug":"stargazing-adventures","text":"Stargazing Adventures"},{"depth":2,"slug":"the-dance-of-planets","text":"The Dance of Planets"},{"depth":2,"slug":"cosmic-phenomena","text":"Cosmic Phenomena"},{"depth":2,"slug":"astronomical-discoveries","text":"Astronomical Discoveries"},{"depth":2,"slug":"the-poetry-of-the-stars","text":"The Poetry of the Stars"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
