module.exports = {
        options: {
            workspace: '/home/jenkins/grunt_deploy/temp_build',
            deployTo: '/home/rjenkins/grunt_deploy/actualCode',
            repositoryUrl: 'https://github.com/ramakrishnan/try-git.git',
            keepReleases: 5,
            ignores: ['.git', 'node_modules']
        },
        staging: {
            servers: ['ram@localhost'],
            branch: 'master'
        }
    };
