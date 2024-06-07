const data=require ("../db.json")


exports.getDummyData = async (req, res) => {
    try {
      return res.status(200).json(data);
    } catch (err) {
     return  res.status(500).json(err);
    }
  };