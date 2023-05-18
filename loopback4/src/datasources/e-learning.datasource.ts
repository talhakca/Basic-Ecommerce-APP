import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';

const getDataSourceConnectionString = () => {
  return process.env.databaseConnectionString ?? '';
}

const config = {
  "name": "ELearningDataSource",
  "database": "ELearning",
  "connector": "mongodb",
  "url": "",
  "host": "",
  "port": "",
  "user": "",
  "password": "",
  "useNewUrlParser": true,
  };

@lifeCycleObserver('datasource')
export class ELearningDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'ELearningDataSource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.ELearningDataSource', {optional: true})
    dsConfig = config,
  ) {
    dsConfig.url = getDataSourceConnectionString();
    super(dsConfig);
  }
}