import User from "../model/User.js";

export const getAllUsers = async(req ,res) =>{
    const users = await User.find({});
    

    if(!users) throw new Error("Not found" , 400)

    res.send({
       data : users ,

    })
}




export const createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(200).send({
        success: true,
        data: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        data: error.message,
      });
    }
  };


  export const user = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) throw new Error("User not found", 400);
    res.send({
      data: user,
    });
  };

  

  export const updateUser = async (req , res ) => {
    try {
        const { id } = req.params;
        
        const user = await User.findByIdAndUpdate({_id: id} , res.body);
        res.status(200).send({
          success: true,
          data: user,
        });
      } catch (error) {
        res.status(400).send({
          success: false,
          data: error.message,
        });
      }
  }



  export const removeUser = async (req , res ) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndRemove({_id: id});
        res.status(200).send({
          success: true,
          data: user,
        });
      } catch (error) {
        res.status(400).send({
          success: false,
          data: error.message,
        });
      }
  }