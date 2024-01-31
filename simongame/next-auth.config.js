export default {
    providers: [
      {
        id: 'github',
        name: 'GitHub',
        type: 'oauth',
        version: '2.0',
        scope: 'read:user', // Ajoutez les scopes nécessaires
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      },
      // Ajoutez d'autres fournisseurs si nécessaire
    ],
    // Ajoutez d'autres configurations si nécessaire
  }