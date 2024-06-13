# MQTT publisher

Modified version of https://github.com/aws/aws-iot-device-sdk-js-v2/tree/main/samples/node/pub_sub

Publishes a message to AWS IoT core MQTT topic.

To use the application one needs to provide following application specific parameters

- topic - MQTT topic where to publish the message
- group - Group of devices. This could be a city, country, customer or some other segment of devices.
- device - Device identifier

And the following device Authentication parameters.

- endpoint - api endpoint for mqtt broker
- cert - device certificate
- key - device key
- ca_file - Certificate Authority file (CA)

Credential files are device specific and are available at AWS IoT Core portal.

## How to install & run

``` sh
npm install
npm run tsc
node dist/index.js --endpoint <endpoint> --cert <file> --key <file> --ca_file <file> --topic <topic> --group <group> --device <device>
```