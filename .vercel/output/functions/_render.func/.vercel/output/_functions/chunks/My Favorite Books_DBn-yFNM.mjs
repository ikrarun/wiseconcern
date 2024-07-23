import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_6VmRHOk4.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"my-favorite-books\">My Favorite Books</h1>\n<p>Here are some of my all-time favorite books that I highly recommend:</p>\n<ol>\n<li>\n<p><strong>“To Kill a Mockingbird” by Harper Lee</strong>\r\nA classic novel that explores themes of racial injustice and moral growth.</p>\n</li>\n<li>\n<p><strong>“The Alchemist” by Paulo Coelho</strong>\r\nA captivating story about following your dreams and the journey of self-discovery.</p>\n</li>\n<li>\n<p><strong>“1984” by George Orwell</strong>\r\nA dystopian novel that remains relevant in its commentary on surveillance and government control.</p>\n</li>\n<li>\n<p><strong>“Pride and Prejudice” by Jane Austen</strong>\r\nA timeless romance novel with witty social commentary.</p>\n</li>\n<li>\n<p><strong>“The Hitchhiker’s Guide to the Galaxy” by Douglas Adams</strong>\r\nA hilarious and imaginative science fiction series that will make you laugh out loud.</p>\n</li>\n</ol>\n<p>I hope you enjoy these book recommendations as much as I have!</p>";

				const frontmatter = {"title":"My Favorite Books","image":"https://picsum.photos/seed/books/300/200","description":"A list of my top recommended books across various genres."};
				const file = "C:/Users/Arun/Documents/wiseconcern/src/content/blogs/My Favorite Books.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# My Favorite Books\r\n\r\nHere are some of my all-time favorite books that I highly recommend:\r\n\r\n1. **\"To Kill a Mockingbird\" by Harper Lee**\r\n   A classic novel that explores themes of racial injustice and moral growth.\r\n\r\n2. **\"The Alchemist\" by Paulo Coelho**\r\n   A captivating story about following your dreams and the journey of self-discovery.\r\n\r\n3. **\"1984\" by George Orwell**\r\n   A dystopian novel that remains relevant in its commentary on surveillance and government control.\r\n\r\n4. **\"Pride and Prejudice\" by Jane Austen**\r\n   A timeless romance novel with witty social commentary.\r\n\r\n5. **\"The Hitchhiker's Guide to the Galaxy\" by Douglas Adams**\r\n   A hilarious and imaginative science fiction series that will make you laugh out loud.\r\n\r\nI hope you enjoy these book recommendations as much as I have!\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"my-favorite-books","text":"My Favorite Books"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
