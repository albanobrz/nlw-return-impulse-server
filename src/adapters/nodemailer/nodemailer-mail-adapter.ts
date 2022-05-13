import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "bd214d38d41c12",
        pass: "4d5d54b7848812"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
       to: 'Albano Braz <potato@gmail.com>',  /* colocar o email para que realmente seja enviado */
       subject: subject,
       html: body,
    })
    }
}