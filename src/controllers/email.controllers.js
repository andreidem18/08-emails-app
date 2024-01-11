const catchError = require('../utils/catchError');
const sendEmail = require('../utils/sendEmail');

const getAll = catchError(async(req, res) => {
    return res.json(/* valor a retornar */)
});

const email = catchError(async(req, res) => {
    await sendEmail({
        to: 'andres.mendoza@academlo.com',
        subject: 'Prueba desde node',
        html: `
            <h1>Estoy probando un titulo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere minus nisi sunt veritatis mollitia labore. Ut, eos dolorem porro consequatur, possimus iste sequi ex vel, rem nulla illum? Inventore.</p>
            <div style="color: red">Este texto es rojo</div>
        `,
    });
    return res.json({ message: "Email enviado" });
});

const contactEmail = catchError(async(req, res) => {
    const { name, email, phone, message } = req.body;
    await sendEmail({
        to: 'andres.mendoza@academlo.com',
        subject: 'Mensaje del portafolio!',
        html: `
            <h1>${name} te escribió desde tu portafolio!</h1>
            <p>${message}</p>
            <ul>
                <li>Email: ${email}</li>
                <li>Telefono: ${phone}</li>
            </ul>
        `
    });
    return res.json({ message: "Email enviado" });
})

module.exports = {
    getAll,
    email,
    contactEmail
}