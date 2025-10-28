async function main() {
    const packageJson = await import('../package.json');
    console.log('Hello World!, Version: ', packageJson.version, '');
}

async function run(handler: () => Promise<void>) {
    await handler();
}

run(main);