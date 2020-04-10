import auth0 from '../../libs/auth0';

const logout = async (req, res) => {
  await auth0.handleLogout(req, res);
}

export default logout