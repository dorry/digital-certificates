import Api from './api'

export default {

    queryAll(username) {
     return Api().get('queryAll',{ 
       username: username,
     })
    },

  addCertificate(certificateId, name , gpa, grade) {
    return Api().post('addCertificate', {
        certificateId: certificateId,
        name: name,
        gpa: gpa,
        grade: grade,
        faculty: faculty,
        university: university
    }) 
  },
//   registerVoter(voterId, registrarId, firstName, lastName) {
//     return Api().post('registerVoter', {
//       voterId: voterId,
//       registrarId: registrarId,
//       firstName: firstName,
//       lastName: lastName,
      
//     }) 
//   },
  validateCertificate(key) {
    return Api().post('validateCertificate', {
      key: key
    }) 
  },
  readCertificate(key) {
    return Api().post('readCertificate', {
      key: key
    }) 
  },
  validateWallet(username) {
    return Api().post('checkWallet', {
      username: username
    }) 
  },

}