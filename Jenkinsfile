pipeline{
  agent any
  
  stages {
    stage('build'){
      steps{
        echo "Build application"
        bat """
          npm install
        """
      }
    }
    stage('test'){
      steps{
        echo "Test application"
        bat """
          ng test --watch=false
        """
      }
    }
    stage('deploy'){
      steps{
        echo "Deploy application"
        bat """
         npm build --prod
         xcopy dist\\hello-angular G:\\NGINX\\html\\ /y /S /E /C
        """
      }
    }
  }
}
