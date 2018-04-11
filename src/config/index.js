export const port = process.env.PORT || 3000;
export const env = process.env.NODE_ENV || 'development';

export const appSettings = {
    appName: 'Randomizr',
    gaTrackingId: (env === 'development') ? '' : '', // Google Analytics - uses a 'dev' account while we're testing
};

// Toggle Serverside rendering
export const SSR = false;
