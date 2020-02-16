/*配置信息*/

/**
 * Defines the API route we are using.
 */
let api_url = '';

switch (process.env.NODE_ENV) {
    case 'development':
        api_url = 'http://roast.me/api/v1';
        break;
    case 'production':
        api_url = 'http://roast.com/api/v1';
        break;
}

export const ROAST_CONFIG = {
    API_URL: api_url,
}