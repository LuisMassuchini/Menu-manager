import * as jwt from 'jsonwebtoken';

export class Auth {
    private SECRET: jwt.Secret;

    constructor() {
        this.SECRET = process.env.SECRET;
    }
    public checkAuth = async (req, res, next) => {
    const authHeader = req.get('Authorization');

    if(!authHeader) {
      return res.status(403).send('unauthorized');
    }
    const token = authHeader.split(' ')[1];
  
    if (!token) {
      return res.status(401).send('Header error');
    }
    try {
      jwt.verify(token, this.SECRET, (error) => {
        if (error) {
          return res.status(403).send('unauthorized');
        }
        return token;
      });
  
      return next();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
}

  