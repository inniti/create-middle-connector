const fs = require('fs');
const path = require('path');

const baseSchemaLinkFileName = 'middle.graphql.json';
const baseSchemaLinkPath = path.join(__dirname, baseSchemaLinkFileName);
try {
    if (!fs.existsSync(baseSchemaLinkPath)) {
        fs.symlinkSync(path.join(__dirname, 'node_modules', '@inniti', 'middle', 'graphql.schema.json'), baseSchemaLinkFileName, 'file');
        console.log('Created symlink to base middle GraphQL schema');
    } else {
        const stats = fs.lstatSync(baseSchemaLinkPath);
        if (!stats.isSymbolicLink()) {
            throw Error(`File ${baseSchemaLinkPath} already exists, but is no symlink.`);
        }
    }
} catch (err) {
    console.error('ERROR', err.message);
    process.exit(1);
}
