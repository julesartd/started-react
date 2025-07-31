pipeline {
    agent any
    
    environment {
        AWS_DEFAULT_REGION = 'eu-west-3'
        CLOUDFRONT_DISTRIBUTION_ID = 'E378KC19I5UFN4'
        EC2_HOST = 'ec2-15-236-145-144.eu-west-3.compute.amazonaws.com'
        DEPLOY_PATH = '/app/dist/'
    }
    
    tools {
        nodejs 'NodeJS'
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm run build'
            }
        }
        
        stage('Deploy to EC2') {
            steps {
                echo 'Deploying to EC2 instance...'
                sshagent(['ec2-ssh-key']) {
                    sh """
                        # Créer l'archive des fichiers build
                        tar -czf dist.tar.gz -C dist .
                        
                        # Copier l'archive vers EC2
                        scp -o StrictHostKeyChecking=no dist.tar.gz ${EC2_HOST}:/tmp/
                        
                        # Déployer sur EC2 avec Nginx
                        ssh -o StrictHostKeyChecking=no ${EC2_HOST} '
                            sudo rm -rf ${DEPLOY_PATH}/*
                            cd /tmp
                            sudo tar -xzf dist.tar.gz -C ${DEPLOY_PATH}/
                            sudo chown -R nginx:nginx ${DEPLOY_PATH}
                            sudo chmod -R 644 ${DEPLOY_PATH}*
                            sudo find ${DEPLOY_PATH} -type d -exec chmod 755 {} \;
                            sudo nginx -t && sudo systemctl reload nginx
                            rm -f dist.tar.gz
                        '
                    """
                }
            }
        }
        
        stage('Invalidate CloudFront Cache') {
            steps {
                echo 'Invalidating CloudFront cache...'
                withAWS(region: "${AWS_DEFAULT_REGION}", credentials: 'aws-credentials') {
                    sh """
                        aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} --paths "/*"
                    """
                }
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: 'dist/**/*', allowEmptyArchive: false
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
        cleanup {
            cleanWs()
        }
    }
}
