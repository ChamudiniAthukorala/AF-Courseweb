const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

const Marks = require("../../models/MarksModel");

router.get("/test", (req, res) => res.json({ msg: "marks works" }));

router.get('/',function(req,res){
    Marks.find(function(err, marks){
        if(err){
            res.status(400).send(e);
        }
        else{
            res.json(marks);
        }
    })
})
//Get all marks per courser ID
router.get("/:courseId", (req,res)=>{
    let courseId = req.params.courseId;
    Marks.find({courseId}).then(mark=>{
        if(!mark)
            res.status(400).send('Not found courseID');
        else{
            res.json(mark);
        }
    });
});

//Get all marks per courser ID
router.get("/getByAssignmentId/:assignmentId", (req,res)=>{
    let  assignmentId = req.params.assignmentId;
    Marks.find({assignmentId}).then(marks=>{
        if(!marks)
            res.status(400).send('Not found assignment ID');
        else{
          res.json(marks);
        }
    });
});

//adding marks
router.post("/addMarks", (req,res)=>{
    let mark = new Marks(req.body);
    mark.save()
        .then(mark=>{
            res.status(200).json({'Marks':"Marks added"});
        })
        .catch(e=>{
            res.status(400).send(e);
        });
});

//update marks
router.put("/updateMarks/:id", (req,res)=>{
    Marks.findById(req.params.id, function(err, marks){
        if(!marks){
            res.status(400).send('Marks details not found');
        }
        else
            marks.courseId = req.body.courseId;
            marks.assignmentId = req.body.assignmentId;
            marks.studentId = req.body.studentId;
            marks.mark = req.body.mark;

            marks.save().then(marks=>{
                res.json('Marks updated');
            }).catch(err=>{
                res.status(400).send("Marks not updated")
            });
    });
});

module.exports = router;
