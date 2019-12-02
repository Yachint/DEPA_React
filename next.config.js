module.exports = {
    webpack: (config) => {
        return Object.assign({}, config, {
            node: {
                'arraybuffer-to-buffer': 'empty',
                'ipfs-api' : 'empty'
            }
        })
    },
};