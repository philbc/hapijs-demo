
exports.plugin = {
    name: 'jwt-auth',
    register: async (server, options) => {

        server.auth.strategy('jwt', 'jwt', {
            keys: options.key,
            verify: false,
            validate: (artifacts, request, h) => {

                return {
                    isValid: true,
                    credentials: {
                        id: artifacts.decoded.payload.id
                    }
                };
            }
        });

        server.auth.default('jwt');
    }
};
