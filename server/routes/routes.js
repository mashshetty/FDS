const router = require("express").Router();
const fdlist = require("../models/mod.js");
const order = require("../models/order.js");
const { models } = require("mongoose");
const porder = require("../models/placedorder.js");
const shop = require("../models/shop.js");
const lotus = require("../models/lotus.js");
const shreesai = require("../models/shreesai.js");
const shambavan = require("../models/shambavan.js");
const scs = require("../models/sujathacs.js");
const amra = require("../models/amra.js");
const maruthi = require("../models/maruthi.js");
const onof = require("../models/onof.js");
const mixdata = require("../models/mixdata.js");
const veg = require("../models/vegetables.js");
const kushm = require("../models/kushm.js");
const laxmi = require("../models/laxmi.js");

const accountSid = "ACe60e202d0388e9fdfe7ddda09c5bc21d";
const authToken = "a42ba0725f85e0f579e8e6a83c2d94de";
const client = require("twilio")(accountSid, authToken);

var nodemailer = require('nodemailer');

router.get("/foodlist", async (req, res) => {
  try {
    const data = await fdlist.find({});
    res.status(200).json(data);
  } catch (err) {
    res.json(err);
  }
});

router.post("/foodlist", async (req, res) => {
  try {
    const data = await new fdlist(req.body);
    const saveitem = data.save();
    res.status(200).json(saveitem);
  } catch (err) {
    res.json(err);
  }
});

router.post("/order", async (req, res) => {
  try {


    // client.messages
    // .create({
    //    body: `Please Check order list...You have order from  `+ req.body.name + ` he/she ordered some Item from shop ` + req.body.shopname ,
    //    to: '+918652162047',
    //    from: '+19706959653'
    //  })
    // .then(message => console.log(message.sid))
    // .done();





    






    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vitheshshetty555@gmail.com',
        pass: 'xpntjmmcjeleqsdr'
      }
    });

    
    
    var mailOptions = {
      from: 'vitheshshetty555@gmail.com',
      to: 'vitheshshetty9@gmail.com,sunilat3@gmail.com,veeramiranda77@gmail.com,sukshitha30@gmail.com',
      subject: 'You have new orders!!!',
      text: `Please Check order list...You have order from  `+ req.body.name + ` he/she ordered some Item from shop ` + req.body.shopname
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });










    

    const data = await new order(req.body);
    const saveitem = data.save();
    res.status(200).json(saveitem);
  } catch (err) {
    res.json(err);
  }
});

router.get("/order", async (req, res) => {
  try {
    console.log("orders trigger")
    const data = await order.find({});
  
    res.status(200).json(data);

  } catch (err) {
    res.json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await fdlist.findByIdAndDelete(req.params.id);
    res.status(200).json("Item Deleted");
  } catch (err) {
    res.json(err);
  }
});

router.delete("/orders/:id", async (req, res) => {
  try {
    const data = await order.findByIdAndDelete(req.params.id);
    res.status(200).json("Item Deleted");
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await fdlist.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).json(data);
  } catch (err) {
    res.status(200).json(err);
  }
});

router.post("/placedorder", async (req, res) => {
  try {
    const data = await new porder(req.body);
    const saveitem = data.save();
    res.status(200).json(saveitem);
  } catch (err) {
    res.json(err);
  }
});

router.get("/placedorder", async (req, res) => {
  try {
    const data = await porder.find({});
    res.status(200).json(data);
  } catch (err) {
    res.json(err);
  }
});


router.post("/addshop", async (req, res) => {
    try {
      const data = await new shop(req.body);
      const saveitem = data.save();
      res.status(200).json(saveitem);
    } catch (err) {
      res.json(err);
    }
  });


  router.get("/getshops", async (req, res) => {
    try {
      const data = await shop.find({});
      res.status(200).json(data);
    } catch (err) {
      res.json(err);
    }
  });



  router.put("/shop/:id", async (req, res) => {
    try {
      const data = await shop.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
  
      res.status(200).json(data);
    } catch (err) {
      res.status(200).json(err);
    }
  });


  router.delete("/shop/:id", async (req, res) => {
    try {
      const data = await shop.findByIdAndDelete(req.params.id);
      res.status(200).json("Item Deleted");
    } catch (err) {
      res.json(err);
    }
  });























  router.post("/lotus", async (req, res) => {
    try {
      const data = await new lotus(req.body);
      const saveitem = data.save();
      res.status(200).json(saveitem);
    } catch (err) {
      res.json(err);
    }
  });

  router.get("/lotus", async (req, res) => {
    try {
      const data = await lotus.find({});
      res.status(200).json(data);
    } catch (err) {
      res.json(err);
    }
  });

  router.put("/lotus/:id", async (req, res) => {
    try {
      const data = await lotus.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
  
      res.status(200).json(data);
    } catch (err) {
      res.status(200).json(err);
    }
  });


  router.delete("/lotus/:id", async (req, res) => {
    try {
      const data = await lotus.findByIdAndDelete(req.params.id);
      res.status(200).json("Item Deleted");
    } catch (err) {
      res.json(err);
    }
  });





  router.post("/shreesai", async (req, res) => {
    try {
      const data = await new shreesai(req.body);
      const saveitem = data.save();
      res.status(200).json(saveitem);
    } catch (err) {
      res.json(err);
    }
  });

  router.get("/shreesai", async (req, res) => {
    try {
      const data = await shreesai.find({});
      res.status(200).json(data);
    } catch (err) {
      res.json(err);
    }
  });


  router.put("/shreesai/:id", async (req, res) => {
    try {
      const data = await shreesai.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
  
      res.status(200).json(data);
    } catch (err) {
      res.status(200).json(err);
    }
  });


  router.delete("/shreesai/:id", async (req, res) => {
    try {
      const data = await shreesai.findByIdAndDelete(req.params.id);
      res.status(200).json("Item Deleted");
    } catch (err) {
      res.json(err);
    }
  });










  router.post("/shambavan", async (req, res) => {
    try {
      const data = await new shambavan(req.body);
      const saveitem = data.save();
      res.status(200).json(saveitem);
    } catch (err) {
      res.json(err);
    }
  });

  router.get("/shambavan", async (req, res) => {
    try {
      const data = await shambavan.find({});
      res.status(200).json(data);
    } catch (err) {
      res.json(err);
    }
  });


  router.put("/shambavan/:id", async (req, res) => {
    try {
      const data = await shambavan.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
  
      res.status(200).json(data);
    } catch (err) {
      res.status(200).json(err);
    }
  });

  router.delete("/shambavan/:id", async (req, res) => {
    try {
      const data = await shambavan.findByIdAndDelete(req.params.id);
      res.status(200).json("Item Deleted");
    } catch (err) {
      res.json(err);
    }
  });








  router.post("/scs", async (req, res) => {
    try {
      const data = await new scs(req.body);
      const saveitem = data.save();
      res.status(200).json(saveitem);
    } catch (err) {
      res.json(err);
    }
  });

  router.get("/scs", async (req, res) => {
    try {
      const data = await scs.find({});
      res.status(200).json(data);
    } catch (err) {
      res.json(err);
    }
  });


  router.put("/scs/:id", async (req, res) => {
    try {
      const data = await scs.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
  
      res.status(200).json(data);
    } catch (err) {
      res.status(200).json(err);
    }
  });

  router.delete("/scs/:id", async (req, res) => {
    try {
      const data = await scs.findByIdAndDelete(req.params.id);
      res.status(200).json("Item Deleted");
    } catch (err) {
      res.json(err);
    }
  });















  router.post("/amra", async (req, res) => {
    try {
      const data = await new amra(req.body);
      const saveitem = data.save();
      res.status(200).json(saveitem);
    } catch (err) {
      res.json(err);
    }
  });

  router.get("/amra", async (req, res) => {
    try {
      const data = await amra.find({});
      res.status(200).json(data);
    } catch (err) {
      res.json(err);
    }
  });


  router.put("/amra/:id", async (req, res) => {
    try {
      const data = await amra.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
  
      res.status(200).json(data);
    } catch (err) {
      res.status(200).json(err);
    }
  });

  router.delete("/amra/:id", async (req, res) => {
    try {
      const data = await amra.findByIdAndDelete(req.params.id);
      res.status(200).json("Item Deleted");
    } catch (err) {
      res.json(err);
    }
  });














  router.post("/maruthi", async (req, res) => {
    try {
      const data = await new maruthi(req.body);
      const saveitem = data.save();
      res.status(200).json(saveitem);
    } catch (err) {
      res.json(err);
    }
  })
  router.get("/maruthi", async (req, res) => {
    try {
      const data = await maruthi.find({});
      res.status(200).json(data);
    } catch (err) {
      res.json(err);
    }
  });


  router.put("/maruthi/:id", async (req, res) => {
    try {
      const data = await maruthi.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
  
      res.status(200).json(data);
    } catch (err) {
      res.status(200).json(err);
    }
  });

  router.delete("/maruthi/:id", async (req, res) => {
    try {
      const data = await maruthi.findByIdAndDelete(req.params.id);
      res.status(200).json("Item Deleted");
    } catch (err) {
      res.json(err);
    }
  });














  


  router.post("/onof", async (req, res) => {
    try {
      const data = await new onof(req.body);
     
      const saveitem = data.save();
      res.status(200).json(saveitem);
    } catch (err) {
      res.json(err);
    }
  })
  router.get("/onof", async (req, res) => {
    try {
      const data = await onof.find({});
      console.log("on of trigger")
      res.status(200).json(data);
    } catch (err) {
      res.json(err);
    }
  });

  router.put("/onof/:id", async (req, res) => {
    try {
      const data = await onof.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
  
      res.status(200).json(data);
    } catch (err) {
      res.status(200).json(err);
    }
  });

















  router.post("/mixdata", async (req, res) => {
    try {
      const data = await new mixdata(req.body);
      const saveitem = data.save();
      res.status(200).json(saveitem);
    } catch (err) {
      res.json(err);
    }
  })
  router.get("/mixdata", async (req, res) => {
    try {
      const data = await mixdata.find({});
      res.status(200).json(data);
    } catch (err) {
      res.json(err);
    }
  });


  router.put("/mixdata/:id", async (req, res) => {
    try {
      const data = await mixdata.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
  
      res.status(200).json(data);
    } catch (err) {
      res.status(200).json(err);
    }
  });

  router.delete("/mixdata/:id", async (req, res) => {
    try {
      const data = await mixdata.findByIdAndDelete(req.params.id);
      res.status(200).json("Item Deleted");
    } catch (err) {
      res.json(err);
    }
  });


















  

  router.post("/veg", async (req, res) => {
    try {
      const data = await new veg(req.body);
      const saveitem = data.save();
      res.status(200).json(saveitem);
    } catch (err) {
      res.json(err);
    }
  })
  router.get("/veg", async (req, res) => {
    try {
      const data = await veg.find({});
      res.status(200).json(data);
    } catch (err) {
      res.json(err);
    }
  });


  router.put("/veg/:id", async (req, res) => {
    try {
      const data = await veg.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
  
      res.status(200).json(data);
    } catch (err) {
      res.status(200).json(err);
    }
  });

  router.delete("/veg/:id", async (req, res) => {
    try {
      const data = await veg.findByIdAndDelete(req.params.id);
      res.status(200).json("Item Deleted");
    } catch (err) {
      res.json(err);
    }
  });



















  
  router.post("/kushm", async (req, res) => {
    try {
      const data = await new kushm(req.body);
      const saveitem = data.save();
      res.status(200).json(saveitem);
    } catch (err) {
      res.json(err);
    }
  })
  router.get("/kushm", async (req, res) => {
    try {
      const data = await kushm.find({});
      res.status(200).json(data);
    } catch (err) {
      res.json(err);
    }
  });




  router.put("/kushm/:id", async (req, res) => {
    try {
      const data = await kushm.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
  
      res.status(200).json(data);
    } catch (err) {
      res.status(200).json(err);
    }
  });

  router.delete("/kushm/:id", async (req, res) => {
    try {
      const data = await kushm.findByIdAndDelete(req.params.id);
      res.status(200).json("Item Deleted");
    } catch (err) {
      res.json(err);
    }
  });




  router.post("/laxmi", async (req, res) => {
    try {
      const data = await new laxmi(req.body);
      const saveitem = data.save();
      res.status(200).json(saveitem);
    } catch (err) {
      res.json(err);
    }
  })
  router.get("/laxmi", async (req, res) => {
    try {
      const data = await laxmi.find({});
      res.status(200).json(data);
    } catch (err) {
      res.json(err);
    }
  });




  router.put("/laxmi/:id", async (req, res) => {
    try {
      const data = await laxmi.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
  
      res.status(200).json(data);
    } catch (err) {
      res.status(200).json(err);
    }
  });

  router.delete("/laxmi/:id", async (req, res) => {
    try {
      const data = await laxmi.findByIdAndDelete(req.params.id);
      res.status(200).json("Item Deleted");
    } catch (err) {
      res.json(err);
    }
  });









module.exports = router;
