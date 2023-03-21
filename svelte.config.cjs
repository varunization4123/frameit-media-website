const adapter = require('@sveltejs/adapter-netlify');
module.exports = {
    kit: {
        adapter: adapter(),
        target: '#svelte'
    }
};