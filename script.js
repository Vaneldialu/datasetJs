/**
 * Schéma  commande
 * {
 *   id: "",
 *   quantite : 0,
 *   prixUnitaire : 0,
 *   montant : 0,
 *   client : {
 *    id : "",
 *    prenom : "",
 *    nom : "",
 *    numero : "",
 *  },
 *    date: 0,
 *  }
 * }
 */

// const { faker } = require('@faker-js/faker');
// const fs = require('fs'); // Importation du module fs

// const generateBaseClient = (nbr = 3) => {
//     const data = [];
//     for (let index = 0; index < nbr; index++) {
//         data.push({
//             id: faker.string.uuid(),
//             prenom: faker.person.firstName(),
//             nom: faker.person.lastName(),
//             numero: faker.phone.number({ style: 'international' }),
//         });
//     }
//     return data;
// }

// const generateFakeDate = (nbr = 100) => {
//     const data = [];
//     const produits = ["Vodacom", "Airtel", "Orange", "Africell"];
//     const clients = generateBaseClient();
    
//     for (let index = 0; index < nbr; index++) {
//         const montant = parseInt(faker.finance.amount({ min: 1, max: 1000, dec: 0 }), 10);
//         const prixUnitaire = 0.945;
//         const quantite = parseInt(montant / prixUnitaire, 10);
        
//         data.push({
//             id: faker.string.uuid(),
//             produit: faker.helpers.arrayElement(produits), // Sélectionne un produit aléatoire
//             quantite,
//             prixUnitaire,
//             montant,
//             devise: "USD",
//             client: clients[faker.number.int({ min: 0, max: clients.length - 1 })], // Correction pour l'index du client
//             date: faker.date.between({ from: '2024-05-01T00:00:00.000Z', to: '2024-08-01T00:00:00.000Z' }),
//         });
//     }

//     return data;
// };


// // Génération des données et écriture dans un fichier JSON
// const fakeData = generateFakeDate(150);
// fs.writeFileSync('output.json', JSON.stringify(fakeData, null, 2), 'utf8'); // Écriture dans le fichier JSON
// // fs.writeFileSync('output.csv', csvData, 'utf8'); // Écriture dans le fichier csv

// console.log("Données générées et enregistrées dans output.json");



// les noms des produit sont rémplacer par des chiffres 

// const { faker } = require('@faker-js/faker');
// const fs = require('fs'); // Importation du module fs

// const generateBaseClient = (nbr = 50) => {
//     const data = [];
//     for (let index = 0; index < nbr; index++) {
//         data.push({
//             id: faker.string.uuid(),
//             prenom: faker.person.firstName(),
//             nom: faker.person.lastName(),
//             numero: faker.phone.number({ style: 'international' }),
//         });
//     }
//     return data;
// }

// const generateFakeDate = (nbr = 100) => {
//     const data = [];
//     const produits = ["Vodacom", "Airtel", "Orange", "Africell"];
//     const clients = generateBaseClient();
    
//     // Mapping of product names to numbers
//     const produitMapping = {
//         "Airtel": 1,
//         "Vodacom": 2,
//         "Orange": 3,
//         "Africell": 4
//     };
    
//     for (let index = 0; index < nbr; index++) {
//         const montant = parseInt(faker.finance.amount({ min: 1, max: 1000, dec: 0 }), 10);
//         const prixUnitaire = 0.945;
//         const quantite = parseInt(montant / prixUnitaire, 10);
        
//         const produitNom = faker.helpers.arrayElement(produits); // Sélectionne un produit aléatoire
        
//         data.push({
//             id: faker.string.uuid(),
//             produit: produitMapping[produitNom], // Remplacement par le numéro correspondant
//             quantite,
//             prixUnitaire,
//             montant,
//             devise: "USD",
//             client: clients[faker.number.int({ min: 0, max: clients.length - 1 })],
//             date: faker.date.between({ from: '2024-05-01T00:00:00.000Z', to: '2024-08-01T00:00:00.000Z' }),
//         });
//     }

//     return data;
// };

// // Génération des données et écriture dans un fichier JSON
// const fakeData = generateFakeDate(500);
// fs.writeFileSync('output.jsonl', JSON.stringify(fakeData, null, 2), 'utf8'); // Écriture dans le fichier JSON

// // Optionnel : Écriture dans un fichier CSV
// const csvData = fakeData.map(row => 
//     `${row.id},${row.produit},${row.quantite},${row.prixUnitaire},${row.montant},${row.devise},${JSON.stringify(row.client)},${row.date}`
// ).join('\n');

// fs.writeFileSync('output.csv', csvData, 'utf8'); // Écriture dans le fichier CSV

// console.log("Données générées et enregistrées dans output.json et output.csv");





// En generant un fichier json line
//__________________________________________


// const { faker } = require('@faker-js/faker');
// const fs = require('fs'); // Importation du module fs

// const generateBaseClient = (nbr = 50) => {
//     const data = [];
//     for (let index = 0; index < nbr; index++) {
//         data.push({
//             id: faker.string.uuid(),
//             prenom: faker.person.firstName(),
//             nom: faker.person.lastName(),
//             numero: faker.phone.number({ style: 'international' }),
//         });
//     }
//     return data;
// }

// const generateFakeDate = (nbr = 100) => {
//     const data = [];
//     const produits = ["Vodacom", "Airtel", "Orange", "Africell"];
//     const clients = generateBaseClient();
    
//     // Mapping des noms de produits vers des numéros
//     const produitMapping = {
//         "Airtel": 1,
//         "Vodacom": 2,
//         "Orange": 3,
//         "Africell": 4
//     };
    
//     for (let index = 0; index < nbr; index++) {
//         const montant = parseInt(faker.finance.amount({ min: 1, max: 1000, dec: 0 }), 10);
//         const prixUnitaire = 0.945;
//         const quantite = parseInt(montant / prixUnitaire, 10);
        
//         const produitNom = faker.helpers.arrayElement(produits); // Sélectionne un produit aléatoire
        
//         data.push({
//             id: faker.string.uuid(),
//             produit: produitMapping[produitNom], // Remplacement par le numéro correspondant
//             quantite,
//             prixUnitaire,
//             montant,
//             devise: "USD",
//             client: clients[faker.number.int({ min: 0, max: clients.length - 1 })],
//             date: faker.date.between({ from: '2024-05-01T00:00:00.000Z', to: '2024-08-01T00:00:00.000Z' }),
//         });
//     }

//     return data;
// };

// // Génération des données
// const fakeData = generateFakeDate(5000);

// // Écriture dans un fichier JSON Lines
// const jsonLinesData = fakeData.map(row => JSON.stringify(row)).join('\n');
// fs.writeFileSync('output.jsonl', jsonLinesData, 'utf8'); // Écriture dans le fichier JSONL

// // Optionnel : Écriture dans un fichier CSV
// const csvData = fakeData.map(row => 
//     `${row.id},${row.produit},${row.quantite},${row.prixUnitaire},${row.montant},${row.devise},${JSON.stringify(row.client)},${row.date}`
// ).join('\n');

// fs.writeFileSync('output.csv', csvData, 'utf8'); // Écriture dans le fichier CSV

// console.log("Données générées et enregistrées dans output.jsonl et output.csv");




//---------------------------------------------------------- Avec les entête


const { faker } = require('@faker-js/faker');
const fs = require('fs'); // Importation du module fs

const generateBaseClient = (nbr = 50) => {
    const data = [];
    for (let index = 0; index < nbr; index++) {
        data.push({
            id: faker.string.uuid(),
            prenom: faker.person.firstName(),
            nom: faker.person.lastName(),
            numero: faker.phone.number({ style: 'international' }),
        });
    }
    return data;
}

const generateFakeData = (nbr = 100) => {
    const data = [];
    const produits = ["Vodacom", "Airtel", "Orange", "Africell"];
    const clients = generateBaseClient();
    
    // Mapping des noms de produits vers des numéros
    const produitMapping = {
        "Airtel": 1,
        "Vodacom": 2,
        "Orange": 3,
        "Africell": 4
    };
    
    for (let index = 0; index < nbr; index++) {
        const montant = parseInt(faker.finance.amount({ min: 1, max: 1000, dec: 0 }), 10);
        const prixUnitaire = 0.945;
        const quantite = parseInt(montant / prixUnitaire, 10);
        
        const produitNom = faker.helpers.arrayElement(produits); // Sélectionne un produit aléatoire
        
        // Sélectionne un client aléatoire
        const client = clients[faker.number.int({ min: 0, max: clients.length - 1 })];

        data.push({
            id: faker.string.uuid(),
            produit: produitMapping[produitNom], // Remplacement par le numéro correspondant
            quantite,
            prixUnitaire,
            montant,
            devise: "USD",
            clientId: client.id, // Ajout de l'ID du client
            clientPrenom: client.prenom, // Ajout du prénom du client
            clientNom: client.nom, // Ajout du nom du client
            clientNumero: client.numero, // Ajout du numéro de téléphone du client
            date: faker.date.between({ from: '2024-05-01T00:00:00.000Z', to: '2024-08-01T00:00:00.000Z' }),
        });
    }

    return data;
};

// Génération des données
const fakeData = generateFakeData(5000);

// Écriture dans un fichier JSON Lines
const jsonLinesData = fakeData.map(row => JSON.stringify(row)).join('\n');
fs.writeFileSync('output.jsonl', jsonLinesData, 'utf8'); // Écriture dans le fichier JSONL

// Écriture dans un fichier CSV avec en-têtes
const csvHeaders = "id,produit,quantite,prixUnitaire,montant,devise,clientId,clientPrenom,clientNom,clientNumero,date\n"; // En-têtes CSV
const csvData = fakeData.map(row => 
    `${row.id},${row.produit},${row.quantite},${row.prixUnitaire},${row.montant},${row.devise},${row.clientId},${row.clientPrenom},${row.clientNom},${row.clientNumero},${row.date}`
).join('\n');

// Combiner les en-têtes et les données
const completeCsvData = csvHeaders + csvData;

fs.writeFileSync('output.csv', completeCsvData, 'utf8'); // Écriture dans le fichier CSV

console.log("Données générées et enregistrées dans output.jsonl et output.csv");