import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_6VmRHOk4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"exploring-natures-beauty\">Exploring Nature’s Beauty</h1>\n<p>Nature has a way of captivating us with its beauty and serenity. Join me on a virtual journey through some of the most stunning landscapes:</p>\n<ul>\n<li>\n<p><strong>The Grand Canyon, USA</strong>\r\nWitness the awe-inspiring vastness and colorful rock formations of this natural wonder.</p>\n</li>\n<li>\n<p><strong>The Northern Lights, Iceland</strong>\r\nExperience the magical dance of vibrant colors in the night sky, a phenomenon that will leave you in awe.</p>\n</li>\n<li>\n<p><strong>Cherry Blossoms in Japan</strong>\r\nImmerse yourself in the delicate beauty of cherry blossoms in full bloom, a symbol of renewal and fleeting beauty.</p>\n</li>\n<li>\n<p><strong>The Great Barrier Reef, Australia</strong>\r\nDive into the vibrant underwater world of the world’s largest coral reef system, teeming with marine life.</p>\n</li>\n</ul>\n<p>Let’s take a moment to appreciate the wonders of nature and the peace it brings to our souls.</p>";

				const frontmatter = {"title":"Exploring Nature's Beauty","image":"https://picsum.photos/seed/nature/300/200","description":"A journey through the breathtaking landscapes of nature."};
				const file = "C:/Users/Arun/Documents/wiseconcern/src/content/blogs/Exploring Nature's Beauty.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# Exploring Nature's Beauty\r\n\r\nNature has a way of captivating us with its beauty and serenity. Join me on a virtual journey through some of the most stunning landscapes:\r\n\r\n- **The Grand Canyon, USA**\r\n  Witness the awe-inspiring vastness and colorful rock formations of this natural wonder.\r\n\r\n- **The Northern Lights, Iceland**\r\n  Experience the magical dance of vibrant colors in the night sky, a phenomenon that will leave you in awe.\r\n\r\n- **Cherry Blossoms in Japan**\r\n  Immerse yourself in the delicate beauty of cherry blossoms in full bloom, a symbol of renewal and fleeting beauty.\r\n\r\n- **The Great Barrier Reef, Australia**\r\n  Dive into the vibrant underwater world of the world's largest coral reef system, teeming with marine life.\r\n\r\nLet's take a moment to appreciate the wonders of nature and the peace it brings to our souls.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"exploring-natures-beauty","text":"Exploring Nature’s Beauty"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
