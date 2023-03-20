const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// Os "middlear"
app.use(express.static('.')) // "sirva os arquivos staticos"
app.use(bodyParser.urlencoded({ extended: true })) // "se vier uma requisição, esse cod sera aplicado"
app.use(bodyParser.json()) // "ou seja, se vier um JSON esse cod sera aplicado"

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log("Executando..."))