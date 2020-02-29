const CriarCliente = require('./criar-cliente-use-case.js')

const criarCliente = new CriarCliente()

describe('Criar cliente', () => {
  it('should verifi if the jest is working', () => {
    expect(1 + 1).toBe(2)
  })

  it('should return a object cliente if nome and cnpj are provided', () => {
    const nome = 'valido'
    const cnpj = 'valido'
    expect(criarCliente.criar({ nome, cnpj })).toEqual({ nome, cnpj })
  })
})
