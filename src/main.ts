import * as fs from 'fs/promises';
import * as path from 'path';

async function main() {
    const packageJsonPath = path.join(__dirname, '../package.json');
    const packageJsonContent = await fs.readFile(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);

    console.log('Hello World!, Version: ', packageJson.version, '');
}

async function run(handler: () => Promise<void>) {
    await handler();
}

run(main);