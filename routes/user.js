
exports.getsmscode = (req,res) => {
    res.json({
        code:1,
        message:'success',
        data:{
            status:1
        }
    })
}
exports.login = (req,res) => {
    res.json({
        code:666,
        message:'success',
        data:{
            token:'90EDidsfisd9E0eu8FUDie',
            refresh_token:'UYge98ERYbe9ENIJe0rjjjbhre890h'
        }
    })
}
exports.authorzations= (req,res) =>{
    res.json({
        code:1,
        message:'success',
        data:{
            token:'90EDidsfisd9E0eu8FUDie',
            refresh_token:'UYge98ERYbe9ENIJe0rjjjbhre890h'
        }
    })
}
exports.logout = (req,res) => {
    res.json({
    code:20000,
    data:'success'
})
}