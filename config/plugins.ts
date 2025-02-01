export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    // email: {
    //     config: {
    //         provider: 'postmark',
    //         providerOptions: {
    //             apiKey: env('POSTMARK_API_KEY'),
    //         },
    //         settings: {
    //             defaultFrom: env('POSTMARK_DEFAULT_FROM'),
    //             defaultReplyTo: env('POSTMARK_DEFAULT_REPLY_TO'),
    //         },
    //     },
    // },
});
