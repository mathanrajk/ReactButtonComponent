pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
        stage('Publish') {
            steps {
                withCredentials([string(credentialsId: 'NPM_TOKEN', variable: 'NPM_TOKEN')]) {
                    bat '''
                        echo //registry.npmjs.org/:_authToken=%NPM_TOKEN% > .npmrc
                        npm publish
                    '''
                }
            }
        }
    }
}