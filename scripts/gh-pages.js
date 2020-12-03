const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/tut-svelte-covid19-us',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/MichaelBrunn3r/tut-svelte-covid19-us.git',
        user: {
            name: 'MichaelBrunn3r',
            email: 'MichaelBrunn3r@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)