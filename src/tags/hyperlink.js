module.exports = {
  extract: function extractHyperlink() {
    const tags = {
      hyperlink: [],
    };

    document.querySelectorAll('a[href]').forEach(
      (element) => {
        tags.hyperlink.push({
          tag: 'a',
          href: element.href,
          target: element.target,
        });
      },
    );

    return tags;
  },
};
