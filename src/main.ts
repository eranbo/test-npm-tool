async function main() {
    const packageJson = await import('../package.json');
    console.log('Hello World!, Version: ', packageJson.version, '');
}

main();