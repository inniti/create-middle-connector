#!/usr/bin/env node

const esbuild = require('esbuild');

const cliArguments = process.argv.slice(2);

const config = {
    entryPoints: ['./src/index.js'],
    bundle: true,
    platform: 'node',
    outfile: './dist/index.js',
    external: ['@inniti/middle', 'dotenv', 'graphql-tag']
};

if (cliArguments.includes('--watch')) {
    config.watch = {
        onRebuild(error, result) {
            if (error) {
                console.error('[build] failed:', error);
            } else {
                console.log('[build] successful');
            }
        }
    };
}

esbuild.build(config).catch(() => process.exit(1))
