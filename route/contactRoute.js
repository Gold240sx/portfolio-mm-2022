const router = require('express').Router()
const nodeMailer = require('nodemailer')

router.post('/contact',(req,res)=>{

    let data = req.body
    
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg: "!! Please fill out the fields !!"})
    }

    //create the transporter object
    let smtpTransporter = nodeMailer.createTransport({
        service: 'gmail',
        // port: 465,
        auth: {
            user:'240designworks@gmail.com',
            pass:'gethfsjylorjvvom'
        }
    })

    let mailOptions = {
        from: data.email,
        to: '240designworks@gmail.com',
        subject: `${data.name} is reaching out via your portfolio's contact form!`,
        html: `
            <h2>...Forwarded Message from Portfolio Contact Form</h2>
            
            <p> Sender's Name: ${data.name}<p/>
            <p> Original Sender's Email: ${data.email}<p/>


            <h3>Message<h3/>
            <p>"${data.message}"<p/>

            <p>-"${data.name}"</p>
        `
    }

    smtpTransporter.sendMail(mailOptions, (error)=>{
        try {
            if (error) 
            return res.status(400).json({msg: "!!Please fill in all the fields!! "})
            res.status(200).json({msg: 'Thank you for contacting Michael Martell!'})
        } catch (error) {
            if (error) return res.status(500).json({msg: "There is a server Error"})
        }
    })
})

module.exports=router


