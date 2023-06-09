import { AuthService } from "../service/AuthService";

export class AuthController {
    private service: AuthService;
    
    constructor() {
        this.service = new AuthService();
    }

    public signIn = async(req, res) => {
        try{

            const token = await this.service.signIn(req.body);

            if(token == null) {
               return res.status(401).json({
                    message: 'It was not possible to login',
                    details: 'Check your login and password before trying to login again',
                  });
            } else {
                return  res.status(200).json({
                    message: 'Login authorized.',
                    token: token,
                  });
            }

        } catch(error) {
            return res.status(500).json({ message: error.message });

        }

    }
     
}


