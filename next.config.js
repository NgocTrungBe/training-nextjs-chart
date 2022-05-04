/** @type {import('next').NextConfig} */
const path = require('path');
const webpack = require('webpack');
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(process.env)
        )
        return config
    }
}

module.exports = nextConfig