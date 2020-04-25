# Sentiment analysis API Rest

API Rest developed on NodeJs prepared to be deployed on an App Engine test environment.

Input required is a text (does not matter language) with UTF-8 charset.
Output is a simple JSON data, e.g.:
```
{
  "score": 0.8
  "magnitude": 0.75,
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus libero quis lectus consequat"
}
```

## Getting Started

These instructions will lead you to a correct deployment of the application on any Google Cloud App Engine environment

### Prerequisites

  - Make sure that Natural Language API is activated on the project you wish to deploy the service
  - Git, NodeJs and npm must be installed on your Cloud Shell
  - If it is the first deploy, clone the repository on your Cloud Shell. Please be aware to clone the repository with updates before any deployment

### Installing

In order to have a succesful deploy, App Engine requires some specific files:
  - app.yaml (serverless service configuration)
  - server.js (API Rest methods)
  - package.json (JavaScript modules)

If there is no node_modules directory, the following command must be executed:
```
npm install
```

## Deployment

To deploy the service, it is required to launch the following command on the same directory where app.yaml and server.js files are located:
```
gcloud app deploy
```

## Built With

* [Google Cloud Natural Language API](https://cloud.google.com/natural-language/) - Google's language interpreter models
* [Express](https://expressjs.com/) -  Web application framework
* [NodeJs](https://nodejs.org/en/) - JavaScript server framework
