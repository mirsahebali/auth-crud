require("dotenv").config()
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const code = router.query.code;

    if (code) {
      // Exchange code for access token
      fetch(`/api/auth/github?code=${code}`)
        .then((response) => response.json())
        .then((data) => {
          // Set user session
          sessionStorage.setItem('user', JSON.stringify(data.user));
          // Redirect to feed page
          router.push('/');
        })
        .catch((error) => console.error(error));
    }
  }, []);

  const handleLogin = () => {
    // Redirect user to Github authorization URL
    window.location = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}&scope=user`;
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Github</button>
    </div>
  );
};

export default Login;
