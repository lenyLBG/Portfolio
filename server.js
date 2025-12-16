const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configuration de l'email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Route pour envoyer un email
app.post('/api/send-email', async (req, res) => {
    const { user_name, user_email, subject, message } = req.body;

    // Validation
    if (!user_name || !user_email || !subject || !message) {
        return res.status(400).json({ 
            success: false, 
            error: 'Tous les champs sont requis' 
        });
    }

    try {
        // Email à vous
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Nouveau message: ${subject}`,
            html: `
                <h2>Nouveau message du formulaire de contact</h2>
                <p><strong>Nom:</strong> ${user_name}</p>
                <p><strong>Email:</strong> ${user_email}</p>
                <p><strong>Sujet:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        // Confirmation à l'utilisateur
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: user_email,
            subject: 'Merci pour votre message',
            html: `
                <h2>Merci ${user_name}!</h2>
                <p>J'ai bien reçu votre message et je vous répondrai très bientôt.</p>
                <br>
                <p>Cordialement</p>
            `
        });

        res.json({ 
            success: true, 
            message: 'Email envoyé avec succès' 
        });

    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur le port ${PORT}`);
});
