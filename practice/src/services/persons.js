import axios from 'axios'

const url = '/api/persons'

const getAll = () => {
  const request = axios.get(url)
  return request.then((res) => res.data)
}

const createNew = (name, number, id) => {
  return axios
    .post(url, {
      name: name,
      number: number,
      id: id,
    })
}

const updatePerson = (foundPerson) => {
  const request = axios.put(`${url}/${foundPerson.id}`, foundPerson)
  return request.then((res) => res.data)
}

const deletePerson = (id) => {
  return axios.delete(`${url}/${id}`).catch((err) => console.log(err))
}

export default { getAll, createNew, updatePerson, deletePerson }
