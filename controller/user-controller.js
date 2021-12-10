import User from '../model/userSchema.js';
import bcrypt from 'bcrypt';


export const userSignup = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).json('Username already exist');
        }

        const user = request.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;

        const newUser = new User(user);
        await newUser.save();

        response.status(200).json('User is successfully registered');
    } catch(error) {
        response.status(500).json(error);
    }
}


export const userLogin = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username });
        if(user) {
            const exist = bcrypt.compare(request.body.password, user.password);
            if(exist) {
                return response.status(200).json(`${request.body.username} logged in successfully`);
            } else {
                return response.status(401).json('Invalid login');
            }
        } else {
            return response.status(401).json('Invalid login');
        }
    } catch(error) {
        response.status(500).json(error);
    }
}
