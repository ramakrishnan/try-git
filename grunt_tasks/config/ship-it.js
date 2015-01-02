module.exports = {
        options: {
            workspace: '/var/lib/jenkins/grunt_deploy/temp_deploy',
            deployTo: '/home/ram/grunt_deploy/actualCode',
            repositoryUrl: 'https://github.com/ramakrishnan/try-git.git',
            keepReleases: 5,
            ignores: ['.git'],
	    key: '/var/lib/jenkins/.ssh/id_rsa'
        },
        staging: {
            servers: ['ram@localhost'],
            branch: 'master'
        }
    };
