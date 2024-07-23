import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_6VmRHOk4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"the-art-of-cooking\">The Art of Cooking</h1>\n<p>Cooking is not just about preparing meals; it’s a creative and rewarding experience. Let’s delve into the art of cooking and the joy it brings:</p>\n<ul>\n<li>\n<p><strong>Experiment with Flavors</strong>\r\nMix and match ingredients to create unique flavor combinations that tantalize your taste buds.</p>\n</li>\n<li>\n<p><strong>Embrace Cultural Cuisine</strong>\r\nExplore recipes from around the world and learn about different culinary traditions and techniques.</p>\n</li>\n<li>\n<p><strong>Cooking as Therapy</strong>\r\nFind solace in the rhythmic chopping of vegetables and the soothing process of creating a delicious dish.</p>\n</li>\n<li>\n<p><strong>Share the Love</strong>\r\nCooking for others is a way to show love and care. Share your culinary creations with friends and family.</p>\n</li>\n<li>\n<p><strong>The Joy of Baking</strong>\r\nIndulge in the sweet aroma of freshly baked goods and the satisfaction of creating something from scratch.</p>\n</li>\n</ul>\n<p>Join me on a culinary journey and discover the artistry and joy of cooking in your own kitchen.</p>";

				const frontmatter = {"title":"The Art of Cooking","image":"https://picsum.photos/seed/cooking/300/200","description":"Discover the joy of creating delicious dishes in your kitchen."};
				const file = "C:/Users/Arun/Documents/wiseconcern/src/content/blogs/The Art of Cooking.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# The Art of Cooking\r\n\r\nCooking is not just about preparing meals; it's a creative and rewarding experience. Let's delve into the art of cooking and the joy it brings:\r\n\r\n- **Experiment with Flavors**\r\n  Mix and match ingredients to create unique flavor combinations that tantalize your taste buds.\r\n\r\n- **Embrace Cultural Cuisine**\r\n  Explore recipes from around the world and learn about different culinary traditions and techniques.\r\n\r\n- **Cooking as Therapy**\r\n  Find solace in the rhythmic chopping of vegetables and the soothing process of creating a delicious dish.\r\n\r\n- **Share the Love**\r\n  Cooking for others is a way to show love and care. Share your culinary creations with friends and family.\r\n\r\n- **The Joy of Baking**\r\n  Indulge in the sweet aroma of freshly baked goods and the satisfaction of creating something from scratch.\r\n\r\nJoin me on a culinary journey and discover the artistry and joy of cooking in your own kitchen.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"the-art-of-cooking","text":"The Art of Cooking"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
