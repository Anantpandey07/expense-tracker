const IncomeSchema = require("../models/IncomeModel")

exports.addIncome = async (req, res) =>{
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        // validations
        if(!title || !amount || !category || !description || !date){
            return res.status(400).json({error: 'All fields are required!!'})
        }

        if(amount < 0 || !amount === 'number'){
            return res.status(400).json({error: 'amount should be positive'})
        }

        await income.save()
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error '})
    }
}

exports.getIncomes = async (req, res) =>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1}) // sort (recent at first)
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'server error'})
    }
}

exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id).then((income) => {
        res.status(200).json({message: 'Income Deleted'})
    })
    .catch((error) =>{
        res.status(500).json({message: 'server error'})
    })
}