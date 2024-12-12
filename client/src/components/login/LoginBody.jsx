import React, { useRef, useState } from 'react';
import { FaUser, FaSync } from 'react-icons/fa';

const LoginBody = () => {
  const [captchaText, setCaptchaText] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [error, setError] = useState('');
  const canvasRef = useRef(null);

  // Generate a random CAPTCHA
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    return result;
  };

  // Draw CAPTCHA on Canvas
  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear previous CAPTCHA
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set background and text styles
    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial';
    ctx.fillStyle = '#333';

   
    for (let i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.strokeStyle = '#ccc';
      ctx.stroke();
    }

    
    ctx.fillText(text, 10, 25);
  };

  // Initialize CAPTCHA
  React.useEffect(() => {
    const text = generateCaptcha();
    drawCaptcha(text);
  }, []);

  // Handle CAPTCHA Reload
  const handleReloadCaptcha = () => {
    const text = generateCaptcha();
    drawCaptcha(text);
    setCaptchaInput('');
    setError('');
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput !== captchaText) {
      setError('Captcha does not match. Please try again.');
      return;
    }
    alert('Captcha validated! Proceeding with login.');
  };

  return (
    <div style={styles.backgroundWrapper}>
      <div style={styles.loginContainer}>
        {/* User Icon */}
        <div style={styles.userIconWrapper}>
          <FaUser style={styles.userIcon} />
        </div>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>
              User Name
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              style={styles.input}
            />
          </div>

          {/* Password Field */}
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              style={styles.input}
            />
          </div>

          {/* CAPTCHA */}
          <div style={styles.captchaGroup}>
            <canvas ref={canvasRef} width="150" height="40" style={styles.captchaCanvas}></canvas>
            <FaSync style={styles.reloadIcon} onClick={handleReloadCaptcha} />
            <input
              type="text"
              placeholder="Enter the characters"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              style={styles.captchaInput}
            />
          </div>
          {error && <div style={styles.error}>{error}</div>}

          {/* Login Button */}
          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.loginButton}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  backgroundWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: "url('/images/login-background.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  },
  loginContainer: {
    position: 'relative',
    backgroundColor: '#e6f7ff',
    borderRadius: '10px',
    padding: '40px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
    minHeight: '400px',
    margin: '0 auto',
  },
  userIconWrapper: {
    position: 'absolute',
    top: '-30px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '60px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    zIndex: '10',
  },
  userIcon: {
    fontSize: '30px',
    color: '#007bff',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  captchaGroup: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  captchaCanvas: {
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  captchaInput: {
    flexGrow: 1,
    marginLeft: '10px',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  reloadIcon: {
    marginLeft: '10px',
    fontSize: '20px',
    color: '#007bff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  reloadIconHover: {
    color: '#0056b3',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '-10px',
    marginBottom: '20px',
  },
  buttonGroup: {
    textAlign: 'center',
  },
  loginButton: {
    background: '#ff6600',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    transition: 'all 0.3s ease',
  },
};

export default LoginBody;
