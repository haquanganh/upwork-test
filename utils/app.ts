const getCurrentDomain = (): string => {
  if (typeof window !== 'undefined') {
    // Running on client
    return window.location.origin;
  } else {
    // Running on server
    // Use dynamic require to avoid bundling issues
    const { headers } = require('next/headers');
    const h = headers();
    const host = h.get('host');
    return host;
  }
};

export { getCurrentDomain };
