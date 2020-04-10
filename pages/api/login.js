import auth0 from '../../libs/auth0';

const login = async (request, response) => {
  await auth0.handleLogin(request, response);
}

export default login
