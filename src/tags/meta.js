module.exports = {
  extract: function extractMetatag() {
    const tags = {
      metatag: [],
    };
    document.querySelectorAll('meta[name]').forEach(
      (element) => {
        tags.metatag.push({
          tag: 'meta',
          name: element.name,
          content: element.content,
        });
      },
    );

    return tags;
  },
};
