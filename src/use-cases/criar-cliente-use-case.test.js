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

  it('should return an error if no name is provided', () => {
    const cnpj = 'valido'
    expect(() => criarCliente.criar({ cnpj })).toThrow(new Error('Nome não inserido'))
  })

  it('should return an error if no name is provided', () => {
    const nome = 'valido'
    expect(() => criarCliente.criar({ nome })).toThrow(new Error('CNPJ não inserido'))
  })
})
