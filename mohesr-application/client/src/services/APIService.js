import Api from './api'

export default {

//   queryAll() {
//     return Api().get('queryAll')
//   },  

  addCertificate(identity,certificateId, name , gpa, grade,screenshot,faculty,university) {
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
  validateCertificate(identity,key) {

    return Api().post('validateCertificate', {
      identity:identity,
      key: key
    }) 

  },
  readCertificate(key) {
    return Api().post('readCertificate', {
      key: key
    }) 
  },
  validateWallet(identity) {
    console.log("APIService Identity" + identity);
    return Api().post('checkWallet', {
      identity: identity
    }) 
  },

}