module.exports = {
    extract: function extractTitle() {
        return {
            'title': {
                tag: 'title',
                content: document.title,
            },
        };
    },
};