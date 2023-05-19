const users = [{ id: 0, name: 'foo' }, { id: 1, name: 'bar' }]

module.exports = {
  get({ values }) {
    return [200, users.find(user => user.id === values.userId)]
  }
}