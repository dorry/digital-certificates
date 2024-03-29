import Api from './api'

export default {

queryAll(username) {
  return Api().post('queryAll',{
    username: username
  });
},

addCertificate(identity,certificateId, name , gpa, grade,screenshot, faculty , university) {
  return Api().post('addCertificate', {
      identity:identity,
      certificateId: certificateId,
      name: name,
      gpa: gpa,
      grade: grade,
      screenshot: screenshot,
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

  registerUser(identity) {
    return Api().post('registeruser', {
      identity: identity
    }) 
  },
}