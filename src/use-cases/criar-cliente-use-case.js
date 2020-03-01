module.exports = class CriarCliente {
  criar ({ nome, cnpj }) {
    if (!nome) {
      throw new Error('Nome não inserido')
    }

    return { nome, cnpj }
  }
}
