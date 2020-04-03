import Api from './api'

export default {

//   queryAll() {
//     return Api().get('queryAll')
//   },

  addCertificate(certificateId, name , gpa, grade,screenshot) {
    return Api().post('addCertificate', {
        certificateId: certificateId,
        name: name,
        gpa: gpa,
        grade: grade,
        screenshot: screenshot
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