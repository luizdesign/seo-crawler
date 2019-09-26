module.exports = {
  extract: function extractLinkTag() {
    const tags = {
      link: [],
    };
    document.querySelectorAll('link[rel]').forEach(
      (element) => {
        tags.link.push({
          tag: 'link',
          href: element.href,
          rel: element.getAttribute('rel'),
        });
      },
    );

    return tags;
  },
};
