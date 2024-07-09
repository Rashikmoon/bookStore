import User from "../modal/user.modal.js";
import bcryptjs from 'bcryptjs'
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const createdUser = new User({
      fullname,
      email,
      password,
    });

    // Save the user to the database
    await createdUser.save();

    // Respond with success and the user data
    res.status(201).json({ message: "User created successfully", user: createdUser });
  } catch (error) {
    console.error("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req,res) =>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({ message: "invalid username or password" });
        }else{
            res.status(200).json({message: "Login Successfull",user:{
                _id:user._id,
                fullname :user.fullname,
                email:user.email,
            }})
        }
    } catch (error) {
        console.log("Error " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
} 
