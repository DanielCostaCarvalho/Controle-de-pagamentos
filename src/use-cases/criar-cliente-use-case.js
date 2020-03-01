module.exports = class CriarCliente {
  criar ({ nome, cnpj }) {
    if (!nome) {
      throw new Error('Nome não inserido')
    }

    if (!cnpj) {
      throw new Error('CNPJ não inserido')
    }

    return { nome, cnpj }
  }
}
