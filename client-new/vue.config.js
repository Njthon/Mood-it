export default {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false,
                ws: false,
            }
        },
        port: 3000

    }
}