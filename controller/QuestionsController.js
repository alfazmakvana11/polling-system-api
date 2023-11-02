const Question = require('../models/questions');
const Option = require('../models/options');

module.exports.create = async function(req, res) {
    // in this the question is created
    console.log(req.url);
    console.log(req.body);
    
    try {
        const ques = await Question.create(req.body);
        
        // Log the ID of the newly created Question
        console.log("Newly created Question ID:", ques._id);
                
        res.send(ques);
    } catch (err) {
        console.error("Error in creating the question schema", err);
        res.status(500).send("Internal Server Error");
    }
}

module.exports.showDetails = async function(req, res) {
    console.log(req.params.id);

    const ques = await Question.findById(req.params.id).populate('options')

    if (ques) {
        // Log the ID of the retrieved Question
        console.log("Retrieved Question ID:", ques._id);
                
        res.send(ques);
    }
    // handling the bad requests if that ID does not exist
    else {
        res.send("ID does not exist");
    }
}

module.exports.deleteQues = async function(req, res) {
    // in this the question will be deleted
    try {
        const ques = await Question.findById(req.params.id);
        
        if (ques) {
            // Log the ID of the deleted Question
            console.log("Deleted Question ID:", ques._id);

            // delete all the option of the option db having the question id as the req.params.id
            await Question.deleteOne({ _id: req.params.id });

            // deleting all the option of that question
            await Option.deleteMany({ question: req.params.id });

            res.json({ message: "Question deleted successfully" });
        } else {
            res.json({ message: "Question does not exist" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
}
