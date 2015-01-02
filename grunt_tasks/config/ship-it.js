module.exports = {
        options: {
            workspace: '/home/ram/grunt_deploy/temp_deploy',
            deployTo: '/home/ram/grunt_deploy/actualCode',
            repositoryUrl: 'https://github.com/ramakrishnan/try-git.git',
            keepReleases: 5,
            ignores: ['.git', 'node_modules']
        },
        staging: {
            servers: ['ram@localhost'],
            branch: 'master'
        }
    };
