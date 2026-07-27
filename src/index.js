const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        app: 'insurance-claims-portal-nextjs-ts-v2026-31',
        category: 'Insurance Claims Automated Portal',
        tech: 'TypeScript / Next.js React App',
        status: 'active'
    });
});

app.listen(PORT, () => {
    console.log(`[insurance-claims-portal-nextjs-ts-v2026-31] Service listening on port ${PORT}`);
});
