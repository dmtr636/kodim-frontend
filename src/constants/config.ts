let domain = "https://kodim.space"
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    domain = "http://localhost:8000"
}

export {domain}


