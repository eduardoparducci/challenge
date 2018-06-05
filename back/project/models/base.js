const fs = require('fs')
const path = require('path')

const models = ['posts', 'users', 'reactions']

module.exports = {
    models: models,
    init: (mongoose) => {
        models.forEach((model) => {
            module.exports[model] = mongoose.model(model, require(`./${model}/schema`))
        })
    }
}