let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open')
}

function closeMenu(){
    ul.classList.remove('open')
}

const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

// Defina os scopes necessários
const scopes = [
  'https://www.googleapis.com/auth/gmail.send',
  // Outros scopes que você precisar
];

// Gere a URL de autenticação
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
});

