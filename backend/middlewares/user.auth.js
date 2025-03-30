import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
  }

  try {
    const tokenDecoded = jwt.verify(token, process.env.SECRET_KEY);

    if (tokenDecoded.id) {
      req.user = { id: tokenDecoded.id }; // ✅ Set correctly
    } else {
      return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
    }

    next(); // Proceed to next middleware
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default userAuth;
