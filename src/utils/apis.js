const apis = ()=>{
const local = 'http://localhost:5052';

const list = {
  rigisterUser: `${local}/user/rigister`,
  loginUser: `${local}/user/login`,
};
return list;
};
export default apis;

