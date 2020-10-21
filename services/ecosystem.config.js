const MQService = require("./MQService");

module.exports = {	
  apps: [
    { 
      name: 'API',
      script: 'index.js',
      exec_mode: 'cluster_mode',
      instances: 'max',
      env: { NODE_ENV: 'production' }
    },
    {
      name: 'MQService',
      args: 'consumeFromQueue',
      exec_mode: 'fork',
      watch: false,
      script: 'service/MQService.js',
      instances: 1
      
    }
  ]
};