import { mqtt } from 'aws-iot-device-sdk-v2';
const yargs = require('yargs');
const common_args = require('./cli_args');
type Args = { [index: string]: any };

yargs.command('*', false, (yargs: any) => {
    common_args.add_direct_connection_establishment_arguments(yargs);
    common_args.add_topic_message_arguments(yargs);
}, main).parse();

async function publish(connection: mqtt.MqttClientConnection, argv: Args) {
    const msg = {
        message: argv.message,
        group: argv.group,
        device: argv.device,
        time: new Date().toISOString(),
    };
    const json = JSON.stringify(msg);
    await connection.publish(argv.topic, json, mqtt.QoS.AtLeastOnce)
    console.log("Message delivered")
}

async function main(argv: Args) {
    common_args.apply_sample_arguments(argv);
    const connection = common_args.build_connection_from_cli_args(argv);
    await connection.connect()
    await publish(connection, argv)
    await connection.disconnect()
}
