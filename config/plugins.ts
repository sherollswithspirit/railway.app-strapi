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
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('EMAIL_SMTP_HOST', 'smtp.example.com'),
                port: env('EMAIL_SMTP_PORT', 587),
                auth: {
                    user: env('EMAIL_SMTP_USER'),
                    pass: env('EMAIL_SMTP_PASS'),
                },
            },
            settings: {
                defaultFrom: env('EMAIL_ADDRESS_FROM', 'sherollswithspirit@gmail.com') ,
                defaultReplyTo: env('EMAIL_ADDRESS_REPLY', 'sherollswithspirit@gmail.com'),
            },
        },
    },
});
