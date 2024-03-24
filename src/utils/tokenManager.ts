import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '~/env';

export const tokenGenerator = (userId: string) => jwt.sign({ userId }, env.JWT_SECRET, {
    expiresIn: '1h', // Set token expiration time as needed
});

export const validateJwtToken = (token: string) => {
    try {
        const decodedToken = jwt.verify(token, env.JWT_SECRET);

        // Optionally, you can perform additional checks on the decoded token, such as expiration time

        return decodedToken;
    } catch (error: any) {
        console.error('Error validating JWT token:', error.message);
        return null;
    }
}