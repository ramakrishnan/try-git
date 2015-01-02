module.exports = {
        options: {
            workspace: '/var/lib/jenkins/grunt_deploy/temp_deploy',
            deployTo: '/home/ram/grunt_deploy/actualCode',
            repositoryUrl: 'https://github.com/ramakrishnan/try-git.git',
            keepReleases: 5,
            ignores: ['.git', 'node_modules']
        },
        staging: {
            servers: ['localhost'],
            branch: 'master'
        }
    };
