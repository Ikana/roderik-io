import Ajv from 'ajv'
import { message } from 'antd'

const schema = {
  type: 'object',
  additionalProperties: true,
  $id: 'https://www.roderik.io/schemas/schema.json',
  properties: {
    assets: { $ref: 'assets.json#/definitions/asset' }
  },
  required: ['assets']
}

const assetsSchema = {
  $id: 'https://www.roderik.io/schemas/assets.json',
  definitions: {
    asset: {
      type: 'array',
      items: [{
        type: 'object',
        properties: {
          name: { type: 'string' },
          size: { type: 'number' },
          emitted: { type: 'boolean' },
          chunks: {
            type: 'array',
            items: [{ type: 'number' }]
          },
          chunkNames: {
            type: 'array',
            items: [{ type: 'string' }]
          }
        }
      }]
    }
  }
}

const ajv = new Ajv({ schemas: [schema, assetsSchema], allErrors: true })

const validate = ajv.getSchema('https://www.roderik.io/schemas/schema.json')

const readFile = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsText(file, 'UTF-8')
  reader.onload = (evt) => {
    try {
      const json = JSON.parse(evt.target.result)
      resolve(json)
    } catch (error) {
      reject(new Error('unrecognized format'))
    }
  }
  reader.onerror = () => {
    reject(new Error('error reading file'))
  }
})

export default file => readFile(file).then((json) => {
  // debugger;
  const valid = validate(json)
  console.log({ valid })
  if (!valid) console.log(ajv.errorsText())
}).catch((err) => {
  console.error(err)
  message.error(err.message)
})
