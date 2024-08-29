import bcrypt from 'bcrypt';

// Variables
const bcryptHelper = {};

// Functions
bcryptHelper.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

bcryptHelper.comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Export
export default bcryptHelper;