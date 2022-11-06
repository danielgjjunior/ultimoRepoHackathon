const options = {
    method: 'POST',
    headers: {
        cookie: 'PHPSESSID=c1gjkjr606h9h1q1qqt01cs8d6',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
        grant_type: 'password',
        client_id: '2_57ajs62q8hgcsg0k8o4wg4wcwo8skksswswcs0co0cgww8wckk',
        client_secret: '3k6oyi30ch8gw0kk4wgkogs4s8gg08ckwoc4w8swc4ggkks0o8',
        username: 'admin',
        password: 'Hackathon2022'
    })
};

async function getToken() {
    try {
        const res = await fetch('https://sistemasga.nelltech.com.br/api/token', options);
        const result = await res.json();
        return Promise.resolve(result)
            .then((token) => token.access_token)
    } catch (e) {
        console.log.error;
    }
}