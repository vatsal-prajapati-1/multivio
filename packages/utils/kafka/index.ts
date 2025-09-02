import { Kafka, logLevel, SASLOptions } from 'kafkajs';

export const kafka = new Kafka({
  clientId: 'kafka-service',
  brokers: process.env.KAFKA_BROKERS!.split(','),
  ssl: true,
  sasl: {
    mechanism: 'scram-sha-256',
    username: process.env.KAFKA_USERNAME!,
    password: process.env.KAFKA_PASSWORD!,
  },
  logLevel: logLevel.INFO,
});
